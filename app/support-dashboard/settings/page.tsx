'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useI18n } from '@/lib/i18n'

export default function SupportSettingsPage() {
  const { t } = useI18n()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Ayarlar</h1>
        <p className="text-muted-foreground">Destek paneli ayarları</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Profil</CardTitle>
          <CardDescription>Ad ve bildirim tercihleri (Backend bağlandığında kaydedilecektir).</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Ad Soyad</Label>
            <Input id="name" placeholder="Ad Soyad" />
          </div>
          <Button>{t('common.save')}</Button>
        </CardContent>
      </Card>
    </div>
  )
}
