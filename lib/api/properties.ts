import { apiSelect, apiInsert, apiUpdate, isApiConfigured } from './client'

export type PropertyType =
  | 'hotel'
  | 'villa'
  | 'apartment'
  | 'bungalow'
  | 'hostel'
  | 'camp'

export interface Property {
  id: string
  owner_id: string
  property_type: PropertyType
  slug: string
  star_rating: number | null
  address: string
  city: string
  state: string | null
  postal_code: string | null
  country: string
  phone: string | null
  email: string | null
  website: string | null
  check_in_time: string
  check_out_time: string
  min_stay_nights: number
  max_stay_nights: number
  cancellation_days: number
  is_active: boolean
  is_verified: boolean
  is_featured: boolean
  total_rooms: number
  avg_rating: number
  review_count: number
  created_at: string
  updated_at: string
}

export async function getProperties(params?: {
  city?: string
  type?: PropertyType
  limit?: number
}): Promise<Property[]> {
  const { data } = await apiSelect<Property>('properties', {
    select: '*',
    order: 'created_at.desc',
    limit: params?.limit ?? 50,
  })
  if (!data.length) return []
  let list = data
  if (params?.city)
    list = list.filter(
      (p) => p.city.toLowerCase() === params.city!.toLowerCase()
    )
  if (params?.type) list = list.filter((p) => p.property_type === params.type)
  return list
}

export async function getPropertyById(id: string): Promise<Property | null> {
  const { data } = await apiSelect<Property>('properties', {
    select: '*',
    limit: 1,
    filters: isApiConfigured() ? { id: `eq.${id}` } : undefined,
  })
  const found = data.find((p) => p.id === id)
  return found ?? null
}

export async function getPropertiesByOwner(
  ownerId: string
): Promise<Property[]> {
  const { data } = await apiSelect<Property>('properties', {
    select: '*',
    order: 'created_at.desc',
  })
  return data.filter((p) => p.owner_id === ownerId)
}

export async function createProperty(
  payload: Partial<Property>
): Promise<Property | null> {
  const { data } = await apiInsert<Property>('properties', payload as Record<string, unknown>)
  return data
}

export async function updateProperty(
  id: string,
  payload: Partial<Property>
): Promise<Property | null> {
  const { data } = await apiUpdate<Property>('properties', id, payload as Record<string, unknown>)
  return data
}
