'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, ChevronLeft, ChevronRight, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useI18n } from '@/lib/i18n'
import { cn } from '@/lib/utils'

const destinations = [
  {
    id: 'istanbul',
    name: 'Istanbul',
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=600&h=800&fit=crop',
    properties: 1250,
    trending: true,
  },
  {
    id: 'antalya',
    name: 'Antalya',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&h=800&fit=crop',
    properties: 890,
    trending: true,
  },
  {
    id: 'bodrum',
    name: 'Bodrum',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=800&fit=crop',
    properties: 654,
    trending: false,
  },
  {
    id: 'fethiye',
    name: 'Fethiye',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&h=800&fit=crop',
    properties: 432,
    trending: false,
  },
  {
    id: 'cesme',
    name: 'Cesme',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=800&fit=crop',
    properties: 321,
    trending: true,
  },
  {
    id: 'kapadokya',
    name: 'Kapadokya',
    image: 'https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=600&h=800&fit=crop',
    properties: 287,
    trending: true,
  },
]

export function DestinationsSection() {
  const { locale } = useI18n()
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section className="py-20 relative overflow-hidden bg-secondary/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#374151_1px,transparent_1px)] bg-[size:24px_24px] opacity-50" />
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-primary mb-2">
              <MapPin className="h-5 w-5" />
              <span className="text-sm font-medium">
                {locale === 'tr' ? 'Populer Destinasyonlar' : 'Popular Destinations'}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              {locale === 'tr' ? 'Nereye Gitmek Istersiniz?' : 'Where Do You Want to Go?'}
            </h2>
            <p className="text-muted-foreground mt-2 max-w-lg">
              {locale === 'tr' 
                ? 'Turkiyenin en populer tatil destinasyonlarini kesfedin'
                : 'Discover the most popular holiday destinations in Turkey'}
            </p>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll('left')}
              className="rounded-full bg-background"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll('right')}
              className="rounded-full bg-background"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Destinations Grid */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 md:grid md:grid-cols-6 md:overflow-visible md:mx-0 md:px-0"
        >
          {destinations.map((destination, index) => (
            <Link
              key={destination.id}
              href={`/search?destination=${destination.name}`}
              className={cn(
                "flex-shrink-0 w-[200px] md:w-auto group relative",
                index === 0 && "md:col-span-2 md:row-span-2"
              )}
            >
              <div className={cn(
                "relative overflow-hidden rounded-2xl",
                index === 0 ? "h-[400px] md:h-full" : "h-[250px] md:h-[200px]"
              )}>
                {/* Image */}
                <Image
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Trending Badge */}
                {destination.trending && (
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                    <TrendingUp className="h-3.5 w-3.5" />
                    Trend
                  </div>
                )}
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className={cn(
                    "text-white font-bold mb-1",
                    index === 0 ? "text-2xl md:text-3xl" : "text-lg"
                  )}>
                    {destination.name}
                  </h3>
                  <p className="text-white/70 text-sm">
                    {destination.properties} {locale === 'tr' ? 'konaklama' : 'properties'}
                  </p>
                </div>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/30 rounded-2xl transition-colors duration-300" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
