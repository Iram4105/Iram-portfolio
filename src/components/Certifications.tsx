"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Award } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { certifications } from "@/lib/data";

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 sm:py-28">
      <div className="section-container">
        <SectionHeading
          eyebrow="Certifications"
          title="Learning, validated"
          subtitle="Professional credentials across Java, databases, networking, cloud and software engineering."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((certificate, index) => (
            <motion.article
              key={certificate.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (index % 3) * 0.08 }}
              whileHover={{ y: -5, rotateX: 1.5 }}
              className="glass relative overflow-hidden rounded-2xl p-6"
              style={{ transformPerspective: 900 }}
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-accent/10 blur-2xl" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--background)]">
                    <Award size={21} className="text-accent" />
                  </span>
                  <span className="font-mono text-[10px] tracking-[.16em] text-muted">
                    {String(index + 1).padStart(2, "0")} / {String(certifications.length).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-5 font-heading text-base font-semibold leading-snug text-foreground">
                  {certificate.title}
                </h3>
                <p className="mt-2 flex items-center gap-1.5 font-mono text-xs text-secondary">
                  <BadgeCheck size={13} /> {certificate.issuer}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{certificate.detail}</p>
              </div>
            </motion.article>
          ))}
        </div>
        <p className="mt-5 text-xs text-muted">
          Credential verification links and certificate IDs can be added when available.
        </p>
      </div>
    </section>
  );
}
