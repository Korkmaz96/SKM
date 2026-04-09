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
        { label: "Corporate Real Estate & Facility Management", href: "/leistungen/corporate-real-estate-facility-management" },
      ],
    },
    { label: "Unternehmen", href: "/unternehmen" },
    { label: "Kontakt", href: "/kontakt" },
  ],
  footer: {
    leistungen: [
      { label: "Sachverständigenleistungen", href: "/leistungen/sachverstaendigenleistungen" },
      { label: "Betreiberverantwortung & technischer Brandschutz", href: "/leistungen/betreiberverantwortung-technischer-brandschutz" },
      { label: "Corporate Real Estate & Facility Management", href: "/leistungen/corporate-real-estate-facility-management" },
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
      id: "betreiberverantwortung-technischer-brandschutz",
      number: "02",
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
      id: "corporate-real-estate-facility-management",
      number: "03",
      title: "Corporate Real Estate & Facility Management",
      shortDescription: "Prozess- und Organisationsberatung an der Schnittstelle von Technik und Management.",
      href: "/leistungen/corporate-real-estate-facility-management",
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
    description: "Technische Bewertung und strukturierte Steuerung von Immobilien mit Fokus auf Betreiberverantwortung, Werterhalt und Risikominimierung.",
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
        role: "Technischer Immobiliensachverständiger",
        company: "SKM Management",
        description: "Nebenberuflicher, projektbezogener Aufbau eines Sachverständigen- und Beratungsbüros mit Fokus auf technische Bewertungen, Gebäudezustand, Betreiberverantwortung und technische Risiken.",
      },
      {
        year: "Seit 2023",
        role: "Technical Property Manager / Corporate Real Estate Management",
        company: "VECTOR Informatik",
        description: "Verantwortung für technisches Immobilienmanagement, Betreiberstrukturen und nachhaltige Portfolioentwicklung im Corporate-Real-Estate-Umfeld eines internationalen Technologieunternehmens.",
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
        year: "2021 - 2023",
        role: "Master of Science",
        company: "Technische Hochschule Mittelhessen",
        description: "Berufsbegleitender Abschluss im Wirtschaftsingenieurwesen mit Fachrichtung Facility Management als fundierte Ergänzung zur praktischen Laufbahn.",
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
