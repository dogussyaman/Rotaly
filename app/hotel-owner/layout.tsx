'use client'

import React from "react"

import { useState } from 'react'
import { HotelOwnerSidebar } from '@/components/hotel-owner/hotel-owner-sidebar'
import { HotelOwnerHeader } from '@/components/hotel-owner/hotel-owner-header'

export default function HotelOwnerLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

    return (
        <div className="flex h-screen overflow-hidden bg-background">
            <HotelOwnerSidebar
                isCollapsed={sidebarCollapsed}
                onCollapse={setSidebarCollapsed}
            />
            <div className="flex flex-1 flex-col overflow-hidden">
                <HotelOwnerHeader />
                <main className="flex-1 overflow-y-auto p-6">
                    {children}
                </main>
            </div>
        </div>
    )
}
