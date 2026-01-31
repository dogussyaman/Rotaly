'use client'

import Link from 'next/link'
import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useI18n } from '@/lib/i18n'

export function Footer() {
  const { t } = useI18n()

  const categories = [
    { href: '/category/hotel', label: t('nav.hotel') },
    { href: '/category/villa', label: t('nav.villa') },
    { href: '/category/apartment', label: t('nav.apartment') },
    { href: '/category/bungalow', label: t('nav.bungalow') },
    { href: '/category/guesthouse', label: t('nav.guesthouse') },
    { href: '/category/camping', label: t('nav.camping') },
  ]

  const support = [
    { href: '/support', label: t('nav.supportTickets') },
    { href: '/faq', label: t('nav.faq') },
    { href: '/cancellation', label: t('nav.cancellation') },
  ]

  const discover = [
    { href: '/about', label: t('nav.about') },
    { href: '/privacy', label: t('nav.privacy') },
    { href: '/terms', label: t('nav.terms') },
    { href: '/contact', label: t('nav.contact') },
  ]

  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10">
                <span className="text-primary font-bold text-sm">R</span>
              </div>
              <span className="font-bold text-xl tracking-tight">
                <span className="text-foreground">ROTA</span>
                <span className="text-primary">LY</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm mb-6">
              {t('footer.description')}
            </p>

            {/* Newsletter */}
            <div className="space-y-3">
              <h4 className="font-medium text-sm">{t('footer.newsletter')}</h4>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder={t('footer.newsletterPlaceholder')}
                  className="max-w-[240px]"
                />
                <Button>{t('footer.subscribe')}</Button>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4">{t('footer.categories')}</h4>
            <ul className="space-y-2.5">
              {categories.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">{t('footer.support')}</h4>
            <ul className="space-y-2.5">
              {support.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Discover */}
          <div>
            <h4 className="font-semibold mb-4">{t('nav.discover')}</h4>
            <ul className="space-y-2.5">
              {discover.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            {t('footer.copyright')}
          </p>

          {/* Social */}
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <Youtube className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
