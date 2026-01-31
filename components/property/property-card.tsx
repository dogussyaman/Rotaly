'use client'

import React from "react"

import { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Heart, MapPin, Star, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useI18n } from '@/lib/i18n'
import { cn } from '@/lib/utils'

interface PropertyCardProps {
  id: string
  name: string
  location: string
  image: string
  rating: number
  reviewCount: number
  price: number
  nights?: number
  amenities?: string[]
  isFavorite?: boolean
  onFavoriteToggle?: () => void
}

export function PropertyCard({
  id,
  name,
  location,
  image,
  rating,
  reviewCount,
  price,
  nights = 4,
  amenities = [],
  isFavorite = false,
  onFavoriteToggle,
}: PropertyCardProps) {
  const { t } = useI18n()
  const cardRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  const amenityLabels: Record<string, { label: string; color: string }> = {
    free_cancellation: { label: t('property.freeCancellation'), color: 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20' },
    breakfast_included: { label: t('property.breakfastIncluded'), color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20' },
    free_parking: { label: t('property.freeParking'), color: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20' },
    wifi: { label: t('property.wifi'), color: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20' },
    pool: { label: t('property.pool'), color: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20' },
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('tr-TR', {
      style: 'decimal',
      minimumFractionDigits: 0,
    }).format(price)
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      {/* Glow Effect */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(var(--primary-rgb, 99, 102, 241), 0.1), transparent 40%)`,
        }}
      />
      
      <div className="relative bg-card rounded-2xl border border-border/50 overflow-hidden transition-all duration-300 group-hover:border-primary/20 group-hover:shadow-xl group-hover:shadow-primary/5">
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Favorite Button */}
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "absolute top-3 right-3 h-10 w-10 rounded-full",
              "bg-white/90 dark:bg-black/50 backdrop-blur-md",
              "hover:bg-white dark:hover:bg-black/70",
              "border border-white/20 shadow-lg",
              "transition-transform duration-300 group-hover:scale-110",
              isFavorite && "text-red-500"
            )}
            onClick={(e) => {
              e.preventDefault()
              onFavoriteToggle?.()
            }}
          >
            <Heart className={cn("h-5 w-5", isFavorite && "fill-current")} />
            <span className="sr-only">
              {isFavorite ? t('property.removeFromFavorites') : t('property.addToFavorites')}
            </span>
          </Button>

          {/* Rating Badge */}
          <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-white/90 dark:bg-black/50 backdrop-blur-md border border-white/20">
            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
            <span className="text-sm font-semibold">{rating.toFixed(1)}</span>
            <span className="text-xs text-muted-foreground">({reviewCount})</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 space-y-4">
          {/* Title & Location */}
          <div>
            <h3 className="font-semibold text-lg line-clamp-1 group-hover:text-primary transition-colors">
              {name}
            </h3>
            <div className="flex items-center gap-1.5 text-muted-foreground mt-1">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">{location}</span>
            </div>
          </div>

          {/* Amenities */}
          {amenities.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {amenities.slice(0, 3).map((amenity) => {
                const config = amenityLabels[amenity]
                if (!config) return null
                return (
                  <Badge
                    key={amenity}
                    variant="outline"
                    className={cn("text-xs font-normal border", config.color)}
                  >
                    {config.label}
                  </Badge>
                )
              })}
            </div>
          )}

          {/* Price & Action */}
          <div className="flex flex-col gap-3 pt-4 border-t border-border/50">
            <div className="flex items-baseline justify-between">
              <div>
                <p className="text-xs text-muted-foreground">
                  {t('property.forNights', { nights })}
                </p>
                <p className="text-2xl font-bold">
                  <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                    {formatPrice(price)}
                  </span>
                  <span className="text-sm font-normal text-muted-foreground ml-1">TL</span>
                </p>
              </div>
            </div>
            <Button asChild className="w-full group/btn gap-2">
              <Link href={`/property/${id}`}>
                {t('common.viewDetails')}
                <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
