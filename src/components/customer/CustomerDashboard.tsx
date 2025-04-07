'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { useAuth } from '@/context/AuthContext'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

interface Product {
  id: string
  title: string
  image: string
  downloadUrl: string
  purchasedAt: string
  rating?: number
  review?: string
  downloadCount: number
  maxDownloads: number
}

interface Recommendation {
  id: string
  title: string
  image: string
  price: string
  description: string
}

interface SupportTicket {
  _id: string
  subject: string
  status: 'open' | 'in_progress' | 'resolved'
  createdAt: string
  updatedAt: string
}

interface Order {
  _id: string
  products: {
    name: string
    quantity: number
    price: number
  }[]
  total: number
  status: 'pending' | 'processing' | 'completed' | 'cancelled'
  createdAt: string
}

const purchasedProducts: Product[] = [
  {
    id: '1',
    title: 'Premium Marketing Kurs',
    image: '/images/products/marketing-kurs.jpg',
    downloadUrl: '#',
    purchasedAt: '2024-04-01',
    rating: 4.5,
    review: 'Sehr hilfreicher Kurs mit vielen praktischen Tipps!',
    downloadCount: 2,
    maxDownloads: 5
  },
  {
    id: '2',
    title: 'Social Media Strategie Guide',
    image: '/images/products/social-media-guide.jpg',
    downloadUrl: '#',
    purchasedAt: '2024-03-15',
    downloadCount: 1,
    maxDownloads: 3
  }
]

const recommendations: Recommendation[] = [
  {
    id: '1',
    title: 'Content Marketing Bundle',
    image: '/images/products/content-bundle.jpg',
    price: '€49,99',
    description: 'Alles was Sie für erfolgreiches Content Marketing brauchen'
  },
  {
    id: '2',
    title: 'SEO Optimierung Toolkit',
    image: '/images/products/seo-toolkit.jpg',
    price: '€39,99',
    description: 'Professionelle SEO-Tools für bessere Rankings'
  },
  {
    id: '3',
    title: 'Email Marketing Template',
    image: '/images/products/email-template.jpg',
    price: '€29,99',
    description: 'Professionelle E-Mail-Vorlagen für mehr Conversions'
  }
]

export default function CustomerDashboard() {
  const { t } = useLanguage()
  const { user, logout } = useAuth()
  const router = useRouter()
  const [tickets, setTickets] = useState<SupportTicket[]>([])
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!user) {
      router.push('/login')
      return
    }

    const fetchData = async () => {
      try {
        const [ticketsResponse, ordersResponse] = await Promise.all([
          fetch('/api/support/tickets'),
          fetch('/api/orders')
        ])

        if (ticketsResponse.ok) {
          const ticketsData = await ticketsResponse.json()
          setTickets(ticketsData)
        }

        if (ordersResponse.ok) {
          const ordersData = await ordersResponse.json()
          setOrders(ordersData)
        }
      } catch (error) {
        console.error('Fehler beim Laden der Daten:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [user, router])

  const handleLogout = async () => {
    try {
      await logout()
      router.push('/login')
    } catch (error) {
      console.error('Fehler beim Abmelden:', error)
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">{t('welcome')}, {user?.name}</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
        >
          {t('logout')}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">{t('support_tickets')}</h2>
          {tickets.length === 0 ? (
            <p className="text-gray-500">{t('no_tickets')}</p>
          ) : (
            <div className="space-y-4">
              {tickets.map((ticket) => (
                <div key={ticket._id} className="border-b pb-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">{ticket.subject}</h3>
                    <span className={`px-2 py-1 rounded text-sm ${
                      ticket.status === 'open' ? 'bg-yellow-100 text-yellow-800' :
                      ticket.status === 'in_progress' ? 'bg-blue-100 text-blue-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {ticket.status === 'open' ? t('open') :
                       ticket.status === 'in_progress' ? t('in_progress') :
                       t('resolved')}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    {new Date(ticket.createdAt).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          )}
          <button
            onClick={() => router.push('/support')}
            className="mt-4 bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 transition-colors"
          >
            {t('create_ticket')}
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">{t('orders')}</h2>
          {orders.length === 0 ? (
            <p className="text-gray-500">{t('no_orders')}</p>
          ) : (
            <div className="space-y-4">
              {orders.map((order) => (
                <div key={order._id} className="border-b pb-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">
                        {order.products.map(p => p.name).join(', ')}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {new Date(order.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">€{order.total.toFixed(2)}</p>
                      <span className={`px-2 py-1 rounded text-sm ${
                        order.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                        order.status === 'processing' ? 'bg-blue-100 text-blue-800' :
                        order.status === 'completed' ? 'bg-green-100 text-green-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {t(order.status)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          <button
            onClick={() => router.push('/shop')}
            className="mt-4 bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 transition-colors"
          >
            {t('shop_now')}
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">{t('account_settings')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium mb-2">{t('personal_info')}</h3>
            <p className="text-gray-600">{user?.name}</p>
            <p className="text-gray-600">{user?.email}</p>
          </div>
          <div>
            <h3 className="font-medium mb-2">{t('security')}</h3>
            <button
              onClick={() => router.push('/change-password')}
              className="text-amber-600 hover:text-amber-700"
            >
              {t('change_password')}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 