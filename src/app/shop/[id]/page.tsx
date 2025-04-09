'use client'

import { useLanguage } from '@/context/LanguageContext'
import { products } from '@/data/products'
import Image from 'next/image'
import Link from 'next/link'

export default function ProductPage({ params }: { params: { id: string } }) {
  const { t } = useLanguage()
  const product = products.find((p) => p.id === params.id)

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-amber-50 p-4">
        <h1 className="text-6xl font-bold text-amber-900 mb-4">404</h1>
        <h2 className="text-2xl text-amber-800 mb-8">Produkt nicht gefunden</h2>
        <p className="text-amber-700 mb-8 text-center max-w-md">
          Das von Ihnen gesuchte Produkt konnte leider nicht gefunden werden.
        </p>
        <Link 
          href="/shop"
          className="bg-amber-600 text-white px-6 py-3 rounded-md hover:bg-amber-700 transition-colors"
        >
          Zurück zum Shop
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative h-[400px]">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain rounded-lg shadow-lg"
            priority
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-lg mb-6">{product.description}</p>
          <a
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Image
              src="/images/payment/buy-now.png"
              alt="Jetzt kaufen"
              width={150}
              height={40}
              className="hover:opacity-90 transition-opacity"
            />
          </a>
        </div>
      </div>
    </div>
  )
} 