// SKM Management - Centralized Content & Navigation

export const company = {
  name: "SKM Management",
  tagline: "Technische Beratung & Sachverständigenleistungen",
  email: "kontakt@skm-management.de",
  phone: "+49 162 9383033",
  address: {
    street: "",
    city: "Stuttgart",
    zip: "",
  },
};

export const navigation = {
  main: [
    {
      label: "Leistungen",
      href: "/leistungen",
      hasDropdown: true,
      children: [
        { label: "Sachverständigenleistungen", href: "/leistungen/sachverstaendigenleistungen" },
        { label: "Betreiberverantwortung & technischer Brandschutz", href: "/leistungen/betreiberverantwortung-technischer-brandschutz" },
        { label: "Technische Immobilienbewertung & Corporate Real Estate", href: "/leistungen/technische-immobilienbewertung" },
        { label: "Technische Audits & Due Diligence", href: "/leistungen/technische-audits-due-diligence" },
      ],
    },
    { label: "Unternehmen", href: "/unternehmen" },
    { label: "Kontakt", href: "/kontakt" },
  ],
  footer: {
    leistungen: [
      { label: "Sachverständigenleistungen", href: "/leistungen/sachverstaendigenleistungen" },
      { label: "Betreiberverantwortung & technischer Brandschutz", href: "/leistungen/betreiberverantwortung-technischer-brandschutz" },
      { label: "Technische Immobilienbewertung & Corporate Real Estate", href: "/leistungen/technische-immobilienbewertung" },
      { label: "Technische Audits & Due Diligence", href: "/leistungen/technische-audits-due-diligence" },
    ],
    unternehmen: [
      { label: "Über uns", href: "/unternehmen" },
      { label: "Kontakt", href: "/kontakt" },
    ],
    legal: [
      { label: "Impressum", href: "/impressum" },
      { label: "Datenschutz", href: "/datenschutz" },
    ],
  },
};

export const services = {
  overview: {
    headline: "Leistungen",
    subheadline: "Unsere Kernkompetenzen",
    intro: "Risiken minimieren und Werte sichern. SKM unterstützt Unternehmen mit unabhängigen Analysen, strukturiertem Brandschutz und technischer Immobilienbewertung bei der zukunftssicheren Ausrichtung ihrer Immobilien.",
  },
  clusters: [
    {
      id: "sachverstaendigenleistungen",
      number: "",
      title: "Sachverständigenleistungen",
      shortDescription: "Technische Bewertungen, Gutachten und unabhängige Analysen für Gebäude und Anlagen.",
      href: "/leistungen/sachverstaendigenleistungen",
      items: [
        "Technische Gebäude- und Anlagenbewertungen (TGA)",
        "Bauschadensbewertungen",
        "Dokumentations- und Betreiberpflichtenprüfungen",
        "Technische Zustandsanalysen",
        "Gutachten und fachliche Stellungnahmen",
      ],
    },
    {
      id: "betreiberverantwortung-technischer-brandschutz",
      number: "",
      title: "Betreiberverantwortung & technischer Brandschutz",
      shortDescription: "Strukturierte Analyse und Aufbau rechtssicherer Betreiberpflichten-Prozesse.",
      href: "/leistungen/betreiberverantwortung-technischer-brandschutz",
      items: [
        "Analyse und Aufbau von Betreiberpflichten-Strukturen",
        "Prüfung von Verantwortlichkeiten und Prozessen",
        "Unterstützung bei rechtssicherer Organisation technischer Aufgaben",
        "Audits und Handlungsempfehlungen",
      ],
    },
    {
      id: "technische-immobilienbewertung",
      number: "",
      title: "Technische Immobilienbewertung & Corporate Real Estate",
      shortDescription: "Prozess- und Organisationsberatung an der Schnittstelle von Technik und Management.",
      href: "/leistungen/technische-immobilienbewertung",
      items: [
        "Prozess- und Organisationsanalysen im Corporate Real Estate",
        "Lifecycle- und Wirtschaftlichkeitsbetrachtungen",
        "Schnittstelle Technik - Organisation - Management",
        "Entwicklung pragmatischer, umsetzbarer Konzepte",
      ],
    },
    {
      id: "technische-audits-due-diligence",
      number: "",
      title: "Technische Audits & Due Diligence",
      shortDescription: "Systematische technische Prüfung von Bestandsimmobilien als Entscheidungsgrundlage für Investitionen, Ankauf und Portfoliosteuerung.",
      href: "/leistungen/technische-audits-due-diligence",
      items: [
        "Technische Zustandserfassung und Substanzbewertung",
        "Risikobewertung und Mängelanalyse",
        "Investitions- und Instandhaltungsbedarfsermittlung",
        "Technical Due Diligence bei Ankaufsprüfungen",
        "Portfoliobezogene Bestandsanalysen",
      ],
    },
  ],
};

export const homepage = {
  hero: {
    headline: "SKM Management",
    subheadline: "Technische Beratung für Immobilien und Anlagen",
    description: "Technische Bewertung und strukturierte Steuerung von Immobilien mit Fokus auf Betreiberverantwortung, Werterhalt und Risikominimierung.",
  },
  arbeitsweise: {
    headline: "",
    subheadline: "Unsere Philosophie",
    description: "Wir verbinden technische Expertise mit strukturiertem Vorgehen. Unser Fokus liegt auf risikoorientierten, wirtschaftlichen und rechtssicheren Lösungen.",
    principles: [
      {
        title: "Strukturiert",
        description: "Klare Prozesse und nachvollziehbare Methodik in jeder Projektphase.",
      },
      {
        title: "Risikoorientiert",
        description: "Frühzeitige Identifikation und Bewertung technischer und organisatorischer Risiken.",
      },
      {
        title: "Wirtschaftlich",
        description: "Pragmatische Lösungen mit Fokus auf Umsetzbarkeit und Wirtschaftlichkeit.",
      },
    ],
  },
  referenzen: {
    headline: "Referenzen",
    subheadline: "Projekterfahrung",
    ctaText: "Zur Referenzen-Seite",
  },
};

export const referenzen = {
  headline: "Referenzen",
  subheadline: "Unsere Projekterfahrung",
  intro: "Eine Auswahl unserer Projekte und Mandate. Detaillierte Referenzen auf Anfrage.",
  placeholders: [
    {
      id: 1,
      title: "Technische Due Diligence",
      category: "Sachverständigenleistungen",
      description: "Technische Bewertung eines Gewerbeimmobilienportfolios.",
      image: "ref-01",
    },
    {
      id: 2,
      title: "Betreiberpflichten-Audit",
      category: "Betreiberverantwortung",
      description: "Analyse und Optimierung der Betreiberpflichten-Organisation.",
      image: "ref-02",
    },
    {
      id: 3,
      title: "FM-Prozessoptimierung",
      category: "Corporate Real Estate",
      description: "Neustrukturierung der FM-Prozesse eines Industrieunternehmens.",
      image: "ref-03",
    },
    {
      id: 4,
      title: "Zustandsanalyse TGA",
      category: "Sachverständigenleistungen",
      description: "Umfassende technische Zustandsbewertung der Gebäudetechnik.",
      image: "ref-04",
    },
    {
      id: 5,
      title: "Organisationsberatung",
      category: "Betreiberverantwortung",
      description: "Aufbau rechtssicherer Strukturen für technische Verantwortlichkeiten.",
      image: "ref-05",
    },
  ],
};

export const unternehmen = {
  headline: "Unternehmen",
  subheadline: "Über SKM Management",
  intro: "SKM Management verbindet technische Expertise, Betreiberverantwortung und Corporate Real Estate zu einer klaren, belastbaren Beratungs- und Sachverständigenperspektive für anspruchsvolle Immobilien- und Betreiberstrukturen.",
  inhaber: {
    name: "Sefa Korkmaz",
    title: "Geschäftsführer & Inhaber",
    bio: [
      "Mein beruflicher Weg begann nicht im Büro, sondern auf der Baustelle. Mit einer Ausbildung im Beton- und Stahlbetonbau habe ich das technische Fundament gelegt, das bis heute mein Verständnis für Immobilien prägt: realistisch, praxisnah und lösungsorientiert.",
      "Über Stationen im Facility Management und technischen Property Management übernahm ich zunehmend Verantwortung für komplexe Immobilienstrukturen - bis hin zum technischen Management von Immobilienportfolios eines internationalen Unternehmens im dreistelligen Millionenbereich. Berufsbegleitend habe ich den Master of Science im Wirtschaftsingenieurwesen mit Fachrichtung Facility Management abgeschlossen.",
      "Mein Anspruch ist eine sachliche, belastbare Beratung, die technische Themen, Betreiberverantwortung und wirtschaftliche Anforderungen sauber zusammenführt.",
    ],
    image: "inhaber-placeholder",
  },
  werdegang: {
    title: "Werdegang",
    stations: [
      {
        year: "Seit 2021",
        role: "Inhaber - SKM Management",
        company: "Technische Immobilienberatung & Sachverständigenleistungen",
        description: "Aufbau eines projektbezogenen Beratungs- und Sachverständigenbüros mit Fokus auf technische Bewertungen, Betreiberverantwortung sowie die Analyse von Gebäudezuständen und Immobilienrisiken.",
      },
      {
        year: "Seit 2026",
        role: "Sachverständiger für Bauschadenbewertung (DEKRA) (im Zertifizierungsprozess)",
        company: "Spezialisierung auf Betonbau, Stahlbeton und Mauerwerksbau",
        description: "Derzeit im strukturierten Qualifizierungsprozess mit Fokus auf technische Bewertung, Schadensanalyse sowie die fachliche Einordnung von Bau- und Materialschäden.",
      },
      {
        year: "2026 - 2027",
        role: "MRICS - Mitgliedschaft (Royal Institution of Chartered Surveyors) (im Aufnahmeverfahren)",
        company: "",
        description: "Teilnahme am strukturierten Aufnahmeverfahren (Assessment of Professional Competence - APC) zur internationalen Qualifikation im Bereich Immobilienbewertung, Management und Corporate Real Estate. Der Entwicklungsprozess erfolgt strukturiert und begleitet entlang des offiziellen RICS Professional Pathways.",
      },
      {
        year: "Seit 2023",
        role: "Technical Property Manager / Corporate Real Estate Management",
        company: "VECTOR Informatik",
        description: "Verantwortung für technisches Immobilienmanagement, Betreiberstrukturen und nachhaltige Portfolioentwicklung im Corporate-Real-Estate-Umfeld eines internationalen Technologieunternehmens.",
      },
      {
        year: "2021 - 2023",
        role: "Master of Science (M.Sc.) - Wirtschaftsingenieurwesen",
        company: "Technische Hochschule Mittelhessen - Schwerpunkt Facility Management",
        description: "Berufsbegleitender Abschluss als fundierte Ergänzung zur praktischen Laufbahn.",
      },
      {
        year: "2019 - 2020",
        role: "Fachwirt für Gebäudemanagement (HWK)",
        company: "",
        description: "",
      },
      {
        year: "2019 - 2020",
        role: "Fachwirt für Facility Management (IMB)",
        company: "Schwerpunkt Immobilienwirtschaft, Bau und Technik",
        description: "",
      },
      {
        year: "2019",
        role: "Betrieblicher Brandschutzbeauftragter (TÜV)",
        company: "",
        description: "",
      },
      {
        year: "2018 - 2023",
        role: "Facility Manager / Teamleiter Facility Management",
        company: "GOLDBECK",
        description: "Planung, Vergabe und Steuerung von Instandsetzungs-, Umbau- und Modernisierungsmaßnahmen sowie Aufbau und Weiterentwicklung von FM-Strukturen am Standort Stuttgart.",
      },
      {
        year: "2010 - 2018",
        role: "Account-Manager",
        company: "BAUHAUS Deutschland",
        description: "Praxisnahe Begleitung von Sanierungs- und Revitalisierungsvorhaben von der Bedarfsermittlung bis zur Umsetzung mit starkem Fokus auf Abstimmung, Steuerung und Ergebnisqualität.",
      },
      {
        year: "2008 - 2010",
        role: "Fachwerker im Straßen- und Tiefbau",
        company: "Leonhard Weiss GmbH & Co. KG, Stuttgart",
        description: "Mitarbeit im Straßen- und Tiefbau mit Fokus auf bauliche Umsetzung, Ausführung und praktische Grundlagen im Bauwesen.",
      },
      {
        year: "2003 - 2006",
        role: "Ausbildung zum Beton- und Stahlbetonbauer (HWK)",
        company: "",
        description: "",
      },
    ],
  },
  profil: {
    title: "Unternehmensprofil",
    paragraphs: [
      "SKM Management steht für eine technische und organisatorische Perspektive auf Immobilien, die Verantwortung nicht nur beschreibt, sondern belastbar strukturiert. Im Mittelpunkt stehen technische Bewertungen, Betreiberverantwortung und Corporate Real Estate Fragestellungen dort, wo Anlagen, Prozesse und wirtschaftliche Entscheidungen zusammenwirken. Die Beratung ist bewusst ruhig, unabhängig und umsetzungsnah angelegt: ohne Übertreibung, ohne Standardphrasen, dafür mit nachvollziehbarer Methodik, Praxisnähe und einem klaren Blick für Risiken, Zustände und Verantwortlichkeiten.",
      "Die fachliche Basis speist sich aus Stationen in Baupraxis, Facility Management, Projektsteuerung und technischem Immobilienmanagement. Daraus entsteht ein Profil, das sowohl operative Realitäten als auch strategische Anforderungen in Unternehmen versteht - an der Schnittstelle von Technik, Organisation und Immobilienwirtschaft. Ziel ist es, Sicherheit zu schaffen, Werte zu erhalten und fundierte Entscheidungen zu ermöglichen.",
    ],
    focusLine: "",
    closing: "",
  },
  sections: {
    positionierung: {
      title: "Positionierung",
      content: "SKM Management positioniert sich als technisches Beratungs- und Sachverständigenbüro an der Schnittstelle von Gebäude, Organisation und Betreiberverantwortung. Der Fokus liegt nicht auf klassischer Verwaltung, sondern auf fundierter Bewertung, klarer Einordnung und belastbaren Handlungsempfehlungen im Corporate-Real-Estate- und Facility-Management-Umfeld.",
    },
    arbeitsweise: {
      title: "Arbeitsweise",
      content: "Die Arbeit folgt einem strukturierten, nachvollziehbaren Ansatz: technische und organisatorische Ausgangslage erfassen, Risiken und Verantwortlichkeiten sauber bewerten und daraus praktikable Empfehlungen ableiten. Ziel sind Lösungen, die fachlich belastbar, wirtschaftlich vernünftig und im Betrieb tatsächlich anschlussfähig sind.",
    },
    qualifikation: {
      title: "Qualifikation & Vertrauen",
      points: [
        {
          title: "Technische Fachkompetenz",
          description: "Fundiertes Know-how in der Bewertung von Gebäuden, technischen Anlagen und Infrastruktur aus langjähriger Praxis in anspruchsvollen Immobilien- und Betreiberstrukturen.",
        },
        {
          title: "Strukturierte Arbeitsweise",
          description: "Methodisches und nachvollziehbares Vorgehen von der Bestandsaufnahme über die Bewertung bis zur klar dokumentierten Handlungsempfehlung.",
        },
        {
          title: "Unabhängigkeit & Verlässlichkeit",
          description: "Neutrale, interessenunabhängige Einordnung mit einem klaren Blick auf Verantwortlichkeiten, Risiken und praktikable Umsetzbarkeit.",
        },
      ],
    },
  },
};

export const kontakt = {
  headline: "Kontakt",
  subheadline: "Sprechen Sie uns an",
  description: "Wir freuen uns auf Ihre Anfrage und melden uns zeitnah bei Ihnen.",
  form: {
    nameLabel: "Name",
    namePlaceholder: "Ihr Name",
    emailLabel: "E-Mail",
    emailPlaceholder: "kontakt@skm-management.de",
    messageLabel: "Nachricht",
    messagePlaceholder: "Ihre Nachricht an uns...",
    submitLabel: "Nachricht senden",
    dsgvoText: "Ich habe die Datenschutzerklärung gelesen und stimme der Verarbeitung meiner Angaben zur Bearbeitung meiner Anfrage zu.",
    successMessage: "Vielen Dank für Ihre Nachricht. Wir melden uns zeitnah bei Ihnen.",
    errorMessage: "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.",
  },
};

export const legal = {
  impressum: {
    headline: "Impressum",
    content: `Impressum

Sefa Korkmaz
Beratung und Sachverständigenleistungen im Bereich Corporate Real Estate und technischer Brandschutz.
Burgfelderstraße.2
70567 Stuttgart

Kontakt
Telefon: +49 162 9383033
E-Mail: kontakt@skm-management.de

Verbraucherstreitbeilegung/Universalschlichtungsstelle
Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.

Quelle:
https://www.e-recht24.de`,
  },
  datenschutz: {
    headline: "Datenschutzerklärung",
    content: `Datenschutzerklärung

1. Datenschutz auf einen Blick
Allgemeine Hinweise

Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.

Datenerfassung auf dieser Website

Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten, zum Beispiel technische Daten und Server-Logs. Weitere Daten werden verarbeitet, wenn Sie uns diese aktiv mitteilen, zum Beispiel per Kontaktformular, per E-Mail oder telefonisch.

Diese Website nutzt kein Newsletter-System, keine Terminbuchung und keine Werbe- oder Tracking-Tools.

Ihre Rechte

Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten. Sie haben außerdem das Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Zudem können Sie - soweit die gesetzlichen Voraussetzungen vorliegen - die Einschränkung der Verarbeitung verlangen und Widerspruch gegen bestimmte Verarbeitungen einlegen. Ihnen steht außerdem ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.

2. Hinweis zur verantwortlichen Stelle

Verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:

Sefa Korkmaz
Burgfelderstraße.2
70567 Stuttgart
Telefon: +49 162 9383033
E-Mail: kontakt@skm-management.de

Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.

3. Hosting und Server-Logs

Wir hosten die Inhalte dieser Website bei:

GitHub Pages
GitHub, Inc., USA

Beim Aufruf der Website können durch den Hoster Server-Logfiles verarbeitet werden, zum Beispiel IP-Adresse, Datum und Uhrzeit des Zugriffs, angeforderte Seite oder Datei, Browsertyp, Betriebssystem und Referrer-URL. Diese Daten werden in der Regel benötigt, um den sicheren und stabilen Betrieb der Website zu gewährleisten.

Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in der sicheren, stabilen und zuverlässigen Bereitstellung dieser Website.

4. Kontaktaufnahme
Kontaktformular

Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Formular einschließlich der von Ihnen dort angegebenen Kontaktdaten zur Bearbeitung der Anfrage und für den Fall von Anschlussfragen verarbeitet.

Für die technische Abwicklung und Übermittlung von Kontaktformularanfragen nutzen wir den Dienst Form.taxi.

Anbieter von Form.taxi ist:

wrkt*biz Reinhard Söllradl
4070 Eferding
Österreich
E-Mail: support@form.taxi

Die von Ihnen im Kontaktformular eingegebenen Daten werden an Form.taxi übermittelt, dort verarbeitet und zur Zustellung Ihrer Nachricht an uns verwendet. Hierzu können insbesondere folgende Daten verarbeitet werden:

Name, E-Mail-Adresse, Telefonnummer, Inhalt der Nachricht, Zeitpunkt der Übermittlung sowie technische Daten wie IP-Adresse, Browsertyp, Domain der Website und Zeitpunkt des Zugriffs.

Form.taxi kann die Inhalte von Formularsendungen für eine begrenzte Dauer speichern, um die Formularübermittlung technisch bereitzustellen und eine zuverlässige Zustellung zu ermöglichen. Nach Angaben des Anbieters erfolgt die Verarbeitung und Speicherung innerhalb der Europäischen Union.

Soweit im Kontaktformular Spam-Schutz-, Captcha-, Honeypot- oder Filterfunktionen eingesetzt werden, können hierfür zusätzliche technische Daten verarbeitet werden, um missbräuchliche oder automatisierte Formularübermittlungen zu erkennen und zu verhindern.

Rechtsgrundlage für die Verarbeitung Ihrer Anfrage ist Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage auf den Abschluss oder die Durchführung eines Vertrags gerichtet ist. In allen übrigen Fällen erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in der effektiven Bearbeitung der an uns gerichteten Anfragen sowie im Schutz des Kontaktformulars vor Missbrauch und Spam.

Kontakt per E-Mail oder Telefon

Wenn Sie uns per E-Mail oder telefonisch kontaktieren, wird Ihre Anfrage einschließlich der daraus hervorgehenden personenbezogenen Daten, zum Beispiel Name, Kontaktdaten und Inhalt der Anfrage, zum Zwecke der Bearbeitung Ihrer Anfrage verarbeitet.

Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage auf den Abschluss oder die Durchführung eines Vertrags gerichtet ist. In allen übrigen Fällen erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.

5. Speicherdauer

Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.

Kontaktanfragen speichern wir in der Regel für 730 Tage, also 24 Monate, beziehungsweise so lange, wie es zur Bearbeitung erforderlich ist. Anschließend löschen wir diese Daten, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen, zum Beispiel bei geschäftlicher Korrespondenz oder steuerrelevanten Unterlagen.

6. Empfänger von personenbezogenen Daten

Eine Weitergabe Ihrer personenbezogenen Daten erfolgt nur, soweit dies zur Bereitstellung dieser Website oder zur Bearbeitung Ihrer Anfrage erforderlich ist.

Dabei können folgende Kategorien von Empfängern eingesetzt werden:

Hosting und Website-Auslieferung: GitHub Pages, GitHub, Inc., USA
DNS, Reverse Proxy oder CDN, je nach technischer Konfiguration: Cloudflare, Inc., USA
E-Mail-Weiterleitung und E-Mail-Empfang: Cloudflare Email Routing und Google/Gmail, USA
Kontaktformular-Abwicklung und Formularübermittlung: Form.taxi, wrkt*biz Reinhard Söllradl, Österreich
Spam-Schutz und Missbrauchsprävention im Rahmen des Kontaktformulars: Form.taxi beziehungsweise die dort eingesetzten technischen Schutzmechanismen

Eine Übermittlung an weitere Dritte erfolgt nur, wenn hierfür eine gesetzliche Grundlage besteht, Sie eingewilligt haben oder dies zur Bearbeitung Ihrer Anfrage beziehungsweise zur Vertragserfüllung erforderlich ist.

7. Ihre Rechte

Sie haben nach Maßgabe der gesetzlichen Vorschriften insbesondere folgende Rechte:

Auskunft über Ihre gespeicherten personenbezogenen Daten gemäß Art. 15 DSGVO
Berichtigung unrichtiger personenbezogener Daten gemäß Art. 16 DSGVO
Löschung personenbezogener Daten gemäß Art. 17 DSGVO
Einschränkung der Verarbeitung gemäß Art. 18 DSGVO
Datenübertragbarkeit gemäß Art. 20 DSGVO
Widerspruch gegen bestimmte Verarbeitungen gemäß Art. 21 DSGVO
Beschwerde bei einer Aufsichtsbehörde gemäß Art. 77 DSGVO

Zur Ausübung Ihrer Rechte können Sie sich jederzeit an die oben genannte verantwortliche Stelle wenden.

8. Sicherheit

Wir treffen geeignete technische und organisatorische Maßnahmen, um Ihre Daten gegen zufällige oder vorsätzliche Manipulationen, teilweisen oder vollständigen Verlust, Zerstörung oder gegen den unbefugten Zugriff Dritter zu schützen.

Die Übertragung dieser Website erfolgt verschlüsselt über HTTPS. Sie erkennen eine verschlüsselte Verbindung daran, dass die Adresszeile des Browsers mit „https://“ beginnt und in der Regel ein Schloss-Symbol angezeigt wird.`,
  },
};
