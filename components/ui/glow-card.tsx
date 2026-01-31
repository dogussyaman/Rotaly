"use client"

import React from "react"

import { cn } from "@/lib/utils"
import { useRef, useState } from "react"

interface GlowCardProps {
  children: React.ReactNode
  className?: string
  containerClassName?: string
}

export function GlowCard({ children, className, containerClassName }: GlowCardProps) {
  const divRef = useRef<HTMLDivElement>(null)
  const [isFocused, setIsFocused] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return
    const rect = divRef.current.getBoundingClientRect()
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsFocused(true)}
      onMouseLeave={() => setIsFocused(false)}
      className={cn("relative overflow-hidden rounded-xl", containerClassName)}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300"
        style={{
          opacity: isFocused ? 1 : 0,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(var(--primary-rgb, 99, 102, 241), 0.15), transparent 40%)`,
        }}
      />
      <div
        className={cn(
          "relative bg-card text-card-foreground border border-border/50 rounded-xl transition-all duration-300",
          isFocused && "border-primary/30 shadow-lg shadow-primary/5",
          className
        )}
      >
        {children}
      </div>
    </div>
  )
}
