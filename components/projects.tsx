import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Project } from "@/lib/profile"
import { profile } from "@/lib/profile"
import { SectionReveal } from "@/components/section-reveal"
import ProjectCard from "@/components/project-card"

function ProjectItem({ project, colorClass }: { project: Project; colorClass: string }) {
  return (
    <Card className={`bg-card border-t-4 ${colorClass}`}>
      <CardHeader className="pb-3">
        <CardTitle className="text-base md:text-lg">
          <span className="font-medium">{project.name}</span>
          {project.company ? <span className="text-muted-foreground"> • {project.company}</span> : null}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <ul className="list-disc ps-5 space-y-2 text-sm text-pretty">
          {project.points.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
        {project.tech && project.tech.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, i) => (
              <Badge key={i} variant="outline" className="rounded-md">
                {t}
              </Badge>
            ))}
          </div>
        ) : null}
      </CardContent>
    </Card>
  )
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-12 md:py-16 border-b border-border" aria-labelledby="projects-heading">
      <div className="mx-auto max-w-5xl px-4">
        <SectionReveal>
          <h2 id="projects-heading" className="text-2xl md:text-3xl font-semibold mb-6 text-pretty text-primary">
            Projects
          </h2>
        </SectionReveal>
        <SectionReveal delay={0.08}>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
            {profile.projects.map((p, idx) => (
              <ProjectCard
                key={idx}
                title={p.name}
                org={p.company}
                bullets={p.points}
                tags={p.tech}
                accent={idx % 3 === 0 ? "primary" : idx % 3 === 1 ? "warm" : "teal"}
                className="h-full"
              />
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
