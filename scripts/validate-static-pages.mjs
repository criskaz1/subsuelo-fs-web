import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const pages = [
  { pathname: "/", output: "index.html", product: false },
  { pathname: "/demos/", output: "demos/index.html", product: false },
  { pathname: "/bundle/", output: "bundle/index.html", product: true },
  { pathname: "/help/", output: "help/index.html", product: false },
  ...["trap", "garage", "jungle", "low", "abyss", "noir"].map((id) => ({ pathname: `/product/${id}/`, output: `product/${id}/index.html`, product: true }))
];

const expectedUrls = pages.map((page) => `https://subsuelofs.com${page.pathname}`);

for (const page of pages) {
  const html = await readFile(path.join(root, page.output), "utf8");
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/u)?.[1];
  const title = html.match(/<title>([^<]+)<\/title>/u)?.[1];
  const description = html.match(/<meta name="description" content="([^"]+)"/u)?.[1];
  const jsonLdSource = html.match(/<script type="application\/ld\+json">\s*([\s\S]*?)\s*<\/script>/u)?.[1];

  if (canonical !== `https://subsuelofs.com${page.pathname}`) throw new Error(`${page.output}: canonical incorrecto`);
  if (!title || !description) throw new Error(`${page.output}: faltan title o description`);
  if (!/<div class="view-content" data-view-content>[\s\S]*?<h1>/u.test(html)) throw new Error(`${page.output}: falta contenido inicial con H1`);
  if (!jsonLdSource) throw new Error(`${page.output}: falta JSON-LD`);

  const jsonLd = JSON.parse(jsonLdSource);
  const types = (jsonLd["@graph"] || [jsonLd]).map((entry) => entry["@type"]);
  if (page.product && !types.includes("Product")) throw new Error(`${page.output}: falta Product JSON-LD`);
}

const sitemap = await readFile(path.join(root, "sitemap.xml"), "utf8");
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/gu)].map((match) => match[1]);
if (JSON.stringify(sitemapUrls) !== JSON.stringify(expectedUrls)) throw new Error("sitemap.xml no coincide con las páginas estáticas");

const robots = await readFile(path.join(root, "robots.txt"), "utf8");
if (!robots.includes("Sitemap: https://subsuelofs.com/sitemap.xml")) throw new Error("robots.txt no declara el sitemap");

console.log(`Validadas ${pages.length} páginas estáticas, robots.txt y sitemap.xml`);
