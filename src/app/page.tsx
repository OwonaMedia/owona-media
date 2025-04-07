'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowDown } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import FeaturedProducts from '@/components/FeaturedProducts'

const contentBlocks = [
  {
    title: 'Digital Marketing Guide',
    description: 'Lernen Sie die Grundlagen des digitalen Marketings und wie Sie erfolgreich online präsent sein können.',
    image: '/bilder/Howtodigitalmarketingfaceless.png',
    product: 'Digital Marketing Guide',
  },
  {
    title: 'Faceless Reels Guide',
    description: 'Erstellen Sie ansprechende Reels ohne Gesicht - perfekt für introvertierte Content Creator.',
    image: '/bilder/FacelessReelsGuide.png',
    product: 'Faceless Reels Guide',
  },
  {
    title: 'Canva für Anfänger',
    description: 'Der perfekte Einstieg in die Welt des Grafikdesigns mit Canva.',
    image: '/bilder/CanvafuerAnfaengerMiniKurs.png',
    product: 'Canva Mini-Kurs',
  },
]

export default function Home() {
  const { t } = useLanguage()
  const [activeSection, setActiveSection] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section')
      const scrollPosition = window.scrollY + window.innerHeight / 2

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(index)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-amber-50">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/placeholder-bg.jpg"
            alt="Digital Marketing Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Digital Marketing Guide</h1>
          <p className="text-xl md:text-2xl mb-8">Lernen Sie die Grundlagen des digitalen Marketings</p>
          <Link href="/shop" className="bg-amber-600 text-white px-8 py-3 rounded-lg hover:bg-amber-700 transition-colors">
            Jetzt entdecken
          </Link>
        </div>
      </section>

      {/* Featured Products Section */}
      <FeaturedProducts />

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">Kategorien</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            <Link href="/shop?category=Videos" className="group">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform group-hover:scale-105">
                <div className="relative h-48">
                  <Image
                    src="/bilder/produkte/new-york-videos.jpg"
                    alt="Videos"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-amber-900">Videos</h3>
                </div>
              </div>
            </Link>
            <Link href="/shop?category=Kurse" className="group">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform group-hover:scale-105">
                <div className="relative h-48">
                  <Image
                    src="/bilder/produkte/canva-beginner.jpg"
                    alt="Kurse"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-amber-900">Kurse</h3>
                </div>
              </div>
            </Link>
            <Link href="/shop?category=Business" className="group">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform group-hover:scale-105">
                <div className="relative h-48">
                  <Image
                    src="/bilder/produkte/master-resell-rights.jpg"
                    alt="Business"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-amber-900">Business</h3>
                </div>
              </div>
            </Link>
            <Link href="/shop?category=Services" className="group">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform group-hover:scale-105">
                <div className="relative h-48">
                  <div className="absolute inset-0 bg-amber-100 flex items-center justify-center">
                    <div className="text-center p-4">
                      <h4 className="text-sm font-medium text-amber-900 mb-2">Verfügbare Services:</h4>
                      <ul className="text-sm text-amber-800">
                        <li>• Imagefilmproduktion</li>
                        <li>• Homepage Erstellung</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-amber-900">Services</h3>
                </div>
              </div>
            </Link>
            <Link href="/shop?category=eBooks" className="group">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform group-hover:scale-105">
                <div className="relative h-48">
                  <div className="absolute inset-0 bg-amber-100 flex items-center justify-center">
                    <div className="text-center p-4">
                      <p className="text-amber-800">Neue eBooks folgen in Kürze</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-amber-900">eBooks</h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-amber-600 py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Entdecken Sie unsere Produkte</h2>
          <p className="text-xl mb-8">Starten Sie noch heute mit Ihrem digitalen Business</p>
          <Link href="/shop" className="bg-white text-amber-600 px-8 py-3 rounded-lg hover:bg-amber-50 transition-colors">
            Zum Shop
          </Link>
        </div>
      </section>

      <div className="fixed bottom-8 right-8">
        <button
          className="w-12 h-12 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ArrowDown size={24} className="transform rotate-180" />
        </button>
      </div>
    </main>
  )
}
