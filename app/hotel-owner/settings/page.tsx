'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useI18n } from '@/lib/i18n'

export default function HotelOwnerSettingsPage() {
  const { t } = useI18n()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Ayarlar</h1>
        <p className="text-muted-foreground">Profil ve iletişim bilgileriniz</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Profil</CardTitle>
          <CardDescription>Ad, e-posta ve telefon (Backend bağlandığında kaydedilecektir).</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Ad Soyad</Label>
            <Input id="name" placeholder="Ad Soyad" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">E-posta</Label>
            <Input id="email" type="email" placeholder="ornek@email.com" readOnly className="bg-muted" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Telefon</Label>
            <Input id="phone" type="tel" placeholder="+90 5XX XXX XX XX" />
          </div>
          <Button>{t('common.save')}</Button>
        </CardContent>
      </Card>
    </div>
  )
}
