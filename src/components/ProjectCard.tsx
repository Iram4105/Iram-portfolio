"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, ImageOff } from "lucide-react";
import type { Project } from "@/lib/data";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;

    setTilt({
      rx: py * -8,
      ry: px * 8,
    });
  };

  const reset = () => setTilt({ rx: 0, ry: 0 });

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{
        transform: `perspective(900px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
      }}
      className="card-tilt glass rounded-2xl overflow-hidden flex flex-col transition-transform duration-150"
    >
      {/* Project image */}
      <div className="relative h-40 w-full overflow-hidden bg-gradient-to-br from-surface to-bg border-b border-white/10">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} project preview`}
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-1.5 text-muted">
            <ImageOff size={22} />
            <span className="text-[11px] font-mono">
              project image coming soon
            </span>
          </div>
        )}

        {/* Subtle overlay for consistent card styling */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/40 via-transparent to-transparent" />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-heading text-lg font-semibold text-white">
          {project.title}
        </h3>

        <p className="mt-1.5 text-sm text-muted">{project.tagline}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.techStack.map((t) => (
            <span
              key={t}
              className="rounded-full bg-white/5 border border-white/10 px-2.5 py-1 text-[11px] font-mono text-secondary"
            >
              {t}
            </span>
          ))}
        </div>

        <p className="mt-4 text-sm leading-relaxed text-white/80">
          {project.overview}
        </p>

        <details className="mt-3 group">
          <summary className="cursor-pointer text-xs font-medium text-secondary list-none flex items-center gap-1">
            View details
            <span className="transition-transform group-open:rotate-90">
              ›
            </span>
          </summary>

          <div className="mt-3 space-y-3 text-xs text-muted leading-relaxed">
            <div>
              <p className="text-white/70 font-semibold mb-1">
                Key features
              </p>

              <ul className="list-disc list-inside space-y-0.5">
                {project.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-white/70 font-semibold mb-1">
                Challenges
              </p>
              <p>{project.challenges}</p>
            </div>

            <div>
              <p className="text-white/70 font-semibold mb-1">
                What I learned
              </p>
              <p>{project.learned}</p>
            </div>
          </div>
        </details>

        <div className="mt-5 pt-4 border-t border-white/10 flex gap-3">
          {/* GitHub */}
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full glass px-4 py-2 text-xs font-semibold hover:border-secondary/40 transition-colors"
          >
            <Github size={13} />
            GitHub
          </a>

          {/* Live Demo */}
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-primary to-accent px-4 py-2 text-xs font-semibold text-white hover:brightness-110 transition"
            >
              <ExternalLink size={13} />
              Live Demo
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-4 py-2 text-xs font-semibold text-muted">
              <ExternalLink size={13} />
              Live Demo — Coming Soon
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
