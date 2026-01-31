'use client'

import { Bell, Search, Sun, Moon, Globe, User } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { useI18n, locales, localeNames, type Locale } from '@/lib/i18n'
import { cn } from '@/lib/utils'

export function HotelOwnerHeader() {
    const { theme, setTheme } = useTheme()
    const { locale, setLocale, t } = useI18n()

    return (
        <header className="sticky top-0 z-40 flex h-16 items-center gap-4 border-b bg-card px-6">
            {/* Search */}
            <div className="hidden md:flex flex-1 max-w-md">
                <div className="relative w-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                        type="search"
                        placeholder="Ara..."
                        className="pl-10 bg-muted/50 border-0"
                    />
                </div>
            </div>

            <div className="flex-1 md:hidden" />

            {/* Actions */}
            <div className="flex items-center gap-2">
                {/* Language */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <Globe className="h-5 w-5" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        {locales.map((loc) => (
                            <DropdownMenuItem
                                key={loc}
                                onClick={() => setLocale(loc as Locale)}
                                className={cn(locale === loc && "bg-accent")}
                            >
                                {localeNames[loc as Locale]}
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>

                {/* Theme */}
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                >
                    <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                </Button>

                {/* Notifications */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="relative">
                            <Bell className="h-5 w-5" />
                            <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs">
                                5
                            </Badge>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-80">
                        <DropdownMenuLabel>Bildirimler</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <div className="space-y-2 p-2">
                            <div className="flex gap-3 p-2 rounded-lg hover:bg-accent cursor-pointer">
                                <div className="h-2 w-2 mt-2 rounded-full bg-primary shrink-0" />
                                <div>
                                    <p className="text-sm font-medium">Yeni rezervasyon</p>
                                    <p className="text-xs text-muted-foreground">Grand Resort - 3 gece</p>
                                </div>
                            </div>
                            <div className="flex gap-3 p-2 rounded-lg hover:bg-accent cursor-pointer">
                                <div className="h-2 w-2 mt-2 rounded-full bg-primary shrink-0" />
                                <div>
                                    <p className="text-sm font-medium">Yeni yorum</p>
                                    <p className="text-xs text-muted-foreground">⭐ 5 puan aldınız</p>
                                </div>
                            </div>
                            <div className="flex gap-3 p-2 rounded-lg hover:bg-accent cursor-pointer">
                                <div className="h-2 w-2 mt-2 rounded-full bg-emerald-500 shrink-0" />
                                <div>
                                    <p className="text-sm font-medium">Ödeme alındı</p>
                                    <p className="text-xs text-muted-foreground">₺12,500 hesabınıza aktarıldı</p>
                                </div>
                            </div>
                        </div>
                    </DropdownMenuContent>
                </DropdownMenu>

                {/* User Menu */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="relative h-9 w-9 rounded-full">
                            <Avatar className="h-9 w-9">
                                <AvatarImage src="/placeholder.svg" alt="Otel Sahibi" />
                                <AvatarFallback>OS</AvatarFallback>
                            </Avatar>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56" align="end">
                        <DropdownMenuLabel className="font-normal">
                            <div className="flex flex-col space-y-1">
                                <p className="text-sm font-medium leading-none">Otel Sahibi</p>
                                <p className="text-xs leading-none text-muted-foreground">
                                    owner@rotaly.com
                                </p>
                            </div>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <User className="mr-2 h-4 w-4" />
                            {t('common.profile')}
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            {t('common.settings')}
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">
                            {t('common.logout')}
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    )
}
