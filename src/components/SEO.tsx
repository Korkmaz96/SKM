import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  buildStructuredData,
  defaultSocialImage,
  findSeoRoute,
  siteName,
} from "@/content/seo";

const upsertMeta = (attribute: "name" | "property", key: string, content: string) => {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.content = content;
};

const upsertCanonical = (href: string) => {
  let element = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!element) {
    element = document.createElement("link");
    element.rel = "canonical";
    document.head.appendChild(element);
  }

  element.href = href;
};

const upsertStructuredData = (json: unknown) => {
  let element = document.head.querySelector<HTMLScriptElement>("#structured-data");

  if (!element) {
    element = document.createElement("script");
    element.id = "structured-data";
    element.type = "application/ld+json";
    document.head.appendChild(element);
  }

  element.textContent = JSON.stringify(json);
};

const SEO = () => {
  const location = useLocation();

  useEffect(() => {
    const route = findSeoRoute(location.pathname);
    const robots = route.path === "/404" ? "noindex, follow" : "index, follow";

    document.title = route.title;
    upsertCanonical(route.url);
    upsertMeta("name", "description", route.description);
    upsertMeta("name", "robots", robots);
    upsertMeta("property", "og:title", route.title);
    upsertMeta("property", "og:description", route.description);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:locale", "de_DE");
    upsertMeta("property", "og:site_name", siteName);
    upsertMeta("property", "og:url", route.url);
    upsertMeta("property", "og:image", defaultSocialImage);
    upsertMeta("name", "twitter:card", "summary");
    upsertMeta("name", "twitter:title", route.title);
    upsertMeta("name", "twitter:description", route.description);
    upsertMeta("name", "twitter:image", defaultSocialImage);
    upsertStructuredData(buildStructuredData(route));
  }, [location.pathname]);

  return null;
};

export default SEO;
