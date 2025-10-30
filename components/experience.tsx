"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Experience } from "@/lib/profile";
import { profile } from "@/lib/profile";
import { SectionReveal } from "@/components/section-reveal";
import { motion } from "framer-motion";

function ExperienceItem({
  exp,
  colorClass,
}: {
  exp: Experience;
  colorClass: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Card
        className={`bg-card border-t-4 ${colorClass} transition hover:shadow-md cursor-pointer`}
      >
        <CardHeader className="pb-3">
          <CardTitle className="text-base md:text-lg">
            <span className="font-medium">{exp.role}</span>{" "}
            <span className="text-muted-foreground">• {exp.company}</span>
          </CardTitle>
          <p className="text-sm text-muted-foreground">{exp.period}</p>
        </CardHeader>
        <CardContent>
          <ul className="list-disc ps-5 space-y-2 text-sm text-pretty">
            {exp.points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-8 sm:py-12 md:py-16 lg:py-20 border-b border-border"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-5xl px-3 sm:px-4">
        <div className="rounded-lg sm:rounded-xl border border-border bg-secondary/40 p-4 sm:p-6 md:p-8 lg:p-10">
          <SectionReveal>
            <div className="mb-3 sm:mb-4">
              <span className="inline-block rounded-full bg-accent-warm px-2 sm:px-3 py-1 text-xs font-medium text-accent-warm-foreground">
                Experience
              </span>
            </div>
            <h2
              id="experience-heading"
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6 text-pretty"
            >
              Professional Experience
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.08}>
            <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {profile.experiences.map((exp, idx) => (
                <ExperienceItem
                  key={idx}
                  exp={exp}
                  colorClass={
                    idx % 2 === 0 ? "border-accent" : "border-accent-warm"
                  }
                />
              ))}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
