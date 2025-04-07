'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface Purchase {
  id: number
  name: string
  country: string
  product: string
  time: string
}

const customers = [
  { name: 'Maria Garcia', country: 'es' },
  { name: 'John Smith', country: 'gb' },
  { name: 'Sophie Dubois', country: 'fr' },
  { name: 'Luca Rossi', country: 'it' },
  { name: 'Anna Müller', country: 'de' },
  { name: 'Yuki Tanaka', country: 'jp' },
  { name: 'Carlos Silva', country: 'br' },
  { name: 'Emma Wilson', country: 'us' },
  { name: 'Mohammed Ali', country: 'sa' },
  { name: 'Elena Petrova', country: 'ru' },
  { name: 'David Kim', country: 'kr' },
  { name: 'Isabella Santos', country: 'pt' },
  { name: 'Oliver Schmidt', country: 'at' },
  { name: 'Sofia Andersson', country: 'se' },
  { name: 'Liam O\'Connor', country: 'ie' },
  { name: 'Emma van der Berg', country: 'nl' },
  { name: 'Noah Jensen', country: 'dk' },
  { name: 'Mia Kowalski', country: 'pl' },
  { name: 'Lucas Novak', country: 'cz' },
  { name: 'Zoe Papadopoulos', country: 'gr' },
  { name: 'Ethan Wong', country: 'hk' },
  { name: 'Ava Chen', country: 'cn' },
  { name: 'Liam O\'Brien', country: 'au' },
  { name: 'Sophia Patel', country: 'in' },
  { name: 'Noah van der Meer', country: 'be' },
  { name: 'Isabella Costa', country: 'mx' },
  { name: 'Lucas Fernandez', country: 'ar' },
  { name: 'Emma Schmidt', country: 'ch' },
  { name: 'Oliver Johansson', country: 'no' },
  { name: 'Mia Kowalski', country: 'fi' },
  { name: 'Liam O\'Sullivan', country: 'nz' },
  { name: 'Sophia Ivanova', country: 'bg' },
  { name: 'Noah Schmidt', country: 'lu' },
  { name: 'Emma Dubois', country: 'ca' },
  { name: 'Lucas Silva', country: 'za' },
  { name: 'Isabella Kim', country: 'sg' },
  { name: 'Oliver Chen', country: 'tw' },
  { name: 'Mia Schmidt', country: 'hu' },
  { name: 'Liam Novak', country: 'sk' },
  { name: 'Sophia Garcia', country: 'co' },
  { name: 'Noah Wilson', country: 'ph' },
  { name: 'Emma Rossi', country: 'ro' },
  { name: 'Lucas Schmidt', country: 'hr' },
  { name: 'Isabella Silva', country: 'cl' },
  { name: 'Oliver Kim', country: 'my' },
  { name: 'Mia Schmidt', country: 'id' },
  { name: 'Liam Chen', country: 'th' },
  { name: 'Sophia Novak', country: 'vn' },
  { name: 'Noah Garcia', country: 'pe' }
]

const products = [
  'Premium Marketing Kurs',
  'Social Media Strategie Guide',
  'E-Book: Erfolgreich Online',
  'Video Marketing Masterclass',
  'SEO Optimierung Toolkit',
  'Content Marketing Bundle',
  'Email Marketing Template',
  'Social Media Content Pack',
  'Business Plan Vorlage',
  'Marketing Automation Guide'
]

export default function PurchaseNotification() {
  const [purchases, setPurchases] = useState<Purchase[]>([])
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const generateRandomPurchase = () => {
      try {
        const customer = customers[Math.floor(Math.random() * customers.length)]
        const product = products[Math.floor(Math.random() * products.length)]
        const time = new Date().toLocaleTimeString('de-DE', { 
          hour: '2-digit', 
          minute: '2-digit',
          timeZone: 'Europe/Berlin'
        })
        
        return {
          id: Date.now(),
          name: customer.name,
          country: customer.country,
          product: product,
          time: time
        }
      } catch (error) {
        console.error('Fehler beim Generieren der Kaufbenachrichtigung:', error)
        return null
      }
    }

    const showNotification = () => {
      const newPurchase = generateRandomPurchase()
      if (newPurchase) {
        setPurchases(prev => [newPurchase, ...prev].slice(0, 5))
        setIsVisible(true)
        
        setTimeout(() => {
          setIsVisible(false)
        }, 5000)
      }
    }

    // Nur im Produktionsmodus Benachrichtigungen anzeigen
    if (process.env.NODE_ENV === 'production') {
      const minInterval = 30000 // 30 Sekunden
      const maxInterval = 60000 // 60 Sekunden
      const interval = setInterval(() => {
        showNotification()
      }, Math.random() * (maxInterval - minInterval) + minInterval)

      return () => clearInterval(interval)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {purchases.map((purchase) => (
        <div
          key={purchase.id}
          className="bg-white rounded-lg shadow-lg p-4 mb-2 w-80 animate-fade-in"
        >
          <div className="flex items-center space-x-3">
            <div className="relative w-6 h-4">
              <Image
                src={`/images/flags/${purchase.country}.svg`}
                alt={purchase.country}
                fill
                className="object-cover rounded"
              />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">{purchase.name}</p>
              <p className="text-xs text-gray-500">{purchase.product}</p>
            </div>
            <span className="text-xs text-gray-400">{purchase.time}</span>
          </div>
        </div>
      ))}
    </div>
  )
} 