'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useI18n } from '@/lib/i18n'
import { BarChart3, TrendingUp, DollarSign, CalendarCheck } from 'lucide-react'
import { isApiConfigured } from '@/lib/api/client'

export default function AdminAnalyticsPage() {
  const { t } = useI18n()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">{t('admin.analytics')}</h1>
        <p className="text-muted-foreground">Ciro, rezervasyon ve doluluk raporları</p>
      </div>
      {!isApiConfigured() && (
        <p className="text-sm text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 rounded-lg p-3">
          Backend bağlantısı yapılandırılmadı. Grafikler veri geldiğinde görüntülenecektir.
        </p>
      )}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Toplam Gelir</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">—</p>
            <p className="text-xs text-muted-foreground">Veri yok</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Rezervasyon Sayısı</CardTitle>
            <CalendarCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">—</p>
            <p className="text-xs text-muted-foreground">Veri yok</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Doluluk Oranı</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">—</p>
            <p className="text-xs text-muted-foreground">Veri yok</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Ortalama Puan</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">—</p>
            <p className="text-xs text-muted-foreground">Veri yok</p>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Grafikler</CardTitle>
          <CardDescription>Backend bağlandığında ciro ve rezervasyon grafikleri burada gösterilecektir.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-64 flex items-center justify-center rounded-lg border border-dashed text-muted-foreground">
            Grafik alanı
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
