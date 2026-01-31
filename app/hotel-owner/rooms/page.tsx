'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Bed } from 'lucide-react'
import Link from 'next/link'
import { isApiConfigured } from '@/lib/api/client'

export default function HotelOwnerRoomsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Odalar</h1>
        <p className="text-muted-foreground">Tesislerinize ait oda tiplerini ve fiyatları yönetin</p>
      </div>
      {!isApiConfigured() && (
        <p className="text-sm text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 rounded-lg p-3">
          Backend bağlantısı yapılandırılmadı. Önce bir tesis seçin veya tesis ekleyin.
        </p>
      )}
      <Card>
        <CardContent className="py-12 text-center">
          <Bed className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <p className="text-muted-foreground mb-4">
            Oda yönetimi için önce &quot;Tesislerim&quot; sayfasından bir tesis seçin.
          </p>
          <Button asChild variant="outline">
            <Link href="/hotel-owner/properties">Tesislere Git</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
