"use client";
import type { Project } from "@/lib/profile";
import { profile } from "@/lib/profile";
import { SectionReveal } from "@/components/section-reveal";
import ProjectCard from "@/components/project-card";
import { motion } from "framer-motion";

function ProjectItem({
  project,
  colorClass,
}: {
  project: Project;
  colorClass: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <ProjectCard
        title={project.name}
        org={project.company}
        bullets={project.points}
        tags={project.tech}
        accent={
          colorClass.includes("accent-warm")
            ? "warm"
            : colorClass.includes("accent")
            ? "primary"
            : "teal"
        }
        className="h-full cursor-pointer"
      />
    </motion.div>
  );
}

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-8 sm:py-12 md:py-16 lg:py-20 border-b border-border"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-5xl px-3 sm:px-4">
        <SectionReveal>
          <h2
            id="projects-heading"
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6 text-pretty text-primary"
          >
            Projects
          </h2>
        </SectionReveal>
        <SectionReveal delay={0.08}>
          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
            {profile.projects.map((p, idx) => (
              <ProjectItem
                key={idx}
                project={p}
                colorClass={
                  idx % 3 === 0
                    ? "border-accent"
                    : idx % 3 === 1
                    ? "border-accent-warm"
                    : "border-teal-500"
                }
              />
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
