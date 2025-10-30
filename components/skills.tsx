"use client";

import { Badge } from "@/components/ui/badge";
import { profile } from "@/lib/profile";
import { SectionReveal } from "@/components/section-reveal";
import { motion } from "framer-motion";

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-8 sm:py-12 md:py-16 lg:py-20 border-b border-border"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-5xl px-3 sm:px-4">
        <SectionReveal>
          <h2
            id="skills-heading"
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6 text-pretty text-primary"
          >
            Technical Skills
          </h2>
        </SectionReveal>
        <SectionReveal delay={0.08}>
          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {profile.skills.map((group, idx) => (
              <div key={idx} className="space-y-2 sm:space-y-3">
                <h3
                  className={`text-sm sm:text-base md:text-lg font-medium pl-2 sm:pl-3 border-l-4 ${
                    idx % 2 === 0 ? "border-accent" : "border-accent-warm"
                  }`}
                >
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {group.items.map((item, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                      }}
                    >
                      <Badge
                        variant="secondary"
                        className="rounded-md cursor-pointer transition text-xs sm:text-sm"
                      >
                        {item}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
