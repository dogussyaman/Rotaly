"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface DualCalendarProps {
  selectedDate?: Date
  onDateSelect: (date: Date) => void
}

export function DualCalendar({ selectedDate, onDateSelect }: DualCalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 7)) // August 2025

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const dayNames = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const days = []

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      const prevMonthDay = new Date(year, month, -startingDayOfWeek + i + 1)
      days.push({ date: prevMonthDay, isCurrentMonth: false })
    }

    // Add days of the current month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push({ date: new Date(year, month, day), isCurrentMonth: true })
    }

    // Add days from next month to fill the grid
    const remainingCells = 42 - days.length
    for (let day = 1; day <= remainingCells; day++) {
      days.push({ date: new Date(year, month + 1, day), isCurrentMonth: false })
    }

    return days
  }

  const nextMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
  const leftMonthDays = getDaysInMonth(currentMonth)
  const rightMonthDays = getDaysInMonth(nextMonth)

  const isSelected = (date: Date) => {
    if (!selectedDate) return false
    return date.toDateString() === selectedDate.toDateString()
  }

  const navigateMonth = (direction: "prev" | "next") => {
    setCurrentMonth((prev) => {
      const newMonth = new Date(prev)
      if (direction === "prev") {
        newMonth.setMonth(prev.getMonth() - 1)
      } else {
        newMonth.setMonth(prev.getMonth() + 1)
      }
      return newMonth
    })
  }

  const CalendarMonth = ({
    date,
    days,
    showNavigation = false,
  }: {
    date: Date
    days: Array<{ date: Date; isCurrentMonth: boolean }>
    showNavigation?: boolean
  }) => (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        {showNavigation && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigateMonth("prev")}
            className="text-white hover:bg-gray-800"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
        )}
        <h3 className="text-white font-medium">
          {monthNames[date.getMonth()]} {date.getFullYear()}
        </h3>
        {showNavigation && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigateMonth("next")}
            className="text-white hover:bg-gray-800"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        )}
      </div>

      <div className="grid grid-cols-7 gap-1 mb-2">
        {dayNames.map((day) => (
          <div key={day} className="text-center text-xs text-gray-400 p-2">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {days.map((day, index) => (
          <Button
            key={index}
            variant="ghost"
            size="sm"
            onClick={() => day.isCurrentMonth && onDateSelect(day.date)}
            className={`
              h-8 w-8 p-0 text-sm
              ${day.isCurrentMonth ? "text-white hover:bg-gray-700" : "text-gray-600 cursor-not-allowed"}
              ${isSelected(day.date) ? "bg-white text-black hover:bg-gray-200" : ""}
            `}
            disabled={!day.isCurrentMonth}
          >
            {day.date.getDate()}
          </Button>
        ))}
      </div>
    </div>
  )

  return (
    <div className="bg-gray-900 text-white rounded-lg overflow-hidden">
      <div className="bg-gray-800 p-4 text-center">
        <h2 className="text-lg font-medium">Giriş ve çıkış tarihi seçiniz</h2>
      </div>

      <div className="flex">
        <CalendarMonth date={currentMonth} days={leftMonthDays} showNavigation={true} />
        <div className="w-px bg-gray-700" />
        <CalendarMonth date={nextMonth} days={rightMonthDays} />
      </div>
    </div>
  )
}
