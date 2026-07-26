"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { personal } from "@/lib/data";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in every field.");
      return;
    }
    setSubmitting(true);
    // PLACEHOLDER: wire this up to a real form backend (Formspree, EmailJS, or a
    // Next.js API route that sends mail) before going live. For now this simulates
    // a submission so the UI/UX can be reviewed end to end.
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    toast.success("Message ready to send — connect a form backend to deliver it.");
    setForm({ name: "", email: "", message: "" });
  };

  const details = [
    { icon: Mail, label: "Email", value: personal.email, href: `mailto:${personal.email}` },
    { icon: Phone, label: "Phone", value: personal.phone, href: `tel:${personal.phone}` },
    { icon: MapPin, label: "Location", value: personal.location, href: undefined },
  ];

  return (
    <section id="contact" className="relative py-24 sm:py-28">
      <div className="section-container">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together"
          subtitle="Open to Java backend internships, SDE roles, and interesting collaborations — reach out any time."
        />

        <div className="grid lg:grid-cols-[0.8fr,1.2fr] gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {details.map((d) => (
              <div key={d.label} className="glass rounded-xl p-5 flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary/30 to-accent/30">
                  <d.icon size={16} className="text-secondary" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted">{d.label}</p>
                  {d.href ? (
                    <a
                      href={d.href}
                      className="text-sm text-white hover:text-secondary transition-colors break-all"
                    >
                      {d.value}
                    </a>
                  ) : (
                    <p className="text-sm text-white">{d.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="flex gap-3 pt-2">
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full glass hover:text-secondary transition-colors"
              >
                <Github size={16} />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full glass hover:text-secondary transition-colors"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass rounded-2xl p-6 sm:p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="text-xs uppercase tracking-wider text-muted">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-2 w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white outline-none focus:border-secondary/50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-xs uppercase tracking-wider text-muted">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-2 w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white outline-none focus:border-secondary/50"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="text-xs uppercase tracking-wider text-muted">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-2 w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white outline-none focus:border-secondary/50 resize-none"
                placeholder="Tell me about the opportunity..."
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-white hover:brightness-110 transition disabled:opacity-60"
            >
              <Send size={15} /> {submitting ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
