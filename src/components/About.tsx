"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { about } from "@/lib/data";

function Counter({ value, suffix }: { value: string; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState("0");
  const numeric = parseFloat(value);

  useEffect(() => {
    if (!inView || isNaN(numeric)) {
      if (isNaN(numeric)) setDisplay(value);
      return;
    }
    const duration = 1200;
    const start = performance.now();
    const isDecimal = value.includes(".");

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const current = numeric * progress;
      setDisplay(isDecimal ? current.toFixed(2) : Math.round(current).toString());
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, numeric, value]);

  return (
    <span ref={ref} className="font-heading text-3xl sm:text-4xl font-bold gradient-text">
      {display}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="section-container">
        <SectionHeading eyebrow="About Me" title="Turning coursework into working software" />

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr,0.8fr] gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <p className="text-lg leading-relaxed text-white/90">{about.summary}</p>
            <p className="text-base leading-relaxed text-muted">{about.goal}</p>

            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              {about.strengths.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass rounded-xl p-4"
                >
                  <Sparkles className="mb-2 text-secondary" size={18} />
                  <h3 className="font-heading text-sm font-semibold text-white">
                    {s.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="glass rounded-2xl p-6 sm:p-8 grid grid-cols-2 gap-6"
          >
            {about.stats.map((s) => (
              <div key={s.label} className="text-center">
                <Counter value={s.value} suffix={s.suffix} />
                <p className="mt-1 text-xs uppercase tracking-wider text-muted">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
