import { readFile } from "node:fs/promises";

const siteUrl = "https://subsuelofs.com";
const host = "subsuelofs.com";
const key = "34827f88d22ea28c8bcf82001348e846";
const keyLocation = `${siteUrl}/${key}.txt`;

const sitemap = await readFile(new URL("../../sitemap.xml", import.meta.url), "utf8");
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/gu)].map((match) => match[1]);

if (!urlList.length || urlList.some((url) => !url.startsWith(`${siteUrl}/`))) {
  throw new Error("El sitemap no contiene URLs válidas del dominio canónico.");
}

if (process.env.INDEXNOW_DRY_RUN === "1") {
  console.log(`Preparadas ${urlList.length} URLs para IndexNow.`);
  process.exit(0);
}

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "content-type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host, key, keyLocation, urlList })
});

if (![200, 202].includes(response.status)) {
  throw new Error(`IndexNow respondió ${response.status}: ${await response.text()}`);
}

console.log(`IndexNow aceptó ${urlList.length} URLs con estado ${response.status}.`);
