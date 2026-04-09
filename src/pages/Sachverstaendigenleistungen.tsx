import ServiceDetailPage from "@/components/ServiceDetailPage";

const items = [
  "Bewertung von Gebäudezuständen und technischen Anlagen (TGA)",
  "Analyse von Bauschäden (z. B. Wasserschäden, Korrosion)",
  "Technische Zustandsanalysen und Dokumentationsprüfungen",
  "Erstellung fachlicher Stellungnahmen und Berichte",
];

const Sachverstaendigenleistungen = () => {
  return (
    <ServiceDetailPage
      number="01"
      title="Sachverständigenleistungen"
      intro="Technisch fundierte Bewertungen und fachliche Stellungnahmen für Gebäude, Anlagen und Immobilienprozesse."
      items={items}
      subline="Fokus: Objektivität, Nachvollziehbarkeit, Risikominimierung."
    />
  );
};

export default Sachverstaendigenleistungen;
