'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Eye, EyeOff, Lock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useI18n } from '@/lib/i18n'
import { getSupabaseClient } from '@/lib/supabase/client'
import { updateUser } from '@/lib/api/users'
import { toast } from 'sonner'

export default function ChangePasswordPage() {
  const router = useRouter()
  const { t } = useI18n()
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.newPassword !== formData.confirmPassword) {
      toast.error('Yeni şifre ve tekrar eşleşmiyor.')
      return
    }
    if (formData.newPassword.length < 6) {
      toast.error('Yeni şifre en az 6 karakter olmalıdır.')
      return
    }
    setIsLoading(true)
    try {
      const supabase = getSupabaseClient()
      if (!supabase) {
        toast.success('Şifre değiştirme simüle edildi. Backend bağlandığında gerçek işlem yapılacak.')
        router.push('/hotel-owner')
        return
      }
      const { data: { user }, error: sessionError } = await supabase.auth.getUser()
      if (sessionError || !user) {
        toast.error('Oturum bulunamadı. Lütfen tekrar giriş yapın.')
        router.push('/auth/login')
        return
      }
      const { error: updateError } = await supabase.auth.updateUser({
        password: formData.newPassword,
      })
      if (updateError) {
        toast.error(updateError.message)
        return
      }
      await updateUser(user.id, { must_change_password: false })
      toast.success('Şifreniz güncellendi. İlk giriş zorunluluğu kaldırıldı.')
      router.push('/hotel-owner')
    } catch {
      toast.error('Bir hata oluştu.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-2xl font-bold">Şifrenizi Değiştirin</CardTitle>
        <CardDescription>
          İlk girişiniz. Geçici şifrenizi yeni bir şifre ile değiştirmeniz gerekiyor.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="currentPassword">Mevcut (geçici) şifre</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="currentPassword"
                type={showPassword ? 'text' : 'password'}
                value={formData.currentPassword}
                onChange={(e) =>
                  setFormData({ ...formData, currentPassword: e.target.value })
                }
                className="pl-10"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="newPassword">Yeni şifre</Label>
            <Input
              id="newPassword"
              type={showPassword ? 'text' : 'password'}
              value={formData.newPassword}
              onChange={(e) =>
                setFormData({ ...formData, newPassword: e.target.value })
              }
              className="pl-10"
              required
              minLength={6}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Yeni şifre (tekrar)</Label>
            <Input
              id="confirmPassword"
              type={showPassword ? 'text' : 'password'}
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
              className="pl-10"
              required
              minLength={6}
            />
          </div>
          <div className="flex items-center space-x-2">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4 mr-2" />
              ) : (
                <Eye className="h-4 w-4 mr-2" />
              )}
              {showPassword ? 'Gizle' : 'Göster'}
            </Button>
          </div>
          <Button type="submit" className="w-full h-11" disabled={isLoading}>
            {isLoading ? t('common.loading') : 'Şifreyi Güncelle'}
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
