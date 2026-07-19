import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import vm from "node:vm";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const templatePath = path.join(root, "index.html");
const siteUrl = "https://subsuelofs.com";
const freeSamplerUrl = "https://payhip.com/b/LJp1T?utm_source=subsuelofs&utm_medium=website&utm_campaign=free_sampler";
const lastModified = "2026-07-16";
const openingPriceStarts = "2026-07-16";
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

const productEditorial = {
  trap: {
    core: "Trap oscuro e hipnótico con batería seca, 808 dominante y motivos rituales usados como textura.",
    coreEn: "Dark, hypnotic trap with dry drums, a dominant 808 and ritual motifs used as texture.",
    changes: ["pocket de bombo y caja", "densidad de hats", "movimiento del 808", "percusión orgánica o sampleada", "motivo principal", "mezcla seca, ancha o degradada"],
    changesEn: ["kick and snare pocket", "hat density", "808 movement", "organic or sampled percussion", "main motif", "dry, wide or degraded mix"],
    fit: "Beats físicos y repetitivos donde el 808 manda y los detalles se mueven alrededor de un groove reconocible.",
    fitEn: "Physical, repetitive beats where the 808 leads and the details move around a recognisable groove.",
    demoProfile: "Base seca y ceremonial con campana grave, golpes muy separados y un 808 que desciende al final de cada vuelta.",
    demoProfileEn: "A dry ceremonial beat with a low bell, widely spaced hits and an 808 that descends at the end of each cycle.",
    related: ["low", "noir"]
  },
  garage: {
    core: "UK garage nocturno con swing humano, patrón 2-step, subgrave profundo y ambiente urbano mojado.",
    coreEn: "Nocturnal UK garage with human swing, a 2-step pattern, deep sub-bass and wet urban ambience.",
    changes: ["colocación del kick", "clap o snare", "shuffle de hats", "forma del bajo", "acordes o muestras", "calle, club o habitación"],
    changesEn: ["kick placement", "clap or snare", "hat shuffle", "bass shape", "chords or samples", "street, club or room space"],
    fit: "Ritmos 2-step oscuros con movimiento humano, subgrave preciso y suficiente espacio entre golpes.",
    fitEn: "Dark 2-step rhythms with human movement, precise sub-bass and enough space between hits.",
    demoProfile: "2-step seco y frontal, con subgrave corto, acordes mínimos y una acústica de calle estrecha.",
    demoProfileEn: "Dry, forward 2-step with short sub notes, minimal chords and the acoustics of a narrow street.",
    related: ["jungle", "abyss"]
  },
  jungle: {
    core: "Jungle oscuro con breaks remuestreados, subgrave pesado, desgaste de cinta y muestras de archivo.",
    coreEn: "Dark jungle with resampled breaks, heavy sub-bass, tape wear and archival samples.",
    changes: ["familia del break", "forma de cortar la batería", "relación kick-break", "forma del subgrave", "fuente de la muestra", "desgaste y profundidad"],
    changesEn: ["break family", "drum chopping", "kick-to-break relationship", "sub-bass shape", "sample source", "wear and depth"],
    fit: "Breaks rápidos con peso, textura envejecida y variaciones claras de corte sin perder el impulso del jungle.",
    fitEn: "Fast breaks with weight, aged texture and clear chopping variations without losing the jungle drive.",
    demoProfile: "Batería recortada, rodante y seca, subgrave por pulsos y polvo de piedra en los agudos.",
    demoProfileEn: "Dry rolling break, pulsed sub-bass and stone dust in the high end.",
    related: ["garage", "low"]
  },
  low: {
    core: "Hip-hop abstracto y pesado con subgrave frontal, batería de rap reconocible y diseño sonoro oscuro.",
    coreEn: "Heavy abstract hip-hop with forward sub-bass, recognisable rap drums and dark sound design.",
    changes: ["batería seca, rota o minimal", "sub sostenido o pulsado", "sample, drone o instrumento", "cantidad de silencio", "anchura de mezcla", "grado de suciedad"],
    changesEn: ["dry, broken or minimal drums", "sustained or pulsed sub", "sample, drone or instrument", "amount of silence", "mix width", "degree of dirt"],
    fit: "Bases oscuras para rap con mucha presión en graves, pocos elementos y una textura distinta en cada propuesta.",
    fitEn: "Dark rap beats with heavy low-end pressure, few elements and a different texture in each approach.",
    demoProfile: "Bombo recortado, subgrave por golpes y percusión grabada sobre cemento.",
    demoProfileEn: "Clipped kick, hit-by-hit sub-bass and percussion recorded on concrete.",
    related: ["trap", "noir"]
  },
  abyss: {
    core: "Hip-hop de sound-system con subgrave enorme, batería espaciosa y ecos que transforman el entorno.",
    coreEn: "Sound-system hip-hop with immense sub-bass, spacious drums and echoes that transform the environment.",
    changes: ["pocket de hip-hop", "duración del sub", "objeto enviado al delay", "feedback y filtro", "profundidad de reverb", "espacio negativo"],
    changesEn: ["hip-hop pocket", "sub-note length", "object sent to delay", "feedback and filter", "reverb depth", "negative space"],
    fit: "Baterías de rap amplias, bajos de sound-system y ecos profundos que acompañan el patrón sin sustituirlo.",
    fitEn: "Wide rap drums, sound-system bass and deep echoes that support the pattern without replacing it.",
    demoProfile: "Hip-hop dub esencial: bombo corto, golpe de aro seco, subgrave sostenido y un acorde que desaparece en la profundidad.",
    demoProfileEn: "Essential dub hip-hop: short kick, dry rimshot, sustained sub and one chord disappearing into depth.",
    related: ["low", "garage"]
  },
  noir: {
    core: "Hip-hop noir basado en muestras acústicas, batería polvorienta, bajo contenido y escenas nocturnas de cinta.",
    coreEn: "Sample-based noir hip-hop with acoustic sources, dusty drums, restrained bass and nocturnal tape scenes.",
    changes: ["corte boom-bap", "tipo de bajo", "piano, guitarra o cuerdas", "forma de cortar la muestra", "desgaste analógico", "habitación o calle"],
    changesEn: ["boom-bap cut", "bass type", "piano, guitar or strings", "sample chopping", "analogue wear", "room or street space"],
    fit: "Boom bap oscuro y contenido, con materiales acústicos, escenas pequeñas y una sensación de cinta usada.",
    fitEn: "Dark, restrained boom-bap with acoustic material, small scenes and the feel of worn tape.",
    demoProfile: "Batería recortada y polvorienta, piano de dos notas y lluvia contra una ventana cercana.",
    demoProfileEn: "Dusty break, two-note piano and rain against a nearby window.",
    related: ["low", "trap"]
  }
};

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

const breadcrumbSchema = (page) => {
  const trail = page.breadcrumbs || (page.basePath === "/" ? [] : [{ name: page.heading, path: page.basePath }]);
  return {
    "@type": "BreadcrumbList",
    "@id": `${canonicalUrl(page.pathname)}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "SUBSUELO FS", item: canonicalUrl(localizedPath("/", page.locale)) },
      ...trail.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.name,
        item: canonicalUrl(localizedPath(item.path, page.locale))
      }))
    ]
  };
};

const homeSchema = (page) => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "OnlineStore",
      "@id": `${siteUrl}/#store`,
      name: "SUBSUELO FS",
      legalName: "NOMBRE DIRECCION, S.L.U.",
      url: `${siteUrl}/`,
      email: "soporte@subsuelofs.com",
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
        validFrom: openingPriceStarts,
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

const articleSchema = (page) => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${canonicalUrl(page.pathname)}#article`,
      mainEntityOfPage: canonicalUrl(page.pathname),
      url: canonicalUrl(page.pathname),
      headline: page.heading,
      name: page.title,
      description: page.description,
      datePublished: lastModified,
      dateModified: lastModified,
      inLanguage: page.locale,
      author: { "@type": "Organization", name: "SUBSUELO FS", url: `${siteUrl}/` },
      publisher: { "@type": "Organization", name: "SUBSUELO FS", url: `${siteUrl}/`, logo: { "@type": "ImageObject", url: `${siteUrl}/favicon.svg` } },
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
  const guidesHref = localizedPath("/guides/", locale);
  const bundleHref = localizedPath("/bundle/", locale);
  const legalHref = localizedPath("/legal", locale);
  return `
<header class="view-heading">
  <div class="view-heading__copy">
    <p>${en ? "SUBSUELO / CATALOGUE" : "SUBSUELO / CATÁLOGO"}</p>
    <h1>${en ? "One genre. 30 ways in." : "Un género por carpeta"}</h1>
    <p>${en ? "Pick the sound you want to make. Each folder gives you 30 prompts that change the drums, bass, lead source and space while staying inside one coherent genre." : "Entra en el género que quieres producir. Dentro encontrarás 30 prompts distintos que cambian la batería, el bajo, el motivo y el espacio sin abandonar esa familia sonora."}</p>
  </div>
  <p class="view-heading__hint">${en ? "Click a folder to open it" : "Haz clic en una carpeta para abrirla"}</p>
</header>
<section class="sampler-file">
  <span class="file-icon file-icon--zip" aria-hidden="true">ZIP</span>
  <div class="sampler-file__copy">
    <p>${en ? "FREE SAMPLER / ZIP" : "MUESTRA GRATUITA / ZIP"}</p>
    <h2>${en ? "Try the format before choosing." : "Prueba el formato antes de elegir."}</h2>
    <p>${en ? "Get 6 prompts, 7 negative prompts, separate Spanish and English guides, and six 30-second demos: one entry from every folder." : "Recibe 6 prompts, 7 negative prompts, guías separadas en español e inglés y 6 demos de 30 segundos: una entrada de cada carpeta."}</p>
    <small>${en ? "Instant delivery by email · No account required" : "Descarga inmediata por email · Sin cuenta obligatoria"}</small>
  </div>
  <a class="sampler-file__action" href="${freeSamplerUrl}" target="_blank" rel="noopener noreferrer" aria-label="${en ? "Get the free sampler (opens in a new tab)" : "Recibir la muestra gratuita (abre en una pestaña nueva)"}" data-sampler-download="home">${en ? "GET THE SAMPLER · 0 €" : "RECIBIR MUESTRA · 0 €"}<span aria-hidden="true">↗</span></a>
</section>
<span class="opening-price-note opening-price-note--catalog">${en ? "Opening price until 30.07.2026" : "Precio de apertura hasta 30.07.2026"}</span>
<div class="folder-grid" data-folder-grid>
  ${products.map((product) => folderCard(product, locale)).join("\n  ")}
</div>
<section class="system-files">
  <h2>${en ? "MORE INFORMATION" : "MÁS INFORMACIÓN"}</h2>
  <div class="system-file-row">
    <a class="system-file" href="${helpHref}" data-route="${helpHref}"><span class="file-icon file-icon--text">TXT</span><strong>${en ? "WHAT_EACH_FOLDER_INCLUDES.txt" : "QUE_INCLUYE_CADA_CARPETA.txt"}</strong></a>
    <a class="system-file" href="${demosHref}" data-route="${demosHref}"><span class="file-icon file-icon--audio">AUDIO</span><strong>${en ? "HEAR_THE_EXAMPLES.audio" : "ESCUCHAR_EJEMPLOS.audio"}</strong></a>
    <a class="system-file" href="${guidesHref}" data-editorial-path="/guides/"><span class="row-folder-icon"></span><strong>${en ? "PRODUCTION_GUIDES.folder" : "GUIAS_DE_PRODUCCION.folder"}</strong></a>
    <a class="system-file" href="${bundleHref}" data-route="${bundleHref}"><span class="row-folder-icon"></span><strong>${en ? "COMPLETE_PACK.folder" : "PACK_COMPLETO.folder"}</strong></a>
    <button class="system-file" type="button" data-route="${legalHref}"><span class="row-folder-icon"></span><strong>${en ? "LEGAL_AND_PRIVACY.folder" : "LEGAL_Y_PRIVACIDAD.folder"}</strong></button>
  </div>
</section>`;
};

const productView = (product, locale) => {
  const en = locale === "en";
  const category = productValue(product, "category", locale);
  const description = productValue(product, "description", locale);
  const editorial = productEditorial[product.id];
  const changes = productValue(editorial, "changes", locale);
  const compareHref = localizedPath("/compare/", locale);
  const negativeHref = localizedPath("/guides/negative-prompts/", locale);
  const related = editorial.related.map((id) => {
    const item = products.find((candidate) => candidate.id === id);
    const href = localizedPath(`/product/${item.id}/`, locale);
    return `<a href="${href}" data-route="${href}"><span class="folder-icon" style="--tone:${item.tone}"></span><span><strong>${escapeHtml(item.name)}</strong><small>${escapeHtml(productValue(item, "category", locale))}</small></span></a>`;
  }).join("");
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
    <div class="product-banner__actions"><button type="button" data-play="${product.id}">${en ? "Hear 30 sec" : "Escuchar 30 s"}</button><button class="primary-action" type="button" data-buy="${product.id}">${en ? "Buy now" : "Comprar ahora"} · ${product.price} €</button></div>
    <a class="product-banner__sampler" href="${freeSamplerUrl}" target="_blank" rel="noopener noreferrer" data-sampler-download="product">${en ? "Try free sampler · €0" : "Probar muestra gratis · 0 €"} ↗</a>
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
<section class="product-editorial">
  <header><p>${en ? "FOLDER PROFILE" : "PERFIL DE LA CARPETA"}</p><h2>${en ? "One genre, 30 approaches" : "Un mismo género, 30 enfoques"}</h2></header>
  <div class="product-editorial__grid">
    <div><h3>${en ? "Core sound" : "Sonido central"}</h3><p>${escapeHtml(productValue(editorial, "core", locale))}</p></div>
    <div><h3>${en ? "A good fit if you want" : "Encaja si buscas"}</h3><p>${escapeHtml(productValue(editorial, "fit", locale))}</p></div>
    <div class="product-editorial__wide"><h3>${en ? "What changes" : "Qué cambia"}</h3><div class="editorial-tags">${changes.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}</div></div>
    <div class="product-editorial__wide demo-profile-card"><h3>${en ? "The preview you hear" : "La muestra que escuchas"}: ${escapeHtml(product.demo)}</h3><p>${escapeHtml(productValue(editorial, "demoProfile", locale))}</p></div>
  </div>
  <nav class="editorial-actions" aria-label="${en ? "Folder profile" : "Perfil de la carpeta"}"><a href="${compareHref}">${en ? "Compare every folder" : "Comparar todas las carpetas"}</a><a href="${negativeHref}">${en ? "Understand negative prompts" : "Entender los negative prompts"}</a></nav>
  <div class="related-folders"><strong>${en ? "Related folders" : "Carpetas cercanas"}</strong><div>${related}</div></div>
</section>
<div class="purchase-strip">
  <div><strong>${escapeHtml(product.name)} · ${product.price} €</strong><span>${en ? "Download available after payment" : "Descarga disponible después del pago"}</span></div>
  <div class="purchase-strip__actions"><button type="button" data-play="${product.id}">${en ? "Hear 30 sec" : "Escuchar 30 s"}</button><button class="primary-action" type="button" data-add="${product.id}">${en ? "Add to cart" : "Añadir al carrito"}</button></div>
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
  ${products.map((product) => { const href = localizedPath(`/product/${product.id}/`, locale); return `<div class="file-row" data-track="${product.id}"><span class="file-row__name"><span class="file-icon file-icon--audio">AUDIO</span><span><strong>${escapeHtml(product.demo)}</strong><small class="demo-profile">${escapeHtml(productValue(productEditorial[product.id], "demoProfile", locale))}</small></span></span><span><a href="${href}" data-route="${href}">${escapeHtml(product.name)}</a></span><span>00:30</span><span class="demo-row-actions"><button class="file-row__action" type="button" data-play="${product.id}">${en ? "Listen" : "Escuchar"}</button><button class="file-row__action file-row__action--primary" type="button" data-add="${product.id}">${en ? "Add" : "Añadir"} · 15 €</button></span></div>`; }).join("\n  ")}
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

const guideCard = ({ path: targetPath, code, title, description, locale }) => {
  const href = localizedPath(targetPath, locale);
  return `<a class="guide-card" href="${href}"><span>${escapeHtml(code)}</span><h2>${escapeHtml(title)}</h2><p>${escapeHtml(description)}</p><strong>${locale === "en" ? "Open file" : "Abrir archivo"} →</strong></a>`;
};

const guidesView = (locale) => {
  const en = locale === "en";
  const demosHref = localizedPath("/demos/", locale);
  const catalogueHref = localizedPath("/", locale);
  const cards = en ? [
    { path: "/guides/negative-prompts/", code: "GUIDE_01", title: "What is a negative prompt in music?", description: "What it removes, where it goes and when it is worth using." },
    { path: "/guides/write-music-prompts/", code: "GUIDE_02", title: "How to write music prompts", description: "A practical structure for rhythm, low end, source material, space and mix." },
    { path: "/compare/", code: "INDEX_01", title: "Compare the six folders", description: "Drums, bass, source material and intended use, side by side." },
    { path: "/method/", code: "METHOD_01", title: "How a 30-prompt folder is built", description: "The fixed genre core, the variation axes and the files delivered." }
  ] : [
    { path: "/guides/negative-prompts/", code: "GUIA_01", title: "Qué es un negative prompt en música", description: "Qué quita, dónde se coloca y cuándo merece la pena usarlo." },
    { path: "/guides/write-music-prompts/", code: "GUIA_02", title: "Cómo escribir prompts para crear música", description: "Una estructura práctica para ritmo, graves, fuente sonora, espacio y mezcla." },
    { path: "/compare/", code: "INDICE_01", title: "Comparar las seis carpetas", description: "Batería, bajo, material sonoro y uso previsto, uno al lado del otro." },
    { path: "/method/", code: "METODO_01", title: "Cómo se construye una carpeta de 30", description: "El núcleo fijo del género, los ejes de variación y los archivos entregados." }
  ];
  return `<article class="editorial-document">
    <header class="editorial-hero"><p>${en ? "SUBSUELO / PRODUCTION NOTES" : "SUBSUELO / NOTAS DE PRODUCCIÓN"}</p><h1>${en ? "Guides without filler" : "Guías sin relleno"}</h1><p>${en ? "Direct explanations for choosing, reading and using a prompt folder. No hidden examples and no vague promises." : "Explicaciones directas para elegir, leer y usar una carpeta de prompts. Sin ejemplos ocultos ni promesas vagas."}</p></header>
    <div class="guide-grid">${cards.map((card) => guideCard({ ...card, locale })).join("")}</div>
    <section class="editorial-callout"><div><span>${en ? "LISTEN FIRST" : "ESCUCHA PRIMERO"}</span><h2>${en ? "The audio tells you more than an adjective list." : "El audio cuenta más que una lista de adjetivos."}</h2><p>${en ? "Each public preview is tied to one folder. Hear the six before choosing." : "Cada muestra pública pertenece a una carpeta. Escucha las seis antes de elegir."}</p></div><nav><a href="${demosHref}">${en ? "Hear demos" : "Escuchar demos"}</a><a href="${catalogueHref}">${en ? "Open catalogue" : "Abrir catálogo"}</a></nav></section>
  </article>`;
};

const negativeGuideView = (locale) => {
  const en = locale === "en";
  const helpHref = localizedPath("/help/", locale);
  const compareHref = localizedPath("/compare/", locale);
  const catalogueHref = localizedPath("/", locale);
  if (en) return `<article class="editorial-document article-document">
    <header class="editorial-hero"><p>GUIDE_01 / NEGATIVE PROMPTS</p><h1>What is a negative prompt in music and when should you use one?</h1><p>A negative prompt is a short list of elements you want to leave out. It does not describe the track you want and it does not replace the main prompt.</p></header>
    <div class="article-layout"><nav class="article-index" aria-label="On this page"><strong>IN THIS FILE</strong><a href="#difference">Main vs negative</a><a href="#where">Where it goes</a><a href="#vocals">Vocals</a><a href="#use">When to use it</a><a href="#mistakes">Common mistakes</a></nav><div class="article-copy">
      <section id="difference"><h2>Main prompt and negative prompt do different jobs</h2><p>The main prompt describes the result: genre, pulse, drums, bass, instruments, texture and mix. The negative prompt only names what should stay outside that result.</p><div class="two-file-example"><div><span>MAIN PROMPT</span><p>Direction, rhythm, low end, sources and finish.</p></div><div><span>NEGATIVE PROMPT</span><p>Elements to exclude, written as a short list.</p></div></div><p>If the main prompt is weak, a longer exclusion list will not fix it. Start with a clear direction; add exclusions only when they solve a specific problem.</p></section>
      <section id="where"><h2>Where does it go?</h2><p>Paste it into the interface field intended for exclusions. If the tool provides separate fields, keep it out of the main style prompt: mixing “use this” and “do not use this” in one paragraph makes the direction less clear.</p><p>Our folders keep both documents separate for exactly that reason: one PDF contains the 30 complete prompts and another contains the 10 optional exclusion lists.</p></section>
      <section id="vocals"><h2>With vocals or without vocals</h2><p>For an instrumental, use the instrumental setting when one is available. If voices still appear, choose a negative list that explicitly excludes singing, spoken word and vocal phrases. If you want a sung track, do not use that list.</p><p>A vocal texture is not always the same as a lead vocal. Wordless grains, chopped breaths or a distant choir can be part of the sound design. Read the purpose of the exclusion before applying it.</p></section>
      <section id="use"><h2>When it is useful</h2><ul><li>When vocals appear in an instrumental.</li><li>When one instrument keeps pulling the result away from the chosen genre.</li><li>When the finish becomes too bright, clean or cinematic for the folder.</li><li>When you want to protect a deliberate limit, such as sparse instrumentation.</li></ul><p>A generic schematic example would be <code>vocals, bright pop chords, orchestral strings</code>. It is not a second prompt; it is simply three things to leave out.</p></section>
      <section id="mistakes"><h2>Three mistakes to avoid</h2><ol><li><strong>Stacking every list.</strong> More exclusions do not mean more control. Pick the one that matches the problem.</li><li><strong>Contradicting the main prompt.</strong> Do not request a vocal texture and exclude every kind of voice at the same time.</li><li><strong>Using it by default.</strong> If the first result already stays inside the intended sound, leave the exclusion field empty.</li></ol></section>
      <section class="article-next"><h2>Choose by sound, not by terminology</h2><p>Compare the six folders or open the catalogue. Every product page explains its core sound, what changes across the 30 prompts and the profile of its public preview.</p><nav><a href="${compareHref}">Compare folders</a><a href="${catalogueHref}">Open catalogue</a><a href="${helpHref}">See every delivered file</a></nav></section>
    </div></div>
  </article>`;
  return `<article class="editorial-document article-document">
    <header class="editorial-hero"><p>GUIA_01 / NEGATIVE PROMPTS</p><h1>Qué es un negative prompt en música y cuándo usarlo</h1><p>Un negative prompt es una lista corta de elementos que quieres dejar fuera. No describe la pista que buscas y no sustituye al prompt principal.</p></header>
    <div class="article-layout"><nav class="article-index" aria-label="En esta página"><strong>EN ESTE ARCHIVO</strong><a href="#difference">Principal y negativo</a><a href="#where">Dónde va</a><a href="#vocals">Voces</a><a href="#use">Cuándo usarlo</a><a href="#mistakes">Errores comunes</a></nav><div class="article-copy">
      <section id="difference"><h2>El prompt principal y el negative prompt hacen trabajos distintos</h2><p>El principal describe el resultado: género, pulso, batería, bajo, instrumentos, textura y mezcla. El negative prompt solo nombra lo que debe quedar fuera de ese resultado.</p><div class="two-file-example"><div><span>PROMPT PRINCIPAL</span><p>Dirección, ritmo, graves, fuentes y acabado.</p></div><div><span>NEGATIVE PROMPT</span><p>Elementos que se excluyen, escritos como una lista corta.</p></div></div><p>Si la dirección principal es débil, una lista de exclusiones más larga no la arregla. Empieza con una dirección clara y añade una exclusión solo cuando resuelva un problema concreto.</p></section>
      <section id="where"><h2>¿Dónde se coloca?</h2><p>Pégalo en el campo de la interfaz destinado a exclusiones. Si la herramienta ofrece campos separados, no lo añadas al texto principal: mezclar «usa esto» y «no uses esto» en el mismo párrafo hace menos clara la dirección.</p><p>Nuestras carpetas mantienen ambos documentos separados por ese motivo: un PDF reúne los 30 prompts completos y otro contiene las 10 listas de exclusión opcionales.</p></section>
      <section id="vocals"><h2>Con voces o sin voces</h2><p>Para una instrumental, activa el modo instrumental cuando exista. Si aun así aparecen voces, elige una lista que excluya de forma explícita canto, palabra hablada y frases vocales. Si quieres una canción cantada, no uses esa lista.</p><p>Una textura vocal no siempre es una voz principal. Granos sin palabras, respiraciones cortadas o un coro lejano pueden formar parte del diseño sonoro. Lee para qué sirve la exclusión antes de aplicarla.</p></section>
      <section id="use"><h2>Cuándo resulta útil</h2><ul><li>Cuando aparecen voces en una instrumental.</li><li>Cuando un instrumento desvía el resultado del género elegido.</li><li>Cuando el acabado se vuelve demasiado brillante, limpio o cinematográfico para la carpeta.</li><li>Cuando quieres proteger un límite deliberado, como usar pocos elementos.</li></ul><p>Un ejemplo esquemático sería <code>vocals, bright pop chords, orchestral strings</code>. No es un segundo prompt: son únicamente tres elementos que se dejan fuera.</p></section>
      <section id="mistakes"><h2>Tres errores que conviene evitar</h2><ol><li><strong>Apilar todas las listas.</strong> Más exclusiones no significan más control. Elige la que corresponde al problema.</li><li><strong>Contradecir el prompt principal.</strong> No pidas una textura vocal y excluyas a la vez cualquier tipo de voz.</li><li><strong>Usarlo por sistema.</strong> Si el primer resultado ya se mantiene dentro del sonido buscado, deja vacío el campo de exclusión.</li></ol></section>
      <section class="article-next"><h2>Elige por sonido, no por terminología</h2><p>Compara las seis carpetas o abre el catálogo. Cada ficha explica el núcleo sonoro, qué cambia entre los 30 prompts y el perfil de su muestra pública.</p><nav><a href="${compareHref}">Comparar carpetas</a><a href="${catalogueHref}">Abrir catálogo</a><a href="${helpHref}">Ver todos los archivos entregados</a></nav></section>
    </div></div>
  </article>`;
};

const writingGuideView = (locale) => {
  const en = locale === "en";
  const compareHref = localizedPath("/compare/", locale);
  const methodHref = localizedPath("/method/", locale);
  const catalogueHref = localizedPath("/", locale);
  if (en) return `<article class="editorial-document article-document">
    <header class="editorial-hero"><p>GUIDE_02 / WRITING</p><h1>How to write music prompts that give a clear direction</h1><p>A useful prompt is not a pile of genre names. It describes a single musical system: pulse, drums, low end, source material, space and finish.</p></header>
    <div class="article-copy article-copy--wide">
      <section><h2>A six-part structure</h2><ol class="structure-list"><li><strong>Genre and intent.</strong><span>Name one main family and the role of the track.</span></li><li><strong>Tempo and feel.</strong><span>State the BPM or perceived pulse, plus straight, swung or half-time feel.</span></li><li><strong>Drums.</strong><span>Describe the kick, snare, hats, pattern density and pocket.</span></li><li><strong>Low end.</strong><span>Say whether the bass sustains, pulses, slides or answers selected kicks.</span></li><li><strong>Source material.</strong><span>Choose the motif, sample family, instrument or texture carrying the identity.</span></li><li><strong>Space and finish.</strong><span>Define width, depth, dirt, saturation and how ambience behaves.</span></li></ol></section>
      <section><h2>The useful order</h2><div class="prompt-blueprint"><span>GENRE</span><i>+</i><span>PULSE</span><i>+</i><span>DRUMS</span><i>+</i><span>BASS</span><i>+</i><span>SOURCE</span><i>+</i><span>SPACE / MIX</span></div><p>This is a structure, not a copy-ready prompt. Its purpose is to stop important information from disappearing inside a long paragraph of adjectives.</p></section>
      <section><h2>Keep one core; vary the approach</h2><p>To create several beats within one genre, keep its identity fixed and move selected axes. One version can change the drum pocket, another the bass behaviour and another the source material. If every axis changes at once, the collection stops feeling coherent.</p><p>That is how the SUBSUELO folders are organised: 30 complete, independent directions inside one defined sound, rather than 30 fragments that need to be combined.</p></section>
      <section><h2>What weakens a prompt</h2><ul><li>Listing several unrelated genres and expecting all of them to remain equally present.</li><li>Using only mood adjectives without describing rhythm or low end.</li><li>Asking for contradictory finishes, such as completely dry and extremely reverberant at once.</li><li>Specifying every second of the arrangement when the real goal is a reusable sound direction.</li><li>Adding exclusions to the main prompt when a separate exclusion field exists.</li></ul></section>
      <section><h2>Language and delivered documents</h2><p>In our folders, the text prepared for copying is in English in both editions. The explanation PDF is supplied separately in Spanish and English, so each buyer can understand what to paste and where without mixing languages inside the working prompt.</p></section>
      <section class="article-next"><h2>See the system applied to a genre</h2><nav><a href="${compareHref}">Compare folders</a><a href="${methodHref}">Read the method</a><a href="${catalogueHref}">Open catalogue</a></nav></section>
    </div>
  </article>`;
  return `<article class="editorial-document article-document">
    <header class="editorial-hero"><p>GUIA_02 / ESCRITURA</p><h1>Cómo escribir prompts para crear música con una dirección clara</h1><p>Un prompt útil no es una pila de géneros. Describe un único sistema musical: pulso, batería, graves, fuente sonora, espacio y acabado.</p></header>
    <div class="article-copy article-copy--wide">
      <section><h2>Una estructura de seis partes</h2><ol class="structure-list"><li><strong>Género e intención.</strong><span>Nombra una familia principal y la función de la pista.</span></li><li><strong>Tempo y sensación.</strong><span>Indica BPM o pulso percibido y si el movimiento es recto, swung o a medio tiempo.</span></li><li><strong>Batería.</strong><span>Describe bombo, caja, hats, densidad del patrón y pocket.</span></li><li><strong>Graves.</strong><span>Di si el bajo sostiene, pulsa, desliza o responde a golpes concretos del bombo.</span></li><li><strong>Fuente sonora.</strong><span>Elige el motivo, la familia de muestras, el instrumento o la textura que aporta identidad.</span></li><li><strong>Espacio y acabado.</strong><span>Define anchura, profundidad, suciedad, saturación y comportamiento del ambiente.</span></li></ol></section>
      <section><h2>El orden útil</h2><div class="prompt-blueprint"><span>GÉNERO</span><i>+</i><span>PULSO</span><i>+</i><span>BATERÍA</span><i>+</i><span>BAJO</span><i>+</i><span>FUENTE</span><i>+</i><span>ESPACIO / MEZCLA</span></div><p>Esto es una estructura, no un prompt listo para copiar. Sirve para que la información importante no desaparezca dentro de un párrafo largo de adjetivos.</p></section>
      <section><h2>Mantén un núcleo y cambia el enfoque</h2><p>Para crear varias bases dentro del mismo género, conserva su identidad y mueve ejes concretos. Una versión puede cambiar el pocket de batería, otra el comportamiento del bajo y otra la fuente sonora. Si todos los ejes cambian a la vez, la colección deja de sentirse coherente.</p><p>Así se organizan las carpetas de SUBSUELO: 30 direcciones completas e independientes dentro de un sonido definido, no 30 fragmentos que haya que combinar.</p></section>
      <section><h2>Qué debilita un prompt</h2><ul><li>Enumerar varios géneros sin relación y esperar que todos mantengan el mismo peso.</li><li>Usar solo adjetivos de ambiente sin describir ritmo ni graves.</li><li>Pedir acabados incompatibles, como totalmente seco y extremadamente reverberante a la vez.</li><li>Programar cada segundo del arreglo cuando lo que buscas es una dirección sonora reutilizable.</li><li>Añadir exclusiones al texto principal cuando existe un campo separado para ellas.</li></ul></section>
      <section><h2>Idioma y documentos entregados</h2><p>En nuestras carpetas, el texto preparado para copiar está en inglés en las dos ediciones. El PDF explicativo se entrega por separado en español y en inglés, para que cada comprador entienda qué debe pegar y dónde sin mezclar idiomas dentro del prompt de trabajo.</p></section>
      <section class="article-next"><h2>Ve el sistema aplicado a un género</h2><nav><a href="${compareHref}">Comparar carpetas</a><a href="${methodHref}">Leer el método</a><a href="${catalogueHref}">Abrir catálogo</a></nav></section>
    </div>
  </article>`;
};

const comparisonProfiles = {
  trap: { rhythm: "Half-time trap; dry kick and snare; variable hats", rhythmEs: "Trap a medio tiempo; bombo y caja secos; hats variables", bass: "Dominant 808: short, sustained or sliding", bassEs: "808 dominante: corto, sostenido o deslizante", material: "Bells, organic percussion and ritual samples", materialEs: "Campanas, percusión orgánica y muestras rituales" },
  garage: { rhythm: "Human 2-step swing and shuffled hats", rhythmEs: "Swing humano 2-step y hats con shuffle", bass: "Short, syncopated or sliding sub", bassEs: "Subgrave corto, sincopado o deslizante", material: "Minimal chords, vocal texture, wet street or room", materialEs: "Acordes mínimos, textura vocal, calle o habitación mojada" },
  jungle: { rhythm: "Resampled breaks with different cuts and reinforcement", rhythmEs: "Breaks remuestreados con distintos cortes y refuerzos", bass: "Heavy pulses or sustained low notes", bassEs: "Pulsos pesados o notas graves sostenidas", material: "Archival samples, tape wear and stone-like high end", materialEs: "Muestras de archivo, cinta gastada y agudos minerales" },
  low: { rhythm: "Recognisable rap drums: dry, broken, swung or sparse", rhythmEs: "Batería de rap reconocible: seca, rota, swung o escasa", bass: "Forward sub: hit-by-hit, sustained or distorted", bassEs: "Subgrave frontal: por golpes, sostenido o distorsionado", material: "Samples, drones, instruments, silence and physical texture", materialEs: "Muestras, drones, instrumentos, silencio y textura física" },
  abyss: { rhythm: "Spacious hip-hop pocket with few decisive hits", rhythmEs: "Pocket de hip-hop espacioso con pocos golpes decisivos", bass: "Long sound-system sub notes", bassEs: "Notas largas de subgrave de sound-system", material: "Chord stabs, filtered delay, reverb and negative space", materialEs: "Acordes aislados, delay filtrado, reverb y espacio negativo" },
  noir: { rhythm: "Dusty boom-bap cuts, dry or soft", rhythmEs: "Cortes boom-bap polvorientos, secos o suaves", bass: "Restrained electric, upright or discreet sub", bassEs: "Bajo eléctrico, contrabajo o subgrave discreto", material: "Piano, guitar, strings, rain, rooms and analogue wear", materialEs: "Piano, guitarra, cuerdas, lluvia, habitaciones y desgaste analógico" }
};

const compareView = (locale) => {
  const en = locale === "en";
  const demosHref = localizedPath("/demos/", locale);
  const rows = products.map((product) => {
    const profile = comparisonProfiles[product.id];
    const editorial = productEditorial[product.id];
    const href = localizedPath(`/product/${product.id}/`, locale);
    return `<tr><th scope="row"><a href="${href}"><span class="folder-icon" style="--tone:${product.tone}"></span><span>${escapeHtml(product.name)}<small>${escapeHtml(productValue(product, "category", locale))}</small></span></a></th><td>${escapeHtml(en ? profile.rhythm : profile.rhythmEs)}</td><td>${escapeHtml(en ? profile.bass : profile.bassEs)}</td><td>${escapeHtml(en ? profile.material : profile.materialEs)}</td><td>${escapeHtml(productValue(editorial, "fit", locale))}</td></tr>`;
  }).join("");
  return `<article class="editorial-document"><header class="editorial-hero"><p>${en ? "INDEX_01 / SIX FOLDERS" : "INDICE_01 / SEIS CARPETAS"}</p><h1>${en ? "Compare the six prompt folders" : "Compara las seis carpetas de prompts"}</h1><p>${en ? "The catalogue is not six colour variants of the same product. Each folder fixes a different genre core and varies specific parts inside it." : "El catálogo no son seis variantes de color del mismo producto. Cada carpeta fija un género distinto y mueve elementos concretos dentro de él."}</p></header><div class="comparison-scroll"><table class="comparison-table"><thead><tr><th>${en ? "Folder" : "Carpeta"}</th><th>${en ? "Rhythm and drums" : "Ritmo y batería"}</th><th>${en ? "Bass" : "Bajo"}</th><th>${en ? "Sources and space" : "Fuentes y espacio"}</th><th>${en ? "Best fit" : "Encaja si buscas"}</th></tr></thead><tbody>${rows}</tbody></table></div><section class="editorial-callout"><div><span>${en ? "NEXT STEP" : "SIGUIENTE PASO"}</span><h2>${en ? "Read the table, then trust your ears." : "Lee la tabla y después fíate del oído."}</h2><p>${en ? "The public demos let you check the weight, movement and space of every folder before buying." : "Las demos públicas permiten comprobar el peso, el movimiento y el espacio de cada carpeta antes de comprar."}</p></div><nav><a href="${demosHref}">${en ? "Hear all demos" : "Escuchar todas las demos"}</a></nav></section></article>`;
};

const methodView = (locale) => {
  const en = locale === "en";
  const catalogueHref = localizedPath("/", locale);
  const helpHref = localizedPath("/help/", locale);
  const negativeHref = localizedPath("/guides/negative-prompts/", locale);
  if (en) return `<article class="editorial-document article-document"><header class="editorial-hero"><p>METHOD_01 / SUBSUELO FS</p><h1>How a folder of 30 prompts is built</h1><p>The number is not the organising idea. The genre boundary is. Each folder begins with one sound that can be described clearly and varied without turning into a different product.</p></header><div class="article-copy article-copy--wide"><section><h2>1. Fix the core sound</h2><p>Rhythm family, low-end behaviour, source material and spatial character define the centre of a collection. Trap Ritual keeps trap drums and a dominant 808; Garaje Oscuro keeps human 2-step swing; Fossil Jungle keeps resampled breaks and heavy sub-bass. The same rule applies to the other three folders.</p></section><section><h2>2. Choose the variation axes</h2><p>The 30 prompts do not repeat one template with synonyms. They move concrete controls: drum pocket, bass movement, sample family, motif, silence, width, dirt or room. The relevant axes change from genre to genre.</p></section><section><h2>3. Write complete directions</h2><p>Each entry stands on its own. Buyers choose one complete prompt; they are not asked to combine fragments, codes or numbered modules. The title identifies the entry, but the working text remains self-contained.</p></section><section><h2>4. Keep exclusions separate</h2><p>The 10 negative prompts live in their own PDF because they are optional. Each one addresses a specific boundary, such as unwanted vocals or an unsuitable finish. They do not replace the main direction.</p></section><section><h2>5. Explain the files in two languages</h2><p>The ES and EN folders contain equivalent documentation in their own language. The prompts themselves remain in English in both. The quick guide explains where each text goes, how to work with or without vocals and what the relevant controls do.</p></section><section><h2>6. Include four audio references</h2><p>Every product lists four MP3 references in the download and exposes one 30-second public preview. The reference profile is now written on each product page, so the sound can be evaluated before checkout without revealing the paid prompt.</p></section><section><h2>Who operates the store</h2><p>SUBSUELO FS is operated by NOMBRE DIRECCION, S.L.U. Product contents, prices, purchase terms and contact details are available before payment. This method page describes the organisation of the catalogue; it does not promise a particular musical result.</p></section><section class="article-next"><h2>Open the files that matter</h2><nav><a href="${catalogueHref}">Catalogue</a><a href="${helpHref}">Delivered files</a><a href="${negativeHref}">Negative prompt guide</a></nav></section></div></article>`;
  return `<article class="editorial-document article-document"><header class="editorial-hero"><p>METODO_01 / SUBSUELO FS</p><h1>Cómo se construye una carpeta de 30 prompts</h1><p>El número no organiza la carpeta. La organiza el límite del género. Cada colección parte de un sonido que se puede describir con claridad y variar sin convertirlo en otro producto.</p></header><div class="article-copy article-copy--wide"><section><h2>1. Fijar el núcleo sonoro</h2><p>La familia rítmica, el comportamiento de los graves, el material de origen y el carácter del espacio definen el centro de una colección. Trap Ritual conserva batería de trap y 808 dominante; Garaje Oscuro mantiene swing humano 2-step; Fossil Jungle conserva breaks remuestreados y subgrave pesado. La misma regla se aplica a las otras tres carpetas.</p></section><section><h2>2. Elegir los ejes de variación</h2><p>Los 30 prompts no repiten una plantilla cambiando sinónimos. Mueven controles concretos: pocket de batería, movimiento del bajo, familia de muestras, motivo, silencio, anchura, suciedad o habitación. Los ejes útiles cambian según el género.</p></section><section><h2>3. Escribir direcciones completas</h2><p>Cada entrada funciona por sí sola. El comprador elige un prompt completo; no tiene que combinar fragmentos, códigos ni módulos numerados. El título identifica la entrada, pero el texto de trabajo es autosuficiente.</p></section><section><h2>4. Mantener las exclusiones aparte</h2><p>Los 10 negative prompts viven en su propio PDF porque son opcionales. Cada uno responde a un límite concreto, como voces no deseadas o un acabado que no encaja. No sustituyen la dirección principal.</p></section><section><h2>5. Explicar los archivos en dos idiomas</h2><p>Las carpetas ES y EN contienen la misma documentación en su idioma. Los prompts permanecen en inglés en las dos. La guía rápida explica dónde va cada texto, cómo trabajar con o sin voces y qué hacen los controles relevantes.</p></section><section><h2>6. Incluir cuatro referencias de audio</h2><p>Cada producto enumera cuatro MP3 de referencia dentro de la descarga y ofrece una muestra pública de 30 segundos. La ficha describe ahora el perfil de esa muestra, para que el sonido pueda evaluarse antes del pago sin revelar el prompt vendido.</p></section><section><h2>Quién opera la tienda</h2><p>SUBSUELO FS está operada por NOMBRE DIRECCION, S.L.U. El contenido de los productos, los precios, las condiciones de compra y los datos de contacto están disponibles antes del pago. Esta página describe la organización del catálogo; no promete un resultado musical concreto.</p></section><section class="article-next"><h2>Abre los archivos que importan</h2><nav><a href="${catalogueHref}">Catálogo</a><a href="${helpHref}">Archivos entregados</a><a href="${negativeHref}">Guía de negative prompts</a></nav></section></div></article>`;
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
      description: en ? "Genre-built folders for dark instrumentals: 30 prompts, 10 negative prompts, ES/EN guides and 4 audio references. Download the free sampler first." : "Carpetas por género para instrumentales oscuras: 30 prompts, 10 negative prompts, guías ES/EN y 4 audios. Descarga una muestra gratuita antes de elegir.",
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
    page("/guides/", "guides/index.html", {
      heading: en ? "Production guides" : "Guías de producción",
      title: en ? "Music prompt guides for producers | SUBSUELO FS" : "Guías para prompts musicales | SUBSUELO FS",
      description: en ? "Direct guides to writing music prompts, using negative prompts, comparing sound folders and understanding how each collection is built." : "Guías directas para escribir prompts musicales, usar negative prompts, comparar carpetas y entender cómo se construye cada colección.",
      type: "website",
      standalone: true,
      view: guidesView(locale)
    }),
    page("/guides/negative-prompts/", "guides/negative-prompts/index.html", {
      heading: en ? "What is a negative prompt in music?" : "Qué es un negative prompt en música",
      title: en ? "What is a negative prompt in music? | SUBSUELO FS" : "Qué es un negative prompt en música | SUBSUELO FS",
      description: en ? "Learn what a music negative prompt removes, where to paste it, how it differs from the main prompt and when to use it for vocals or instruments." : "Qué elimina un negative prompt musical, dónde se pega, en qué se diferencia del prompt principal y cuándo usarlo para voces o instrumentos.",
      type: "article",
      article: true,
      standalone: true,
      breadcrumbs: [{ name: en ? "Production guides" : "Guías de producción", path: "/guides/" }, { name: en ? "Negative prompts" : "Negative prompts", path: "/guides/negative-prompts/" }],
      view: negativeGuideView(locale)
    }),
    page("/guides/write-music-prompts/", "guides/write-music-prompts/index.html", {
      heading: en ? "How to write music prompts" : "Cómo escribir prompts para crear música",
      title: en ? "How to write music prompts | SUBSUELO FS" : "Cómo escribir prompts para crear música | SUBSUELO FS",
      description: en ? "A practical six-part structure for writing music prompts with a clear genre, pulse, drums, bass, source material, space and mix." : "Estructura práctica de seis partes para escribir prompts musicales con género, pulso, batería, bajo, fuente sonora, espacio y mezcla claros.",
      type: "article",
      article: true,
      standalone: true,
      breadcrumbs: [{ name: en ? "Production guides" : "Guías de producción", path: "/guides/" }, { name: en ? "Writing music prompts" : "Escribir prompts musicales", path: "/guides/write-music-prompts/" }],
      view: writingGuideView(locale)
    }),
    page("/compare/", "compare/index.html", {
      heading: en ? "Compare the six prompt folders" : "Compara las seis carpetas de prompts",
      title: en ? "Compare music prompt folders by sound | SUBSUELO FS" : "Compara carpetas de prompts por sonido | SUBSUELO FS",
      description: en ? "Compare ritual trap, dark UK garage, degraded jungle, abstract hip-hop, dub hip-hop and noir hip-hop by drums, bass, sources and intended use." : "Compara trap ritual, UK garage oscuro, jungle degradado, hip-hop abstracto, dub y noir por batería, bajo, fuentes y uso.",
      type: "website",
      standalone: true,
      view: compareView(locale)
    }),
    page("/method/", "method/index.html", {
      heading: en ? "How a folder of 30 prompts is built" : "Cómo se construye una carpeta de 30 prompts",
      title: en ? "How SUBSUELO FS prompt folders are built" : "Cómo se construyen las carpetas de SUBSUELO FS",
      description: en ? "See how each folder fixes one genre core, varies concrete musical axes and separates prompts, negative prompts, bilingual guides and audio references." : "Cómo cada carpeta fija un género, varía ejes musicales concretos y separa prompts, negative prompts, guías bilingües y audios.",
      type: "website",
      standalone: true,
      view: methodView(locale)
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

const pageSchema = (page) => page.home ? homeSchema(page) : page.product ? productSchema(page, page.product) : page.article ? articleSchema(page) : webPageSchema(page);

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
<link rel="alternate" type="application/rss+xml" title="SUBSUELO FS" href="${siteUrl}${page.locale === "en" ? "/en/feed.xml" : "/feed.xml"}" />
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

const standaloneHtml = (page) => {
  const en = page.locale === "en";
  const homeHref = localizedPath("/", page.locale);
  const demosHref = localizedPath("/demos/", page.locale);
  const guidesHref = localizedPath("/guides/", page.locale);
  const negativeHref = localizedPath("/guides/negative-prompts/", page.locale);
  const writingHref = localizedPath("/guides/write-music-prompts/", page.locale);
  const compareHref = localizedPath("/compare/", page.locale);
  const methodHref = localizedPath("/method/", page.locale);
  const helpHref = localizedPath("/help/", page.locale);
  const bundleHref = localizedPath("/bundle/", page.locale);
  const languageHref = canonicalUrl(localizedPath(page.basePath, en ? "es" : "en"));
  const parentHref = page.basePath.startsWith("/guides/") && page.basePath !== "/guides/" ? guidesHref : homeHref;
  const trail = page.breadcrumbs || (page.basePath === "/guides/" ? [{ name: en ? "Guides" : "Guías", path: "/guides/" }] : [{ name: page.heading, path: page.basePath }]);
  const address = [{ name: "SUBSUELO", path: "/" }, ...trail].map((item, index, items) => `<a class="breadcrumb-button" href="${localizedPath(item.path, page.locale)}"${index === items.length - 1 ? ' aria-current="page"' : ""}>${escapeHtml(item.name)}</a>`).join("");
  const sideLink = (href, label, icon = "doc") => `<a class="tree-item${href === page.pathname ? " is-current" : ""}" href="${href}"${href === page.pathname ? ' aria-current="page"' : ""}><span class="tree-icon tree-icon--${icon}"></span><span>${escapeHtml(label)}</span></a>`;
  return `<!doctype html>
<html lang="${page.locale}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    ${seoBlock(page)}
    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
    <link rel="stylesheet" href="/styles-v5.css?v=30" />
  </head>
  <body class="editorial-body">
    <a class="skip-link" href="#article">${en ? "Skip to article" : "Saltar al artículo"}</a>
    <div class="desktop-shell">
      <main class="fs-window editorial-window" aria-label="SUBSUELO File System">
        <header class="titlebar"><div class="titlebar__brand"><span class="app-mark" aria-hidden="true">S</span><strong>SUBSUELO FS</strong><span>${en ? "PRODUCTION FILES" : "ARCHIVOS DE PRODUCCIÓN"}</span></div><div class="titlebar__meta"><span>${en ? "EDITORIAL" : "EDITORIAL"}</span><span class="titlebar__status">${en ? "FILE OPEN" : "ARCHIVO ABIERTO"}</span><i aria-hidden="true"></i></div></header>
        <nav class="menubar" aria-label="${en ? "Main menu" : "Menú principal"}"><a href="${homeHref}">${en ? "File" : "Archivo"}</a><a href="${demosHref}">${en ? "Play" : "Reproducir"}</a><a href="${guidesHref}"${page.basePath.startsWith("/guides/") || page.basePath === "/guides/" ? ' aria-current="page"' : ""}>${en ? "Guides" : "Guías"}</a><a href="${methodHref}"${page.basePath === "/method/" ? ' aria-current="page"' : ""}>${en ? "Method" : "Método"}</a><a href="${helpHref}">${en ? "Help" : "Ayuda"}</a></nav>
        <div class="toolbar editorial-toolbar"><div class="toolbar__nav"><a class="os-control icon-control icon-back" href="${parentHref}" aria-label="${en ? "Back" : "Atrás"}"><span class="nav-glyph" aria-hidden="true"></span></a></div><nav class="address-bar" aria-label="${en ? "Current path" : "Ruta actual"}">${address}</nav><div class="toolbar__tools"><a class="editorial-language" href="${languageHref}" hreflang="${en ? "es" : "en"}"><span>${en ? "EN" : "ES"}</span><b>/</b><span>${en ? "ES" : "EN"}</span></a></div></div>
        <div class="workspace editorial-workspace">
          <aside class="sidebar editorial-sidebar" aria-label="${en ? "Guide index" : "Índice de guías"}"><section><h2>${en ? "GUIDES" : "GUÍAS"}</h2><nav>${sideLink(guidesHref, en ? "All guides" : "Todas las guías", "folder")}${sideLink(negativeHref, en ? "Negative prompts" : "Negative prompts")}${sideLink(writingHref, en ? "Writing prompts" : "Escribir prompts")}</nav></section><section><h2>${en ? "CATALOGUE" : "CATÁLOGO"}</h2><nav>${sideLink(compareHref, en ? "Compare folders" : "Comparar carpetas")}${sideLink(methodHref, en ? "Method" : "Método")}${sideLink(demosHref, en ? "Audio previews" : "Muestras de audio", "play")}${sideLink(homeHref, en ? "All folders" : "Todas las carpetas", "folder")}</nav></section></aside>
          <section class="file-pane editorial-pane" id="article" tabindex="-1"><div class="view-content editorial-view">${page.view}</div></section>
        </div>
        <footer class="statusbar"><span>${en ? "PUBLIC FILE" : "ARCHIVO PÚBLICO"}</span><span>SUBSUELO FS</span><span>NOMBRE DIRECCION, S.L.U.</span></footer>
      </main>
      <footer class="taskbar"><a class="start-button" href="${homeHref}"><span class="app-mark" aria-hidden="true">S</span><strong>SUBSUELO</strong></a><a class="task-window" href="${guidesHref}"><span class="mini-folder" aria-hidden="true"></span><span>${en ? "GUIDES" : "GUÍAS"}</span></a><div class="task-clock"><span>SUBSUELO FS</span><small>ONLINE</small></div></footer>
      <nav class="mobile-nav" aria-label="${en ? "Mobile navigation" : "Navegación móvil"}"><a href="${homeHref}"><span class="nav-home" aria-hidden="true"></span><span>${en ? "Home" : "Inicio"}</span></a><a href="${compareHref}"><span class="mini-folder" aria-hidden="true"></span><span>${en ? "Compare" : "Comparar"}</span></a><a href="${demosHref}"><span class="nav-play" aria-hidden="true"></span><span>Demos</span></a><a href="${guidesHref}" aria-current="${page.basePath.startsWith("/guides/") || page.basePath === "/guides/" ? "page" : "false"}"><span class="nav-help" aria-hidden="true">G</span><span>${en ? "Guides" : "Guías"}</span></a><a href="${bundleHref}"><span class="mini-folder" aria-hidden="true"></span><span>Pack</span></a></nav>
    </div>
  </body>
</html>`;
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
  if (page.standalone) {
    const outputPath = path.join(root, page.output);
    await mkdir(path.dirname(outputPath), { recursive: true });
    await writeFile(outputPath, `${standaloneHtml(page)}\n`, "utf8");
    continue;
  }
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
    html = html.replaceAll('href="/guides/" data-editorial-path="/guides/"', 'href="/en/guides/" data-editorial-path="/guides/"');
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

const feedItems = {
  es: [
    { path: "/guides/negative-prompts/", title: "Qué es un negative prompt en música y cuándo usarlo", description: "Qué elimina, dónde se coloca y cuándo conviene usarlo para voces, instrumentos o acabados." },
    { path: "/guides/write-music-prompts/", title: "Cómo escribir prompts para crear música con una dirección clara", description: "Una estructura práctica para describir género, pulso, batería, graves, fuente sonora, espacio y mezcla." }
  ],
  en: [
    { path: "/guides/negative-prompts/", title: "What is a negative prompt in music and when should you use one?", description: "What it removes, where it goes and when it helps with vocals, instruments or finish." },
    { path: "/guides/write-music-prompts/", title: "How to write music prompts that give a clear direction", description: "A practical structure for genre, pulse, drums, low end, source material, space and mix." }
  ]
};

for (const locale of ["es", "en"]) {
  const en = locale === "en";
  const feedPath = en ? "/en/feed.xml" : "/feed.xml";
  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>SUBSUELO FS — ${en ? "Production guides" : "Guías de producción"}</title>
    <link>${canonicalUrl(localizedPath("/guides/", locale))}</link>
    <description>${en ? "Direct guides for music prompts, negative prompts and sound direction." : "Guías directas sobre prompts musicales, negative prompts y dirección sonora."}</description>
    <language>${en ? "en" : "es"}</language>
    <lastBuildDate>Thu, 16 Jul 2026 08:00:00 +0200</lastBuildDate>
    <atom:link href="${canonicalUrl(feedPath)}" rel="self" type="application/rss+xml" />
${feedItems[locale].map((item) => { const url = canonicalUrl(localizedPath(item.path, locale)); return `    <item>\n      <title>${escapeHtml(item.title)}</title>\n      <link>${url}</link>\n      <guid isPermaLink="true">${url}</guid>\n      <description>${escapeHtml(item.description)}</description>\n      <pubDate>Thu, 16 Jul 2026 08:00:00 +0200</pubDate>\n    </item>`; }).join("\n")}
  </channel>
</rss>
`;
  const outputPath = path.join(root, en ? "en/feed.xml" : "feed.xml");
  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, feed, "utf8");
}

await writeFile(path.join(root, "llms.txt"), `# SUBSUELO FS

> Bilingual digital store for genre-specific music prompt folders, negative prompts, practical guides and audio references.

Official website: https://subsuelofs.com/
Spanish guides: https://subsuelofs.com/guides/
English guides: https://subsuelofs.com/en/guides/
Folder comparison: https://subsuelofs.com/compare/
Audio previews: https://subsuelofs.com/demos/
Method: https://subsuelofs.com/method/

## Catalogue

- Trap Ritual: https://subsuelofs.com/product/trap/
- Garaje Oscuro: https://subsuelofs.com/product/garage/
- Fossil Jungle: https://subsuelofs.com/product/jungle/
- Low Pressure: https://subsuelofs.com/product/low/
- Abyss Dub: https://subsuelofs.com/product/abyss/
- Noir Tapes: https://subsuelofs.com/product/noir/
- Complete pack: https://subsuelofs.com/bundle/

## Public content boundaries

Product pages describe each folder, delivered files, variation axes and public audio preview. Complete paid prompts and complete paid negative-prompt lists are not published on the public website.

SUBSUELO FS is operated by NOMBRE DIRECCION, S.L.U. Contact and purchase terms are available inside the store.
`, "utf8");

console.log(`Generadas ${pages.length} páginas estáticas, feeds y sitemap.xml`);
