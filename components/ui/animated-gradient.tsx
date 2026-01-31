"use client"

import React from "react"

import { cn } from "@/lib/utils"

interface AnimatedGradientProps {
  className?: string
  children?: React.ReactNode
}

export function AnimatedGradient({ className, children }: AnimatedGradientProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 animate-gradient-x" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      {children}
    </div>
  )
}

export function GridBackground({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
    </div>
  )
}

export function DotBackground({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#374151_1px,transparent_1px)] bg-[size:20px_20px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
    </div>
  )
}
