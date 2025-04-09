'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import { motion } from 'framer-motion'
import { Search, Filter } from 'lucide-react'
import { useState } from 'react'

const content = {
  de: {
    title: 'Shop',
    searchPlaceholder: 'Produkte durchsuchen...',
    categories: {
      all: 'Alle Kategorien',
      videos: 'Videos & Content',
      marketing: 'Marketing & Business',
      bundles: 'Bundles & Pakete'
    },
    noResults: 'Keine Produkte gefunden',
    buyNow: 'Jetzt kaufen'
  },
  en: {
    title: 'Shop',
    searchPlaceholder: 'Search products...',
    categories: {
      all: 'All Categories',
      videos: 'Videos & Content',
      marketing: 'Marketing & Business',
      bundles: 'Bundles & Packages'
    },
    noResults: 'No products found',
    buyNow: 'Buy now'
  }
}

const products = [
  {
    id: 'master-resell-rights',
    title: {
      de: 'Master Resell Rights',
      en: 'Master Resell Rights'
    },
    description: {
      de: 'Der ultimative Guide für digitale Produkte und passives Einkommen.',
      en: 'The ultimate guide for digital products and passive income.'
    },
    image: '/bilder/produkte/master-resell-rights.jpg',
    link: 'https://go.Owona.de/',
    category: 'marketing'
  },
  {
    id: 'new-york-videos',
    title: {
      de: 'New York - 273 Videos',
      en: 'New York - 273 Videos'
    },
    description: {
      de: 'Hochwertige Videoclips aus New York für Ihre Projekte.',
      en: 'High-quality video clips from New York for your projects.'
    },
    image: '/bilder/produkte/new-york-videos.jpg',
    link: 'https://go.Owona.de/NYVids',
    category: 'videos'
  },
  {
    id: 'caribbean-videos',
    title: {
      de: 'Karibik - 200 Videos',
      en: 'Caribbean - 200 Videos'
    },
    description: {
      de: 'Atemberaubende Videos aus der Karibik für Ihre Projekte.',
      en: 'Breathtaking videos from the Caribbean for your projects.'
    },
    image: '/bilder/produkte/caribbean-videos.jpg',
    link: 'https://go.Owona.de/CaribbeanVids',
    category: 'videos'
  },
  {
    id: 'digital-success',
    title: {
      de: 'Digital Success',
      en: 'Digital Success'
    },
    description: {
      de: 'Der komplette Guide für digitalen Erfolg.',
      en: 'The complete guide for digital success.'
    },
    image: '/bilder/produkte/digital-success.jpg',
    link: 'https://go.Owona.de/DigitalSuccess',
    category: 'marketing'
  },
  {
    id: 'online-marketing-bundle',
    title: {
      de: 'Online Marketing Bundle',
      en: 'Online Marketing Bundle'
    },
    description: {
      de: 'Alles, was Sie für erfolgreiches Online Marketing benötigen.',
      en: 'Everything you need for successful online marketing.'
    },
    image: '/bilder/produkte/online-marketing-bundle.jpg',
    link: 'https://go.Owona.de/OnlineMarketing',
    category: 'bundles'
  },
  {
    id: 'social-media-bundle',
    title: {
      de: 'Social Media Bundle',
      en: 'Social Media Bundle'
    },
    description: {
      de: 'Der komplette Guide für erfolgreiches Social Media Marketing.',
      en: 'The complete guide for successful social media marketing.'
    },
    image: '/bilder/produkte/social-media-bundle.jpg',
    link: 'https://go.Owona.de/SocialMedia',
    category: 'bundles'
  },
  {
    id: 'content-creation-bundle',
    title: {
      de: 'Content Creation Bundle',
      en: 'Content Creation Bundle'
    },
    description: {
      de: 'Alles, was Sie für erfolgreiche Content Creation benötigen.',
      en: 'Everything you need for successful content creation.'
    },
    image: '/bilder/produkte/content-creation-bundle.jpg',
    link: 'https://go.Owona.de/ContentCreation',
    category: 'bundles'
  },
  {
    id: 'video-marketing-bundle',
    title: {
      de: 'Video Marketing Bundle',
      en: 'Video Marketing Bundle'
    },
    description: {
      de: 'Der komplette Guide für erfolgreiches Video Marketing.',
      en: 'The complete guide for successful video marketing.'
    },
    image: '/bilder/produkte/video-marketing-bundle.jpg',
    link: 'https://go.Owona.de/VideoMarketing',
    category: 'bundles'
  },
  {
    id: 'email-marketing-bundle',
    title: {
      de: 'Email Marketing Bundle',
      en: 'Email Marketing Bundle'
    },
    description: {
      de: 'Alles, was Sie für erfolgreiches Email Marketing benötigen.',
      en: 'Everything you need for successful email marketing.'
    },
    image: '/bilder/produkte/email-marketing-bundle.jpg',
    link: 'https://go.Owona.de/EmailMarketing',
    category: 'bundles'
  }
]

export default function ShopPage() {
  const { language } = useLanguage()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const langContent = content[language]

  const filteredProducts = products.filter(product => {
    const matchesSearch = 
      product.title[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description[language].toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-amber-50">
      <div className="container mx-auto px-4 py-12">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-8 text-center"
        >
          {langContent.title}
        </motion.h1>

        {/* Search and Filter Section */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder={langContent.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 rounded-lg border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-400" />
            </div>
            
            <div className="flex gap-2">
              {Object.entries(langContent.categories).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => setSelectedCategory(key)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    selectedCategory === key
                      ? 'bg-amber-600 text-white'
                      : 'bg-white text-amber-900 hover:bg-amber-100'
                  }`}
                >
                  {value}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow"
              >
                <div className="relative h-64">
                  <Image
                    src={product.image}
                    alt={product.title[language]}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">{product.title[language]}</h2>
                  <p className="text-gray-600 mb-4">{product.description[language]}</p>
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full text-center bg-amber-600 text-white px-6 py-2 rounded-md hover:bg-amber-700 transition-colors"
                  >
                    {langContent.buyNow}
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">{langContent.noResults}</p>
          </div>
        )}
      </div>
    </div>
  )
} 