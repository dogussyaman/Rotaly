"use client"
import { toast } from 'react-hot-toast'

export interface ReservationDetails {
    customerEmail: string
    customerName: string
    hotelName: string
    roomType: string
    checkIn: string
    checkOut: string
    totalPrice: number
    reservationId: string
    roomNumber?: string
    specialRequests?: string
}

interface ReservationEmailProps {
    reservationDetails: ReservationDetails
    onSuccess?: () => void
    onError?: (error: string) => void
}

export const sendReservationEmail = async (reservationDetails: ReservationDetails) => {
    const subject = `Rezervasyon Onayı - ${reservationDetails.hotelName}`
    
    const message = `
        Sayın ${reservationDetails.customerName},
        
        Rezervasyonunuz başarıyla oluşturulmuştur. Aşağıda rezervasyon detaylarınızı bulabilirsiniz:
        
        Rezervasyon ID: ${reservationDetails.reservationId}
        Otel: ${reservationDetails.hotelName}
        Oda Tipi: ${reservationDetails.roomType}
        ${reservationDetails.roomNumber ? `Oda Numarası: ${reservationDetails.roomNumber}` : ''}
        Giriş Tarihi: ${reservationDetails.checkIn}
        Çıkış Tarihi: ${reservationDetails.checkOut}
        Toplam Tutar: ${reservationDetails.totalPrice} TL
        ${reservationDetails.specialRequests ? `Özel İstekler: ${reservationDetails.specialRequests}` : ''}
        
        Rezervasyonunuzla ilgili herhangi bir sorunuz olursa bizimle iletişime geçebilirsiniz.
        
        İyi tatiller dileriz!
        Rotaly Hotel Ekibi
    `

    try {
        // Mock email sending delay
        await new Promise(resolve => setTimeout(resolve, 800));

        // Mock response
        console.log('📧 (MOCK) Rezervasyon emaili gönderildi:', { 
            to: reservationDetails.customerEmail, 
            subject: subject, 
            reservationId: reservationDetails.reservationId,
            timestamp: new Date().toLocaleString('tr-TR')
        })
        
        return { success: true, messageId: `mock-msg-${Date.now()}` }

    } catch (error) {
        console.error('Rezervasyon email gönderme hatası:', error)
        throw error
    }
}

export const ReservationEmail: React.FC<ReservationEmailProps> = ({ 
    reservationDetails, 
    onSuccess, 
    onError 
}) => {
    const handleSendEmail = async () => {
        try {
            const result = await sendReservationEmail(reservationDetails)
            console.log(result);
            
            toast.success('Rezervasyon onay emaili başarıyla gönderildi!')
            onSuccess?.()
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Email gönderilirken hata oluştu'
            toast.error(errorMessage)
            onError?.(errorMessage)
        }
    }

    return (
        <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
            <h3 className="text-lg font-semibold mb-3">📧 Rezervasyon Email Onayı</h3>
            <div className="space-y-2 text-sm">
                <p><strong>Müşteri:</strong> {reservationDetails.customerName}</p>
                <p><strong>Email:</strong> {reservationDetails.customerEmail}</p>
                <p><strong>Otel:</strong> {reservationDetails.hotelName}</p>
                <p><strong>Rezervasyon ID:</strong> {reservationDetails.reservationId}</p>
            </div>
            <button
                onClick={handleSendEmail}
                className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
                Onay Emaili Gönder
            </button>
        </div>
    )
}

// Otomatik email gönderme hook'u
export const useAutoReservationEmail = () => {
    const sendAutoEmail = async (reservationDetails: ReservationDetails) => {
        try {
            await sendReservationEmail(reservationDetails)
            console.log('✅ Otomatik rezervasyon emaili gönderildi')
            return true
        } catch (error) {
            console.error('❌ Otomatik email gönderme hatası:', error)
            return false
        }
    }

    return { sendAutoEmail }
} 