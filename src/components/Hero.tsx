"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown, Download, Code2 } from "lucide-react";
import ParticleBackground from "./ParticleBackground";
import { personal } from "@/lib/data";

function useTypewriter(words: string[], speed = 55, pause = 1600) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), speed);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), speed / 1.6);
    } else {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, speed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(personal.roles);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-20"
    >
      <div className="absolute inset-0 bg-grid-glow" />
      <ParticleBackground />

      {/* gradient blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/30 blur-3xl animate-blob" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-accent/25 blur-3xl animate-blob [animation-delay:4s]" />
      <div className="pointer-events-none absolute top-1/3 right-1/4 h-56 w-56 rounded-full bg-secondary/20 blur-3xl animate-blob [animation-delay:8s]" />

      <div className="section-container relative z-10 grid grid-cols-1 lg:grid-cols-[1.1fr,0.9fr] gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-secondary font-mono">
            <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
            Open to internships &amp; SDE roles
          </span>

          <h1 className="mt-6 font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight">
            Hi, I&apos;m <span className="gradient-text">{personal.name}</span>
          </h1>

          <div className="mt-4 h-9 font-mono text-lg sm:text-xl text-secondary">
            <span>{typed}</span>
            <span className="animate-pulse">|</span>
          </div>

          <p className="mt-6 max-w-xl text-base sm:text-lg text-muted leading-relaxed">
            {personal.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={personal.resumeFile}
              download
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/25 hover:shadow-accent/30 hover:-translate-y-0.5 transition-all"
            >
              <Download size={16} /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold text-white hover:border-secondary/40 hover:-translate-y-0.5 transition-all"
            >
              <Mail size={16} /> Get in Touch
            </a>
          </div>

          <div className="mt-9 flex items-center gap-4">
            {[
              { icon: Github, href: personal.github, label: "GitHub" },
              { icon: Linkedin, href: personal.linkedin, label: "LinkedIn" },
              { icon: Mail, href: `mailto:${personal.email}`, label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full glass text-white/80 hover:text-secondary hover:-translate-y-1 transition-all"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Signature element: floating IDE / terminal window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-md animate-float"
        >
          <div className="glass rounded-2xl shadow-2xl shadow-black/40 overflow-hidden">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
              <span className="h-3 w-3 rounded-full bg-green-400/80" />
              <span className="ml-3 flex items-center gap-1.5 text-xs text-muted font-mono">
                <Code2 size={12} /> ComplaintController.java
              </span>
            </div>
            <pre className="p-5 text-[12.5px] sm:text-[13px] leading-relaxed font-mono overflow-x-auto">
              <code>
<span className="text-accent">@RestController</span>{"\n"}
<span className="text-accent">@RequestMapping</span>(<span className="text-secondary">&quot;/api/complaints&quot;</span>){"\n"}
<span className="text-primary">public class</span> ComplaintController {"{"}{"\n\n"}
{"  "}<span className="text-accent">@Autowired</span>{"\n"}
{"  "}<span className="text-primary">private</span> ComplaintService service;{"\n\n"}
{"  "}<span className="text-accent">@PostMapping</span>{"\n"}
{"  "}<span className="text-primary">public</span> ResponseEntity{"<Complaint>"} create({"\n"}
{"      "}<span className="text-primary">@RequestBody</span> Complaint c) {"{"}{"\n"}
{"    "}<span className="text-primary">return</span> ResponseEntity.ok({"\n"}
{"      "}service.save(c));{"\n"}
{"  "}{"}"}{"\n"}
{"}"}
              </code>
            </pre>
          </div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 glass rounded-xl px-4 py-2 text-xs font-mono text-secondary shadow-lg"
          >
            status: 200 OK
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-5 -left-6 glass rounded-xl px-4 py-2 text-xs font-mono text-primary shadow-lg"
          >
            MySQL ✓ connected
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted hover:text-secondary transition-colors"
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}
