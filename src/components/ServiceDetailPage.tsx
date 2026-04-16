import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface ServiceDetailPageTab {
  label: string;
  content: string;
  examples?: string[];
}

interface ServiceDetailPageContext {
  eyebrow: string;
  body: string;
}

interface ServiceDetailPageProps {
  number: string;
  title: string;
  eyebrow: string;
  heroHeadline: string;
  heroSubline: string;
  heroImage: string;
  heroImageAlt: string;
  breakStatement: string;
  breakSubtext?: string;
  introHeadline: string;
  introBody: string[];
  introImage: string;
  introImageAlt: string;
  trustItems: string[];
  tabs: ServiceDetailPageTab[];
  contexts: ServiceDetailPageContext[];
  ctaHeadline: string;
  ctaSubtext: string;
  ctaButtonLabel?: string;
}

const ServiceDetailPage = ({
  number,
  title,
  eyebrow,
  heroHeadline,
  heroSubline,
  heroImage,
  heroImageAlt,
  breakStatement,
  breakSubtext,
  introHeadline,
  introBody,
  introImage,
  introImageAlt,
  trustItems,
  tabs,
  contexts,
  ctaHeadline,
  ctaSubtext,
  ctaButtonLabel = "Erstgespräch anfragen",
}: ServiceDetailPageProps) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.label ?? "");

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    setActiveTab(tabs[0]?.label ?? "");
  }, [tabs]);

  const companyName = title.includes("|") ? title.split("|").pop()?.trim() ?? title : title;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main data-service-number={number}>
        <section className="relative min-h-[70vh] overflow-hidden bg-foreground">
          <img
            src={heroImage}
            alt={heroImageAlt}
            className="absolute inset-0 h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto">
              <div className="max-w-3xl">
                <p className="text-xs uppercase tracking-widest text-white/70">{eyebrow}</p>
                <h1 className="mt-4 text-4xl font-light text-white text-architectural md:text-6xl">
                  {heroHeadline}
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
                  {heroSubline}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#0f0f0f] py-12 md:py-16">
          <div className="container mx-auto">
            <div className="grid gap-8 md:grid-cols-[2fr_3fr] md:gap-12">
              <div className="flex items-center">
                <p className="text-3xl font-thin tracking-wide text-white md:text-4xl">
                  {companyName}
                </p>
              </div>
              <div className="md:border-l md:border-white/20 md:pl-12">
                <p className="text-xl font-light leading-snug text-white md:text-2xl">
                  {breakStatement}
                </p>
                {breakSubtext ? (
                  <p className="mt-4 text-sm leading-relaxed text-white/60">
                    {breakSubtext}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background py-20 md:py-28">
          <div className="container mx-auto">
            <div className="grid gap-12 md:grid-cols-[minmax(0,11fr)_minmax(0,8fr)] md:items-start md:gap-16">
              <div className="order-2 md:order-1">
                <h2 className="text-2xl font-light text-architectural md:text-4xl">
                  {introHeadline}
                </h2>
                <div className="mt-6 space-y-6">
                  {introBody.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-base leading-relaxed text-muted-foreground"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {trustItems.length > 0 ? (
                  <div className="mt-10">
                    {trustItems.map((item, index) => (
                      <div
                        key={item}
                        className={cn(
                          "py-4 text-sm leading-relaxed text-muted-foreground",
                          index > 0 && "border-t border-foreground/[0.08]",
                        )}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>

              <div className="order-1 md:order-2">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={introImage}
                    alt={introImageAlt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-background py-16 md:py-24">
          <div className="container mx-auto">
            {tabs.length > 0 ? (
              <>
                <div className="hidden md:block">
                  <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <TabsList className="h-auto w-full justify-start rounded-none bg-transparent p-0 text-left">
                      {tabs.map((tab, index) => (
                        <TabsTrigger
                          key={tab.label}
                          value={tab.label}
                          className={cn(
                            "mr-8 rounded-none border-b-2 border-transparent px-0 py-0 pb-2 text-base font-normal text-muted-foreground hover:text-foreground data-[state=active]:border-foreground data-[state=active]:bg-transparent data-[state=active]:font-medium data-[state=active]:text-foreground data-[state=active]:shadow-none",
                            index === tabs.length - 1 && "mr-0",
                          )}
                        >
                          {tab.label}
                        </TabsTrigger>
                      ))}
                    </TabsList>

                    {tabs.map((tab) => (
                      <TabsContent
                        key={tab.label}
                        value={tab.label}
                        className="mt-8 max-w-4xl text-base font-light leading-relaxed text-muted-foreground"
                      >
                        <p>{tab.content}</p>
                      </TabsContent>
                    ))}
                  </Tabs>
                </div>

                <div className="md:hidden">
                  <Accordion type="single" collapsible defaultValue={tabs[0]?.label}>
                    {tabs.map((tab) => (
                      <AccordionItem key={tab.label} value={tab.label} className="border-border">
                        <AccordionTrigger className="text-base font-normal text-foreground hover:no-underline">
                          {tab.label}
                        </AccordionTrigger>
                        <AccordionContent className="text-base font-light leading-relaxed text-muted-foreground">
                          <p>{tab.content}</p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </>
            ) : null}
          </div>
        </section>

        <section className="bg-muted/20 py-16 md:py-24">
          <div className="container mx-auto">
            <div className="grid gap-12 md:grid-cols-3 md:gap-16">
              {contexts.map((context) => (
                <div key={context.eyebrow}>
                  <p className="mb-3 text-xs uppercase tracking-widest text-foreground">
                    {context.eyebrow}
                  </p>
                  <p className="text-base font-light leading-relaxed text-muted-foreground">
                    {context.body}
                  </p>
                </div>
              ))}
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
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-4 text-2xl font-light text-architectural md:text-4xl">
                {ctaHeadline}
              </h2>
              <p className="mb-10 text-base leading-relaxed text-muted-foreground">
                {ctaSubtext}
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
                <span>{ctaButtonLabel}</span>
                <ArrowRight className="h-4 w-4 shrink-0" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceDetailPage;
