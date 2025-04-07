'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function WiderrufDienstleistungenPage() {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-8 bg-white">
      <h1 className="text-3xl font-bold mb-6">Widerrufsrecht für Verbraucher</h1>
      <p className="mb-6">(Verbraucher ist jede natürliche Person, die ein Rechtsgeschäft zu Zwecken abschließt, die überwiegend weder ihrer gewerblichen noch ihrer selbstständigen beruflichen Tätigkeit zugerechnet werden können.)</p>
      
      <div className="prose max-w-none">
        <h2 className="text-2xl font-bold mt-8 mb-4">Widerrufsbelehrung</h2>

        <h3 className="text-xl font-bold mt-6 mb-3">Widerrufsrecht</h3>
        <p className="mb-4">
          Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.
          Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsabschlusses.
        </p>

        <p className="mb-4">
          Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (Sandra Owona, Ahornstraße 52, 68542 Heddesheim, Telefonnummer: +49 6203 9375214, E-Mail-Adresse: info@owona.de) mittels einer eindeutigen Erklärung (z.B. ein mit der Post versandter Brief oder eine E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren. Sie können dafür das beigefügte Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist.
        </p>

        <p className="mb-4">
          Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">Folgen des Widerrufs</h3>
        <p className="mb-4">
          Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass Sie eine andere Art der Lieferung als die von uns angebotene, günstigste Standardlieferung gewählt haben), unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist. Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden Ihnen wegen dieser Rückzahlung Entgelte berechnet.
        </p>

        <p className="mb-4">
          Haben Sie verlangt, dass die Dienstleistungen, für die der Vertrag die Zahlung eines Preises vorsieht, während der Widerrufsfrist beginnen soll, so haben Sie uns einen angemessenen Betrag zu zahlen, der dem Anteil der bis zu dem Zeitpunkt, zu dem Sie uns von der Ausübung des Widerrufsrechts hinsichtlich dieses Vertrags unterrichten, bereits erbrachten Dienstleistungen im Vergleich zum Gesamtumfang der im Vertrag vorgesehenen Dienstleistungen entspricht.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">Ausschluss- bzw. Erlöschensgründe</h3>
        <p className="mb-4">
          Das Widerrufsrecht besteht nicht bei Verträgen zur Erbringung von Dienstleistungen im Zusammenhang mit Freizeitbetätigungen, wenn der Vertrag für die Erbringung einen spezifischen Termin oder Zeitraum vorsieht.
        </p>

        <p className="mb-4">
          Das Widerrufsrecht erlischt bei einem Vertrag über die Erbringung von Dienstleistungen, der den Verbraucher zur Zahlung eines Preises verpflichtet, mit der vollständigen Erbringung der Dienstleistung, wenn der Verbraucher vor Beginn der Erbringung ausdrücklich zugestimmt hat, dass der Unternehmer mit der Erbringung der Dienstleistung vor Ablauf der Widerrufsfrist beginnt und seine Kenntnis davon bestätigt hat, dass sein Widerrufsrecht mit vollständiger Vertragserfüllung durch den Unternehmer erlischt.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">Muster-Widerrufsformular</h3>
        <p className="mb-4">(Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte dieses Formular aus und senden Sie es zurück.)</p>
        
        <div className="border p-4 mb-4">
          <p className="mb-2">An Sandra Owona, Ahornstraße 52, 68542 Heddesheim, E-Mail-Adresse: info@owona.de:</p>
          <p className="mb-2">Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über den Kauf der folgenden Waren (*)/ die Erbringung der folgenden Dienstleistung (*)</p>
          <p className="mb-2">Bestellt am (*)/ erhalten am (*)</p>
          <p className="mb-2">Name des/der Verbraucher(s)</p>
          <p className="mb-2">Anschrift des/der Verbraucher(s)</p>
          <p className="mb-2">Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier)</p>
          <p className="mb-2">Datum</p>
          <p className="text-sm">(*) Unzutreffendes streichen.</p>
        </div>

        <p className="mt-8 text-sm">
          Stand: März 2024
        </p>
      </div>
    </div>
  );
} 