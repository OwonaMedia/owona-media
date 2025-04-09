'use client'

import { useLanguage } from '@/context/LanguageContext'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, ShoppingCart } from 'lucide-react'

const content = {
  de: {
    notFound: {
      title: '404',
      subtitle: 'Produkt nicht gefunden',
      description: 'Das von Ihnen gesuchte Produkt konnte leider nicht gefunden werden.',
      backToShop: 'Zurück zum Shop'
    },
    product: {
      buyNow: 'Jetzt kaufen',
      backToShop: 'Zurück zum Shop',
      category: 'Kategorie',
      description: 'Beschreibung',
      features: 'Features',
      relatedProducts: 'Ähnliche Produkte'
    }
  },
  en: {
    notFound: {
      title: '404',
      subtitle: 'Product not found',
      description: 'The product you are looking for could not be found.',
      backToShop: 'Back to shop'
    },
    product: {
      buyNow: 'Buy now',
      backToShop: 'Back to shop',
      category: 'Category',
      description: 'Description',
      features: 'Features',
      relatedProducts: 'Related products'
    }
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
    features: {
      de: [
        'Kompletter Guide für digitale Produkte',
        'Strategien für passives Einkommen',
        'Praktische Anleitungen und Beispiele',
        'Zugang zu exklusiven Ressourcen'
      ],
      en: [
        'Complete guide for digital products',
        'Strategies for passive income',
        'Practical guides and examples',
        'Access to exclusive resources'
      ]
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
    features: {
      de: [
        '273 hochauflösende Videos',
        'Verschiedene Perspektiven und Motive',
        'Professionelle Aufnahmen',
        'Einfache Lizenzierung'
      ],
      en: [
        '273 high-resolution videos',
        'Various perspectives and motifs',
        'Professional recordings',
        'Easy licensing'
      ]
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
    features: {
      de: [
        '200 hochauflösende Videos',
        'Tropische Landschaften und Strände',
        'Professionelle Aufnahmen',
        'Einfache Lizenzierung'
      ],
      en: [
        '200 high-resolution videos',
        'Tropical landscapes and beaches',
        'Professional recordings',
        'Easy licensing'
      ]
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
    features: {
      de: [
        'Umfassender Erfolgsguide',
        'Praktische Strategien',
        'Tools und Ressourcen',
        'Experten-Tipps'
      ],
      en: [
        'Comprehensive success guide',
        'Practical strategies',
        'Tools and resources',
        'Expert tips'
      ]
    },
    image: '/bilder/produkte/digital-success.jpg',
    link: 'https://go.Owona.de/DigitalSuccess',
    category: 'marketing'
  }
]

export default function ProductPage({ params }: { params: { id: string } }) {
  const { language } = useLanguage()
  const product = products.find((p) => p.id === params.id)
  const langContent = content[language]

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-amber-50 p-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-bold text-amber-900 mb-4"
        >
          {langContent.notFound.title}
        </motion.h1>
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl text-amber-800 mb-8"
        >
          {langContent.notFound.subtitle}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-amber-700 mb-8 text-center max-w-md"
        >
          {langContent.notFound.description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Link 
            href="/shop"
            className="inline-flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-md hover:bg-amber-700 transition-colors"
          >
            <ArrowLeft size={20} />
            {langContent.notFound.backToShop}
          </Link>
        </motion.div>
      </div>
    )
  }

  const relatedProducts = products
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-amber-50">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-900 transition-colors"
          >
            <ArrowLeft size={20} />
            {langContent.product.backToShop}
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative w-full h-[600px] bg-white rounded-lg shadow-lg overflow-hidden p-8"
          >
            <Image
              src={product.image}
              alt={product.title[language]}
              fill
              className="object-contain"
              priority
            />
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                {langContent.product.category}: {product.category}
              </span>
            </div>

            <h1 className="text-4xl font-bold mb-4">{product.title[language]}</h1>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-2">{langContent.product.description}</h2>
              <p className="text-gray-600">{product.description[language]}</p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-2">{langContent.product.features}</h2>
              <ul className="space-y-2">
                {product.features[language].map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-600">
                    <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-amber-700 transition-colors mt-auto"
            >
              <ShoppingCart size={20} />
              {langContent.product.buyNow}
            </a>
          </motion.div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-20"
          >
            <h2 className="text-2xl font-bold mb-8">{langContent.product.relatedProducts}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/shop/${relatedProduct.id}`}
                  className="group"
                >
                  <div className="bg-white rounded-lg shadow-md overflow-hidden group-hover:shadow-lg transition-shadow">
                    <div className="relative h-48">
                      <Image
                        src={relatedProduct.image}
                        alt={relatedProduct.title[language]}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold mb-2">{relatedProduct.title[language]}</h3>
                      <p className="text-sm text-gray-600">{relatedProduct.description[language]}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
} 