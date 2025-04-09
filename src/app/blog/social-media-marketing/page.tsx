import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

const content = {
  de: {
    title: 'Chancen des Social-Media-Marketings nutzen',
    introduction: 'Social Media Marketing bietet Unternehmen unzählige Möglichkeiten, ihre Zielgruppe zu erreichen und zu engagieren. In diesem Artikel erfahren Sie, wie Sie diese Chancen optimal nutzen können.',
    sections: [
      {
        title: 'Die Bedeutung von Social Media Marketing',
        content: 'Social Media Marketing ist heute ein unverzichtbarer Bestandteil jeder Marketingstrategie. Es ermöglicht direkte Interaktion mit Ihrer Zielgruppe und bietet zahlreiche Möglichkeiten zur Markenbildung.'
      },
      {
        title: 'Die richtige Plattform wählen',
        content: 'Nicht jede Social Media Plattform ist für jedes Unternehmen geeignet. Lernen Sie, wie Sie die richtigen Plattformen für Ihr Unternehmen auswählen und dort effektiv präsent sind.'
      },
      {
        title: 'Content-Strategie entwickeln',
        content: 'Eine erfolgreiche Social Media Präsenz erfordert eine durchdachte Content-Strategie. Erfahren Sie, wie Sie Content erstellen, der Ihre Zielgruppe anspricht und Engagement generiert.'
      }
    ],
    conclusion: 'Social Media Marketing bietet unendliche Möglichkeiten für Unternehmen. Mit der richtigen Strategie können Sie Ihre Marke stärken, neue Kunden gewinnen und langfristige Beziehungen aufbauen.',
    relatedProducts: [
      {
        title: 'Social Media Content Bundle',
        description: 'Professionelle Vorlagen für Ihre Social Media Kanäle.',
        link: '/shop/social-media-bundle'
      },
      {
        title: 'Instagram Marketing Guide',
        description: 'Der komplette Guide für erfolgreiches Instagram Marketing.',
        link: '/shop/instagram-guide'
      }
    ]
  },
  en: {
    title: 'Leveraging Social Media Marketing Opportunities',
    introduction: 'Social Media Marketing offers companies countless opportunities to reach and engage their target audience. In this article, you will learn how to optimally leverage these opportunities.',
    sections: [
      {
        title: 'The Importance of Social Media Marketing',
        content: 'Social Media Marketing is now an essential part of every marketing strategy. It enables direct interaction with your target audience and offers numerous opportunities for brand building.'
      },
      {
        title: 'Choosing the Right Platform',
        content: 'Not every social media platform is suitable for every business. Learn how to select the right platforms for your business and be effective there.'
      },
      {
        title: 'Developing a Content Strategy',
        content: 'A successful social media presence requires a well-thought-out content strategy. Learn how to create content that appeals to your target audience and generates engagement.'
      }
    ],
    conclusion: 'Social Media Marketing offers endless opportunities for businesses. With the right strategy, you can strengthen your brand, gain new customers, and build long-term relationships.',
    relatedProducts: [
      {
        title: 'Social Media Content Bundle',
        description: 'Professional templates for your social media channels.',
        link: '/shop/social-media-bundle'
      },
      {
        title: 'Instagram Marketing Guide',
        description: 'The complete guide for successful Instagram marketing.',
        link: '/shop/instagram-guide'
      }
    ]
  }
}

export default function SocialMediaMarketingPage() {
  const { language } = useLanguage()
  const langContent = content[language]

  return (
    <div className="container mx-auto px-4 py-8">
      <article className="max-w-3xl mx-auto">
        <div className="relative h-96 mb-8">
          <Image
            src="/bilder/blog/social-media-marketing.jpg"
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