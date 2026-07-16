import { execFileSync } from "node:child_process";
import { readFileSync, statSync } from "node:fs";
import { resolve } from "node:path";

const root = execFileSync("git", ["rev-parse", "--show-toplevel"], { encoding: "utf8" }).trim();
process.chdir(root);

const failures = [];
const manifestFile = "public-catalog-manifest.json";
const manifest = JSON.parse(readFileSync(resolve(root, manifestFile), "utf8"));

const staticAllowedFiles = new Set(`
.github/scripts/audit-public-surface.mjs
.github/scripts/submit-indexnow.mjs
.github/workflows/indexnow.yml
.github/workflows/public-surface-guard.yml
.nojekyll
.well-known/security.txt
34827f88d22ea28c8bcf82001348e846.txt
404.html
CNAME
README.md
app-v5.js
en/feed.xml
en/index.html
favicon.svg
feed.xml
google4547210dcb970066.html
index.html
llms.txt
public-catalog-manifest.json
robots.txt
route-fallback.js
scripts/generate-static-pages.mjs
scripts/validate-static-pages.mjs
sitemap.xml
social-card.png
styles-v5.css
`.trim().split("\n"));

const products = Array.isArray(manifest?.products) ? manifest.products : [];
const productRoutes = new Set();
const allowedAudio = new Set();
const allowedImages = new Set();
const productIds = new Set();
const productSlugs = new Set();

if (manifest?.version !== 1 || !products.length) {
  failures.push(`${manifestFile}: debe usar la versión 1 y declarar al menos un pack`);
}

for (const product of products) {
  const id = String(product?.id ?? "");
  const slug = String(product?.route ?? "");
  const previews = Array.isArray(product?.previews) ? product.previews : [];
  const images = Array.isArray(product?.images) ? product.images : [];

  if (!/^[a-z0-9-]+$/u.test(id) || productIds.has(id)) failures.push(`${manifestFile}: id de pack inválido o duplicado (${id || "vacío"})`);
  if (!/^[a-z0-9-]+$/u.test(slug) || productSlugs.has(slug)) failures.push(`${manifestFile}: ruta de pack inválida o duplicada (${slug || "vacía"})`);
  if (!previews.length) failures.push(`${manifestFile}: ${id || slug || "pack"} necesita al menos una preview pública`);
  productIds.add(id);
  productSlugs.add(slug);
  productRoutes.add(`product/${slug}/index.html`);
  productRoutes.add(`en/product/${slug}/index.html`);

  for (const preview of previews) {
    if (!/^audio\/[a-z0-9-]+-preview\.mp3$/u.test(preview) || allowedAudio.has(preview)) {
      failures.push(`${manifestFile}: preview inválida o duplicada (${preview})`);
    }
    allowedAudio.add(preview);
  }

  for (const image of images) {
    const expectedPrefix = `media/${slug}/`;
    if (!image.startsWith(expectedPrefix) || !/\.(?:avif|jpe?g|png|webp)$/iu.test(image) || allowedImages.has(image)) {
      failures.push(`${manifestFile}: imagen pública inválida o duplicada (${image})`);
    }
    allowedImages.add(image);
  }
}

const editorialRoute = /^(?:en\/)?(?:bundle|compare|demos|guides|help|method)(?:\/[a-z0-9-]+)*\/index\.html$/u;
const isAllowedFile = (file) => staticAllowedFiles.has(file)
  || productRoutes.has(file)
  || allowedAudio.has(file)
  || allowedImages.has(file)
  || editorialRoute.test(file);

const requiredFiles = new Set([...staticAllowedFiles, ...productRoutes, ...allowedAudio, ...allowedImages]);
const maxFileBytes = 1_600_000;
const maxRepositoryBytes = 4_000_000 + (allowedAudio.size * 1_100_000) + (allowedImages.size * maxFileBytes);
const maxPreviewSeconds = 30.5;

const forbiddenPathRules = [
  { label: "carpeta privada", pattern: /(^|\/)(?:source|private|output|archive|releases?|tmp|customers?|orders?|invoices?)(\/|$)/iu },
  { label: "producto descargable", pattern: /\.(?:pdf|zip|7z|rar|tar|gz|docx?|xlsx?|csv)$/iu },
  { label: "audio o vídeo no permitido", pattern: /\.(?:wav|wave|flac|aiff?|m4a|aac|ogg|mp4|mov|mkv)$/iu },
  { label: "credencial o base de datos", pattern: /(?:^|\/)(?:\.env(?:\..+)?|id_rsa|credentials?|secrets?|tokens?)(?:$|\.)|\.(?:pem|key|p12|pfx|sqlite3?|db|bak)$/iu }
];

const privateAccount = ["cris", "kaz1"].join("");
const privateMailbox = ["videoclipsconfiltro", "gmail.com"].join("@");
const excludedBrand = ["su", "no"].join("");
const forbiddenContentRules = [
  { label: "clave privada", pattern: /-----BEGIN (?:RSA |OPENSSH |EC |DSA )?PRIVATE KEY-----/u },
  { label: "token de GitHub", pattern: /(?:github_pat_[A-Za-z0-9_]{20,}|gh[pousr]_[A-Za-z0-9_]{20,})/u },
  { label: "clave secreta de Stripe", pattern: /(?:sk_(?:live|test)_[A-Za-z0-9]{12,}|rk_(?:live|test)_[A-Za-z0-9]{12,})/u },
  { label: "clave de AWS", pattern: /AKIA[0-9A-Z]{16}/u },
  { label: "credencial asignada en texto", pattern: /(?:password|passwd|contrase(?:n|ñ)a|client[_-]?secret|access[_-]?token|api[_-]?secret)\s*[:=]\s*["'][^"'\n]{6,}["']/iu },
  { label: "usuario personal", pattern: new RegExp(`\\b${privateAccount}\\b`, "iu") },
  { label: "correo personal", pattern: new RegExp(privateMailbox.replace(".", "\\."), "iu") },
  { label: "marca excluida de la web", pattern: new RegExp(`\\b${excludedBrand}\\b`, "iu") }
];

const textExtensions = new Set([".css", ".html", ".js", ".json", ".md", ".mjs", ".svg", ".txt", ".xml", ".yml", ".yaml"]);

const git = (args, options = {}) => execFileSync("git", args, { encoding: "utf8", maxBuffer: 32 * 1024 * 1024, ...options });
const splitNull = (value) => value.split("\0").filter(Boolean);
const extensionOf = (file) => {
  const lastSlash = file.lastIndexOf("/");
  const lastDot = file.lastIndexOf(".");
  return lastDot > lastSlash ? file.slice(lastDot).toLowerCase() : "";
};

const pathViolations = (file, enforceAllowlist = true) => {
  const violations = [];
  if (enforceAllowlist && !isAllowedFile(file)) violations.push("no figura en la superficie pública autorizada");
  for (const rule of forbiddenPathRules) {
    if (rule.pattern.test(file)) violations.push(rule.label);
  }
  if (file.endsWith(".mp3") && !allowedAudio.has(file)) violations.push("MP3 no autorizado");
  return violations;
};

const contentViolations = (text) => forbiddenContentRules
  .filter((rule) => rule.pattern.test(text))
  .map((rule) => rule.label);

const synchsafeInteger = (buffer, offset) => {
  if (offset + 4 > buffer.length) throw new Error("cabecera ID3 incompleta");
  const bytes = buffer.subarray(offset, offset + 4);
  if ([...bytes].some((byte) => byte > 0x7f)) throw new Error("entero ID3 no sincrónico");
  return (bytes[0] << 21) | (bytes[1] << 14) | (bytes[2] << 7) | bytes[3];
};

const allowedTechnicalId3Frames = new Set(["TSSE", "TSS"]);

const inspectId3 = (buffer) => {
  let audioStart = 0;
  let audioEnd = buffer.length;
  const metadataFrames = [];

  if (buffer.length >= 10 && buffer.subarray(0, 3).toString("ascii") === "ID3") {
    const version = buffer[3];
    const flags = buffer[5];
    if (![2, 3, 4].includes(version)) throw new Error(`versión ID3 no permitida (${version})`);

    const payloadBytes = synchsafeInteger(buffer, 6);
    const tagEnd = 10 + payloadBytes;
    if (tagEnd > buffer.length) throw new Error("etiqueta ID3 truncada");

    let cursor = 10;
    if (flags & 0x40) {
      if (version === 2) throw new Error("cabecera ID3v2.2 extendida no admitida");
      const extendedBytes = version === 4 ? synchsafeInteger(buffer, cursor) : buffer.readUInt32BE(cursor) + 4;
      if (extendedBytes < 4 || cursor + extendedBytes > tagEnd) throw new Error("cabecera ID3 extendida inválida");
      cursor += extendedBytes;
    }

    const frameHeaderBytes = version === 2 ? 6 : 10;
    const idBytes = version === 2 ? 3 : 4;
    while (cursor + frameHeaderBytes <= tagEnd) {
      const frameId = buffer.subarray(cursor, cursor + idBytes).toString("ascii");
      if (/^\0+$/u.test(frameId)) break;
      if (!/^[A-Z0-9]{3,4}$/u.test(frameId)) throw new Error(`identificador ID3 inválido (${frameId})`);

      const frameBytes = version === 2
        ? buffer.readUIntBE(cursor + 3, 3)
        : version === 4
          ? synchsafeInteger(buffer, cursor + 4)
          : buffer.readUInt32BE(cursor + 4);
      const nextFrame = cursor + frameHeaderBytes + frameBytes;
      if (nextFrame > tagEnd) throw new Error(`trama ID3 truncada (${frameId})`);
      if (!allowedTechnicalId3Frames.has(frameId)) metadataFrames.push(frameId);
      cursor = nextFrame;
    }

    audioStart = tagEnd + (version === 4 && (flags & 0x10) ? 10 : 0);
    if (audioStart > buffer.length) throw new Error("pie ID3 truncado");
  }

  if (audioEnd >= 128 && buffer.subarray(audioEnd - 128, audioEnd - 125).toString("ascii") === "TAG") {
    metadataFrames.push("ID3v1");
    audioEnd -= 128;
  }

  const trailingMetadata = buffer.subarray(Math.max(audioStart, audioEnd - 256), audioEnd).toString("latin1");
  if (trailingMetadata.includes("APETAGEX")) metadataFrames.push("APEv2");

  if (audioStart >= audioEnd) throw new Error("el MP3 no contiene audio");
  return { audioStart, audioEnd, metadataFrames };
};

const mpeg1Layer3Bitrates = [0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 0];
const mpeg2Layer3Bitrates = [0, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160, 0];

const parseMp3FrameHeader = (buffer, offset) => {
  if (offset + 4 > buffer.length) return null;
  const header = buffer.readUInt32BE(offset);
  if ((header >>> 21) !== 0x7ff) return null;

  const versionBits = (header >>> 19) & 0x03;
  const layerBits = (header >>> 17) & 0x03;
  const bitrateIndex = (header >>> 12) & 0x0f;
  const sampleRateIndex = (header >>> 10) & 0x03;
  const padding = (header >>> 9) & 0x01;
  const emphasis = header & 0x03;
  if (versionBits === 1 || layerBits !== 1 || bitrateIndex === 0 || bitrateIndex === 15 || sampleRateIndex === 3 || emphasis === 2) return null;

  const isMpeg1 = versionBits === 3;
  const sampleRateBase = [44_100, 48_000, 32_000][sampleRateIndex];
  const sampleRate = isMpeg1 ? sampleRateBase : versionBits === 2 ? sampleRateBase / 2 : sampleRateBase / 4;
  const bitrate = (isMpeg1 ? mpeg1Layer3Bitrates : mpeg2Layer3Bitrates)[bitrateIndex];
  const frameBytes = Math.floor((isMpeg1 ? 144_000 : 72_000) * bitrate / sampleRate) + padding;
  const samples = isMpeg1 ? 1_152 : 576;
  if (!frameBytes || offset + frameBytes > buffer.length) return null;
  return { frameBytes, seconds: samples / sampleRate };
};

const inspectMp3 = (buffer) => {
  const { audioStart, audioEnd, metadataFrames } = inspectId3(buffer);
  let cursor = audioStart;
  let duration = 0;
  let frames = 0;

  while (cursor + 4 <= audioEnd) {
    const frame = parseMp3FrameHeader(buffer, cursor);
    if (!frame || cursor + frame.frameBytes > audioEnd) {
      const remainder = buffer.subarray(cursor, audioEnd);
      if (frames > 0 && remainder.every((byte) => byte === 0)) break;
      throw new Error(`trama MPEG inválida en el byte ${cursor}`);
    }
    duration += frame.seconds;
    frames += 1;
    cursor += frame.frameBytes;
  }

  if (frames < 2) throw new Error("no se han encontrado suficientes tramas MPEG");
  if (cursor < audioEnd && !buffer.subarray(cursor, audioEnd).every((byte) => byte === 0)) {
    throw new Error(`datos no reconocidos desde el byte ${cursor}`);
  }
  return { duration, frames, metadataFrames };
};

if (process.argv.includes("--self-test")) {
  const syntheticToken = "github_pat_" + "A".repeat(30);
  const syntheticPassword = ["const pass", "word = \"test-value\""].join("");
  const syntheticMp3 = Buffer.alloc(480 * 3);
  for (let offset = 0; offset < syntheticMp3.length; offset += 480) syntheticMp3.set([0xff, 0xfb, 0xa4, 0x00], offset);
  const syntheticAudio = inspectMp3(syntheticMp3);
  const cases = [
    pathViolations("private/prompts.pdf").length > 0,
    pathViolations("audio/full-track.mp3").length > 0,
    contentViolations(syntheticToken).includes("token de GitHub"),
    contentViolations(syntheticPassword).includes("credencial asignada en texto"),
    contentViolations(`visit ${privateAccount}`).includes("usuario personal"),
    contentViolations(`made with ${excludedBrand}`).includes("marca excluida de la web"),
    pathViolations("product/noir/index.html").length === 0,
    pathViolations("guides/future-guide/index.html").length === 0,
    contentViolations("SUBSUELO FS · archivo público").length === 0,
    syntheticAudio.frames === 3 && Math.abs(syntheticAudio.duration - 0.072) < 0.000_001
  ];
  if (cases.some((result) => !result)) {
    throw new Error("La prueba interna del control de publicación no ha superado todos los casos.");
  }
  console.log("Prueba interna superada: las fugas simuladas quedan bloqueadas.");
  process.exit(0);
}

const trackedFiles = splitNull(git(["ls-files", "-z"]));

for (const file of trackedFiles) {
  for (const violation of pathViolations(file)) failures.push(`${file}: ${violation}`);
}

for (const file of requiredFiles) {
  if (!trackedFiles.includes(file)) failures.push(`${file}: falta un archivo público obligatorio`);
}

const appSource = readFileSync(resolve(root, "app-v5.js"), "utf8");
for (const product of products) {
  if (!appSource.includes(`id: "${product.id}"`)) failures.push(`${manifestFile}: el pack ${product.id} no está declarado en app-v5.js`);
  for (const preview of product.previews ?? []) {
    if (!appSource.includes(preview)) failures.push(`${manifestFile}: ${preview} no está enlazada desde app-v5.js`);
  }
}

let repositoryBytes = 0;
for (const file of trackedFiles) {
  const bytes = statSync(resolve(root, file)).size;
  repositoryBytes += bytes;
  if (bytes > maxFileBytes) failures.push(`${file}: supera el límite público de ${maxFileBytes} bytes`);

  if (textExtensions.has(extensionOf(file)) || extensionOf(file) === "") {
    const text = readFileSync(resolve(root, file), "utf8");
    for (const violation of contentViolations(text)) failures.push(`${file}: contiene ${violation}`);
  }
}

if (repositoryBytes > maxRepositoryBytes) {
  failures.push(`el repositorio suma ${repositoryBytes} bytes y supera el máximo público de ${maxRepositoryBytes}`);
}

const historicalObjects = git(["rev-list", "--objects", "--all"]).trim().split("\n").filter(Boolean);
const historicalBlobs = new Map();

for (const entry of historicalObjects) {
  const separator = entry.indexOf(" ");
  if (separator === -1) continue;
  const objectId = entry.slice(0, separator);
  const file = entry.slice(separator + 1);
  for (const violation of pathViolations(file, false)) failures.push(`historial/${file}: ${violation}`);
  if (!historicalBlobs.has(objectId)) historicalBlobs.set(objectId, file);
}

for (const [objectId, file] of historicalBlobs) {
  const type = git(["cat-file", "-t", objectId]).trim();
  if (type !== "blob" || !textExtensions.has(extensionOf(file))) continue;
  const text = git(["cat-file", "-p", objectId]);
  for (const violation of contentViolations(text)) failures.push(`historial/${file}: contiene ${violation}`);
}

for (const file of allowedAudio) {
  let inspection;
  try {
    inspection = inspectMp3(readFileSync(resolve(root, file)));
  } catch (error) {
    failures.push(`${file}: MP3 inválido (${error instanceof Error ? error.message : "error desconocido"})`);
    continue;
  }

  if (!Number.isFinite(inspection.duration) || inspection.duration > maxPreviewSeconds) {
    failures.push(`${file}: duración pública no permitida (${inspection.duration.toFixed(3)} s)`);
  }

  if (inspection.metadataFrames.length) {
    failures.push(`${file}: contiene metadatos personales o editoriales no autorizados (${inspection.metadataFrames.join(", ")})`);
  }
}

if (failures.length) {
  console.error("PUBLICACIÓN BLOQUEADA\n");
  for (const failure of [...new Set(failures)].sort()) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Superficie pública validada: ${trackedFiles.length} archivos, ${repositoryBytes} bytes y ${allowedAudio.size} previews autorizadas.`);
