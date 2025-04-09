import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

const content = {
  de: {
    title: 'Master Resell Rights: Der ultimative Guide für digitale Produkte',
    introduction: 'In der digitalen Welt gibt es zahlreiche Möglichkeiten, passives Einkommen zu generieren. Eine der effektivsten Methoden ist der Verkauf von Produkten mit Master Resell Rights (MRR). In diesem umfassenden Guide erfahren Sie alles, was Sie über MRR wissen müssen.',
    sections: [
      {
        title: 'Was sind Master Resell Rights?',
        content: 'Master Resell Rights sind eine spezielle Lizenzform, die es Ihnen erlaubt, digitale Produkte nicht nur zu verkaufen, sondern auch die Weiterverkaufsrechte an Ihre Kunden weiterzugeben. Dies unterscheidet sich von normalen Resell Rights, bei denen Sie nur das Produkt selbst verkaufen dürfen.'
      },
      {
        title: 'Vorteile von MRR-Produkten',
        content: 'Der größte Vorteil von MRR-Produkten liegt in ihrer Skalierbarkeit. Sie können nicht nur das Produkt selbst verkaufen, sondern auch Ihren Kunden die Möglichkeit bieten, es weiterzuverkaufen. Dies schafft eine zusätzliche Einnahmequelle und erhöht den Wert des Produkts für Ihre Kunden.'
      },
      {
        title: 'Wie Sie mit MRR erfolgreich werden',
        content: 'Der Schlüssel zum Erfolg mit MRR-Produkten liegt in der richtigen Auswahl der Produkte und der effektiven Vermarktung. Wählen Sie Produkte aus, die einen echten Mehrwert bieten und für die es eine stabile Nachfrage gibt.'
      }
    ],
    conclusion: 'Master Resell Rights bieten eine einzigartige Möglichkeit, passives Einkommen zu generieren. Mit der richtigen Strategie und hochwertigen Produkten können Sie ein erfolgreiches Online-Geschäft aufbauen.',
    relatedProducts: [
      {
        title: 'Master Resell Rights Bundle',
        description: 'Starten Sie Ihr digitales Geschäft mit unserem umfassenden MRR-Bundle.',
        link: '/shop/master-resell-rights'
      }
    ]
  },
  en: {
    title: 'Master Resell Rights: The Ultimate Guide for Digital Products',
    introduction: 'In the digital world, there are numerous ways to generate passive income. One of the most effective methods is selling products with Master Resell Rights (MRR). In this comprehensive guide, you will learn everything you need to know about MRR.',
    sections: [
      {
        title: 'What are Master Resell Rights?',
        content: 'Master Resell Rights are a special license form that allows you not only to sell digital products but also to pass on the resale rights to your customers. This differs from regular Resell Rights, where you can only sell the product itself.'
      },
      {
        title: 'Benefits of MRR Products',
        content: 'The biggest advantage of MRR products lies in their scalability. You can not only sell the product itself but also give your customers the opportunity to resell it. This creates an additional source of income and increases the value of the product for your customers.'
      },
      {
        title: 'How to Succeed with MRR',
        content: 'The key to success with MRR products lies in the right product selection and effective marketing. Choose products that offer real value and have stable demand.'
      }
    ],
    conclusion: 'Master Resell Rights offer a unique opportunity to generate passive income. With the right strategy and high-quality products, you can build a successful online business.',
    relatedProducts: [
      {
        title: 'Master Resell Rights Bundle',
        description: 'Start your digital business with our comprehensive MRR bundle.',
        link: '/shop/master-resell-rights'
      }
    ]
  }
}

export default function MasterResellRightsPage() {
  const { language } = useLanguage()
  const langContent = content[language]

  return (
    <div className="container mx-auto px-4 py-8">
      <article className="max-w-3xl mx-auto">
        <div className="relative h-96 mb-8">
          <Image
            src="/bilder/blog/master-resell-rights.jpg"
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