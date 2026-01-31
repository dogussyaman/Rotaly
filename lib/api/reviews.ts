import { apiSelect, apiInsert, isApiConfigured } from './client'

export interface Review {
  id: string
  booking_id: string
  user_id: string
  property_id: string
  overall_rating: number
  cleanliness_rating: number | null
  location_rating: number | null
  service_rating: number | null
  value_rating: number | null
  title: string | null
  comment: string | null
  is_approved: boolean
  is_featured: boolean
  owner_response: string | null
  owner_response_at: string | null
  created_at: string
  updated_at: string
}

export async function getReviewsByProperty(
  propertyId: string
): Promise<Review[]> {
  const { data } = await apiSelect<Review>('reviews', {
    select: '*',
    order: 'created_at.desc',
  })
  return data.filter((r) => r.property_id === propertyId && r.is_approved)
}

export async function getReviewById(id: string): Promise<Review | null> {
  const { data } = await apiSelect<Review>('reviews', {
    select: '*',
    limit: 1,
    filters: isApiConfigured() ? { id: `eq.${id}` } : undefined,
  })
  return data.find((r) => r.id === id) ?? null
}

export async function createReview(payload: {
  booking_id: string
  user_id: string
  property_id: string
  overall_rating: number
  cleanliness_rating?: number
  location_rating?: number
  service_rating?: number
  value_rating?: number
  title?: string
  comment?: string
}): Promise<Review | null> {
  const { data } = await apiInsert<Review>('reviews', {
    ...payload,
    is_approved: false,
    is_featured: false,
  } as Record<string, unknown>)
  return data
}
