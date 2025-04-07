'use client'

import { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import Image from 'next/image'
import Link from 'next/link'

export default function ServicePage() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const services = [
    {
      id: 'web-design',
      title: t('web_design'),
      description: t('web_design_description'),
      image: '/images/services/web-design.jpg'
    },
    {
      id: 'seo',
      title: t('seo'),
      description: t('seo_description'),
      image: '/images/services/seo.jpg'
    },
    {
      id: 'content-marketing',
      title: t('content_marketing'),
      description: t('content_marketing_description'),
      image: '/images/services/content-marketing.jpg'
    },
    {
      id: 'filmproduktion',
      title: t('film_production'),
      description: t('film_production_description'),
      image: '/images/services/filmproduktion.jpg'
    }
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({
          name: '',
          email: '',
          service: '',
          message: ''
        })
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{t('service')}</h1>
      <p className="text-lg mb-8">{t('service_description')}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <Link
            key={service.id}
            href={`/service/${service.id}`}
            className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="relative h-48">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Kontaktieren Sie uns</h2>
        <form onSubmit={handleSubmit} className="max-w-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              E-Mail
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
              Service
            </label>
            <select
              id="service"
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            >
              <option value="">Bitte wählen</option>
              {services.map((service) => (
                <option key={service.id} value={service.id}>
                  {service.title}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Nachricht
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              rows={4}
              required
            />
          </div>
          <button
            type="submit"
            disabled={status === 'loading'}
            className="bg-amber-600 text-white px-6 py-3 rounded-md hover:bg-amber-700 transition-colors disabled:opacity-50"
          >
            {status === 'loading' ? 'Wird gesendet...' : 'Absenden'}
          </button>
          {status === 'success' && (
            <p className="mt-4 text-green-600">Nachricht erfolgreich gesendet!</p>
          )}
          {status === 'error' && (
            <p className="mt-4 text-red-600">Fehler beim Senden der Nachricht.</p>
          )}
        </form>
      </div>
    </div>
  )
} 