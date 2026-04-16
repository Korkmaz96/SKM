import ServiceDetailPage from "@/components/ServiceDetailPage";

const Sachverstaendigenleistungen = () => {
  return (
    <ServiceDetailPage
      number="01"
      title="Sachverständigenleistungen | SKM Management"
      eyebrow="SACHVERSTÄNDIGENLEISTUNGEN"
      heroHeadline="Technische Sachverhalte müssen belastbar bewertet sein."
      heroSubline="Technisch fundierte Bewertungen und fachliche Stellungnahmen für Gebäude, Anlagen und Immobilienprozesse."
      // TODO: Replace with real image – see briefs/06-bildstrategie.md
      heroImage="/src/assets/hero-sv-leistungen.png"
      heroImageAlt="Begehung eines Bestandsgebäudes – technische Zustandsbewertung"
      breakStatement="Objektive technische Einordnung. Belastbare Entscheidungsgrundlagen."
      breakSubtext="SKM verdichtet Befunde, Zustandsbilder und Dokumentation zu nachvollziehbaren Bewertungsgrundlagen."
      introHeadline="Technische Fragestellungen werden teuer, wenn Zustände nur vermutet statt belastbar bewertet werden."
      introBody={[
        "SKM unterstützt Unternehmen, Eigentümer und Organisationen mit technisch fundierten Sachverständigenleistungen, die Gebäude, Anlagen und Schadensbilder objektiv einordnen und daraus tragfähige Entscheidungsgrundlagen ableiten.",
        "Im Mittelpunkt stehen keine pauschalen Urteile, sondern nachvollziehbare technische Bewertungen, die Risiken sichtbar machen, Sanierungsbedarf strukturieren und Verantwortliche handlungsfähig machen.",
        "Bewertet werden Gebäudezustände, technische Anlagen und kritische Schnittstellen im Bestand ebenso wie Bauschäden, Wasserschäden, Korrosion oder unklare technische Dokumentationen.",
      ]}
      // TODO: Replace with real image – see briefs/06-bildstrategie.md
      introImage="/src/assets/intro-sv-leistungen.png"
      introImageAlt="Technische Anlage im Bestandsgebäude – Detailaufnahme"
      trustItems={[
        "Baupraktischer Hintergrund seit 2003 (Beton- und Stahlbetonbau)",
        "Technische Bewertungen und Sachverständigenleistungen seit 2021",
        "CRE-Portfolioverantwortung im dreistelligen Millionenbereich",
      ]}
      tabs={[
        {
          label: "Analyse",
          content:
            "Technische Anlagen und Gebäude werden systematisch auf Zustand, Funktion und Handlungsbedarf untersucht. Die Analyse unterscheidet zwischen Ist-Dokumentation, realem Befund und wirtschaftlichem Handlungsbedarf. Grundlage sind Begehungen, Dokumentenprüfungen und fachliche Einordnung des Befundes.",
          examples: ["TGA-Zustandsanalyse", "Gebäudezustandserfassung"],
        },
        {
          label: "Prüfung",
          content:
            "Vorhandene Unterlagen, Dokumentationen und Bestandsaufnahmen werden auf Plausibilität, Vollständigkeit und Aktualität geprüft. Dabei wird transparent gemacht, wo die Dokumentationslage belastbar ist und wo Lücken bestehen, die Risiken oder Handlungsbedarf erzeugen.",
          examples: [
            "Dokumentationsprüfung Bestand",
            "Plausibilitätsprüfung TGA-Dokumentation",
          ],
        },
        {
          label: "Bewertung",
          content:
            "Aus Zustandserfassung und Prüfungsergebnissen wird eine technische Bewertung erstellt, die Zustände, Risiken und Maßnahmenbedarfe klar einordnet. Das Ergebnis ist eine strukturierte Grundlage für Entscheidungen zu Instandhaltung, Sanierung oder Investition.",
          examples: [
            "Technische Anlagenbewertung",
            "Gebäudezustandsbewertung vor Investitionsentscheidung",
          ],
        },
        {
          label: "Stellungnahme",
          content:
            "Fachliche Stellungnahmen ordnen technische Sachverhalte schriftlich und nachvollziehbar ein. Sie sind intern und extern anschlussfähig – gegenüber Eigentümern, Dienstleistern, Versicherern oder Behörden. Die Stellungnahme trennt Vermutung von Befund und Befund von Handlungsempfehlung.",
          examples: [
            "Fachliche Stellungnahme Bauschaden",
            "Technische Einordnung Schadenshergang",
          ],
        },
        {
          label: "Dokumentation",
          content:
            "Technische Bewertungen, Zustandsbefunde und Handlungsempfehlungen werden in belastbarer Berichtsform dokumentiert. Die Dokumentation ist so aufgebaut, dass sie als Grundlage für Folgeentscheidungen, Ausschreibungen oder Versicherungsvorgänge genutzt werden kann.",
          examples: [
            "Zustandsbericht Bestandsgebäude",
            "Gutachtennaher Bericht Schadensanalyse",
          ],
        },
      ]}
      contexts={[
        {
          eyebrow: "VOR INVESTITIONSENTSCHEIDUNGEN",
          body: "Wenn Gebäude oder Anlagen erworben, übergeben oder veräußert werden sollen und eine technische Einordnung des Bestands fehlt, die über Sichtprüfung hinausgeht.",
        },
        {
          eyebrow: "BEI SCHADENSBILDERN",
          body: "Wenn Bauschäden, Wasserschäden, Korrosion oder unklare TGA-Situationen eine neutrale, fachlich belastbare Einordnung erfordern, die zwischen Vermutung und realem Befund unterscheidet.",
        },
        {
          eyebrow: "BEI UNKLARER DOKUMENTATIONSLAGE",
          body: "Wenn vorhandene Unterlagen lückenhaft sind, den Ist-Zustand nicht mehr widerspiegeln oder als Entscheidungsgrundlage für Instandhaltung, Sanierung oder Investition nicht ausreichen.",
        },
      ]}
      ctaHeadline="Technische Unsicherheiten brauchen belastbare Grundlagen."
      ctaSubtext="Wir klären gern, ob und wie SKM Ihr Vorhaben fachlich begleiten kann."
      ctaButtonLabel="Erstgespräch anfragen"
    />
  );
};

export default Sachverstaendigenleistungen;
