'use client'

import { useState } from 'react'
import { useRouter, useSearchParams, useParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function BookingInformationPage() {
  const params = useParams()
  const id = params.id as string
  const router = useRouter()
  const searchParams = useSearchParams()

  const [formData, setFormData] = useState({
    guest_name: '',
    guest_email: '',
    guest_phone: '',
    special_requests: '',
  })

  const buildNextUrl = (path: string) => {
    const q = new URLSearchParams(searchParams.toString())
    q.set('guest_name', formData.guest_name)
    q.set('guest_email', formData.guest_email)
    q.set('guest_phone', formData.guest_phone)
    q.set('special_requests', formData.special_requests)
    return `${path}?${q.toString()}`
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push(buildNextUrl(`/property/${id}/booking/payment`))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Misafir Bilgileri</CardTitle>
        <CardContent className="pt-0 text-muted-foreground text-sm">
          Rezervasyon onayı ve iletişim için aşağıdaki bilgileri doldurun.
        </CardContent>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="guest_name">Ad Soyad *</Label>
            <Input
              id="guest_name"
              value={formData.guest_name}
              onChange={(e) =>
                setFormData({ ...formData, guest_name: e.target.value })
              }
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="guest_email">E-posta *</Label>
            <Input
              id="guest_email"
              type="email"
              value={formData.guest_email}
              onChange={(e) =>
                setFormData({ ...formData, guest_email: e.target.value })
              }
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="guest_phone">Telefon</Label>
            <Input
              id="guest_phone"
              type="tel"
              value={formData.guest_phone}
              onChange={(e) =>
                setFormData({ ...formData, guest_phone: e.target.value })
              }
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="special_requests">Özel İstekler</Label>
            <Textarea
              id="special_requests"
              rows={3}
              value={formData.special_requests}
              onChange={(e) =>
                setFormData({ ...formData, special_requests: e.target.value })
              }
              placeholder="Erken check-in, bebek karyolası vb."
            />
          </div>
          <Button type="submit" className="w-full">
            Ödemeye Geç
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
