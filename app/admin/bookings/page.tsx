'use client'

import { useState, useEffect } from 'react'
import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useI18n } from '@/lib/i18n'
import { getBookings, type Booking, type BookingStatus } from '@/lib/api/bookings'
import { isApiConfigured } from '@/lib/api/client'
import { cn } from '@/lib/utils'

const STATUS_LABELS: Record<BookingStatus, string> = {
  pending: 'Beklemede',
  confirmed: 'Onaylandı',
  cancelled: 'İptal',
  completed: 'Tamamlandı',
  refunded: 'İade',
}

const STATUS_STYLES: Record<BookingStatus, string> = {
  pending: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
  confirmed: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
  cancelled: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
  completed: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  refunded: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400',
}

export default function AdminBookingsPage() {
  const { t } = useI18n()
  const [bookings, setBookings] = useState<Booking[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('all')

  useEffect(() => {
    let cancelled = false
    getBookings({ limit: 200 }).then((data) => {
      if (!cancelled) setBookings(data)
      setLoading(false)
    })
    return () => { cancelled = true }
  }, [])

  const filtered = bookings.filter((b) => {
    const matchSearch =
      !searchQuery ||
      b.booking_number.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.guest_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.guest_email.toLowerCase().includes(searchQuery.toLowerCase())
    const matchStatus = statusFilter === 'all' || b.status === statusFilter
    return matchSearch && matchStatus
  })

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">{t('admin.bookings')}</h1>
        <p className="text-muted-foreground">Tüm rezervasyonlar</p>
      </div>
      {!isApiConfigured() && (
        <p className="text-sm text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 rounded-lg p-3">
          Backend bağlantısı yapılandırılmadı. Veriler mock olarak gösteriliyor.
        </p>
      )}
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Rezervasyon no, misafir adı veya e-posta ile ara..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Durum" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tüm Durumlar</SelectItem>
                {(Object.keys(STATUS_LABELS) as BookingStatus[]).map((s) => (
                  <SelectItem key={s} value={s}>{STATUS_LABELS[s]}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          {loading ? (
            <p className="text-muted-foreground py-8 text-center">Yükleniyor...</p>
          ) : filtered.length === 0 ? (
            <p className="text-muted-foreground py-8 text-center">
              Henüz rezervasyon yok veya filtreye uyan kayıt bulunamadı.
            </p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Rezervasyon No</TableHead>
                  <TableHead>Misafir</TableHead>
                  <TableHead>Giriş / Çıkış</TableHead>
                  <TableHead>Gece</TableHead>
                  <TableHead>Toplam</TableHead>
                  <TableHead>Durum</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.map((b) => (
                  <TableRow key={b.id}>
                    <TableCell className="font-mono text-sm">{b.booking_number}</TableCell>
                    <TableCell>
                      <div className="text-sm">
                        <div className="font-medium">{b.guest_name}</div>
                        <div className="text-muted-foreground">{b.guest_email}</div>
                      </div>
                    </TableCell>
                    <TableCell className="text-sm">
                      {b.check_in_date} — {b.check_out_date}
                    </TableCell>
                    <TableCell>{b.nights}</TableCell>
                    <TableCell>{b.total_price.toLocaleString('tr-TR')} {b.currency}</TableCell>
                    <TableCell>
                      <Badge variant="secondary" className={cn('font-normal', STATUS_STYLES[b.status])}>
                        {STATUS_LABELS[b.status]}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
