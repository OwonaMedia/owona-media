'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function DatenschutzPage() {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-8 bg-white">
      <h1 className="text-3xl font-bold mb-6">Datenschutzerklärung</h1>
      
      <div className="prose max-w-none">
        <p className="mb-6">
          Soweit nachstehend keine anderen Angaben gemacht werden, ist die Bereitstellung Ihrer personenbezogenen Daten weder gesetzlich oder vertraglich vorgeschrieben, noch für einen Vertragsabschluss erforderlich. Sie sind zur Bereitstellung der Daten nicht verpflichtet. Eine Nichtbereitstellung hat keine Folgen. Dies gilt nur soweit bei den nachfolgenden Verarbeitungsvorgängen keine anderweitige Angabe gemacht wird.
          "Personenbezogene Daten" sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Server-Logfiles</h2>
        <p className="mb-4">
          Sie können unsere Webseiten besuchen, ohne Angaben zu Ihrer Person zu machen.
        </p>
        <p className="mb-4">
          Bei jedem Zugriff auf unsere Website werden an uns oder unseren Webhoster / IT-Dienstleister Nutzungsdaten durch Ihren Internet Browser übermittelt und in Protokolldaten (sog. Server-Logfiles) gespeichert. Zu diesen gespeicherten Daten gehören z.B. der Name der aufgerufenen Seite, Datum und Uhrzeit des Abrufs, die IP-Adresse, die übertragene Datenmenge und der anfragende Provider.
          Die Verarbeitung erfolgt auf Grundlage des Art. 6 Abs. 1 lit. f DSGVO aus unserem überwiegenden berechtigten Interesse an der Gewährleistung eines störungsfreien Betriebs unserer Website sowie zur Verbesserung unseres Angebotes.
        </p>
        <p className="mb-4">
          Ihre Daten werden ggf. in Drittstaaten außerhalb der EU, insbesondere nach Kanada und in die USA, übermittelt und dort verarbeitet. Für Kanada existiert ein Angemessenheitsbeschluss der EU-Kommission. Für die USA ist ein Angemessenheitsbeschluss der EU-Kommission vorhanden, das Trans-Atlantic Data Privacy Framework (TADPF). Shopify ist nicht nach dem TADPF zertifiziert. Diese Datenübermittlung erfolgt auf Grundlage vertraglicher Verpflichtungen, die mit denen der Standardvertragsklauseln der EU-Kommission vergleichbar sind.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Kontakt</h2>
        <h3 className="text-xl font-bold mt-6 mb-3">Verantwortlicher</h3>
        <p className="mb-4">
          Kontaktieren Sie uns auf Wunsch. Verantwortlicher für die Datenverarbeitung ist: Sandra Owona, Ahornstraße 52, 68542 Heddesheim, Deutschland, +49 6203 9375214, recht@owona.de
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">Initiativ-Kontaktaufnahme des Kunden per E-Mail</h3>
        <p className="mb-4">
          Wenn Sie per E-Mail initiativ mit uns in Geschäftskontakt treten, erheben wir Ihre personenbezogenen Daten (Name, E-Mail-Adresse, Nachrichtentext) nur in dem von Ihnen zur Verfügung gestellten Umfang. Die Datenverarbeitung dient der Bearbeitung und Beantwortung Ihrer Kontaktanfrage.
        </p>
        <p className="mb-4">
          Wenn die Kontaktaufnahme der Durchführung vorvertraglicher Maßnahmen (bspw. Beratung bei Kaufinteresse, Angebotserstellung) dient oder einen bereits zwischen Ihnen und uns geschlossenen Vertrag betrifft, erfolgt diese Datenverarbeitung auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO.
        </p>
        <p className="mb-4">
          Erfolgt die Kontaktaufnahme aus anderen Gründen, erfolgt diese Datenverarbeitung auf Grundlage des Art. 6 Abs. 1 lit. f DSGVO aus unserem überwiegenden berechtigten Interesse an der Bearbeitung und Beantwortung Ihrer Anfrage. In diesem Fall haben Sie das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit dieser auf Art. 6 Abs. 1 lit. f DSGVO beruhenden Verarbeitungen Sie betreffender personenbezogener Daten zu widersprechen.
        </p>
        <p className="mb-4">
          Ihre E-Mail-Adresse nutzen wir nur zur Bearbeitung Ihrer Anfrage. Ihre Daten werden anschließend unter Beachtung gesetzlicher Aufbewahrungsfristen gelöscht, sofern Sie der weitergehenden Verarbeitung und Nutzung nicht zugestimmt haben.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">Erhebung und Verarbeitung bei Nutzung des Kontaktformulars</h3>
        <p className="mb-4">
          Bei der Nutzung des Kontaktformulars erheben wir Ihre personenbezogenen Daten (Name, E-Mail-Adresse, Nachrichtentext) nur in dem von Ihnen zur Verfügung gestellten Umfang. Die Datenverarbeitung dient dem Zweck der Kontaktaufnahme.
        </p>
        <p className="mb-4">
          Wenn die Kontaktaufnahme der Durchführung vorvertraglicher Maßnahmen (bspw. Beratung bei Kaufinteresse, Angebotserstellung) dient oder einen bereits zwischen Ihnen und uns geschlossenen Vertrag betrifft, erfolgt diese Datenverarbeitung auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO.
        </p>
        <p className="mb-4">
          Erfolgt die Kontaktaufnahme aus anderen Gründen, erfolgt diese Datenverarbeitung auf Grundlage des Art. 6 Abs. 1 lit. f DSGVO aus unserem überwiegenden berechtigten Interesse an der Bearbeitung und Beantwortung Ihrer Anfrage. In diesem Fall haben Sie das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit dieser auf Art. 6 Abs. 1 lit. f DSGVO beruhenden Verarbeitungen Sie betreffender personenbezogener Daten zu widersprechen.
        </p>
        <p className="mb-4">
          Ihre E-Mail-Adresse nutzen wir nur zur Bearbeitung Ihrer Anfrage. Ihre Daten werden anschließend unter Beachtung gesetzlicher Aufbewahrungsfristen gelöscht, sofern Sie der weitergehenden Verarbeitung und Nutzung nicht zugestimmt haben.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">Verwendung der Adressvalidierung von Google Maps API</h3>
        <p className="mb-4">
          Wir verwenden auf unserer Website die Adressvalidierung des Anbieters Google (Google Ireland Limited, Gordon House, 4 Barrow St, Dublin, D04 E5W5, Irland "Google").
        </p>
        <p className="mb-4">
          Die Datenverarbeitung dient dem Zweck, Ihre Eingaben in unseren Adressformularen in Echtzeit auf Eingabe- und Schreibfehler zu überprüfen, sowie ggf. fehlende Daten zu ergänzen. Bei fehlerhaft eingegebenen Daten werden Alternativvorschläge zur Korrektur der Daten angezeigt. Zu diesem Zweck werden die von Ihnen eingegebenen Adressdaten an den Anbieter übermittelt, dort gespeichert und ausgewertet.
        </p>
        <p className="mb-4">
          Unter anderem können folgende Informationen an den Google übermittelt und dort verarbeitet werden: postalische Adressen (Land, Ort, Postleitzahl, Straße, Hausnummer), E-Mail Adresse, Telefonnummer.
        </p>
        <p className="mb-4">
          Ihre Daten werden dabei gegebenenfalls auch in die USA übermittelt. Für die USA ist ein Angemessenheitsbeschluss der EU-Kommission vorhanden, das Trans-Atlantic Data Privacy Framework (TADPF). Google hat sich nach dem TADPF zertifiziert und damit verpflichtet, europäische Datenschutzgrundsätze einzuhalten.
        </p>
        <p className="mb-4">
          Die Verarbeitung Ihrer personenbezogenen Daten erfolgt auf Grundlage des Art. 6 Abs. 1 lit. f DSGVO aus unserem überwiegenden berechtigten Interesse an einer korrekten Datengrundlage zur Erfüllung unserer vertraglichen Pflichten. Sie haben das Recht aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit dieser Verarbeitung Sie betreffender personenbezogener Daten zu widersprechen.
        </p>
        <p className="mb-4">
          Die Daten werden vom Anbieter separat verarbeitet und nicht mit anderen Daten zusammengeführt. Sie werden beim Anbieter gelöscht, sobald der Status der eingegebenen Daten ermittelt wurde, spätestens jedoch nach 30 Tagen.
        </p>
        <p className="mb-4">
          Nähere Informationen zu Nutzungsbedingungen und Datenschutz bei Google finden sie unter: <a href="https://cloud.google.com/maps-platform/terms" target="_blank" rel="noopener noreferrer">https://cloud.google.com/maps-platform/terms</a> bzw. unter <a href="https://policies.google.com/privacy?gl=de" target="_blank" rel="noopener noreferrer">https://www.google.de/policies/privacy/</a>.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">Verwendung von Calendly</h3>
        <p className="mb-4">
          Wir verwenden auf unserer Website die Terminbuchungsfunktion "Calendly" des Anbieters Calendly LLC (BB&T Tower, 271 17th St NW, Atlanta, GA 30363, USA).
        </p>
        <p className="mb-4">
          Bei Nutzung dieser Funktion erheben und verarbeiten wir Ihre personenbezogenen Daten (Vor- und Nachname, E-Mail-Adresse und Telefonnummer, Nachrichtentext) nur in dem von Ihnen zur Verfügung gestellten Umfang. Die Datenverarbeitung dient dem Zweck der Terminvergabe sowie der Nutzerfreundlichkeit.
        </p>
        <p className="mb-4">
          Calendly verwendet Technologien wie Cookies. Dabei können u.a. folgende Informationen erhoben und an Calendly übermittelt werden: IP-Adresse, Datum und Uhrzeit des Seitenaufrufs, Gerätemodell, Informationen über den von Ihnen verwendeten Browser und das von Ihnen verwendete Betriebssystem sowie den Standort.
        </p>
        <p className="mb-4">
          Ihre Daten werden gegebenenfalls in Drittstaaten wie die USA übermittelt. Für die USA ist ein Angemessenheitsbeschluss der EU-Kommission vorhanden, das Trans-Atlantic Data Privacy Framework (TADPF). Calendly hat sich nach dem TADPF zertifiziert und damit verpflichtet, europäische Datenschutzgrundsätze einzuhalten.
        </p>
        <p className="mb-4">
          Die Verarbeitung Ihrer personenbezogenen Daten zur Terminbuchung erfolgt auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO zur Erfüllung des mit uns geschlossenen Vertrages oder zur Durchführung vorvertraglicher Maßnahmen.
        </p>
        <p className="mb-4">
          Die Nutzung von Cookies oder vergleichbarer Technologien erfolgt mit Ihrer Einwilligung auf Grundlage des § 25 Abs. 1 S. 1 TDDDG i.V.m. Art. 6 Abs. 1 lit. a DSGVO. Die durch die Nutzung der Cookies stattfindende Verarbeitung Ihrer personenbezogenen Daten erfolgt mit Ihrer Einwilligung auf Grundlage des Art. 6 Abs. 1 lit. a DSGVO. Sie können die Einwilligung jederzeit widerrufen, ohne dass die Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung berührt wird.
        </p>
        <p className="mb-4">
          Nähere Informationen zum Datenschutz und zur Nutzung von Cookies bei Calendly finden Sie unter <a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer">https://calendly.com/privacy</a>.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">WhatsApp Business</h3>
        <p className="mb-4">
          Wenn Sie per WhatsApp mit uns in Geschäftskontakt treten, nutzen wir hierfür die Version WhatsApp Business der WhatsApp Ireland Limited (4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland; "WhatsApp"). Soweit Sie Ihren Aufenthalt außerhalb des Europäischen Wirtschaftsraumes haben, wird dieser Dienst durch die WhatsApp Inc. (1601 Willow Road, Menlo Park, CA 94025, USA) bereitgestellt.
        </p>
        <p className="mb-4">
          Die Datenverarbeitung dient der Bearbeitung und Beantwortung Ihrer Kontaktanfrage. Zu diesem Zweck erheben und verarbeiten wir Ihre bei WhatsApp hinterlegte Mobilfunknummer, falls bereitgestellt Ihren Namen sowie weitere Daten in dem von Ihnen zur Verfügung gestellten Umfang. Wir verwenden für den Dienst ein mobiles Endgerät, in dessen Adressbuch ausschließlich Daten von Nutzern gespeichert sind, die uns über WhatsApp kontaktiert haben. Eine Weitergabe personenbezogener Daten an WhatsApp, ohne dass Sie hierin bereits gegenüber WhatsApp eingewilligt haben, erfolgt damit nicht.
        </p>
        <p className="mb-4">
          Ihre Daten werden von WhatsApp an Server der Meta Platforms Inc. in den USA übermittelt. Für die USA ist ein Angemessenheitsbeschluss der EU-Kommission vorhanden, das Trans-Atlantic Data Privacy Framework (TADPF). Meta Platforms Inc. hat sich nach dem TADPF zertifiziert und damit verpflichtet, europäische Datenschutzgrundsätze einzuhalten. Wenn die Kontaktaufnahme der Durchführung vorvertraglicher Maßnahmen (bspw. Beratung bei Kaufinteresse, Angebotserstellung) dient oder einen bereits zwischen Ihnen und uns geschlossenen Vertrag betrifft, erfolgt diese Datenverarbeitung auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO.
        </p>
        <p className="mb-4">
          Erfolgt die Kontaktaufnahme aus anderen Gründen, erfolgt diese Datenverarbeitung auf Grundlage des Art. 6 Abs. 1 lit. f DSGVO aus unserem überwiegenden berechtigten Interesse am Bereitstellen einer schnellen und einfachen Kontaktaufnahme sowie an der Beantwortung Ihrer Anfrage. In diesem Fall haben Sie das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit dieser auf Art. 6 Abs. 1 lit. f DSGVO beruhenden Verarbeitungen Sie betreffender personenbezogener Daten zu widersprechen.
        </p>
        <p className="mb-4">
          Ihre personenbezogenen Daten nutzen wir nur zur Bearbeitung Ihrer Anfrage. Ihre Daten werden anschließend unter Beachtung gesetzlicher Aufbewahrungsfristen gelöscht, sofern Sie der weitergehenden Verarbeitung und Nutzung nicht zugestimmt haben.
        </p>
        <p className="mb-4">
          Nähere Informationen zu Nutzungsbedingungen und Datenschutz bei Nutzung von WhatsApp finden Sie unter <a href="https://www.whatsapp.com/legal/#terms-of-service" target="_blank" rel="noopener noreferrer">https://www.whatsapp.com/legal/#terms-of-service</a> und <a href="https://www.whatsapp.com/legal/#privacy-policy" target="_blank" rel="noopener noreferrer">https://www.whatsapp.com/legal/#privacy-policy</a>.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Kundenkonto und Bestellungen</h2>
        <h3 className="text-xl font-bold mt-6 mb-3">Kundenkonto</h3>
        <p className="mb-4">
          Bei der Eröffnung eines Kundenkontos erheben wir Ihre personenbezogenen Daten in dem dort angegebenen Umfang. Die Datenverarbeitung dient dem Zweck, Ihr Einkaufserlebnis zu verbessern und die Bestellabwicklung zu vereinfachen. Die Verarbeitung erfolgt auf Grundlage des Art. 6 Abs. 1 lit. a DSGVO mit Ihrer Einwilligung. Sie können Ihre Einwilligung jederzeit durch Mitteilung an uns widerrufen, ohne dass die Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung berührt wird. Ihr Kundenkonto wird anschließend gelöscht.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">Erhebung, Verarbeitung und Weitergabe personenbezogener Daten bei Bestellungen</h3>
        <p className="mb-4">
          Bei der Bestellung erheben und verarbeiten wir Ihre personenbezogenen Daten nur, soweit dies zur Erfüllung und Abwicklung Ihrer Bestellung sowie zur Bearbeitung Ihrer Anfragen erforderlich ist. Die Bereitstellung der Daten ist für den Vertragsschluss erforderlich. Eine Nichtbereitstellung hat zur Folge, dass kein Vertrag geschlossen werden kann. Die Verarbeitung erfolgt auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO und ist für die Erfüllung eines Vertrags mit Ihnen erforderlich.
        </p>
        <p className="mb-4">
          Eine Weitergabe Ihrer Daten erfolgt dabei beispielsweise an Versandunternehmen, Dropshipping- bzw. Fulfillment-Anbieter, Zahlungsdienstleister, Diensteanbieter für die Bestellabwicklung und IT-Dienstleister. In allen Fällen beachten wir strikt die gesetzlichen Vorgaben. Der Umfang der Datenübermittlung beschränkt sich auf ein Mindestmaß.
        </p>
        <p className="mb-4">
          Ihre Daten werden ggf. in Drittstaaten außerhalb der EU, insbesondere nach Kanada und in die USA, übermittelt und dort verarbeitet. Für Kanada existiert ein Angemessenheitsbeschluss der EU-Kommission. Für die USA ist ein Angemessenheitsbeschluss der EU-Kommission vorhanden, das Trans-Atlantic Data Privacy Framework (TADPF). Shopify ist nicht nach dem TADPF zertifiziert. Diese Datenübermittlung erfolgt auf Grundlage vertraglicher Verpflichtungen, die mit denen der Standardvertragsklauseln der EU-Kommission vergleichbar sind.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Bewertungen und Werbung</h2>
        <h3 className="text-xl font-bold mt-6 mb-3">Shopauskunft-Kundenbewertung</h3>
        <p className="mb-4">
          Wir verwenden für unsere Website das Bewertungs-Tool "shopauskunft.de" der Händlerbund Management AG (Kohlgartenstraße 11 - 13, 04315 Leipzig; "Shopauskunft").
        </p>
        <p className="mb-4">
          Nach Ihrer Bestellung möchten wir Sie bitten, Ihren Kauf bei uns zu bewerten und zu kommentieren. Zu diesem Zweck werden Sie von uns per E-Mail angeschrieben, wobei wir uns hierbei des technischen Systems "Rechtssichere Bewertungsanfrage (RBA)" bedienen. Dabei verarbeiten wir die Daten zu Ihrer Bestellung (Bestellnummer/Rechnungsnummer, Einkaufswert und Versandkosten) sowie Ihre E-Mail-Adresse. Gegebenenfalls verwenden wir diese Daten auch zum Zwecke der Verifikation Ihrer Bewertung.
        </p>
        <p className="mb-4">
          Die Verarbeitung erfolgt auf Grundlage des Art. 6 Abs.1 lit. a DSGVO mit Ihrer Einwilligung, sofern Sie der Weitergabe Ihrer Daten und dem Erhalt der Bewertungsaufforderung ausdrücklich zugestimmt haben.
        </p>
        <p className="mb-4">
          Sie können die Einwilligung jederzeit unter Nutzung des entsprechenden Links in der E-Mail oder durch Mitteilung an uns widerrufen, ohne dass die Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung berührt wird.
        </p>
        <p className="mb-4">
          Weitere Informationen zum Datenschutz bei Verwendung von Shopauskunft finden Sie unter: <a href="https://www.shopauskunft.de/datenschutz" target="_blank" rel="noopener noreferrer">https://www.shopauskunft.de/datenschutz</a>.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">Shopauskunft Widget</h3>
        <p className="mb-4">
          Auf unserer Webseite ist das Widget von Shopauskunft eingebunden. Dies dient dem Zweck Anzahl und Ergebnis unsere bisher über Shopauskunft erhaltenen Bewertungen anzuzeigen und damit zu werben.
        </p>
        <p className="mb-4">
          Zur Anzeige des Widgets ist es technisch notwendig, Nutzungsdaten durch Ihren Internet Browser an den Server von Shopauskunft zu übermitteln und in Protokolldaten (sog. Server-Logfiles) für 7 Tage zu speichern. Zu diesen gespeicherten Daten gehören der Name und URL der abgerufenen Datei, Datum und Uhrzeit des Abrufs, die IP-Adresse des anfragenden Rechners, Website, von der aus der Zugriff erfolgt (Referrer-URL), der verwendete Browser und ggf. das Betriebssystem Ihres Rechners sowie der Name Ihres Access-Providers.
        </p>
        <p className="mb-4">
          Die Verarbeitung erfolgt auf Grundlage des Art. 6 Abs. 1 lit. f DSGVO aus unserem überwiegenden berechtigten Interesse an der Bewerbung unserer Angebote durch die Darstellung der bereits erhaltenen Kundenbewertungen. Eine Speicherung dieser Daten zusammen mit anderen personenbezogen Daten erfolgt nicht.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">Google Kundenrezensionen Bewertungs-Tool</h3>
        <p className="mb-4">
          Wir verwenden für unsere Website das Bewertungs-Tool für Google Kundenrezensionen der Google LLC (1600 Amphitheatre Parkway, Mountain View, CA 94043, USA; "Google").
        </p>
        <p className="mb-4">
          Nach Ihrer Bestellung möchten wir Sie bitten, Ihren Kauf bei uns zu bewerten und zu kommentieren. Zu diesem Zweck werden Sie von uns per E-Mail angeschrieben, wobei wir uns hierbei des Umfrage-Opt-in-Moduls von Google bedienen. Dabei können u.a. folgende Informationen verarbeitet und an Google übermittelt: Bestelldetails (z.B. Bestell-ID, Lieferland, voraussichtliches Lieferdatum, GTIN der bestellten Produkte) sowie Ihre E-Mail-Adresse.
        </p>
        <p className="mb-4">
          Ihre Daten werden gegebenenfalls in die USA übermittelt. Für die USA ist ein Angemessenheitsbeschluss der EU-Kommission vorhanden, das Trans-Atlantic Data Privacy Framework (TADPF). Google hat sich nach dem TADPF zertifiziert und damit verpflichtet, europäische Datenschutzgrundsätze einzuhalten.
        </p>
        <p className="mb-4">
          Die Verarbeitung erfolgt auf Grundlage des Art. 6 Abs.1 lit. a DSGVO mit Ihrer Einwilligung, sofern Sie der Weitergabe Ihrer Daten und dem Erhalt der Bewertungsaufforderung ausdrücklich zugestimmt haben. Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen, ohne dass die Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung berührt wird.
        </p>
        <p className="mb-4">
          Nähere Informationen zu Nutzungsbedingungen und Datenschutz bei Verwendung von Google Kundenrezensionen finden Sie unter <a href="https://www.google.com/shopping/customerreviews/static/tos/de/1_01_tos.html" target="_blank" rel="noopener noreferrer">https://www.google.com/shopping/customerreviews/static/tos/de/1_01_tos.html</a> sowie unter <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy?hl=de</a>
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">Verwendung von Trustpilot</h3>
        <p className="mb-4">
          Wir verwenden auf unserer Website das Bewertungssystem "Trustpilot" der Trustpilot A/S (Pilestræde 58, 1112 Kopenhagen, Dänemark; "Trustpilot").
        </p>
        <p className="mb-4">
          Trustpilot ermöglicht es uns, Kundenbewertungen einzuholen und diese auf unserer Website darzustellen, um Ihnen einen Einblick in die Qualität unserer Leistungen zu bieten.
        </p>
        <p className="mb-4">
          Nach einer Bestellung können Sie eine Einladung zur Abgabe einer Bewertung von uns bzw. Trustpilot erhalten und daraufhin eine Bewertung abgeben. Dabei können u.a. folgende Daten von uns bzw. Trustpilot verarbeitet werden: E-Mail-Adresse, Name, Informationen zu Ihrem Gerät und Standort (IP-Adresse, Browsereinstellungen, Art des verwendeten Browsers, Browsersprache, Zeitzone), Informationen zu Ihrem Trustpilot-Nutzer-Account (Nutzername, Foto, bevorzugte Sprache), Informationen über das gekaufte Produkt oder die in Anspruch genommene Dienstleistung (Referenz- bzw. Bestellnummer, Produktdetails), der Inhalt Ihrer Bewertung und die von Ihnen erteilte Sternebewertung, Ihre Produktfotos oder -videos (wenn Sie diese Ihrer Produktbewertung beigefügt haben). Diese Daten können gegebenenfalls auch zum Zwecke der Verifikation Ihrer Bewertung verwendet werden.
        </p>
        <p className="mb-4">
          Die Verarbeitung erfolgt auf Grundlage des Art. 6 Abs. 1 lit. a DSGVO mit Ihrer Einwilligung, sofern Sie der Weitergabe Ihrer Daten und dem Erhalt der Bewertungsaufforderung ausdrücklich zugestimmt haben. Sie können Ihre Einwilligung jederzeit widerrufen, ohne dass die Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung berührt wird.
        </p>
        <p className="mb-4">
          Weitere Informationen zum Datenschutz bei der Verwendung von Trustpilot finden Sie unter: <a href="https://de.legal.trustpilot.com/for-reviewers/end-user-privacy-terms" target="_blank" rel="noopener noreferrer">https://de.legal.trustpilot.com/for-reviewers/end-user-privacy-terms</a>.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">Verwendung der E-Mail-Adresse für die Zusendung von Newslettern</h3>
        <p className="mb-4">
          Wir nutzen Ihre E-Mail-Adresse unabhängig von der Vertragsabwicklung ausschließlich für eigene Werbezwecke zum Newsletterversand, sofern Sie dem ausdrücklich zugestimmt haben. Die Verarbeitung erfolgt auf Grundlage des Art. 6 Abs. 1 lit. a DSGVO mit Ihrer Einwilligung. Sie können die Einwilligung jederzeit widerrufen, ohne dass die Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung berührt wird. Sie können dazu den Newsletter jederzeit unter Nutzung des entsprechenden Links im Newsletter oder durch Mitteilung an uns abbestellen. Ihre E-Mail-Adresse wird danach aus dem Verteiler entfernt.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">Verwendung von Mailchimp</h3>
        <p className="mb-4">
          Wir verwenden für den Newsletterversand den Dienst der Rocket Science Group LLC (675 Ponce de Leon Ave NE, Suite 5000 Atlanta, GA 30308, USA; "Mailchimp") im Rahmen einer Auftragsverarbeitung.
        </p>
        <p className="mb-4">
          Wir geben die von Ihnen während der Newsletteranmeldung zur Verfügung gestellten Informationen (E-Mail Adresse, ggf. Vor- und Nachname) an Mailchimp weiter. Die Datenverarbeitung dient dem Zweck des Newsletterversands und dessen statistischen Auswertung.
        </p>
        <p className="mb-4">
          Um Newsletter-Kampagnen auszuwerten, enthalten die versendeten Newsletter eine 1x1 Pixel Grafik (Tracking Pixel) oder einen Tracking-Link. So können wir feststellen, ob Sie den Newsletter geöffnet haben und ob Sie ggf. integrierte Links angeklickt haben. In dem Zusammenhang erheben wir Ihre personenbezogenen Daten wie bspw. IP-Adresse, Browsertyp- und device sowie den Zeitpunkt. Aus diesen Daten können unter einem Pseudonym Nutzungsprofile erstellt werden. Die erhobenen Daten werden nicht dazu benutzt, Sie persönlich zu identifizieren. Die erhobenen Daten werden lediglich zur statistischen Auswertung zur Verbesserung von Newsletter-Kampagnen genutzt.
        </p>
        <p className="mb-4">
          Ihre Daten werden in der Regel an Server von Mailchimp in den USA übermittelt und dort gespeichert. Für die USA ist ein Angemessenheitsbeschluss der EU-Kommission vorhanden, das Trans-Atlantic Data Privacy Framework (TADPF). Mailchimp ist nicht nach dem TADPF zertifiziert. Die Datenübermittlung erfolgt u.a. auf Grundlage von Standardvertragsklauseln als geeignete Garantien für den Schutz der personenbezogenen Daten, einsehbar unter: <a href="https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection/standard-contractual-clauses-scc_de" target="_blank" rel="noopener noreferrer">https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection/standard-contractual-clauses-scc_de</a>.
        </p>
        <p className="mb-4">
          Die Verarbeitung Ihrer personenbezogenen Daten erfolgt auf Grundlage des Art. 6 Abs. 1 lit. f DSGVO aus unserem überwiegenden berechtigten Interesse an einem zielgerichteten, werbewirksamen und benutzerfreundlichen Newslettersystem. Sie haben das Recht aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit dieser Verarbeitungen Sie betreffender personenbezogener Daten zu widersprechen.
        </p>
        <p className="mb-4">
          Nähere Informationen sowie die Datenschutzerklärung von MailChimp finden Sie unter: <a href="https://mailchimp.com/de/legal/data-processing-addendum/" target="_blank" rel="noopener noreferrer">https://mailchimp.com/de/legal/data-processing-addendum/</a> sowie <a href="https://www.intuit.com/privacy/statement/" target="_blank" rel="noopener noreferrer">https://www.intuit.com/privacy/statement/</a>.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Zahlungsdienstleister</h2>
        <h3 className="text-xl font-bold mt-6 mb-3">Verwendung von PayPal</h3>
        <p className="mb-4">
          Wir verwenden auf unserer Website den Zahlungsdienst PayPal der PayPal (Europe) S.à.r.l. et Cie, S.C.A. (22-24 Boulevard Royal, L-2449 Luxembourg; "PayPal"). Die Datenverarbeitung dient der Zahlungsabwicklung über den Zahlungsdienst PayPal.
        </p>
        <p className="mb-4">
          Bei der Auswahl der Zahlungsart PayPal werden die zur Zahlungsabwicklung erforderlichen Daten an PayPal übermittelt, um den Vertrag mit Ihnen unter Verwendung der gewählten Zahlungsmethode abzuwickeln. Diese Daten werden in der Regel Name, Anschrift, IP-Adresse, E-Mail-Adresse, Telefonnummer, Mobiltelefonnummer oder andere Daten, die für die Zahlungsabwicklung erforderlich sind, sowie Daten, die im Zusammenhang mit der Bestellung stehen, wie z.B. Warenkorb, Rechnungsbetrag und Steuern, umfassen.
        </p>
        <p className="mb-4">
          Die Datenverarbeitung erfolgt auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO und ist für die Ausführung der Zahlung erforderlich.
        </p>
        <p className="mb-4">
          Nähere Informationen zum Datenschutz bei PayPal finden Sie unter: <a href="https://www.paypal.com/de/webapps/mpp/ua/privacy-full" target="_blank" rel="noopener noreferrer">https://www.paypal.com/de/webapps/mpp/ua/privacy-full</a>.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">Verwendung von Stripe</h3>
        <p className="mb-4">
          Wir verwenden auf unserer Website den Zahlungsdienst Stripe der Stripe Payments Europe Ltd. (1 Grand Canal Street Lower, Grand Canal Dock, Dublin, Irland; "Stripe"). Die Datenverarbeitung dient der Zahlungsabwicklung über den Zahlungsdienst Stripe.
        </p>
        <p className="mb-4">
          Bei der Auswahl der Zahlungsart Stripe werden die zur Zahlungsabwicklung erforderlichen Daten an Stripe übermittelt, um den Vertrag mit Ihnen unter Verwendung der gewählten Zahlungsmethode abzuwickeln. Diese Daten werden in der Regel Name, Anschrift, IP-Adresse, E-Mail-Adresse, Telefonnummer, Mobiltelefonnummer oder andere Daten, die für die Zahlungsabwicklung erforderlich sind, sowie Daten, die im Zusammenhang mit der Bestellung stehen, wie z.B. Warenkorb, Rechnungsbetrag und Steuern, umfassen.
        </p>
        <p className="mb-4">
          Die Datenverarbeitung erfolgt auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO und ist für die Ausführung der Zahlung erforderlich.
        </p>
        <p className="mb-4">
          Nähere Informationen zum Datenschutz bei Stripe finden Sie unter: <a href="https://stripe.com/de/privacy" target="_blank" rel="noopener noreferrer">https://stripe.com/de/privacy</a>.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Cookies</h2>
        <p className="mb-4">
          Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die im Internetbrowser bzw. vom Internetbrowser auf dem Computersystem eines Nutzers gespeichert werden. Ruft ein Nutzer eine Website auf, so kann ein Cookie auf dem Betriebssystem des Nutzers gespeichert werden. Dieser Cookie enthält eine charakteristische Zeichenfolge, die eine eindeutige Identifizierung des Browsers beim erneuten Aufrufen der Website ermöglicht.
        </p>
        <p className="mb-4">
          Wir setzen Cookies ein, um unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. Ferner ermöglichen Cookies unseren Systemen, Ihren Browser auch nach einem Seitenwechsel zu erkennen und Ihnen Services anzubieten. Einige Funktionen unserer Website können ohne den Einsatz von Cookies nicht angeboten werden. Für diese ist es erforderlich, dass der Browser auch nach einem Seitenwechsel wiedererkannt wird.
        </p>
        <p className="mb-4">
          Die Verarbeitung erfolgt auf Grundlage des Art. 6 Abs. 1 lit. f DSGVO aus unserem überwiegenden berechtigten Interesse an der Optimierung der Funktionalität unserer Website sowie einer nutzerfreundlichen Gestaltung des Seitenaufrufs.
        </p>
        <p className="mb-4">
          Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und einzeln über deren Annahme entscheiden oder die Annahme von Cookies für bestimmte Fälle oder generell ausschließen. Bei der Nichtannahme von Cookies kann die Funktionalität unserer Website eingeschränkt sein.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Ihre Rechte</h2>
        <p className="mb-4">
          Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Recht auf Auskunft</li>
          <li>Recht auf Berichtigung oder Löschung</li>
          <li>Recht auf Einschränkung der Verarbeitung</li>
          <li>Recht auf Widerspruch gegen die Verarbeitung</li>
          <li>Recht auf Datenübertragbarkeit</li>
        </ul>
        <p className="mb-4">
          Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Widerspruchsrecht</h2>
        <p className="mb-4">
          Soweit wir zur Wahrung unserer im Rahmen einer Interessenabwägung überwiegenden berechtigten Interessen personenbezogene Daten wie oben erläutert verarbeiten, können Sie dieser Verarbeitung mit Wirkung für die Zukunft widersprechen. Erfolgt die Verarbeitung zu Zwecken des Direktmarketings, können Sie dieses Recht jederzeit ausüben, wie oben beschrieben. Soweit die Verarbeitung zu anderen Zwecken erfolgt, steht Ihnen ein Widerspruchsrecht nur bei Vorliegen von Gründen, die sich aus Ihrer besonderen Situation ergeben, zu.
        </p>
        <p className="mb-4">
          Nach Ausübung Ihres Widerspruchsrechts werden wir Ihre personenbezogenen Daten nicht mehr zu diesen Zwecken verarbeiten, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen, oder wenn die Verarbeitung der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen dient.
        </p>
        <p className="mb-4">
          Dies gilt nicht, wenn die Verarbeitung zu Zwecken des Direktmarketings erfolgt. Dann werden wir Ihre personenbezogenen Daten nicht mehr zu diesem Zweck verarbeiten.
        </p>

        <p className="mt-8 text-sm">
          Stand: März 2024
        </p>
      </div>
    </div>
  );
} 