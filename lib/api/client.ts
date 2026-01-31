/**
 * API client for Rotaly backend (Supabase).
 * When NEXT_PUBLIC_SUPABASE_URL is not set, requests return empty/mock data
 * so UI can show "no data" states without errors.
 */

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? ''
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ''

export const isApiConfigured = (): boolean =>
  Boolean(SUPABASE_URL && SUPABASE_ANON_KEY)

export type ApiMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

export async function apiRequest<T = unknown>(
  path: string,
  options: {
    method?: ApiMethod
    body?: unknown
    headers?: Record<string, string>
  } = {}
): Promise<{ data: T | null; error: Error | null }> {
  const { method = 'GET', body, headers: customHeaders = {} } = options

  if (!isApiConfigured()) {
    return { data: null, error: new Error('API_NOT_CONFIGURED') }
  }

  const url = path.startsWith('http') ? path : `${SUPABASE_URL}/rest/v1${path}`
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    apikey: SUPABASE_ANON_KEY,
    Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
    ...customHeaders,
  }

  try {
    const res = await fetch(url, {
      method,
      headers,
      body: body != null ? JSON.stringify(body) : undefined,
    })
    if (!res.ok) {
      const text = await res.text()
      return {
        data: null,
        error: new Error(text || `HTTP ${res.status}`),
      }
    }
    const text = await res.text()
    const data = text ? (JSON.parse(text) as T) : null
    return { data, error: null }
  } catch (e) {
    return {
      data: null,
      error: e instanceof Error ? e : new Error(String(e)),
    }
  }
}

/** Supabase-style select helper: returns empty array when API not configured */
export async function apiSelect<T = unknown>(
  table: string,
  query: {
    select?: string
    order?: string
    limit?: number
    filters?: Record<string, string>
  } = {}
): Promise<{ data: T[]; error: Error | null }> {
  const params = new URLSearchParams()
  if (query.select) params.set('select', query.select)
  if (query.order) params.set('order', query.order)
  if (query.limit != null) params.set('limit', String(query.limit))
  if (query.filters) {
    for (const [key, value] of Object.entries(query.filters)) {
      params.set(key, value)
    }
  }
  const qs = params.toString()
  const path = qs ? `${table}?${qs}` : table
  const { data, error } = await apiRequest<T[] | T>(path)
  if (error) return { data: [], error }
  if (data == null) return { data: [], error: null }
  const list = Array.isArray(data) ? data : [data]
  return { data: list, error: null }
}

/** Supabase-style insert: returns null id when API not configured */
export async function apiInsert<T extends { id?: string }>(
  table: string,
  payload: Record<string, unknown>
): Promise<{ data: T | null; error: Error | null }> {
  const { data, error } = await apiRequest<T>(table, {
    method: 'POST',
    body: payload,
    headers: { Prefer: 'return=representation' },
  })
  return { data: data ?? null, error }
}

/** Supabase-style update */
export async function apiUpdate<T = unknown>(
  table: string,
  id: string,
  payload: Record<string, unknown>
): Promise<{ data: T | null; error: Error | null }> {
  const { data, error } = await apiRequest<T>(`${table}?id=eq.${id}`, {
    method: 'PATCH',
    body: payload,
    headers: { Prefer: 'return=representation' },
  })
  return { data: Array.isArray(data) ? data[0] ?? null : data, error }
}
