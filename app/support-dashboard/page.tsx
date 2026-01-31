'use client'

import {
    Ticket, Clock, CheckCircle2, AlertCircle, TrendingUp, Users, MessageSquare, ArrowUpRight
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useI18n } from '@/lib/i18n'
import { cn } from '@/lib/utils'

const stats = [
    {
        title: 'Açık Talepler',
        value: '24',
        change: '+3',
        trend: 'up',
        icon: Ticket,
        color: 'text-blue-500',
        bgColor: 'bg-blue-500/10',
    },
    {
        title: 'İşlemde',
        value: '12',
        change: '+2',
        trend: 'up',
        icon: Clock,
        color: 'text-orange-500',
        bgColor: 'bg-orange-500/10',
    },
    {
        title: 'Bugün Çözülen',
        value: '18',
        change: '+5',
        trend: 'up',
        icon: CheckCircle2,
        color: 'text-emerald-500',
        bgColor: 'bg-emerald-500/10',
    },
    {
        title: 'Ortalama Yanıt',
        value: '2.4 saat',
        change: '-0.3',
        trend: 'down',
        icon: TrendingUp,
        color: 'text-purple-500',
        bgColor: 'bg-purple-500/10',
    },
]

const assignedTickets = [
    {
        id: '1',
        ticketNumber: 'TKT20260131-A1B2C3',
        subject: 'Rezervasyon iptali talebi',
        user: 'Ahmet Yılmaz',
        userEmail: 'ahmet@example.com',
        priority: 'high',
        status: 'open',
        category: 'Rezervasyon',
        createdAt: '1 saat önce',
        lastMessage: 'Acil iptal etmem gerekiyor',
    },
    {
        id: '2',
        ticketNumber: 'TKT20260131-D4E5F6',
        subject: 'Ödeme işlemi başarısız',
        user: 'Elif Kaya',
        userEmail: 'elif@example.com',
        priority: 'urgent',
        status: 'in_progress',
        category: 'Ödeme',
        createdAt: '30 dakika önce',
        lastMessage: 'Kredi kartımdan para çekildi ama rezervasyon oluşmadı',
    },
    {
        id: '3',
        ticketNumber: 'TKT20260130-G7H8I9',
        subject: 'Otel bilgileri güncel değil',
        user: 'Mehmet Demir',
        userEmail: 'mehmet@example.com',
        priority: 'medium',
        status: 'open',
        category: 'Şikayet',
        createdAt: '3 saat önce',
        lastMessage: 'Web sitesindeki fotoğraflar gerçeği yansıtmıyor',
    },
    {
        id: '4',
        ticketNumber: 'TKT20260130-J1K2L3',
        subject: 'Rezervasyon tarih değişikliği',
        user: 'Zeynep Arslan',
        userEmail: 'zeynep@example.com',
        priority: 'low',
        status: 'in_progress',
        category: 'İptal / Değişiklik',
        createdAt: '5 saat önce',
        lastMessage: 'Tarihleri 1 hafta ileri almak istiyorum',
    },
]

const recentTickets = [
    {
        id: '5',
        ticketNumber: 'TKT20260131-M4N5O6',
        subject: 'Fatura talebi',
        user: 'Can Özkan',
        priority: 'low',
        status: 'open',
        category: 'Diğer',
        createdAt: '10 dakika önce',
    },
    {
        id: '6',
        ticketNumber: 'TKT20260131-P7Q8R9',
        subject: 'Erken check-in mümkün mü?',
        user: 'Ayşe Yıldız',
        priority: 'medium',
        status: 'open',
        category: 'Rezervasyon',
        createdAt: '25 dakika önce',
    },
    {
        id: '7',
        ticketNumber: 'TKT20260131-S1T2U3',
        subject: 'Havuz kullanımı hakkında',
        user: 'Burak Çelik',
        priority: 'low',
        status: 'open',
        category: 'Öneri',
        createdAt: '45 dakika önce',
    },
]

const ticketCategories = [
    { name: 'Rezervasyon', count: 45, color: 'bg-blue-500' },
    { name: 'Ödeme', count: 28, color: 'bg-emerald-500' },
    { name: 'İptal / Değişiklik', count: 32, color: 'bg-orange-500' },
    { name: 'Şikayet', count: 15, color: 'bg-red-500' },
    { name: 'Öneri', count: 8, color: 'bg-purple-500' },
    { name: 'Diğer', count: 12, color: 'bg-gray-500' },
]

export default function SupportDashboard() {
    const { t } = useI18n()

    const getPriorityBadge = (priority: string) => {
        const styles: Record<string, string> = {
            urgent: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 border-red-200 dark:border-red-800',
            high: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 border-orange-200 dark:border-orange-800',
            medium: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800',
            low: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400 border-gray-200 dark:border-gray-700',
        }
        const labels: Record<string, string> = {
            urgent: 'Acil',
            high: 'Yüksek',
            medium: 'Orta',
            low: 'Düşük',
        }
        return (
            <Badge variant="outline" className={cn("font-normal", styles[priority])}>
                {labels[priority]}
            </Badge>
        )
    }

    const getStatusBadge = (status: string) => {
        const styles: Record<string, string> = {
            open: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
            in_progress: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
            resolved: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
            closed: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400',
        }
        const labels: Record<string, string> = {
            open: 'Açık',
            in_progress: 'İşleniyor',
            resolved: 'Çözüldü',
            closed: 'Kapalı',
        }
        return (
            <Badge variant="secondary" className={cn("font-normal", styles[status])}>
                {labels[status]}
            </Badge>
        )
    }

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold">Destek Dashboard</h1>
                <p className="text-muted-foreground">Destek taleplerini yönetin ve müşterilere yardımcı olun.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => {
                    const Icon = stat.icon
                    return (
                        <Card key={stat.title} className="dark:bg-zinc-800">
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between">
                                    <div className={cn("p-2 rounded-lg", stat.bgColor)}>
                                        <Icon className={cn("h-5 w-5", stat.color)} />
                                    </div>
                                    <div className={cn(
                                        "flex items-center gap-1 text-sm font-medium",
                                        stat.trend === 'up' ? "text-emerald-500" : "text-red-500"
                                    )}>
                                        {stat.trend === 'up' ? (
                                            <ArrowUpRight className="h-4 w-4" />
                                        ) : (
                                            <ArrowUpRight className="h-4 w-4 rotate-90" />
                                        )}
                                        {stat.change}
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <p className="text-2xl font-bold">{stat.value}</p>
                                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                                </div>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>

            {/* Assigned Tickets */}
            <Card className="dark:bg-zinc-800">
                <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                        <CardTitle>Bana Atanan Talepler</CardTitle>
                        <CardDescription>Şu anda sizin sorumluluğunuzda olan destek talepleri</CardDescription>
                    </div>
                    <Button variant="outline" size="sm">Tümünü Gör</Button>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {assignedTickets.map((ticket) => (
                            <div key={ticket.id} className="flex items-start justify-between p-4 rounded-lg border dark:border-zinc-700 hover:bg-accent/50 transition-colors">
                                <div className="flex items-start gap-3 flex-1">
                                    <Avatar className="h-10 w-10">
                                        <AvatarFallback>{ticket.user.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 mb-1">
                                            <p className="font-medium text-sm">{ticket.subject}</p>
                                            {getPriorityBadge(ticket.priority)}
                                        </div>
                                        <p className="text-xs text-muted-foreground mb-1">
                                            {ticket.ticketNumber} • {ticket.user} • {ticket.createdAt}
                                        </p>
                                        <p className="text-xs text-muted-foreground italic line-clamp-1">
                                            "{ticket.lastMessage}"
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 ml-4">
                                    <Badge variant="outline" className="text-xs">
                                        {ticket.category}
                                    </Badge>
                                    {getStatusBadge(ticket.status)}
                                    <Button variant="ghost" size="sm">
                                        <MessageSquare className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            <div className="grid gap-6 lg:grid-cols-2">
                {/* Recent Tickets */}
                <Card className="dark:bg-zinc-800">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <div>
                            <CardTitle>Son Talepler</CardTitle>
                            <CardDescription>Henüz atanmamış yeni talepler</CardDescription>
                        </div>
                        <Button variant="outline" size="sm">Tümünü Gör</Button>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-3">
                            {recentTickets.map((ticket) => (
                                <div key={ticket.id} className="flex items-center justify-between p-3 rounded-lg border dark:border-zinc-700 hover:bg-accent/50 transition-colors">
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 mb-1">
                                            <p className="font-medium text-sm truncate">{ticket.subject}</p>
                                        </div>
                                        <p className="text-xs text-muted-foreground">
                                            {ticket.ticketNumber} • {ticket.user}
                                        </p>
                                        <p className="text-xs text-muted-foreground">{ticket.createdAt}</p>
                                    </div>
                                    <div className="flex items-center gap-2 ml-2">
                                        {getPriorityBadge(ticket.priority)}
                                        <Button variant="ghost" size="sm">
                                            Ata
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Ticket Categories */}
                <Card className="dark:bg-zinc-800">
                    <CardHeader>
                        <CardTitle>Kategori Dağılımı</CardTitle>
                        <CardDescription>Aktif taleplerin kategorilere göre dağılımı</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {ticketCategories.map((category, index) => (
                                <div key={index} className="space-y-2">
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="font-medium">{category.name}</span>
                                        <span className="text-muted-foreground">{category.count} talep</span>
                                    </div>
                                    <div className="w-full bg-secondary rounded-full h-2">
                                        <div
                                            className={cn("h-2 rounded-full", category.color)}
                                            style={{ width: `${(category.count / 140) * 100}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Quick Actions */}
            <Card className="dark:bg-zinc-800">
                <CardHeader>
                    <CardTitle>Hızlı İşlemler</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-4 md:grid-cols-4">
                        <Button variant="outline" className="h-auto flex-col gap-2 py-4 bg-transparent">
                            <Ticket className="h-5 w-5" />
                            <span>Tüm Talepler</span>
                        </Button>
                        <Button variant="outline" className="h-auto flex-col gap-2 py-4 bg-transparent">
                            <Users className="h-5 w-5" />
                            <span>Kullanıcı Ara</span>
                        </Button>
                        <Button variant="outline" className="h-auto flex-col gap-2 py-4 bg-transparent">
                            <AlertCircle className="h-5 w-5" />
                            <span>Acil Talepler</span>
                        </Button>
                        <Button variant="outline" className="h-auto flex-col gap-2 py-4 bg-transparent">
                            <TrendingUp className="h-5 w-5" />
                            <span>Raporlar</span>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
