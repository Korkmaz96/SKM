import ServiceDetailPage from "@/components/ServiceDetailPage";

const items = [
  "Analyse und Strukturierung von Betreiberpflichten",
  "Unterstützung bei der rechtssicheren Organisation technischer Aufgaben",
  "Durchführung von Begehungen und Zustandsprüfungen",
  "Erstellung von Prüf- und Zustandsberichten",
  "Gefährdungsbeurteilungen und Brandschutzorganisation",
  "Tätigkeit als betrieblicher Brandschutzbeauftragter (TÜV Rheinland, zertifiziert gem. DIN EN ISO/IEC 17024)",
];

const BetreiberverantwortungOrganisation = () => {
  return (
    <ServiceDetailPage
      number="02"
      title="Betreiberverantwortung & technischer Brandschutz"
      intro="Strukturierung und rechtssichere Organisation von Betreiberpflichten - einschließlich technischem Brandschutz auf zertifiziertem Niveau."
      items={items}
      highlight="Zertifizierter betrieblicher Brandschutzbeauftragter (TÜV Rheinland) - Personenzertifizierung nach DIN EN ISO/IEC 17024, unbefristet anerkannt."
    />
  );
};

export default BetreiberverantwortungOrganisation;
