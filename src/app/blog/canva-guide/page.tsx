import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

const content = {
  de: {
    title: 'Canva für Anfänger: Der komplette Guide',
    introduction: 'Canva hat die Welt des Grafikdesigns revolutioniert. Mit diesem Guide lernen Sie, wie Sie auch ohne Design-Erfahrung professionelle Grafiken erstellen können.',
    sections: [
      {
        title: 'Was ist Canva?',
        content: 'Canva ist ein benutzerfreundliches Online-Design-Tool, das es jedem ermöglicht, professionelle Grafiken zu erstellen. Von Social Media Posts über Präsentationen bis hin zu Flyern - Canva bietet Vorlagen für fast jeden Zweck.'
      },
      {
        title: 'Die wichtigsten Funktionen',
        content: 'Entdecken Sie die wichtigsten Funktionen von Canva: Vorlagen, Drag & Drop-Editor, Foto-Bearbeitung, Text-Tools und vieles mehr. Lernen Sie, wie Sie diese Werkzeuge effektiv nutzen können.'
      },
      {
        title: 'Tipps für bessere Designs',
        content: 'Erfahren Sie, wie Sie mit einfachen Design-Prinzipien wie Kontrast, Ausrichtung und Weißraum professionell aussehende Grafiken erstellen. Diese Grundlagen machen den Unterschied zwischen Amateur- und Profi-Designs.'
      }
    ],
    conclusion: 'Mit Canva können Sie Ihre kreativen Ideen zum Leben erwecken, ohne teure Design-Software oder jahrelange Erfahrung zu benötigen. Dieser Guide ist Ihr erster Schritt zu professionellen Designs.',
    relatedProducts: [
      {
        title: 'Canva für Anfänger Mini-Kurs',
        description: 'Lernen Sie Canva von Grund auf mit unserem kompakten Mini-Kurs.',
        link: '/shop/canva-mini-kurs'
      },
      {
        title: 'Social Media Content Bundle',
        description: 'Professionelle Vorlagen für Ihre Social Media Kanäle.',
        link: '/shop/social-media-bundle'
      }
    ]
  },
  en: {
    title: 'Canva for Beginners: The Complete Guide',
    introduction: 'Canva has revolutionized the world of graphic design. With this guide, you\'ll learn how to create professional graphics even without design experience.',
    sections: [
      {
        title: 'What is Canva?',
        content: 'Canva is a user-friendly online design tool that enables anyone to create professional graphics. From social media posts to presentations and flyers - Canva offers templates for almost every purpose.'
      },
      {
        title: 'Key Features',
        content: 'Discover Canva\'s key features: templates, drag & drop editor, photo editing, text tools, and much more. Learn how to use these tools effectively.'
      },
      {
        title: 'Tips for Better Designs',
        content: 'Learn how to create professional-looking graphics using simple design principles like contrast, alignment, and white space. These basics make the difference between amateur and professional designs.'
      }
    ],
    conclusion: 'With Canva, you can bring your creative ideas to life without expensive design software or years of experience. This guide is your first step to professional designs.',
    relatedProducts: [
      {
        title: 'Canva for Beginners Mini-Course',
        description: 'Learn Canva from scratch with our compact mini-course.',
        link: '/shop/canva-mini-course'
      },
      {
        title: 'Social Media Content Bundle',
        description: 'Professional templates for your social media channels.',
        link: '/shop/social-media-bundle'
      }
    ]
  }
}

export default function CanvaGuidePage() {
  const { language } = useLanguage()
  const langContent = content[language]

  return (
    <div className="container mx-auto px-4 py-8">
      <article className="max-w-3xl mx-auto">
        <div className="relative h-96 mb-8">
          <Image
            src="/bilder/blog/canva-guide.jpg"
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