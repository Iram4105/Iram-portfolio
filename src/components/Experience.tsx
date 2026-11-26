"use client";

import { motion } from "framer-motion";
import {
  BriefcaseBusiness, BookOpen, MapPin, Clock3, CalendarDays, CheckCircle2,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { experience, trainings } from "@/lib/data";

export default function Experience() {
  const internship = experience[0];

  return (
    <section id="experience" className="relative py-24 sm:py-28">
      <div className="section-container">
        <SectionHeading
          eyebrow="Experience & Learning"
          title="Building skills through real projects"
          subtitle="A Java Full Stack internship and industry-oriented training, alongside hands-on software development."
        />

        <div className="grid gap-6 lg:grid-cols-[1.15fr,0.85fr]">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="glass relative overflow-hidden rounded-3xl p-6 sm:p-8"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-secondary/10 blur-3xl" />
            <div className="relative">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-secondary">
                    <BriefcaseBusiness size={22} />
                  </span>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-[.2em] text-secondary">Internship</span>
                    <h3 className="mt-1 max-w-lg font-heading text-lg font-semibold text-foreground sm:text-xl">
                      {internship.title}
                    </h3>
                  </div>
                </div>
                <span className="rounded-full border border-[var(--border)] px-3 py-1 font-mono text-[10px] text-muted">
                  {internship.period}
                </span>
              </div>

              <p className="mt-5 text-sm font-semibold text-foreground">{internship.organization}</p>
              <div className="mt-3 flex flex-wrap gap-3 text-xs text-muted">
                <span className="inline-flex items-center gap-1.5"><Clock3 size={13} />{internship.duration}</span>
                <span className="inline-flex items-center gap-1.5"><MapPin size={13} />{internship.mode}</span>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-muted">{internship.description}</p>

              <div className="mt-6 space-y-3">
                {internship.highlights.map((item: string) => (
                  <div key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/85">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-secondary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Java", "Spring Boot", "Spring MVC", "Hibernate/JPA", "JSP", "MySQL", "REST API", "Postman", "Git", "Maven"].map((tag) => (
                  <span key={tag} className="rounded-lg border border-[var(--border)] bg-[var(--background)] px-2.5 py-1 text-[10px] font-mono text-secondary">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>

          <div className="space-y-5">
            <div className="flex items-center gap-2">
              <BookOpen size={17} className="text-secondary" />
              <h3 className="font-heading text-base font-semibold text-foreground">Training & Development</h3>
            </div>
            {trainings.map((training, index) => (
              <motion.article
                key={training.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl p-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent">
                    <BookOpen size={19} />
                  </span>
                  <span className="rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1 text-[10px] font-semibold text-secondary">
                    {training.status}
                  </span>
                </div>
                <p className="mt-4 font-mono text-[10px] uppercase tracking-[.18em] text-muted">Training programme</p>
                <h4 className="mt-1 font-heading text-base font-semibold text-foreground">{training.title}</h4>
                <p className="mt-2 text-sm font-medium text-secondary">{training.provider}</p>
                <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-muted">
                  <CalendarDays size={13} /> {training.period}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted">{training.detail}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
