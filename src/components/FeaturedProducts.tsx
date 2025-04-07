'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const featuredProducts = [
  {
    id: 'master-resell-rights',
    title: 'Master Resell Rights',
    description: 'Erhalten Sie die exklusiven Rechte, um dieses digitale Produkt zu verkaufen und weiterzuverkaufen.',
    image: '/bilder/produkte/master-resell-rights.jpg',
    link: 'https://masterresellrights.at/owonamedia',
    category: 'Business'
  },
  {
    id: 'new-york-videos',
    title: 'New York - 273 Videos',
    description: 'Eine umfangreiche Sammlung von 273 hochwertigen Videos aus New York City.',
    image: '/bilder/produkte/new-york-videos.jpg',
    link: 'https://masterresellrights.at/db9vam',
    category: 'Videos'
  },
  {
    id: 'caribbean-bundle',
    title: 'The Caribbean Bundle',
    description: 'Das komplette Caribbean Bundle mit allen 3 Volumes. Über 300 Videos von traumhaften Stränden.',
    image: '/bilder/produkte/caribbean-bundle.jpg',
    link: 'https://masterresellrights.at/mn3mjn',
    category: 'Videos'
  }
]

export default function FeaturedProducts() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredProducts.length)
    }, 5000) // Wechsel alle 5 Sekunden

    return () => clearInterval(interval)
  }, [])

  const currentProduct = featuredProducts[currentIndex]

  return (
    <div className="bg-amber-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">Beliebte Produkte</h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="relative w-full md:w-1/2 h-64 md:h-auto">
                <Image
                  src={currentProduct.image}
                  alt={currentProduct.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="p-6 md:w-1/2">
                <h3 className="text-2xl font-semibold text-amber-900 mb-2">{currentProduct.title}</h3>
                <p className="text-gray-600 mb-4">{currentProduct.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-amber-600">{currentProduct.category}</span>
                  <a
                    href={currentProduct.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Image
                      src="/images/payment/buy-now.png"
                      alt="Jetzt kaufen"
                      width={150}
                      height={40}
                      className="hover:opacity-90 transition-opacity"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-4 space-x-2">
            {featuredProducts.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? 'bg-amber-600' : 'bg-amber-200'
                }`}
                aria-label={`Produkt ${index + 1} anzeigen`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 