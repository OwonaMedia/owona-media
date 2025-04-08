'use client'

import { useLanguage } from '@/context/LanguageContext'
import { useEffect, useState } from 'react'
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

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/blog')
        const data = await response.json()
        setPosts(data.posts)
      } catch (error) {
        console.error('Error fetching blog posts:', error)
      }
    }

    fetchPosts()
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">{t('blog')}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post._id} className="bg-white rounded-lg shadow-md overflow-hidden">
            {post.image && (
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            )}
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.content.substring(0, 150)}...</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{new Date(post.createdAt).toLocaleDateString()}</span>
                <span className="text-sm text-gray-500">{post.author}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 