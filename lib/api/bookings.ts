import { apiSelect, apiInsert, isApiConfigured } from './client'

export type BookingStatus =
  | 'pending'
  | 'confirmed'
  | 'cancelled'
  | 'completed'
  | 'refunded'
export type PaymentStatus =
  | 'pending'
  | 'paid'
  | 'failed'
  | 'refunded'
  | 'partially_refunded'
export type PaymentMethod =
  | 'credit_card'
  | 'bank_transfer'
  | 'pay_at_property'

export interface Booking {
  id: string
  booking_number: string
  user_id: string
  property_id: string
  room_id: string
  check_in_date: string
  check_out_date: string
  nights: number
  adults: number
  children: number
  room_price: number
  total_price: number
  currency: string
  status: BookingStatus
  payment_status: PaymentStatus
  payment_method: PaymentMethod | null
  guest_name: string
  guest_email: string
  guest_phone: string | null
  special_requests: string | null
  created_at: string
  updated_at: string
}

export interface BookingPayment {
  id: string
  booking_id: string
  amount: number
  currency: string
  payment_method: PaymentMethod
  status: PaymentStatus
  transaction_id: string | null
  paid_at: string | null
  created_at: string
}

export async function getBookings(params?: {
  user_id?: string
  property_id?: string
  status?: BookingStatus
  limit?: number
}): Promise<Booking[]> {
  const { data } = await apiSelect<Booking>('bookings', {
    select: '*',
    order: 'created_at.desc',
    limit: params?.limit ?? 100,
  })
  if (!data.length) return []
  let list = data
  if (params?.user_id) list = list.filter((b) => b.user_id === params.user_id)
  if (params?.property_id)
    list = list.filter((b) => b.property_id === params.property_id)
  if (params?.status) list = list.filter((b) => b.status === params.status)
  return list
}

export async function getBookingById(id: string): Promise<Booking | null> {
  const { data } = await apiSelect<Booking>('bookings', {
    select: '*',
    limit: 1,
    filters: isApiConfigured() ? { id: `eq.${id}` } : undefined,
  })
  return data.find((b) => b.id === id) ?? null
}

export async function createBooking(payload: {
  user_id: string
  property_id: string
  room_id: string
  check_in_date: string
  check_out_date: string
  nights: number
  adults: number
  children?: number
  room_price: number
  total_price: number
  guest_name: string
  guest_email: string
  guest_phone?: string
  special_requests?: string
}): Promise<Booking | null> {
  const { data } = await apiInsert<Booking>('bookings', {
    ...payload,
    status: 'confirmed',
    payment_status: 'paid',
    payment_method: 'pay_at_property',
    currency: 'TRY',
  } as Record<string, unknown>)
  return data
}

export async function createBookingPayment(payload: {
  booking_id: string
  amount: number
  payment_method: PaymentMethod
  status?: PaymentStatus
}): Promise<BookingPayment | null> {
  const { data } = await apiInsert<BookingPayment>('booking_payments', {
    ...payload,
    currency: 'TRY',
    status: payload.status ?? 'paid',
    paid_at: new Date().toISOString(),
  } as Record<string, unknown>)
  return data
}
