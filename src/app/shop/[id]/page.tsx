'use client'

import { useLanguage } from '@/context/LanguageContext'
import { products } from '@/data/products'
import Image from 'next/image'
import Link from 'next/link'

export default function ProductPage({ params }: { params: { id: string } }) {
  const { t } = useLanguage()
  const product = products.find((p: { id: string }) => p.id === params.id)

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
        <div>
          <Image
            src={product.image}
            alt={product.name}
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-lg mb-6">{product.description}</p>
          <p className="text-2xl font-bold mb-6">{product.price} €</p>
          <Link
            href={`/shop/checkout/${product.id}`}
            className="bg-amber-600 text-white px-6 py-3 rounded-md hover:bg-amber-700 transition-colors"
          >
            Jetzt kaufen
          </Link>
        </div>
      </div>
    </div>
  )
} 