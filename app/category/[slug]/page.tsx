'use client'

import { use, useState } from 'react'
import Image from 'next/image'
import { SlidersHorizontal, Grid, List } from 'lucide-react'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { PropertyCard } from '@/components/property/property-card'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useI18n } from '@/lib/i18n'
import { cn } from '@/lib/utils'

const categoryData: Record<string, { image: string; description: string }> = {
  hotel: {
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&h=400&fit=crop',
    description: 'En iyi otel seçenekleriyle konforlu bir konaklama deneyimi yaşayın.',
  },
  villa: {
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1600&h=400&fit=crop',
    description: 'Lüks villalarda özel ve huzurlu bir tatil deneyimi.',
  },
  apartment: {
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1600&h=400&fit=crop',
    description: 'Evinizin konforunu hissedeceğiniz kiralık daire seçenekleri.',
  },
  bungalow: {
    image: 'https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=1600&h=400&fit=crop',
    description: 'Doğayla iç içe, huzurlu bungalov tatili.',
  },
  guesthouse: {
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1600&h=400&fit=crop',
    description: 'Samimi ve sıcak bir atmosferde pansiyon konaklaması.',
  },
  camping: {
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1600&h=400&fit=crop',
    description: 'Doğanın kalbinde kamp deneyimi.',
  },
}

// Mock data for properties
const mockProperties = [
  {
    id: '1',
    name: 'Luxury Beach Resort',
    location: 'Antalya',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop',
    rating: 4.8,
    reviewCount: 256,
    price: 245000,
    nights: 4,
    amenities: ['breakfast_included', 'pool', 'wifi'],
  },
  {
    id: '2',
    name: 'Seaside Paradise',
    location: 'Bodrum',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&h=400&fit=crop',
    rating: 4.6,
    reviewCount: 189,
    price: 198000,
    nights: 4,
    amenities: ['free_cancellation', 'pool', 'free_parking'],
  },
  {
    id: '3',
    name: 'Mountain Retreat',
    location: 'Bolu',
    image: 'https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=600&h=400&fit=crop',
    rating: 4.4,
    reviewCount: 92,
    price: 125000,
    nights: 4,
    amenities: ['breakfast_included', 'free_parking'],
  },
  {
    id: '4',
    name: 'City Center Hotel',
    location: 'Istanbul',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop',
    rating: 4.3,
    reviewCount: 312,
    price: 165000,
    nights: 4,
    amenities: ['wifi', 'free_cancellation'],
  },
]

export default function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = use(params)
  const { t } = useI18n()
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [favorites, setFavorites] = useState<Set<string>>(new Set())
  const [priceRange, setPriceRange] = useState([0, 500000])
  const [sortBy, setSortBy] = useState('recommended')

  const category = categoryData[slug] || categoryData.hotel
  const categoryName = t(`nav.${slug}`) || slug

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => {
      const newFavorites = new Set(prev)
      if (newFavorites.has(id)) {
        newFavorites.delete(id)
      } else {
        newFavorites.add(id)
      }
      return newFavorites
    })
  }

  const FilterPanel = () => (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="font-semibold">Fiyat Aralığı</h3>
        <Slider
          value={priceRange}
          min={0}
          max={500000}
          step={10000}
          onValueChange={setPriceRange}
        />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>{priceRange[0].toLocaleString('tr-TR')} TL</span>
          <span>{priceRange[1].toLocaleString('tr-TR')} TL</span>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="font-semibold">Olanaklar</h3>
        {[
          { id: 'wifi', label: t('property.wifi') },
          { id: 'pool', label: t('property.pool') },
          { id: 'breakfast', label: t('property.breakfastIncluded') },
          { id: 'parking', label: t('property.freeParking') },
          { id: 'cancellation', label: t('property.freeCancellation') },
        ].map((amenity) => (
          <div key={amenity.id} className="flex items-center space-x-2">
            <Checkbox id={amenity.id} />
            <Label htmlFor={amenity.id} className="text-sm font-normal cursor-pointer">
              {amenity.label}
            </Label>
          </div>
        ))}
      </div>

      <div className="space-y-3">
        <h3 className="font-semibold">Puan</h3>
        {[
          { value: '4.5', label: '4.5+ Harika' },
          { value: '4', label: '4+ Çok İyi' },
          { value: '3.5', label: '3.5+ İyi' },
        ].map((rating) => (
          <div key={rating.value} className="flex items-center space-x-2">
            <Checkbox id={`rating-${rating.value}`} />
            <Label htmlFor={`rating-${rating.value}`} className="text-sm font-normal cursor-pointer">
              {rating.label}
            </Label>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Banner */}
        <div className="relative h-48 md:h-64">
          <Image
            src={category.image || "/placeholder.svg"}
            alt={categoryName}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-4 pb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {categoryName}
              </h1>
              <p className="text-white/80 max-w-2xl">
                {category.description}
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {/* Results Header */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-muted-foreground">
              {mockProperties.length} sonuç bulundu
            </p>

            <div className="flex items-center gap-2">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="lg:hidden bg-transparent">
                    <SlidersHorizontal className="h-4 w-4 mr-2" />
                    {t('common.filter')}
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80 overflow-y-auto">
                  <SheetHeader>
                    <SheetTitle>{t('common.filter')}</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6">
                    <FilterPanel />
                  </div>
                </SheetContent>
              </Sheet>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder={t('common.sort')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recommended">Önerilen</SelectItem>
                  <SelectItem value="price-asc">Fiyat (Düşükten Yükseğe)</SelectItem>
                  <SelectItem value="price-desc">Fiyat (Yüksekten Düşüğe)</SelectItem>
                  <SelectItem value="rating">Puan</SelectItem>
                </SelectContent>
              </Select>

              <div className="hidden md:flex items-center border rounded-md">
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn("rounded-r-none", viewMode === 'grid' && "bg-accent")}
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn("rounded-l-none", viewMode === 'list' && "bg-accent")}
                  onClick={() => setViewMode('list')}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="flex gap-8">
            <aside className="hidden lg:block w-64 shrink-0">
              <div className="sticky top-24 bg-card rounded-lg border p-6">
                <h2 className="font-semibold mb-4">{t('common.filter')}</h2>
                <FilterPanel />
              </div>
            </aside>

            <div className="flex-1">
              <div className={cn(
                "grid gap-6",
                viewMode === 'grid'
                  ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
                  : "grid-cols-1"
              )}>
                {mockProperties.map((property) => (
                  <PropertyCard
                    key={property.id}
                    {...property}
                    isFavorite={favorites.has(property.id)}
                    onFavoriteToggle={() => toggleFavorite(property.id)}
                  />
                ))}
              </div>

              <div className="flex justify-center mt-8">
                <Button variant="outline" size="lg">
                  Daha Fazla Göster
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
