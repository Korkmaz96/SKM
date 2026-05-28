export interface SeoRoute {
  path: string;
  url: string;
  title: string;
  description: string;
  changefreq: "weekly" | "monthly" | "yearly";
  priority: string;
  lastmod: string;
}

export const siteUrl = "https://skm-management.de";
export const siteName = "SKM Management";
export const defaultSocialImage = `${siteUrl}/favicon-48x48.png`;
export const defaultLastModified = "2026-05-28";

const routeUrl = (path: string) => `${siteUrl}${path === "/" ? "/" : `${path}/`}`;

export const seoRoutes: SeoRoute[] = [
  {
    path: "/",
    url: routeUrl("/"),
    title: "SKM Management | Technische Beratung für Immobilien und Anlagen",
    description:
      "SKM Management unterstützt Unternehmen und Eigentümer mit technischer Beratung, Sachverständigenleistungen, Betreiberverantwortung und Immobilienbewertung.",
    changefreq: "monthly",
    priority: "1.0",
    lastmod: defaultLastModified,
  },
  {
    path: "/leistungen",
    url: routeUrl("/leistungen"),
    title: "Leistungen | SKM Management",
    description:
      "Technische Bewertungen, Betreiberverantwortung, technischer Brandschutz, Corporate Real Estate sowie Audits und Due Diligence für Immobilien.",
    changefreq: "monthly",
    priority: "0.9",
    lastmod: defaultLastModified,
  },
  {
    path: "/leistungen/sachverstaendigenleistungen",
    url: routeUrl("/leistungen/sachverstaendigenleistungen"),
    title: "Sachverständigenleistungen | SKM Management",
    description:
      "Unabhängige technische Bewertungen, Gutachten, Zustandsanalysen und fachliche Stellungnahmen für Gebäude, Anlagen und Immobilien.",
    changefreq: "monthly",
    priority: "0.85",
    lastmod: defaultLastModified,
  },
  {
    path: "/leistungen/betreiberverantwortung-technischer-brandschutz",
    url: routeUrl("/leistungen/betreiberverantwortung-technischer-brandschutz"),
    title: "Betreiberverantwortung & technischer Brandschutz | SKM Management",
    description:
      "Analyse und Aufbau rechtssicherer Betreiberpflichten-Strukturen, technischer Brandschutzprozesse und organisatorischer Verantwortlichkeiten.",
    changefreq: "monthly",
    priority: "0.85",
    lastmod: defaultLastModified,
  },
  {
    path: "/leistungen/technische-immobilienbewertung",
    url: routeUrl("/leistungen/technische-immobilienbewertung"),
    title: "Technische Immobilienbewertung & Corporate Real Estate | SKM Management",
    description:
      "Technische Immobilienbewertung, Lifecycle-Betrachtungen und Corporate-Real-Estate-Beratung an der Schnittstelle von Technik und Management.",
    changefreq: "monthly",
    priority: "0.85",
    lastmod: defaultLastModified,
  },
  {
    path: "/leistungen/technische-audits-due-diligence",
    url: routeUrl("/leistungen/technische-audits-due-diligence"),
    title: "Technische Audits & Due Diligence | SKM Management",
    description:
      "Technische Audits und Due-Diligence-Prüfungen für Bestandsimmobilien: Zustandserfassung, Risikobewertung und Investitionsbedarf.",
    changefreq: "monthly",
    priority: "0.9",
    lastmod: defaultLastModified,
  },
  {
    path: "/referenzen",
    url: routeUrl("/referenzen"),
    title: "Referenzen | SKM Management",
    description:
      "Ausgewählte Projekterfahrung von SKM Management in technischer Due Diligence, Betreiberpflichten, Zustandsanalysen und Organisationsberatung.",
    changefreq: "monthly",
    priority: "0.7",
    lastmod: defaultLastModified,
  },
  {
    path: "/unternehmen",
    url: routeUrl("/unternehmen"),
    title: "Unternehmen | SKM Management",
    description:
      "SKM Management verbindet technische Expertise, Betreiberverantwortung und Corporate Real Estate zu belastbarer Beratung für Immobilienstrukturen.",
    changefreq: "monthly",
    priority: "0.8",
    lastmod: defaultLastModified,
  },
  {
    path: "/kontakt",
    url: routeUrl("/kontakt"),
    title: "Kontakt | SKM Management",
    description:
      "Kontakt zu SKM Management für technische Beratung, Sachverständigenleistungen, Betreiberverantwortung und Immobilienbewertung.",
    changefreq: "monthly",
    priority: "0.75",
    lastmod: defaultLastModified,
  },
  {
    path: "/impressum",
    url: routeUrl("/impressum"),
    title: "Impressum | SKM Management",
    description: "Impressum und Anbieterkennzeichnung von SKM Management.",
    changefreq: "yearly",
    priority: "0.3",
    lastmod: defaultLastModified,
  },
  {
    path: "/datenschutz",
    url: routeUrl("/datenschutz"),
    title: "Datenschutz | SKM Management",
    description: "Datenschutzhinweise von SKM Management.",
    changefreq: "yearly",
    priority: "0.3",
    lastmod: defaultLastModified,
  },
];

export const notFoundSeoRoute: SeoRoute = {
  path: "/404",
  url: `${siteUrl}/404`,
  title: "Seite nicht gefunden | SKM Management",
  description: "Die angeforderte Seite wurde nicht gefunden.",
  changefreq: "yearly",
  priority: "0.1",
  lastmod: defaultLastModified,
};

export const normalizeSeoPath = (pathname: string) => {
  const path = pathname.split(/[?#]/)[0]?.replace(/\/+$/, "") || "/";
  return path === "" ? "/" : path;
};

export const findSeoRoute = (pathname: string) =>
  seoRoutes.find((route) => route.path === normalizeSeoPath(pathname)) ?? notFoundSeoRoute;

export const buildStructuredData = (route: SeoRoute) => [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteName,
    url: siteUrl,
    email: "kontakt@skm-management.de",
    telephone: "+49 162 9383033",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Stuttgart",
      addressCountry: "DE",
    },
    areaServed: "DE",
    description: seoRoutes[0].description,
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: route.title,
    description: route.description,
    url: route.url,
    isPartOf: {
      "@type": "WebSite",
      name: siteName,
      url: siteUrl,
    },
  },
];
