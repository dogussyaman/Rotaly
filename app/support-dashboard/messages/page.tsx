'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MessageSquare } from 'lucide-react'
import { isApiConfigured } from '@/lib/api/client'

export default function SupportMessagesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Mesajlar</h1>
        <p className="text-muted-foreground">Talep mesajları talep detayından görüntülenir</p>
      </div>
      {!isApiConfigured() && (
        <p className="text-sm text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 rounded-lg p-3">
          Backend bağlantısı yapılandırılmadı.
        </p>
      )}
      <Card>
        <CardContent className="py-12 text-center">
          <MessageSquare className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <p className="text-muted-foreground">
            Mesajlar &quot;Tüm Talepler&quot; sayfasından bir talep seçerek görüntülenebilir.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
