import { apiSelect, apiInsert, apiUpdate, isApiConfigured } from './client'

export type PropertyType =
  | 'hotel'
  | 'villa'
  | 'apartment'
  | 'bungalow'
  | 'hostel'
  | 'camp'
export type ApplicationStatus = 'pending' | 'approved' | 'rejected'

export interface HotelApplication {
  id: string
  application_number: string
  business_name: string
  contact_name: string
  contact_email: string
  contact_phone: string | null
  property_type: PropertyType
  address: string
  city: string
  state: string | null
  postal_code: string | null
  country: string
  description: string | null
  status: ApplicationStatus
  reviewed_by: string | null
  reviewed_at: string | null
  rejection_reason: string | null
  created_user_id: string | null
  created_property_id: string | null
  created_at: string
  updated_at: string
}

export async function getHotelApplications(params?: {
  status?: ApplicationStatus
  limit?: number
}): Promise<HotelApplication[]> {
  const { data } = await apiSelect<HotelApplication>('hotel_applications', {
    select: '*',
    order: 'created_at.desc',
    limit: params?.limit ?? 100,
  })
  if (!data.length) return []
  let list = data
  if (params?.status) list = list.filter((a) => a.status === params.status)
  return list
}

export async function getHotelApplicationById(
  id: string
): Promise<HotelApplication | null> {
  const { data } = await apiSelect<HotelApplication>('hotel_applications', {
    select: '*',
    limit: 1,
    filters: isApiConfigured() ? { id: `eq.${id}` } : undefined,
  })
  return data.find((a) => a.id === id) ?? null
}

export async function createHotelApplication(payload: {
  business_name: string
  contact_name: string
  contact_email: string
  contact_phone?: string
  property_type: PropertyType
  address: string
  city: string
  state?: string
  postal_code?: string
  country?: string
  description?: string
}): Promise<HotelApplication | null> {
  const { data } = await apiInsert<HotelApplication>('hotel_applications', {
    ...payload,
    country: payload.country ?? 'TR',
  } as Record<string, unknown>)
  return data
}

export async function updateHotelApplication(
  id: string,
  payload: Partial<HotelApplication>
): Promise<HotelApplication | null> {
  const { data } = await apiUpdate<HotelApplication>(
    'hotel_applications',
    id,
    payload as Record<string, unknown>
  )
  return data
}
