import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

const content = {
  de: {
    title: 'Der Google Marketplace im Jahr 2025',
    introduction: 'Der Google Marketplace entwickelt sich ständig weiter. In diesem Artikel erfahren Sie, welche Trends und Möglichkeiten sich für Unternehmen im Jahr 2025 ergeben werden.',
    sections: [
      {
        title: 'Die Entwicklung des Google Marketplace',
        content: 'Von einer einfachen Suchmaschine zu einem umfassenden Ökosystem - der Google Marketplace hat sich zu einem zentralen Hub für digitale Geschäfte entwickelt.'
      },
      {
        title: 'Neue Funktionen und Möglichkeiten',
        content: 'Entdecken Sie die neuesten Funktionen des Google Marketplace: Erweiterte Suchfunktionen, KI-gestützte Empfehlungen und verbesserte Integration mit anderen Google-Diensten.'
      },
      {
        title: 'Strategien für die Zukunft',
        content: 'Lernen Sie, wie Sie Ihre Marketingstrategien an die zukünftigen Entwicklungen anpassen können, um im Google Marketplace erfolgreich zu sein.'
      }
    ],
    conclusion: 'Der Google Marketplace wird auch 2025 eine zentrale Rolle im digitalen Marketing spielen. Unternehmen, die die neuen Möglichkeiten nutzen, können sich einen entscheidenden Wettbewerbsvorteil verschaffen.',
    relatedProducts: [
      {
        title: 'Digital Marketing Guide',
        description: 'Der umfassende Guide für erfolgreiches Digital Marketing.',
        link: '/shop/digital-marketing-guide'
      },
      {
        title: 'Online Marketing Bundle',
        description: 'Alles, was Sie für erfolgreiches Online Marketing benötigen.',
        link: '/shop/online-marketing-bundle'
      }
    ]
  },
  en: {
    title: 'The Google Marketplace in 2025',
    introduction: 'The Google Marketplace is constantly evolving. In this article, you will learn about the trends and opportunities that will emerge for businesses in 2025.',
    sections: [
      {
        title: 'The Evolution of the Google Marketplace',
        content: 'From a simple search engine to a comprehensive ecosystem - the Google Marketplace has evolved into a central hub for digital business.'
      },
      {
        title: 'New Features and Opportunities',
        content: 'Discover the latest features of the Google Marketplace: Advanced search functions, AI-powered recommendations, and improved integration with other Google services.'
      },
      {
        title: 'Strategies for the Future',
        content: 'Learn how to adapt your marketing strategies to future developments to succeed in the Google Marketplace.'
      }
    ],
    conclusion: 'The Google Marketplace will continue to play a central role in digital marketing in 2025. Companies that leverage the new opportunities can gain a decisive competitive advantage.',
    relatedProducts: [
      {
        title: 'Digital Marketing Guide',
        description: 'The comprehensive guide for successful digital marketing.',
        link: '/shop/digital-marketing-guide'
      },
      {
        title: 'Online Marketing Bundle',
        description: 'Everything you need for successful online marketing.',
        link: '/shop/online-marketing-bundle'
      }
    ]
  }
}

export default function GoogleMarketplacePage() {
  const { language } = useLanguage()
  const langContent = content[language]

  return (
    <div className="container mx-auto px-4 py-8">
      <article className="max-w-3xl mx-auto">
        <div className="relative h-96 mb-8">
          <Image
            src="/bilder/blog/google-marketplace.jpg"
            alt={langContent.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        
        <h1 className="text-4xl font-bold mb-6">{langContent.title}</h1>
        
        <p className="text-xl mb-8">{langContent.introduction}</p>
        
        {langContent.sections.map((section, index) => (
          <section key={index} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
            <p className="text-gray-700">{section.content}</p>
          </section>
        ))}
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            {language === 'de' ? 'Verwandte Produkte' : 'Related Products'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {langContent.relatedProducts.map((product, index) => (
              <Link
                key={index}
                href={product.link}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="font-semibold mb-2">{product.title}</h3>
                <p className="text-gray-600">{product.description}</p>
              </Link>
            ))}
          </div>
        </section>
        
        <p className="text-lg italic">{langContent.conclusion}</p>
      </article>
    </div>
  )
} 