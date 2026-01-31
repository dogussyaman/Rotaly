'use client'

import {
    Building2, CalendarCheck, TrendingUp, Star, DollarSign, ArrowUpRight, ArrowDownRight,
    Bed, Eye, MessageSquare, Plus, Settings, BarChart3
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useI18n } from '@/lib/i18n'
import { cn } from '@/lib/utils'

const stats = [
    {
        title: 'Bu Ayki Gelir',
        value: '₺145.000',
        change: '+18.2%',
        trend: 'up',
        icon: DollarSign,
        color: 'text-emerald-500',
        bgColor: 'bg-emerald-500/10',
    },
    {
        title: 'Aktif Rezervasyonlar',
        value: '48',
        change: '+12',
        trend: 'up',
        icon: CalendarCheck,
        color: 'text-blue-500',
        bgColor: 'bg-blue-500/10',
    },
    {
        title: 'Doluluk Oranı',
        value: '%82',
        change: '+5.3%',
        trend: 'up',
        icon: TrendingUp,
        color: 'text-orange-500',
        bgColor: 'bg-orange-500/10',
    },
    {
        title: 'Ortalama Puan',
        value: '4.7',
        change: '+0.2',
        trend: 'up',
        icon: Star,
        color: 'text-yellow-500',
        bgColor: 'bg-yellow-500/10',
    },
]

const myProperties = [
    {
        id: '1',
        name: 'Grand Resort & Spa',
        type: 'hotel',
        location: 'Antalya, Türkiye',
        rating: 4.8,
        reviewCount: 234,
        roomCount: 120,
        activeBookings: 85,
        occupancyRate: 88,
        isActive: true,
        isFeatured: true,
        image: '/placeholder-hotel.jpg',
    },
    {
        id: '2',
        name: 'Boutique Beach Hotel',
        type: 'hotel',
        location: 'Bodrum, Türkiye',
        rating: 4.6,
        reviewCount: 156,
        roomCount: 45,
        activeBookings: 32,
        occupancyRate: 71,
        isActive: true,
        isFeatured: false,
        image: '/placeholder-hotel.jpg',
    },
    {
        id: '3',
        name: 'Mountain View Lodge',
        type: 'bungalow',
        location: 'Uludağ, Türkiye',
        rating: 4.5,
        reviewCount: 89,
        roomCount: 24,
        activeBookings: 18,
        occupancyRate: 75,
        isActive: true,
        isFeatured: false,
        image: '/placeholder-hotel.jpg',
    },
]

const recentBookings = [
    {
        id: '1',
        bookingNumber: 'ROT20260131-A1B2C3',
        guest: 'Ahmet Yılmaz',
        property: 'Grand Resort & Spa',
        room: 'Deluxe Suite',
        checkIn: '15 Şub 2026',
        checkOut: '18 Şub 2026',
        nights: 3,
        amount: '₺12,500',
        status: 'confirmed',
        createdAt: '2 saat önce',
    },
    {
        id: '2',
        bookingNumber: 'ROT20260131-D4E5F6',
        guest: 'Elif Kaya',
        property: 'Boutique Beach Hotel',
        room: 'Family Room',
        checkIn: '20 Şub 2026',
        checkOut: '25 Şub 2026',
        nights: 5,
        amount: '₺28,000',
        status: 'pending',
        createdAt: '5 saat önce',
    },
    {
        id: '3',
        bookingNumber: 'ROT20260130-G7H8I9',
        guest: 'Mehmet Demir',
        property: 'Mountain View Lodge',
        room: 'Standard Bungalow',
        checkIn: '22 Şub 2026',
        checkOut: '24 Şub 2026',
        nights: 2,
        amount: '₺6,400',
        status: 'confirmed',
        createdAt: '1 gün önce',
    },
    {
        id: '4',
        bookingNumber: 'ROT20260130-J1K2L3',
        guest: 'Zeynep Arslan',
        property: 'Grand Resort & Spa',
        room: 'Penthouse Suite',
        checkIn: '28 Şub 2026',
        checkOut: '5 Mar 2026',
        nights: 7,
        amount: '₺52,500',
        status: 'confirmed',
        createdAt: '1 gün önce',
    },
]

const recentReviews = [
    {
        id: '1',
        guest: 'Ali Veli',
        property: 'Grand Resort & Spa',
        rating: 5,
        comment: 'Harika bir deneyimdi! Personel çok ilgili, odalar temiz ve manzara muhteşem.',
        createdAt: '3 saat önce',
        isApproved: true,
    },
    {
        id: '2',
        guest: 'Fatma Yıldız',
        property: 'Boutique Beach Hotel',
        rating: 4,
        comment: 'Genel olarak memnun kaldık. Sadece kahvaltı biraz daha zengin olabilirdi.',
        createdAt: '1 gün önce',
        isApproved: true,
    },
    {
        id: '3',
        guest: 'Can Özkan',
        property: 'Mountain View Lodge',
        rating: 5,
        comment: 'Doğa ile iç içe harika bir tatil. Kesinlikle tekrar geleceğiz.',
        createdAt: '2 gün önce',
        isApproved: false,
    },
]

export default function HotelOwnerDashboard() {
    const { t } = useI18n()

    const getStatusBadge = (status: string) => {
        const styles: Record<string, string> = {
            confirmed: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
            pending: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
            cancelled: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
            completed: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
        }
        const labels: Record<string, string> = {
            confirmed: 'Onaylandı',
            pending: 'Beklemede',
            cancelled: 'İptal',
            completed: 'Tamamlandı',
        }
        return (
            <Badge variant="secondary" className={cn("font-normal", styles[status])}>
                {labels[status]}
            </Badge>
        )
    }

    const getPropertyTypeBadge = (type: string) => {
        const labels: Record<string, string> = {
            hotel: 'Otel',
            villa: 'Villa',
            apartment: 'Apart',
            bungalow: 'Bungalov',
            hostel: 'Hostel',
            camp: 'Kamp',
        }
        return (
            <Badge variant="outline" className="font-normal">
                {labels[type] || type}
            </Badge>
        )
    }

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold">Otel Sahibi Dashboard</h1>
                <p className="text-muted-foreground">Tesislerinizi yönetin ve performansınızı takip edin.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => {
                    const Icon = stat.icon
                    return (
                        <Card key={stat.title} className="dark:bg-zinc-800">
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between">
                                    <div className={cn("p-2 rounded-lg", stat.bgColor)}>
                                        <Icon className={cn("h-5 w-5", stat.color)} />
                                    </div>
                                    <div className={cn(
                                        "flex items-center gap-1 text-sm font-medium",
                                        stat.trend === 'up' ? "text-emerald-500" : "text-red-500"
                                    )}>
                                        {stat.trend === 'up' ? (
                                            <ArrowUpRight className="h-4 w-4" />
                                        ) : (
                                            <ArrowDownRight className="h-4 w-4" />
                                        )}
                                        {stat.change}
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <p className="text-2xl font-bold">{stat.value}</p>
                                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                                </div>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>

            {/* My Properties */}
            <Card className="dark:bg-zinc-800">
                <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                        <CardTitle>Tesislerim</CardTitle>
                        <CardDescription>Sahip olduğunuz tüm tesisler ve performansları</CardDescription>
                    </div>
                    <Button variant="outline" size="sm">
                        <Plus className="h-4 w-4 mr-2" />
                        Yeni Tesis Ekle
                    </Button>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {myProperties.map((property) => (
                            <div key={property.id} className="flex items-center gap-4 p-4 rounded-lg border dark:border-zinc-700 hover:bg-accent/50 transition-colors">
                                <div className="w-20 h-20 rounded-lg bg-muted flex items-center justify-center">
                                    <Building2 className="h-8 w-8 text-muted-foreground" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-1">
                                        <h3 className="font-semibold">{property.name}</h3>
                                        {property.isFeatured && (
                                            <Badge variant="secondary" className="bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400">
                                                Öne Çıkan
                                            </Badge>
                                        )}
                                        {getPropertyTypeBadge(property.type)}
                                    </div>
                                    <p className="text-sm text-muted-foreground mb-2">{property.location}</p>
                                    <div className="flex items-center gap-4 text-sm">
                                        <div className="flex items-center gap-1">
                                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                            <span className="font-medium">{property.rating}</span>
                                            <span className="text-muted-foreground">({property.reviewCount})</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Bed className="h-4 w-4 text-muted-foreground" />
                                            <span>{property.roomCount} oda</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <CalendarCheck className="h-4 w-4 text-muted-foreground" />
                                            <span>{property.activeBookings} rezervasyon</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <TrendingUp className="h-4 w-4 text-muted-foreground" />
                                            <span>%{property.occupancyRate} doluluk</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Button variant="ghost" size="sm">
                                        <Eye className="h-4 w-4" />
                                    </Button>
                                    <Button variant="ghost" size="sm">
                                        <Settings className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            <div className="grid gap-6 lg:grid-cols-2">
                {/* Recent Bookings */}
                <Card className="dark:bg-zinc-800">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <div>
                            <CardTitle>Son Rezervasyonlar</CardTitle>
                            <CardDescription>Tesisleriniz için yapılan son rezervasyonlar</CardDescription>
                        </div>
                        <Button variant="outline" size="sm">Tümünü Gör</Button>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-3">
                            {recentBookings.map((booking) => (
                                <div key={booking.id} className="flex items-start justify-between p-3 rounded-lg border dark:border-zinc-700 hover:bg-accent/50 transition-colors">
                                    <div className="flex items-start gap-3 flex-1 min-w-0">
                                        <Avatar className="h-10 w-10">
                                            <AvatarFallback>{booking.guest.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                        <div className="flex-1 min-w-0">
                                            <p className="font-medium text-sm">{booking.guest}</p>
                                            <p className="text-xs text-muted-foreground truncate">{booking.property} - {booking.room}</p>
                                            <p className="text-xs text-muted-foreground">
                                                {booking.checkIn} - {booking.checkOut} ({booking.nights} gece)
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-right ml-2">
                                        <p className="font-semibold text-sm mb-1">{booking.amount}</p>
                                        {getStatusBadge(booking.status)}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Recent Reviews */}
                <Card className="dark:bg-zinc-800">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <div>
                            <CardTitle>Son Yorumlar</CardTitle>
                            <CardDescription>Tesisleriniz için yapılan son değerlendirmeler</CardDescription>
                        </div>
                        <Button variant="outline" size="sm">Tümünü Gör</Button>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {recentReviews.map((review) => (
                                <div key={review.id} className="p-3 rounded-lg border dark:border-zinc-700">
                                    <div className="flex items-start justify-between mb-2">
                                        <div className="flex items-center gap-2">
                                            <Avatar className="h-8 w-8">
                                                <AvatarFallback>{review.guest.charAt(0)}</AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <p className="font-medium text-sm">{review.guest}</p>
                                                <p className="text-xs text-muted-foreground">{review.property}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={cn(
                                                        "h-3 w-3",
                                                        i < review.rating
                                                            ? "fill-yellow-400 text-yellow-400"
                                                            : "text-gray-300 dark:text-gray-600"
                                                    )}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                    <p className="text-sm text-muted-foreground mb-2 line-clamp-2">{review.comment}</p>
                                    <div className="flex items-center justify-between">
                                        <p className="text-xs text-muted-foreground">{review.createdAt}</p>
                                        {!review.isApproved && (
                                            <Badge variant="outline" className="text-xs">Onay Bekliyor</Badge>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Quick Actions */}
            <Card className="dark:bg-zinc-800">
                <CardHeader>
                    <CardTitle>Hızlı İşlemler</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-4 md:grid-cols-4">
                        <Button variant="outline" className="h-auto flex-col gap-2 py-4 bg-transparent">
                            <Building2 className="h-5 w-5" />
                            <span>Tesis Ekle</span>
                        </Button>
                        <Button variant="outline" className="h-auto flex-col gap-2 py-4 bg-transparent">
                            <Bed className="h-5 w-5" />
                            <span>Oda Ekle</span>
                        </Button>
                        <Button variant="outline" className="h-auto flex-col gap-2 py-4 bg-transparent">
                            <DollarSign className="h-5 w-5" />
                            <span>Fiyat Güncelle</span>
                        </Button>
                        <Button variant="outline" className="h-auto flex-col gap-2 py-4 bg-transparent">
                            <BarChart3 className="h-5 w-5" />
                            <span>Raporlar</span>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
