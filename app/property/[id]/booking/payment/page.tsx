'use client'

import { useState } from 'react'
import { useRouter, useSearchParams, useParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { createBooking, createBookingPayment } from '@/lib/api/bookings'
import { getSupabaseClient } from '@/lib/supabase/client'
import { toast } from 'sonner'

export default function BookingPaymentPage() {
  const params = useParams()
  const id = params.id as string
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isLoading, setIsLoading] = useState(false)

  const checkIn = searchParams.get('check_in')
  const checkOut = searchParams.get('check_out')
  const roomId = searchParams.get('room_id')
  const adults = parseInt(searchParams.get('adults') || '1', 10)
  const children = parseInt(searchParams.get('children') || '0', 10)
  const nights = parseInt(searchParams.get('nights') || '1', 10)
  const guest_name = searchParams.get('guest_name') || ''
  const guest_email = searchParams.get('guest_email') || ''
  const guest_phone = searchParams.get('guest_phone') || ''
  const special_requests = searchParams.get('special_requests') || ''

  const totalPrice = 1000 * nights
  const roomPrice = 1000

  const handleConfirm = async () => {
    if (!checkIn || !checkOut || !roomId) {
      toast.error('Tarih veya oda bilgisi eksik.')
      return
    }
    setIsLoading(true)
    try {
      const supabase = getSupabaseClient()
      const userId = supabase ? (await supabase.auth.getUser()).data.user?.id : null
      const booking = await createBooking({
        user_id: userId || '00000000-0000-0000-0000-000000000000',
        property_id: id,
        room_id: roomId,
        check_in_date: checkIn,
        check_out_date: checkOut,
        nights,
        adults,
        children,
        room_price: roomPrice,
        total_price: totalPrice,
        guest_name,
        guest_email,
        guest_phone: guest_phone || undefined,
        special_requests: special_requests || undefined,
      })
      if (booking) {
        await createBookingPayment({
          booking_id: booking.id,
          amount: totalPrice,
          payment_method: 'pay_at_property',
          status: 'paid',
        })
        router.push(`/property/${id}/booking/success?booking_number=${encodeURIComponent(booking.booking_number || booking.id)}`)
      } else {
        toast.success('Rezervasyon simüle edildi. Backend bağlandığında gerçek kayıt oluşturulacak.')
        router.push(`/property/${id}/booking/success?booking_number=ROT-DEMO-${Date.now()}`)
      }
    } catch {
      toast.error('Rezervasyon oluşturulurken bir hata oluştu.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Ödeme</CardTitle>
        <CardContent className="pt-0 text-muted-foreground text-sm">
          Rezervasyonunuzu tamamlamak için aşağıdaki butona tıklayın. Şu an ödeme alınmayacaktır; sadece rezervasyon kaydı oluşturulacak ve otel ciro takibinde ücret alınmış gibi görünecektir.
        </CardContent>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="rounded-lg border bg-muted/50 p-4 text-sm">
          <div className="flex justify-between">
            <span>Toplam</span>
            <span className="font-semibold">{totalPrice.toLocaleString('tr-TR')} TL</span>
          </div>
          <p className="text-muted-foreground mt-2 text-xs">
            Ödeme tesiste veya daha sonra yapılacaktır. Bu adım sadece rezervasyonu onaylamak içindir.
          </p>
        </div>
        <Button
          className="w-full"
          size="lg"
          onClick={handleConfirm}
          disabled={isLoading}
        >
          {isLoading ? 'İşleniyor...' : 'Rezervasyonu Onayla'}
        </Button>
      </CardContent>
    </Card>
  )
}
