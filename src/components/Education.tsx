"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-28">
      <div className="section-container">
        <SectionHeading
          eyebrow="Education"
          title="Academic foundation"
          subtitle="Four years of computer science fundamentals, applied through hands-on backend projects."
        />

        <div className="relative border-l border-white/10 pl-8 sm:pl-10">
          {education.map((e, i) => (
            <motion.div
              key={e.degree}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative pb-2"
            >
              <span className="absolute -left-[42px] sm:-left-[50px] top-1 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/30">
                <GraduationCap size={16} className="text-white" />
              </span>

              <div className="glass rounded-2xl p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-heading text-lg font-semibold text-white">
                    {e.degree}
                  </h3>
                  <span className="font-mono text-xs text-secondary">{e.duration}</span>
                </div>
                <p className="mt-2 text-sm text-white/80">{e.institution}</p>
                <p className="mt-1 text-sm text-muted">{e.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
