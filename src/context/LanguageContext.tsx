'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { TranslationKey, translations } from '@/config/translations'
import Cookies from 'js-cookie'

type Language = 'de' | 'en' | 'fr'

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: TranslationKey) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('de')

  useEffect(() => {
    const storedLanguage = Cookies.get('NEXT_LOCALE') as Language
    if (storedLanguage && (storedLanguage === 'de' || storedLanguage === 'en' || storedLanguage === 'fr')) {
      setLanguageState(storedLanguage)
    }
  }, [])

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage)
    Cookies.set('NEXT_LOCALE', newLanguage, {
      path: '/',
      expires: 365,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production'
    })
  }

  const t = (key: TranslationKey): string => {
    return translations[language][key]
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
} 