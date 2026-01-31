'use client'

import { use, useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { CalendarIcon, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { getPropertyById } from '@/lib/api/properties'
import { useI18n } from '@/lib/i18n'
import { format } from 'date-fns'
import { tr, enUS } from 'date-fns/locale'

export default function BookingSummaryPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = use(params)
  const router = useRouter()
  const searchParams = useSearchParams()
  const { t, locale } = useI18n()
  const [property, setProperty] = useState<Awaited<ReturnType<typeof getPropertyById>>>(null)

  const checkIn = searchParams.get('check_in')
  const checkOut = searchParams.get('check_out')
  const roomId = searchParams.get('room_id')
  const adults = searchParams.get('adults') || '1'
  const children = searchParams.get('children') || '0'
  const nights = searchParams.get('nights') || '1'

  useEffect(() => {
    let cancelled = false
    getPropertyById(id).then((p) => {
      if (!cancelled) setProperty(p)
    })
    return () => { cancelled = true }
  }, [id])

  const dateLocale = locale === 'tr' ? tr : enUS
  const buildNextUrl = (path: string) => {
    const q = new URLSearchParams()
    if (checkIn) q.set('check_in', checkIn)
    if (checkOut) q.set('check_out', checkOut)
    if (roomId) q.set('room_id', roomId)
    q.set('adults', adults)
    q.set('children', children)
    q.set('nights', nights)
    const qs = q.toString()
    return `${path}${qs ? `?${qs}` : ''}`
  }

  const hasDates = checkIn && checkOut

  if (!property && !hasDates) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Rezervasyon Özeti</CardTitle>
          <CardContent>
            <p className="text-muted-foreground">
              Tarih ve oda bilgisi bulunamadı. Lütfen tesis sayfasından tarih ve oda seçip &quot;Rezervasyon Yap&quot; ile devam edin.
            </p>
            <Button asChild className="mt-4">
              <a href={`/property/${id}`}>Tesis Sayfasına Dön</a>
            </Button>
          </CardContent>
        </CardHeader>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Rezervasyon Özeti</CardTitle>
        <CardDescription className="sr-only">
          Tarih ve konaklama bilgilerinizi kontrol edin.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {property && (
          <div>
            <p className="font-medium">{property.city} — Tesis</p>
            <p className="text-sm text-muted-foreground">Tesis ID: {property.id}</p>
          </div>
        )}
        {hasDates && (
          <div className="flex items-center gap-2 text-sm">
            <CalendarIcon className="h-4 w-4 text-muted-foreground" />
            <span>
              {format(new Date(checkIn!), 'd MMM yyyy', { locale: dateLocale })} —{' '}
              {format(new Date(checkOut!), 'd MMM yyyy', { locale: dateLocale })}
            </span>
            <span className="text-muted-foreground">({nights} gece)</span>
          </div>
        )}
        <div className="flex items-center gap-2 text-sm">
          <Users className="h-4 w-4 text-muted-foreground" />
          <span>{adults} yetişkin, {children} çocuk</span>
        </div>
        <Button
          className="w-full"
          onClick={() => router.push(buildNextUrl(`/property/${id}/booking/information`))}
          disabled={!hasDates}
        >
          Devam — Misafir Bilgileri
        </Button>
      </CardContent>
    </Card>
  )
}
