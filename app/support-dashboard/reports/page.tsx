'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BarChart3 } from 'lucide-react'
import { isApiConfigured } from '@/lib/api/client'

export default function SupportReportsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Raporlar</h1>
        <p className="text-muted-foreground">Destek istatistikleri ve raporları</p>
      </div>
      {!isApiConfigured() && (
        <p className="text-sm text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 rounded-lg p-3">
          Backend bağlantısı yapılandırılmadı.
        </p>
      )}
      <Card>
        <CardContent className="py-12 text-center">
          <BarChart3 className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <p className="text-muted-foreground">
            Backend bağlandığında talep sayıları ve ortalama yanıt süresi burada gösterilecektir.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
