'use client'

import { useLanguage } from '@/context/LanguageContext'

export default function DownloadsPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-amber-50 pt-16">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-amber-900 mb-8">{t('downloads')}</h1>
        <p className="text-gray-700 mb-4">{t('downloads_description')}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Hier können Sie Ihre Download-Links hinzufügen */}
        </div>
      </div>
    </div>
  )
} 