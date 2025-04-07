'use client'

import { useLanguage } from '@/context/LanguageContext'

export default function AGBPage() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen bg-amber-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-amber-900 mb-8">Allgemeine Geschäftsbedingungen und Kundeninformationen</h1>
          
          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-bold text-amber-900 mb-4">I. Allgemeine Geschäftsbedingungen</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-amber-900 mb-3">§ 1 Grundlegende Bestimmungen</h3>
                  <p className="mb-2"><strong>(1)</strong> Die nachstehenden Geschäftsbedingungen gelten für Verträge, die Sie mit uns als Anbieter (<strong>Sandra Owona</strong>) über die Internetseite Owona.de schließen. Soweit nicht anders vereinbart, wird der Einbeziehung gegebenenfalls von Ihnen verwendeter eigener Bedingungen widersprochen.</p>
                  <p><strong>(2)</strong> Verbraucher im Sinne der nachstehenden Regelungen ist jede natürliche Person, die ein Rechtsgeschäft zu Zwecken abschließt, die überwiegend weder ihrer gewerblichen noch ihrer selbständigen beruflichen Tätigkeit zugerechnet werden kann. Unternehmer ist jede natürliche oder juristische Person oder eine rechtsfähige Personengesellschaft, die bei Abschluss eines Rechtsgeschäfts in Ausübung ihrer selbständigen beruflichen oder gewerblichen Tätigkeit handelt.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-amber-900 mb-3">§ 2 Zustandekommen des Vertrages</h3>
                  <p className="mb-2"><strong>(1)</strong> Gegenstand des Vertrages ist der Verkauf von Waren einschließlich digitaler Inhalte (Daten, die in digitaler Form erstellt und bereitgestellt werden).</p>
                  <p className="mb-2"><strong>(2)</strong> Bereits mit dem Einstellen des jeweiligen Produkts auf unserer Internetseite unterbreiten wir Ihnen ein verbindliches Angebot zum Abschluss eines Vertrages über das Online-Warenkorbsystem zu den in der Artikelbeschreibung angegebenen Bedingungen.</p>
                  <p className="mb-2"><strong>(3)</strong> Der Vertrag kommt über das Online-Warenkorbsystem wie folgt zustande:</p>
                  <p className="mb-2">Die zum Kauf beabsichtigten Waren werden im "Warenkorb" abgelegt. Über die entsprechende Schaltfläche in der Navigationsleiste können Sie den "Warenkorb" aufrufen und dort jederzeit Änderungen vornehmen.</p>
                  <p className="mb-2">Nach Anklicken der Schaltfläche "Kasse" oder "Weiter zur Bestellung" und der Eingabe der persönlichen Daten sowie der Zahlungs- und Versandbedingungen werden Ihnen abschließend die Bestelldaten als Bestellübersicht angezeigt.</p>
                  <p className="mb-2">Mit dem Absenden der Bestellung über die entsprechende Schaltfläche erklären Sie rechtsverbindlich die Annahme des Angebotes, wodurch der Vertrag zustande kommt.</p>
                </div>

                {/* Weitere Paragraphen hier... */}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-amber-900 mb-4">II. Kundeninformationen</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-amber-900 mb-3">1. Identität des Verkäufers</h3>
                  <p className="mb-1">Sandra Owona</p>
                  <p className="mb-1">Ahornstrasse 52</p>
                  <p className="mb-1">68542 Heddesheim</p>
                  <p className="mb-1">Deutschland</p>
                  <p className="mb-1">Telefon: +4962039375214</p>
                  <p className="mb-1">E-Mail: shop@owona.de</p>
                </div>

                {/* Weitere Kundeninformationen hier... */}
              </div>
            </section>

            <section className="text-sm text-gray-600">
              <p>Diese AGB und Kundeninformationen wurden von den auf IT-Recht spezialisierten Juristen des Händlerbundes erstellt und werden permanent auf Rechtskonformität geprüft.</p>
              <p className="mt-4">Letzte Aktualisierung: 22.10.2024</p>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
} 