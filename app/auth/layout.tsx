import React from "react"
import Link from 'next/link'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Simple header */}
      <header className="border-b border-border/40 bg-background">
        <div className="container mx-auto flex h-16 items-center px-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10">
              <span className="text-primary font-bold text-sm">R</span>
            </div>
            <span className="font-bold text-xl tracking-tight">
              <span className="text-foreground">ROTA</span>
              <span className="text-primary">LY</span>
            </span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 flex items-center justify-center p-4 bg-secondary/30">
        {children}
      </main>
    </div>
  )
}
