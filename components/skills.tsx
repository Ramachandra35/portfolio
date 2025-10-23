import { Badge } from "@/components/ui/badge"
import { profile } from "@/lib/profile"
import { SectionReveal } from "@/components/section-reveal"

export function SkillsSection() {
  return (
    <section id="skills" className="py-12 md:py-16 border-b border-border" aria-labelledby="skills-heading">
      <div className="mx-auto max-w-5xl px-4">
        <SectionReveal>
          <h2 id="skills-heading" className="text-2xl md:text-3xl font-semibold mb-6 text-pretty text-primary">
            Technical Skills
          </h2>
        </SectionReveal>
        <SectionReveal delay={0.08}>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {profile.skills.map((group, idx) => (
              <div key={idx} className="space-y-3">
                <h3
                  className={`text-base md:text-lg font-medium pl-3 border-l-4 ${
                    idx % 2 === 0 ? "border-accent" : "border-accent-warm"
                  }`}
                >
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item, i) => (
                    <Badge key={i} variant="secondary" className="rounded-md">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
