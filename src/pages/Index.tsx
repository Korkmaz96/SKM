import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ServicesCards from "@/components/ServicesCards";
import Arbeitsweise from "@/components/Arbeitsweise";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ServicesCards />
      <Arbeitsweise />
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
              Interesse an einer Zusammenarbeit?
            </h2>
            <p className="mb-10 text-base leading-relaxed text-muted-foreground">
              Kontaktieren Sie uns für ein unverbindliches Gespräch.
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

export default Index;
