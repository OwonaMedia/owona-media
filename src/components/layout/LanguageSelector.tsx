'use client'

import { useLanguage } from '@/context/LanguageContext'
import { languages, Language } from '@/config/languages'
import { Globe } from 'lucide-react'

export const LanguageSelector = () => {
  const { language, setLanguage, t } = useLanguage()
  const currentLanguage = languages[language]

  return (
    <div className="relative group">
      <button
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
        aria-label={t('language_selector')}
      >
        <Globe className="w-4 h-4" />
        <span>{currentLanguage.name}</span>
      </button>
      <div className="absolute right-0 hidden w-48 py-1 mt-2 bg-white rounded-md shadow-lg group-hover:block">
        {Object.entries(languages).map(([code, { name, flag }]) => (
          <button
            key={code}
            className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={() => setLanguage(code as Language)}
          >
            <span className="mr-2">{flag}</span>
            <span>{name}</span>
          </button>
        ))}
      </div>
    </div>
  )
} 