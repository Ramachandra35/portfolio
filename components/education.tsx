import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { profile } from "@/lib/profile";
import { SectionReveal } from "@/components/section-reveal";

export function EducationSection() {
  const edu = profile.education;
  return (
    <section
      id="education"
      className="py-8 sm:py-12 md:py-16 lg:py-20 border-b border-border"
      aria-labelledby="education-heading"
    >
      <div className="mx-auto max-w-5xl px-3 sm:px-4">
        <SectionReveal>
          <h2
            id="education-heading"
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6 text-pretty text-primary"
          >
            Education
          </h2>
        </SectionReveal>
        <SectionReveal delay={0.08}>
          <Card className="bg-card">
            <CardHeader className="pb-2 sm:pb-3">
              <CardTitle className="text-sm sm:text-base md:text-lg">
                <span className="font-medium">{edu.degree}</span>{" "}
                <span className="text-muted-foreground">• {edu.school}</span>
              </CardTitle>
              <p className="text-xs sm:text-sm text-muted-foreground">
                {edu.period}
              </p>
            </CardHeader>
            <CardContent />
          </Card>
        </SectionReveal>
      </div>
    </section>
  );
}

export function CertificationsSection() {
  return (
    <section
      id="certifications"
      className="py-8 sm:py-12 md:py-16 lg:py-20 border-b border-border"
      aria-labelledby="certifications-heading"
    >
      <div className="mx-auto max-w-5xl px-3 sm:px-4">
        <SectionReveal>
          <h2
            id="certifications-heading"
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6 text-pretty text-primary"
          >
            Certifications
          </h2>
        </SectionReveal>
        <SectionReveal delay={0.08}>
          <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2">
            {profile.certifications.map((c, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between rounded-lg border border-border p-3 sm:p-4 gap-2 sm:gap-0"
              >
                <p className="text-xs sm:text-sm">
                  <span className="font-medium">{c.name}</span>
                  {c.issuer ? (
                    <span className="text-muted-foreground"> • {c.issuer}</span>
                  ) : null}
                </p>
                {c.date ? (
                  <p className="text-xs text-muted-foreground flex-shrink-0">
                    {c.date}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
