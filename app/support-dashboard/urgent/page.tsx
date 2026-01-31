'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { getSupportTickets } from '@/lib/api/support-tickets'
import { isApiConfigured } from '@/lib/api/client'
import { AlertCircle } from 'lucide-react'

export default function SupportUrgentPage() {
  const [tickets, setTickets] = useState<Awaited<ReturnType<typeof getSupportTickets>>>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    getSupportTickets({ priority: 'urgent', limit: 100 }).then((data) => {
      if (!cancelled) setTickets(data)
      setLoading(false)
    })
    return () => { cancelled = true }
  }, [])

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Acil Talepler</h1>
        <p className="text-muted-foreground">Yüksek öncelikli destek talepleri</p>
      </div>
      {!isApiConfigured() && (
        <p className="text-sm text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 rounded-lg p-3">
          Backend bağlantısı yapılandırılmadı. Veriler mock olarak gösteriliyor.
        </p>
      )}
      {loading ? (
        <p className="text-muted-foreground py-8 text-center">Yükleniyor...</p>
      ) : tickets.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center">
            <AlertCircle className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <p className="text-muted-foreground">Acil talep yok.</p>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>Acil Talepler ({tickets.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {tickets.map((t) => (
                <li key={t.id} className="flex items-center justify-between py-2 border-b last:border-0">
                  <span className="font-mono text-sm">{t.ticket_number}</span>
                  <span className="font-medium">{t.subject}</span>
                  <span className="text-sm text-red-600 dark:text-red-400">{t.priority}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
