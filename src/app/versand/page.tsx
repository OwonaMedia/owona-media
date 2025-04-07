'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function VersandPage() {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-8 bg-white">
      <h1 className="text-3xl font-bold mb-6">Zahlung und Versand</h1>
      
      <div className="prose max-w-none">
        <p className="mb-6">Es gelten folgende Bedingungen:</p>

        <p className="mb-4">
          Die Lieferung erfolgt im Inland (Deutschland) und in die nachstehenden Länder: Schweiz, USA.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Versandkosten</h2>
        <p className="mb-4">(inklusive gesetzliche Mehrwertsteuer)</p>

        <h3 className="text-xl font-bold mt-6 mb-3">Lieferungen im Inland (Deutschland):</h3>
        <p className="mb-4">4,99 € Inlands-Versandkosten</p>

        <h3 className="text-xl font-bold mt-6 mb-3">Lieferungen ins Ausland:</h3>
        <p className="mb-4">14,99 € pauschal Auslands-Versandkosten</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Bereitstellung von digitalen Inhalten:</h2>
        <p className="mb-4">
          Für digitale Inhalte (Daten, die in digitaler Form erstellt und bereitgestellt werden) fallen keine Versandkosten an.
        </p>

        <p className="mb-4">
          Digitale Inhalte werden Ihnen als Datei per E-Mail innerhalb von 24 Stunden nach Vertragsschluss (bei vereinbarter Vorauszahlung nach dem Zeitpunkt Ihrer Zahlungsanweisung) übersandt.
        </p>

        <p className="mb-4">
          Digitale Inhalte werden Ihnen über einen per E-Mail mitgeteilten Link bereitgestellt.
          Die Versendung dieser E-Mail mit Zugangsdaten zur Bereitstellung der digitalen Inhalte erfolgt innerhalb von 24 Stunden nach Vertragsschluss (bei vereinbarter Vorauszahlung nach dem Zeitpunkt Ihrer Zahlungsanweisung).
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Lieferfristen</h2>
        <p className="mb-4">
          Soweit im jeweiligen Angebot keine andere Frist angegeben ist, erfolgt die Lieferung der Ware im Inland (Deutschland) innerhalb von 3 - 5 Tagen, bei Auslandslieferungen innerhalb von 5 - 10 Tagen nach Vertragsschluss (bei vereinbarter Vorauszahlung nach dem Zeitpunkt Ihrer Zahlungsanweisung).
        </p>

        <p className="mb-4">
          Beachten Sie, dass an Sonn- und Feiertagen keine Zustellung erfolgt.
        </p>

        <p className="mb-4">
          Haben Sie Artikel mit unterschiedlichen Lieferzeiten bestellt, wird die Ware in einer gemeinsamen Sendung versandt, sofern wir keine abweichenden Vereinbarungen mit Ihnen getroffen haben. Die Lieferzeit bestimmt sich in diesem Fall nach dem Artikel mit der längsten Lieferzeit den Sie bestellt haben.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Akzeptierte Zahlungsmöglichkeiten</h2>

        <h3 className="text-xl font-bold mt-6 mb-3">Über PayPal Checkout:</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Zahlung per PayPal</li>
          <li>Zahlung per PayPal Express</li>
          <li>Zahlung per Kreditkarte</li>
          <li>Zahlung per SEPA-Lastschrift</li>
          <li>Zahlung per "Später bezahlen"</li>
          <li>Zahlung per Ratenzahlung</li>
          <li>Zahlung per Rechnung (über Ratepay)</li>
          <li>Zahlung per Apple Pay</li>
          <li>Zahlung per Google Pay</li>
        </ul>

        <h3 className="text-xl font-bold mt-6 mb-3">Über PayPal:</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Zahlung per PayPal</li>
          <li>Zahlung per PayPal Express</li>
          <li>Zahlung per Kreditkarte</li>
          <li>Zahlung per SEPA-Lastschrift</li>
          <li>Zahlung per Ratenzahlung</li>
        </ul>

        <h3 className="text-xl font-bold mt-6 mb-3">Über Stripe:</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Zahlung per Sofortüberweisung (über Klarna)</li>
          <li>Zahlung per SEPA-Lastschrift (über Klarna)</li>
          <li>Zahlung per Kreditkarte (über Klarna)</li>
          <li>Zahlung per Rechnung (über Klarna)</li>
          <li>Zahlung per Ratenkauf (über Klarna)</li>
          <li>Zahlung per Kreditkarte</li>
          <li>Zahlung per Apple Pay</li>
          <li>Zahlung per Google Pay</li>
          <li>Zahlung per SEPA-Lastschrift</li>
          <li>Zahlung per Link</li>
        </ul>

        <p className="mt-8">
          Bei Fragen finden Sie unsere Kontaktdaten im Impressum.
        </p>

        <p className="mt-8 text-sm">
          Stand: März 2024
        </p>
      </div>
    </div>
  );
} 