'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname, useParams } from 'next/navigation'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const STEPS = [
  { path: '', label: 'Özet' },
  { path: '/information', label: 'Misafir Bilgileri' },
  { path: '/payment', label: 'Ödeme' },
  { path: '/success', label: 'Tamamlandı' },
]

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const params = useParams()
  const id = params.id as string
  const basePath = `/property/${id}/booking`
  let currentStepIndex = 0
  if (pathname.endsWith('/success')) currentStepIndex = 3
  else if (pathname.includes('/payment')) currentStepIndex = 2
  else if (pathname.includes('/information')) currentStepIndex = 1
  else if (pathname.endsWith('/booking') || pathname === basePath) currentStepIndex = 0

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-8 px-4">
        <div className="container max-w-3xl mx-auto">
          {/* Stepper */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8 flex-wrap">
            {STEPS.map((step, index) => {
              const stepPath = step.path ? `${basePath}${step.path}` : basePath
              const isActive = index === currentStepIndex
              const isPast = index < currentStepIndex
              return (
                <React.Fragment key={step.path || 'summary'}>
                  {index > 0 && (
                    <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground/50" />
                  )}
                  <Link
                    href={stepPath}
                    className={cn(
                      'font-medium transition-colors',
                      isActive && 'text-foreground',
                      isPast && 'text-primary'
                    )}
                  >
                    {step.label}
                  </Link>
                </React.Fragment>
              )
            })}
          </nav>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}
