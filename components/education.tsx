import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { profile } from "@/lib/profile"
import { SectionReveal } from "@/components/section-reveal"

export function EducationSection() {
  const edu = profile.education
  return (
    <section id="education" className="py-12 md:py-16 border-b border-border" aria-labelledby="education-heading">
      <div className="mx-auto max-w-5xl px-4">
        <SectionReveal>
          <h2 id="education-heading" className="text-2xl md:text-3xl font-semibold mb-6 text-pretty text-primary">
            Education
          </h2>
        </SectionReveal>
        <SectionReveal delay={0.08}>
          <Card className="bg-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-base md:text-lg">
                <span className="font-medium">{edu.degree}</span>{" "}
                <span className="text-muted-foreground">• {edu.school}</span>
              </CardTitle>
              <p className="text-sm text-muted-foreground">{edu.period}</p>
            </CardHeader>
            <CardContent />
          </Card>
        </SectionReveal>
      </div>
    </section>
  )
}

export function CertificationsSection() {
  return (
    <section
      id="certifications"
      className="py-12 md:py-16 border-b border-border"
      aria-labelledby="certifications-heading"
    >
      <div className="mx-auto max-w-5xl px-4">
        <SectionReveal>
          <h2 id="certifications-heading" className="text-2xl md:text-3xl font-semibold mb-6 text-pretty text-primary">
            Certifications
          </h2>
        </SectionReveal>
        <SectionReveal delay={0.08}>
          <div className="grid gap-4 md:grid-cols-2">
            {profile.certifications.map((c, idx) => (
              <div key={idx} className="flex items-center justify-between rounded-lg border border-border p-4">
                <p className="text-sm">
                  <span className="font-medium">{c.name}</span>
                  {c.issuer ? <span className="text-muted-foreground"> • {c.issuer}</span> : null}
                </p>
                {c.date ? <p className="text-xs text-muted-foreground">{c.date}</p> : null}
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
