'use client'

import { useState, useEffect } from 'react'
import { Star } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { getReviewsByProperty } from '@/lib/api/reviews'
import { getPropertiesByOwner } from '@/lib/api/properties'
import { getSupabaseClient } from '@/lib/supabase/client'
import { isApiConfigured } from '@/lib/api/client'

export default function HotelOwnerReviewsPage() {
  const [reviews, setReviews] = useState<Awaited<ReturnType<typeof getReviewsByProperty>>>([])
  const [propertyIds, setPropertyIds] = useState<Set<string>>(new Set())
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    const supabase = getSupabaseClient()
    if (supabase) {
      supabase.auth.getUser().then(({ data: { user } }) => {
        if (user) {
          getPropertiesByOwner(user.id).then((props) => {
            const ids = new Set(props.map((p) => p.id))
            if (!cancelled) setPropertyIds(ids)
            return Promise.all(props.map((p) => getReviewsByProperty(p.id)))
          }).then((arrays) => {
            const flat = arrays.flat()
            if (!cancelled) setReviews(flat)
            setLoading(false)
          })
        } else {
          setLoading(false)
        }
      })
    } else {
      setLoading(false)
    }
    return () => { cancelled = true }
  }, [])

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Yorumlar</h1>
        <p className="text-muted-foreground">Tesislerinize ait onaylı misafir yorumları</p>
      </div>
      {!isApiConfigured() && (
        <p className="text-sm text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 rounded-lg p-3">
          Backend bağlantısı yapılandırılmadı. Veriler mock olarak gösteriliyor.
        </p>
      )}
      {loading ? (
        <p className="text-muted-foreground py-8 text-center">Yükleniyor...</p>
      ) : reviews.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center">
            <Star className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <p className="text-muted-foreground">Henüz onaylı yorum yok.</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {reviews.map((r) => (
            <Card key={r.id}>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i <= r.overall_rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground'}`}
                    />
                  ))}
                  <span className="text-sm text-muted-foreground">
                    {new Date(r.created_at).toLocaleDateString('tr-TR')}
                  </span>
                </div>
                {r.title && <CardTitle className="text-base">{r.title}</CardTitle>}
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{r.comment || '—'}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
