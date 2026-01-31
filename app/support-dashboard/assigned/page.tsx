'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { getSupportTickets } from '@/lib/api/support-tickets'
import { getSupabaseClient } from '@/lib/supabase/client'
import { isApiConfigured } from '@/lib/api/client'
import { Clock } from 'lucide-react'

export default function SupportAssignedPage() {
  const [tickets, setTickets] = useState<Awaited<ReturnType<typeof getSupportTickets>>>([])
  const [loading, setLoading] = useState(true)
  const [userId, setUserId] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    const supabase = getSupabaseClient()
    if (supabase) {
      supabase.auth.getUser().then(({ data: { user } }) => {
        if (user) {
          setUserId(user.id)
          getSupportTickets({ assigned_to: user.id, limit: 100 }).then((data) => {
            if (!cancelled) setTickets(data)
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
      <div>
        <h1 className="text-3xl font-bold">Bana Atananlar</h1>
        <p className="text-muted-foreground">Size atanmış destek talepleri</p>
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
            <Clock className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <p className="text-muted-foreground">Size atanmış talep yok.</p>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>Atanan Talepler ({tickets.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {tickets.map((t) => (
                <li key={t.id} className="flex items-center justify-between py-2 border-b last:border-0">
                  <span className="font-mono text-sm">{t.ticket_number}</span>
                  <span className="font-medium">{t.subject}</span>
                  <span className="text-sm text-muted-foreground capitalize">{t.priority}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
