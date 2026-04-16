import heroCreFm from "@/assets/hero-cre-fm.png";
import introCreFm from "@/assets/intro-cre-fm1.png";
import ServiceDetailPage from "@/components/ServiceDetailPage";

const CorporateRealEstateLeanFM = () => {
  return (
    <ServiceDetailPage
      number="03"
      title="Corporate Real Estate & Facility Management | SKM Management"
      eyebrow="CORPORATE REAL ESTATE & FACILITY MANAGEMENT"
      heroHeadline="Technische Immobilienprozesse müssen wirtschaftlich, transparent und umsetzbar steuerbar sein."
      heroSubline="SKM Management verbindet technische Tiefe mit realer Corporate-Real-Estate- und Facility-Management-Erfahrung und schafft belastbare Entscheidungsgrundlagen für Bestand, Betrieb und Investitionen."
      heroImage={heroCreFm}
      heroImageAlt="Technische Steuerung von Immobilienprozessen im Corporate Real Estate und Facility Management"
      breakStatement="Bestand steuern. Maßnahmen priorisieren. Schnittstellen zwischen Technik, Betrieb und Management belastbar führen."
      breakSubtext="SKM übersetzt technische Handlungsbedarfe, Dienstleistersteuerung und Modernisierungsfragen in tragfähige Prozesse und klare Entscheidungslogiken."
      introHeadline="Corporate Real Estate entfaltet seinen Wert nicht durch reine Verwaltung, sondern durch klare technische Steuerung."
      introBody={[
        "Corporate Real Estate entfaltet seinen Wert nicht durch reine Verwaltung, sondern durch klare technische Steuerung. SKM Management begleitet Unternehmen, Eigentümer und verantwortliche Entscheider dort, wo Betrieb, Instandhaltung, Modernisierung und Dienstleistersteuerung in tragfähige Immobilienprozesse übersetzt werden müssen.",
        "Grundlage ist praktische Erfahrung aus dem technischen Management komplexer Portfolios im Unternehmenskontext mit Blick auf Werterhalt, Effizienz und belastbare Betreiberstrukturen.",
        "Die Beratung ist bewusst nah an der Realität des Bestands: Technische Handlungsbedarfe müssen priorisiert, Ausschreibungen sauber aufgesetzt, Dienstleister wirksam gesteuert und Maßnahmen wirtschaftlich eingeordnet werden.",
      ]}
      introImage={introCreFm}
      introImageAlt="Bestandsimmobilie und technische Bewirtschaftung im Corporate Real Estate Umfeld"
      trustItems={[
        "Seit September 2023: Technical Property Manager / Corporate Real Estate Management bei VECTOR Informatik.",
        "Praxis in der Steuerung technischer Immobilienprozesse für eigengenutzte sowie angemietete und vermietete Unternehmensstandorte.",
        "M.Sc. Wirtschaftsingenieurwesen mit Fachrichtung Facility Management sowie weiterführende FM-Qualifikationen bis hin zum zertifizierten Facility Manager.",
      ]}
      tabs={[
        {
          label: "Prozesse",
          content:
            "Technische Immobilienprozesse werden so analysiert und strukturiert, dass Bestand, Betrieb und Investitionen nicht reaktiv, sondern nachvollziehbar steuerbar werden. Im Fokus stehen Transparenz, Priorisierung und eine belastbare Übersetzung technischer Themen in Management- und Betreiberlogiken.",
        },
        {
          label: "Maßnahmen",
          content:
            "Instandhaltungs-, Umbau- und Modernisierungsmaßnahmen werden fachlich begleitet und in ihren Auswirkungen auf Betrieb, Nutzung und Werterhalt eingeordnet. Dadurch entstehen Entscheidungsgrundlagen, die technische Notwendigkeit und wirtschaftliche Umsetzbarkeit zusammenführen.",
        },
        {
          label: "Schnittstellen",
          content:
            "Zwischen Eigentümer, Facility Management, Nutzern und externen Dienstleistern entstehen häufig Reibungsverluste. SKM ordnet diese Schnittstellen, klärt Verantwortlichkeiten und schafft eine Form der technischen Steuerung, die intern anschlussfähig und operativ praktikabel bleibt.",
        },
        {
          label: "Ausschreibung",
          content:
            "Ausschreibungen, Vergabestrukturen und die strategische Ausrichtung technischer Leistungen werden so vorbereitet, dass sie nicht isoliert auf Preise, sondern auf Nutzungsanforderungen, Betreiberpflichten und langfristigen Werterhalt ausgerichtet sind.",
        },
        {
          label: "Wirtschaftlichkeit",
          content:
            "Lifecycle-, Wirtschaftlichkeits- und Werterhaltungsbetrachtungen schaffen Klarheit darüber, welche Maßnahmen im Bestand technisch sinnvoll und wirtschaftlich vertretbar priorisiert werden sollten. So werden CAPEX- und OPEX-Themen mit realen technischen Handlungsbedarfen verknüpft.",
        },
        {
          label: "Organisation",
          content:
            "Prozess- und Organisationsanalysen schaffen belastbare Grundlagen für nachhaltige Betriebsfähigkeit. Ziel ist kein abstraktes Beratungspapier, sondern eine Struktur, die technische Steuerung, Dienstleistermanagement und Portfolioperspektive sauber zusammenführt.",
        },
      ]}
      contexts={[
        {
          eyebrow: "BEI REAKTIVER BESTANDSSTEUERUNG",
          body: "Wenn technische Themen zwischen Tagesbetrieb, CAPEX- und OPEX-Druck sowie internen Schnittstellen verloren gehen und Entscheidungen vor allem reaktiv statt priorisiert getroffen werden.",
        },
        {
          eyebrow: "BEI INSTANDHALTUNG UND MODERNISIERUNG",
          body: "Wenn Umbau-, Instandhaltungs- oder Modernisierungsmaßnahmen technisch eingeordnet, priorisiert und sauber mit Nutzungsanforderungen, Werterhalt und Betreiberperspektive verzahnt werden müssen.",
        },
        {
          eyebrow: "BEI AUSSCHREIBUNGEN UND DIENSTLEISTERSTEUERUNG",
          body: "Wenn externe Leistungen, Ausschreibungen und Betreuungskonzepte nicht ausreichend mit Bestand, Betrieb und langfristiger Immobilienstrategie verbunden sind und deshalb klare Steuerungsgrundlagen fehlen.",
        },
      ]}
      ctaHeadline="Technische Immobiliensteuerung braucht belastbare Entscheidungsgrundlagen."
      ctaSubtext="Wir klären gern, wie SKM Ihr Corporate-Real-Estate- oder Facility-Management-Umfeld technisch, organisatorisch und wirtschaftlich fundiert unterstützen kann."
      ctaButtonLabel="Erstgespräch anfragen"
    />
  );
};

export default CorporateRealEstateLeanFM;
