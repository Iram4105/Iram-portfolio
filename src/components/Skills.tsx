"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit, Cloud, Code2, Database, Monitor, Server, Wrench, Layers,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { skills } from "@/lib/data";

const categoryIcons = [
  Code2, Server, Monitor, Database, Layers, Wrench, BrainCircuit, Cloud,
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-28">
      <div className="section-container">
        <SectionHeading
          eyebrow="Technical Skills"
          title="Tools I use to turn ideas into software"
          subtitle="A snapshot of the languages, frameworks and tools I have explored through coursework and hands-on projects."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((category, index) => {
            const Icon = categoryIcons[index] ?? Layers;
            return (
              <motion.article
                key={category.category}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: (index % 4) * 0.07 }}
                whileHover={{ y: -5, rotateX: 2, rotateY: -2 }}
                className="glass rounded-2xl p-5 sm:p-6"
                style={{ transformPerspective: 900 }}
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--background)]">
                    <Icon size={19} className="text-secondary" />
                  </span>
                  <span className="font-mono text-[10px] tracking-[.18em] text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-heading text-sm font-semibold text-primary">
                  {category.category}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="rounded-lg border border-[var(--border)] bg-[var(--background)]/70 px-2.5 py-1.5 text-[11px] font-medium text-foreground transition-colors hover:border-accent/60"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
