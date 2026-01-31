'use client'

import React from "react"

import { useState } from 'react'
import { SupportSidebar } from '@/components/support/support-sidebar'
import { SupportHeader } from '@/components/support/support-header'

export default function SupportDashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

    return (
        <div className="flex h-screen overflow-hidden bg-background">
            <SupportSidebar
                isCollapsed={sidebarCollapsed}
                onCollapse={setSidebarCollapsed}
            />
            <div className="flex flex-1 flex-col overflow-hidden">
                <SupportHeader />
                <main className="flex-1 overflow-y-auto p-6">
                    {children}
                </main>
            </div>
        </div>
    )
}
