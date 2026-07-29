import { access, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const siteUrl = "https://subsuelofs.com";
const contentModified = "2026-07-29";
const productIds = ["trap", "garage", "jungle", "low", "abyss", "noir", "dust", "iron"];
const legalIds = ["notice", "privacy", "terms", "refund", "license", "storage", "accessibility"];
const legalModified = Object.freeze({
  notice: "2026-07-16",
  privacy: "2026-07-26",
  terms: "2026-07-16",
  refund: "2026-07-16",
  license: "2026-07-16",
  storage: "2026-07-26",
  accessibility: "2026-07-16"
});
const samplerSourceProductIds = Object.freeze({
  "source/low_pressure_v2/content.json": "low",
  "source/abyss_dub/content.json": "abyss",
  "source/noir_tapes/content.json": "noir",
  "source/trap_ritual/content.json": "trap",
  "source/garaje_oscuro/content.json": "garage",
  "source/fossil_jungle/content.json": "jungle"
});
const basePages = [
  { basePath: "/", output: "index.html", schemaType: "CollectionPage" },
  { basePath: "/demos/", output: "demos/index.html", schemaType: "WebPage" },
  { basePath: "/bundle/", output: "bundle/index.html", schemaType: "Product" },
  { basePath: "/help/", output: "help/index.html", schemaType: "WebPage" },
  { basePath: "/legal/", output: "legal/index.html", schemaType: "WebPage" },
  ...legalIds.map((id) => ({ basePath: `/legal/${id}/`, output: `legal/${id}/index.html`, schemaType: "WebPage" })),
  { basePath: "/lab/", output: "lab/index.html", schemaType: "WebPage" },
  { basePath: "/lab/prompt-builder/", output: "lab/prompt-builder/index.html", schemaType: "WebPage" },
  { basePath: "/lab/negative-prompts/", output: "lab/negative-prompts/index.html", schemaType: "WebPage" },
  { basePath: "/lab/dictionary/", output: "lab/dictionary/index.html", schemaType: "WebPage" },
  { basePath: "/lab/monthly-prompt/", output: "lab/monthly-prompt/index.html", schemaType: "WebPage" },
  { basePath: "/guides/", output: "guides/index.html", schemaType: "WebPage" },
  { basePath: "/guides/negative-prompts/", output: "guides/negative-prompts/index.html", schemaType: "Article" },
  { basePath: "/guides/write-music-prompts/", output: "guides/write-music-prompts/index.html", schemaType: "Article" },
  { basePath: "/guides/describe-drums/", output: "guides/describe-drums/index.html", schemaType: "Article" },
  { basePath: "/guides/low-end-808/", output: "guides/low-end-808/index.html", schemaType: "Article" },
  { basePath: "/guides/fix-generic-ai-music/", output: "guides/fix-generic-ai-music/index.html", schemaType: "Article" },
  { basePath: "/guides/space-texture/", output: "guides/space-texture/index.html", schemaType: "Article" },
  { basePath: "/guides/make-dark-trap/", output: "guides/make-dark-trap/index.html", schemaType: "Article" },
  { basePath: "/guides/make-dark-uk-garage/", output: "guides/make-dark-uk-garage/index.html", schemaType: "Article" },
  { basePath: "/guides/make-dark-jungle/", output: "guides/make-dark-jungle/index.html", schemaType: "Article" },
  { basePath: "/guides/make-noir-hip-hop/", output: "guides/make-noir-hip-hop/index.html", schemaType: "Article" },
  { basePath: "/guides/make-abstract-hip-hop/", output: "guides/make-abstract-hip-hop/index.html", schemaType: "Article" },
  { basePath: "/guides/make-dub-hip-hop/", output: "guides/make-dub-hip-hop/index.html", schemaType: "Article" },
  { basePath: "/guides/suno-country-prompts/", output: "guides/suno-country-prompts/index.html", schemaType: "Article" },
  { basePath: "/guides/suno-metal-prompts/", output: "guides/suno-metal-prompts/index.html", schemaType: "Article" },
  { basePath: "/compare/", output: "compare/index.html", schemaType: "WebPage" },
  { basePath: "/method/", output: "method/index.html", schemaType: "WebPage" },
  ...productIds.map((id) => ({ basePath: `/product/${id}/`, output: `product/${id}/index.html`, schemaType: "Product" }))
];

const localizedPath = (basePath, locale) => locale === "en" ? (basePath === "/" ? "/en/" : `/en${basePath}`) : basePath;
const localizedOutput = (output, locale) => locale === "en" ? path.posix.join("en", output) : output;
const pageLastModified = (basePath) => {
  if (basePath === "/legal/") return "2026-07-26";
  const legalId = basePath.match(/^\/legal\/([^/]+)\/$/u)?.[1];
  return legalId ? legalModified[legalId] : contentModified;
};
const pages = ["es", "en"].flatMap((locale) => basePages.map((page) => ({
  ...page,
  locale,
  lastModified: pageLastModified(page.basePath),
  pathname: localizedPath(page.basePath, locale),
  output: localizedOutput(page.output, locale)
})));
const expectedUrls = pages.map((page) => `${siteUrl}${page.pathname}`);

const metaContent = (html, attribute, value) => html.match(new RegExp(`<meta\\s+${attribute}="${value}"\\s+content="([^"]+)"`, "u"))?.[1];
const alternateHref = (html, hreflang) => html.match(new RegExp(`<link\\s+rel="alternate"\\s+hreflang="${hreflang}"\\s+href="([^"]+)"`, "u"))?.[1];
const graphEntries = (jsonLd) => Array.isArray(jsonLd["@graph"]) ? jsonLd["@graph"] : [jsonLd];
const escapeHtml = (value) => String(value).replace(/[&<>"']/gu, (character) => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
})[character]);
const samplerManifest = JSON.parse(await readFile(path.resolve(root, "../source/free_sampler/content.json"), "utf8"));
const samplerProofs = {};
for (const selection of samplerManifest.collections || []) {
  const productId = samplerSourceProductIds[selection.source];
  const source = JSON.parse(await readFile(path.resolve(root, "..", selection.source), "utf8"));
  const proof = (source.prompts || []).find((prompt) => prompt.id === selection.prompt_id);
  if (!productId || !proof || selection.prompt_id !== "001") throw new Error(`Sampler inválido para ${selection.source}`);
  samplerProofs[productId] = proof;
}
for (const [productId, sourcePath] of Object.entries({
  dust: "source/dust_country/content.json",
  iron: "source/iron_choir/content.json"
})) {
  const source = JSON.parse(await readFile(path.resolve(root, "..", sourcePath), "utf8"));
  const proof = (source.prompts || []).find((prompt) => prompt.id === "001");
  if (!proof) throw new Error(`Falta prompt público para ${productId}`);
  samplerProofs[productId] = proof;
}

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
  if ((page.schemaType === "Product" || page.basePath === "/") && !html.includes('class="checkout-conversion-bar"')) throw new Error(`${page.output}: falta la barra de conversión del checkout`);
  if (!/<div class="[^"]*\bview-content\b[^"]*"[^>]*>[\s\S]*?<h1(?:\s[^>]*)?>/u.test(html)) throw new Error(`${page.output}: falta contenido inicial con H1`);
  if (!jsonLdSource) throw new Error(`${page.output}: falta JSON-LD`);

  const jsonLd = JSON.parse(jsonLdSource);
  const mainEntity = graphEntries(jsonLd).find((entry) => entry["@type"] === page.schemaType);
  if (!mainEntity) throw new Error(`${page.output}: falta ${page.schemaType} en JSON-LD`);
  if (mainEntity.inLanguage !== page.locale) throw new Error(`${page.output}: inLanguage incorrecto en JSON-LD`);
  if (page.schemaType === "Product") {
    const offers = mainEntity.offers;
    if (!offers || offers["@type"] !== "Offer") throw new Error(`${page.output}: falta Offer en JSON-LD`);
    const bundle = page.basePath === "/bundle/";
    const expectedPrice = bundle ? "49.00" : "9.00";
    if (offers.price !== expectedPrice) throw new Error(`${page.output}: precio incorrecto en Offer`);
    if (Object.hasOwn(offers, "validFrom") || Object.hasOwn(offers, "priceValidUntil")) throw new Error(`${page.output}: el precio permanente conserva vigencia temporal`);
    const merchant = graphEntries(jsonLd).find((entry) => entry["@type"] === "OnlineStore" && entry["@id"] === `${siteUrl}/#store`);
    if (merchant?.hasMerchantReturnPolicy?.merchantReturnLink !== `${siteUrl}/legal/refund/`) throw new Error(`${page.output}: falta la política de devoluciones del comercio`);
    if (offers.seller?.["@id"] !== `${siteUrl}/#store`) throw new Error(`${page.output}: la oferta no enlaza con el comercio`);
    if (offers.hasMerchantReturnPolicy?.applicableCountry !== "ES" || offers.hasMerchantReturnPolicy?.returnPolicyCategory !== "https://schema.org/MerchantReturnNotPermitted") throw new Error(`${page.output}: falta la política de devolución del contenido digital`);
    if (offers.hasMerchantReturnPolicy?.merchantReturnLink !== `${siteUrl}/legal/refund/`) throw new Error(`${page.output}: la oferta no enlaza la política legal completa`);
    if (offers.shippingDetails?.shippingRate?.value !== "0" || offers.shippingDetails?.shippingRate?.currency !== "EUR") throw new Error(`${page.output}: falta entrega digital sin gastos de envío`);
    if (offers.shippingDetails?.shippingDestination?.addressCountry !== "ES") throw new Error(`${page.output}: destino de entrega comercial incorrecto`);
    if (offers.shippingDetails?.deliveryTime?.handlingTime?.maxValue !== 0 || offers.shippingDetails?.deliveryTime?.transitTime?.maxValue !== 0) throw new Error(`${page.output}: la entrega digital no figura como inmediata`);
    if (metaContent(html, "property", "product:price:amount") !== expectedPrice) throw new Error(`${page.output}: precio Open Graph incorrecto`);
    if (html.includes("<s>") || !html.includes(bundle ? "49 €" : "9 €")) throw new Error(`${page.output}: precio permanente visible incorrecto`);
    if (bundle) {
      const expectedBundleComparison = page.locale === "en" ? "All six separately: €54 · Complete pack: €49" : "Los seis por separado: 54 € · Pack completo: 49 €";
      const expectedBundleCta = page.locale === "en" ? "Buy now · €49" : "Comprar ahora · 49 €";
      if (!html.includes(expectedBundleComparison)) throw new Error(`${page.output}: comparación o ahorro incorrectos del bundle`);
      if (!html.includes(`data-buy="archive">${expectedBundleCta}</button>`)) throw new Error(`${page.output}: CTA directo del bundle incorrecto`);
      if (html.includes('data-add="archive"')) throw new Error(`${page.output}: el bundle conserva un CTA intermedio de carrito`);
      if (!description.includes("49")) throw new Error(`${page.output}: metadata del bundle sin precio`);
      if (!mainEntity.description.includes("49")) throw new Error(`${page.output}: descripción JSON-LD del bundle sin precio`);
    }
    if (!bundle) {
      const productId = page.basePath.match(/^\/product\/([^/]+)\//u)?.[1];
      const productCard = `${siteUrl}/media/${productId}/social-card.png?v=20260729`;
      if (metaContent(html, "property", "og:image") !== productCard) throw new Error(`${page.output}: og:image sin tarjeta propia del producto`);
      if (metaContent(html, "name", "twitter:image") !== productCard) throw new Error(`${page.output}: twitter:image sin tarjeta propia del producto`);
      await access(path.join(root, `media/${productId}/social-card.png`));
      const proof = samplerProofs[productId];
      if (!proof) throw new Error(`${page.output}: falta fuente del prompt de prueba`);
      if (!html.includes(`data-prompt-proof="${productId}"`)) throw new Error(`${page.output}: falta bloque de prueba inline`);
      if (!html.includes(`data-copy-prompt="${productId}"`)) throw new Error(`${page.output}: falta botón de copia`);
      if (!html.includes(`<code lang="en">${escapeHtml(proof.prompt)}</code>`)) throw new Error(`${page.output}: el prompt no coincide con el sampler`);
      if (!html.includes(`class="prompt-proof__demo" type="button" data-play="${productId}"`)) throw new Error(`${page.output}: falta demo de la prueba`);
      if (!html.includes('class="prompt-proof__assurance"')) throw new Error(`${page.output}: faltan las condiciones breves junto al CTA`);
      if (!html.includes(`class="primary-action prompt-proof__buy" type="button" data-buy="${productId}"`)) throw new Error(`${page.output}: falta CTA de compra de la prueba`);
      if (!html.includes(page.locale === "en" ? "GET THE OTHER 29 · €9" : "CONSEGUIR LOS OTROS 29 · 9 €")) throw new Error(`${page.output}: CTA de la prueba incorrecto`);
      if (!html.includes(page.locale === "en" ? "€0.30 per prompt" : "0,30 € por prompt")) throw new Error(`${page.output}: falta el precio por prompt`);
      if (!html.includes("Suno") || !html.includes('class="product-banner__compatibility"')) throw new Error(`${page.output}: falta compatibilidad y prueba visible en Suno`);
      const compatibility = mainEntity.additionalProperty?.find((property) => property.name === (page.locale === "en" ? "Compatibility" : "Compatibilidad"));
      if (compatibility?.value !== "Suno") throw new Error(`${page.output}: falta compatibilidad Suno en Product`);
      const bundleHref = page.locale === "en" ? "/en/bundle/" : "/bundle/";
      const isBundleMember = ["trap", "garage", "jungle", "low", "abyss", "noir"].includes(productId);
      if (isBundleMember && (!html.includes('class="bundle-upsell"') || !html.includes(`class="bundle-upsell__action" href="${bundleHref}"`) || !html.includes(page.locale === "en" ? "save €5" : "ahorras 5 €"))) throw new Error(`${page.output}: falta la venta cruzada del pack completo`);
      if (!isBundleMember && html.includes('class="bundle-upsell"')) throw new Error(`${page.output}: ofrece un bundle que no contiene este producto`);
    }
  }

  const guideSlug = page.basePath.match(/^\/guides\/([a-z0-9-]+)\/$/u)?.[1];
  if (guideSlug) {
    const guideCard = `${siteUrl}/media/guides/${guideSlug}-${page.locale}.png?v=20260729`;
    if (metaContent(html, "property", "og:image") !== guideCard) throw new Error(`${page.output}: og:image sin tarjeta propia de la guía`);
    await access(path.join(root, `media/guides/${guideSlug}-${page.locale}.png`));
    if (!html.includes('class="guide-pack"') || !html.includes('class="guide-pack__action"')) throw new Error(`${page.output}: falta la tarjeta de pack relacionado`);
    if (!html.includes('class="article-byline"') || !html.includes("Suno")) throw new Error(`${page.output}: falta autoría o enfoque Suno`);
  }
  if (page.basePath === "/guides/negative-prompts/" || page.basePath === "/guides/write-music-prompts/") {
    if (!html.includes('class="article-byline"') || !html.includes("Suno")) throw new Error(`${page.output}: falta autoría o enfoque Suno`);
  }
  if (page.basePath === "/method/" && (!html.includes("32 audio references") && !html.includes("32 referencias de audio"))) throw new Error(`${page.output}: falta método de prueba de las 32 referencias`);
  if (page.basePath === "/bundle/" && !html.includes(page.locale === "en" ? "€0.27 per prompt" : "0,27 € por prompt")) throw new Error(`${page.output}: falta el precio por prompt del bundle`);
  if (page.basePath.startsWith("/lab/")) {
    if (!html.includes("/lab.js?v=")) throw new Error(`${page.output}: falta lab.js`);
    const labCard = page.basePath === "/lab/monthly-prompt/" ? "media/lab/monthly-" : "media/lab/lab-";
    if (!metaContent(html, "property", "og:image")?.includes(`${labCard}${page.locale}.png`)) throw new Error(`${page.output}: og:image sin tarjeta del LAB`);
    await access(path.join(root, `${labCard}${page.locale}.png`));
  }
  if (page.basePath === "/lab/prompt-builder/" && ((html.match(/data-axis-option/gu) || []).length < 30 || !html.includes("data-copy-builder"))) throw new Error(`${page.output}: constructor incompleto`);
  if (page.basePath === "/lab/negative-prompts/" && ((html.match(/data-negative /gu) || []).length < 8 || !html.includes("data-copy-negatives"))) throw new Error(`${page.output}: generador de negatives incompleto`);
  if (page.basePath === "/lab/dictionary/" && ((html.match(/data-term=/gu) || []).length < 40 || !html.includes("data-dictionary-search"))) throw new Error(`${page.output}: diccionario incompleto`);
  if (page.basePath === "/lab/monthly-prompt/" && (!html.includes("data-monthly-prompt") || !html.includes('data-sampler-download="monthly"'))) throw new Error(`${page.output}: prompt del mes incompleto`);
  if (page.basePath === "/demos/" && (!html.includes('class="demos-sampler"') || !html.includes('data-sampler-download="demos"'))) throw new Error(`${page.output}: falta el recordatorio de la muestra en demos`);

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
  if (home.indexOf("data-folder-grid") > home.indexOf('class="home-offer"')) throw new Error(`${homePath}: las carpetas deben aparecer antes que el bloque de oferta`);
  if (!home.includes("PRECIO ACTUAL POR PACK") && !home.includes("CURRENT PRICE PER PACK")) throw new Error(`${homePath}: falta el precio permanente`);
  if (/<s>|24\.07\.2026|24 Jul 2026|descuento automático|automatic discount/iu.test(home)) throw new Error(`${homePath}: conserva urgencia o comparación de la oferta caducada`);
  if (!home.includes('"email": "hola@subsuelofs.com"')) throw new Error(`${homePath}: el correo corporativo no está unificado`);
  if (!home.includes(`"merchantReturnLink": "${siteUrl}/legal/refund/"`)) throw new Error(`${homePath}: falta la política de devoluciones del comercio`);
  for (const socialUrl of ["https://x.com/subsuelofs", "https://www.tiktok.com/@subsuelofs", "https://www.youtube.com/@subsuelofs"]) {
    if (!home.includes(JSON.stringify(socialUrl)) || !home.includes(`rel="me" href="${socialUrl}"`)) throw new Error(`${homePath}: falta perfil social ${socialUrl}`);
  }
  const legalHref = homePath.startsWith("en/") ? "/en/legal/" : "/legal/";
  if (!home.includes(`<a class="system-file" href="${legalHref}" data-route="${legalHref}">`)) throw new Error(`${homePath}: la carpeta legal no es un enlace rastreable`);
}

for (const locale of ["es", "en"]) {
  const prefix = locale === "en" ? "en/" : "";
  const routePrefix = locale === "en" ? "/en" : "";
  const folder = await readFile(path.join(root, `${prefix}legal/index.html`), "utf8");
  for (const key of legalIds) {
    const href = `${routePrefix}/legal/${key}/`;
    if (!folder.includes(`href="${href}" data-route="${href}"`)) throw new Error(`${prefix}legal/index.html: falta enlace directo a ${key}`);
    const documentHtml = await readFile(path.join(root, `${prefix}legal/${key}/index.html`), "utf8");
    if (!documentHtml.includes('class="legal-view"') || !documentHtml.includes('class="legal-copy"')) throw new Error(`${prefix}legal/${key}/index.html: documento legal sin contenido estático`);
    if (!documentHtml.includes('class="legal-toc"') || !documentHtml.includes('href="#legal-section-0"')) throw new Error(`${prefix}legal/${key}/index.html: índice legal sin enlaces`);
  }
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
  if (!block.includes(`<lastmod>${page.lastModified}</lastmod>`)) throw new Error(`sitemap.xml: lastmod incorrecto para ${page.pathname}`);
}

const robots = await readFile(path.join(root, "robots.txt"), "utf8");
if (!robots.includes(`Sitemap: ${siteUrl}/sitemap.xml`)) throw new Error("robots.txt no declara el sitemap");

for (const feedPath of ["feed.xml", "en/feed.xml"]) {
  const feed = await readFile(path.join(root, feedPath), "utf8");
  if (!feed.includes('<rss version="2.0"') || !feed.includes("<item>")) throw new Error(`${feedPath}: feed RSS inválido`);
}

const llms = await readFile(path.join(root, "llms.txt"), "utf8");
if (!llms.includes("https://subsuelofs.com/guides/") || !llms.includes("## Catalogue")) throw new Error("llms.txt incompleto");

const abyssAliasPath = "en/product/dub/index.html";
const abyssAlias = await readFile(path.join(root, abyssAliasPath), "utf8");
if (!abyssAlias.includes('<meta name="robots" content="noindex, follow"')) throw new Error(`${abyssAliasPath}: falta noindex`);
if (!abyssAlias.includes('<link rel="canonical" href="https://subsuelofs.com/en/product/abyss/"')) throw new Error(`${abyssAliasPath}: canonical incorrecto`);
if (!abyssAlias.includes('data-redirect-target="/en/product/abyss/"')) throw new Error(`${abyssAliasPath}: destino de redirección incorrecto`);
if (!abyssAlias.includes('href="/en/product/abyss/" data-redirect-link')) throw new Error(`${abyssAliasPath}: falta enlace accesible al destino`);
if (sitemap.includes("https://subsuelofs.com/en/product/dub/")) throw new Error("sitemap.xml no debe incluir el alias noindex");

const routeFallback = await readFile(path.join(root, "route-fallback.js"), "utf8");
if (!routeFallback.includes('"/en/product/dub": "/en/product/abyss/"')) throw new Error("route-fallback.js: falta el alias de Abyss Dub");
if (!routeFallback.includes("destination.search = location.search")) throw new Error("route-fallback.js: la redirección no conserva query params");

const analyticsConfig = JSON.parse(await readFile(path.join(root, "analytics-config.json"), "utf8"));
const analyticsRuntime = await readFile(path.join(root, "analytics-runtime.js"), "utf8");
const analyticsLoader = await readFile(path.join(root, "analytics-loader.js"), "utf8");
const appSource = await readFile(path.join(root, "app-v5.js"), "utf8");
if (analyticsConfig.enabled && (!analyticsConfig.websiteId || !/^https:\/\//u.test(analyticsConfig.scriptUrl || ""))) throw new Error("analytics-config.json: activación incompleta");
if (!analyticsConfig.enabled && !analyticsRuntime.includes('"enabled": false')) throw new Error("analytics-runtime.js: Umami debe seguir inactivo sin configuración real");
if (!analyticsLoader.includes("SUBSUELO_PAGEVIEW") || !analyticsLoader.includes("window.umami.track()")) throw new Error("Analítica: las páginas vistas no usan el contador de Umami");
if (analyticsLoader.includes('SUBSUELO_TRACK("page_view"') || appSource.includes('trackEvent("page_view"')) throw new Error("Analítica: page_view sigue registrado como evento personalizado");
for (const event of ["demo_start", "demo_complete", "sampler_click", "checkout_start", "outbound_payhip"]) {
  if (!analyticsLoader.includes(`"${event}"`) && !appSource.includes(`"${event}"`)) throw new Error(`Analítica: falta el evento ${event}`);
}
if (!appSource.includes('localStorage.getItem(attributionStorageKey)') || appSource.includes('sessionStorage.getItem("subsuelo-attribution-v1")')) throw new Error("Atribución: no se conserva entre pestañas");
if (!appSource.includes('target.searchParams.set("utm_source", "subsuelofs")') || !appSource.includes('target.searchParams.set("utm_medium", "website")')) throw new Error("Atribución: UTM de Payhip sin normalizar");

for (const page of pages) {
  const html = await readFile(path.join(root, page.output), "utf8");
  if (/<s>|24\.07\.2026|24 Jul 2026|descuento automático|automatic discount|automatic sale/iu.test(html)) throw new Error(`${page.output}: conserva urgencia o comparación caducada`);
  const payhipHrefs = [...html.matchAll(/href="(https:\/\/(?:[^"]*\.)?payhip\.com[^"]*)"/gu)].map((match) => match[1].replaceAll("&amp;", "&"));
  for (const href of payhipHrefs) {
    const url = new URL(href);
    if (url.searchParams.get("utm_source") !== "subsuelofs" || url.searchParams.get("utm_medium") !== "website" || !url.searchParams.get("utm_campaign")) {
      throw new Error(`${page.output}: enlace Payhip sin UTM normalizada (${url.pathname})`);
    }
  }
}

console.log(`Validadas ${pages.length} páginas estáticas bilingües, legales directas, precios permanentes, UTM, analítica preparada, hreflang, JSON-LD, feeds, robots.txt y sitemap.xml`);
