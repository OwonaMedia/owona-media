'use client'

import { useLanguage } from '@/context/LanguageContext'
import Link from 'next/link'
import Navigation from './Navigation'

export default function Header() {
  const { t } = useLanguage()

  return (
    <header className="fixed top-0 left-0 right-0 h-20 bg-white shadow-md z-50">
      <div className="container mx-auto h-full flex items-center justify-between px-4">
        <Link href="/" className="text-2xl font-bold text-amber-900">
          Owona Media
        </Link>
        <Navigation />
      </div>
    </header>
  )
} 