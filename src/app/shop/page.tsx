'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

const products = [
  {
    id: 'master-resell-rights',
    title: 'Master Resell Rights',
    description: 'Erhalten Sie die exklusiven Rechte, um dieses digitale Produkt zu verkaufen und weiterzuverkaufen. Perfekt für Ihren eigenen Online-Shop.',
    image: '/bilder/produkte/master-resell-rights.jpg',
    link: 'https://masterresellrights.at/owonamedia',
    category: 'Business'
  },
  {
    id: 'new-york-videos',
    title: 'New York - 273 Videos',
    description: 'Eine umfangreiche Sammlung von 273 hochwertigen Videos aus New York City. Perfekt für Content Creator und Social Media Marketing.',
    image: '/bilder/produkte/new-york-videos.jpg',
    link: 'https://masterresellrights.at/db9vam',
    category: 'Videos'
  },
  {
    id: 'caribbean-bundle',
    title: 'The Caribbean Bundle',
    description: 'Das komplette Caribbean Bundle mit allen 3 Volumes. Über 300 Videos von traumhaften Stränden und tropischen Landschaften.',
    image: '/bilder/produkte/caribbean-bundle.jpg',
    link: 'https://masterresellrights.at/mn3mjn',
    category: 'Videos'
  },
  {
    id: 'caribbean-vol3',
    title: 'The Caribbean Vol 3',
    description: 'Der dritte Teil unserer Caribbean Serie mit 154 exklusiven Videos von paradiesischen Stränden und kristallklarem Wasser.',
    image: '/bilder/produkte/caribbean-vol3.jpg',
    link: 'https://masterresellrights.at/agiirq',
    category: 'Videos'
  },
  {
    id: 'caribbean-vol2',
    title: 'The Caribbean Vol 2',
    description: 'Der zweite Teil unserer Caribbean Serie mit 110 hochwertigen Videos von tropischen Stränden und Meereslandschaften.',
    image: '/bilder/produkte/caribbean-vol2.jpg',
    link: 'https://masterresellrights.at/iuadry',
    category: 'Videos'
  },
  {
    id: 'caribbean-vol1',
    title: 'The Caribbean',
    description: 'Der erste Teil unserer Caribbean Serie mit 90 professionellen Videos von traumhaften Karibikstränden.',
    image: '/bilder/produkte/caribbean.jpg',
    link: 'https://masterresellrights.at/xs26pf',
    category: 'Videos'
  },
  {
    id: 'sunsetlover',
    title: 'Sunsetlover',
    description: 'Eine Sammlung der schönsten Sonnenuntergänge aus der ganzen Welt. Perfekt für entspannende Videos und Social Media Content.',
    image: '/bilder/produkte/sunsetlover.jpg',
    link: 'https://masterresellrights.at/enljt3',
    category: 'Videos'
  },
  {
    id: 'canva-beginner',
    title: 'Canva für Anfänger',
    description: 'Lernen Sie die Grundlagen von Canva kennen und erstellen Sie professionelle Designs für Ihre Social Media Kanäle.',
    image: '/bilder/produkte/canva-beginner.jpg',
    link: 'https://masterresellrights.at/cowa6s',
    category: 'Kurse'
  },
  {
    id: 'digital-success',
    title: 'Digital Success Mastery',
    description: 'Ein umfassender Kurs, der Ihnen zeigt, wie Sie erfolgreich digitale Produkte erstellen und vermarkten können.',
    image: '/bilder/produkte/digital-success.jpg',
    link: 'https://masterresellrights.at/vnjlvt',
    category: 'Kurse'
  },
  {
    id: 'instagram-growth',
    title: 'The Instagram Growth Blueprint',
    description: 'Ein detaillierter 3-Stunden-Videokurs, der Ihnen zeigt, wie Sie Ihr Instagram-Konto erfolgreich wachsen lassen können.',
    image: '/bilder/produkte/instagram-growth.jpg',
    link: 'https://masterresellrights.at/fmcfj9',
    category: 'Kurse'
  },
  {
    id: 'lifetime-access',
    title: 'Lifetime Access Stock Vid',
    description: 'Erhalten Sie lebenslangen Zugang zu einer umfangreichen Bibliothek von Stock Videos für Ihre Projekte.',
    image: '/bilder/produkte/lifetime-access.jpg',
    link: 'https://masterresellrights.at/0xgl4h',
    category: 'Videos'
  },
  {
    id: 'focus-workbook',
    title: 'One month of focus workbook',
    description: 'Ein praktisches Workbook, das Ihnen hilft, Ihre Ziele zu definieren und zu visualisieren.',
    image: '/bilder/produkte/focus-workbook.jpg',
    link: 'https://masterresellrights.at/sbvffi',
    category: 'Business'
  },
  {
    id: 'faceless-reels',
    title: 'Faceless Reels',
    description: 'Ein komplettes Paket für Faceless Reels mit Hooks, Covers und einem 30-Tage-Plan.',
    image: '/bilder/produkte/faceless-reels.jpg',
    link: 'https://masterresellrights.at/ffdu6f',
    category: 'Social Media'
  },
  {
    id: 'canva-2024',
    title: 'Canva for beginner',
    description: 'Ein aktueller Kurs, der Ihnen zeigt, wie Sie Canva im Jahr 2024 optimal nutzen können.',
    image: '/bilder/produkte/canva-2024.jpg',
    link: 'https://masterresellrights.at/Owaw4l',
    category: 'Kurse'
  },
  {
    id: 'faceless-marketing',
    title: 'How to Faceless Marketing',
    description: 'Lernen Sie, wie Sie eine erfolgreiche Faceless Marke auf Instagram aufbauen können.',
    image: '/bilder/produkte/faceless-marketing.jpg',
    link: 'https://masterresellrights.at/njuyfn',
    category: 'Social Media'
  },
  {
    id: 'instagram-strategy',
    title: 'Complete Strategy for Instagram Growth',
    description: 'Eine komplette Strategie für das Wachstum Ihres Instagram-Kontos mit MRR und PLR Rechten.',
    image: '/bilder/produkte/instagram-strategy.jpg',
    link: 'https://masterresellrights.at/2ic9ie',
    category: 'Social Media'
  },
  {
    id: 'faceless-planner',
    title: 'Faceless Account Planner',
    description: 'Ein praktischer Planner für die Planung Ihrer Faceless Content Strategie.',
    image: '/bilder/produkte/faceless-planner.jpg',
    link: 'https://masterresellrights.at/ppd3j7',
    category: 'Social Media'
  },
  {
    id: 'faceless-stories',
    title: 'Faceless Stories that sell',
    description: 'Lernen Sie, wie Sie verkaufsstarke Faceless Stories erstellen können.',
    image: '/bilder/produkte/faceless-stories.jpg',
    link: 'https://masterresellrights.at/ag2pqk',
    category: 'Social Media'
  },
  {
    id: 'content-planner',
    title: 'Plan',
    description: 'Ein einfacher und effektiver Content Planner für Ihre Social Media Kanäle.',
    image: '/bilder/produkte/content-planner.jpg',
    link: 'https://masterresellrights.at/igwrq3',
    category: 'Social Media'
  },
  {
    id: 'social-media-content',
    title: '3 Months of Social Media Content',
    description: 'Drei Monate vorgefertigter Social Media Content mit MRR und PLR Rechten.',
    image: '/bilder/produkte/social-media-content.jpg',
    link: 'https://masterresellrights.at/06ycwc',
    category: 'Social Media'
  },
  {
    id: 'dsm-starter',
    title: 'DSM Starter',
    description: 'Das Starter Package für Digital Success Mastery mit allen Grundlagen für den Einstieg.',
    image: '/bilder/produkte/dsm-starter.jpg',
    link: 'https://masterresellrights.at/jxpp1m',
    category: 'Business'
  }
]

export default function Shop() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-amber-50 pt-16">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-amber-900 mb-8">Shop</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Link href={`/shop/${product.id}`} className="block">
                <div className="relative h-96 overflow-hidden rounded-lg">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain p-4"
                    priority
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-amber-900 mb-2 hover:text-amber-700">
                    {product.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-amber-600">{product.category}</span>
                    <a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                      onClick={(e) => e.stopPropagation()}
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
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 