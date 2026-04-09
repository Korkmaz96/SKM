import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceDetailPageProps {
  number: string;
  title: string;
  intro: string;
  items: string[];
  subline?: string;
  highlight?: string;
}

const ctaText = "Kontaktieren Sie mich gern für ein unverbindliches Erstgespräch.";

const ServiceDetailPage = ({
  number,
  title,
  intro,
  items,
  subline,
  highlight,
}: ServiceDetailPageProps) => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <span className="text-minimal text-muted-foreground">{number}</span>
              <h1 className="text-4xl md:text-6xl font-light text-architectural break-words mt-4 mb-8">
                {title}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                {intro}
              </p>
              {subline && (
                <p className="mt-6 text-sm md:text-base text-muted-foreground italic leading-relaxed">
                  {subline}
                </p>
              )}
              {highlight && (
                <div className="mt-8 max-w-3xl border border-border bg-muted/20 px-6 py-5">
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {highlight}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-minimal text-muted-foreground mb-12">LEISTUNGSÜBERSICHT</h2>

            <ul className="grid gap-6 list-none p-0 m-0 md:grid-cols-2" role="list">
              {items.map((item, index) => (
                <li key={item} className="block min-w-0 p-8 bg-background border border-border">
                  <div className="flex min-w-0 items-start gap-4">
                    <span className="text-minimal text-muted-foreground font-medium">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="min-w-0 break-words text-lg font-light text-architectural leading-snug">
                      {item}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24 bg-foreground text-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Link
              to="/kontakt"
              className="inline-flex flex-wrap items-center justify-center gap-3 text-2xl md:text-4xl font-light text-architectural leading-tight hover:text-background/80 transition-colors duration-300"
            >
              <span className="max-w-3xl">{ctaText}</span>
              <ArrowRight className="h-5 w-5 shrink-0" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetailPage;
