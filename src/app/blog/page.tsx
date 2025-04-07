'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import { useEffect, useState } from 'react'
import { BlogPost } from '@/models/BlogPost'

export default function Blog() {
  const { t, currentLanguage } = useLanguage()
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/blog')
        const data = await response.json()
        setPosts(data)
      } catch (error) {
        console.error('Fehler beim Laden der Blog-Posts:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">{t('blog')}</h1>
      <p className="text-gray-600 mb-8">{t('blog_description')}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link 
            key={post._id} 
            href={`/blog/${post.slug}`}
            className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <article>
              <div className="relative h-48 w-full">
                <Image
                  src={post.image}
                  alt={post.translations[currentLanguage].title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <span className="text-sm text-gray-500">
                  {new Date(post.date).toLocaleDateString(currentLanguage)}
                </span>
                <h2 className="text-xl font-semibold mt-2 mb-4">
                  {post.translations[currentLanguage].title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {post.translations[currentLanguage].excerpt}
                </p>
                <div className="inline-block bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 transition-colors">
                  {t('read_more')}
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  )
} 