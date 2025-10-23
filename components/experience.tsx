import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Experience } from "@/lib/profile"
import { profile } from "@/lib/profile"
import { SectionReveal } from "@/components/section-reveal"

function ExperienceItem({ exp, colorClass }: { exp: Experience; colorClass: string }) {
  return (
    <Card className={`bg-card border-t-4 ${colorClass} transition hover:shadow-md`}>
      <CardHeader className="pb-3">
        <CardTitle className="text-base md:text-lg">
          <span className="font-medium">{exp.role}</span> <span className="text-muted-foreground">• {exp.company}</span>
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
  )
}

export function ExperienceSection() {
  return (
    <section id="experience" className="py-12 md:py-16 border-b border-border" aria-labelledby="experience-heading">
      <div className="mx-auto max-w-5xl px-4">
        <div className="rounded-xl border border-border bg-secondary/40 p-6 md:p-8">
          <SectionReveal>
            <div className="mb-4">
              <span className="inline-block rounded-full bg-accent-warm px-3 py-1 text-xs font-medium text-accent-warm-foreground">
                Experience
              </span>
            </div>
            <h2 id="experience-heading" className="text-2xl md:text-3xl font-semibold mb-6 text-pretty">
              Professional Experience
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.08}>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {profile.experiences.map((exp, idx) => (
                <ExperienceItem
                  key={idx}
                  exp={exp}
                  colorClass={idx % 2 === 0 ? "border-accent" : "border-accent-warm"}
                />
              ))}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
