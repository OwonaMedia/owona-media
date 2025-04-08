'use client'

import { useLanguage } from '@/context/LanguageContext'

export default function CookiePolicy() {
  const { t } = useLanguage()

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-amber-900 mb-6">
        {t('cookies')}
      </h1>

      <div className="prose prose-amber max-w-none">
        <p className="mb-4">
          {t('cookie_intro')}
        </p>

        <h2 className="text-2xl font-semibold text-amber-800 mt-8 mb-4">
          {t('what_are_cookies')}
        </h2>
        <p className="mb-4">
          {t('cookies_explanation')}
        </p>

        <h2 className="text-2xl font-semibold text-amber-800 mt-8 mb-4">
          {t('how_we_use_cookies')}
        </h2>
        <p className="mb-4">
          {t('cookie_usage')}
        </p>

        <h2 className="text-2xl font-semibold text-amber-800 mt-8 mb-4">
          {t('cookie_types')}
        </h2>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">{t('essential_cookies')}</li>
          <li className="mb-2">{t('analytics_cookies')}</li>
          <li className="mb-2">{t('marketing_cookies')}</li>
        </ul>

        <h2 className="text-2xl font-semibold text-amber-800 mt-8 mb-4">
          {t('manage_cookies')}
        </h2>
        <p className="mb-4">
          {t('cookie_management')}
        </p>

        <h2 className="text-2xl font-semibold text-amber-800 mt-8 mb-4">
          {t('more_info')}
        </h2>
        <p className="mb-4">
          {t('contact_for_info')}
        </p>
      </div>
    </div>
  )
} 