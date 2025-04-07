import { useLanguage } from '@/context/LanguageContext'

export default function CookieRichtlinie() {
  const { t } = useLanguage()

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-amber-900 mb-6">
        {t('cookie_policy')}
      </h1>

      <div className="prose prose-amber max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-amber-800 mb-4">
            {t('what_are_cookies')}
          </h2>
          <p className="text-amber-700 mb-4">
            {t('cookies_explanation')}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-amber-800 mb-4">
            {t('cookie_types')}
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-amber-700 mb-2">
                {t('necessary_cookies')}
              </h3>
              <p className="text-amber-700">
                {t('necessary_cookies_description')}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-amber-700 mb-2">
                {t('preference_cookies')}
              </h3>
              <p className="text-amber-700">
                {t('preference_cookies_description')}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-amber-700 mb-2">
                {t('statistics_cookies')}
              </h3>
              <p className="text-amber-700">
                {t('statistics_cookies_description')}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-amber-700 mb-2">
                {t('marketing_cookies')}
              </h3>
              <p className="text-amber-700">
                {t('marketing_cookies_description')}
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-amber-800 mb-4">
            {t('cookie_duration')}
          </h2>
          <p className="text-amber-700 mb-4">
            {t('cookie_duration_explanation')}
          </p>
          <ul className="list-disc pl-6 text-amber-700 space-y-2">
            <li>{t('session_cookies')}</li>
            <li>{t('persistent_cookies')}</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-amber-800 mb-4">
            {t('cookie_management')}
          </h2>
          <p className="text-amber-700 mb-4">
            {t('cookie_management_explanation')}
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-amber-700 mb-2">
                {t('browser_settings')}
              </h3>
              <p className="text-amber-700">
                {t('browser_settings_explanation')}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-amber-700 mb-2">
                {t('cookie_banner')}
              </h3>
              <p className="text-amber-700">
                {t('cookie_banner_explanation')}
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-amber-800 mb-4">
            {t('contact')}
          </h2>
          <p className="text-amber-700">
            {t('cookie_policy_contact')}
          </p>
        </section>
      </div>
    </div>
  )
} 