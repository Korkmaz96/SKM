import { ChevronLeft, ChevronRight } from "lucide-react";
import { homepage, referenzen } from "@/content/content";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";

import ref01 from "@/assets/ref-01.jpg";
import ref02 from "@/assets/ref-02.jpg";
import ref03 from "@/assets/ref-03.jpg";
import ref04 from "@/assets/ref-04.jpg";
import ref05 from "@/assets/ref-05.jpg";

const imageMap: Record<string, string> = {
  "ref-01": ref01,
  "ref-02": ref02,
  "ref-03": ref03,
  "ref-04": ref04,
  "ref-05": ref05,
};

const ReferenzenCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 4500, stopOnInteraction: false, stopOnMouseEnter: true })]
  );
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
    <section id="referenzen" className="py-32 bg-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <div>
              <h2 className="text-minimal text-muted-foreground mb-4">
                {homepage.referenzen.headline.toUpperCase()}
              </h2>
              <h3 className="text-4xl md:text-6xl font-light text-architectural">
                {homepage.referenzen.subheadline}
              </h3>
            </div>

            <div className="hidden md:flex items-center gap-3 mt-6 md:mt-0">
              <button
                onClick={scrollPrev}
                className="p-3 border border-border hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-300"
                aria-label="Vorherige Referenz"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={scrollNext}
                className="p-3 border border-border hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-300"
                aria-label="Nächste Referenz"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-6">
              {referenzen.placeholders.map((item) => (
                <div
                  key={item.id}
                  className="flex-[0_0_100%] md:flex-[0_0_50%] min-w-0 pl-6"
                >
                  <div className="group relative overflow-hidden aspect-[4/3]">
                    <img
                      src={imageMap[item.image]}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Permanent gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* Content overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end p-8">
                      <span className="text-white/50 text-xs font-medium tracking-widest uppercase mb-2">
                        {item.category}
                      </span>
                      <h4 className="text-xl md:text-2xl font-light text-white mb-2">
                        {item.title}
                      </h4>
                      <p className="text-white/60 text-sm leading-relaxed max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots + mobile arrows */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex md:hidden items-center gap-3">
              <button
                onClick={scrollPrev}
                className="p-2 border border-border hover:border-foreground transition-all duration-300"
                aria-label="Vorherige Referenz"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={scrollNext}
                className="p-2 border border-border hover:border-foreground transition-all duration-300"
                aria-label="Nächste Referenz"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            <div className="flex items-center gap-3 md:mx-auto">
              {referenzen.placeholders.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollTo(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === selectedIndex
                      ? "w-8 bg-foreground"
                      : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Referenz ${i + 1}`}
                />
              ))}
            </div>

            <div className="w-[76px] md:hidden" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferenzenCarousel;
