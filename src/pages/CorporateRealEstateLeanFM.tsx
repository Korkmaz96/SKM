import ServiceDetailPage from "@/components/ServiceDetailPage";

const items = [
  "Optimierung von technischen Immobilienprozessen",
  "Steuerung von Instandhaltungs- und Modernisierungsmaßnahmen",
  "Schnittstelle zwischen Eigentümer, Facility Management und Dienstleistern",
  "Unterstützung bei Ausschreibungen und strategischer Portfolioausrichtung",
  "Lifecycle- und Wirtschaftlichkeitsbetrachtungen",
  "Prozess- und Organisationsanalysen im CRE/FM-Umfeld",
];

const CorporateRealEstateLeanFM = () => {
  return (
    <ServiceDetailPage
      number="03"
      title="Corporate Real Estate & Facility Management"
      intro="Beratung an der Schnittstelle von Technik, Organisation und Immobilienwirtschaft - aus der Praxis des Corporate Real Estate."
      items={items}
    />
  );
};

export default CorporateRealEstateLeanFM;
