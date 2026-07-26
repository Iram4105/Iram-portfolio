"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-12 max-w-2xl"
    >
      <span className="font-mono text-xs tracking-[0.25em] text-secondary uppercase">
        {eyebrow}
      </span>
      <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-semibold text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-muted text-base leading-relaxed">{subtitle}</p>
      )}
    </motion.div>
  );
}
