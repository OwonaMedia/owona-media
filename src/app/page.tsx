'use client'

import { useLanguage } from '@/context/LanguageContext'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const content = {
  de: {
    hero: {
      title: 'Digitale Produkte für Ihren Erfolg',
      subtitle: 'Entdecken Sie hochwertige digitale Produkte und Ressourcen für Ihr Online-Business',
      cta: 'Jetzt entdecken'
    },
    categories: {
      title: 'Kategorien',
      items: [
        {
          title: 'Videos & Content',
          description: 'Hochwertige Videoclips und Content für Ihre Projekte',
          image: '/bilder/kategorien/videos.jpg',
          link: '/shop?category=videos'
        },
        {
          title: 'Marketing & Business',
          description: 'Tools und Ressourcen für erfolgreiches Online-Marketing',
          image: '/bilder/kategorien/marketing.jpg',
          link: '/shop?category=marketing'
        },
        {
          title: 'Bundles & Pakete',
          description: 'Komplette Pakete für Ihren digitalen Erfolg',
          image: '/bilder/kategorien/bundles.jpg',
          link: '/shop?category=bundles'
        }
      ]
    },
    featured: {
      title: 'Ausgewählte Produkte',
      cta: 'Alle Produkte anzeigen'
    }
  },
  en: {
    hero: {
      title: 'Digital Products for Your Success',
      subtitle: 'Discover high-quality digital products and resources for your online business',
      cta: 'Discover Now'
    },
    categories: {
      title: 'Categories',
      items: [
        {
          title: 'Videos & Content',
          description: 'High-quality video clips and content for your projects',
          image: '/bilder/kategorien/videos.jpg',
          link: '/shop?category=videos'
        },
        {
          title: 'Marketing & Business',
          description: 'Tools and resources for successful online marketing',
          image: '/bilder/kategorien/marketing.jpg',
          link: '/shop?category=marketing'
        },
        {
          title: 'Bundles & Packages',
          description: 'Complete packages for your digital success',
          image: '/bilder/kategorien/bundles.jpg',
          link: '/shop?category=bundles'
        }
      ]
    },
    featured: {
      title: 'Featured Products',
      cta: 'View All Products'
    }
  }
}

const featuredProducts = [
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
    link: 'https://go.Owona.de/'
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
    link: 'https://go.Owona.de/NYVids'
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
    link: 'https://go.Owona.de/DigitalSuccess'
  }
]

export default function HomePage() {
  const { language } = useLanguage()
  const langContent = content[language]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-gradient-to-r from-amber-900 to-amber-700">
        <div className="absolute inset-0">
          <Image
            src="/bilder/hero-bg.jpg"
            alt="Hero Background"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            {langContent.hero.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto"
          >
            {langContent.hero.subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/shop"
              className="inline-block bg-white text-amber-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-amber-50 transition-colors"
            >
              {langContent.hero.cta}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {langContent.categories.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {langContent.categories.items.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link href={category.link} className="block">
                  <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                  <p className="text-gray-600">{category.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {langContent.featured.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md overflow-hidden group"
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
                  <h3 className="text-xl font-semibold mb-2">
                    {product.title[language]}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {product.description[language]}
                  </p>
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-amber-600 text-white px-6 py-2 rounded-md hover:bg-amber-700 transition-colors"
                  >
                    {language === 'de' ? 'Jetzt kaufen' : 'Buy now'}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/shop"
              className="inline-block bg-amber-600 text-white px-8 py-3 rounded-md hover:bg-amber-700 transition-colors"
            >
              {langContent.featured.cta}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
