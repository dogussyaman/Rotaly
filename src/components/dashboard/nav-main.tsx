"use client"

import { Link } from "@/i18n/routing"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { setPageTitle } from "@/store/dashboard/dashboard-slice"
import { useDispatch } from "react-redux"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: React.ReactNode
  }[]
}) {

  const dispacth = useDispatch()

  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton tooltip={item.title} asChild>
                <Link className="hover:text-blue-500 transition-all duration-300" href={item.url} onClick={()=>dispacth(setPageTitle(item.title))}>
                  {item.icon}
                  <span >{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
