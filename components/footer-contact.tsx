"use client"

import type React from "react"

import { Mail, Phone, MapPin, Linkedin } from "lucide-react"
import Link from "next/link"
import { profile } from "@/lib/profile"

export default function FooterContact() {
  const safePhoneHref = `tel:${profile.phone.replace(/\s+/g, "")}`
  const items = [
    { href: `mailto:${profile.email}`, label: profile.email, Icon: Mail },
    { href: safePhoneHref, label: profile.phone, Icon: Phone },
    { href: "#", label: profile.location, Icon: MapPin },
    { href: profile.linkedin, label: "LinkedIn", Icon: Linkedin },
  ] as Array<{ href: string; label: string; Icon: React.ComponentType<{ size?: number; className?: string }> }>

  return (
    <div className="mx-auto max-w-5xl px-4">
      <nav className="flex flex-wrap items-center justify-center gap-3 py-4 text-sm">
        {items.map(({ href, label, Icon }) => (
          <Link
            key={href + label}
            href={href}
            className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 ring-1 ring-border bg-muted hover:bg-secondary/60 transition"
          >
            <Icon size={16} aria-hidden />
            <span className="font-medium">{label}</span>
          </Link>
        ))}
      </nav>
    </div>
  )
}
