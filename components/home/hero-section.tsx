'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useI18n } from '@/lib/i18n'
import { SearchBox } from '@/components/search/search-box'
import { Spotlight } from '@/components/ui/spotlight'
import { cn } from '@/lib/utils'

const heroImages = [
  'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1600&h=900&fit=crop',
  'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1600&h=900&fit=crop',
  'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1600&h=900&fit=crop',
]

const typewriterWords = ['Otel', 'Villa', 'Bungalov', 'Pansiyon', 'Kamp']

export function HeroSection() {
  const { t, locale } = useI18n()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Image carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Typewriter effect
  useEffect(() => {
    const word = typewriterWords[currentWordIndex]
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
            setCurrentWordIndex((prev) => (prev + 1) % typewriterWords.length)
          }
        }
      },
      isDeleting ? 50 : 100
    )
    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentWordIndex])

  return (
    <section className="relative min-h-[85vh] flex flex-col">
      {/* Spotlight Effect */}
      <Spotlight className="z-10" fill="hsl(var(--primary))" />

      {/* Animated Grid Background */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-[128px] -z-10 animate-pulse" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px] -z-10 animate-pulse delay-1000" />

      <div className="container mx-auto px-4 pt-8 md:pt-8 pb-4 flex-1 flex flex-col">
        {/* Hero Text */}
        <div className={cn(
          "text-center max-w-4xl mx-auto mb-6 transition-all duration-1000",
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            {locale === 'tr' ? 'Hayalinizdeki ' : 'Your Dream '}
            <span className="relative">
              <span className="bg-gradient-to-r from-primary via-blue-500 to-primary bg-clip-text text-transparent bg-[size:200%] animate-gradient-x">
                {currentText}
              </span>
              <span className="inline-block w-[3px] h-[0.9em] bg-primary animate-blink ml-1 align-middle" />
            </span>
            <br />
            {locale === 'tr' ? 'Bir Tık Uzağınızda' : 'Just One Click Away'}
          </h1>

          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>
        </div>

        {/* Hero Image with Modern Frame */}
        <div className={cn(
          "relative w-full max-w-6xl mx-auto transition-all duration-1000 delay-300",
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <div className="relative">
            {/* Glow effect behind image */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-blue-500/20 to-primary/20 rounded-3xl blur-2xl opacity-50" />

            {/* Image Container */}
            <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-2xl md:rounded-3xl overflow-hidden border border-border/50 shadow-2xl">
              {heroImages.map((src, index) => (
                <Image
                  key={src}
                  src={src || "/placeholder.svg"}
                  alt="Destination"
                  fill
                  className={cn(
                    "object-cover transition-all duration-1000",
                    index === currentImageIndex ? "opacity-100 scale-100" : "opacity-0 scale-105"
                  )}
                  priority={index === 0}
                />
              ))}

              {/* Overlay gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />

              {/* Image indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-300",
                      index === currentImageIndex ? "w-8 bg-white" : "w-1.5 bg-white/50 hover:bg-white/70"
                    )}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Search Box */}
        <div className={cn(
          "relative z-20 -mt-8 md:-mt-16 transition-all duration-1000 delay-500",
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <SearchBox />
        </div>
      </div>
    </section>
  )
}
