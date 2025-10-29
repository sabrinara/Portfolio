"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function ContactMe() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Message Sent!", {
          description: "Thanks for reaching out — I'll get back to you soon.",
        });
        setForm({ fullName: "", email: "", subject: "", message: "" });
      } else {
        toast.error("Failed to send message", {
          description: data.message || "Something went wrong.",
        });
      }
    } catch {
      toast.warning("Network Error", {
        description: "Please check your internet connection.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-3xl font-semibold text-center mb-8 text-text">
        Contact <span className="text-hovertext">Me</span>
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="fullName"
          placeholder="Your Full Name"
          value={form.fullName}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          name="subject"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          className="w-full border p-2 rounded h-32"
          required
        />
        <Button
          type="submit"
          disabled={loading}
          className="bg-secondary text-white px-4 py-2 rounded w-full transition"
        >
          {loading ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </div>
  );
}
