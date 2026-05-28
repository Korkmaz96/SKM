import fs from "node:fs";
import path from "node:path";
import {
  buildStructuredData,
  defaultSocialImage,
  notFoundSeoRoute,
  seoRoutes,
  siteName,
  type SeoRoute,
} from "./src/content/seo";

const escapeAttribute = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

const escapeXml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

const replaceOrInsert = (html: string, pattern: RegExp, replacement: string) => {
  if (pattern.test(html)) {
    return html.replace(pattern, replacement);
  }

  return html.replace("</head>", `    ${replacement}\n  </head>`);
};

const renderSeoHtml = (html: string, route: SeoRoute, robots = "index, follow") => {
  const structuredData = JSON.stringify(buildStructuredData(route)).replace(/</g, "\\u003c");

  return [
    (next: string) =>
      next.replace(
        /<title>[\s\S]*?<\/title>/,
        `<title>${escapeAttribute(route.title)}</title>`,
      ),
    (next: string) =>
      replaceOrInsert(
        next,
        /<meta\s+name="description"[\s\S]*?\/>/,
        `<meta name="description" content="${escapeAttribute(route.description)}" />`,
      ),
    (next: string) =>
      replaceOrInsert(
        next,
        /<meta\s+name="robots"[\s\S]*?\/>/,
        `<meta name="robots" content="${robots}" />`,
      ),
    (next: string) =>
      replaceOrInsert(
        next,
        /<link\s+rel="canonical"[\s\S]*?\/>/,
        `<link rel="canonical" href="${escapeAttribute(route.url)}" />`,
      ),
    (next: string) =>
      replaceOrInsert(
        next,
        /<meta\s+property="og:title"[\s\S]*?\/>/,
        `<meta property="og:title" content="${escapeAttribute(route.title)}" />`,
      ),
    (next: string) =>
      replaceOrInsert(
        next,
        /<meta\s+property="og:description"[\s\S]*?\/>/,
        `<meta property="og:description" content="${escapeAttribute(route.description)}" />`,
      ),
    (next: string) =>
      replaceOrInsert(
        next,
        /<meta\s+property="og:type"[\s\S]*?\/>/,
        '<meta property="og:type" content="website" />',
      ),
    (next: string) =>
      replaceOrInsert(
        next,
        /<meta\s+property="og:locale"[\s\S]*?\/>/,
        '<meta property="og:locale" content="de_DE" />',
      ),
    (next: string) =>
      replaceOrInsert(
        next,
        /<meta\s+property="og:site_name"[\s\S]*?\/>/,
        `<meta property="og:site_name" content="${escapeAttribute(siteName)}" />`,
      ),
    (next: string) =>
      replaceOrInsert(
        next,
        /<meta\s+property="og:url"[\s\S]*?\/>/,
        `<meta property="og:url" content="${escapeAttribute(route.url)}" />`,
      ),
    (next: string) =>
      replaceOrInsert(
        next,
        /<meta\s+property="og:image"[\s\S]*?\/>/,
        `<meta property="og:image" content="${escapeAttribute(defaultSocialImage)}" />`,
      ),
    (next: string) =>
      replaceOrInsert(
        next,
        /<meta\s+name="twitter:card"[\s\S]*?\/>/,
        '<meta name="twitter:card" content="summary" />',
      ),
    (next: string) =>
      replaceOrInsert(
        next,
        /<meta\s+name="twitter:title"[\s\S]*?\/>/,
        `<meta name="twitter:title" content="${escapeAttribute(route.title)}" />`,
      ),
    (next: string) =>
      replaceOrInsert(
        next,
        /<meta\s+name="twitter:description"[\s\S]*?\/>/,
        `<meta name="twitter:description" content="${escapeAttribute(route.description)}" />`,
      ),
    (next: string) =>
      replaceOrInsert(
        next,
        /<meta\s+name="twitter:image"[\s\S]*?\/>/,
        `<meta name="twitter:image" content="${escapeAttribute(defaultSocialImage)}" />`,
      ),
    (next: string) =>
      replaceOrInsert(
        next,
        /<script\s+id="structured-data"\s+type="application\/ld\+json">[\s\S]*?<\/script>/,
        `<script id="structured-data" type="application/ld+json">${structuredData}</script>`,
      ),
  ].reduce((next, transform) => transform(next), html);
};

const createSitemap = () => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${seoRoutes
  .filter((route) => route.indexable !== false)
  .map(
    (route) => `  <url>
    <loc>${escapeXml(route.url)}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

export const generateSeoFiles = () => ({
  name: "generate-seo-files",
  apply: "build" as const,
  closeBundle() {
    const outDir = path.resolve(__dirname, "docs");
    const indexPath = path.join(outDir, "index.html");

    if (!fs.existsSync(indexPath)) {
      return;
    }

    const baseHtml = fs.readFileSync(indexPath, "utf8");

    seoRoutes.forEach((route) => {
      const robots = route.indexable === false ? "noindex, follow" : "index, follow";
      const html = renderSeoHtml(baseHtml, route, robots);
      const routeIndexPath =
        route.path === "/"
          ? indexPath
          : path.join(outDir, route.path.replace(/^\//, ""), "index.html");

      fs.mkdirSync(path.dirname(routeIndexPath), { recursive: true });
      fs.writeFileSync(routeIndexPath, html);
    });

    const operatorRoute = seoRoutes.find(
      (route) => route.path === "/leistungen/betreiberverantwortung-technischer-brandschutz",
    );

    if (operatorRoute) {
      const legacyPath = path.join(outDir, "leistungen/betreiberverantwortung-organisation/index.html");
      fs.mkdirSync(path.dirname(legacyPath), { recursive: true });
      fs.writeFileSync(legacyPath, renderSeoHtml(baseHtml, operatorRoute));
    }

    fs.writeFileSync(
      path.join(outDir, "404.html"),
      renderSeoHtml(baseHtml, notFoundSeoRoute, "noindex, follow"),
    );
    fs.writeFileSync(path.join(outDir, "sitemap.xml"), createSitemap());
  },
});
