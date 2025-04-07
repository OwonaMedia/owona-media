import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLanguage } from '@/context/LanguageContext'
import { ChevronRight } from 'lucide-react'

export default function Breadcrumb() {
  const pathname = usePathname()
  const { t } = useLanguage()

  const paths = pathname.split('/').filter(Boolean)
  const breadcrumbs = paths.map((path, index) => {
    const href = `/${paths.slice(0, index + 1).join('/')}`
    const label = t(path) || path.charAt(0).toUpperCase() + path.slice(1)
    
    return {
      href,
      label,
      isCurrent: index === paths.length - 1
    }
  })

  return (
    <nav className="bg-amber-50 py-4">
      <div className="container mx-auto px-4">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link href="/" className="text-amber-600 hover:text-amber-700">
              {t('home')}
            </Link>
          </li>
          {breadcrumbs.map((crumb, index) => (
            <li key={crumb.href} className="flex items-center space-x-2">
              <ChevronRight size={16} className="text-amber-400" />
              {crumb.isCurrent ? (
                <span className="text-amber-900">{crumb.label}</span>
              ) : (
                <Link 
                  href={crumb.href}
                  className="text-amber-600 hover:text-amber-700"
                >
                  {crumb.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
} 