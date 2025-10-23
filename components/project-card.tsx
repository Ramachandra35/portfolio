"use client"

import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

type ProjectCardProps = {
  title: string
  org?: string
  bullets?: string[]
  tags?: string[]
  accent?: "primary" | "teal" | "warm"
  className?: string
}

export function ProjectCard({ title, org, bullets = [], tags = [], accent = "primary", className }: ProjectCardProps) {
  // map accent to existing token classes
  const borderClass = accent === "teal" ? "border-accent" : accent === "warm" ? "border-accent-warm" : "border-primary"

  return (
    <Card className={cn("h-full overflow-hidden border-t-4", borderClass, className)}>
      <div className="flex h-full flex-col">
        <CardHeader className="pb-2">
          <CardTitle className="text-balance">{title}</CardTitle>
          {org ? <CardDescription className="mt-1 text-pretty">{org}</CardDescription> : null}
        </CardHeader>
        <CardContent className="flex min-h-0 flex-1 flex-col">
          {bullets.length ? (
            <ul className="list-disc pl-5 text-sm leading-relaxed marker:text-foreground/40">
              {bullets.map((b, i) => (
                <li key={i} className="mb-2 break-words text-pretty">
                  {b}
                </li>
              ))}
            </ul>
          ) : null}
          <div className="mt-auto pt-4">
            {tags.length ? (
              <div className="flex flex-wrap gap-2">
                {tags.map((t, i) => (
                  <span key={i} className="rounded-full border px-2 py-0.5 text-xs text-foreground/80">
                    {t}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        </CardContent>
      </div>
    </Card>
  )
}

export default ProjectCard
