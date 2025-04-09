import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

const content = {
  de: {
    title: 'Der perfekte Titel für Instagram',
    introduction: 'Ein guter Titel kann den Unterschied zwischen einem erfolgreichen und einem übersehenen Instagram-Post ausmachen. In diesem Artikel lernen Sie, wie Sie die perfekten Titel erstellen, die Aufmerksamkeit erregen und Engagement generieren.',
    sections: [
      {
        title: 'Die Bedeutung eines guten Titels',
        content: 'Der Titel ist oft das Erste, was Nutzer von Ihrem Post sehen. Er entscheidet darüber, ob jemand weiterliest oder weiterscrollt. Ein guter Titel weckt Neugier und verspricht Mehrwert.'
      },
      {
        title: 'Elemente eines erfolgreichen Titels',
        content: 'Erfahren Sie, welche Elemente einen erfolgreichen Titel ausmachen: Klarheit, Relevanz, Emotionen und ein klarer Call-to-Action. Lernen Sie, wie Sie diese Elemente effektiv kombinieren.'
      },
      {
        title: 'Titel-Templates und Beispiele',
        content: 'Entdecken Sie bewährte Titel-Templates und Beispiele, die Sie für Ihre eigenen Posts adaptieren können. Von Fragen über Zahlen bis hin zu emotionalen Appellen.'
      }
    ],
    conclusion: 'Ein guter Titel ist der Schlüssel zu erfolgreichen Instagram-Posts. Mit den richtigen Techniken und etwas Übung können Sie Titel erstellen, die Ihre Zielgruppe ansprechen und Engagement generieren.',
    relatedProducts: [
      {
        title: 'Instagram Marketing Guide',
        description: 'Der komplette Guide für erfolgreiches Instagram Marketing.',
        link: '/shop/instagram-guide'
      },
      {
        title: 'Social Media Content Bundle',
        description: 'Professionelle Vorlagen für Ihre Social Media Kanäle.',
        link: '/shop/social-media-bundle'
      }
    ]
  },
  en: {
    title: 'The Perfect Instagram Title',
    introduction: 'A good title can make the difference between a successful and an overlooked Instagram post. In this article, you will learn how to create perfect titles that grab attention and generate engagement.',
    sections: [
      {
        title: 'The Importance of a Good Title',
        content: 'The title is often the first thing users see from your post. It decides whether someone reads on or scrolls on. A good title arouses curiosity and promises added value.'
      },
      {
        title: 'Elements of a Successful Title',
        content: 'Learn which elements make a successful title: clarity, relevance, emotions, and a clear call-to-action. Learn how to effectively combine these elements.'
      },
      {
        title: 'Title Templates and Examples',
        content: 'Discover proven title templates and examples that you can adapt for your own posts. From questions to numbers to emotional appeals.'
      }
    ],
    conclusion: 'A good title is the key to successful Instagram posts. With the right techniques and some practice, you can create titles that appeal to your target audience and generate engagement.',
    relatedProducts: [
      {
        title: 'Instagram Marketing Guide',
        description: 'The complete guide for successful Instagram marketing.',
        link: '/shop/instagram-guide'
      },
      {
        title: 'Social Media Content Bundle',
        description: 'Professional templates for your social media channels.',
        link: '/shop/social-media-bundle'
      }
    ]
  }
}

export default function InstagramTitlesPage() {
  const { language } = useLanguage()
  const langContent = content[language]

  return (
    <div className="container mx-auto px-4 py-8">
      <article className="max-w-3xl mx-auto">
        <div className="relative h-96 mb-8">
          <Image
            src="/bilder/blog/instagram-titles.jpg"
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