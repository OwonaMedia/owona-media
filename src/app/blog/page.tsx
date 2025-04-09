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
  },
  {
    id: 'social-media-marketing',
    title: {
      de: 'Chancen des Social-Media-Marketings nutzen',
      en: 'Leveraging Social Media Marketing Opportunities'
    },
    description: {
      de: 'Entdecken Sie die vielfältigen Möglichkeiten des Social-Media-Marketings und wie Sie diese für Ihr Unternehmen nutzen können.',
      en: 'Discover the diverse opportunities of social media marketing and how to leverage them for your business.'
    },
    image: '/bilder/blog/social-media-marketing.jpg',
    date: '2024-04-07'
  },
  {
    id: 'google-marketplace',
    title: {
      de: 'Der Google Marketplace im Jahr 2025',
      en: 'The Google Marketplace in 2025'
    },
    description: {
      de: 'Ein Blick in die Zukunft des Google Marketplaces und wie Sie sich darauf vorbereiten können.',
      en: 'A look into the future of the Google Marketplace and how you can prepare for it.'
    },
    image: '/bilder/blog/google-marketplace.jpg',
    date: '2024-04-07'
  },
  {
    id: 'instagram-titles',
    title: {
      de: 'Der perfekte Titel für Instagram',
      en: 'The Perfect Instagram Title'
    },
    description: {
      de: 'Lernen Sie, wie Sie die perfekten Titel für Ihre Instagram-Posts erstellen, die Aufmerksamkeit erregen und Engagement generieren.',
      en: 'Learn how to create perfect titles for your Instagram posts that grab attention and generate engagement.'
    },
    image: '/bilder/blog/instagram-titles.jpg',
    date: '2024-04-07'
  },
  {
    id: 'welcome-email',
    title: {
      de: 'Die Macht der Willkommen-E-Mail',
      en: 'The Power of Welcome Emails'
    },
    description: {
      de: 'Erfahren Sie, wie Sie Ihre Kunden von Beginn an mit der perfekten Willkommen-E-Mail begeistern können.',
      en: 'Learn how to impress your customers from the start with the perfect welcome email.'
    },
    image: '/bilder/blog/welcome-email.jpg',
    date: '2024-04-07'
  },
  {
    id: 'email-marketing',
    title: {
      de: 'E-Mail-Marketing optimal einsetzen',
      en: 'Optimizing Email Marketing'
    },
    description: {
      de: 'Entdecken Sie die besten Strategien für effektives E-Mail-Marketing und wie Sie Ihre Kampagnen optimieren können.',
      en: 'Discover the best strategies for effective email marketing and how to optimize your campaigns.'
    },
    image: '/bilder/blog/email-marketing.jpg',
    date: '2024-04-07'
  },
  {
    id: 'online-marketing',
    title: {
      de: 'Entdecke die Welt des Online-Marketings',
      en: 'Discover the World of Online Marketing'
    },
    description: {
      de: 'Ihr Schlüssel zum digitalen Erfolg: Ein umfassender Guide für erfolgreiches Online-Marketing.',
      en: 'Your key to digital success: A comprehensive guide to successful online marketing.'
    },
    image: '/bilder/blog/online-marketing.jpg',
    date: '2024-04-07'
  },
  {
    id: 'facebook-marketing',
    title: {
      de: 'Facebook Marketing im Jahr 2025',
      en: 'Facebook Marketing in 2025'
    },
    description: {
      de: 'Ein Blick in die Zukunft des Facebook Marketings und wie Sie sich darauf vorbereiten können.',
      en: 'A look into the future of Facebook marketing and how you can prepare for it.'
    },
    image: '/bilder/blog/facebook-marketing.jpg',
    date: '2024-04-07'
  },
  {
    id: 'handmade-videos',
    title: {
      de: 'Handgefilmte Videos: Der Schlüssel zu lebendigem Online-Content',
      en: 'Handmade Videos: The Key to Engaging Online Content'
    },
    description: {
      de: 'Lernen Sie, wie Sie mit handgefilmten Videos authentischen und ansprechenden Content erstellen können.',
      en: 'Learn how to create authentic and engaging content with handmade videos.'
    },
    image: '/bilder/blog/handmade-videos.jpg',
    date: '2024-04-07'
  },
  {
    id: 'instagram-marketing',
    title: {
      de: 'Instagram-Marketing im Jahr 2025',
      en: 'Instagram Marketing in 2025'
    },
    description: {
      de: 'Ein Blick in die Zukunft des Instagram Marketings und wie Sie sich darauf vorbereiten können.',
      en: 'A look into the future of Instagram marketing and how you can prepare for it.'
    },
    image: '/bilder/blog/instagram-marketing.jpg',
    date: '2024-04-07'
  },
  {
    id: 'pinterest-marketing',
    title: {
      de: 'Pinterest Marketing im Jahr 2025',
      en: 'Pinterest Marketing in 2025'
    },
    description: {
      de: 'Ein Blick in die Zukunft des Pinterest Marketings und wie Sie sich darauf vorbereiten können.',
      en: 'A look into the future of Pinterest marketing and how you can prepare for it.'
    },
    image: '/bilder/blog/pinterest-marketing.jpg',
    date: '2024-04-07'
  },
  {
    id: 'social-media-seniors',
    title: {
      de: 'Soziale Medien für Senioren',
      en: 'Social Media for Seniors'
    },
    description: {
      de: 'Ein einfacher Einstieg in die digitale Welt für Senioren.',
      en: 'An easy introduction to the digital world for seniors.'
    },
    image: '/bilder/blog/social-media-seniors.jpg',
    date: '2024-04-07'
  },
  {
    id: 'youtube-shorts',
    title: {
      de: 'Wie Sie Ihr Geschäft mit YouTube-Shorts 2025 ankurbeln können',
      en: 'How to Boost Your Business with YouTube Shorts in 2025'
    },
    description: {
      de: 'Entdecken Sie die Möglichkeiten von YouTube Shorts für Ihr Unternehmen im Jahr 2025.',
      en: 'Discover the possibilities of YouTube Shorts for your business in 2025.'
    },
    image: '/bilder/blog/youtube-shorts.jpg',
    date: '2024-04-07'
  },
  {
    id: 'tiktok-marketing',
    title: {
      de: 'Wie Sie Ihr Unternehmen mit TikTok Marketing im Jahr 2025 zum Erfolg führen',
      en: 'How to Lead Your Company to Success with TikTok Marketing in 2025'
    },
    description: {
      de: 'Erfahren Sie, wie Sie TikTok Marketing für Ihr Unternehmen im Jahr 2025 optimal nutzen können.',
      en: 'Learn how to optimally use TikTok marketing for your business in 2025.'
    },
    image: '/bilder/blog/tiktok-marketing.jpg',
    date: '2024-04-07'
  },
  {
    id: 'social-media-content',
    title: {
      de: 'Wie Social Media Inhalte Ihren Umsatz steigern können',
      en: 'How Social Media Content Can Increase Your Revenue'
    },
    description: {
      de: 'Entdecken Sie, wie Sie mit strategischem Social Media Content Ihren Umsatz steigern können.',
      en: 'Discover how strategic social media content can increase your revenue.'
    },
    image: '/bilder/blog/social-media-content.jpg',
    date: '2024-04-07'
  },
  {
    id: 'online-shop',
    title: {
      de: 'Wie du deinen Online-Shop zum Erfolg führst',
      en: 'How to Lead Your Online Shop to Success'
    },
    description: {
      de: 'Praktische Tipps und Strategien für einen erfolgreichen Online-Shop.',
      en: 'Practical tips and strategies for a successful online shop.'
    },
    image: '/bilder/blog/online-shop.jpg',
    date: '2024-04-07'
  },
  {
    id: 'reels-thumbnails',
    title: {
      de: 'Wie professionelle Titelbilder in Reels Ihre Verkäufe ankurbeln können',
      en: 'How Professional Thumbnails in Reels Can Boost Your Sales'
    },
    description: {
      de: 'Lernen Sie, wie Sie mit professionellen Titelbildern in Reels mehr Verkäufe generieren können.',
      en: 'Learn how to generate more sales with professional thumbnails in Reels.'
    },
    image: '/bilder/blog/reels-thumbnails.jpg',
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