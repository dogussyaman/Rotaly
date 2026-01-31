'use client'

import {
  Building2, CalendarCheck, TrendingUp, Star, Users, DollarSign, ArrowUpRight, ArrowDownRight
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useI18n } from '@/lib/i18n'
import { cn } from '@/lib/utils'

const stats = [
  {
    title: 'Toplam Gelir',
    value: '₺2.450.000',
    change: '+12.5%',
    trend: 'up',
    icon: DollarSign,
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10',
  },
  {
    title: 'Rezervasyonlar',
    value: '1,234',
    change: '+8.2%',
    trend: 'up',
    icon: CalendarCheck,
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
  },
  {
    title: 'Doluluk Oranı',
    value: '%78',
    change: '-2.1%',
    trend: 'down',
    icon: TrendingUp,
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
  },
  {
    title: 'Ortalama Puan',
    value: '4.6',
    change: '+0.3',
    trend: 'up',
    icon: Star,
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-500/10',
  },
]

const recentBookings = [
  {
    id: '1',
    guest: 'Ahmet Yılmaz',
    property: 'Grand Resort & Spa',
    checkIn: '15 Şub 2026',
    checkOut: '18 Şub 2026',
    amount: '₺12,500',
    status: 'confirmed',
  },
  {
    id: '2',
    guest: 'Elif Kaya',
    property: 'Boutique Beach Hotel',
    checkIn: '20 Şub 2026',
    checkOut: '25 Şub 2026',
    amount: '₺28,000',
    status: 'pending',
  },
  {
    id: '3',
    guest: 'Mehmet Demir',
    property: 'Mountain View Lodge',
    checkIn: '22 Şub 2026',
    checkOut: '24 Şub 2026',
    amount: '₺6,400',
    status: 'confirmed',
  },
  {
    id: '4',
    guest: 'Zeynep Arslan',
    property: 'Seaside Villa',
    checkIn: '28 Şub 2026',
    checkOut: '5 Mar 2026',
    amount: '₺52,500',
    status: 'pending',
  },
]

const supportTickets = [
  {
    id: '1',
    subject: 'Rezervasyon iptali',
    user: 'Ali Veli',
    priority: 'high',
    status: 'open',
    time: '2 saat önce',
  },
  {
    id: '2',
    subject: 'Ödeme sorunu',
    user: 'Fatma Yıldız',
    priority: 'medium',
    status: 'in-progress',
    time: '5 saat önce',
  },
  {
    id: '3',
    subject: 'Tesis bilgi güncelleme',
    user: 'Can Özkan',
    priority: 'low',
    status: 'open',
    time: '1 gün önce',
  },
]

export default function AdminDashboard() {
  const { t } = useI18n()

  const getStatusBadge = (status: string) => {
    const styles: Record<string, string> = {
      confirmed: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
      pending: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
      cancelled: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
      open: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
      'in-progress': 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
    }
    const labels: Record<string, string> = {
      confirmed: 'Onaylandı',
      pending: 'Beklemede',
      cancelled: 'İptal',
      open: 'Açık',
      'in-progress': 'İşleniyor',
    }
    return (
      <Badge variant="secondary" className={cn("font-normal", styles[status])}>
        {labels[status]}
      </Badge>
    )
  }

  const getPriorityBadge = (priority: string) => {
    const styles: Record<string, string> = {
      high: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
      medium: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
      low: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400',
    }
    const labels: Record<string, string> = {
      high: 'Yüksek',
      medium: 'Orta',
      low: 'Düşük',
    }
    return (
      <Badge variant="secondary" className={cn("font-normal", styles[priority])}>
        {labels[priority]}
      </Badge>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">{t('admin.dashboard')}</h1>
        <p className="text-muted-foreground">Hoş geldiniz! İşte bugünkü özet.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.title}>
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

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Bookings */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>{t('admin.recentBookings')}</CardTitle>
              <CardDescription>Son 7 günde yapılan rezervasyonlar</CardDescription>
            </div>
            <Button variant="outline" size="sm">Tümünü Gör</Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentBookings.map((booking) => (
                <div key={booking.id} className="flex items-center justify-between p-3 rounded-lg border">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback>{booking.guest.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-sm">{booking.guest}</p>
                      <p className="text-xs text-muted-foreground">{booking.property}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-sm">{booking.amount}</p>
                    {getStatusBadge(booking.status)}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Support Tickets */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>{t('admin.supportTickets')}</CardTitle>
              <CardDescription>Açık destek talepleri</CardDescription>
            </div>
            <Button variant="outline" size="sm">Tümünü Gör</Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {supportTickets.map((ticket) => (
                <div key={ticket.id} className="flex items-center justify-between p-3 rounded-lg border">
                  <div>
                    <p className="font-medium text-sm">{ticket.subject}</p>
                    <p className="text-xs text-muted-foreground">{ticket.user} - {ticket.time}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {getPriorityBadge(ticket.priority)}
                    {getStatusBadge(ticket.status)}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
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
              <CalendarCheck className="h-5 w-5" />
              <span>Rezervasyon Oluştur</span>
            </Button>
            <Button variant="outline" className="h-auto flex-col gap-2 py-4 bg-transparent">
              <Users className="h-5 w-5" />
              <span>Kullanıcı Yönet</span>
            </Button>
            <Button variant="outline" className="h-auto flex-col gap-2 py-4 bg-transparent">
              <Star className="h-5 w-5" />
              <span>Yorumları İncele</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
