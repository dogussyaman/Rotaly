'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function BookingSuccessPage() {
  const searchParams = useSearchParams()
  const bookingNumber = searchParams.get('booking_number') || '—'

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-center mb-4">
          <div className="rounded-full bg-primary/10 p-4">
            <CheckCircle className="h-12 w-12 text-primary" />
          </div>
        </div>
        <CardTitle className="text-center">Rezervasyonunuz Tamamlandı</CardTitle>
        <CardContent className="pt-0 text-center text-muted-foreground">
          Rezervasyon numaranız: <strong className="font-mono text-foreground">{bookingNumber}</strong>
        </CardContent>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-center text-muted-foreground">
          Detaylar e-posta adresinize gönderilecektir. Sorularınız için destek talebi oluşturabilirsiniz.
        </p>
        <div className="flex flex-col sm:flex-row gap-2">
          <Button asChild className="flex-1">
            <Link href="/">Ana Sayfaya Dön</Link>
          </Button>
          <Button asChild variant="outline" className="flex-1">
            <Link href="/support">Destek</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
