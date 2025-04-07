'use client'

import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/config/translations'

export default function SocialMediaService() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Social Media Marketing</h1>
      
      <div className="mb-8">
        <p className="text-lg mb-4">
          Wir helfen Ihnen, Ihre Marke auf Social Media Plattformen erfolgreich zu positionieren und Ihre Zielgruppe zu erreichen.
        </p>
        <p className="mb-4">
          Unser Social Media Marketing umfasst die strategische Planung, Erstellung und Veröffentlichung von Inhalten sowie die Analyse und Optimierung Ihrer Social Media Aktivitäten.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Unsere Leistungen</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Social Media Strategie-Entwicklung</li>
            <li>Content-Erstellung und -Planung</li>
            <li>Community Management</li>
            <li>Social Media Werbung</li>
            <li>Analyse und Reporting</li>
          </ul>
        </div>
        <div>
          <img 
            src="/images/services/content-marketing.jpg" 
            alt="Social Media Marketing" 
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  )
} 