import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import { referenzen } from "@/content/content";

const Referenzen = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h1 className="text-minimal text-muted-foreground mb-4">REFERENZEN</h1>
              <h2 className="text-4xl md:text-6xl font-light text-architectural mb-8">
                {referenzen.subheadline}
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl">
                {referenzen.intro}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {referenzen.placeholders.map((item) => (
                <div 
                  key={item.id}
                  className="p-8 bg-background border border-border hover:shadow-elegant transition-shadow duration-300"
                >
                  <span className="text-minimal text-muted-foreground">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-light mt-3 mb-4 text-architectural">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="mt-16 p-8 bg-muted border border-border text-center">
              <p className="text-muted-foreground">
                Detaillierte Referenzen und Projektbeschreibungen stellen wir Ihnen gerne auf Anfrage zur Verfügung.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <ContactCTA 
        headline="Interesse an unserer Projekterfahrung?"
        description="Gerne stellen wir Ihnen passende Referenzen zu Ihrem Vorhaben vor."
      />
      <Footer />
    </div>
  );
};

export default Referenzen;
