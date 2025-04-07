'use client'

import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'

export default function MrrVsPlr() {
  const { t } = useLanguage()

  return (
    <div className="container mx-auto px-4 py-8">
      <article className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">MRR vs. PLR: Was ist der Unterschied?</h1>
        
        <div className="relative w-full h-96 mb-8">
          <Image
            src="/bilder/mrr.jpg"
            alt="MRR vs PLR Vergleich"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-4">
            In der digitalen Produktwelt gibt es verschiedene Lizenzmodelle. 
            Dieser Artikel erklärt die Unterschiede zwischen Master Resell Rights (MRR) 
            und Private Label Rights (PLR) und hilft Ihnen bei der Entscheidung, 
            welches Modell für Ihr Business am besten geeignet ist.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Master Resell Rights (MRR)</h2>
          <p>
            MRR-Produkte können weiterverkauft werden, aber der Käufer erhält keine Rechte, 
            den Inhalt zu verändern. Dies ist ideal für Händler, die fertige Produkte 
            ohne Änderungen weiterverkaufen möchten.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Private Label Rights (PLR)</h2>
          <p>
            PLR-Produkte bieten mehr Flexibilität. Sie können den Inhalt verändern, 
            umbenennen und als Ihr eigenes Produkt vermarkten. Dies ist perfekt für 
            Unternehmer, die ein Produkt an ihre Marke anpassen möchten.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Vor- und Nachteile</h2>
          <p>
            MRR ist einfacher zu handhaben, bietet aber weniger Flexibilität. 
            PLR erfordert mehr Arbeit, ermöglicht aber eine stärkere Markenbildung 
            und höhere Gewinnmargen.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Anwendungsbeispiele</h2>
          <p>
            MRR eignet sich gut für E-Books und Software, während PLR ideal für 
            Online-Kurse und Coaching-Materialien ist. Die Wahl hängt von Ihren 
            Geschäftszielen und Ressourcen ab.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Rechtliche Aspekte</h2>
          <p>
            Es ist wichtig, die Lizenzbedingungen genau zu lesen. 
            Manche MRR- und PLR-Lizenzen haben Einschränkungen, die Sie kennen sollten, 
            bevor Sie ein Produkt kaufen oder verkaufen.
          </p>
        </div>
      </article>
    </div>
  )
} 