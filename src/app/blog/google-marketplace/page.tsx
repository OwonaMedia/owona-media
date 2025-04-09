import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

const content = {
  de: {
    title: 'Der Google Marketplace im Jahr 2025',
    introduction: 'Der Google Marketplace entwickelt sich ständig weiter und bietet Unternehmen neue Möglichkeiten. In diesem Artikel werfen wir einen Blick in die Zukunft und zeigen Ihnen, wie Sie sich darauf vorbereiten können.',
    sections: [
      {
        title: 'Die Entwicklung des Google Marketplaces',
        content: 'Der Google Marketplace hat sich von einer einfachen Suchmaschine zu einem umfassenden Ökosystem entwickelt. Erfahren Sie, wie sich die Plattform in den letzten Jahren verändert hat und welche Trends sich abzeichnen.'
      },
      {
        title: 'Neue Funktionen und Möglichkeiten',
        content: 'Entdecken Sie die neuesten Funktionen des Google Marketplaces und wie Sie diese für Ihr Unternehmen nutzen können. Von erweiterten Suchfunktionen bis hin zu neuen Werbeformaten.'
      },
      {
        title: 'Strategien für 2025',
        content: 'Lernen Sie, wie Sie Ihre Marketingstrategie an die zukünftigen Entwicklungen des Google Marketplaces anpassen können. Mit den richtigen Vorbereitungen sind Sie für die Zukunft gewappnet.'
      }
    ],
    conclusion: 'Der Google Marketplace wird auch 2025 eine zentrale Rolle im digitalen Marketing spielen. Mit den richtigen Strategien und Vorbereitungen können Sie die neuen Möglichkeiten optimal nutzen.',
    relatedProducts: [
      {
        title: 'Digital Marketing Guide',
        description: 'Der komplette Guide für erfolgreiches Digital Marketing.',
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
    introduction: 'The Google Marketplace is constantly evolving and offering new opportunities for businesses. In this article, we take a look into the future and show you how to prepare for it.',
    sections: [
      {
        title: 'The Evolution of the Google Marketplace',
        content: 'The Google Marketplace has evolved from a simple search engine to a comprehensive ecosystem. Learn how the platform has changed in recent years and what trends are emerging.'
      },
      {
        title: 'New Features and Opportunities',
        content: 'Discover the latest features of the Google Marketplace and how you can use them for your business. From advanced search functions to new advertising formats.'
      },
      {
        title: 'Strategies for 2025',
        content: 'Learn how to adapt your marketing strategy to the future developments of the Google Marketplace. With the right preparations, you are ready for the future.'
      }
    ],
    conclusion: 'The Google Marketplace will continue to play a central role in digital marketing in 2025. With the right strategies and preparations, you can optimally leverage the new opportunities.',
    relatedProducts: [
      {
        title: 'Digital Marketing Guide',
        description: 'The complete guide for successful digital marketing.',
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