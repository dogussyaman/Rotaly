'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Building2, Home, Building, TreePine, Hotel, Tent, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useI18n } from '@/lib/i18n'
import { cn } from '@/lib/utils'

const categories = [
  {
    id: 'hotel',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop',
    gradient: 'from-blue-600 to-blue-400',
  },
  {
    id: 'villa',
    icon: Home,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop',
    gradient: 'from-emerald-600 to-emerald-400',
  },
  {
    id: 'apartment',
    icon: Building,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop',
    gradient: 'from-orange-600 to-orange-400',
  },
  {
    id: 'bungalow',
    icon: TreePine,
    image: 'https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=600&h=400&fit=crop',
    gradient: 'from-amber-600 to-amber-400',
  },
  {
    id: 'guesthouse',
    icon: Hotel,
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&h=400&fit=crop',
    gradient: 'from-rose-600 to-rose-400',
  },
  {
    id: 'camping',
    icon: Tent,
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&h=400&fit=crop',
    gradient: 'from-teal-600 to-teal-400',
  },
]

export function CategoriesSection() {
  const { t, locale } = useI18n()
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const getCategoryLabel = (id: string) => {
    const labels: Record<string, string> = {
      hotel: t('nav.hotel'),
      villa: t('nav.villa'),
      apartment: t('nav.apartment'),
      bungalow: t('nav.bungalow'),
      guesthouse: t('nav.guesthouse'),
      camping: t('nav.camping'),
    }
    return labels[id] || id
  }

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[128px]" />
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-blue-500/5 rounded-full blur-[128px]" />
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-sm font-medium text-primary mb-2 block">
              {locale === 'tr' ? 'Keşfet' : 'Explore'}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              {t('nav.categories')}
            </h2>
            <p className="text-muted-foreground mt-2 max-w-lg">
              {locale === 'tr' 
                ? 'Size en uygun konaklama türünü seçin ve hemen aramaya başlayın'
                : 'Choose the accommodation type that suits you best and start searching'}
            </p>
          </div>
          
          {/* Navigation Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll('left')}
              className="rounded-full bg-transparent"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll('right')}
              className="rounded-full bg-transparent"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Categories Grid/Scroll */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 md:grid md:grid-cols-3 lg:grid-cols-6 md:overflow-visible md:mx-0 md:px-0"
        >
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <Link
                key={category.id}
                href={`/category/${category.id}`}
                className="flex-shrink-0 w-[260px] md:w-auto group"
              >
                <div className="relative h-[320px] md:h-[280px] rounded-2xl overflow-hidden">
                  {/* Background Image */}
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={getCategoryLabel(category.id)}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={cn(
                    "absolute inset-0 bg-gradient-to-t opacity-80 transition-opacity duration-300 group-hover:opacity-90",
                    category.gradient.replace('from-', 'from-').replace('to-', 'via-transparent to-')
                  )} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  {/* Content */}
                  <div className="absolute inset-0 p-5 flex flex-col justify-between">
                    {/* Icon Badge */}
                    <div className={cn(
                      "self-start p-3 rounded-xl bg-white/20 backdrop-blur-md border border-white/10",
                      "transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3"
                    )}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    
                    {/* Title */}
                    <div>
                      <h3 className="text-white font-bold text-xl mb-1">
                        {getCategoryLabel(category.id)}
                      </h3>
                      <p className="text-white/70 text-sm">
                        {locale === 'tr' ? '120+ Seçenek' : '120+ Options'}
                      </p>
                    </div>
                  </div>
                  
                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-white/0 group-hover:border-white/30 transition-colors duration-300" />
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
