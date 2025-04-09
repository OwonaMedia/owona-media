import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

const content = {
  de: {
    title: 'Die Macht der Willkommen-E-Mail',
    introduction: 'Die Willkommen-E-Mail ist oft der erste Kontakt mit neuen Kunden. In diesem Artikel erfahren Sie, wie Sie diese Chance optimal nutzen und Ihre Kunden von Beginn an begeistern können.',
    sections: [
      {
        title: 'Die Bedeutung der Willkommen-E-Mail',
        content: 'Die Willkommen-E-Mail ist mehr als nur eine Bestätigung. Sie ist Ihre Chance, einen positiven ersten Eindruck zu hinterlassen und die Grundlage für eine langfristige Kundenbeziehung zu legen.'
      },
      {
        title: 'Elemente einer erfolgreichen Willkommen-E-Mail',
        content: 'Erfahren Sie, welche Elemente eine erfolgreiche Willkommen-E-Mail ausmachen: Persönliche Ansprache, klare Wertversprechen, nächste Schritte und ein starker Call-to-Action.'
      },
      {
        title: 'Best Practices und Beispiele',
        content: 'Entdecken Sie bewährte Muster und Beispiele für erfolgreiche Willkommen-E-Mails. Lernen Sie von den Besten und adaptieren Sie deren Strategien für Ihr Unternehmen.'
      }
    ],
    conclusion: 'Eine gut gestaltete Willkommen-E-Mail kann den Unterschied zwischen einem einmaligen und einem treuen Kunden ausmachen. Nutzen Sie diese Chance, um Ihre Kunden von Beginn an zu begeistern.',
    relatedProducts: [
      {
        title: 'E-Mail Marketing Guide',
        description: 'Der komplette Guide für erfolgreiches E-Mail Marketing.',
        link: '/shop/email-marketing-guide'
      },
      {
        title: 'Digital Marketing Bundle',
        description: 'Alles, was Sie für erfolgreiches Digital Marketing benötigen.',
        link: '/shop/digital-marketing-bundle'
      }
    ]
  },
  en: {
    title: 'The Power of Welcome Emails',
    introduction: 'The welcome email is often the first contact with new customers. In this article, you will learn how to optimally use this opportunity and impress your customers from the start.',
    sections: [
      {
        title: 'The Importance of Welcome Emails',
        content: 'The welcome email is more than just a confirmation. It is your chance to make a positive first impression and lay the foundation for a long-term customer relationship.'
      },
      {
        title: 'Elements of a Successful Welcome Email',
        content: 'Learn which elements make a successful welcome email: personal address, clear value propositions, next steps, and a strong call-to-action.'
      },
      {
        title: 'Best Practices and Examples',
        content: 'Discover proven patterns and examples of successful welcome emails. Learn from the best and adapt their strategies for your business.'
      }
    ],
    conclusion: 'A well-designed welcome email can make the difference between a one-time and a loyal customer. Use this opportunity to impress your customers from the start.',
    relatedProducts: [
      {
        title: 'Email Marketing Guide',
        description: 'The complete guide for successful email marketing.',
        link: '/shop/email-marketing-guide'
      },
      {
        title: 'Digital Marketing Bundle',
        description: 'Everything you need for successful digital marketing.',
        link: '/shop/digital-marketing-bundle'
      }
    ]
  }
}

export default function WelcomeEmailPage() {
  const { language } = useLanguage()
  const langContent = content[language]

  return (
    <div className="container mx-auto px-4 py-8">
      <article className="max-w-3xl mx-auto">
        <div className="relative h-96 mb-8">
          <Image
            src="/bilder/blog/welcome-email.jpg"
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