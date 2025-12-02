"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Message sent successfully! I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="block mb-1 font-medium">
          Name
        </label>
        <input
          type="text"
          id="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border border-black/10 dark:border-white/10 rounded bg-background"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block mb-1 font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border border-black/10 dark:border-white/10 rounded bg-background"
          placeholder="Your email"
        />
      </div>
      <div>
        <label htmlFor="message" className="block mb-1 font-medium">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 border border-black/10 dark:border-white/10 rounded bg-background"
          placeholder="Your message"
        ></textarea>
      </div>
      {submitStatus.type && (
        <div
          className={`p-3 rounded ${
            submitStatus.type === "success"
              ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200"
              : "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200"
          }`}
        >
          {submitStatus.message}
        </div>
      )}
      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-full bg-foreground text-background px-6 py-2 font-medium hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

