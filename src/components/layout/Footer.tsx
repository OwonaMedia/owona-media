'use client'

import Link from 'next/link'
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import NewsletterSignup from '@/components/common/NewsletterSignup'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-amber-50 text-amber-900 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Owona Media</h3>
            <p className="text-sm">
              Ihre Agentur für digitale Lösungen und Social Media Marketing.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Rechtliches</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/impressum" className="hover:text-amber-700">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="hover:text-amber-700">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link href="/agb" className="hover:text-amber-700">
                  AGB
                </Link>
              </li>
              <li>
                <Link href="/widerruf" className="hover:text-amber-700">
                  Widerrufsrecht für Waren
                </Link>
              </li>
              <li>
                <Link href="/widerruf-dienstleistungen" className="hover:text-amber-700">
                  Widerrufsrecht für Dienstleistungen
                </Link>
              </li>
              <li>
                <Link href="/versand" className="hover:text-amber-700">
                  Versandbedingungen
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:info@owona.de" className="hover:text-amber-700">
                  info@owona.de
                </a>
              </li>
              <li>
                <a href="tel:+4962039375214" className="hover:text-amber-700">
                  +49 6203 9375214
                </a>
              </li>
              <li>Ahornstraße 52</li>
              <li>68542 Heddesheim</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Social Media</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/owona.media" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-amber-700"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://www.tiktok.com/@owona.media" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-amber-700"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a 
                href="https://www.facebook.com/owona.media" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-amber-700"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="https://www.youtube.com/@OwonaMedia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-amber-700"
              >
                <Youtube size={24} />
              </a>
              <a 
                href="https://x.com/OwonaMedia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-amber-700"
              >
                <Twitter size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/company/owonamedia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-amber-700"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-200 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Owona Media Agency. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  )
} 