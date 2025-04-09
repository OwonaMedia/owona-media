'use client'

import { useLanguage } from '@/context/LanguageContext'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import SEO from '@/components/SEO'

const content = {
  de: {
    backToBlog: 'Zurück zum Blog',
    share: 'Teilen',
    readTime: 'Lesezeit',
    published: 'Veröffentlicht am',
    relatedPosts: 'Ähnliche Artikel',
    category: 'Kategorie'
  },
  en: {
    backToBlog: 'Back to Blog',
    share: 'Share',
    readTime: 'Read time',
    published: 'Published on',
    relatedPosts: 'Related Posts',
    category: 'Category'
  }
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
    content: {
      de: `
        <h2>Was sind Master Resell Rights?</h2>
        <p>Master Resell Rights (MRR) sind eine besondere Art von Lizenz, die es Ihnen erlaubt, digitale Produkte zu verkaufen und dabei die volle Kontrolle über den Verkaufspreis und die Marketingstrategie zu behalten.</p>
        
        <h2>Vorteile von Master Resell Rights</h2>
        <ul>
          <li>100% Gewinnmarge</li>
          <li>Flexible Preisgestaltung</li>
          <li>Keine monatlichen Gebühren</li>
          <li>Unbegrenzte Verkäufe</li>
        </ul>
        
        <h2>Wie starten Sie mit MRR?</h2>
        <p>Der Einstieg in das MRR-Geschäft ist einfacher als Sie denken. Hier sind die wichtigsten Schritte:</p>
        <ol>
          <li>Finden Sie hochwertige MRR-Produkte</li>
          <li>Erstellen Sie eine Verkaufsstrategie</li>
          <li>Richten Sie Ihre Verkaufsplattform ein</li>
          <li>Starten Sie mit dem Marketing</li>
        </ol>
      `,
      en: `
        <h2>What are Master Resell Rights?</h2>
        <p>Master Resell Rights (MRR) are a special type of license that allows you to sell digital products while maintaining full control over the selling price and marketing strategy.</p>
        
        <h2>Benefits of Master Resell Rights</h2>
        <ul>
          <li>100% Profit Margin</li>
          <li>Flexible Pricing</li>
          <li>No Monthly Fees</li>
          <li>Unlimited Sales</li>
        </ul>
        
        <h2>How to Start with MRR</h2>
        <p>Getting started in the MRR business is easier than you think. Here are the key steps:</p>
        <ol>
          <li>Find High-Quality MRR Products</li>
          <li>Create a Sales Strategy</li>
          <li>Set Up Your Sales Platform</li>
          <li>Start Marketing</li>
        </ol>
      `
    },
    image: '/bilder/blog/master-resell-rights.jpg',
    date: '2024-04-07',
    category: 'business',
    readTime: '5 min'
  },
  // ... Weitere Blog-Posts hier
]

export default function BlogPostPage() {
  const { language } = useLanguage()
  const { id } = useParams()
  const langContent = content[language]
  
  const post = blogPosts.find(p => p.id === id)
  
  if (!post) {
    return (
      <div className="min-h-screen bg-amber-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-xl mb-8">
            {language === 'de' ? 'Artikel nicht gefunden' : 'Post not found'}
          </p>
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700"
          >
            <ArrowLeft size={20} />
            {langContent.backToBlog}
          </Link>
        </div>
      </div>
    )
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString(language === 'de' ? 'de-DE' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3)

  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''

  return (
    <>
      <SEO
        title={post.title[language]}
        description={post.description[language]}
        keywords={`${post.category}, blog, article`}
      />

      <div className="min-h-screen bg-amber-50">
        <div className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 mb-8"
            >
              <ArrowLeft size={20} />
              {langContent.backToBlog}
            </Link>

            <article className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-[500px]">
                <Image
                  src={post.image}
                  alt={post.title[language]}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h1 className="text-4xl font-bold mb-4">
                    {post.title[language]}
                  </h1>
                  <div className="flex items-center gap-4 text-sm text-white/80">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      {formatDate(post.date)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      {post.readTime}
                    </div>
                    <div className="flex items-center gap-1">
                      {langContent.category}: {post.category}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div 
                  className="prose prose-lg max-w-none mb-8"
                  dangerouslySetInnerHTML={{ __html: post.content[language] }}
                />

                <div className="border-t border-gray-200 pt-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <button 
                        className="flex items-center gap-2 text-gray-600 hover:text-amber-600 transition-colors"
                        onClick={() => {
                          if (navigator.share) {
                            navigator.share({
                              title: post.title[language],
                              text: post.description[language],
                              url: shareUrl
                            })
                          }
                        }}
                      >
                        <Share2 size={20} />
                        {langContent.share}
                      </button>
                      <div className="flex gap-2">
                        <a 
                          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-amber-600 transition-colors"
                        >
                          <Facebook size={20} />
                        </a>
                        <a 
                          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-amber-600 transition-colors"
                        >
                          <Twitter size={20} />
                        </a>
                        <a 
                          href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-amber-600 transition-colors"
                        >
                          <Linkedin size={20} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {relatedPosts.length > 0 && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">
                  {langContent.relatedPosts}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedPosts.map(relatedPost => (
                    <Link 
                      key={relatedPost.id}
                      href={`/blog/${relatedPost.id}`}
                      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group"
                    >
                      <div className="relative h-48">
                        <Image
                          src={relatedPost.image}
                          alt={relatedPost.title[language]}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold mb-2 group-hover:text-amber-600 transition-colors">
                          {relatedPost.title[language]}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {relatedPost.description[language]}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </>
  )
} 