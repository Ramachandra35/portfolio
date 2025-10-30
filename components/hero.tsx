"use client";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/profile";
import { Mail, Phone, MapPin, Linkedin, Download } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="about"
      className="py-8 sm:py-12 md:py-16 lg:py-20 border-b border-border bg-secondary/30"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-5xl px-3 sm:px-4">
        <SectionReveal>
          <div className="grid gap-6 sm:gap-8 md:gap-10 items-start">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                >
                  <Avatar className="size-16 sm:size-16 md:size-20 ring-2 ring-accent-warm flex-shrink-0">
                    <AvatarImage
                      src="/images/profile-avatar.jpg"
                      alt="Portrait of Ramachandran Senthil (placeholder)"
                    />
                    <AvatarFallback className="bg-accent text-accent-foreground font-medium">
                      RS
                    </AvatarFallback>
                  </Avatar>
                </motion.div>

                <div className="flex-1 min-w-0">
                  <h1
                    id="about-heading"
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-pretty"
                  >
                    {profile.name}
                  </h1>
                  <p className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base text-muted-foreground max-w-3xl text-pretty line-clamp-3">
                    {profile.summary}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground">
                {[
                  {
                    icon: MapPin,
                    label: profile.location,
                    href: null,
                  },
                  {
                    icon: Phone,
                    label: profile.phone,
                    href: `tel:${profile.phone.replace(/\s+/g, "")}`,
                  },
                  {
                    icon: Mail,
                    label: profile.email,
                    href: `mailto:${profile.email}`,
                  },
                  {
                    icon: Linkedin,
                    label: "LinkedIn",
                    href: profile.linkedin,
                  },
                ].map((item, idx) => (
                  <motion.span
                    key={idx}
                    className="inline-flex items-center gap-1 sm:gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + idx * 0.08 }}
                  >
                    <item.icon
                      className="size-3 sm:size-4 flex-shrink-0"
                      aria-hidden
                    />
                    {item.href ? (
                      <a
                        href={item.href}
                        className="underline underline-offset-2 truncate"
                        target={
                          item.label === "LinkedIn" ? "_blank" : undefined
                        }
                        rel={
                          item.label === "LinkedIn" ? "noreferrer" : undefined
                        }
                      >
                        {item.label}
                      </a>
                    ) : (
                      <span className="truncate">{item.label}</span>
                    )}
                  </motion.span>
                ))}
              </div>

              <div className="mt-2 flex flex-wrap gap-2 sm:gap-3">
                {[
                  {
                    label: "View Projects",
                    href: "#projects",
                    variant: "default",
                  },
                  {
                    label: "Experience",
                    href: "#experience",
                    variant: "secondary",
                  },
                  {
                    label: "Download Resume",
                    href: profile.resumeUrl || "/resume.pdf",
                    variant: "outline",
                    icon: Download,
                    download: true,
                  },
                ].map((btn, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Button
                      asChild
                      variant={btn.variant as any}
                      className={`text-xs sm:text-sm ${
                        btn.variant === "outline"
                          ? "border-accent text-accent-foreground hover:bg-accent bg-transparent"
                          : ""
                      }`}
                    >
                      <a
                        href={btn.href}
                        aria-label={btn.label}
                        target={btn.download ? "_blank" : undefined}
                        rel={btn.download ? "noreferrer" : undefined}
                        download={btn.download}
                      >
                        {btn.icon ? (
                          <span className="inline-flex items-center gap-1 sm:gap-2">
                            <btn.icon
                              className="size-3 sm:size-4"
                              aria-hidden
                            />
                            <span className="hidden sm:inline">
                              {btn.label}
                            </span>
                            <span className="sm:hidden">
                              {btn.label.split(" ")[0]}
                            </span>
                          </span>
                        ) : (
                          btn.label
                        )}
                      </a>
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
