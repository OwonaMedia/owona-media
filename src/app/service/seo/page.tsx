'use client'

import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/config/translations'

export default function SEOService() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{t.seo}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">{t.seo_description}</h2>
          <p className="mb-4">
            Unsere SEO-Dienstleistungen helfen Ihnen, Ihre Online-Sichtbarkeit zu verbessern und mehr organischen Traffic zu generieren.
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Keyword-Recherche und -Optimierung</li>
            <li>Technische SEO-Analyse</li>
            <li>On-Page-Optimierung</li>
            <li>Linkbuilding-Strategien</li>
            <li>Lokale SEO-Optimierung</li>
          </ul>
        </div>
        <div>
          <img 
            src="/images/services/seo.jpg" 
            alt="SEO Service" 
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  )
} 