'use client'

import { useLanguage } from '@/context/LanguageContext'

export default function FilmproduktionService() {
  const { t } = useLanguage()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-amber-900 mb-6">
        {t('film_production')}
      </h1>

      <div className="prose prose-amber max-w-none">
        <p className="mb-4">
          {t('film_production_description')}
        </p>

        <h2 className="text-2xl font-semibold text-amber-800 mt-8 mb-4">
          {t('our_services')}
        </h2>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">{t('corporate_videos')}</li>
          <li className="mb-2">{t('product_videos')}</li>
          <li className="mb-2">{t('event_coverage')}</li>
        </ul>

        <h2 className="text-2xl font-semibold text-amber-800 mt-8 mb-4">
          {t('benefits')}
        </h2>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">{t('professional_quality')}</li>
          <li className="mb-2">{t('brand_storytelling')}</li>
          <li className="mb-2">{t('emotional_connection')}</li>
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