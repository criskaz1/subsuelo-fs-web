# SUBSUELO FS

[Abrir la tienda](https://subsuelofs.com/) · [English version](https://subsuelofs.com/en/) · [Escuchar demos](https://subsuelofs.com/demos/)

SUBSUELO FS publica carpetas de prompts para crear instrumentales en Suno. Cada colección se mantiene dentro de un género concreto y reúne 30 prompts completos, 10 negative prompts opcionales, documentación separada en español e inglés y cuatro referencias de audio probadas.

El catálogo actual cubre trap ritual, UK garage oscuro, jungle degradado, hip-hop abstracto, hip-hop dub y hip-hop noir. La web permite comparar las seis carpetas por ritmo, graves, fuentes y espacio antes de elegir.

## Archivos públicos

- [Catálogo](https://subsuelofs.com/)
- [Comparación de carpetas](https://subsuelofs.com/compare/)
- [Guías de producción](https://subsuelofs.com/guides/)
- [Qué es un negative prompt en música](https://subsuelofs.com/guides/negative-prompts/)
- [Cómo escribir prompts para crear música](https://subsuelofs.com/guides/write-music-prompts/)
- [Método de las colecciones](https://subsuelofs.com/method/)
- [Muestras de audio](https://subsuelofs.com/demos/)

## English

SUBSUELO FS publishes genre-specific sound-direction folders for instrumental music. Each collection contains 30 complete prompts, 10 optional negative prompts, separate Spanish and English documentation, and four audio references.

[Browse the catalogue](https://subsuelofs.com/en/) · [Compare folders](https://subsuelofs.com/en/compare/) · [Read the guides](https://subsuelofs.com/en/guides/)

The paid prompt texts and complete negative-prompt lists are not included in this public repository.

## Generación y medición

La superficie estática se regenera y valida dentro de este repositorio:

```sh
node scripts/generate-static-pages.mjs
node scripts/validate-static-pages.mjs
```

`analytics-config.json` activa Umami Cloud sin cookies. `analytics-loader.js` registra las páginas vistas como pageviews reales y mantiene separados los eventos de demos, herramientas, muestra gratuita y salidas hacia el checkout.
