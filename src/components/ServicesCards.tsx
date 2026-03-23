import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { services } from "@/content/content";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";

import services01 from "@/assets/services-01.jpg";
import services02 from "@/assets/services-02.jpg";
import services03 from "@/assets/services-03.jpg";

const slideImages = [services01, services02, services03];

interface ServicesCardsProps {
  showAllLink?: boolean;
}

const ServicesCards = ({ showAllLink = true }: ServicesCardsProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  return (
    <section id="leistungen" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="text-minimal text-muted-foreground mb-4">LEISTUNGEN</h2>
              <h3 className="text-4xl md:text-6xl font-light text-architectural">
                Unsere Kernkompetenzen
              </h3>
            </div>

            {/* Desktop arrows */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={scrollPrev}
                className="p-3 border border-border hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-300"
                aria-label="Vorherige Leistung"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={scrollNext}
                className="p-3 border border-border hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-300"
                aria-label="Nächste Leistung"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {services.clusters.map((cluster, index) => (
                <div
                  key={cluster.id}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_100%]"
                >
                  <Link
                    to={cluster.href}
                    className="group block relative overflow-hidden aspect-[16/9] md:aspect-[21/9]"
                  >
                    {/* Background image */}
                    <img
                      src={slideImages[index]}
                      alt={cluster.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-14">
                      <span className="text-white/50 text-sm font-medium tracking-widest mb-3">
                        {cluster.number}
                      </span>
                      <h4 className="text-2xl md:text-4xl font-light text-white mb-3">
                        {cluster.title}
                      </h4>
                      <p className="text-white/70 text-sm md:text-base max-w-xl leading-relaxed mb-6">
                        {cluster.shortDescription}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-white group-hover:gap-3 transition-all duration-300">
                        <span>Mehr erfahren</span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Dots + mobile arrows */}
          <div className="flex items-center justify-between mt-8">
            {/* Mobile arrows */}
            <div className="flex md:hidden items-center gap-3">
              <button
                onClick={scrollPrev}
                className="p-2 border border-border hover:border-foreground transition-all duration-300"
                aria-label="Vorherige Leistung"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={scrollNext}
                className="p-2 border border-border hover:border-foreground transition-all duration-300"
                aria-label="Nächste Leistung"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex items-center gap-3 md:mx-auto">
              {services.clusters.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollTo(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === selectedIndex
                      ? "w-8 bg-foreground"
                      : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>

            <div className="w-[76px] md:hidden" />
          </div>

          {showAllLink && (
            <div className="mt-12 text-center">
              <Link
                to="/leistungen"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                <span className="text-minimal">Alle Leistungen</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServicesCards;
