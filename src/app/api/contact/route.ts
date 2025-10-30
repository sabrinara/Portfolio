import nodemailer from "nodemailer";
import { RateLimiterMemory } from "rate-limiter-flexible";
import dns from "dns/promises";

export const runtime = "nodejs";

const rateLimiter = new RateLimiterMemory({
  points: 3, // Max 3 requests
  duration: 600, // per 10 minutes
});

// ✅ Lightweight email validator (regex + MX lookup)
async function isEmailValid(email: string): Promise<boolean> {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email)) return false;

  const domain = email.split("@")[1];
  try {
    const records = await dns.resolveMx(domain);
    return records && records.length > 0;
  } catch {
    return false;
  }
}

export async function POST(req: Request): Promise<Response> {
  try {
    const body = await req.json();
    const { fullName, email, subject, message } = body;

    if (!fullName || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ success: false, message: "All fields are required." }),
        { status: 400 }
      );
    }

    // ✅ Validate email (syntax + MX)
    const valid = await isEmailValid(email);
    if (!valid) {
      return new Response(
        JSON.stringify({ success: false, message: "Invalid email address or domain." }),
        { status: 400 }
      );
    }

    // ✅ Rate limit by IP
    const ip =
      req.headers.get("x-forwarded-for") ||
      req.headers.get("x-real-ip") ||
      "anonymous";
    await rateLimiter.consume(ip);

    // ✅ Create secure transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Owner mail
    const ownerMail = {
      from: `"${fullName}" <${email}>`,
      to: process.env.GMAIL_USER,
      subject: `New Contact Form: ${subject}`,
      html: `
        <h3>New message from your portfolio website</h3>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p>${message}</p>
      `,
    };

    // Confirmation mail
    const confirmationMail = {
      from: `"${process.env.SITE_NAME || "Portfolio"}" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "Thank you for your message!",
      html: `
        <p>Hi ${fullName},</p>
        <p>Thanks for reaching out! I’ve received your message and will reply soon.</p>
        <hr/>
        <p><strong>Your message:</strong><br/>${message}</p>
      `,
    };

    await transporter.sendMail(ownerMail);
    await transporter.sendMail(confirmationMail);

    return new Response(
      JSON.stringify({ success: true, message: "Message sent successfully." }),
      { status: 200 }
    );
  } catch (err: any) {
    console.error("❌ Error in contact API:", err);
    return new Response(
      JSON.stringify({ success: false, message: "Failed to send message." }),
      { status: 500 }
    );
  }
}
