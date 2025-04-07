'use client'

import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/config/translations'

export default function FilmproduktionService() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Filmproduktion</h1>
      
      <div className="mb-8">
        <p className="text-lg mb-4">
          Ob Imagefilm, Werbespot, Produktclip oder Recruiting-Video – wir sind Ihre Profis für Filmproduktion.
        </p>
        <p className="mb-4">
          Von der ersten Idee über die Konzeption und Produktion bis hin zur Vermarktung bieten wir Ihnen ein Rundum-sorglos-Paket. Bereits beim ersten Entwurf haben wir die Schritte nach der Veröffentlichung im Blick, um Ihren Erfolg sichtbar und messbar zu machen.
        </p>
        <p className="mb-4">
          Mit mehr als 15 Jahren Erfahrung wissen wir, wie bewegte Bilder Ihre Zielgruppen erreichen. Wir stehen für effektive Filmproduktionen und deren erfolgreiche Vermarktung.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Unser bewährtes Vorgehen</h2>
        <p className="mb-6">
          Ganz gleich, ob Sie die Bindung zu Ihren Kunden stärken oder die Bekanntheit Ihrer Marke erhöhen möchten – wir als erfahrene Filmproduktionsagentur stehen Ihnen zur Seite. Unser bewährtes Vorgehen gliedert sich in fünf klare Schritte:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">1. Ziel definieren</h3>
            <p>Im Erstgespräch legen wir gemeinsam die Ziele Ihres Films fest. Diese dienen als Leitfaden für den gesamten Filmproduktionsprozess.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">2. Zielgruppenanalyse</h3>
            <p>Die Zielgruppe ist genauso wichtig wie das Ziel des Films. Gemeinsam erarbeiten wir, für welches Publikum der Film produziert wird.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">3. Konzeption</h3>
            <p>Ein erfolgreicher Film beginnt mit einem durchdachten Konzept. Zusammen mit Ihnen entwickeln wir eine Konzeption, die Ihre Vorstellungen perfekt widerspiegelt.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">4. Dreh & Schnitt</h3>
            <p>Unser engagiertes Team verwandelt Ihre Vision in die Realität. In diesem Schritt entsteht Ihr einzigartiger Film – produziert mit Leidenschaft und Präzision.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">5. Erfolgreiche Werbung</h3>
            <p>Nach der Fertigstellung geht es erst richtig los! Wir übernehmen die Vermarktung Ihres Videos und sorgen dafür, dass Ihr Film ein voller Erfolg für Ihr Unternehmen wird.</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div>
          <img 
            src="/images/services/web-design.jpg" 
            alt="Filmproduktion Service" 
            className="rounded-lg shadow-lg w-full"
          />
        </div>
        <div>
          <img 
            src="/images/services/content-marketing.jpg" 
            alt="Filmproduktion Service" 
            className="rounded-lg shadow-lg w-full"
          />
        </div>
        <div>
          <img 
            src="/images/services/seo.jpg" 
            alt="Filmproduktion Service" 
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </div>
    </div>
  )
} 