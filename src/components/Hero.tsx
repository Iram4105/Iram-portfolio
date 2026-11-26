"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown, Download } from "lucide-react";
import ParticleBackground from "./ParticleBackground";
import HeroSceneWrapper from "./HeroSceneWrapper";
import { personal } from "@/lib/data";

function useTypewriter(words: string[], speed = 55, pause = 1600) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length] ?? "";
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), speed);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), speed / 1.6);
    } else {
      setDeleting(false);
      setWordIndex((index) => index + 1);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, speed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(personal.roles);

  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 bg-grid-glow" />
      <ParticleBackground />
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/25 blur-3xl animate-blob" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-accent/20 blur-3xl animate-blob [animation-delay:4s]" />
      <div className="pointer-events-none absolute top-1/3 right-1/4 h-56 w-56 rounded-full bg-secondary/20 blur-3xl animate-blob [animation-delay:8s]" />

      <div className="section-container relative z-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-[0.9fr,1.1fr] lg:gap-5">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10"
        >
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 font-mono text-xs font-medium text-secondary">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-secondary" />
            Open to Software Development &amp; AI/ML opportunities
          </span>

          <h1 className="mt-6 font-heading text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Hi, I&apos;m <span className="gradient-text">{personal.name}</span>
          </h1>

          <div className="mt-4 h-9 font-mono text-lg text-secondary sm:text-xl" aria-live="polite">
            <span>{typed}</span><span className="animate-pulse">|</span>
          </div>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {personal.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={personal.resumeFile}
              download
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-black/10 transition-all hover:-translate-y-0.5 hover:brightness-105"
            >
              <Download size={16} /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:border-secondary/50"
            >
              <Mail size={16} /> Get in Touch
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            {[
              { icon: Github, href: personal.github, label: "GitHub" },
              { icon: Linkedin, href: personal.linkedin, label: "LinkedIn" },
              { icon: Mail, href: `mailto:${personal.email}`, label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={label === "Email" ? undefined : "_blank"}
                rel={label === "Email" ? undefined : "noreferrer"}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full glass transition-all hover:-translate-y-1 hover:text-secondary"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.12, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-xl"
        >
          <HeroSceneWrapper />
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 text-muted transition-colors hover:text-secondary"
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}
