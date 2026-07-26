"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-28">
      <div className="section-container">
        <SectionHeading
          eyebrow="Experience"
          title="Academic & independent experience"
          subtitle="No formal work experience yet — here's the hands-on experience built through academic and independent projects instead."
        />

        <div className="grid sm:grid-cols-2 gap-6">
          {experience.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-primary/30 to-accent/30">
                  <Briefcase size={16} className="text-secondary" />
                </span>
                <div>
                  <h3 className="font-heading text-sm font-semibold text-white">
                    {e.title}
                  </h3>
                  <span className="text-[11px] font-mono text-muted">{e.period}</span>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-white/80">{e.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
