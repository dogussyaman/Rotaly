'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useI18n } from '@/lib/i18n'

export default function AdminSettingsPage() {
  const { t } = useI18n()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">{t('admin.settings')}</h1>
        <p className="text-muted-foreground">Genel site ayarları</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Site Bilgileri</CardTitle>
          <CardDescription>Site adı ve varsayılan dil gibi ayarlar (Backend bağlandığında kaydedilecektir).</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="siteName">Site Adı</Label>
            <Input id="siteName" placeholder="ROTALY" defaultValue="ROTALY" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="defaultLocale">Varsayılan Dil</Label>
            <Input id="defaultLocale" placeholder="tr" defaultValue="tr" readOnly className="bg-muted" />
          </div>
          <Button>{t('common.save')}</Button>
        </CardContent>
      </Card>
    </div>
  )
}
