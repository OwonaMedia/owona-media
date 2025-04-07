'use client'

import { useLanguage } from '@/context/LanguageContext'

export default function ImpressumPage() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen bg-amber-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-amber-900 mb-8">Impressum</h1>
          
          <div className="space-y-6">
            <section>
              <h2 className="text-lg font-semibold text-amber-900 mb-4">Gesetzliche Anbieterkennung:</h2>
              <p className="mb-1 font-semibold">Sandra Owona</p>
              <p className="mb-1 font-semibold">Owona Media Agency</p>
              <p className="mb-1 font-semibold">Ahornstrasse 52</p>
              <p className="mb-1 font-semibold">68542 Heddesheim</p>
              <p className="mb-1 font-semibold">Deutschland</p>
              <p className="mb-1 font-semibold">Telefon: +4962039375214</p>
              <p className="mb-1 font-semibold">E-Mail: shop@owona.de</p>
              <p className="mb-1 font-semibold">Whatsapp: 06203 9375214</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-amber-900 mb-4">Inhaltlich Verantwortlicher gemäß § 18 Abs. 2 MStV:</h2>
              <div className="mb-4">
                <p className="mb-1">Herr Salomon Firmin Owona</p>
                <p className="mb-1">Ahornstr. 52</p>
                <p className="mb-1">68542 Heddesheim</p>
                <p className="mb-1">Deutschland</p>
              </div>
              <div>
                <p className="mb-1">Frau Sandra Owona</p>
                <p className="mb-1">Ahornstr. 52</p>
                <p className="mb-1">68542 Heddesheim</p>
                <p className="mb-1">Deutschland</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-amber-900 mb-4">Zuständige Aufsichtsbehörde für audiovisuelle Mediendienste:</h2>
              <p className="mb-1">Landesanstalt für Kommunikation Baden-Württemberg (LFK)</p>
              <p className="mb-1">Reinsburgstraße 27</p>
              <p className="mb-1">70178 Stuttgart</p>
              <p className="mb-1">Internet: <a href="https://www.lfk.de/" className="text-amber-600 hover:text-amber-700" target="_blank" rel="noopener noreferrer">https://www.lfk.de/</a></p>
            </section>

            <section>
              <p className="mb-4">Aufgrund des Kleinunternehmerstatus wird in der Rechnung keine MwSt. ausgewiesen (umsatzsteuerfrei gem. § 19 Abs. 1 UStG).</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-amber-900 mb-4">Alternative Streitbeilegung:</h2>
              <p className="mb-4">Die Europäische Kommission stellt eine Plattform für die außergerichtliche Online-Streitbeilegung (OS-Plattform) bereit, aufrufbar unter <a href="https://ec.europa.eu/consumers/odr" className="text-amber-600 hover:text-amber-700" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a>.</p>
              <p>Wir sind bereit, aber nicht verpflichtet, an Streitbeilegungsverfahren vor Verbraucherschlichtungsstellen teilzunehmen.</p>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
} 