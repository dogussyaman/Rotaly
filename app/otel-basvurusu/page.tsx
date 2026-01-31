'use client'

import React, { useState } from 'react'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
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
import { createHotelApplication, type PropertyType } from '@/lib/api/hotel-applications'
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

export default function OtelBasvurusuPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    business_name: '',
    contact_name: '',
    contact_email: '',
    contact_phone: '',
    property_type: 'hotel' as PropertyType,
    address: '',
    city: '',
    state: '',
    postal_code: '',
    country: 'TR',
    description: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const result = await createHotelApplication({
        business_name: formData.business_name,
        contact_name: formData.contact_name,
        contact_email: formData.contact_email,
        contact_phone: formData.contact_phone || undefined,
        property_type: formData.property_type,
        address: formData.address,
        city: formData.city,
        state: formData.state || undefined,
        postal_code: formData.postal_code || undefined,
        country: formData.country,
        description: formData.description || undefined,
      })
      if (result) {
        setSubmitted(true)
        toast.success('Başvurunuz alındı. Değerlendirme sonrası e-posta ile bilgilendirileceksiniz.')
      } else if (!isApiConfigured()) {
        setSubmitted(true)
        toast.success('Başvuru formu kaydedildi. Backend bağlandığında işleme alınacaktır.')
      } else {
        toast.error('Başvuru gönderilemedi.')
      }
    } catch {
      toast.error('Bir hata oluştu.')
    } finally {
      setIsLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center p-8">
          <Card className="max-w-md w-full">
            <CardHeader>
              <CardTitle>Başvurunuz Alındı</CardTitle>
              <CardDescription>
                Otel başvurunuz başarıyla iletildi. Değerlendirme sonrası e-posta adresiniz üzerinden bilgilendirileceksiniz.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full">
                <a href="/">Ana Sayfaya Dön</a>
              </Button>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12 px-4">
        <div className="container max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Otel / İşletme Başvurusu</CardTitle>
              <CardDescription>
                Platformumuzda konaklama listenizi yayınlamak için başvuru formunu doldurun. Değerlendirme sonrası e-posta ile bilgilendirileceksiniz.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="business_name">İşletme Adı *</Label>
                    <Input
                      id="business_name"
                      value={formData.business_name}
                      onChange={(e) =>
                        setFormData({ ...formData, business_name: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="property_type">Konaklama Türü *</Label>
                    <Select
                      value={formData.property_type}
                      onValueChange={(v) =>
                        setFormData({ ...formData, property_type: v as PropertyType })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {PROPERTY_TYPES.map((t) => (
                          <SelectItem key={t.value} value={t.value}>
                            {t.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="contact_name">Yetkili Adı Soyadı *</Label>
                    <Input
                      id="contact_name"
                      value={formData.contact_name}
                      onChange={(e) =>
                        setFormData({ ...formData, contact_name: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact_email">E-posta *</Label>
                    <Input
                      id="contact_email"
                      type="email"
                      value={formData.contact_email}
                      onChange={(e) =>
                        setFormData({ ...formData, contact_email: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact_phone">Telefon</Label>
                  <Input
                    id="contact_phone"
                    type="tel"
                    value={formData.contact_phone}
                    onChange={(e) =>
                      setFormData({ ...formData, contact_phone: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Adres *</Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) =>
                      setFormData({ ...formData, address: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="space-y-2">
                    <Label htmlFor="city">Şehir *</Label>
                    <Input
                      id="city"
                      value={formData.city}
                      onChange={(e) =>
                        setFormData({ ...formData, city: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state">İlçe</Label>
                    <Input
                      id="state"
                      value={formData.state}
                      onChange={(e) =>
                        setFormData({ ...formData, state: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="postal_code">Posta Kodu</Label>
                    <Input
                      id="postal_code"
                      value={formData.postal_code}
                      onChange={(e) =>
                        setFormData({ ...formData, postal_code: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Açıklama</Label>
                  <Textarea
                    id="description"
                    rows={4}
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    placeholder="İşletmeniz hakkında kısa bilgi..."
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? 'Gönderiliyor...' : 'Başvuruyu Gönder'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
