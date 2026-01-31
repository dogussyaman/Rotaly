'use client'

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react'
import { type Locale, defaultLocale, locales } from './config'
import { tr } from './locales/tr'
import { en } from './locales/en'

const translations = { tr, en } as const

type TranslationKeys = typeof tr

type NestedKeyOf<T> = T extends object
  ? {
      [K in keyof T]: K extends string
        ? T[K] extends object
          ? `${K}.${NestedKeyOf<T[K]>}`
          : K
        : never
    }[keyof T]
  : never

type TranslationKey = NestedKeyOf<TranslationKeys>

interface I18nContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string, params?: Record<string, string | number>) => string
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

function getNestedValue(obj: Record<string, unknown>, path: string): string {
  const keys = path.split('.')
  let value: unknown = obj

  for (const key of keys) {
    if (value && typeof value === 'object' && key in value) {
      value = (value as Record<string, unknown>)[key]
    } else {
      return path
    }
  }

  return typeof value === 'string' ? value : path
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale)

  useEffect(() => {
    const savedLocale = localStorage.getItem('locale') as Locale | null
    if (savedLocale && locales.includes(savedLocale)) {
      setLocaleState(savedLocale)
      document.documentElement.lang = savedLocale
    }
  }, [])

  const setLocale = useCallback((newLocale: Locale) => {
    if (locales.includes(newLocale)) {
      setLocaleState(newLocale)
      localStorage.setItem('locale', newLocale)
      document.documentElement.lang = newLocale
    }
  }, [])

  const t = useCallback(
    (key: string, params?: Record<string, string | number>): string => {
      let value = getNestedValue(translations[locale] as unknown as Record<string, unknown>, key)

      if (params) {
        Object.entries(params).forEach(([paramKey, paramValue]) => {
          value = value.replace(`{${paramKey}}`, String(paramValue))
        })
      }

      return value
    },
    [locale]
  )

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider')
  }
  return context
}

export function useTranslation() {
  return useI18n()
}
