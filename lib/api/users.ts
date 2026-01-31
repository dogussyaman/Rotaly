import { apiSelect, apiUpdate, isApiConfigured } from './client'

export type UserRole = 'customer' | 'hotel_owner' | 'admin' | 'support'

export interface User {
  id: string
  email: string
  full_name: string | null
  phone: string | null
  avatar_url: string | null
  role: UserRole
  preferred_language: 'tr' | 'en'
  email_verified: boolean
  phone_verified: boolean
  is_active: boolean
  must_change_password: boolean
  last_login_at: string | null
  created_at: string
  updated_at: string
}

export async function getUsers(params?: {
  role?: UserRole
  limit?: number
}): Promise<User[]> {
  const { data } = await apiSelect<User>('users', {
    select: '*',
    order: 'created_at.desc',
    limit: params?.limit ?? 100,
  })
  if (!data.length) return []
  let list = data
  if (params?.role) list = list.filter((u) => u.role === params.role)
  return list
}

export async function getUserById(id: string): Promise<User | null> {
  const { data } = await apiSelect<User>('users', {
    select: '*',
    limit: 1,
    filters: isApiConfigured() ? { id: `eq.${id}` } : undefined,
  })
  return data.find((u) => u.id === id) ?? null
}

export async function updateUser(
  id: string,
  payload: Partial<User>
): Promise<User | null> {
  const { data } = await apiUpdate<User>('users', id, payload as Record<string, unknown>)
  return data
}
