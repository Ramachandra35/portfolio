"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { cn } from "@/lib/utils"

type Props = {
  className?: string
  href?: string // defaults to /resume.pdf
  label?: string
}

export default function ResumeDownload({ className, href = "/resume.pdf", label = "Download Resume" }: Props) {
  return (
    <div className={cn("flex items-center", className)}>
      <Button
        asChild
        variant="secondary"
        className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
        aria-label={label}
      >
        <Link href={href} download>
          <Download className="mr-2 h-4 w-4" aria-hidden="true" />
          {label}
        </Link>
      </Button>
    </div>
  )
}
