"use client"

import type React from "react"

import { motion, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"

type Props = {
  children: React.ReactNode
  delay?: number
  className?: string
}

export function SectionReveal({ children, delay = 0, className }: Props) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={cn("motion-safe:will-change-transform", className)}
      initial={reduce ? { opacity: 0 } : { opacity: 0, x: -24, y: 24, scale: 0.98 }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
