"use client"

import React from "react"

import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

interface TypewriterProps {
  words: string[]
  className?: string
  cursorClassName?: string
}

export function Typewriter({ words, className, cursorClassName }: TypewriterProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const word = words[currentWordIndex]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentText.length < word.length) {
            setCurrentText(word.slice(0, currentText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 1500)
          }
        } else {
          if (currentText.length > 0) {
            setCurrentText(currentText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentWordIndex((prev) => (prev + 1) % words.length)
          }
        }
      },
      isDeleting ? 50 : 100
    )

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentWordIndex, words])

  return (
    <span className={cn("inline-flex", className)}>
      <span>{currentText}</span>
      <span
        className={cn(
          "ml-1 inline-block w-[2px] h-[1em] bg-primary animate-blink",
          cursorClassName
        )}
      />
    </span>
  )
}

interface GradientTextProps {
  children: React.ReactNode
  className?: string
}

export function GradientText({ children, className }: GradientTextProps) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r from-primary via-blue-500 to-primary bg-clip-text text-transparent bg-[size:200%] animate-gradient-x",
        className
      )}
    >
      {children}
    </span>
  )
}

interface FadeInTextProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function FadeInText({ children, className, delay = 0 }: FadeInTextProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <span
      className={cn(
        "transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        className
      )}
    >
      {children}
    </span>
  )
}
