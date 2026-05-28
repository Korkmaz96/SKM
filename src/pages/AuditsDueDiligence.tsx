import heroAudit from "@/assets/hero-audit.png";
import introAudit from "@/assets/intro-audit.png";
import ServiceDetailPage from "@/components/ServiceDetailPage";

const AuditsDueDiligence = () => {
  return (
    <ServiceDetailPage
      number="04"
      title="Technische Audits & Due Diligence | SKM Management"
      eyebrow="TECHNISCHE AUDITS & DUE DILIGENCE"
      heroHeadline="Fundierte Entscheidungen beginnen mit einer belastbaren technischen Grundlage."
      heroSubline="SKM Management prüft Bestandsimmobilien systematisch auf technische Risiken, Instandhaltungsbedarf und Investitionsrelevanz – als unabhängige Entscheidungsgrundlage für Eigentümer, Investoren und Unternehmen."
      heroImage={heroAudit}
      heroImageAlt="Technische Prüfung und Zustandsanalyse einer Bestandsimmobilie"
      breakStatement="Substanz bewerten. Risiken einordnen. Technische Klarheit schaffen, bevor Entscheidungen fallen."
      breakSubtext="SKM liefert strukturierte technische Analysen, die Zustand, Handlungsbedarf und wirtschaftliche Tragweite von Bestandsimmobilien nachvollziehbar aufbereiten."
      introHeadline="Technische Audits schaffen die Grundlage, auf der Investitions-, Bestands- und Portfolioentscheidungen belastbar getroffen werden können."
      introBody={[
        "Ob bei Ankauf, Bestandsoptimierung oder strategischer Portfoliosteuerung – technische Entscheidungen brauchen eine belastbare Faktenlage. SKM Management führt technische Audits und Due-Diligence-Prüfungen durch, die den Zustand von Gebäuden und Anlagen systematisch erfassen und bewerten.",
        "Im Fokus stehen dabei nicht abstrakte Gutachten, sondern praxisnahe Analysen: Was ist der tatsächliche technische Zustand? Welche Risiken bestehen? Welcher Instandhaltungs- oder Modernisierungsbedarf ist absehbar? Welche Investitionen sind kurz-, mittel- und langfristig erforderlich?",
        "Die Ergebnisse werden so aufbereitet, dass sie als Entscheidungsgrundlage für Eigentümer, Geschäftsführungen, Investoren oder interne Immobilienverantwortliche direkt nutzbar sind.",
      ]}
      introImage={introAudit}
      introImageAlt="Strukturierte Gebäudeanalyse und technische Bestandsbewertung"
      trustItems={[
        "Praxis in der technischen Bewertung von Gewerbe-, Industrie- und Unternehmensimmobilien.",
        "Unabhängige Analyse ohne Bindung an ausführende Unternehmen oder Dienstleister.",
      ]}
      tabs={[
        {
          label: "Zustandserfassung",
          content:
            "Systematische Aufnahme des baulichen und anlagentechnischen Zustands. Bewertung von Substanz, Alter, Wartungszustand und dokumentiertem Instandhaltungsverlauf als Basis für technische Einschätzungen.",
        },
        {
          label: "Risikobewertung",
          content:
            "Identifikation und Einordnung technischer Risiken – von akuten Mängeln über absehbare Ausfallrisiken bis hin zu regulatorischen Anforderungen, die kurz- oder mittelfristig Handlungsbedarf auslösen.",
        },
        {
          label: "Investitionsbedarf",
          content:
            "Ableitung von Instandhaltungs-, Modernisierungs- und Investitionsbedarfen mit Zeithorizonten und Kostenschätzungen. Priorisierung nach technischer Dringlichkeit und wirtschaftlicher Relevanz.",
        },
        {
          label: "Ankauf & Transaktion",
          content:
            "Technische Due Diligence im Rahmen von Ankaufsprüfungen: Bewertung von Risiken, versteckten Mängeln und absehbarem CAPEX als Entscheidungsgrundlage für Kaufpreisverhandlungen oder Investitionsentscheidungen.",
        },
        {
          label: "Bestand & Portfolio",
          content:
            "Technische Bestandsaufnahmen für Portfolios oder Einzelobjekte im laufenden Betrieb – als Grundlage für Budgetplanung, Priorisierung und langfristige Werterhaltungsstrategien.",
        },
      ]}
      contexts={[
        {
          eyebrow: "BEI ANKAUF ODER INVESTITION",
          body: "Wenn vor einer Kaufentscheidung oder Investition der tatsächliche technische Zustand, verdeckte Risiken und absehbare Folgekosten einer Immobilie belastbar eingeschätzt werden müssen.",
        },
        {
          eyebrow: "BEI BESTANDSOPTIMIERUNG",
          body: "Wenn im laufenden Betrieb unklar ist, welche technischen Maßnahmen prioritär sind, welche Substanzrisiken bestehen und wie Instandhaltungsbudgets sinnvoll eingesetzt werden.",
        },
        {
          eyebrow: "BEI PORTFOLIOENTSCHEIDUNGEN",
          body: "Wenn für mehrere Objekte eine vergleichbare technische Bewertungsbasis geschaffen werden soll, um Portfolioentscheidungen auf belastbare Daten statt auf Annahmen zu stützen.",
        },
      ]}
      ctaHeadline="Technische Klarheit als Entscheidungsgrundlage."
      ctaSubtext="Wir klären gern, wie SKM Sie bei der technischen Prüfung und Bewertung von Bestandsimmobilien fundiert unterstützen kann."
      ctaButtonLabel="Erstgespräch anfragen"
    />
  );
};

export default AuditsDueDiligence;
