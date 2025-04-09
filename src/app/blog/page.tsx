'use client'

import { useLanguage } from '@/context/LanguageContext'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import BlogPost from '@/models/BlogPost'

interface Post {
  _id: string
  title: string
  content: string
  image?: string
  author: string
  createdAt: string
}

export default function Blog() {
  const { t } = useLanguage()
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
      <Head>
        <title>Blog | Owona Media - Digitale Marketing Insights</title>
        <meta name="description" content="Entdecken Sie aktuelle Artikel und Insights zu digitalem Marketing, Social Media und Content Creation auf dem Owona Media Blog." />
        <meta name="keywords" content="digital marketing, social media, content creation, blog, insights, owona media" />
        <meta property="og:title" content="Blog | Owona Media" />
        <meta property="og:description" content="Aktuelle Artikel und Insights zu digitalem Marketing, Social Media und Content Creation" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://owona-media.vercel.app/blog" />
        <meta property="og:image" content="https://owona-media.vercel.app/images/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog | Owona Media" />
        <meta name="twitter:description" content="Aktuelle Artikel und Insights zu digitalem Marketing, Social Media und Content Creation" />
        <meta name="twitter:image" content="https://owona-media.vercel.app/images/og-image.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article key={post._id} className="bg-white rounded-lg shadow-md overflow-hidden">
                {post.image && (
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                )}
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.content.substring(0, 150)}...</p>
                  <div className="flex justify-between items-center">
                    <time className="text-sm text-gray-500" dateTime={post.createdAt}>
                      {new Date(post.createdAt).toLocaleDateString()}
                    </time>
                    <span className="text-sm text-gray-500">{post.author}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </>
  )
} 