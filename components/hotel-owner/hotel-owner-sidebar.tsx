'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
    LayoutDashboard, Building2, CalendarCheck, Bed, Star,
    DollarSign, Settings, LogOut, ChevronLeft, Menu, BarChart3
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { useI18n } from '@/lib/i18n'
import { cn } from '@/lib/utils'

const sidebarItems = [
    { icon: LayoutDashboard, href: '/hotel-owner', label: 'Dashboard' },
    { icon: Building2, href: '/hotel-owner/properties', label: 'Tesislerim' },
    { icon: Bed, href: '/hotel-owner/rooms', label: 'Odalar' },
    { icon: CalendarCheck, href: '/hotel-owner/bookings', label: 'Rezervasyonlar' },
    { icon: Star, href: '/hotel-owner/reviews', label: 'Yorumlar' },
    { icon: DollarSign, href: '/hotel-owner/pricing', label: 'Fiyatlandırma' },
    { icon: BarChart3, href: '/hotel-owner/analytics', label: 'Raporlar' },
    { icon: Settings, href: '/hotel-owner/settings', label: 'Ayarlar' },
]

interface HotelOwnerSidebarProps {
    isCollapsed?: boolean
    onCollapse?: (collapsed: boolean) => void
}

function SidebarContent({ isCollapsed = false }: { isCollapsed?: boolean }) {
    const pathname = usePathname()
    const { t } = useI18n()

    return (
        <div className="flex h-full flex-col">
            {/* Logo */}
            <div className="flex h-16 items-center border-b px-4">
                <Link href="/hotel-owner" className="flex items-center gap-2">
                    <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10">
                        <span className="text-primary font-bold text-sm">R</span>
                    </div>
                    {!isCollapsed && (
                        <span className="font-bold text-xl tracking-tight">
                            <span className="text-foreground">ROTA</span>
                            <span className="text-primary">LY</span>
                        </span>
                    )}
                </Link>
            </div>

            {/* Navigation */}
            <ScrollArea className="flex-1 px-3 py-4">
                <nav className="flex flex-col gap-1">
                    {sidebarItems.map((item) => {
                        const Icon = item.icon
                        const isActive = pathname === item.href ||
                            (item.href !== '/hotel-owner' && pathname.startsWith(item.href))

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                                    isActive
                                        ? "bg-primary text-primary-foreground"
                                        : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                                    isCollapsed && "justify-center px-2"
                                )}
                            >
                                <Icon className="h-5 w-5 shrink-0" />
                                {!isCollapsed && <span>{item.label}</span>}
                            </Link>
                        )
                    })}
                </nav>
            </ScrollArea>

            {/* Footer */}
            <div className="border-t p-3">
                <Button
                    variant="ghost"
                    className={cn(
                        "w-full justify-start gap-3 text-muted-foreground hover:text-foreground",
                        isCollapsed && "justify-center px-2"
                    )}
                >
                    <LogOut className="h-5 w-5" />
                    {!isCollapsed && <span>{t('common.logout')}</span>}
                </Button>
            </div>
        </div>
    )
}

export function HotelOwnerSidebar({ isCollapsed = false, onCollapse }: HotelOwnerSidebarProps) {
    return (
        <>
            {/* Desktop Sidebar */}
            <aside
                className={cn(
                    "hidden lg:flex flex-col border-r bg-card transition-all duration-300",
                    isCollapsed ? "w-16" : "w-64"
                )}
            >
                <SidebarContent isCollapsed={isCollapsed} />
                {onCollapse && (
                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute bottom-20 -right-3 z-10 h-6 w-6 rounded-full border bg-background shadow-sm"
                        onClick={() => onCollapse(!isCollapsed)}
                    >
                        <ChevronLeft className={cn("h-4 w-4 transition-transform", isCollapsed && "rotate-180")} />
                    </Button>
                )}
            </aside>

            {/* Mobile Sidebar */}
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="lg:hidden fixed top-4 left-4 z-50">
                        <Menu className="h-5 w-5" />
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-64 p-0">
                    <SidebarContent />
                </SheetContent>
            </Sheet>
        </>
    )
}
