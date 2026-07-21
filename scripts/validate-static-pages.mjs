import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const siteUrl = "https://subsuelofs.com";
const individualSaleStarts = "2026-07-21";
const individualSaleEnds = "2026-07-24";
const bundleOpeningPriceStarts = "2026-07-16";
const bundleOpeningPriceEnds = "2026-07-30";
const productIds = ["trap", "garage", "jungle", "low", "abyss", "noir"];
const basePages = [
  { basePath: "/", output: "index.html", schemaType: "CollectionPage" },
  { basePath: "/demos/", output: "demos/index.html", schemaType: "WebPage" },
  { basePath: "/bundle/", output: "bundle/index.html", schemaType: "Product" },
  { basePath: "/help/", output: "help/index.html", schemaType: "WebPage" },
  { basePath: "/guides/", output: "guides/index.html", schemaType: "WebPage" },
  { basePath: "/guides/negative-prompts/", output: "guides/negative-prompts/index.html", schemaType: "Article" },
  { basePath: "/guides/write-music-prompts/", output: "guides/write-music-prompts/index.html", schemaType: "Article" },
  { basePath: "/compare/", output: "compare/index.html", schemaType: "WebPage" },
  { basePath: "/method/", output: "method/index.html", schemaType: "WebPage" },
  ...productIds.map((id) => ({ basePath: `/product/${id}/`, output: `product/${id}/index.html`, schemaType: "Product" }))
];

const localizedPath = (basePath, locale) => locale === "en" ? (basePath === "/" ? "/en/" : `/en${basePath}`) : basePath;
const localizedOutput = (output, locale) => locale === "en" ? path.posix.join("en", output) : output;
const pages = ["es", "en"].flatMap((locale) => basePages.map((page) => ({
  ...page,
  locale,
  pathname: localizedPath(page.basePath, locale),
  output: localizedOutput(page.output, locale)
})));
const expectedUrls = pages.map((page) => `${siteUrl}${page.pathname}`);

const metaContent = (html, attribute, value) => html.match(new RegExp(`<meta\\s+${attribute}="${value}"\\s+content="([^"]+)"`, "u"))?.[1];
const alternateHref = (html, hreflang) => html.match(new RegExp(`<link\\s+rel="alternate"\\s+hreflang="${hreflang}"\\s+href="([^"]+)"`, "u"))?.[1];
const graphEntries = (jsonLd) => Array.isArray(jsonLd["@graph"]) ? jsonLd["@graph"] : [jsonLd];

for (const page of pages) {
  const html = await readFile(path.join(root, page.output), "utf8");
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/u)?.[1];
  const title = html.match(/<title>([^<]+)<\/title>/u)?.[1];
  const description = metaContent(html, "name", "description");
  const jsonLdSource = html.match(/<script type="application\/ld\+json">\s*([\s\S]*?)\s*<\/script>/u)?.[1];
  const esUrl = `${siteUrl}${localizedPath(page.basePath, "es")}`;
  const enUrl = `${siteUrl}${localizedPath(page.basePath, "en")}`;

  if (!html.includes(`<html lang="${page.locale}">`)) throw new Error(`${page.output}: lang incorrecto`);
  if (canonical !== `${siteUrl}${page.pathname}`) throw new Error(`${page.output}: canonical incorrecto`);
  if (alternateHref(html, "es") !== esUrl) throw new Error(`${page.output}: hreflang es incorrecto`);
  if (alternateHref(html, "en") !== enUrl) throw new Error(`${page.output}: hreflang en incorrecto`);
  if (alternateHref(html, "x-default") !== esUrl) throw new Error(`${page.output}: hreflang x-default incorrecto`);
  if (metaContent(html, "property", "og:locale") !== (page.locale === "en" ? "en_GB" : "es_ES")) throw new Error(`${page.output}: og:locale incorrecto`);
  if (metaContent(html, "property", "og:locale:alternate") !== (page.locale === "en" ? "es_ES" : "en_GB")) throw new Error(`${page.output}: og:locale:alternate incorrecto`);
  if (!title || !description) throw new Error(`${page.output}: faltan title o description`);
  if (!/<div class="[^"]*\bview-content\b[^"]*"[^>]*>[\s\S]*?<h1>/u.test(html)) throw new Error(`${page.output}: falta contenido inicial con H1`);
  if (!jsonLdSource) throw new Error(`${page.output}: falta JSON-LD`);

  const jsonLd = JSON.parse(jsonLdSource);
  const mainEntity = graphEntries(jsonLd).find((entry) => entry["@type"] === page.schemaType);
  if (!mainEntity) throw new Error(`${page.output}: falta ${page.schemaType} en JSON-LD`);
  if (mainEntity.inLanguage !== page.locale) throw new Error(`${page.output}: inLanguage incorrecto en JSON-LD`);
  if (page.schemaType === "Product") {
    const offers = mainEntity.offers;
    if (!offers || offers["@type"] !== "Offer") throw new Error(`${page.output}: falta Offer en JSON-LD`);
    const bundle = page.basePath === "/bundle/";
    const expectedPrice = bundle ? "59.00" : "9.00";
    const expectedValidFrom = bundle ? bundleOpeningPriceStarts : individualSaleStarts;
    const expectedValidUntil = bundle ? bundleOpeningPriceEnds : individualSaleEnds;
    if (offers.price !== expectedPrice) throw new Error(`${page.output}: precio incorrecto en Offer`);
    if (offers.validFrom !== expectedValidFrom) throw new Error(`${page.output}: validFrom incorrecto en Offer`);
    if (offers.priceValidUntil !== expectedValidUntil) throw new Error(`${page.output}: priceValidUntil incorrecto en Offer`);
    if (metaContent(html, "property", "product:price:amount") !== expectedPrice) throw new Error(`${page.output}: precio Open Graph incorrecto`);
    if (!bundle && (!html.includes("<s>15 €</s>") || !html.includes("9 €"))) throw new Error(`${page.output}: falta precio promocional visible`);
    if (bundle && html.includes("59 €</strong><b>")) throw new Error(`${page.output}: el bundle no debe presentarse como la promoción individual`);
  }

  if (page.locale === "en") {
    const routeHrefs = [...html.matchAll(/<a\b[^>]*\bhref="(\/(?!\/)[^"?#]*)"/gu)].map((match) => match[1]);
    const unlocalizedRoute = routeHrefs.find((href) => /^(?:\/$|\/(?:demos|help|bundle|guides|compare|method|legal|category|product)(?:\/|$))/u.test(href));
    if (unlocalizedRoute) throw new Error(`${page.output}: enlace interno sin prefijo inglés (${unlocalizedRoute})`);
    const dataRoutes = [...html.matchAll(/\bdata-route="([^"]+)"/gu)].map((match) => match[1]);
    const unlocalizedDataRoute = dataRoutes.find((route) => !route.startsWith("/en/"));
    if (unlocalizedDataRoute) throw new Error(`${page.output}: data-route sin prefijo inglés (${unlocalizedDataRoute})`);
    if (html.includes('data-i18n="menu.file">Archivo') || html.includes('data-i18n="menu.cart">Carrito')) throw new Error(`${page.output}: interfaz inicial mezclada con español`);
  }
}

for (const homePath of ["index.html", "en/index.html"]) {
  const home = await readFile(path.join(root, homePath), "utf8");
  if (!home.includes('href="#packs-en-oferta"')) throw new Error(`${homePath}: falta CTA hacia los packs en oferta`);
  if (!home.includes('id="packs-en-oferta"')) throw new Error(`${homePath}: falta destino del CTA de oferta`);
  if (!home.includes("24.07.2026") && !home.includes("24 Jul 2026")) throw new Error(`${homePath}: falta fecha de fin de la oferta`);
  if (!home.includes("descuento automático") && !home.includes("automatic discount")) throw new Error(`${homePath}: falta aclarar que el descuento es automático`);
}

const sitemap = await readFile(path.join(root, "sitemap.xml"), "utf8");
if (!sitemap.includes('xmlns:xhtml="http://www.w3.org/1999/xhtml"')) throw new Error("sitemap.xml no declara el namespace xhtml");
const sitemapBlocks = [...sitemap.matchAll(/<url>\s*([\s\S]*?)\s*<\/url>/gu)].map((match) => match[1]);
const sitemapUrls = sitemapBlocks.map((block) => block.match(/<loc>([^<]+)<\/loc>/u)?.[1]);
if (JSON.stringify(sitemapUrls) !== JSON.stringify(expectedUrls)) throw new Error("sitemap.xml no coincide con las páginas estáticas");
if (new Set(sitemapUrls).size !== sitemapUrls.length) throw new Error("sitemap.xml contiene URLs duplicadas");

for (const [index, block] of sitemapBlocks.entries()) {
  const page = pages[index];
  const esUrl = `${siteUrl}${localizedPath(page.basePath, "es")}`;
  const enUrl = `${siteUrl}${localizedPath(page.basePath, "en")}`;
  const expectedAlternates = [
    `<xhtml:link rel="alternate" hreflang="es" href="${esUrl}" />`,
    `<xhtml:link rel="alternate" hreflang="en" href="${enUrl}" />`,
    `<xhtml:link rel="alternate" hreflang="x-default" href="${esUrl}" />`
  ];
  for (const alternate of expectedAlternates) {
    if (!block.includes(alternate)) throw new Error(`sitemap.xml: alternates incompletos para ${page.pathname}`);
  }
}

const robots = await readFile(path.join(root, "robots.txt"), "utf8");
if (!robots.includes(`Sitemap: ${siteUrl}/sitemap.xml`)) throw new Error("robots.txt no declara el sitemap");

for (const feedPath of ["feed.xml", "en/feed.xml"]) {
  const feed = await readFile(path.join(root, feedPath), "utf8");
  if (!feed.includes('<rss version="2.0"') || !feed.includes("<item>")) throw new Error(`${feedPath}: feed RSS inválido`);
}

const llms = await readFile(path.join(root, "llms.txt"), "utf8");
if (!llms.includes("https://subsuelofs.com/guides/") || !llms.includes("## Catalogue")) throw new Error("llms.txt incompleto");

console.log(`Validadas ${pages.length} páginas estáticas bilingües, hreflang, JSON-LD, feeds, robots.txt y sitemap.xml`);
