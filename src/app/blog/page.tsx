'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'
import { useEffect, useState } from 'react'
import SEO from '@/components/SEO'

interface Post {
  _id: string
  title: string
  content: string
  image?: string
  author: string
  createdAt: string
}

const blogPosts = [
  {
    id: 'master-resell-rights',
    title: {
      de: 'Master Resell Rights: Der ultimative Guide für digitale Produkte',
      en: 'Master Resell Rights: The Ultimate Guide for Digital Products'
    },
    description: {
      de: 'Entdecken Sie, wie Sie mit Master Resell Rights passives Einkommen generieren können. Lernen Sie die besten Strategien für den Verkauf digitaler Produkte.',
      en: 'Discover how to generate passive income with Master Resell Rights. Learn the best strategies for selling digital products.'
    },
    image: '/bilder/blog/master-resell-rights.jpg',
    date: '2024-04-07'
  },
  {
    id: 'faceless-marketing',
    title: {
      de: 'Faceless Marketing: Erfolgreich ohne Gesicht',
      en: 'Faceless Marketing: Succeed Without Showing Your Face'
    },
    description: {
      de: 'Erfahren Sie, wie Sie erfolgreich Marketing betreiben können, ohne Ihr Gesicht zu zeigen. Perfekt für Introvertierte und Privatsphäre-bewusste Unternehmer.',
      en: 'Learn how to successfully market without showing your face. Perfect for introverts and privacy-conscious entrepreneurs.'
    },
    image: '/bilder/blog/faceless-marketing.jpg',
    date: '2024-04-07'
  },
  {
    id: 'canva-guide',
    title: {
      de: 'Canva für Anfänger: Der komplette Guide',
      en: 'Canva for Beginners: The Complete Guide'
    },
    description: {
      de: 'Meistern Sie Canva von Grund auf. Lernen Sie, wie Sie professionelle Designs erstellen, ohne Designer zu sein.',
      en: 'Master Canva from scratch. Learn how to create professional designs without being a designer.'
    },
    image: '/bilder/blog/canva-guide.jpg',
    date: '2024-04-07'
  }
]

export default function BlogPage() {
  const { t, language } = useLanguage()
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true)
        const response = await fetch('/api/blog')
        if (!response.ok) {
          throw new Error('Failed to fetch blog posts')
        }
        const data = await response.json()
        setPosts(data.posts || [])
      } catch (error) {
        console.error('Error fetching blog posts:', error)
        setError('Fehler beim Laden der Blog-Posts')
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Owona Media Blog",
    "description": "Aktuelle Artikel und Insights zu digitalem Marketing, Social Media und Content Creation",
    "url": "https://owona-media.vercel.app/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Owona Media",
      "logo": {
        "@type": "ImageObject",
        "url": "https://owona-media.vercel.app/images/logo.png"
      }
    },
    "blogPost": posts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.content.substring(0, 160),
      "datePublished": post.createdAt,
      "author": {
        "@type": "Person",
        "name": post.author
      },
      "image": post.image ? `https://owona-media.vercel.app${post.image}` : undefined
    }))
  }

  return (
    <>
      <SEO
        title="Blog"
        description="Entdecken Sie aktuelle Artikel und Insights zu digitalem Marketing, Social Media und Content Creation auf dem Owona Media Blog."
        keywords="digital marketing, social media, content creation, blog, insights, owona media"
        structuredData={structuredData}
      />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">{t('blog')}</h1>
        
        {loading && (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-600"></div>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}

        {!loading && !error && posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">Keine Blog-Posts verfügbar</p>
          </div>
        )}

        {!loading && !error && posts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link 
                href={`/blog/${post._id}`} 
                key={post._id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={post.image || blogPosts.find(p => p.id === post._id)?.image || ''}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.content.substring(0, 150)}...</p>
                  <div className="text-sm text-gray-500">{new Date(post.createdAt).toLocaleDateString()}</div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  )
} 