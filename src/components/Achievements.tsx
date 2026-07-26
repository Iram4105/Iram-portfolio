"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { achievements } from "@/lib/data";

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 sm:py-28">
      <div className="section-container">
        <SectionHeading eyebrow="Achievements" title="Milestones along the way" />

        <div className="grid sm:grid-cols-2 gap-5">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-xl p-5 flex gap-3"
            >
              <Trophy size={18} className="text-accent shrink-0 mt-0.5" />
              <div>
                <h3 className="font-heading text-sm font-semibold text-white">
                  {a.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-muted">{a.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
