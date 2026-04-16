import heroBetreiber from "@/assets/hero-betreiber.png";
import introBetreiberBrandschutz from "@/assets/intro-betreiber-brandschutz.png";
import ServiceDetailPage from "@/components/ServiceDetailPage";

const BetreiberverantwortungOrganisation = () => {
  return (
    <ServiceDetailPage
      number="02"
      title="Betreiberverantwortung & technischer Brandschutz | SKM Management"
      eyebrow="BETREIBERVERANTWORTUNG & TECHNISCHER BRANDSCHUTZ"
      heroHeadline="Betreiberpflichten und technischer Brandschutz müssen organisatorisch tragfähig umgesetzt sein."
      heroSubline="SKM Management strukturiert Verantwortlichkeiten, Prüfprozesse und Dokumentationspflichten so, dass technische Betreiberstrukturen nachvollziehbar, belastbar und haftungssicherer werden."
      heroImage={heroBetreiber}
      heroImageAlt="Technische Begehung zur Betreiberverantwortung und zum betrieblichen Brandschutz"
      breakStatement="Verantwortung klar zuordnen. Risiken früh sichtbar machen. Technische Governance belastbar aufsetzen."
      breakSubtext="SKM verbindet Betreiberverantwortung mit zertifiziertem technischem Brandschutz und schafft nachvollziehbare Organisations- und Berichtsgrundlagen."
      introHeadline="Betreiberverantwortung scheitert in der Praxis selten am Problembewusstsein, sondern an unklaren Zuständigkeiten."
      introBody={[
        "Betreiberverantwortung scheitert in der Praxis selten am fehlenden Problembewusstsein, sondern an unklaren Zuständigkeiten, uneinheitlichen Prozessen und lückenhafter Dokumentation. SKM Management unterstützt Unternehmen und Organisationen dabei, technische Betreiberpflichten nachvollziehbar zu strukturieren und den betrieblichen Brandschutz mit der notwendigen fachlichen und organisatorischen Sorgfalt aufzusetzen.",
        "Der Anspruch ist nicht abstrakte Regelkunde, sondern eine belastbare Übersetzung von Verantwortung in klare Aufgaben, Zustandsbilder und umsetzbare Maßnahmen.",
        "Besondere Stärke ist die Verbindung aus Betreiberverantwortung und zertifiziertem technischem Brandschutz. Damit entsteht ein Leistungsprofil, das nicht nur Risiken benennt, sondern Verantwortlichkeiten konkretisiert, Begehungen fachlich fundiert begleitet und Berichte liefert, die intern wie extern anschlussfähig sind.",
      ]}
      introImage={introBetreiberBrandschutz}
      introImageAlt="Dokumentation und technische Prüfung im Kontext von Betreiberpflichten und Brandschutz"
      trustItems={[
        "Personenzertifizierter betrieblicher Brandschutzbeauftragter durch den TÜV Rheinland auf Basis DIN EN ISO/IEC 17024.",
        "Verantwortliche Person für Sprinkler- und Sprühwasserlöschanlagen auf TÜV-zertifizierter Grundlage.",
        "Fachliche Grundlage in Brandschutzorganisation, Gefährdungsbeurteilung sowie in der Schnittstelle zu Behörden und Versicherern.",
      ]}
      tabs={[
        {
          label: "Analyse",
          content:
            "Bestehende Betreiberpflichten, technische Verantwortlichkeiten und Dokumentationsstände werden daraufhin untersucht, wo organisatorische Lücken, unklare Rollen oder risikobehaftete Schnittstellen bestehen. Ziel ist ein belastbares Zustandsbild, das Verantwortung nicht abstrakt beschreibt, sondern konkret verortet.",
        },
        {
          label: "Organisation",
          content:
            "Technische Aufgaben und Betreiberprozesse werden so strukturiert, dass Zuständigkeiten, Abläufe und Nachweise nachvollziehbar geregelt sind. Damit entsteht eine organisatorische Grundlage, die Haftungsrisiken reduziert und im technischen Betrieb tragfähig funktioniert.",
        },
        {
          label: "Begehungen",
          content:
            "Begehungen und Zustandsprüfungen machen sichtbar, wo der tatsächliche Ist-Zustand von formalen Annahmen oder vorhandenen Unterlagen abweicht. Daraus werden konkrete Handlungsbedarfe abgeleitet, die technisch nachvollziehbar und priorisierbar sind.",
        },
        {
          label: "Berichte",
          content:
            "Prüf-, Zustands- und Risikoberichte verdichten Befunde so, dass sie intern wie extern anschlussfähig sind. Sie schaffen eine nachvollziehbare Grundlage für Entscheidungen gegenüber Management, Betrieb, Behörden, Versicherern oder weiteren Anspruchsgruppen.",
        },
        {
          label: "Brandschutz",
          content:
            "Der betriebliche Brandschutz wird nicht isoliert betrachtet, sondern als integraler Teil einer belastbaren Betreiberorganisation. SKM unterstützt bei Gefährdungsbeurteilungen, Brandschutzorganisation und der fachlich fundierten Wahrnehmung brandschutzbezogener Aufgaben auf zertifizierter Grundlage.",
        },
      ]}
      contexts={[
        {
          eyebrow: "BEI UNKLAREN VERANTWORTLICHKEITEN",
          body: "Wenn in Immobilienorganisationen Rollen, Prüfprozesse und Dokumentationspflichten nicht sauber geregelt sind und daraus Haftungs- und Betriebsrisiken entstehen.",
        },
        {
          eyebrow: "BEI ORGANISATORISCHEN BRANDSCHUTZLÜCKEN",
          body: "Wenn technischer Brandschutz vorhanden ist, aber nicht durchgängig in Prozesse, Zuständigkeiten und Nachweise eingebettet wurde und dadurch Risiken gegenüber Betrieb, Versicherern oder Behörden entstehen.",
        },
        {
          eyebrow: "BEI PRÜFUNGEN ODER SCHADENSEREIGNISSEN",
          body: "Wenn Begehungen, Zustandsprüfungen oder Berichte benötigt werden, um technische Sachverhalte belastbar zu dokumentieren und Handlungsbedarfe nachvollziehbar abzuleiten.",
        },
      ]}
      ctaHeadline="Betreiberverantwortung braucht belastbare Strukturen."
      ctaSubtext="Wir klären gern, wie SKM Betreiberpflichten und technischen Brandschutz in Ihrem Bestand organisatorisch und fachlich fundiert unterstützen kann."
      ctaButtonLabel="Erstgespräch anfragen"
    />
  );
};

export default BetreiberverantwortungOrganisation;
