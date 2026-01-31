'use client'

import { useState, useEffect } from 'react'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useI18n } from '@/lib/i18n'
import { getUsers, type User, type UserRole } from '@/lib/api/users'
import { isApiConfigured } from '@/lib/api/client'
import { cn } from '@/lib/utils'

const ROLE_LABELS: Record<UserRole, string> = {
  customer: 'Müşteri',
  hotel_owner: 'Otel',
  admin: 'Admin',
  support: 'Destek',
}

const ROLE_STYLES: Record<UserRole, string> = {
  customer: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400',
  hotel_owner: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  admin: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
  support: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
}

export default function AdminUsersPage() {
  const { t } = useI18n()
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [roleFilter, setRoleFilter] = useState<string>('all')

  useEffect(() => {
    let cancelled = false
    getUsers({ limit: 200 }).then((data) => {
      if (!cancelled) setUsers(data)
      setLoading(false)
    })
    return () => { cancelled = true }
  }, [])

  const filtered = users.filter((u) => {
    const matchSearch =
      !searchQuery ||
      u.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (u.full_name?.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchRole = roleFilter === 'all' || u.role === roleFilter
    return matchSearch && matchRole
  })

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">{t('admin.users')}</h1>
        <p className="text-muted-foreground">Kullanıcı listesi ve yönetimi</p>
      </div>
      {!isApiConfigured() && (
        <p className="text-sm text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 rounded-lg p-3">
          Backend bağlantısı yapılandırılmadı. Veriler mock olarak gösteriliyor.
        </p>
      )}
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="E-posta veya ad ile ara..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select value={roleFilter} onValueChange={setRoleFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Rol" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tüm Roller</SelectItem>
                {(Object.keys(ROLE_LABELS) as UserRole[]).map((r) => (
                  <SelectItem key={r} value={r}>{ROLE_LABELS[r]}</SelectItem>
                ))}
              </SelectContent>
            </Select>
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
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>E-posta</TableHead>
                  <TableHead>Ad Soyad</TableHead>
                  <TableHead>Rol</TableHead>
                  <TableHead>Durum</TableHead>
                  <TableHead>Kayıt</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.map((u) => (
                  <TableRow key={u.id}>
                    <TableCell className="font-medium">{u.email}</TableCell>
                    <TableCell>{u.full_name || '—'}</TableCell>
                    <TableCell>
                      <Badge variant="secondary" className={cn('font-normal', ROLE_STYLES[u.role])}>
                        {ROLE_LABELS[u.role]}
                      </Badge>
                    </TableCell>
                    <TableCell>{u.is_active ? 'Aktif' : 'Pasif'}</TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {new Date(u.created_at).toLocaleDateString('tr-TR')}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
