'use client'

import { use, useState } from 'react'
import Image from 'next/image'
import { format } from 'date-fns'
import { tr, enUS } from 'date-fns/locale'
import Link from 'next/link'
import {
  MapPin, Star, Heart, Share2, Wifi, Car, Coffee, Waves,
  Dumbbell, Utensils, Wind, CalendarIcon, Users, Check, ChevronLeft, ChevronRight
} from 'lucide-react'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import { useI18n } from '@/lib/i18n'
import { cn } from '@/lib/utils'
import type { DateRange } from 'react-day-picker'

// Mock property data
const mockProperty = {
  id: '1',
  name: 'Kiad Deluxe Otel',
  location: 'Marmaris, Muğla',
  address: 'Siteler Mah. 123. Sok. No:45, 48700 Marmaris/Muğla',
  rating: 4.5,
  reviewCount: 120,
  description: 'Marmaris\'in en güzel koylarından birinde yer alan otelimiz, denize sıfır konumu ve lüks hizmetleriyle unutulmaz bir tatil deneyimi sunuyor. Modern tasarımlı odalarımız, çeşitli yeme-içme seçeneklerimiz ve SPA merkezimizle misafirlerimizi ağırlıyoruz.',
  images: [
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&h=600&fit=crop',
  ],
  amenities: [
    { icon: Wifi, label: 'Ücretsiz Wi-Fi' },
    { icon: Car, label: 'Ücretsiz Otopark' },
    { icon: Coffee, label: 'Kahvaltı Dahil' },
    { icon: Waves, label: 'Açık Havuz' },
    { icon: Dumbbell, label: 'Fitness Merkezi' },
    { icon: Utensils, label: 'Restoran' },
    { icon: Wind, label: 'Klima' },
  ],
  checkInTime: '14:00',
  checkOutTime: '12:00',
  rooms: [
    {
      id: 'r1',
      name: 'Standart Oda',
      description: 'Bahçe manzaralı, 25m², çift kişilik yatak',
      price: 35000,
      capacity: 2,
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop',
    },
    {
      id: 'r2',
      name: 'Deluxe Oda',
      description: 'Deniz manzaralı, 35m², king size yatak, balkon',
      price: 52000,
      capacity: 2,
      image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=400&h=300&fit=crop',
    },
    {
      id: 'r3',
      name: 'Suite Oda',
      description: 'Panoramik deniz manzaralı, 55m², oturma odası, jakuzi',
      price: 85000,
      capacity: 4,
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=300&fit=crop',
    },
  ],
  reviews: [
    {
      id: 'rv1',
      user: 'Ahmet Y.',
      avatar: '',
      rating: 5,
      date: '2026-01-15',
      comment: 'Harika bir tatil geçirdik. Personel çok ilgili, yemekler lezzetli. Kesinlikle tavsiye ederim.',
    },
    {
      id: 'rv2',
      user: 'Elif K.',
      avatar: '',
      rating: 4,
      date: '2026-01-10',
      comment: 'Otel temiz ve konforlu. Havuz alanı çok güzel. Sadece kahvaltı çeşitleri biraz daha fazla olabilirdi.',
    },
  ],
}

export default function PropertyDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = use(params)
  const { t, locale } = useI18n()
  const dateLocale = locale === 'tr' ? tr : enUS

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isFavorite, setIsFavorite] = useState(false)
  const [dateRange, setDateRange] = useState<DateRange | undefined>()
  const [selectedRoom, setSelectedRoom] = useState(mockProperty.rooms[0])

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('tr-TR', {
      style: 'decimal',
      minimumFractionDigits: 0,
    }).format(price)
  }

  const nights = dateRange?.from && dateRange?.to
    ? Math.ceil((dateRange.to.getTime() - dateRange.from.getTime()) / (1000 * 60 * 60 * 24))
    : 1

  const totalPrice = selectedRoom.price * nights

  const bookingSearchParams = () => {
    const q = new URLSearchParams()
    if (dateRange?.from) q.set('check_in', dateRange.from.toISOString().slice(0, 10))
    if (dateRange?.to) q.set('check_out', dateRange.to.toISOString().slice(0, 10))
    q.set('room_id', selectedRoom.id)
    q.set('adults', '2')
    q.set('children', '0')
    q.set('nights', String(nights))
    const s = q.toString()
    return s ? `?${s}` : ''
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Image Gallery */}
        <section className="relative bg-muted">
          <div className="container mx-auto px-4 py-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 max-h-[500px] overflow-hidden rounded-xl">
              {/* Main Image */}
              <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full">
                <Image
                  src={mockProperty.images[currentImageIndex] || "/placeholder.svg"}
                  alt={mockProperty.name}
                  fill
                  className="object-cover rounded-lg"
                />
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <Button
                    variant="secondary"
                    size="icon"
                    onClick={() => setCurrentImageIndex((prev) =>
                      prev === 0 ? mockProperty.images.length - 1 : prev - 1
                    )}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="secondary"
                    size="icon"
                    onClick={() => setCurrentImageIndex((prev) =>
                      prev === mockProperty.images.length - 1 ? 0 : prev + 1
                    )}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Thumbnail Grid */}
              <div className="hidden lg:grid grid-cols-2 gap-2 h-full">
                {mockProperty.images.slice(1, 5).map((image, index) => (
                  <button
                    key={index}
                    className={cn(
                      "relative aspect-[4/3] rounded-lg overflow-hidden",
                      currentImageIndex === index + 1 && "ring-2 ring-primary"
                    )}
                    onClick={() => setCurrentImageIndex(index + 1)}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${mockProperty.name} - ${index + 2}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{mockProperty.name}</h1>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{mockProperty.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      <span className="font-medium text-foreground">{mockProperty.rating}</span>
                      <span>({mockProperty.reviewCount} {t('property.reviews')})</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setIsFavorite(!isFavorite)}
                  >
                    <Heart className={cn("h-5 w-5", isFavorite && "fill-red-500 text-red-500")} />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              {/* Tabs */}
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="w-full justify-start">
                  <TabsTrigger value="overview">{t('property.description')}</TabsTrigger>
                  <TabsTrigger value="rooms">{t('property.availableRooms')}</TabsTrigger>
                  <TabsTrigger value="amenities">{t('property.amenities')}</TabsTrigger>
                  <TabsTrigger value="reviews">{t('property.guestReviews')}</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-6 space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {mockProperty.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <Card>
                      <CardContent className="p-4 flex items-center gap-3">
                        <CalendarIcon className="h-5 w-5 text-primary" />
                        <div>
                          <p className="text-sm text-muted-foreground">{t('property.checkInTime')}</p>
                          <p className="font-medium">{mockProperty.checkInTime}</p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4 flex items-center gap-3">
                        <CalendarIcon className="h-5 w-5 text-primary" />
                        <div>
                          <p className="text-sm text-muted-foreground">{t('property.checkOutTime')}</p>
                          <p className="font-medium">{mockProperty.checkOutTime}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Quick Amenities */}
                  <div className="flex flex-wrap gap-2">
                    {mockProperty.amenities.slice(0, 4).map((amenity, index) => {
                      const Icon = amenity.icon
                      return (
                        <Badge key={index} variant="secondary" className="gap-1.5 py-1.5">
                          <Icon className="h-3.5 w-3.5" />
                          {amenity.label}
                        </Badge>
                      )
                    })}
                  </div>
                </TabsContent>

                <TabsContent value="rooms" className="mt-6 space-y-4">
                  {mockProperty.rooms.map((room) => (
                    <Card
                      key={room.id}
                      className={cn(
                        "cursor-pointer transition-all",
                        selectedRoom.id === room.id && "ring-2 ring-primary"
                      )}
                      onClick={() => setSelectedRoom(room)}
                    >
                      <CardContent className="p-4">
                        <div className="flex gap-4">
                          <div className="relative w-32 h-24 rounded-lg overflow-hidden shrink-0">
                            <Image
                              src={room.image || "/placeholder.svg"}
                              alt={room.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between">
                              <div>
                                <h3 className="font-semibold">{room.name}</h3>
                                <p className="text-sm text-muted-foreground">{room.description}</p>
                                <div className="flex items-center gap-1 mt-2 text-sm text-muted-foreground">
                                  <Users className="h-4 w-4" />
                                  <span>{room.capacity} kişi</span>
                                </div>
                              </div>
                              <div className="text-right">
                                <p className="text-xl font-bold text-primary">
                                  {formatPrice(room.price)} TL
                                </p>
                                <p className="text-sm text-muted-foreground">/ gece</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="amenities" className="mt-6">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {mockProperty.amenities.map((amenity, index) => {
                      const Icon = amenity.icon
                      return (
                        <div key={index} className="flex items-center gap-3 p-3 rounded-lg border">
                          <Icon className="h-5 w-5 text-primary" />
                          <span>{amenity.label}</span>
                        </div>
                      )
                    })}
                  </div>
                </TabsContent>

                <TabsContent value="reviews" className="mt-6 space-y-4">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-center">
                      <p className="text-4xl font-bold">{mockProperty.rating}</p>
                      <div className="flex justify-center mt-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={cn(
                              "h-4 w-4",
                              star <= Math.round(mockProperty.rating)
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-300"
                            )}
                          />
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        {mockProperty.reviewCount} {t('property.reviews')}
                      </p>
                    </div>
                  </div>

                  {mockProperty.reviews.map((review) => (
                    <Card key={review.id}>
                      <CardContent className="p-4">
                        <div className="flex items-start gap-4">
                          <Avatar>
                            <AvatarImage src={review.avatar || "/placeholder.svg"} />
                            <AvatarFallback>{review.user.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <p className="font-medium">{review.user}</p>
                              <p className="text-sm text-muted-foreground">{review.date}</p>
                            </div>
                            <div className="flex mt-1">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                  key={star}
                                  className={cn(
                                    "h-3.5 w-3.5",
                                    star <= review.rating
                                      ? "text-yellow-400 fill-yellow-400"
                                      : "text-gray-300"
                                  )}
                                />
                              ))}
                            </div>
                            <p className="text-muted-foreground mt-2">{review.comment}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}

                  <Button variant="outline" className="w-full bg-transparent">
                    Tüm Yorumları Gör
                  </Button>
                </TabsContent>
              </Tabs>
            </div>

            {/* Booking Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>{t('booking.title')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Date Selection */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Tarih Seçin</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !dateRange && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {dateRange?.from ? (
                            dateRange.to ? (
                              <>
                                {format(dateRange.from, "d MMM", { locale: dateLocale })} -{" "}
                                {format(dateRange.to, "d MMM yyyy", { locale: dateLocale })}
                              </>
                            ) : (
                              format(dateRange.from, "d MMM yyyy", { locale: dateLocale })
                            )
                          ) : (
                            t('search.selectDates')
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="range"
                          selected={dateRange}
                          onSelect={setDateRange}
                          numberOfMonths={2}
                          disabled={{ before: new Date() }}
                          locale={dateLocale}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  {/* Selected Room */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Seçili Oda</label>
                    <div className="p-3 rounded-lg border bg-muted/50">
                      <p className="font-medium">{selectedRoom.name}</p>
                      <p className="text-sm text-muted-foreground">{selectedRoom.description}</p>
                    </div>
                  </div>

                  <Separator />

                  {/* Price Breakdown */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{formatPrice(selectedRoom.price)} TL x {nights} gece</span>
                      <span>{formatPrice(selectedRoom.price * nights)} TL</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>{t('booking.serviceFee')}</span>
                      <span>{formatPrice(Math.round(totalPrice * 0.05))} TL</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-bold text-lg">
                      <span>{t('booking.total')}</span>
                      <span className="text-primary">
                        {formatPrice(Math.round(totalPrice * 1.05))} TL
                      </span>
                    </div>
                  </div>

                  <Button className="w-full" size="lg" asChild>
                    <Link href={`/property/${id}/booking${bookingSearchParams()}`}>
                      {t('property.bookNow')}
                    </Link>
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    Henüz ödeme alınmayacak
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
