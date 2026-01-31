'use client'

import { useState, useEffect } from 'react'
import { Search, Ticket } from 'lucide-react'
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
import { getSupportTickets, type SupportTicket, type TicketStatus } from '@/lib/api/support-tickets'
import { isApiConfigured } from '@/lib/api/client'
import { cn } from '@/lib/utils'

const STATUS_LABELS: Record<TicketStatus, string> = {
  open: 'Açık',
  in_progress: 'İşleniyor',
  resolved: 'Çözüldü',
  closed: 'Kapatıldı',
}

const STATUS_STYLES: Record<TicketStatus, string> = {
  open: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  in_progress: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
  resolved: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
  closed: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400',
}

export default function SupportTicketsPage() {
  const [tickets, setTickets] = useState<SupportTicket[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('all')

  useEffect(() => {
    let cancelled = false
    getSupportTickets({ limit: 200 }).then((data) => {
      if (!cancelled) setTickets(data)
      setLoading(false)
    })
    return () => { cancelled = true }
  }, [])

  const filtered = tickets.filter((t) => {
    const matchSearch =
      !searchQuery ||
      t.ticket_number.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.subject.toLowerCase().includes(searchQuery.toLowerCase())
    const matchStatus = statusFilter === 'all' || t.status === statusFilter
    return matchSearch && matchStatus
  })

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Tüm Talepler</h1>
        <p className="text-muted-foreground">Destek talepleri listesi</p>
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
                placeholder="Talep no veya konu ile ara..."
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
                {(Object.keys(STATUS_LABELS) as TicketStatus[]).map((s) => (
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
              Henüz talep yok veya filtreye uyan kayıt bulunamadı.
            </p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Talep No</TableHead>
                  <TableHead>Konu</TableHead>
                  <TableHead>Öncelik</TableHead>
                  <TableHead>Durum</TableHead>
                  <TableHead>Tarih</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.map((t) => (
                  <TableRow key={t.id}>
                    <TableCell className="font-mono text-sm">{t.ticket_number}</TableCell>
                    <TableCell className="font-medium">{t.subject}</TableCell>
                    <TableCell className="capitalize">{t.priority}</TableCell>
                    <TableCell>
                      <Badge variant="secondary" className={cn('font-normal', STATUS_STYLES[t.status])}>
                        {STATUS_LABELS[t.status]}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {new Date(t.created_at).toLocaleDateString('tr-TR')}
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
