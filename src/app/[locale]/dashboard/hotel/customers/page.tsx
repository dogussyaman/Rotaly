"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { customersData } from "@/data/dumy"
import { CustomerFilters, CustomerTable, CustomerMobilCard } from "@/components/dashboard/hotel/customers"

export default function CustomersPage() {
  const t = useTranslations("Customers")
  const hotelCustomers = customersData.filter((customer) => customer.hotelId === "H001")

  const [searchTerm, setSearchTerm] = useState("")
  const [filteredCustomers, setFilteredCustomers] = useState(hotelCustomers)

  const statsData = [
    {
      title: t("allRegisteredUsers"),
      value: hotelCustomers.length.toString(),
      subtitle: "",
    },
    {
      title: t("joinedThisMonth"),
      value: hotelCustomers.filter((c) => new Date(c.createdAt).getMonth() === new Date().getMonth()).length.toString(),
      subtitle: "",
    },
    {
      title: t("purchasedIn30Days"),
      value: hotelCustomers.reduce((acc, c) => acc + c.totalReservations, 0).toString(),
      subtitle: "",
    },
    {
      title: t("inactiveFor90Days"),
      value:
        (
          (hotelCustomers.filter((c) => {
            const lastRes = new Date(c.lastReservation)
            const diffDays = (new Date().getTime() - lastRes.getTime()) / (1000 * 3600 * 24)
            return diffDays > 90
          }).length /
            hotelCustomers.length) *
          100
        ).toFixed(1) + "%",
      subtitle: "",
    },
  ]

  const handleSearch = (value: string) => {
    setSearchTerm(value)
    const filtered = hotelCustomers.filter(
      (customer) =>
        customer.name.toLowerCase().includes(value.toLowerCase()) ||
        customer.surname.toLowerCase().includes(value.toLowerCase()) ||
        customer.email.toLowerCase().includes(value.toLowerCase()) ||
        customer.phone.toLowerCase().includes(value.toLowerCase()),
    )
    setFilteredCustomers(filtered)
  }

  const activeFilter = (value: string) => {
    if (value === "all") {
      setFilteredCustomers(hotelCustomers)
    } else if (value === "verified") {
      setFilteredCustomers(hotelCustomers.filter((customer) => customer.isVerified === true))
    } else if (value === "unverified") {
      setFilteredCustomers(hotelCustomers.filter((customer) => customer.isVerified === false))
    }
  }

  const shortBy = (short: string) => {
    const sortedCustomers = [...filteredCustomers].sort((a, b) => {
      if (short === "name") return a.name.localeCompare(b.name)
      if (short === "name-desc") return b.name.localeCompare(a.name)
      if (short === "email") return a.email.localeCompare(b.email)
      if (short === "email-desc") return b.email.localeCompare(a.email)
      if (short === "phone") return a.phone.localeCompare(b.phone)
      if (short === "phone-desc") return b.phone.localeCompare(a.phone)
      if (short === "createdAt") return a.createdAt.localeCompare(b.createdAt)
      if (short === "createdAt-desc") return b.createdAt.localeCompare(a.createdAt)
      if (short === "lastReservation") return a.lastReservation.localeCompare(b.lastReservation)
      if (short === "lastReservation-desc") return b.lastReservation.localeCompare(a.lastReservation)
      if (short === "totalSpent") return a.totalSpent - b.totalSpent
      if (short === "totalSpent-desc") return b.totalSpent - a.totalSpent
      return 0
    })
    setFilteredCustomers(sortedCustomers)
  }

  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/50 dark:to-emerald-950/50">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{statsData[0].title}</p>
                  <p className="text-2xl font-bold text-green-600 dark:text-green-400">{statsData[0].value}</p>
                </div>
                <div className="h-8 w-8 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center">
                  <span className="text-green-600 dark:text-green-400 text-sm font-bold">👥</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{statsData[1].title}</p>
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{statsData[1].value}</p>
                </div>
                <div className="h-8 w-8 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 dark:text-blue-400 text-sm font-bold">📅</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/50 dark:to-amber-950/50">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{statsData[2].title}</p>
                  <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">{statsData[2].value}</p>
                </div>
                <div className="h-8 w-8 bg-orange-100 dark:bg-orange-900/50 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 dark:text-orange-400 text-sm font-bold">🛒</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-950/50 dark:to-violet-950/50">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{statsData[3].title}</p>
                  <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">{statsData[3].value}</p>
                </div>
                <div className="h-8 w-8 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 dark:text-purple-400 text-sm font-bold">⏰</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-card border border-border">
          <CardHeader className="pb-4">
            <CustomerFilters
              searchTerm={searchTerm}
              handleSearch={handleSearch}
              activeFilter={activeFilter}
              shortBy={shortBy}
            />
          </CardHeader>

          <CardContent className="p-0">
            <div className="hidden md:block">
              <CustomerTable
                filteredCustomers={filteredCustomers}
                activeFilter={activeFilter}
                shortBy={shortBy}
                handleViewDetails={(customer) => console.log("View details:", customer.id)}
                handleEdit={(customer) => console.log("Edit:", customer.id)}
                handleDelete={(customer) => console.log("Delete:", customer.id)}
              />
            </div>

            <div className="block md:hidden">
              <CustomerMobilCard
                filteredCustomers={filteredCustomers}
                handleViewDetails={(customer) => console.log("View details:", customer.id)}
                handleEdit={(customer) => console.log("Edit:", customer.id)}
                handleDelete={(customer) => console.log("Delete:", customer.id)}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
