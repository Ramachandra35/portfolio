import Link from "next/link"
import { Hero } from "@/components/hero"
import { ExperienceSection } from "@/components/experience"
import { SkillsSection } from "@/components/skills"
import { ProjectsSection } from "@/components/projects"
import { EducationSection, CertificationsSection } from "@/components/education"
import FooterContact from "@/components/footer-contact"

export default function Page() {
  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 bg-primary text-primary-foreground px-3 py-2 rounded-md"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
          <Link href="#about" className="font-medium">
            Ramachandran S
          </Link>
          <nav aria-label="Primary">
            <ul className="flex items-center gap-4 text-sm text-muted-foreground">
              <li>
                <a href="#experience" className="hover:text-foreground">
                  Experience
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-foreground">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-foreground">
                  Projects
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-foreground">
                  Education
                </a>
              </li>
              <li>
                <a href="#certifications" className="hover:text-foreground">
                  Certs
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-foreground">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <CertificationsSection />
      </main>

      <footer className="border-t border-border">
        <FooterContact />
        <div className="mx-auto max-w-5xl px-4 py-6 text-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Ramachandran S. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
