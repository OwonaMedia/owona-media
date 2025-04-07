'use client'

import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/config/translations'

export default function ContentMarketingService() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{t.content_marketing}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">{t.content_marketing_description}</h2>
          <p className="mb-4">
            Unser Content-Marketing-Service hilft Ihnen, qualitativ hochwertige Inhalte zu erstellen, die Ihre Zielgruppe ansprechen und Ihre Marke stärken.
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Content-Strategie-Entwicklung</li>
            <li>Blog-Artikel und Fachartikel</li>
            <li>Social Media Content</li>
            <li>E-Mail-Marketing-Kampagnen</li>
            <li>Content-Optimierung für SEO</li>
          </ul>
        </div>
        <div>
          <img 
            src="/images/services/content-marketing.jpg" 
            alt="Content Marketing Service" 
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  )
} 