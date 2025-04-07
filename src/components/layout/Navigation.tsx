'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLanguage } from '@/context/LanguageContext'
import { useState } from 'react'

const navItems = [
  { name: 'Blog', href: '/blog' },
  { name: 'Über uns', href: '/ueber-uns' },
  { name: 'Shop', href: '/shop' },
  { name: 'Service', href: '/service' },
  { name: 'Downloads', href: '/downloads' },
]

export default function Navigation() {
  const pathname = usePathname()
  const { t } = useLanguage()
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  const services = [
    { name: t('web_design'), href: '/service/web-design' },
    { name: t('seo'), href: '/service/seo' },
    { name: t('content_marketing'), href: '/service/content-marketing' },
    { name: t('film_production'), href: '/service/filmproduktion' },
    { name: t('social_media'), href: '/service/social-media' }
  ]

  return (
    <nav className="hidden md:flex items-center space-x-8">
      {navItems.map((item) => (
        <div key={item.href} className="relative">
          {item.name === 'Service' ? (
            <div>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center space-x-1 text-amber-900 hover:text-amber-700"
              >
                {item.name}
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-0 w-56 bg-white shadow-lg rounded-md py-2">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className={`block px-4 py-2 hover:bg-amber-50 ${
                        pathname === service.href ? 'text-amber-700 font-semibold' : 'text-amber-900'
                      }`}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link
              href={item.href}
              className={`text-amber-900 hover:text-amber-700 ${
                pathname === item.href ? 'font-semibold' : ''
              }`}
            >
              {item.name}
            </Link>
          )}
        </div>
      ))}
    </nav>
  )
} 