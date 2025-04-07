'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { X, Cookie, Settings } from 'lucide-react'

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true,
    preferences: false,
    statistics: false,
    marketing: false
  })
  const { t } = useLanguage()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const cookieConsent = localStorage.getItem('cookieConsent')
        if (!cookieConsent) {
          setShowBanner(true)
        } else {
          const preferences = JSON.parse(cookieConsent)
          setCookiePreferences(preferences)
          applyCookiePreferences(preferences)
        }
      } catch (error) {
        console.error('Fehler beim Laden der Cookie-Einstellungen:', error)
        setShowBanner(true)
      }
    }
  }, [])

  const applyCookiePreferences = (preferences: typeof cookiePreferences) => {
    // Hier werden die tatsächlichen Cookie-Einstellungen angewendet
    if (preferences.statistics) {
      // Analytics-Cookies aktivieren
    }
    if (preferences.marketing) {
      // Marketing-Cookies aktivieren
    }
    if (preferences.preferences) {
      // Präferenz-Cookies aktivieren
    }
  }

  const handleAcceptAll = () => {
    setCookiePreferences({
      necessary: true,
      preferences: true,
      statistics: true,
      marketing: true
    })
    savePreferences()
    setShowBanner(false)
  }

  const handleAcceptNecessary = () => {
    setCookiePreferences({
      necessary: true,
      preferences: false,
      statistics: false,
      marketing: false
    })
    savePreferences()
    setShowBanner(false)
  }

  const handleSavePreferences = () => {
    savePreferences()
    setShowBanner(false)
    setShowSettings(false)
  }

  const savePreferences = () => {
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem('cookieConsent', JSON.stringify(cookiePreferences))
        applyCookiePreferences(cookiePreferences)
      }
    } catch (error) {
      console.error('Fehler beim Speichern der Cookie-Einstellungen:', error)
    }
  }

  const togglePreference = (type: keyof typeof cookiePreferences) => {
    setCookiePreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }))
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-amber-50 shadow-lg z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Cookie className="text-amber-600" />
              <h3 className="text-lg font-semibold text-amber-900">
                {t('cookie_banner_title')}
              </h3>
            </div>
            <p className="text-amber-700 text-sm">
              {t('cookie_banner_description')}{' '}
              <button
                onClick={() => setShowSettings(!showSettings)}
                className="text-amber-600 hover:text-amber-700 underline"
              >
                {t('cookie_settings')}
              </button>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2">
            <button
              onClick={handleAcceptAll}
              className="px-4 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700"
            >
              {t('accept_all')}
            </button>
            <button
              onClick={handleAcceptNecessary}
              className="px-4 py-2 border border-amber-600 text-amber-600 rounded-md hover:bg-amber-50"
            >
              {t('accept_necessary')}
            </button>
          </div>

          <button
            onClick={() => setShowBanner(false)}
            className="absolute top-4 right-4 text-amber-400 hover:text-amber-600"
          >
            <X size={20} />
          </button>
        </div>

        {showSettings && (
          <div className="mt-4 pt-4 border-t border-amber-200">
            <div className="flex items-center gap-2 mb-4">
              <Settings className="text-amber-600" />
              <h4 className="text-lg font-semibold text-amber-900">
                {t('cookie_settings')}
              </h4>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h5 className="font-medium text-amber-900">
                    {t('necessary_cookies')}
                  </h5>
                  <p className="text-sm text-amber-700">
                    {t('necessary_cookies_description')}
                  </p>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={cookiePreferences.necessary}
                    disabled
                    className="h-4 w-4 text-amber-600 border-amber-300 rounded"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h5 className="font-medium text-amber-900">
                    {t('preference_cookies')}
                  </h5>
                  <p className="text-sm text-amber-700">
                    {t('preference_cookies_description')}
                  </p>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={cookiePreferences.preferences}
                    onChange={() => togglePreference('preferences')}
                    className="h-4 w-4 text-amber-600 border-amber-300 rounded"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h5 className="font-medium text-amber-900">
                    {t('statistics_cookies')}
                  </h5>
                  <p className="text-sm text-amber-700">
                    {t('statistics_cookies_description')}
                  </p>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={cookiePreferences.statistics}
                    onChange={() => togglePreference('statistics')}
                    className="h-4 w-4 text-amber-600 border-amber-300 rounded"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h5 className="font-medium text-amber-900">
                    {t('marketing_cookies')}
                  </h5>
                  <p className="text-sm text-amber-700">
                    {t('marketing_cookies_description')}
                  </p>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={cookiePreferences.marketing}
                    onChange={() => togglePreference('marketing')}
                    className="h-4 w-4 text-amber-600 border-amber-300 rounded"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={handleSavePreferences}
                className="px-4 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700"
              >
                {t('save_preferences')}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 