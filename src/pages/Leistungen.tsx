import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { services } from "@/content/content";

import services01 from "@/assets/services-01.jpg";
import services02 from "@/assets/services-02.jpg";
import services03 from "@/assets/services-03.jpg";

const slideImages = [services01, services02, services03];

const Leistungen = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <span className="text-minimal text-muted-foreground tracking-widest">LEISTUNGEN</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-architectural mt-6 mb-10 max-w-4xl leading-[1.1]">
              {services.overview.subheadline}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              {services.overview.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Service Sections */}
      {services.clusters.map((cluster, index) => {
        const isEven = index % 2 === 0;

        return (
          <section
            key={cluster.id}
            className={`py-0 ${index === 0 ? "" : ""}`}
          >
            <div className="max-w-[1440px] mx-auto">
              <div className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}>
                {/* Image */}
                <div className="md:w-1/2 relative">
                  <div className="aspect-[4/3] md:aspect-auto md:h-full">
                    <img
                      src={slideImages[index]}
                      alt={cluster.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="md:w-1/2 flex items-center">
                  <div className="px-8 py-16 md:px-16 lg:px-24 md:py-24 w-full">
                    <span className="text-minimal text-muted-foreground tracking-widest font-medium">
                      {cluster.number}
                    </span>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-architectural mt-6 mb-6 leading-[1.15]">
                      {cluster.title}
                    </h2>

                    <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg">
                      {cluster.shortDescription}
                    </p>

                    {/* Bullet points */}
                    <ul className="space-y-3 mb-10">
                      {cluster.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <span className="w-1 h-1 rounded-full bg-foreground mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      to={cluster.href}
                      className="group inline-flex items-center gap-3 text-sm text-foreground hover:gap-4 transition-all duration-300"
                    >
                      <span className="tracking-wide">Mehr erfahren</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle divider between sections */}
            {index < services.clusters.length - 1 && (
              <div className="max-w-7xl mx-auto px-6">
                <div className="border-t border-border" />
              </div>
            )}
          </section>
        );
      })}

      <ContactCTA />
      <Footer />
    </div>
  );
};

export default Leistungen;
