import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Logo from "@/components/Logo";
import { unternehmen } from "@/content/content";
import inhaberImage from "@/assets/Profilbild1.jpeg";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Unternehmen = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero / Intro */}
      <section className="pt-32 pb-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <Logo className="mb-12" size="lg" showName={false} asLink={false} />

            <div className="max-w-4xl">
              <h1 className="text-minimal text-muted-foreground mb-4 tracking-widest">
                UNTERNEHMEN
              </h1>
              <h2 className="text-4xl md:text-6xl font-light text-foreground leading-tight mb-8">
                {unternehmen.subheadline}
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
                {unternehmen.intro}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Inhaber */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-minimal text-muted-foreground mb-16 tracking-widest">
              GESCHÄFTSFÜHRUNG
            </h3>

            <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-start">
              {/* Portrait */}
              <div className="md:col-span-2">
                <div className="aspect-[3/4] bg-muted overflow-hidden">
                  <img
                    src={inhaberImage}
                    alt={`${unternehmen.inhaber.name} - ${unternehmen.inhaber.title}`}
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
              </div>

              {/* Bio */}
              <div className="md:col-span-3 flex flex-col justify-center">
                <h4 className="text-3xl md:text-4xl font-light text-foreground mb-2">
                  {unternehmen.inhaber.name}
                </h4>
                <p className="text-minimal text-muted-foreground tracking-wider mb-8">
                  {unternehmen.inhaber.title.toUpperCase()}
                </p>
                <div className="max-w-2xl space-y-6 text-lg text-muted-foreground leading-relaxed">
                  {unternehmen.inhaber.bio.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Werdegang / Timeline */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-minimal text-muted-foreground mb-16 tracking-widest">
              {unternehmen.werdegang.title.toUpperCase()}
            </h3>

            <div className="max-w-4xl">
              {unternehmen.werdegang.stations.map((station, index) => (
                <div
                  key={index}
                  className="relative grid min-w-0 grid-cols-[120px_minmax(0,1fr)] gap-6 md:grid-cols-[200px_minmax(0,1fr)] md:gap-10"
                >
                  {/* Timeline line */}
                  {index < unternehmen.werdegang.stations.length - 1 && (
                    <div className="absolute left-[119px] md:left-[199px] top-3 bottom-0 w-px bg-border" />
                  )}

                  {/* Year */}
                  <div className="pt-0.5">
                    <span className="text-sm text-muted-foreground font-medium whitespace-nowrap">
                      {station.year}
                    </span>
                  </div>

                  {/* Content */}
                  <div className={`min-w-0 pb-12 ${index === unternehmen.werdegang.stations.length - 1 ? "pb-0" : ""}`}>
                    <h4 className="mb-1 break-words text-foreground font-medium">
                      {station.role}
                    </h4>
                    <p className="mb-2 break-words text-sm text-muted-foreground">
                      {station.company}
                    </p>
                    <p className="break-words text-sm leading-relaxed text-muted-foreground">
                      {station.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Unternehmensprofil */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-minimal text-muted-foreground mb-12 tracking-widest">
              {unternehmen.profil.title.toUpperCase()}
            </h3>
            <div className="max-w-3xl">
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                {unternehmen.profil.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {unternehmen.profil.focusLine && (
                  <p className="pt-2 italic text-foreground/80">
                    {unternehmen.profil.focusLine}
                  </p>
                )}
                {unternehmen.profil.closing && <p>{unternehmen.profil.closing}</p>}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Positionierung & Arbeitsweise - UNVERÄNDERT */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h3 className="text-minimal text-muted-foreground mb-6">
                  {unternehmen.sections.positionierung.title.toUpperCase()}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {unternehmen.sections.positionierung.content}
                </p>
              </div>
              <div>
                <h3 className="text-minimal text-muted-foreground mb-6">
                  {unternehmen.sections.arbeitsweise.title.toUpperCase()}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {unternehmen.sections.arbeitsweise.content}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifikation */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-minimal text-muted-foreground mb-12 tracking-widest">
              {unternehmen.sections.qualifikation.title.toUpperCase()}
            </h3>
            <div className="divide-y divide-border border-y border-border bg-background">
              {unternehmen.sections.qualifikation.points.map((point, index) => (
                <div
                  key={index}
                  className="grid gap-4 px-0 py-8 md:grid-cols-[240px_1fr] md:gap-10"
                >
                  <div>
                    <h4 className="text-lg font-medium text-foreground">
                      {point.title}
                    </h4>
                  </div>
                  <p className="max-w-3xl text-muted-foreground leading-relaxed">
                    {point.description}
                  </p>
                </div>
              ))}
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

export default Unternehmen;
