'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useI18n } from '@/lib/i18n'
import { getSupabaseClient } from '@/lib/supabase/client'
import { toast } from 'sonner'

export default function ForgotPasswordPage() {
  const { t } = useI18n()
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const supabase = getSupabaseClient()
      if (supabase) {
        const { error } = await supabase.auth.resetPasswordForEmail(email, {
          redirectTo: `${typeof window !== 'undefined' ? window.location.origin : ''}/auth/login`,
        })
        if (error) {
          toast.error(error.message)
          return
        }
      }
      setSent(true)
      toast.success('Şifre sıfırlama bağlantısı e-posta adresinize gönderildi.')
    } catch {
      toast.error('Bir hata oluştu.')
    } finally {
      setIsLoading(false)
    }
  }

  if (sent) {
    return (
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">E-posta Gönderildi</CardTitle>
          <CardDescription className="text-center">
            Şifre sıfırlama bağlantısı {email} adresine gönderildi. Lütfen gelen kutunuzu kontrol edin.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild className="w-full">
            <Link href="/auth/login">Giriş sayfasına dön</Link>
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-2xl font-bold">Şifremi Unuttum</CardTitle>
        <CardDescription>
          E-posta adresinizi girin, size şifre sıfırlama bağlantısı gönderelim.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">{t('auth.email')}</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                placeholder="ornek@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10"
                required
              />
            </div>
          </div>
          <Button type="submit" className="w-full h-11" disabled={isLoading}>
            {isLoading ? t('common.loading') : 'Gönder'}
          </Button>
        </form>
        <p className="text-center text-sm text-muted-foreground mt-4">
          <Link href="/auth/login" className="text-primary hover:underline">
            Giriş sayfasına dön
          </Link>
        </p>
      </CardContent>
    </Card>
  )
}
