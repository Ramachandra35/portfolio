import Link from "next/link"
import { Button } from "@/components/ui/button"
import { profile } from "@/lib/profile"
import { Mail, Phone, MapPin, Linkedin, Download } from "lucide-react"
import { SectionReveal } from "@/components/section-reveal"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export function Hero() {
  return (
    <section
      id="about"
      className="py-12 md:py-16 border-b border-border bg-secondary/30"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-5xl px-4">
        <SectionReveal>
          <div className="grid gap-8 md:gap-10 items-start">
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4">
                {/* compact avatar in the title row */}
                <Avatar className="size-16 md:size-20 ring-2 ring-accent-warm">
                  <AvatarImage src="/images/profile-avatar.jpg" alt="Portrait of Ramachandran S (placeholder)" />
                  <AvatarFallback className="bg-accent text-accent-foreground font-medium">RS</AvatarFallback>
                </Avatar>

                <div>
                  <h1 id="about-heading" className="text-3xl md:text-4xl font-semibold text-pretty">
                    {profile.name}
                  </h1>
                  <p className="mt-2 text-muted-foreground max-w-3xl text-pretty">{profile.summary}</p>
                </div>
              </div>

              {/* contact items */}
              <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="size-4" aria-hidden />
                  <span>{profile.location}</span>
                </span>
                <span className="inline-flex items-center gap-2">
                  <Phone className="size-4" aria-hidden />
                  <a href={`tel:${profile.phone.replace(/\s+/g, "")}`} className="underline underline-offset-4">
                    {profile.phone}
                  </a>
                </span>
                <span className="inline-flex items-center gap-2">
                  <Mail className="size-4" aria-hidden />
                  <a href={`mailto:${profile.email}`} className="underline underline-offset-4">
                    {profile.email}
                  </a>
                </span>
                <span className="inline-flex items-center gap-2">
                  <Linkedin className="size-4" aria-hidden />
                  <Link
                    href={profile.linkedin}
                    className="underline underline-offset-4"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </Link>
                </span>
              </div>

              {/* CTA buttons including resume download */}
              <div className="mt-2 flex flex-wrap gap-3">
                {/* subtle hover scale for CTA buttons */}
                <Button asChild>
                  <a href="#projects" aria-label="View projects">
                    View Projects
                  </a>
                </Button>
                <Button asChild variant="secondary">
                  <a href="#experience" aria-label="View experience">
                    Experience
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-accent text-accent-foreground hover:bg-accent bg-transparent"
                >
                  <a
                    href={profile.resumeUrl || "/resume.pdf"}
                    aria-label="Download resume"
                    target="_blank"
                    rel="noreferrer"
                    download
                  >
                    <span className="inline-flex items-center gap-2">
                      <Download className="size-4" aria-hidden />
                      Download Resume
                    </span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
