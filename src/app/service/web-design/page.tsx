'use client'

import { useLanguage } from '@/context/LanguageContext'

export default function WebDesignService() {
  const { t } = useLanguage()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-amber-900 mb-6">
        {t('web_design')}
      </h1>

      <div className="prose prose-amber max-w-none">
        <p className="mb-4">
          {t('web_design_description')}
        </p>

        <h2 className="text-2xl font-semibold text-amber-800 mt-8 mb-4">
          {t('our_services')}
        </h2>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">{t('responsive_design')}</li>
          <li className="mb-2">{t('user_experience')}</li>
          <li className="mb-2">{t('web_development')}</li>
        </ul>

        <h2 className="text-2xl font-semibold text-amber-800 mt-8 mb-4">
          {t('benefits')}
        </h2>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">{t('increased_visibility')}</li>
          <li className="mb-2">{t('better_engagement')}</li>
          <li className="mb-2">{t('higher_conversion')}</li>
        </ul>

        <h2 className="text-2xl font-semibold text-amber-800 mt-8 mb-4">
          {t('contact_us')}
        </h2>
        <p className="mb-4">
          {t('contact_for_info')}
        </p>
      </div>
    </div>
  )
} 