'use client'

import { useLanguage } from '@/context/LanguageContext'
import { languages } from '@/config/languages'
import { Language } from '@/config/languages'

export const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage()
  const currentLanguage = languages[language]

  return (
    <div className="relative group">
      <button className="flex items-center space-x-2 text-amber-900 hover:text-amber-700">
        <span>{currentLanguage.flag}</span>
        <span>{currentLanguage.name}</span>
      </button>
      <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
        <div className="py-1">
          {Object.entries(languages).map(([code, { name, flag }]) => (
            <button
              key={code}
              onClick={() => setLanguage(code as Language)}
              className={`w-full flex items-center space-x-2 px-4 py-2 text-sm ${
                code === language ? 'bg-amber-100 text-amber-900' : 'text-gray-700 hover:bg-amber-50'
              }`}
            >
              <span>{flag}</span>
              <span>{name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
} 