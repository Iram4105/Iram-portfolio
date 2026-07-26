"use client";

import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { certifications } from "@/lib/data";

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 sm:py-28">
      <div className="section-container">
        <SectionHeading eyebrow="Certifications" title="Verified expertise" />

        <div className="grid sm:grid-cols-2 gap-6">
          {certifications.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-6 flex gap-4"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary">
                <BadgeCheck size={22} className="text-white" />
              </span>
              <div>
                <h3 className="font-heading text-base font-semibold text-white">
                  {c.title}
                </h3>
                <p className="text-xs font-mono text-secondary mt-0.5">{c.issuer}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{c.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
