import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const templatePath = path.join(root, "index.html");
const siteUrl = "https://subsuelofs.com";
const lastModified = "2026-07-16";
const openingPriceEnds = "2026-07-30";
const socialImage = `${siteUrl}/social-card.png?v=20260716-2`;

const products = [
  {
    id: "trap",
    sku: "TRAP-RITUAL",
    name: "Trap Ritual",
    category: "Trap ritual",
    seoTitle: "Trap Ritual: 30 prompts de trap oscuro | SUBSUELO FS",
    metaDescription: "30 direcciones de trap ritual oscuro con 10 negative prompts, guías ES/EN y 4 audios de referencia. Descarga digital: 15 €.",
    description: "30 formas distintas de construir trap ritual oscuro. Cambian la batería, el movimiento del 808, la fuente principal y el espacio sin salir de la misma familia sonora.",
    tone: "#713d46",
    price: 15,
    demo: "Ash Circle"
  },
  {
    id: "garage",
    sku: "GARAJE-OSCURO",
    name: "Garaje Oscuro",
    category: "Garage oscuro",
    seoTitle: "Garaje Oscuro: 30 prompts de UK garage | SUBSUELO FS",
    metaDescription: "30 direcciones de UK garage oscuro con 10 negative prompts, guías ES/EN y 4 audios de referencia. Descarga digital: 15 €.",
    description: "30 bases de UK garage oscuro con patrones 2-step, swing humano, subgrave y ambiente urbano. Cada una cambia la batería, el bajo, el motivo y el espacio.",
    tone: "#425763",
    price: 15,
    demo: "Alley Pressure"
  },
  {
    id: "jungle",
    sku: "FOSSIL-JUNGLE",
    name: "Fossil Jungle",
    category: "Jungle degradado",
    seoTitle: "Fossil Jungle: 30 prompts de jungle oscuro | SUBSUELO FS",
    metaDescription: "30 direcciones de jungle oscuro y degradado con 10 negative prompts, guías ES/EN y 4 audios de referencia. Descarga digital: 15 €.",
    description: "30 piezas de jungle oscuro y degradado. Cambian la arquitectura de la batería, el comportamiento del bajo, la fuente de la muestra y el espacio.",
    tone: "#66705a",
    price: 15,
    demo: "Limestone Roll"
  },
  {
    id: "low",
    sku: "LOW-PRESSURE",
    name: "Low Pressure",
    category: "Hip-Hop abstracto",
    seoTitle: "Low Pressure: 30 prompts de hip-hop abstracto | SUBSUELO FS",
    metaDescription: "30 direcciones de hip-hop abstracto con 10 negative prompts, guías ES/EN y 4 audios de referencia. Descarga digital: 15 €.",
    description: "30 bases pesadas, oscuras y texturales. Cada propuesta cambia la batería, el bajo, la fuente sonora o el espacio sin salir del hip-hop experimental abstracto.",
    tone: "#b34b35",
    price: 15,
    demo: "Concrete Pulse"
  },
  {
    id: "abyss",
    sku: "ABYSS-DUB",
    name: "Abyss Dub",
    category: "Hip-Hop dub",
    seoTitle: "Abyss Dub: 30 prompts de hip-hop dub | SUBSUELO FS",
    metaDescription: "30 direcciones de hip-hop dub oscuro con 10 negative prompts, guías ES/EN y 4 audios de referencia. Descarga digital: 15 €.",
    description: "30 bases de hip-hop dub oscuro con batería de rap, subgrave enorme, acordes aislados y ecos profundos. Cambian el patrón, el bajo y la forma de mezclar el espacio.",
    tone: "#596352",
    price: 15,
    demo: "Deep Chamber"
  },
  {
    id: "noir",
    sku: "NOIR-TAPES",
    name: "Noir Tapes",
    category: "Hip-Hop noir",
    seoTitle: "Noir Tapes: 30 prompts de hip-hop noir | SUBSUELO FS",
    metaDescription: "30 direcciones de hip-hop noir y boom bap abstracto con 10 negative prompts, guías ES/EN y 4 audios. Descarga digital: 15 €.",
    description: "30 bases de hip-hop noir y boom bap abstracto construidas con muestras. Cambian el corte de batería, el bajo, la fuente y el tratamiento de cinta.",
    tone: "#705e6b",
    price: 15,
    demo: "Rain Evidence"
  }
];

const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
})[character]);

const indent = (value, spaces) => value.split("\n").map((line) => `${" ".repeat(spaces)}${line}`).join("\n");
const canonicalUrl = (pathname) => `${siteUrl}${pathname}`;

const breadcrumbSchema = (page) => ({
  "@type": "BreadcrumbList",
  "@id": `${canonicalUrl(page.pathname)}#breadcrumb`,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "SUBSUELO FS", item: `${siteUrl}/` },
    ...(page.pathname === "/" ? [] : [{ "@type": "ListItem", position: 2, name: page.heading, item: canonicalUrl(page.pathname) }])
  ]
});

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "OnlineStore",
      "@id": `${siteUrl}/#store`,
      name: "SUBSUELO FS",
      legalName: "NOMBRE DIRECCION, S.L.U.",
      url: `${siteUrl}/`,
      logo: `${siteUrl}/favicon.svg`,
      image: `${siteUrl}/social-card.png`,
      description: "Colecciones por género para crear instrumentales con prompts, negative prompts, guías ES/EN y referencias de audio.",
      sameAs: ["https://x.com/subsuelofs"]
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: "SUBSUELO FS",
      inLanguage: "es",
      publisher: { "@id": `${siteUrl}/#store` }
    },
    {
      "@type": "CollectionPage",
      "@id": `${siteUrl}/#catalogue`,
      url: `${siteUrl}/`,
      name: "Prompts para instrumentales oscuras | SUBSUELO FS",
      description: "Colecciones por género con 30 prompts, 10 negative prompts, guías ES/EN y 4 referencias de audio.",
      inLanguage: "es",
      isPartOf: { "@id": `${siteUrl}/#website` },
      mainEntity: {
        "@type": "ItemList",
        itemListElement: products.map((product, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: product.name,
          url: `${siteUrl}/product/${product.id}/`
        }))
      }
    }
  ]
};

const productSchema = (page, product) => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      "@id": `${canonicalUrl(page.pathname)}#product`,
      url: canonicalUrl(page.pathname),
      name: product.name,
      description: product.description,
      sku: product.sku,
      image: [`${siteUrl}/social-card.png`],
      category: product.category,
      brand: { "@type": "Brand", name: "SUBSUELO FS" },
      additionalProperty: [
        { "@type": "PropertyValue", name: "Prompts", value: product.id === "archive" ? 180 : 30 },
        { "@type": "PropertyValue", name: "Negative prompts", value: product.id === "archive" ? 60 : 10 },
        { "@type": "PropertyValue", name: "Referencias de audio", value: product.id === "archive" ? 24 : 4 }
      ],
      offers: {
        "@type": "Offer",
        url: canonicalUrl(page.pathname),
        priceCurrency: "EUR",
        price: product.price.toFixed(2),
        priceValidUntil: openingPriceEnds,
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition",
        seller: { "@type": "Organization", name: "NOMBRE DIRECCION, S.L.U." }
      }
    },
    breadcrumbSchema(page)
  ]
});

const webPageSchema = (page) => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${canonicalUrl(page.pathname)}#webpage`,
      url: canonicalUrl(page.pathname),
      name: page.title,
      description: page.description,
      inLanguage: "es",
      isPartOf: { "@id": `${siteUrl}/#website` },
      breadcrumb: { "@id": `${canonicalUrl(page.pathname)}#breadcrumb` }
    },
    breadcrumbSchema(page)
  ]
});

const folderCard = (product) => `<a class="folder-item" href="/product/${product.id}/" data-product-id="${product.id}" aria-label="${escapeHtml(`${product.name}. ${product.category} · 30 prompts. ${product.price} €`)}"><span class="folder-icon" style="--tone:${product.tone}"></span><strong>${escapeHtml(product.name)}</strong><small>${escapeHtml(product.category)} · 30 prompts</small><span class="folder-list-price">${product.price} €</span></a>`;

const homeView = () => `
<header class="view-heading">
  <div class="view-heading__copy">
    <p>SUBSUELO / CATÁLOGO</p>
    <h1>Un género por carpeta</h1>
    <p>Entra en el género que quieres producir. Dentro encontrarás 30 prompts distintos que cambian la batería, el bajo, el motivo y el espacio sin abandonar esa familia sonora.</p>
  </div>
  <p class="view-heading__hint">Selecciona una carpeta · Doble clic para abrir</p>
</header>
<span class="opening-price-note opening-price-note--catalog">Precio de apertura hasta 30.07.2026</span>
<div class="folder-grid" data-folder-grid>
  ${products.map(folderCard).join("\n  ")}
</div>
<section class="system-files">
  <h2>MÁS INFORMACIÓN</h2>
  <div class="system-file-row">
    <a class="system-file" href="/help/" data-route="/help/"><span class="file-icon file-icon--text">TXT</span><strong>QUE_INCLUYE_CADA_CARPETA.txt</strong></a>
    <a class="system-file" href="/demos/" data-route="/demos/"><span class="file-icon file-icon--audio">AUDIO</span><strong>ESCUCHAR_EJEMPLOS.audio</strong></a>
    <a class="system-file" href="/bundle/" data-route="/bundle/"><span class="row-folder-icon"></span><strong>PACK_COMPLETO.folder</strong></a>
    <button class="system-file" type="button" data-route="/legal"><span class="row-folder-icon"></span><strong>LEGAL_Y_PRIVACIDAD.folder</strong></button>
  </div>
</section>`;

const productView = (product) => `
<section class="product-banner" style="--tone:${product.tone}">
  <div class="product-banner__art"></div>
  <div>
    <p class="kicker">CARPETA DE PROMPTS / ${escapeHtml(product.category)}</p>
    <h1>${escapeHtml(product.name)}</h1>
    <p>${escapeHtml(product.description)}</p>
  </div>
  <div class="product-banner__buy">
    <div class="product-banner__price"><strong>${product.price} €</strong><span class="opening-price-note">Precio de apertura hasta 30.07.2026</span></div>
    <button type="button" data-add="${product.id}">Añadir al carrito</button>
  </div>
</section>
<header class="subfolder-heading">
  <span class="folder-icon" style="--tone:${product.tone}"></span>
  <div><h2>Contenido de la descarga</h2><p>3 elementos</p></div>
</header>
<div class="file-list">
  <div class="file-list__header"><span>Nombre</span><span>Tipo</span><span>Qué contiene</span><span>Acceso</span></div>
  <div class="file-row"><span class="file-row__name"><span class="row-folder-icon"></span><strong>ES</strong></span><span>Carpeta</span><span>Documentos en español; los prompts preparados para copiar están en inglés.</span><span class="file-row__action">Incluido</span></div>
  <div class="file-row"><span class="file-row__name"><span class="row-folder-icon"></span><strong>EN</strong></span><span>Carpeta</span><span>Documentos en inglés; los prompts preparados para copiar también están en inglés.</span><span class="file-row__action">Incluido</span></div>
  <div class="file-row"><span class="file-row__name"><span class="file-icon file-icon--audio">AUDIO</span><strong>AUDIO_EXAMPLES</strong></span><span>Carpeta</span><span>4 MP3 para escucha y referencia; la muestra pública permite comprobar el sonido.</span><span class="file-row__action">Incluido</span></div>
</div>
<div class="purchase-strip">
  <div><strong>${escapeHtml(product.name)} · ${product.price} €</strong><span>Descarga disponible después del pago</span></div>
  <div class="purchase-strip__actions"><button type="button" data-play="${product.id}">Escuchar muestra</button><button class="primary-action" type="button" data-add="${product.id}">Añadir al carrito</button></div>
</div>`;

const demosView = () => `
<header class="view-heading">
  <div class="view-heading__copy"><p>AUDIO / MUESTRAS</p><h1>Muestras de audio</h1><p>Escucha una muestra pública de cada carpeta. Cada compra incluye además 4 MP3 completos para referencia sonora.</p></div>
</header>
<div class="file-list demo-list">
  <div class="file-list__header"><span>Pista</span><span>Carpeta</span><span>Duración</span><span>Acción</span></div>
  ${products.map((product) => `<div class="file-row" data-track="${product.id}"><span class="file-row__name"><span class="file-icon file-icon--audio">AUDIO</span><strong>${escapeHtml(product.demo)}</strong></span><span><a href="/product/${product.id}/" data-route="/product/${product.id}/">${escapeHtml(product.name)}</a></span><span>00:30</span><span class="demo-row-actions"><button class="file-row__action" type="button" data-play="${product.id}">Escuchar</button><button class="file-row__action file-row__action--primary" type="button" data-add="${product.id}">Añadir · 15 €</button></span></div>`).join("\n  ")}
</div>`;

const bundleProduct = {
  id: "archive",
  sku: "COMPLETE-PACK",
  name: "Pack completo SUBSUELO FS",
  category: "Colección de prompts para instrumentales",
  description: "Las 6 colecciones en un solo ZIP: 180 prompts, 60 negative prompts, guías ES/EN y 24 referencias de audio.",
  price: 59
};

const bundleView = () => `
<header class="view-heading"><div class="view-heading__copy"><p>PACK COMPLETO</p><h1>Todas las carpetas</h1><p>Incluye en un solo ZIP todas las carpetas enumeradas debajo. La compra cubre únicamente esas carpetas; las publicaciones futuras se venden por separado.</p></div></header>
<span class="opening-price-note opening-price-note--heading">Precio de apertura hasta 30.07.2026</span>
<header class="subfolder-heading"><span class="folder-icon folder-icon--bundle"></span><div><h2>Carpetas incluidas</h2><p>6 elementos</p></div></header>
<div class="file-list">
  <div class="file-list__header"><span>Nombre</span><span>Tipo</span><span>Qué contiene</span><span>Acceso</span></div>
  ${products.map((product) => `<a class="file-row" href="/product/${product.id}/" data-route="/product/${product.id}/"><span class="file-row__name"><span class="row-folder-icon"></span><strong>${escapeHtml(product.name)}</strong></span><span>Carpeta</span><span>${escapeHtml(product.description)}</span><span class="file-row__action">Abrir</span></a>`).join("\n  ")}
</div>
<div class="purchase-strip"><div><strong>Pack completo · 59 €</strong><span>90 € por separado · ahorras 31 €</span></div><div class="purchase-strip__actions"><button class="primary-action" type="button" data-add="archive">Añadir pack completo</button></div></div>`;

const helpView = () => `
<article class="help-document">
  <header class="help-document__head">AYUDA / EMPIEZA_AQUI.txt</header>
  <div class="help-document__body">
    <h1>Qué incluye cada carpeta</h1>
    <p class="help-document__lead">Cada compra incluye una carpeta ES, otra EN y AUDIO_EXAMPLES. Las explicaciones cambian de idioma; los prompts que se copian están en inglés en las dos versiones.</p>
    <div class="two-part-map"><div class="map-block"><strong>PROMPTS</strong><span>Elige un prompt y pégalo en Styles</span></div><div class="map-arrow">+</div><div class="map-block"><strong>NEGATIVE PROMPTS</strong><span>Usa Exclude solo si quieres quitar algo</span></div></div>
    <p class="help-document__lead">Para empezar solo necesitas un prompt. El negative prompt es opcional y sirve para excluir algo concreto.</p>
    <div class="concept-grid">
      <section class="concept-card"><div class="concept-card__top"><span class="file-icon file-icon--pdf">PDF</span><h2>PROMPTS</h2></div><p>El PDF PROMPTS reúne todos los prompts de la carpeta. Elige uno y pégalo completo en el campo Styles.</p></section>
      <section class="concept-card"><div class="concept-card__top"><span class="file-icon file-icon--pdf">PDF</span><h2>NEGATIVE PROMPTS</h2></div><p>El PDF NEGATIVE PROMPTS reúne listas para el campo Exclude. Usa una cuando quieras evitar voces u otro elemento concreto indicado en la lista.</p></section>
      <section class="concept-card"><div class="concept-card__top"><span class="file-icon file-icon--pdf">PDF</span><h2>GUÍA</h2></div><p>Hay una guía en español y la misma guía en inglés. Explica dónde pegar cada bloque, cómo trabajar con o sin voz y qué hace cada control.</p></section>
      <section class="concept-card"><div class="concept-card__top"><span class="file-icon file-icon--audio">AUDIO</span><h2>EJEMPLOS DE AUDIO</h2></div><p>La descarga incluye 4 MP3 para escuchar como referencia del sonido. No tienen licencia de sampleo, publicación o reutilización.</p></section>
    </div>
    <div class="availability"><strong>TXT / PDF / MP3</strong><span>Después del pago recibes las carpetas ES, EN y AUDIO_EXAMPLES.</span></div>
  </div>
</article>`;

const pages = [
  {
    pathname: "/",
    output: "index.html",
    heading: "Un género por carpeta",
    title: "Prompts para instrumentales oscuras | SUBSUELO FS",
    description: "Colecciones por género con 30 prompts, 10 negative prompts, guías en español e inglés y 4 referencias de audio. Escucha las demos antes de elegir.",
    type: "website",
    schema: homeSchema,
    view: homeView()
  },
  {
    pathname: "/demos/",
    output: "demos/index.html",
    heading: "Muestras de audio",
    title: "Demos de instrumentales oscuras | SUBSUELO FS",
    description: "Escucha muestras de trap ritual, UK garage oscuro, jungle degradado, hip-hop abstracto, dub y noir antes de elegir una carpeta.",
    type: "website",
    view: demosView()
  },
  {
    pathname: "/bundle/",
    output: "bundle/index.html",
    heading: "Pack completo",
    title: "Pack completo: 180 prompts para instrumentales | SUBSUELO FS",
    description: "Las 6 colecciones en un ZIP: 180 prompts, 60 negative prompts, guías ES/EN y 24 referencias de audio. Descarga digital: 59 €.",
    type: "product",
    price: 59,
    product: bundleProduct,
    view: bundleView()
  },
  {
    pathname: "/help/",
    output: "help/index.html",
    heading: "Qué incluye cada carpeta",
    title: "Qué incluye una carpeta de prompts | SUBSUELO FS",
    description: "Qué contienen los PDF de prompts y negative prompts, dónde se usa cada archivo y qué incluyen las guías y las referencias de audio.",
    type: "website",
    view: helpView()
  },
  ...products.map((product) => ({
    pathname: `/product/${product.id}/`,
    output: `product/${product.id}/index.html`,
    heading: product.name,
    title: product.seoTitle,
    description: product.metaDescription,
    type: "product",
    price: product.price,
    product,
    view: productView(product)
  }))
];

const pageSchema = (page) => page.schema || (page.product ? productSchema(page, page.product) : webPageSchema(page));

const seoBlock = (page) => {
  const url = canonicalUrl(page.pathname);
  const productMeta = page.type === "product"
    ? `\n<meta property="product:price:amount" content="${page.price.toFixed(2)}" />\n<meta property="product:price:currency" content="EUR" />`
    : "";
  return `
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
<meta name="description" content="${escapeHtml(page.description)}" />
<link rel="canonical" href="${url}" />
<link rel="sitemap" type="application/xml" title="Sitemap" href="${siteUrl}/sitemap.xml" />
<meta property="og:type" content="${page.type}" />
<meta property="og:url" content="${url}" />
<meta property="og:site_name" content="SUBSUELO FS" />
<meta property="og:locale" content="es_ES" />
<meta property="og:title" content="${escapeHtml(page.title)}" />
<meta property="og:description" content="${escapeHtml(page.description)}" />
<meta property="og:image" content="${socialImage}" />
<meta property="og:image:secure_url" content="${socialImage}" />
<meta property="og:image:type" content="image/png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="600" />
<meta property="og:image:alt" content="SUBSUELO FS: dirección sonora por género en un explorador de archivos." />${productMeta}
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@subsuelofs" />
<meta name="twitter:creator" content="@subsuelofs" />
<meta name="twitter:title" content="${escapeHtml(page.title)}" />
<meta name="twitter:description" content="${escapeHtml(page.description)}" />
<meta name="twitter:image" content="${socialImage}" />
<meta name="twitter:image:alt" content="SUBSUELO FS: dirección sonora por género en un explorador de archivos." />
<link rel="me" href="https://x.com/subsuelofs" />
<script type="application/ld+json">
${indent(JSON.stringify(pageSchema(page), null, 2), 2)}
</script>
<title>${escapeHtml(page.title)}</title>`.trim();
};

const replaceMarker = (html, marker, value) => {
  const pattern = new RegExp(`([ \\t]*)<!-- ${marker}:START -->[\\s\\S]*?[ \\t]*<!-- ${marker}:END -->`);
  if (!pattern.test(html)) throw new Error(`No se encontró el marcador ${marker}`);
  return html.replace(pattern, (match, whitespace) => `${whitespace}<!-- ${marker}:START -->\n${indent(value.trim(), whitespace.length)}\n${whitespace}<!-- ${marker}:END -->`);
};

const template = await readFile(templatePath, "utf8");

for (const page of pages) {
  let html = replaceMarker(template, "STATIC-SEO", seoBlock(page));
  html = replaceMarker(html, "STATIC-CONTENT", page.view);
  const outputPath = path.join(root, page.output);
  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, html.endsWith("\n") ? html : `${html}\n`, "utf8");
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((page) => `  <url>\n    <loc>${canonicalUrl(page.pathname)}</loc>\n    <lastmod>${lastModified}</lastmod>\n  </url>`).join("\n")}
</urlset>
`;

await writeFile(path.join(root, "sitemap.xml"), sitemap, "utf8");
await writeFile(path.join(root, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`, "utf8");

console.log(`Generadas ${pages.length} páginas estáticas y sitemap.xml`);
