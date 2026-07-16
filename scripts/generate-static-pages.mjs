import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import vm from "node:vm";

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
    categoryEn: "Ritual trap",
    seoTitle: "Trap Ritual: 30 prompts de trap oscuro | SUBSUELO FS",
    seoTitleEn: "Trap Ritual: 30 dark trap prompts | SUBSUELO FS",
    metaDescription: "30 direcciones de trap ritual oscuro con 10 negative prompts, guías ES/EN y 4 audios de referencia. Descarga digital: 15 €.",
    metaDescriptionEn: "30 dark ritual trap prompts, 10 negative prompts, guides in English and Spanish, and 4 MP3 references. One coherent sound, 30 distinct beats.",
    description: "30 formas distintas de construir trap ritual oscuro. Cambian la batería, el movimiento del 808, la fuente principal y el espacio sin salir de la misma familia sonora.",
    descriptionEn: "30 distinct routes into dark ritual trap. The drum pocket, 808 movement, lead source and space change from prompt to prompt without leaving the genre.",
    tone: "#713d46",
    price: 15,
    demo: "Ash Circle"
  },
  {
    id: "garage",
    sku: "GARAJE-OSCURO",
    name: "Garaje Oscuro",
    category: "Garage oscuro",
    categoryEn: "Dark UK garage",
    seoTitle: "Garaje Oscuro: 30 prompts de UK garage | SUBSUELO FS",
    seoTitleEn: "Garaje Oscuro: 30 dark UK garage prompts | SUBSUELO FS",
    metaDescription: "30 direcciones de UK garage oscuro con 10 negative prompts, guías ES/EN y 4 audios de referencia. Descarga digital: 15 €.",
    metaDescriptionEn: "30 dark UK garage prompts built around 2-step drums, human swing, sub-bass and urban space, plus 10 negative prompts and 4 MP3 references.",
    description: "30 bases de UK garage oscuro con patrones 2-step, swing humano, subgrave y ambiente urbano. Cada una cambia la batería, el bajo, el motivo y el espacio.",
    descriptionEn: "30 dark UK garage beats built on 2-step patterns, human swing, sub-bass and urban space. Each prompt changes the drums, bass movement, main motif and use of space.",
    tone: "#425763",
    price: 15,
    demo: "Alley Pressure"
  },
  {
    id: "jungle",
    sku: "FOSSIL-JUNGLE",
    name: "Fossil Jungle",
    category: "Jungle degradado",
    categoryEn: "Degraded jungle",
    seoTitle: "Fossil Jungle: 30 prompts de jungle oscuro | SUBSUELO FS",
    seoTitleEn: "Fossil Jungle: 30 dark jungle prompts | SUBSUELO FS",
    metaDescription: "30 direcciones de jungle oscuro y degradado con 10 negative prompts, guías ES/EN y 4 audios de referencia. Descarga digital: 15 €.",
    metaDescriptionEn: "30 dark, degraded jungle prompts with changing break architecture, bass behaviour and sample sources, plus 10 negative prompts and 4 MP3 references.",
    description: "30 piezas de jungle oscuro y degradado. Cambian la arquitectura de la batería, el comportamiento del bajo, la fuente de la muestra y el espacio.",
    descriptionEn: "30 pieces of dark, degraded jungle. Break architecture, bass behaviour, sample source and space change from one prompt to the next while the genre stays intact.",
    tone: "#66705a",
    price: 15,
    demo: "Limestone Roll"
  },
  {
    id: "low",
    sku: "LOW-PRESSURE",
    name: "Low Pressure",
    category: "Hip-Hop abstracto",
    categoryEn: "Abstract hip-hop",
    seoTitle: "Low Pressure: 30 prompts de hip-hop abstracto | SUBSUELO FS",
    seoTitleEn: "Low Pressure: 30 abstract hip-hop prompts | SUBSUELO FS",
    metaDescription: "30 direcciones de hip-hop abstracto con 10 negative prompts, guías ES/EN y 4 audios de referencia. Descarga digital: 15 €.",
    metaDescriptionEn: "30 dark instrumental prompts for heavy, textural abstract hip-hop, plus 10 negative prompts, guides in English and Spanish, and 4 MP3 references.",
    description: "30 bases pesadas, oscuras y texturales. Cada propuesta cambia la batería, el bajo, la fuente sonora o el espacio sin salir del hip-hop experimental abstracto.",
    descriptionEn: "30 heavy, dark and textural abstract hip-hop beats. Each prompt changes the drums, bass, sound source or space while staying rooted in abstract experimental hip-hop.",
    tone: "#b34b35",
    price: 15,
    demo: "Concrete Pulse"
  },
  {
    id: "abyss",
    sku: "ABYSS-DUB",
    name: "Abyss Dub",
    category: "Hip-Hop dub",
    categoryEn: "Dub hip-hop",
    seoTitle: "Abyss Dub: 30 prompts de hip-hop dub | SUBSUELO FS",
    seoTitleEn: "Abyss Dub: 30 dark dub hip-hop prompts | SUBSUELO FS",
    metaDescription: "30 direcciones de hip-hop dub oscuro con 10 negative prompts, guías ES/EN y 4 audios de referencia. Descarga digital: 15 €.",
    metaDescriptionEn: "30 dub-inflected hip-hop prompts with rap drums, immense sub-bass, isolated chords and deep echoes, plus 10 negative prompts and 4 MP3 references.",
    description: "30 bases de hip-hop dub oscuro con batería de rap, subgrave enorme, acordes aislados y ecos profundos. Cambian el patrón, el bajo y la forma de mezclar el espacio.",
    descriptionEn: "30 dark dub-inflected hip-hop beats with rap drums, immense sub-bass, isolated chords and deep echoes. The pocket, bass movement and use of space change across the folder.",
    tone: "#596352",
    price: 15,
    demo: "Deep Chamber"
  },
  {
    id: "noir",
    sku: "NOIR-TAPES",
    name: "Noir Tapes",
    category: "Hip-Hop noir",
    categoryEn: "Noir hip-hop",
    seoTitle: "Noir Tapes: 30 prompts de hip-hop noir | SUBSUELO FS",
    seoTitleEn: "Noir Tapes: 30 noir hip-hop prompts | SUBSUELO FS",
    metaDescription: "30 direcciones de hip-hop noir y boom bap abstracto con 10 negative prompts, guías ES/EN y 4 audios. Descarga digital: 15 €.",
    metaDescriptionEn: "30 sample-based noir hip-hop and abstract boom-bap prompts with changing drum cuts and tape treatment, plus 10 negative prompts and 4 MP3 references.",
    description: "30 bases de hip-hop noir y boom bap abstracto construidas con muestras. Cambian el corte de batería, el bajo, la fuente y el tratamiento de cinta.",
    descriptionEn: "30 sample-based noir hip-hop and abstract boom-bap beats. Each prompt changes the drum cut, bass, source material or tape treatment without leaving the collection's core sound.",
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
const localizedPath = (pathname, locale) => locale === "en" ? (pathname === "/" ? "/en/" : `/en${pathname}`) : pathname;
const localizedOutput = (output, locale) => locale === "en" ? path.posix.join("en", output) : output;
const productValue = (product, key, locale) => locale === "en" ? product[`${key}En`] : product[key];

const breadcrumbSchema = (page) => ({
  "@type": "BreadcrumbList",
  "@id": `${canonicalUrl(page.pathname)}#breadcrumb`,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "SUBSUELO FS", item: canonicalUrl(localizedPath("/", page.locale)) },
    ...(page.basePath === "/" ? [] : [{ "@type": "ListItem", position: 2, name: page.heading, item: canonicalUrl(page.pathname) }])
  ]
});

const homeSchema = (page) => ({
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
      description: page.locale === "en"
        ? "Genre-built prompt collections for dark instrumentals, with negative prompts, guides in English and Spanish, and audio references."
        : "Colecciones por género para crear instrumentales con prompts, negative prompts, guías ES/EN y referencias de audio.",
      sameAs: ["https://x.com/subsuelofs"]
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: "SUBSUELO FS",
      inLanguage: ["es", "en"],
      publisher: { "@id": `${siteUrl}/#store` }
    },
    {
      "@type": "CollectionPage",
      "@id": `${canonicalUrl(page.pathname)}#catalogue`,
      url: canonicalUrl(page.pathname),
      name: page.title,
      description: page.description,
      inLanguage: page.locale,
      isPartOf: { "@id": `${siteUrl}/#website` },
      mainEntity: {
        "@type": "ItemList",
        itemListElement: products.map((product, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: product.name,
          url: canonicalUrl(localizedPath(`/product/${product.id}/`, page.locale))
        }))
      }
    }
  ]
});

const productSchema = (page, product) => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      "@id": `${canonicalUrl(page.pathname)}#product`,
      url: canonicalUrl(page.pathname),
      name: product.name,
      description: page.productDescription,
      sku: product.sku,
      image: [`${siteUrl}/social-card.png`],
      category: page.productCategory,
      inLanguage: page.locale,
      brand: { "@type": "Brand", name: "SUBSUELO FS" },
      additionalProperty: [
        { "@type": "PropertyValue", name: "Prompts", value: product.id === "archive" ? 180 : 30 },
        { "@type": "PropertyValue", name: "Negative prompts", value: product.id === "archive" ? 60 : 10 },
        { "@type": "PropertyValue", name: page.locale === "en" ? "Audio references" : "Referencias de audio", value: product.id === "archive" ? 24 : 4 }
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
      inLanguage: page.locale,
      isPartOf: { "@id": `${siteUrl}/#website` },
      breadcrumb: { "@id": `${canonicalUrl(page.pathname)}#breadcrumb` }
    },
    breadcrumbSchema(page)
  ]
});

const folderCard = (product, locale) => {
  const category = productValue(product, "category", locale);
  const href = localizedPath(`/product/${product.id}/`, locale);
  return `<a class="folder-item" href="${href}" data-product-id="${product.id}" aria-label="${escapeHtml(`${product.name}. ${category} · 30 prompts. ${product.price} €`)}"><span class="folder-icon" style="--tone:${product.tone}"></span><strong>${escapeHtml(product.name)}</strong><small>${escapeHtml(category)} · 30 prompts</small><span class="folder-list-price">${product.price} €</span></a>`;
};

const homeView = (locale) => {
  const en = locale === "en";
  const helpHref = localizedPath("/help/", locale);
  const demosHref = localizedPath("/demos/", locale);
  const bundleHref = localizedPath("/bundle/", locale);
  const legalHref = localizedPath("/legal", locale);
  return `
<header class="view-heading">
  <div class="view-heading__copy">
    <p>${en ? "SUBSUELO / CATALOGUE" : "SUBSUELO / CATÁLOGO"}</p>
    <h1>${en ? "One genre. 30 ways in." : "Un género por carpeta"}</h1>
    <p>${en ? "Pick the sound you want to make. Each folder gives you 30 prompts that change the drums, bass, lead source and space while staying inside one coherent genre." : "Entra en el género que quieres producir. Dentro encontrarás 30 prompts distintos que cambian la batería, el bajo, el motivo y el espacio sin abandonar esa familia sonora."}</p>
  </div>
  <p class="view-heading__hint">${en ? "Select a folder · Double-click to open" : "Selecciona una carpeta · Doble clic para abrir"}</p>
</header>
<span class="opening-price-note opening-price-note--catalog">${en ? "Opening price until 30.07.2026" : "Precio de apertura hasta 30.07.2026"}</span>
<div class="folder-grid" data-folder-grid>
  ${products.map((product) => folderCard(product, locale)).join("\n  ")}
</div>
<section class="system-files">
  <h2>${en ? "MORE INFORMATION" : "MÁS INFORMACIÓN"}</h2>
  <div class="system-file-row">
    <a class="system-file" href="${helpHref}" data-route="${helpHref}"><span class="file-icon file-icon--text">TXT</span><strong>${en ? "WHAT_EACH_FOLDER_INCLUDES.txt" : "QUE_INCLUYE_CADA_CARPETA.txt"}</strong></a>
    <a class="system-file" href="${demosHref}" data-route="${demosHref}"><span class="file-icon file-icon--audio">AUDIO</span><strong>${en ? "HEAR_THE_EXAMPLES.audio" : "ESCUCHAR_EJEMPLOS.audio"}</strong></a>
    <a class="system-file" href="${bundleHref}" data-route="${bundleHref}"><span class="row-folder-icon"></span><strong>${en ? "COMPLETE_PACK.folder" : "PACK_COMPLETO.folder"}</strong></a>
    <button class="system-file" type="button" data-route="${legalHref}"><span class="row-folder-icon"></span><strong>${en ? "LEGAL_AND_PRIVACY.folder" : "LEGAL_Y_PRIVACIDAD.folder"}</strong></button>
  </div>
</section>`;
};

const productView = (product, locale) => {
  const en = locale === "en";
  const category = productValue(product, "category", locale);
  const description = productValue(product, "description", locale);
  return `
<section class="product-banner" style="--tone:${product.tone}">
  <div class="product-banner__art"></div>
  <div>
    <p class="kicker">${en ? "PROMPT FOLDER" : "CARPETA DE PROMPTS"} / ${escapeHtml(category)}</p>
    <h1>${escapeHtml(product.name)}</h1>
    <p>${escapeHtml(description)}</p>
  </div>
  <div class="product-banner__buy">
    <div class="product-banner__price"><strong>${product.price} €</strong><span class="opening-price-note">${en ? "Opening price until 30.07.2026" : "Precio de apertura hasta 30.07.2026"}</span></div>
    <button type="button" data-add="${product.id}">${en ? "Add to cart" : "Añadir al carrito"}</button>
  </div>
</section>
<header class="subfolder-heading">
  <span class="folder-icon" style="--tone:${product.tone}"></span>
  <div><h2>${en ? "Download contents" : "Contenido de la descarga"}</h2><p>${en ? "3 items" : "3 elementos"}</p></div>
</header>
<div class="file-list">
  <div class="file-list__header"><span>${en ? "Name" : "Nombre"}</span><span>${en ? "Type" : "Tipo"}</span><span>${en ? "Contents" : "Qué contiene"}</span><span>${en ? "Access" : "Acceso"}</span></div>
  <div class="file-row"><span class="file-row__name"><span class="row-folder-icon"></span><strong>ES</strong></span><span>${en ? "Folder" : "Carpeta"}</span><span>${en ? "Spanish documents; the copy-ready prompts remain in English." : "Documentos en español; los prompts preparados para copiar están en inglés."}</span><span class="file-row__action">${en ? "Included" : "Incluido"}</span></div>
  <div class="file-row"><span class="file-row__name"><span class="row-folder-icon"></span><strong>EN</strong></span><span>${en ? "Folder" : "Carpeta"}</span><span>${en ? "English documents; the copy-ready prompts are also in English." : "Documentos en inglés; los prompts preparados para copiar también están en inglés."}</span><span class="file-row__action">${en ? "Included" : "Incluido"}</span></div>
  <div class="file-row"><span class="file-row__name"><span class="file-icon file-icon--audio">AUDIO</span><strong>AUDIO_EXAMPLES</strong></span><span>${en ? "Folder" : "Carpeta"}</span><span>${en ? "4 MP3 files for listening and reference; the public preview lets you check the sound." : "4 MP3 para escucha y referencia; la muestra pública permite comprobar el sonido."}</span><span class="file-row__action">${en ? "Included" : "Incluido"}</span></div>
</div>
<div class="purchase-strip">
  <div><strong>${escapeHtml(product.name)} · ${product.price} €</strong><span>${en ? "Download available after payment" : "Descarga disponible después del pago"}</span></div>
  <div class="purchase-strip__actions"><button type="button" data-play="${product.id}">${en ? "Hear preview" : "Escuchar muestra"}</button><button class="primary-action" type="button" data-add="${product.id}">${en ? "Add to cart" : "Añadir al carrito"}</button></div>
</div>`;
};

const demosView = (locale) => {
  const en = locale === "en";
  return `
<header class="view-heading">
  <div class="view-heading__copy"><p>${en ? "AUDIO / PREVIEWS" : "AUDIO / MUESTRAS"}</p><h1>${en ? "Hear every folder before you choose." : "Muestras de audio"}</h1><p>${en ? "Play one public preview from each collection. Every folder also includes four full MP3 references that show its sound in practice." : "Escucha una muestra pública de cada carpeta. Cada compra incluye además 4 MP3 completos para referencia sonora."}</p></div>
</header>
<div class="file-list demo-list">
  <div class="file-list__header"><span>${en ? "Track" : "Pista"}</span><span>${en ? "Folder" : "Carpeta"}</span><span>${en ? "Length" : "Duración"}</span><span>${en ? "Action" : "Acción"}</span></div>
  ${products.map((product) => { const href = localizedPath(`/product/${product.id}/`, locale); return `<div class="file-row" data-track="${product.id}"><span class="file-row__name"><span class="file-icon file-icon--audio">AUDIO</span><strong>${escapeHtml(product.demo)}</strong></span><span><a href="${href}" data-route="${href}">${escapeHtml(product.name)}</a></span><span>00:30</span><span class="demo-row-actions"><button class="file-row__action" type="button" data-play="${product.id}">${en ? "Listen" : "Escuchar"}</button><button class="file-row__action file-row__action--primary" type="button" data-add="${product.id}">${en ? "Add" : "Añadir"} · 15 €</button></span></div>`; }).join("\n  ")}
</div>`;
};

const bundleProduct = {
  id: "archive",
  sku: "COMPLETE-PACK",
  name: "Pack completo SUBSUELO FS",
  category: "Colección de prompts para instrumentales",
  categoryEn: "Prompt collection for dark instrumentals",
  description: "Las 6 colecciones en un solo ZIP: 180 prompts, 60 negative prompts, guías ES/EN y 24 referencias de audio.",
  descriptionEn: "All 6 collections in one ZIP: 180 music prompts, 60 negative prompts, ES/EN guides and 24 audio references.",
  price: 59
};

const bundleView = (locale) => {
  const en = locale === "en";
  return `
<header class="view-heading"><div class="view-heading__copy"><p>${en ? "COMPLETE PACK" : "PACK COMPLETO"}</p><h1>${en ? "All six folders. One download." : "Todas las carpetas"}</h1><p>${en ? "180 prompts, 60 negative prompts, guides in English and Spanish, and 24 MP3 references. This pack contains the six collections listed below; future releases are separate." : "Incluye en un solo ZIP todas las carpetas enumeradas debajo. La compra cubre únicamente esas carpetas; las publicaciones futuras se venden por separado."}</p></div></header>
<span class="opening-price-note opening-price-note--heading">${en ? "Opening price until 30.07.2026" : "Precio de apertura hasta 30.07.2026"}</span>
<header class="subfolder-heading"><span class="folder-icon folder-icon--bundle"></span><div><h2>${en ? "Included folders" : "Carpetas incluidas"}</h2><p>${en ? "6 items" : "6 elementos"}</p></div></header>
<div class="file-list">
  <div class="file-list__header"><span>${en ? "Name" : "Nombre"}</span><span>${en ? "Type" : "Tipo"}</span><span>${en ? "Contents" : "Qué contiene"}</span><span>${en ? "Access" : "Acceso"}</span></div>
  ${products.map((product) => { const href = localizedPath(`/product/${product.id}/`, locale); return `<a class="file-row" href="${href}" data-route="${href}"><span class="file-row__name"><span class="row-folder-icon"></span><strong>${escapeHtml(product.name)}</strong></span><span>${en ? "Folder" : "Carpeta"}</span><span>${escapeHtml(productValue(product, "description", locale))}</span><span class="file-row__action">${en ? "Open" : "Abrir"}</span></a>`; }).join("\n  ")}
</div>
<div class="purchase-strip"><div><strong>${en ? "Complete pack" : "Pack completo"} · 59 €</strong><span>${en ? "90 € separately · save 31 €" : "90 € por separado · ahorras 31 €"}</span></div><div class="purchase-strip__actions"><button class="primary-action" type="button" data-add="archive">${en ? "Add complete pack" : "Añadir pack completo"}</button></div></div>`;
};

const helpView = (locale) => {
  const en = locale === "en";
  return `
<article class="help-document">
  <header class="help-document__head">${en ? "HELP / START_HERE.txt" : "AYUDA / EMPIEZA_AQUI.txt"}</header>
  <div class="help-document__body">
    <h1>${en ? "What's inside each folder" : "Qué incluye cada carpeta"}</h1>
    <p class="help-document__lead">${en ? "Every purchase contains an ES folder, an EN folder and AUDIO_EXAMPLES. The prompts are ready to copy in English; the guides explain where each block goes and how optional negative prompts work." : "Cada compra incluye una carpeta ES, otra EN y AUDIO_EXAMPLES. Las explicaciones cambian de idioma; los prompts que se copian están en inglés en las dos versiones."}</p>
    <div class="two-part-map"><div class="map-block"><strong>PROMPTS</strong><span>${en ? "Choose one and paste it into Styles" : "Elige un prompt y pégalo en Styles"}</span></div><div class="map-arrow">+</div><div class="map-block"><strong>NEGATIVE PROMPTS</strong><span>${en ? "Use Exclude only when you want to remove something" : "Usa Exclude solo si quieres quitar algo"}</span></div></div>
    <p class="help-document__lead">${en ? "You only need one prompt to start. A negative prompt is optional and excludes the specific element named in that list." : "Para empezar solo necesitas un prompt. El negative prompt es opcional y sirve para excluir algo concreto."}</p>
    <div class="concept-grid">
      <section class="concept-card"><div class="concept-card__top"><span class="file-icon file-icon--pdf">PDF</span><h2>PROMPTS</h2></div><p>${en ? "The PROMPTS PDF contains every prompt in the folder. Choose one and paste it in full into the Styles field." : "El PDF PROMPTS reúne todos los prompts de la carpeta. Elige uno y pégalo completo en el campo Styles."}</p></section>
      <section class="concept-card"><div class="concept-card__top"><span class="file-icon file-icon--pdf">PDF</span><h2>NEGATIVE PROMPTS</h2></div><p>${en ? "The NEGATIVE PROMPTS PDF contains lists for the Exclude field. Use one when you want to avoid vocals or another element named in the list." : "El PDF NEGATIVE PROMPTS reúne listas para el campo Exclude. Usa una cuando quieras evitar voces u otro elemento concreto indicado en la lista."}</p></section>
      <section class="concept-card"><div class="concept-card__top"><span class="file-icon file-icon--pdf">PDF</span><h2>${en ? "GUIDE" : "GUÍA"}</h2></div><p>${en ? "The same guide is supplied in Spanish and English. It explains where each block goes, how to work with or without vocals and what each control changes." : "Hay una guía en español y la misma guía en inglés. Explica dónde pegar cada bloque, cómo trabajar con o sin voz y qué hace cada control."}</p></section>
      <section class="concept-card"><div class="concept-card__top"><span class="file-icon file-icon--audio">AUDIO</span><h2>${en ? "AUDIO EXAMPLES" : "EJEMPLOS DE AUDIO"}</h2></div><p>${en ? "The download includes 4 MP3 files as sound references. They are not licensed for sampling, publishing or reuse." : "La descarga incluye 4 MP3 para escuchar como referencia del sonido. No tienen licencia de sampleo, publicación o reutilización."}</p></section>
    </div>
    <div class="availability"><strong>TXT / PDF / MP3</strong><span>${en ? "After payment you receive the ES, EN and AUDIO_EXAMPLES folders." : "Después del pago recibes las carpetas ES, EN y AUDIO_EXAMPLES."}</span></div>
  </div>
</article>`;
};

const pagesForLocale = (locale) => {
  const en = locale === "en";
  const page = (basePath, output, data) => ({
    ...data,
    locale,
    basePath,
    pathname: localizedPath(basePath, locale),
    output: localizedOutput(output, locale)
  });
  const localizedBundle = en ? { ...bundleProduct, name: "SUBSUELO FS Complete Pack" } : bundleProduct;

  return [
    page("/", "index.html", {
      heading: en ? "One genre. 30 ways in." : "Un género por carpeta",
      title: en ? "Music prompts for dark instrumentals | SUBSUELO FS" : "Prompts para instrumentales oscuras | SUBSUELO FS",
      description: en ? "Genre-built prompt collections for dark instrumentals: 30 prompts, 10 negative prompts, guides in English and Spanish, and 4 audio references per folder." : "Colecciones por género con 30 prompts, 10 negative prompts, guías en español e inglés y 4 referencias de audio. Escucha las demos antes de elegir.",
      type: "website",
      home: true,
      view: homeView(locale)
    }),
    page("/demos/", "demos/index.html", {
      heading: en ? "Hear every folder before you choose." : "Muestras de audio",
      title: en ? "Dark instrumental prompt demos | SUBSUELO FS" : "Demos de instrumentales oscuras | SUBSUELO FS",
      description: en ? "Listen to audio examples for ritual trap, dark UK garage, degraded jungle, abstract hip-hop, dub and noir before choosing a prompt collection." : "Escucha muestras de trap ritual, UK garage oscuro, jungle degradado, hip-hop abstracto, dub y noir antes de elegir una carpeta.",
      type: "website",
      view: demosView(locale)
    }),
    page("/bundle/", "bundle/index.html", {
      heading: en ? "All six folders. One download." : "Pack completo",
      title: en ? "180 dark music prompts: complete pack | SUBSUELO FS" : "Pack completo: 180 prompts para instrumentales | SUBSUELO FS",
      description: en ? "All 6 collections in one ZIP: 180 music prompts, 60 negative prompts, guides in English and Spanish, and 24 MP3 references." : "Las 6 colecciones en un ZIP: 180 prompts, 60 negative prompts, guías ES/EN y 24 referencias de audio. Descarga digital: 59 €.",
      type: "product",
      price: 59,
      product: localizedBundle,
      productDescription: productValue(bundleProduct, "description", locale),
      productCategory: productValue(bundleProduct, "category", locale),
      view: bundleView(locale)
    }),
    page("/help/", "help/index.html", {
      heading: en ? "What's inside each folder" : "Qué incluye cada carpeta",
      title: en ? "How music generation prompts work | SUBSUELO FS" : "Qué incluye una carpeta de prompts | SUBSUELO FS",
      description: en ? "See what each prompt folder contains, where to paste each block, how optional negative prompts work and what the audio references are for." : "Qué contienen los PDF de prompts y negative prompts, dónde se usa cada archivo y qué incluyen las guías y las referencias de audio.",
      type: "website",
      view: helpView(locale)
    }),
    ...products.map((product) => page(`/product/${product.id}/`, `product/${product.id}/index.html`, {
      heading: product.name,
      title: productValue(product, "seoTitle", locale),
      description: productValue(product, "metaDescription", locale),
      type: "product",
      price: product.price,
      product,
      productDescription: productValue(product, "description", locale),
      productCategory: productValue(product, "category", locale),
      view: productView(product, locale)
    }))
  ];
};

const pages = ["es", "en"].flatMap(pagesForLocale);

const pageSchema = (page) => page.home ? homeSchema(page) : page.product ? productSchema(page, page.product) : webPageSchema(page);

const seoBlock = (page) => {
  const url = canonicalUrl(page.pathname);
  const esUrl = canonicalUrl(localizedPath(page.basePath, "es"));
  const enUrl = canonicalUrl(localizedPath(page.basePath, "en"));
  const locale = page.locale === "en" ? "en_GB" : "es_ES";
  const alternateLocale = page.locale === "en" ? "es_ES" : "en_GB";
  const socialAlt = page.locale === "en" ? "SUBSUELO FS: genre-built sound direction in a file explorer." : "SUBSUELO FS: dirección sonora por género en un explorador de archivos.";
  const productMeta = page.type === "product"
    ? `\n<meta property="product:price:amount" content="${page.price.toFixed(2)}" />\n<meta property="product:price:currency" content="EUR" />`
    : "";
  return `
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
<meta name="description" content="${escapeHtml(page.description)}" />
<link rel="canonical" href="${url}" />
<link rel="alternate" hreflang="es" href="${esUrl}" />
<link rel="alternate" hreflang="en" href="${enUrl}" />
<link rel="alternate" hreflang="x-default" href="${esUrl}" />
<link rel="sitemap" type="application/xml" title="Sitemap" href="${siteUrl}/sitemap.xml" />
<meta property="og:type" content="${page.type}" />
<meta property="og:url" content="${url}" />
<meta property="og:site_name" content="SUBSUELO FS" />
<meta property="og:locale" content="${locale}" />
<meta property="og:locale:alternate" content="${alternateLocale}" />
<meta property="og:title" content="${escapeHtml(page.title)}" />
<meta property="og:description" content="${escapeHtml(page.description)}" />
<meta property="og:image" content="${socialImage}" />
<meta property="og:image:secure_url" content="${socialImage}" />
<meta property="og:image:type" content="image/png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="600" />
<meta property="og:image:alt" content="${socialAlt}" />${productMeta}
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@subsuelofs" />
<meta name="twitter:creator" content="@subsuelofs" />
<meta name="twitter:title" content="${escapeHtml(page.title)}" />
<meta name="twitter:description" content="${escapeHtml(page.description)}" />
<meta name="twitter:image" content="${socialImage}" />
<meta name="twitter:image:alt" content="${socialAlt}" />
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
const appSource = await readFile(path.join(root, "app-v5.js"), "utf8");
const copyDeclaration = "  const copy = ";
const copyStart = appSource.indexOf(copyDeclaration);
const copyEnd = appSource.indexOf("\n\n  const legalDocuments", copyStart);
if (copyStart < 0 || copyEnd < 0) throw new Error("No se pudo leer la traducción de interfaz desde app-v5.js");
const uiCopy = vm.runInNewContext(`(${appSource.slice(copyStart + copyDeclaration.length, copyEnd).replace(/;\s*$/u, "")})`, Object.create(null));
const copyValue = (locale, key) => key.split(".").reduce((value, part) => value?.[part], uiCopy[locale]);
const translateShell = (html, locale) => {
  let translated = html.replace(/<([a-z][\w-]*)\b([^>]*\bdata-i18n="([^"]+)"[^>]*)>([^<]*)<\/\1>/gu, (match, tag, attributes, key) => {
    const value = copyValue(locale, key);
    return value === undefined ? match : `<${tag}${attributes}>${escapeHtml(value)}</${tag}>`;
  });
  translated = translated.replace(/<[^>]*\bdata-i18n-aria-label="([^"]+)"[^>]*>/gu, (tag, key) => {
    const value = copyValue(locale, key);
    return value === undefined ? tag : tag.replace(/aria-label="[^"]*"/u, `aria-label="${escapeHtml(value)}"`);
  });
  translated = translated.replace(/<[^>]*\bdata-i18n-placeholder="([^"]+)"[^>]*>/gu, (tag, key) => {
    const value = copyValue(locale, key);
    return value === undefined ? tag : tag.replace(/placeholder="[^"]*"/u, `placeholder="${escapeHtml(value)}"`);
  });
  translated = translated.replace(/<[^>]*\bdata-i18n-content="([^"]+)"[^>]*>/gu, (tag, key) => {
    const value = copyValue(locale, key);
    return value === undefined ? tag : tag.replace(/content="[^"]*"/u, `content="${escapeHtml(value)}"`);
  });
  return translated;
};

for (const page of pages) {
  let html = replaceMarker(template, "STATIC-SEO", seoBlock(page));
  html = replaceMarker(html, "STATIC-CONTENT", page.view);
  html = html.replace('<html lang="es">', `<html lang="${page.locale}">`);
  if (page.locale === "en") {
    html = html.replaceAll('data-language="es" aria-pressed="true"', 'data-language="es" aria-pressed="false"');
    html = html.replaceAll('data-language="en" aria-pressed="false"', 'data-language="en" aria-pressed="true"');
    for (const shellPath of ["/", "/demos/", "/help/", "/bundle/"]) {
      const localized = localizedPath(shellPath, "en");
      html = html.replaceAll(`href="${shellPath}" data-route="${shellPath}"`, `href="${localized}" data-route="${localized}"`);
    }
    for (const shellPath of ["/legal/privacy", "/legal/terms", "/legal/license", "/legal"]) {
      html = html.replaceAll(`data-route="${shellPath}"`, `data-route="${localizedPath(shellPath, "en")}"`);
    }
  }
  html = translateShell(html, page.locale);
  const outputPath = path.join(root, page.output);
  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, html.endsWith("\n") ? html : `${html}\n`, "utf8");
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages.map((page) => `  <url>\n    <loc>${canonicalUrl(page.pathname)}</loc>\n    <xhtml:link rel="alternate" hreflang="es" href="${canonicalUrl(localizedPath(page.basePath, "es"))}" />\n    <xhtml:link rel="alternate" hreflang="en" href="${canonicalUrl(localizedPath(page.basePath, "en"))}" />\n    <xhtml:link rel="alternate" hreflang="x-default" href="${canonicalUrl(localizedPath(page.basePath, "es"))}" />\n    <lastmod>${lastModified}</lastmod>\n  </url>`).join("\n")}
</urlset>
`;

await writeFile(path.join(root, "sitemap.xml"), sitemap, "utf8");
await writeFile(path.join(root, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`, "utf8");

console.log(`Generadas ${pages.length} páginas estáticas y sitemap.xml`);
