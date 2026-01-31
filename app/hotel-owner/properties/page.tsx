'use client'

import { useState, useEffect } from 'react'
import { Building2, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { getPropertiesByOwner } from '@/lib/api/properties'
import { getSupabaseClient } from '@/lib/supabase/client'
import { isApiConfigured } from '@/lib/api/client'
import Link from 'next/link'

export default function HotelOwnerPropertiesPage() {
  const [properties, setProperties] = useState<Awaited<ReturnType<typeof getPropertiesByOwner>>>([])
  const [loading, setLoading] = useState(true)
  const [ownerId, setOwnerId] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    const supabase = getSupabaseClient()
    if (supabase) {
      supabase.auth.getUser().then(({ data: { user } }) => {
        if (user && !cancelled) {
          setOwnerId(user.id)
          getPropertiesByOwner(user.id).then((data) => {
            if (!cancelled) setProperties(data)
            setLoading(false)
          })
        } else {
          setLoading(false)
        }
      })
    } else {
      setLoading(false)
    }
    return () => { cancelled = true }
  }, [])

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Tesislerim</h1>
          <p className="text-muted-foreground">Konaklama tesislerinizi yönetin</p>
        </div>
        <Button asChild>
          <Link href="/hotel-owner/properties/new">
            <Plus className="h-4 w-4 mr-2" />
            Tesis Ekle
          </Link>
        </Button>
      </div>
      {!isApiConfigured() && (
        <p className="text-sm text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 rounded-lg p-3">
          Backend bağlantısı yapılandırılmadı. Veriler mock olarak gösteriliyor.
        </p>
      )}
      {loading ? (
        <p className="text-muted-foreground py-8 text-center">Yükleniyor...</p>
      ) : properties.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center">
            <Building2 className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <p className="text-muted-foreground mb-4">Henüz tesis eklenmemiş.</p>
            <Button asChild>
              <Link href="/hotel-owner/properties/new">İlk Tesisi Ekle</Link>
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((p) => (
            <Card key={p.id}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg">{p.city}</CardTitle>
                <Badge variant={p.is_active ? 'default' : 'secondary'}>
                  {p.is_active ? 'Aktif' : 'Pasif'}
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{p.address}</p>
                <p className="text-sm mt-2">{p.total_rooms} oda · {p.avg_rating} puan</p>
                <Button variant="outline" size="sm" className="mt-4 w-full" asChild>
                  <Link href={`/hotel-owner/properties/${p.id}`}>Düzenle</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
