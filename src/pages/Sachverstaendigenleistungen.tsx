import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import { services } from "@/content/content";

const Sachverstaendigenleistungen = () => {
  const cluster = services.clusters.find(c => c.id === "sachverstaendigenleistungen")!;
  
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <span className="text-minimal text-muted-foreground">{cluster.number}</span>
              <h1 className="text-4xl md:text-6xl font-light text-architectural mt-4 mb-8">
                {cluster.title}
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl">
                [FEHLT] – Einleitungstext zu Sachverständigenleistungen
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-minimal text-muted-foreground mb-12">LEISTUNGSÜBERSICHT</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {cluster.items.map((item, index) => (
                <div 
                  key={index}
                  className="p-8 bg-background border border-border"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-minimal text-muted-foreground font-medium">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-lg font-light text-architectural mb-2">
                        {item}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        [FEHLT] – Beschreibung dieser Leistung
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <ContactCTA 
        headline="Sachverständige Beratung benötigt?"
        description="Wir unterstützen Sie bei technischen Bewertungen und Gutachten."
      />
      <Footer />
    </div>
  );
};

export default Sachverstaendigenleistungen;
