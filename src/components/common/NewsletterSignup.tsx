'use client'

import { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'

interface NewsletterSignupProps {
  variant?: 'default' | 'checkout'
}

export default function NewsletterSignup({ variant = 'default' }: NewsletterSignupProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const { t } = useLanguage()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      // Hier sollte die API-Integration erfolgen
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulierte API-Aufruf
      setStatus('success')
      setEmail('')
    } catch (error) {
      setStatus('error')
    }
  }

  const containerClasses = variant === 'checkout' 
    ? 'bg-white p-4 rounded-lg border border-amber-200'
    : 'bg-amber-50 p-6 rounded-lg shadow-md'

  return (
    <div className={containerClasses}>
      <h3 className="text-xl font-semibold text-amber-900 mb-4">
        {t('newsletter_title')}
      </h3>
      <p className="text-amber-700 mb-4">
        {t('newsletter_description')}
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-amber-700 mb-1">
            {t('email')}
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 rounded-md border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            placeholder={t('email_placeholder')}
          />
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-amber-600 text-white py-2 px-4 rounded-md hover:bg-amber-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? t('loading') : t('subscribe')}
        </button>

        {status === 'success' && (
          <p className="text-green-600 text-sm">
            {t('newsletter_success')}
          </p>
        )}
        {status === 'error' && (
          <p className="text-red-600 text-sm">
            {t('newsletter_error')}
          </p>
        )}
      </form>

      <p className="text-xs text-amber-600 mt-4">
        {t('newsletter_privacy')}
      </p>
    </div>
  )
} 