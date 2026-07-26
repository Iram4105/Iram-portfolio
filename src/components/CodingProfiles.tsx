"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Code, FileCode2, ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { codingProfiles, personal } from "@/lib/data";

const icons: Record<string, typeof Github> = {
  GitHub: Github,
  LinkedIn: Linkedin,
  LeetCode: Code,
  GeeksforGeeks: FileCode2,
};

export default function CodingProfiles() {
  return (
    <section id="profiles" className="relative py-24 sm:py-28">
      <div className="section-container">
        <SectionHeading eyebrow="Find Me Online" title="Coding profiles" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {codingProfiles.map((p, i) => {
            const Icon = icons[p.name] ?? Code;
            const isPlaceholder = p.handle === "PLACEHOLDER";
            return (
              <motion.a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-6 group relative"
              >
                <ArrowUpRight
                  size={15}
                  className="absolute top-5 right-5 text-muted group-hover:text-secondary transition-colors"
                />
                <Icon size={22} className="text-secondary mb-4" />
                <h3 className="font-heading text-sm font-semibold text-white">
                  {p.name}
                </h3>
                <p className="mt-1 text-xs font-mono text-muted">
                  {isPlaceholder ? "link coming soon" : `@${p.handle}`}
                </p>
              </motion.a>
            );
          })}
        </div>
        <p className="mt-6 text-xs text-muted">
          Portfolio: <span className="font-mono text-secondary">{personal.siteUrl}</span>
        </p>
      </div>
    </section>
  );
}
