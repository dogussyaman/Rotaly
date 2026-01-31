'use client'

import { useState } from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { PropertyCard } from '@/components/property/property-card'
import { useI18n } from '@/lib/i18n'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const mockProperties = [
  {
    id: '1',
    name: 'Kiad Deluxe Otel',
    location: 'Marmaris',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
    rating: 4.5,
    reviewCount: 120,
    price: 161160,
    amenities: ['free_cancellation', 'breakfast_included', 'free_parking'],
  },
  {
    id: '2',
    name: 'Azure Beach Resort',
    location: 'Bodrum',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop',
    rating: 4.8,
    reviewCount: 89,
    price: 245000,
    amenities: ['breakfast_included', 'pool', 'wifi'],
  },
  {
    id: '3',
    name: 'Mountain View Villa',
    location: 'Fethiye',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop',
    rating: 4.7,
    reviewCount: 56,
    price: 189500,
    amenities: ['free_cancellation', 'free_parking', 'pool'],
  },
  {
    id: '4',
    name: 'Sunset Bungalow',
    location: 'Antalya',
    image: 'https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800&h=600&fit=crop',
    rating: 4.6,
    reviewCount: 78,
    price: 135000,
    amenities: ['breakfast_included', 'wifi'],
  },
]

const tabs = [
  { id: 'popular', label: 'Populer', labelEn: 'Popular' },
  { id: 'trending', label: 'Trend', labelEn: 'Trending' },
  { id: 'new', label: 'Yeni Eklenen', labelEn: 'New' },
  { id: 'deals', label: 'Firsatlar', labelEn: 'Deals' },
]

export function FeaturedProperties() {
  const { t, locale } = useI18n()
  const [favorites, setFavorites] = useState<Set<string>>(new Set())
  const [activeTab, setActiveTab] = useState('popular')

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[128px]" />
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-primary mb-2">
              <Sparkles className="h-5 w-5" />
              <span className="text-sm font-medium">
                {locale === 'tr' ? 'One Cikanlar' : 'Featured'}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              {locale === 'tr' ? 'En Cok Tercih Edilenler' : 'Most Popular Choices'}
            </h2>
            <p className="text-muted-foreground mt-2 max-w-lg">
              {locale === 'tr' 
                ? 'Misafirlerimizin en cok begendigi konaklama secenekleri'
                : 'Accommodation options most loved by our guests'}
            </p>
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-1 p-1.5 bg-secondary/50 rounded-full border border-border/50">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-full transition-all duration-300",
                  activeTab === tab.id
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {locale === 'tr' ? tab.label : tab.labelEn}
              </button>
            ))}
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockProperties.map((property, index) => (
            <div
              key={property.id}
              className="animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <PropertyCard
                {...property}
                isFavorite={favorites.has(property.id)}
                onFavoriteToggle={() => toggleFavorite(property.id)}
              />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-12">
          <Button asChild size="lg" variant="outline" className="group gap-2 bg-transparent rounded-full px-8">
            <Link href="/search">
              {locale === 'tr' ? 'Tum Konaklamalari Gor' : 'View All Properties'}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
