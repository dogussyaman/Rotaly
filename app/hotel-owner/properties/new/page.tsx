'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { createProperty, type PropertyType } from '@/lib/api/properties'
import { getSupabaseClient } from '@/lib/supabase/client'
import { isApiConfigured } from '@/lib/api/client'
import { toast } from 'sonner'

const PROPERTY_TYPES: { value: PropertyType; label: string }[] = [
  { value: 'hotel', label: 'Otel' },
  { value: 'villa', label: 'Villa' },
  { value: 'apartment', label: 'Kiralık Daire' },
  { value: 'bungalow', label: 'Bungalov' },
  { value: 'hostel', label: 'Pansiyon' },
  { value: 'camp', label: 'Kamp' },
]

export default function NewPropertyPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    property_type: 'hotel' as PropertyType,
    slug: '',
    address: '',
    city: '',
    state: '',
    postal_code: '',
    country: 'TR',
    phone: '',
    email: '',
    website: '',
    star_rating: '',
    check_in_time: '14:00',
    check_out_time: '12:00',
    min_stay_nights: 1,
    max_stay_nights: 30,
    cancellation_days: 1,
    description: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const supabase = getSupabaseClient()
      const userId = supabase ? (await supabase.auth.getUser()).data.user?.id : null
      if (!userId && isApiConfigured()) {
        toast.error('Giriş yapmanız gerekiyor.')
        return
      }
      const slug = formData.slug || formData.city.toLowerCase().replace(/\s/g, '-') + '-' + Date.now()
      const result = await createProperty({
        owner_id: userId || '00000000-0000-0000-0000-000000000000',
        property_type: formData.property_type,
        slug,
        address: formData.address,
        city: formData.city,
        state: formData.state || undefined,
        postal_code: formData.postal_code || undefined,
        country: formData.country,
        phone: formData.phone || undefined,
        email: formData.email || undefined,
        website: formData.website || undefined,
        star_rating: formData.star_rating ? parseInt(formData.star_rating, 10) : undefined,
        check_in_time: formData.check_in_time,
        check_out_time: formData.check_out_time,
        min_stay_nights: formData.min_stay_nights,
        max_stay_nights: formData.max_stay_nights,
        cancellation_days: formData.cancellation_days,
        is_active: false,
        is_verified: false,
        is_featured: false,
      })
      if (result) {
        toast.success('Tesis oluşturuldu.')
        window.location.href = '/hotel-owner/properties'
      } else if (!isApiConfigured()) {
        toast.success('Form kaydedildi. Backend bağlandığında tesis oluşturulacaktır.')
      } else {
        toast.error('Tesis oluşturulamadı.')
      }
    } catch {
      toast.error('Bir hata oluştu.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Yeni Tesis Ekle</h1>
          <p className="text-muted-foreground">Konaklama tesisinizi platforma ekleyin</p>
        </div>
        <Button variant="outline" asChild>
          <Link href="/hotel-owner/properties">Geri</Link>
        </Button>
      </div>
      {!isApiConfigured() && (
        <p className="text-sm text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 rounded-lg p-3">
          Backend bağlantısı yapılandırılmadı. Form gönderimi simüle edilecektir.
        </p>
      )}
      <Card>
        <CardHeader>
          <CardTitle>Tesis Bilgileri</CardTitle>
          <CardDescription>Zorunlu alanlar: tür, adres, şehir. Slug boş bırakılırsa otomatik oluşturulur.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="property_type">Konaklama Türü *</Label>
                <Select
                  value={formData.property_type}
                  onValueChange={(v) => setFormData({ ...formData, property_type: v as PropertyType })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {PROPERTY_TYPES.map((t) => (
                      <SelectItem key={t.value} value={t.value}>{t.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="slug">Slug (URL)</Label>
                <Input
                  id="slug"
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  placeholder="otomatik oluşturulur"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Adres *</Label>
              <Input
                id="address"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                required
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="space-y-2">
                <Label htmlFor="city">Şehir *</Label>
                <Input
                  id="city"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="state">İlçe</Label>
                <Input
                  id="state"
                  value={formData.state}
                  onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="postal_code">Posta Kodu</Label>
                <Input
                  id="postal_code"
                  value={formData.postal_code}
                  onChange={(e) => setFormData({ ...formData, postal_code: e.target.value })}
                />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="phone">Telefon</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-posta</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="website">Web Sitesi</Label>
              <Input
                id="website"
                type="url"
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="check_in_time">Giriş Saati</Label>
                <Input
                  id="check_in_time"
                  value={formData.check_in_time}
                  onChange={(e) => setFormData({ ...formData, check_in_time: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="check_out_time">Çıkış Saati</Label>
                <Input
                  id="check_out_time"
                  value={formData.check_out_time}
                  onChange={(e) => setFormData({ ...formData, check_out_time: e.target.value })}
                />
              </div>
            </div>
            <div className="flex gap-4">
              <Button type="submit" disabled={isLoading}>
                {isLoading ? 'Kaydediliyor...' : 'Tesis Oluştur'}
              </Button>
              <Button type="button" variant="outline" asChild>
                <Link href="/hotel-owner/properties">İptal</Link>
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
