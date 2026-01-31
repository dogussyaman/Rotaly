'use client'

import { useState } from 'react'
import { Search, MessageSquare, Clock, User, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Textarea } from '@/components/ui/textarea'
import { useI18n } from '@/lib/i18n'
import { cn } from '@/lib/utils'

const mockTickets = [
  {
    id: '1',
    subject: 'Rezervasyon iptali talebi',
    user: 'Ahmet Yılmaz',
    email: 'ahmet@example.com',
    category: 'cancellation',
    priority: 'high',
    status: 'open',
    createdAt: '2 saat önce',
    messages: [
      { id: 'm1', from: 'user', content: 'Merhaba, 15 Şubat tarihli rezervasyonumu iptal etmek istiyorum.', time: '2 saat önce' },
      { id: 'm2', from: 'support', content: 'Merhaba Ahmet Bey, talebiniz alınmıştır. İptal işlemi için rezervasyon numaranızı paylaşır mısınız?', time: '1 saat önce' },
      { id: 'm3', from: 'user', content: 'Rezervasyon numaram: RSV-2026-001234', time: '45 dakika önce' },
    ],
  },
  {
    id: '2',
    subject: 'Ödeme sorunu',
    user: 'Elif Kaya',
    email: 'elif@example.com',
    category: 'payment',
    priority: 'high',
    status: 'in-progress',
    createdAt: '5 saat önce',
    messages: [
      { id: 'm1', from: 'user', content: 'Ödeme yapmaya çalışıyorum ama hata alıyorum.', time: '5 saat önce' },
    ],
  },
  {
    id: '3',
    subject: 'Tesis bilgisi güncelleme',
    user: 'Mehmet Demir',
    email: 'mehmet@example.com',
    category: 'general',
    priority: 'low',
    status: 'open',
    createdAt: '1 gün önce',
    messages: [
      { id: 'm1', from: 'user', content: 'Otelimin fotoğraflarını güncellemek istiyorum, nasıl yapabilirim?', time: '1 gün önce' },
    ],
  },
  {
    id: '4',
    subject: 'Yorum şikayeti',
    user: 'Zeynep Arslan',
    email: 'zeynep@example.com',
    category: 'complaint',
    priority: 'medium',
    status: 'resolved',
    createdAt: '2 gün önce',
    messages: [
      { id: 'm1', from: 'user', content: 'Haksız bir yorum yapıldı, kaldırılmasını istiyorum.', time: '2 gün önce' },
      { id: 'm2', from: 'support', content: 'Yorumu inceledik ve kurallara uymadığı için kaldırdık.', time: '1 gün önce' },
    ],
  },
]

export default function AdminSupportPage() {
  const { t } = useI18n()
  const [selectedTicket, setSelectedTicket] = useState(mockTickets[0])
  const [replyText, setReplyText] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')

  const getStatusBadge = (status: string) => {
    const styles: Record<string, string> = {
      open: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
      'in-progress': 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
      resolved: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
      closed: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400',
    }
    const labels: Record<string, string> = {
      open: t('support.open'),
      'in-progress': t('support.inProgress'),
      resolved: t('support.resolved'),
      closed: t('support.closed'),
    }
    return (
      <Badge variant="secondary" className={cn("font-normal", styles[status])}>
        {labels[status]}
      </Badge>
    )
  }

  const getPriorityBadge = (priority: string) => {
    const styles: Record<string, string> = {
      high: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
      medium: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
      low: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400',
    }
    const labels: Record<string, string> = {
      high: t('support.high'),
      medium: t('support.medium'),
      low: t('support.low'),
    }
    return (
      <Badge variant="secondary" className={cn("font-normal text-xs", styles[priority])}>
        {labels[priority]}
      </Badge>
    )
  }

  const filteredTickets = mockTickets.filter((ticket) =>
    statusFilter === 'all' || ticket.status === statusFilter
  )

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">{t('admin.support')}</h1>
        <p className="text-muted-foreground">Destek taleplerini yönetin</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 h-[calc(100vh-220px)]">
        {/* Ticket List */}
        <Card className="lg:col-span-1">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">{t('support.myTickets')}</CardTitle>
              <Badge variant="secondary">{filteredTickets.length}</Badge>
            </div>
            <Tabs value={statusFilter} onValueChange={setStatusFilter}>
              <TabsList className="w-full">
                <TabsTrigger value="all" className="flex-1">Tümü</TabsTrigger>
                <TabsTrigger value="open" className="flex-1">Açık</TabsTrigger>
                <TabsTrigger value="in-progress" className="flex-1">İşleniyor</TabsTrigger>
              </TabsList>
            </Tabs>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-[calc(100vh-380px)]">
              <div className="px-4 pb-4 space-y-2">
                {filteredTickets.map((ticket) => (
                  <button
                    key={ticket.id}
                    className={cn(
                      "w-full text-left p-3 rounded-lg border transition-colors",
                      selectedTicket?.id === ticket.id
                        ? "bg-accent border-primary"
                        : "hover:bg-accent/50"
                    )}
                    onClick={() => setSelectedTicket(ticket)}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0 flex-1">
                        <p className="font-medium text-sm truncate">{ticket.subject}</p>
                        <p className="text-xs text-muted-foreground">{ticket.user}</p>
                      </div>
                      {getPriorityBadge(ticket.priority)}
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      {getStatusBadge(ticket.status)}
                      <span className="text-xs text-muted-foreground">{ticket.createdAt}</span>
                    </div>
                  </button>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Ticket Detail */}
        <Card className="lg:col-span-2 flex flex-col">
          {selectedTicket ? (
            <>
              <CardHeader className="border-b">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>{selectedTicket.subject}</CardTitle>
                    <CardDescription className="flex items-center gap-4 mt-1">
                      <span className="flex items-center gap-1">
                        <User className="h-3.5 w-3.5" />
                        {selectedTicket.user}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {selectedTicket.createdAt}
                      </span>
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    {getPriorityBadge(selectedTicket.priority)}
                    {getStatusBadge(selectedTicket.status)}
                  </div>
                </div>
              </CardHeader>

              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  {selectedTicket.messages.map((message) => (
                    <div
                      key={message.id}
                      className={cn(
                        "flex gap-3",
                        message.from === 'support' && "flex-row-reverse"
                      )}
                    >
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>
                          {message.from === 'user' ? selectedTicket.user.charAt(0) : 'S'}
                        </AvatarFallback>
                      </Avatar>
                      <div
                        className={cn(
                          "max-w-[70%] rounded-lg p-3",
                          message.from === 'support'
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted"
                        )}
                      >
                        <p className="text-sm">{message.content}</p>
                        <p className={cn(
                          "text-xs mt-1",
                          message.from === 'support' ? "text-primary-foreground/70" : "text-muted-foreground"
                        )}>
                          {message.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>

              <div className="border-t p-4">
                <div className="flex gap-2">
                  <Textarea
                    placeholder="Yanıtınızı yazın..."
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    className="min-h-[80px]"
                  />
                </div>
                <div className="flex justify-between mt-3">
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">Çözüldü Olarak İşaretle</Button>
                    <Button variant="outline" size="sm">Kapat</Button>
                  </div>
                  <Button>Yanıtla</Button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-muted-foreground">
              <div className="text-center">
                <MessageSquare className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>Görüntülemek için bir talep seçin</p>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  )
}
