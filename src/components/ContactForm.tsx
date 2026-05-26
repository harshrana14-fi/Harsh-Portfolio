"use client";
import React from "react";

export default function ContactForm({ initialEmail = "" }: { initialEmail?: string }) {
  const [status, setStatus] = React.useState<"idle" | "sending" | "sent" | "error">("idle");
  const [email, setEmail] = React.useState(initialEmail);

  React.useEffect(() => {
    setEmail(initialEmail);
  }, [initialEmail]);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value || "";
    const subject = (form.elements.namedItem("subject") as HTMLInputElement)?.value || "General Inquiry";
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value || "";

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || data.ok === false) throw new Error("Failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={onSubmit} className="mt-6 grid gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input name="name" placeholder="your name" className="rounded-lg border border-white/10 bg-[#0c0c0e] px-3 py-3 text-white/90 placeholder:text-white/40 focus:outline-none focus:border-white/30" required />
        <input 
          type="email" 
          name="email" 
          placeholder="yourname@example.com" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-lg border border-white/10 bg-[#0c0c0e] px-3 py-3 text-white/90 placeholder:text-white/40 focus:outline-none focus:border-white/30" 
          required 
        />
      </div>
      <input name="subject" placeholder="Project Discussion" className="rounded-lg border border-white/10 bg-[#0c0c0e] px-3 py-3 text-white/90 placeholder:text-white/40 focus:outline-none focus:border-white/30" />
      <textarea name="message" placeholder="Tell me about your project..." className="rounded-lg border border-white/10 bg-[#0c0c0e] px-3 py-3 min-h-40 text-white/90 placeholder:text-white/40 focus:outline-none focus:border-white/30" required />
      <button type="submit" disabled={status === "sending"} className="mt-2 rounded-lg bg-white hover:bg-neutral-200 text-black px-6 py-3 font-bold transition-all duration-200 disabled:opacity-50">
        {status === "sending" ? "Sending..." : status === "sent" ? "Sent ✓" : "Send Email"}
      </button>
      {status === "error" && (
        <p className="text-sm text-rose-400">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}


