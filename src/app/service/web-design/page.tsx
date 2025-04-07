'use client'

import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/config/translations'

export default function WebDesignService() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{t.web_design}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">{t.web_design_description}</h2>
          <p className="mb-4">
            Unser Web-Design-Service bietet Ihnen moderne, benutzerfreundliche und responsive Websites, die Ihre Marke optimal präsentieren.
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Responsive Webdesign</li>
            <li>UI/UX-Design</li>
            <li>E-Commerce-Lösungen</li>
            <li>WordPress-Entwicklung</li>
            <li>Mobile-First-Ansatz</li>
          </ul>
        </div>
        <div>
          <img 
            src="/images/services/web-design.jpg" 
            alt="Web Design Service" 
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  )
} 