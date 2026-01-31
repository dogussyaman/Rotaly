import { isApiConfigured } from './client'

export type UserRole = 'customer' | 'hotel_owner' | 'admin' | 'support'

export interface UserProfile {
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

export async function getCurrentUser(): Promise<UserProfile | null> {
  if (!isApiConfigured()) return null
  // Actual implementation would use Supabase auth.getUser() and then fetch profile from public.users
  return null
}

export async function updateUserMustChangePassword(
  userId: string,
  value: boolean
): Promise<boolean> {
  if (!isApiConfigured()) return false
  // Implement via apiUpdate('users', userId, { must_change_password: value })
  return false
}
