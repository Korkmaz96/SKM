// SKM Management - Centralized Content & Navigation

export const company = {
  name: "SKM Management",
  tagline: "Technische Beratung & Sachverständigenleistungen",
  email: "sefa-korkmaz@web.de",
  phone: "+49163xxx",
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
        { label: "Betreiberverantwortung & Organisation", href: "/leistungen/betreiberverantwortung-organisation" },
        { label: "Corporate Real Estate & Lean FM", href: "/leistungen/corporate-real-estate-lean-fm" },
      ],
    },
    { label: "Referenzen", href: "/referenzen" },
    { label: "Unternehmen", href: "/unternehmen" },
    { label: "Kontakt", href: "/kontakt" },
  ],
  footer: {
    leistungen: [
      { label: "Sachverständigenleistungen", href: "/leistungen/sachverstaendigenleistungen" },
      { label: "Betreiberverantwortung & Organisation", href: "/leistungen/betreiberverantwortung-organisation" },
      { label: "Corporate Real Estate & Lean FM", href: "/leistungen/corporate-real-estate-lean-fm" },
    ],
    unternehmen: [
      { label: "Über uns", href: "/unternehmen" },
      { label: "Referenzen", href: "/referenzen" },
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
    intro: "Einleitungstext zur Leistungsübersicht",
  },
  clusters: [
    {
      id: "sachverstaendigenleistungen",
      number: "01",
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
      id: "betreiberverantwortung-organisation",
      number: "02",
      title: "Betreiberverantwortung & Organisation",
      shortDescription: "Strukturierte Analyse und Aufbau rechtssicherer Betreiberpflichten-Prozesse.",
      href: "/leistungen/betreiberverantwortung-organisation",
      items: [
        "Analyse und Aufbau von Betreiberpflichten-Strukturen",
        "Prüfung von Verantwortlichkeiten und Prozessen",
        "Unterstützung bei rechtssicherer Organisation technischer Aufgaben",
        "Audits und Handlungsempfehlungen",
      ],
    },
    {
      id: "corporate-real-estate-lean-fm",
      number: "03",
      title: "Corporate Real Estate & Lean FM",
      shortDescription: "Prozess- und Organisationsberatung an der Schnittstelle von Technik und Management.",
      href: "/leistungen/corporate-real-estate-lean-fm",
      items: [
        "Prozess- und Organisationsanalysen im CRE/FM",
        "Lifecycle- und Wirtschaftlichkeitsbetrachtungen",
        "Schnittstelle Technik - Organisation - Management",
        "Entwicklung pragmatischer, umsetzbarer Konzepte",
      ],
    },
  ],
};

export const homepage = {
  hero: {
    headline: "SKM Management",
    subheadline: "Technische Beratung für Immobilien und Anlagen",
    description: "Sachverständigenleistungen, Betreiberverantwortung und Corporate Real Estate - strukturiert, risikoorientiert, wirtschaftlich.",
  },
  arbeitsweise: {
    headline: "Arbeitsweise",
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
  intro: "Einleitungstext über das Unternehmen",
  inhaber: {
    name: "Sefa Korkmaz",
    title: "Geschäftsführer & Inhaber",
    shortBio: "Kurzvorstellung des Inhabers, fachlicher Hintergrund und Schwerpunkte.",
    image: "inhaber-placeholder",
  },
  werdegang: {
    title: "Werdegang",
    stations: [
      { year: "Seit [Jahr]", role: "Geschäftsführer & Inhaber", company: "SKM Management", description: "Beschreibung der aktuellen Tätigkeit" },
      { year: "[Jahr] - [Jahr]", role: "Position", company: "Unternehmen", description: "Beschreibung" },
      { year: "[Jahr] - [Jahr]", role: "Position", company: "Unternehmen", description: "Beschreibung" },
      { year: "[Jahr] - [Jahr]", role: "Position", company: "Unternehmen", description: "Beschreibung" },
      { year: "[Jahr]", role: "Studienabschluss / Ausbildung", company: "Hochschule / Institution", description: "Beschreibung" },
    ],
  },
  profil: {
    title: "Unternehmensprofil",
    content: "Ausführlicher Text über SKM Management, Gründung, Ausrichtung, Werte und Arbeitsphilosophie.",
  },
  sections: {
    positionierung: {
      title: "Positionierung",
      content: "Text zur Positionierung des Unternehmens",
    },
    arbeitsweise: {
      title: "Arbeitsweise",
      content: "Text zur Arbeitsweise",
    },
    qualifikation: {
      title: "Qualifikation & Vertrauen",
      points: [
        {
          title: "Technische Fachkompetenz",
          description: "Fundiertes Know-how in der Bewertung von Gebäuden, technischen Anlagen und Infrastruktur - erworben durch langjährige Praxis in anspruchsvollen Projekten.",
        },
        {
          title: "Strukturierte Arbeitsweise",
          description: "Methodisches, nachvollziehbares Vorgehen in jeder Projektphase - von der Analyse über die Bewertung bis zur dokumentierten Handlungsempfehlung.",
        },
        {
          title: "Unabhängigkeit & Verlässlichkeit",
          description: "Neutrale, interessenunabhängige Beratung und Bewertung - als verlässlicher Partner für Eigentümer, Betreiber und Investoren.",
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
    emailPlaceholder: "ihre.email@beispiel.de",
    messageLabel: "Nachricht",
    messagePlaceholder: "Ihre Nachricht an uns...",
    submitLabel: "Nachricht senden",
    dsgvoText: "DSGVO-Einwilligungstext",
    successMessage: "Vielen Dank für Ihre Nachricht. Wir melden uns zeitnah bei Ihnen.",
    errorMessage: "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.",
  },
};

export const legal = {
  impressum: {
    headline: "Impressum",
    content: "Impressumsangaben gemäß § 5 TMG",
  },
  datenschutz: {
    headline: "Datenschutzerklärung",
    content: "Datenschutzerklärung gemäß DSGVO",
  },
};
