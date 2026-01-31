'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { DollarSign } from 'lucide-react'
import Link from 'next/link'
import { isApiConfigured } from '@/lib/api/client'

export default function HotelOwnerPricingPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Fiyatlandırma</h1>
        <p className="text-muted-foreground">Oda bazlı ve sezonluk fiyatları yönetin</p>
      </div>
      {!isApiConfigured() && (
        <p className="text-sm text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 rounded-lg p-3">
          Backend bağlantısı yapılandırılmadı. Fiyatlar &quot;Odalar&quot; sayfasından düzenlenebilir.
        </p>
      )}
      <Card>
        <CardContent className="py-12 text-center">
          <DollarSign className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <p className="text-muted-foreground mb-4">
            Oda fiyatları ve sezonluk fiyatlar &quot;Odalar&quot; sayfasından yönetilir.
          </p>
          <Button asChild variant="outline">
            <Link href="/hotel-owner/rooms">Odalara Git</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
