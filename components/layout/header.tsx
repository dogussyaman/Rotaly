'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Globe, Sun, Moon, Search, Menu, Mic } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { useI18n, locales, localeNames, type Locale } from '@/lib/i18n'
import { cn } from '@/lib/utils'

export function Header() {
  const { theme, setTheme } = useTheme()
  const { locale, setLocale, t } = useI18n()
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      scrolled 
        ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm" 
        : "bg-transparent"
    )}>
      <div className="container mx-auto flex h-16 md:h-18 items-center justify-between gap-4 px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-blue-600 shadow-lg shadow-primary/25 group-hover:shadow-primary/40 transition-shadow">
            <span className="text-white font-bold text-lg">R</span>
            <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <span className="font-bold text-xl tracking-tight">
            <span className="text-foreground">ROTA</span>
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">LY</span>
          </span>
        </Link>

        {/* Search Bar - Desktop */}
        <div className={cn(
          "hidden md:flex items-center flex-1 max-w-xl mx-4 relative transition-all duration-300",
          isSearchFocused && "max-w-2xl"
        )}>
          <div className="relative w-full group">
            <div className={cn(
              "absolute -inset-0.5 rounded-full bg-gradient-to-r from-primary/50 to-blue-500/50 opacity-0 blur transition-opacity duration-300",
              isSearchFocused && "opacity-100"
            )} />
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder={t('common.searchPlaceholder')}
                className="pl-11 pr-11 h-11 bg-secondary/50 border-border/50 hover:border-border focus-visible:ring-1 focus-visible:ring-primary rounded-full transition-all"
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-1 top-1/2 -translate-y-1/2 h-9 w-9 text-muted-foreground hover:text-foreground rounded-full"
              >
                <Mic className="h-4 w-4" />
                <span className="sr-only">Sesli arama</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-1.5">
          {/* Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-1.5 hidden sm:flex h-9 px-3 rounded-full hover:bg-secondary">
                <Globe className="h-4 w-4" />
                <span className="uppercase text-xs font-medium">{locale}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-[120px]">
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

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="hidden sm:flex h-9 w-9 rounded-full hover:bg-secondary"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Tema degistir</span>
          </Button>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center gap-2 ml-2">
            <Button variant="ghost" asChild className="rounded-full h-9 px-4">
              <Link href="/auth/login">{t('common.login')}</Link>
            </Button>
            <Button asChild className="rounded-full h-9 px-5 bg-gradient-to-r from-primary to-blue-600 hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
              <Link href="/auth/register">{t('common.register')}</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden h-9 w-9 rounded-full">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 p-0">
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="p-6 border-b border-border/50">
                  <Link href="/" className="flex items-center gap-2.5" onClick={() => setMobileMenuOpen(false)}>
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-blue-600">
                      <span className="text-white font-bold text-lg">R</span>
                    </div>
                    <span className="font-bold text-xl">
                      <span className="text-foreground">ROTA</span>
                      <span className="text-primary">LY</span>
                    </span>
                  </Link>
                </div>

                {/* Mobile Search */}
                <div className="p-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder={t('common.searchPlaceholder')}
                      className="pl-10 h-11 bg-secondary/50 rounded-xl"
                    />
                  </div>
                </div>

                {/* Mobile Navigation */}
                <nav className="flex-1 px-4 py-2 overflow-y-auto">
                  <div className="space-y-1">
                    {[
                      { href: '/', label: t('nav.home') },
                      { href: '/category/hotel', label: t('nav.hotel') },
                      { href: '/category/villa', label: t('nav.villa') },
                      { href: '/category/apartment', label: t('nav.apartment') },
                      { href: '/category/bungalow', label: t('nav.bungalow') },
                      { href: '/support', label: t('nav.support') },
                    ].map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-secondary transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </nav>

                {/* Mobile Settings & Auth */}
                <div className="p-4 border-t border-border/50 space-y-4">
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 bg-transparent rounded-xl h-10"
                      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    >
                      {theme === 'dark' ? <Sun className="h-4 w-4 mr-2" /> : <Moon className="h-4 w-4 mr-2" />}
                      {theme === 'dark' ? 'Acik' : 'Koyu'}
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="sm" className="rounded-xl h-10 bg-transparent">
                          <Globe className="h-4 w-4 mr-2" />
                          {locale.toUpperCase()}
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        {locales.map((loc) => (
                          <DropdownMenuItem key={loc} onClick={() => setLocale(loc as Locale)}>
                            {localeNames[loc as Locale]}
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Button variant="outline" asChild className="w-full bg-transparent rounded-xl h-11">
                      <Link href="/auth/login" onClick={() => setMobileMenuOpen(false)}>
                        {t('common.login')}
                      </Link>
                    </Button>
                    <Button asChild className="w-full rounded-xl h-11 bg-gradient-to-r from-primary to-blue-600">
                      <Link href="/auth/register" onClick={() => setMobileMenuOpen(false)}>
                        {t('common.register')}
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
