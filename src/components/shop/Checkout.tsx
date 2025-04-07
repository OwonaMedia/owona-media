'use client'

import { useState } from 'react'
import Image from 'next/image'
import NewsletterSignup from '@/components/common/NewsletterSignup'

interface PaymentMethod {
  id: string
  name: string
  icon: string
  description: string
}

const paymentMethods: PaymentMethod[] = [
  {
    id: 'paypal',
    name: 'PayPal',
    icon: '/images/payment/paypal.svg',
    description: 'Sicher und schnell bezahlen mit PayPal'
  },
  {
    id: 'visa',
    name: 'Visa',
    icon: '/images/payment/visa.svg',
    description: 'Sichere Kreditkartenzahlung mit Visa'
  },
  {
    id: 'sofort',
    name: 'Sofortüberweisung',
    icon: '/images/payment/sofort.svg',
    description: 'Sofortige Überweisung mit Online-Banking'
  },
  {
    id: 'bitcoin',
    name: 'Bitcoin',
    icon: '/images/payment/bitcoin.svg',
    description: 'Anonyme Zahlung mit Kryptowährung'
  }
]

export default function Checkout() {
  const [selectedMethod, setSelectedMethod] = useState<string>('')
  const [hasNewsletterDiscount, setHasNewsletterDiscount] = useState(false)

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Sichere Zahlung</h2>
      
      <div className="space-y-4">
        {paymentMethods.map((method) => (
          <div
            key={method.id}
            className={`p-4 border rounded-lg cursor-pointer transition-all ${
              selectedMethod === method.id
                ? 'border-black bg-gray-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => setSelectedMethod(method.id)}
          >
            <div className="flex items-center space-x-4">
              <div className="relative w-12 h-8">
                <Image
                  src={method.icon}
                  alt={method.name}
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-medium">{method.name}</h3>
                <p className="text-sm text-gray-500">{method.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t">
        <NewsletterSignup variant="checkout" />
        
        <div className="mt-6 space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Zwischensumme</span>
            <span className="font-medium">€0,00</span>
          </div>
          {hasNewsletterDiscount && (
            <div className="flex justify-between items-center text-green-600">
              <span>Newsletter Rabatt</span>
              <span>-€5,00</span>
            </div>
          )}
          <div className="flex justify-between items-center font-bold text-lg pt-2 border-t">
            <span>Gesamtbetrag</span>
            <span>€{hasNewsletterDiscount ? '-5,00' : '0,00'}</span>
          </div>
        </div>
        
        <button
          className={`w-full py-3 px-4 mt-4 rounded-lg text-white font-medium transition-colors ${
            selectedMethod
              ? 'bg-black hover:bg-gray-800'
              : 'bg-gray-300 cursor-not-allowed'
          }`}
          disabled={!selectedMethod}
        >
          Jetzt bezahlen
        </button>

        <div className="mt-4 text-sm text-gray-500 text-center">
          <p>Ihre Zahlung wird sicher verarbeitet</p>
          <div className="flex justify-center space-x-4 mt-2">
            <Image
              src="/images/payment/ssl.svg"
              alt="SSL Verschlüsselung"
              width={40}
              height={40}
            />
            <Image
              src="/images/payment/pci.svg"
              alt="PCI DSS konform"
              width={40}
              height={40}
            />
          </div>
        </div>
      </div>
    </div>
  )
} 