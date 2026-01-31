'use client'

import { useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { SlidersHorizontal, Grid, List, MapPin } from 'lucide-react'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { PropertyCard } from '@/components/property/property-card'
import { SearchBox } from '@/components/search/search-box'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Skeleton } from '@/components/ui/skeleton'
import { useI18n } from '@/lib/i18n'
import { cn } from '@/lib/utils'

// Mock data
const mockResults = [
  {
    id: '1',
    name: 'Kiad Deluxe Otel',
    location: 'Marmaris',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop',
    rating: 4.5,
    reviewCount: 120,
    price: 161160,
    nights: 4,
    amenities: ['free_cancellation', 'breakfast_included', 'free_parking'],
  },
  {
    id: '2',
    name: 'Grand Resort & Spa',
    location: 'Antalya',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop',
    rating: 4.8,
    reviewCount: 256,
    price: 245000,
    nights: 4,
    amenities: ['breakfast_included', 'pool', 'wifi'],
  },
  {
    id: '3',
    name: 'Boutique Beach Hotel',
    location: 'Bodrum',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&h=400&fit=crop',
    rating: 4.3,
    reviewCount: 89,
    price: 128500,
    nights: 4,
    amenities: ['free_cancellation', 'wifi', 'free_parking'],
  },
  {
    id: '4',
    name: 'Mountain View Lodge',
    location: 'Bolu',
    image: 'https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=600&h=400&fit=crop',
    rating: 4.6,
    reviewCount: 64,
    price: 98000,
    nights: 4,
    amenities: ['breakfast_included', 'free_parking'],
  },
  {
    id: '5',
    name: 'Seaside Villa',
    location: 'Fethiye',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop',
    rating: 4.9,
    reviewCount: 42,
    price: 350000,
    nights: 4,
    amenities: ['free_cancellation', 'pool', 'wifi'],
  },
  {
    id: '6',
    name: 'City Center Apartment',
    location: 'Istanbul',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop',
    rating: 4.2,
    reviewCount: 156,
    price: 85000,
    nights: 4,
    amenities: ['wifi', 'free_parking'],
  },
]

function SearchContent() {
  const searchParams = useSearchParams()
  const { t } = useI18n()
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [favorites, setFavorites] = useState<Set<string>>(new Set())
  const [priceRange, setPriceRange] = useState([0, 500000])
  const [sortBy, setSortBy] = useState('recommended')

  const destination = searchParams.get('destination') || ''

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
      {/* Price Range */}
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

      {/* Property Type */}
      <div className="space-y-3">
        <h3 className="font-semibold">Konaklama Tipi</h3>
        {['hotel', 'villa', 'apartment', 'bungalow', 'guesthouse', 'camping'].map((type) => (
          <div key={type} className="flex items-center space-x-2">
            <Checkbox id={type} />
            <Label htmlFor={type} className="text-sm font-normal cursor-pointer">
              {t(`nav.${type}`)}
            </Label>
          </div>
        ))}
      </div>

      {/* Amenities */}
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

      {/* Rating */}
      <div className="space-y-3">
        <h3 className="font-semibold">Puan</h3>
        {[
          { value: '4.5', label: '4.5+ Harika' },
          { value: '4', label: '4+ Çok İyi' },
          { value: '3.5', label: '3.5+ İyi' },
          { value: '3', label: '3+ Orta' },
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
        {/* Search Box */}
        <div className="bg-secondary/30 py-6">
          <div className="container mx-auto px-4">
            <SearchBox />
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {/* Results Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold">
                {destination ? `${destination} Konaklama Seçenekleri` : 'Arama Sonuçları'}
              </h1>
              <p className="text-muted-foreground mt-1">
                {mockResults.length} sonuç bulundu
              </p>
            </div>

            <div className="flex items-center gap-2">
              {/* Mobile Filter */}
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

              {/* Sort */}
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

              {/* View Mode */}
              <div className="hidden md:flex items-center border rounded-md">
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    "rounded-r-none",
                    viewMode === 'grid' && "bg-accent"
                  )}
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    "rounded-l-none",
                    viewMode === 'list' && "bg-accent"
                  )}
                  onClick={() => setViewMode('list')}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="flex gap-8">
            {/* Desktop Sidebar */}
            <aside className="hidden lg:block w-64 shrink-0">
              <div className="sticky top-24 bg-card rounded-lg border p-6">
                <h2 className="font-semibold mb-4">{t('common.filter')}</h2>
                <FilterPanel />
              </div>
            </aside>

            {/* Results Grid */}
            <div className="flex-1">
              <div className={cn(
                "grid gap-6",
                viewMode === 'grid'
                  ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
                  : "grid-cols-1"
              )}>
                {mockResults.map((property) => (
                  <PropertyCard
                    key={property.id}
                    {...property}
                    isFavorite={favorites.has(property.id)}
                    onFavoriteToggle={() => toggleFavorite(property.id)}
                  />
                ))}
              </div>

              {/* Load More */}
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

function SearchPageSkeleton() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="h-16 border-b" />
      <div className="bg-secondary/30 py-6">
        <div className="container mx-auto px-4">
          <Skeleton className="h-24 w-full rounded-2xl" />
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Skeleton key={i} className="h-96 rounded-lg" />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={<SearchPageSkeleton />}>
      <SearchContent />
    </Suspense>
  )
}
