import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Linkedin } from "lucide-react"
import { profile } from "@/lib/profile"
import { SectionReveal } from "@/components/section-reveal"

export function ContactCard() {
  return (
    <section id="contact" className="py-12 md:py-16" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-5xl px-4">
        <SectionReveal>
          <h2 id="contact-heading" className="text-2xl md:text-3xl font-semibold mb-6 text-pretty">
            Contact
          </h2>
        </SectionReveal>
        <SectionReveal delay={0.08}>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base md:text-lg">Get in touch</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 text-sm">
              <div className="inline-flex items-center gap-2">
                <Mail className="size-4" aria-hidden />
                <a className="underline underline-offset-4" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
              </div>
              <div className="inline-flex items-center gap-2">
                <Phone className="size-4" aria-hidden />
                <a className="underline underline-offset-4" href={`tel:${profile.phone.replace(/\s+/g, "")}`}>
                  {profile.phone}
                </a>
              </div>
              <div className="inline-flex items-center gap-2">
                <MapPin className="size-4" aria-hidden />
                <span className="text-muted-foreground">{profile.location}</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <Linkedin className="size-4" aria-hidden />
                <Link className="underline underline-offset-4" href={profile.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn Profile
                </Link>
              </div>
            </CardContent>
          </Card>
        </SectionReveal>
      </div>
    </section>
  )
}
