'use client'

import { useState, useEffect } from 'react'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { getUsers } from '@/lib/api/users'
import { isApiConfigured } from '@/lib/api/client'

export default function SupportUsersPage() {
  const [users, setUsers] = useState<Awaited<ReturnType<typeof getUsers>>>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    let cancelled = false
    getUsers({ limit: 200 }).then((data) => {
      if (!cancelled) setUsers(data)
      setLoading(false)
    })
    return () => { cancelled = true }
  }, [])

  const filtered = users.filter(
    (u) =>
      !searchQuery ||
      u.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      u.full_name?.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Kullanıcılar</h1>
        <p className="text-muted-foreground">Kullanıcı listesi (görüntüleme)</p>
      </div>
      {!isApiConfigured() && (
        <p className="text-sm text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 rounded-lg p-3">
          Backend bağlantısı yapılandırılmadı. Veriler mock olarak gösteriliyor.
        </p>
      )}
      <Card>
        <CardHeader>
          <div className="relative max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="E-posta veya ad ile ara..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </CardHeader>
        <CardContent>
          {loading ? (
            <p className="text-muted-foreground py-8 text-center">Yükleniyor...</p>
          ) : filtered.length === 0 ? (
            <p className="text-muted-foreground py-8 text-center">
              Henüz kullanıcı yok veya filtreye uyan kayıt bulunamadı.
            </p>
          ) : (
            <ul className="space-y-2">
              {filtered.map((u) => (
                <li key={u.id} className="flex items-center justify-between py-2 border-b last:border-0">
                  <span className="font-medium">{u.email}</span>
                  <span className="text-sm text-muted-foreground">{u.full_name || '—'}</span>
                  <span className="text-sm capitalize">{u.role}</span>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
