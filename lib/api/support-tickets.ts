import { apiSelect, apiInsert, apiUpdate, isApiConfigured } from './client'

export type TicketStatus = 'open' | 'in_progress' | 'resolved' | 'closed'
export type TicketPriority = 'low' | 'medium' | 'high' | 'urgent'

export interface SupportTicket {
  id: string
  ticket_number: string
  user_id: string
  category_id: string | null
  booking_id: string | null
  subject: string
  status: TicketStatus
  priority: TicketPriority
  assigned_to: string | null
  resolved_at: string | null
  closed_at: string | null
  created_at: string
  updated_at: string
}

export async function getSupportTickets(params?: {
  user_id?: string
  assigned_to?: string
  status?: TicketStatus
  priority?: TicketPriority
  limit?: number
}): Promise<SupportTicket[]> {
  const { data } = await apiSelect<SupportTicket>('support_tickets', {
    select: '*',
    order: 'created_at.desc',
    limit: params?.limit ?? 100,
  })
  if (!data.length) return []
  let list = data
  if (params?.user_id) list = list.filter((t) => t.user_id === params.user_id)
  if (params?.assigned_to)
    list = list.filter((t) => t.assigned_to === params.assigned_to)
  if (params?.status) list = list.filter((t) => t.status === params.status)
  if (params?.priority)
    list = list.filter((t) => t.priority === params.priority)
  return list
}

export async function getSupportTicketById(
  id: string
): Promise<SupportTicket | null> {
  const { data } = await apiSelect<SupportTicket>('support_tickets', {
    select: '*',
    limit: 1,
    filters: isApiConfigured() ? { id: `eq.${id}` } : undefined,
  })
  return data.find((t) => t.id === id) ?? null
}

export async function createSupportTicket(payload: {
  user_id: string
  category_id?: string
  booking_id?: string
  subject: string
  priority?: TicketPriority
}): Promise<SupportTicket | null> {
  const { data } = await apiInsert<SupportTicket>('support_tickets', {
    ...payload,
    status: 'open',
    priority: payload.priority ?? 'medium',
  } as Record<string, unknown>)
  return data
}

export async function updateSupportTicket(
  id: string,
  payload: Partial<SupportTicket>
): Promise<SupportTicket | null> {
  const { data } = await apiUpdate<SupportTicket>(
    'support_tickets',
    id,
    payload as Record<string, unknown>
  )
  return data
}
