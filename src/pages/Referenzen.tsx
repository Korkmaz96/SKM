import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { referenzen } from "@/content/content";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

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
      
      <section className="relative overflow-hidden bg-background py-24 md:py-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-8 top-1/2 hidden h-[45%] w-[5px] -translate-y-1/2 bg-foreground/20 md:left-16 md:block"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-8 top-1/2 hidden h-[45%] w-[5px] -translate-y-1/2 bg-foreground/20 md:right-16 md:block"
        />
        <div className="container mx-auto">
          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-2xl font-light text-architectural md:text-4xl">
              Interesse an unserer Projekterfahrung?
            </h2>
            <p className="mb-10 text-base leading-relaxed text-muted-foreground">
              Gerne stellen wir Ihnen passende Referenzen zu Ihrem Vorhaben vor.
            </p>
            <div className="mx-auto mb-10 h-px w-12 bg-foreground/20" />
            <Link
              to="/kontakt"
              className="inline-flex w-full items-center justify-center gap-3 bg-transparent px-8 py-4 text-sm tracking-wider text-foreground transition-all duration-300 hover:bg-foreground hover:text-background sm:w-auto"
              style={{
                clipPath:
                  "polygon(6px 0%, calc(100% - 6px) 0%, 100% 6px, 100% calc(100% - 6px), calc(100% - 6px) 100%, 6px 100%, 0% calc(100% - 6px), 0% 6px)",
                boxShadow: "inset 0 0 0 1px hsl(var(--foreground) / 0.35)",
              }}
            >
              <span>Kontakt aufnehmen</span>
              <ArrowRight className="h-4 w-4 shrink-0" />
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Referenzen;
