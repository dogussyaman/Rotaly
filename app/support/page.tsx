"use client"

import React from "react"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { useI18n } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MessageSquare, Phone, Mail, Clock } from "lucide-react"

export default function SupportPage() {
  const { t } = useI18n()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const contactMethods = [
    {
      icon: Phone,
      title: "Telefon",
      description: "+90 850 123 45 67",
      subtext: "Pazartesi - Cumartesi: 09:00 - 18:00",
    },
    {
      icon: Mail,
      title: "E-posta",
      description: "destek@rotaly.com",
      subtext: "24 saat içinde yanıt",
    },
    {
      icon: Clock,
      title: "Çalışma Saatleri",
      description: "09:00 - 18:00",
      subtext: "Hafta içi her gün",
    },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    alert("Destek talebiniz alınmıştır. En kısa sürede size dönüş yapacağız.")
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-foreground mb-4">
                {t("footer.supportRequests")}
              </h1>
              <p className="text-lg text-muted-foreground">
                Size nasıl yardımcı olabiliriz? Aşağıdaki formu doldurun veya bize ulaşın.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {contactMethods.map((method, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-xl flex items-center justify-center">
                      <method.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{method.title}</h3>
                    <p className="text-foreground font-medium">{method.description}</p>
                    <p className="text-sm text-muted-foreground mt-1">{method.subtext}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  Destek Talebi Oluştur
                </CardTitle>
                <CardDescription>
                  Sorununuzu detaylı bir şekilde açıklayın, size en kısa sürede dönüş yapalım.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Ad Soyad</Label>
                      <Input id="name" placeholder="Adınız Soyadınız" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-posta</Label>
                      <Input id="email" type="email" placeholder="ornek@email.com" required />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefon</Label>
                      <Input id="phone" type="tel" placeholder="+90 5XX XXX XX XX" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="category">Kategori</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Kategori seçin" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="reservation">Rezervasyon</SelectItem>
                          <SelectItem value="payment">Ödeme</SelectItem>
                          <SelectItem value="cancellation">İptal / Değişiklik</SelectItem>
                          <SelectItem value="complaint">Şikayet</SelectItem>
                          <SelectItem value="suggestion">Öneri</SelectItem>
                          <SelectItem value="other">Diğer</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="booking">Rezervasyon Numarası (varsa)</Label>
                    <Input id="booking" placeholder="RTL-XXXXXXXX" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Konu</Label>
                    <Input id="subject" placeholder="Destek talebinizin konusu" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mesajınız</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Sorununuzu veya talebinizi detaylı bir şekilde açıklayın..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full md:w-auto" disabled={isSubmitting}>
                    {isSubmitting ? "Gönderiliyor..." : "Destek Talebi Gönder"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
