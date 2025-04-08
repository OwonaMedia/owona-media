'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLanguage } from '@/context/LanguageContext'

export default function Breadcrumb() {
  const pathname = usePathname()
  const { t } = useLanguage()
  const paths = pathname.split('/').filter(Boolean)

  const breadcrumbs = paths.map((path, index) => {
    const href = `/${paths.slice(0, index + 1).join('/')}`
    const label = t(path as any) || path.charAt(0).toUpperCase() + path.slice(1)
    
    return {
      href,
      label,
      isLast: index === paths.length - 1
    }
  })

  if (breadcrumbs.length === 0) return null

  return (
    <nav className="text-sm text-amber-600 mb-4">
      <ol className="list-none p-0 inline-flex">
        <li className="flex items-center">
          <Link href="/" className="hover:text-amber-800">
            {t('home')}
          </Link>
        </li>
        {breadcrumbs.map(({ href, label, isLast }) => (
          <li key={href} className="flex items-center">
            <span className="mx-2">/</span>
            {isLast ? (
              <span className="text-amber-900">{label}</span>
            ) : (
              <Link href={href} className="hover:text-amber-800">
                {label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
} 