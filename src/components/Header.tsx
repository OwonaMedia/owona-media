import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'
import { LanguageSwitcher } from './LanguageSwitcher'

export default function Header() {
  const { t } = useLanguage()

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/bilder/logo.jpg"
              alt="Owona Media Logo"
              width={120}
              height={40}
              className="mr-4"
            />
          </Link>
          <nav className="flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-amber-600">
              {t('home')}
            </Link>
            <Link href="/shop" className="text-gray-700 hover:text-amber-600">
              {t('shop')}
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-amber-600">
              {t('blog')}
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-amber-600">
              {t('about')}
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-amber-600">
              {t('contact')}
            </Link>
            <LanguageSwitcher />
          </nav>
        </div>
      </div>
    </header>
  )
} 