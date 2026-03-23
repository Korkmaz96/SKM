import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import { unternehmen, company } from "@/content/content";
import inhaberImage from "@/assets/Profilbild1.jpeg";

const Unternehmen = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero / Intro */}
      <section className="pt-32 pb-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <div
                className="h-16 w-16 bg-foreground flex items-center justify-center"
                aria-label={`${company.name} Logo`}
              >
                <span className="text-background font-bold text-lg">SKM</span>
              </div>
            </div>

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
                    alt={`${unternehmen.inhaber.name} – ${unternehmen.inhaber.title}`}
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
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {unternehmen.inhaber.shortBio}
                </p>
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
                  className="grid grid-cols-[120px_1fr] md:grid-cols-[200px_1fr] gap-6 md:gap-10 relative"
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
                  <div className={`pb-12 ${index === unternehmen.werdegang.stations.length - 1 ? "pb-0" : ""}`}>
                    <h4 className="text-foreground font-medium mb-1">
                      {station.role}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      {station.company}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
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
              <p className="text-lg text-muted-foreground leading-relaxed">
                {unternehmen.profil.content}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Positionierung & Arbeitsweise – UNVERÄNDERT */}
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
            <h3 className="text-minimal text-muted-foreground mb-12">
              {unternehmen.sections.qualifikation.title.toUpperCase()}
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {unternehmen.sections.qualifikation.points.map((point, index) => (
                <div key={index} className="p-10 border border-border bg-background">
                  <span className="text-minimal text-muted-foreground/50 font-light tracking-widest">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h4 className="mt-6 text-lg font-medium text-foreground">
                    {point.title}
                  </h4>
                  <p className="mt-3 text-muted-foreground leading-relaxed text-sm">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
      <Footer />
    </div>
  );
};

export default Unternehmen;
