import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

const content = {
  de: {
    title: 'Faceless Marketing: Erfolgreich ohne Gesicht',
    introduction: 'In der heutigen digitalen Welt müssen Sie nicht mehr Ihr Gesicht zeigen, um erfolgreich zu vermarkten. Faceless Marketing eröffnet neue Möglichkeiten für Introvertierte und Privatsphäre-bewusste Unternehmer.',
    sections: [
      {
        title: 'Was ist Faceless Marketing?',
        content: 'Faceless Marketing ist eine Strategie, bei der Sie Ihre Marke oder Ihr Unternehmen präsentieren, ohne Ihr eigenes Gesicht zu zeigen. Stattdessen nutzen Sie andere visuelle Elemente wie Animationen, Stock-Fotos oder Produktbilder.'
      },
      {
        title: 'Vorteile des Faceless Marketings',
        content: 'Die größten Vorteile sind die Skalierbarkeit und die Möglichkeit, Ihre Privatsphäre zu wahren. Sie können Content erstellen, der nicht an Ihre Person gebunden ist, was die Übertragbarkeit und den Weiterverkauf Ihres Geschäfts erleichtert.'
      },
      {
        title: 'Erfolgreiche Faceless Marketing Strategien',
        content: 'Der Schlüssel zum Erfolg liegt in der Qualität Ihres Contents und der klaren Botschaft. Nutzen Sie hochwertige Grafiken, professionelle Texte und eine konsistente Markenidentität.'
      }
    ],
    conclusion: 'Faceless Marketing bietet eine einzigartige Chance, ein erfolgreiches Online-Geschäft aufzubauen, ohne Ihre Privatsphäre zu opfern. Mit der richtigen Strategie können Sie eine starke Marke aufbauen, die unabhängig von Ihrer Person funktioniert.',
    relatedProducts: [
      {
        title: 'Faceless Reels Guide',
        description: 'Lernen Sie, wie Sie erfolgreiche Reels ohne Gesicht erstellen.',
        link: '/shop/faceless-reels-guide'
      },
      {
        title: 'Digital Marketing Guide',
        description: 'Der komplette Guide für erfolgreiches Digital Marketing.',
        link: '/shop/digital-marketing-guide'
      }
    ]
  },
  en: {
    title: 'Faceless Marketing: Succeed Without Showing Your Face',
    introduction: 'In today\'s digital world, you don\'t need to show your face to market successfully. Faceless Marketing opens up new possibilities for introverts and privacy-conscious entrepreneurs.',
    sections: [
      {
        title: 'What is Faceless Marketing?',
        content: 'Faceless Marketing is a strategy where you present your brand or business without showing your own face. Instead, you use other visual elements like animations, stock photos, or product images.'
      },
      {
        title: 'Benefits of Faceless Marketing',
        content: 'The biggest advantages are scalability and the ability to maintain your privacy. You can create content that isn\'t tied to your person, making it easier to transfer and sell your business.'
      },
      {
        title: 'Successful Faceless Marketing Strategies',
        content: 'The key to success lies in the quality of your content and clear messaging. Use high-quality graphics, professional text, and a consistent brand identity.'
      }
    ],
    conclusion: 'Faceless Marketing offers a unique opportunity to build a successful online business without sacrificing your privacy. With the right strategy, you can build a strong brand that works independently of your person.',
    relatedProducts: [
      {
        title: 'Faceless Reels Guide',
        description: 'Learn how to create successful Reels without showing your face.',
        link: '/shop/faceless-reels-guide'
      },
      {
        title: 'Digital Marketing Guide',
        description: 'The complete guide for successful Digital Marketing.',
        link: '/shop/digital-marketing-guide'
      }
    ]
  }
}

export default function FacelessMarketingPage() {
  const { language } = useLanguage()
  const langContent = content[language]

  return (
    <div className="container mx-auto px-4 py-8">
      <article className="max-w-3xl mx-auto">
        <div className="relative h-96 mb-8">
          <Image
            src="/bilder/blog/faceless-marketing.jpg"
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