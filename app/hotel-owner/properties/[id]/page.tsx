'use client'

import { use, useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { getPropertyById } from '@/lib/api/properties'
import { isApiConfigured } from '@/lib/api/client'
import { Bed, MapPin, Phone, Mail } from 'lucide-react'

export default function HotelOwnerPropertyEditPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = use(params)
  const [property, setProperty] = useState<Awaited<ReturnType<typeof getPropertyById>>>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    getPropertyById(id).then((p) => {
      if (!cancelled) setProperty(p)
      setLoading(false)
    })
    return () => { cancelled = true }
  }, [id])

  if (loading) {
    return <p className="text-muted-foreground py-8 text-center">Yükleniyor...</p>
  }

  if (!property) {
    return (
      <Card>
        <CardContent className="py-12 text-center">
          <p className="text-muted-foreground mb-4">Tesis bulunamadı veya erişim yetkiniz yok.</p>
          <Button asChild variant="outline">
            <Link href="/hotel-owner/properties">Tesislere Dön</Link>
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">{property.city} — Tesis</h1>
          <p className="text-muted-foreground">Tesis bilgileri ve oda yönetimi</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" asChild>
            <Link href="/hotel-owner/properties">Geri</Link>
          </Button>
          <Button asChild>
            <Link href={`/hotel-owner/rooms?property_id=${id}`}>
              <Bed className="h-4 w-4 mr-2" />
              Odaları Yönet
            </Link>
          </Button>
        </div>
      </div>
      {!isApiConfigured() && (
        <p className="text-sm text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 rounded-lg p-3">
          Backend bağlantısı yapılandırılmadı. Veriler mock olarak gösteriliyor.
        </p>
      )}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {property.slug}
            <Badge variant={property.is_active ? 'default' : 'secondary'}>
              {property.is_active ? 'Aktif' : 'Pasif'}
            </Badge>
          </CardTitle>
          <CardDescription>Tür: {property.property_type} · {property.star_rating ? `${property.star_rating} yıldız` : ''}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start gap-2 text-sm">
            <MapPin className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
            <span>{property.address}, {property.city}</span>
          </div>
          {property.phone && (
            <div className="flex items-center gap-2 text-sm">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <span>{property.phone}</span>
            </div>
          )}
          {property.email && (
            <div className="flex items-center gap-2 text-sm">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <span>{property.email}</span>
            </div>
          )}
          <p className="text-sm text-muted-foreground">
            Giriş: {property.check_in_time} · Çıkış: {property.check_out_time} · {property.total_rooms} oda
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
