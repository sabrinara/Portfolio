import nodemailer from "nodemailer";
import { RateLimiterMemory } from "rate-limiter-flexible";

export const runtime = "nodejs"; // ensure Next.js uses Node runtime even under Bun

// 🕐 In-memory rate limiter — 3 requests per IP per 10 minutes
const rateLimiter = new RateLimiterMemory({
  points: 3,
  duration: 600, // 10 minutes
});

export async function POST(req: Request): Promise<Response> {
  try {
    // ✅ Parse body
    const body = await req.json();
    const { fullName, email, subject, message } = body;

    // 🔒 Validate inputs
    if (!fullName || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ success: false, message: "All fields are required." }),
        { status: 400 }
      );
    }

    // 🧠 Get IP for rate limiting
    const ip =
      req.headers.get("x-forwarded-for") ||
      req.headers.get("x-real-ip") ||
      "unknown";

    try {
      await rateLimiter.consume(ip); // throws if exceeded
    } catch {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Too many requests. Please wait before trying again.",
        }),
        { status: 429 }
      );
    }

    // ✉️ Setup Gmail transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // ✅ Email to YOU (site owner)
    const ownerMail = {
      from: `"${fullName}" <${email}>`,
      to: process.env.GMAIL_USER,
      subject: `New Contact Form: ${subject}`,
      html: `
        <h3>A New Mail from SABRINA_RASHID Website</h3>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // ✅ Confirmation email to user
    const confirmationMail = {
      from: `"${process.env.SITE_NAME || "SABRINA_RASHID"}" <${
        process.env.GMAIL_USER
      }>`,
      to: email,
      subject: "Thanks for contacting us!",
      html: `
        <h3>Hello ${fullName},</h3>
        <p>Thanks for reaching out. I’ve received your message and will get back to you shortly.</p>
        <br/>
        <p><strong>Your message:</strong></p>
        <p>${message}</p>
        <br/>
        <p>Best regards,<br/>${
          process.env.SITE_NAME || "SABRINA_RASHID "
        } Team</p>
      `,
    };

    // 🚀 Send both emails
    await transporter.sendMail(ownerMail);
    await transporter.sendMail(confirmationMail);

    return new Response(
      JSON.stringify({ success: true, message: "Emails sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Error sending email:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Failed to send email" }),
      { status: 500 }
    );
  }
}
