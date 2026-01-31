'use client'

import { useState, useEffect } from 'react'
import { ClipboardList, Search, Eye, Check, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { useI18n } from '@/lib/i18n'
import { getHotelApplications, updateHotelApplication, type HotelApplication, type ApplicationStatus } from '@/lib/api/hotel-applications'
import { isApiConfigured } from '@/lib/api/client'
import { cn } from '@/lib/utils'

const PROPERTY_TYPE_LABELS: Record<string, string> = {
  hotel: 'Otel',
  villa: 'Villa',
  apartment: 'Kiralık Daire',
  bungalow: 'Bungalov',
  hostel: 'Pansiyon',
  camp: 'Kamp',
}

const STATUS_LABELS: Record<ApplicationStatus, string> = {
  pending: 'Beklemede',
  approved: 'Onaylandı',
  rejected: 'Reddedildi',
}

const STATUS_STYLES: Record<ApplicationStatus, string> = {
  pending: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
  approved: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
  rejected: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
}

export default function AdminApplicationsPage() {
  const { t } = useI18n()
  const [applications, setApplications] = useState<HotelApplication[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('all')
  const [selectedApp, setSelectedApp] = useState<HotelApplication | null>(null)
  const [actionLoading, setActionLoading] = useState(false)
  const [rejectReason, setRejectReason] = useState('')
  const [rejectDialogOpen, setRejectDialogOpen] = useState(false)

  useEffect(() => {
    let cancelled = false
    async function load() {
      const data = await getHotelApplications({ limit: 200 })
      if (!cancelled) setApplications(data)
      setLoading(false)
    }
    load()
    return () => { cancelled = true }
  }, [])

  const filtered = applications.filter((a) => {
    const matchSearch =
      !searchQuery ||
      a.business_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.contact_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.contact_email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.application_number.toLowerCase().includes(searchQuery.toLowerCase())
    const matchStatus = statusFilter === 'all' || a.status === statusFilter
    return matchSearch && matchStatus
  })

  const handleApprove = async (app: HotelApplication) => {
    if (!isApiConfigured()) {
      setActionLoading(true)
      await updateHotelApplication(app.id, {
        status: 'approved',
        reviewed_at: new Date().toISOString(),
      })
      setApplications((prev) =>
        prev.map((a) => (a.id === app.id ? { ...a, status: 'approved' as const } : a))
      )
      setSelectedApp(null)
      setActionLoading(false)
      return
    }
    setActionLoading(true)
    try {
      await updateHotelApplication(app.id, {
        status: 'approved',
        reviewed_at: new Date().toISOString(),
      })
      setApplications((prev) =>
        prev.map((a) => (a.id === app.id ? { ...a, status: 'approved' as const } : a))
      )
      setSelectedApp(null)
    } finally {
      setActionLoading(false)
    }
  }

  const handleReject = async (app: HotelApplication) => {
    setActionLoading(true)
    try {
      await updateHotelApplication(app.id, {
        status: 'rejected',
        rejection_reason: rejectReason,
        reviewed_at: new Date().toISOString(),
      })
      setApplications((prev) =>
        prev.map((a) =>
          a.id === app.id
            ? { ...a, status: 'rejected' as const, rejection_reason: rejectReason }
            : a
        )
      )
      setSelectedApp(null)
      setRejectDialogOpen(false)
      setRejectReason('')
    } finally {
      setActionLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">{t('admin.applications')}</h1>
        <p className="text-muted-foreground">
          Otel / işletme başvurularını görüntüleyin, onaylayın veya reddedin.
        </p>
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
                placeholder="Başvuru no, işletme adı, e-posta ile ara..."
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
                <SelectItem value="pending">Beklemede</SelectItem>
                <SelectItem value="approved">Onaylandı</SelectItem>
                <SelectItem value="rejected">Reddedildi</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          {loading ? (
            <p className="text-muted-foreground py-8 text-center">Yükleniyor...</p>
          ) : filtered.length === 0 ? (
            <p className="text-muted-foreground py-8 text-center">
              Henüz başvuru yok veya filtreye uyan kayıt bulunamadı.
            </p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Başvuru No</TableHead>
                  <TableHead>İşletme</TableHead>
                  <TableHead>İletişim</TableHead>
                  <TableHead>Tür</TableHead>
                  <TableHead>Şehir</TableHead>
                  <TableHead>Durum</TableHead>
                  <TableHead>Tarih</TableHead>
                  <TableHead className="w-[80px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.map((app) => (
                  <TableRow key={app.id}>
                    <TableCell className="font-mono text-sm">
                      {app.application_number}
                    </TableCell>
                    <TableCell className="font-medium">{app.business_name}</TableCell>
                    <TableCell>
                      <div className="text-sm">
                        <div>{app.contact_name}</div>
                        <div className="text-muted-foreground">{app.contact_email}</div>
                      </div>
                    </TableCell>
                    <TableCell>{PROPERTY_TYPE_LABELS[app.property_type] ?? app.property_type}</TableCell>
                    <TableCell>{app.city}</TableCell>
                    <TableCell>
                      <Badge
                        variant="secondary"
                        className={cn('font-normal', STATUS_STYLES[app.status])}
                      >
                        {STATUS_LABELS[app.status]}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {new Date(app.created_at).toLocaleDateString('tr-TR')}
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setSelectedApp(app)}
                        title="Detay"
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>

      {/* Detail / actions dialog */}
      <Dialog open={!!selectedApp} onOpenChange={(open) => !open && setSelectedApp(null)}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>
              {selectedApp?.application_number} — {selectedApp?.business_name}
            </DialogTitle>
            <DialogDescription>Başvuru detayı ve işlemler</DialogDescription>
          </DialogHeader>
          {selectedApp && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-2 text-sm">
                <span className="text-muted-foreground">Yetkili:</span>
                <span>{selectedApp.contact_name}</span>
                <span className="text-muted-foreground">E-posta:</span>
                <span>{selectedApp.contact_email}</span>
                <span className="text-muted-foreground">Telefon:</span>
                <span>{selectedApp.contact_phone || '—'}</span>
                <span className="text-muted-foreground">Tür:</span>
                <span>{PROPERTY_TYPE_LABELS[selectedApp.property_type]}</span>
                <span className="text-muted-foreground">Adres:</span>
                <span>{selectedApp.address}, {selectedApp.city}</span>
                {selectedApp.description && (
                  <>
                    <span className="text-muted-foreground">Açıklama:</span>
                    <span className="col-span-2">{selectedApp.description}</span>
                  </>
                )}
              </div>
              {selectedApp.status === 'pending' && (
                <DialogFooter className="gap-2 sm:gap-0">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setRejectDialogOpen(true)
                    }}
                    disabled={actionLoading}
                  >
                    <X className="h-4 w-4 mr-2" />
                    Reddet
                  </Button>
                  <Button
                    onClick={() => handleApprove(selectedApp)}
                    disabled={actionLoading}
                  >
                    <Check className="h-4 w-4 mr-2" />
                    Onayla
                  </Button>
                </DialogFooter>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={rejectDialogOpen} onOpenChange={setRejectDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Reddetme nedeni</DialogTitle>
            <DialogDescription>
              İsteğe bağlı: Reddetme nedenini girin (başvuru sahibine iletilebilir).
            </DialogDescription>
          </DialogHeader>
          <Input
            placeholder="Red nedeni..."
            value={rejectReason}
            onChange={(e) => setRejectReason(e.target.value)}
          />
          <DialogFooter>
            <Button variant="outline" onClick={() => setRejectDialogOpen(false)}>
              İptal
            </Button>
            <Button
              variant="destructive"
              onClick={() => selectedApp && handleReject(selectedApp)}
              disabled={actionLoading}
            >
              Reddet
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
