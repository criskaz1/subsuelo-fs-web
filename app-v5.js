(() => {
  const legalProfile = Object.freeze({
    brand: "SUBSUELO FS",
    legalName: "NOMBRE DIRECCION, S.L.U.",
    taxId: "B75534164",
    address: "Travesía Luxemburgo, n.º 27, 30392 Cartagena (Murcia), España",
    registry: "Registro Mercantil de Murcia, hoja MU-115010, inscripción 1",
    euid: "ES30011.000388846",
    supportEmail: "soporte@subsuelofs.com",
    privacyEmail: "privacidad@subsuelofs.com",
    legalEmail: "hola@subsuelofs.com",
    xUrl: "https://x.com/subsuelofs",
    updated: { es: "16 de julio de 2026", en: "16 July 2026" }
  });

  const legalVersions = Object.freeze({
    notice: "2026-07-16.2",
    privacy: "2026-07-16.1",
    terms: "2026-07-16.2",
    license: "2026-07-16.1",
    storage: "2026-07-16.1",
    refund: "2026-07-16.1",
    accessibility: "2026-07-16.2",
    immediateSupply: "2026-07-16.1"
  });

  const copy = {
    es: {
      meta: { title: "SUBSUELO FS — Dirección sonora para instrumentales", description: "Seis carpetas para instrumentales oscuras: 180 prompts, 60 negative prompts, guías ES/EN y 24 MP3. Pack completo por 59 €; muestra gratis disponible." },
      pricing: { opening: "Precio de apertura hasta 30.07.2026" },
      a11y: { skip: "Saltar a los archivos", app: "SUBSUELO File System", appMenu: "Menú de aplicación", path: "Ruta actual", language: "Idioma", sidebar: "Navegación del archivo", inspector: "Detalles", mobileNav: "Navegación móvil" },
      titlebar: { browser: "EXPLORADOR DE ARCHIVOS", store: "TIENDA DIGITAL", open: "ARCHIVO ABIERTO" },
      menu: { file: "Archivo", view: "Ver", play: "Reproducir", guides: "Guías", help: "Ayuda", purchases: "Mis compras", purchasesAria: "Mis compras (abre en una pestaña nueva)", cart: "Carrito" },
      toolbar: { back: "Atrás", forward: "Adelante", up: "Subir", sidebar: "Abrir navegación", search: "Buscar en el archivo…", viewGroup: "Vista", grid: "Vista de iconos", list: "Vista de lista" },
      sidebar: { language: "IDIOMA", quick: "ACCESO RÁPIDO", sounds: "POR SONIDO", info: "INFORMACIÓN", home: "Todas las carpetas", demos: "Ejemplos de audio", bundle: "Pack completo", sampler: "Muestra gratuita", samplerAria: "Descargar la muestra gratuita (abre en una pestaña nueva)", purchases: "Mis compras", purchasesAria: "Mis compras (abre en una pestaña nueva)", xAria: "@subsuelofs en X (abre en una pestaña nueva)", cart: "Carrito", guides: "Guías de producción", help: "Qué incluye cada carpeta", legalFolder: "Legal y privacidad" },
      mobile: { home: "Inicio", pack: "Pack", demos: "Demos", help: "Ayuda", cart: "Carrito" },
      home: {
        kicker: "SUBSUELO / CATÁLOGO", title: "Un género por carpeta", lead: "Entra en el género que quieres producir. Dentro encontrarás 30 prompts distintos que cambian la batería, el bajo, el motivo y el espacio sin abandonar esa familia sonora.", hint: "Haz clic en una carpeta para abrirla", mobileHint: "Toca una carpeta para abrirla", docs: "MÁS INFORMACIÓN", helpFile: "QUE_INCLUYE_CADA_CARPETA.txt", demoFile: "ESCUCHAR_EJEMPLOS.audio", guidesFile: "GUIAS_DE_PRODUCCION.folder", bundleFile: "PACK_COMPLETO.folder", legalFile: "LEGAL_Y_PRIVACIDAD.folder", empty: "No hay resultados para esta búsqueda.", emptyHint: "Prueba con otro nombre o limpia la búsqueda.", clear: "Limpiar búsqueda",
        offerAria: "Oferta del pack completo", offerKicker: "PACK COMPLETO / 6 CARPETAS", offerTitle: "Todo el catálogo actual en un solo ZIP.", offerText: "180 prompts, 60 negative prompts, guías en español e inglés y 24 referencias MP3.", offerCompatibility: "Los prompts se entregan en inglés, listos para copiar en Styles; los negative prompts opcionales se usan en Exclude de Suno. SUBSUELO FS es independiente y no está afiliado a Suno.", offerSeparate: "90 € por separado", offerPrice: "59 €", offerSaving: "AHORRAS 31 €", offerOpening: "Precio de apertura hasta 30.07.2026", offerAction: "COMPRAR PACK COMPLETO · 59 €",
        samplerAction: "PROBAR MUESTRA GRATIS · 0 €", samplerAria: "Recibir la muestra gratuita (abre en una pestaña nueva)"
      },
      categories: { trap: "Trap ritual", garage: "Garage oscuro", jungle: "Jungle degradado", hiphop: "Hip-Hop abstracto", dub: "Hip-Hop dub", noir: "Hip-Hop noir" },
      inspector: { select: "Selecciona una carpeta", selectHint: "Aquí verás qué sonido trabaja, qué contiene, su ejemplo de audio y el precio.", open: "Abrir carpeta", play: "Escuchar ejemplo", add: "Añadir", prompts: "{count} prompts", negatives: "{count} negative prompts", guide: "Guía en español + guía en inglés", demo: "1 ejemplo de audio", demos: "{count} ejemplos de audio", folders: "{count} carpetas" },
      product: { edition: "CARPETA DE PROMPTS", demoFolderName: "AUDIO_EXAMPLES", add: "Añadir al carrito", buy: "Comprar ahora", play: "Escuchar 30 s", sampler: "Probar muestra gratis · 0 €", contents: "Contenido de la descarga", name: "Nombre", type: "Tipo", folder: "Carpeta", description: "Qué contiene", availability: "Acceso", purchase: "Descarga disponible después del pago", files: "{count} elementos", included: "Incluido en la descarga", available: "Disponible después de la compra", public: "Información pública", details: "Ver información", open: "Abrir", listen: "Escuchar", readme: "Resumen de la descarga, organización de los archivos y primeros pasos.", promptsFolder: "PDF con todos los prompts en inglés, numerados y listos para copiar.", negativesFolder: "PDF separado con todos los negative prompts en inglés, numerados y listos para copiar.", guideFile: "Explica dónde pegar cada texto, cómo crear con o sin voz y qué cambia al mover los controles.", demosFolder: "Carpeta con 4 MP3 incluidos para escucha y referencia. El reproductor público ofrece una muestra.", audioIncluded: "MP3 completo incluido para escucha y referencia después del pago.", previewDescription: "Extracto público de 30 segundos de uno de los audios incluidos.", demosIncluded: "4 MP3 incluidos + muestra pública", licenseFile: "Condiciones de uso de los prompts, negative prompts y audios de ejemplo.", esFolder: "Documentos en español; los textos que se copian permanecen en inglés.", enFolder: "Documentos en inglés; los prompts preparados para copiar también están en inglés.", format: "Formato", language: "Idioma", content: "Contenido", english: "Inglés", spanishDocs: "Español · prompts en inglés", englishDocs: "Inglés · prompts en inglés", afterPurchase: "Se entrega dentro de la descarga después del pago.", review: "Puedes comprobar qué contiene y en qué idioma está antes de comprar.", mainPrompt: "Prompt completo en inglés, listo para copiar.", negativePrompt: "Lista en inglés para pegar en Exclude.", audioPreview: "Muestra pública", previewOnly: "Solo escucha", notInZip: "La escucha pública es una muestra; la compra incluye 4 MP3 para referencia." },
      editorial: { kicker: "PERFIL DE LA CARPETA", title: "Un mismo género, 30 enfoques", core: "Sonido central", changes: "Qué cambia", fit: "Encaja si buscas", demo: "La muestra que escuchas", compare: "Comparar todas las carpetas", negativeGuide: "Entender los negative prompts", more: "Carpetas cercanas" },
      help: { kicker: "AYUDA / EMPIEZA_AQUI.txt", title: "Qué incluye cada carpeta", lead: "Cada compra incluye una carpeta ES, otra EN y AUDIO_EXAMPLES. Las explicaciones cambian de idioma; los prompts que se copian están en inglés en las dos versiones.", prompt: "PROMPTS", promptText: "El PDF PROMPTS reúne todos los prompts de la carpeta. Elige uno y pégalo completo en el campo Styles.", negative: "NEGATIVE PROMPTS", negativeText: "El PDF NEGATIVE PROMPTS reúne listas para el campo Exclude. Usa una cuando quieras evitar voces u otro elemento concreto indicado en la lista.", guide: "GUÍA", guideText: "Hay una guía en español y la misma guía en inglés. Explica dónde pegar cada bloque, cómo trabajar con o sin voz y qué hace cada control.", demos: "EJEMPLOS DE AUDIO", demosText: "La descarga incluye 4 MP3 para escuchar como referencia del sonido. No tienen licencia de sampleo, publicación o reutilización.", direction: "Elige un prompt y pégalo en Styles", outside: "Usa Exclude solo si quieres quitar algo", together: "Para empezar solo necesitas un prompt. El negative prompt es opcional y sirve para excluir algo concreto.", delivery: "Después del pago recibes las carpetas ES, EN y AUDIO_EXAMPLES." },
      demos: { kicker: "AUDIO / MUESTRAS", title: "Muestras de audio", lead: "Escucha una muestra pública de cada carpeta. Cada compra incluye además 4 MP3 completos para referencia sonora.", track: "Pista", edition: "Carpeta", length: "Duración", action: "Acción", open: "Abrir carpeta" },
      bundle: { kicker: "PACK COMPLETO", title: "Todas las carpetas", lead: "Incluye en un solo ZIP todas las carpetas enumeradas debajo. La compra cubre únicamente esas carpetas; las publicaciones futuras se venden por separado.", members: "Carpetas incluidas", add: "Añadir pack completo", item: "Incluida en el pack", folderCount: "{count} carpetas", saving: "{separate} por separado · ahorras {saving}" },
      status: { delivery: "DESCARGA DIGITAL · PAGO ÚNICO", legal: "LEGAL", item: "1 elemento", items: "{count} elementos", selected: "{count} seleccionado", none: "Ningún elemento seleccionado", playing: "Reproduciendo: {title}" },
      taskbar: { online: "ONLINE" },
      cart: { title: "CARRITO", close: "Cerrar carrito", subtitle: "Carpetas seleccionadas", clear: "Vaciar carrito", empty: "Aquí todavía no hay carpetas.", emptyHint: "Abre una carpeta y añade la que quieras comprar.", browse: "Volver al catálogo", purchases: "Abrir mis compras", purchasesAria: "Abrir mis compras (abre en una pestaña nueva)", item: "Carpeta digital", bundle: "Pack completo", remove: "Eliminar", subtotal: "Subtotal", delivery: "Descarga digital · Sin gastos de envío", checkout: "Continuar al pago" },
      checkout: { titlebar: "REVISAR COMPRA", title: "Revisa tu pedido.", desc: "Comprueba las carpetas antes de continuar al pago seguro.", order: "Tu pedido", unit: "Producto digital", taxes: "Precio total · impuestos incluidos", confirmations: "Confirmaciones de compra", privacyLead: "Tus datos se tratarán para gestionar el pedido según la", privacy: "política de privacidad", termsConsent: "He leído y acepto las condiciones de compra y la licencia digital. Entiendo que los archivos fuente no se pueden compartir, publicar ni revender.", terms: "Condiciones de compra", license: "Licencia digital", supplyConsent: "Solicito la entrega inmediata del contenido digital y reconozco que, cuando comience la descarga o el acceso, perderé el derecho de desistimiento, sin perjuicio de mis derechos legales por falta de conformidad.", required: "Marca las dos casillas para continuar.", total: "Total", paySecure: "CONTINUAR AL CHECKOUT", payhipNote: "El correo que indiques se usa para enviarte el recibo y la descarga. No necesitas crear una cuenta. El consentimiento para recibir novedades es opcional y se solicita por separado. Todavía no se realizará ningún cobro.", back: "Volver al carrito" },
      legalUi: { folderKicker: "SISTEMA / LEGAL_Y_PRIVACIDAD", folderTitle: "Legal y privacidad", folderLead: "Consulta las condiciones de compra, la política de privacidad, la licencia y el resto de documentos de la tienda.", name: "Documento", type: "Tipo", description: "Qué contiene", access: "Acción", public: "Público", open: "Abrir", sections: "EN ESTE ARCHIVO", system: "DOCUMENTO DEL SISTEMA", updated: "Última actualización", version: "Versión" },
      dialog: { close: "Cerrar" },
      audio: { play: "Reproducir", pause: "Pausar", close: "Cerrar reproductor", unavailable: "No se ha podido cargar esta muestra de audio." },
      messages: { added: "{name} añadido al carrito.", duplicate: "Esa carpeta ya está en el carrito.", bundleContains: "El pack completo ya contiene esa carpeta.", bundleReplaced: "El pack completo ha sustituido las carpetas que ya incluía.", fileIncluded: "Este archivo se entrega dentro del ZIP." }
    },
    en: {
      meta: { title: "SUBSUELO FS — Sound direction for instrumentals", description: "Six folders for dark instrumentals: 180 prompts, 60 negative prompts, ES/EN guides and 24 MP3s. Complete pack for €59; free sampler available." },
      pricing: { opening: "Opening price until 30 Jul 2026" },
      a11y: { skip: "Skip to files", app: "SUBSUELO File System", appMenu: "Application menu", path: "Current path", language: "Language", sidebar: "Archive navigation", inspector: "Details", mobileNav: "Mobile navigation" },
      titlebar: { browser: "FILE BROWSER", store: "DIGITAL STORE", open: "STORE OPEN" },
      menu: { file: "File", view: "View", play: "Play", guides: "Guides", help: "Help", purchases: "My purchases", purchasesAria: "My purchases (opens in a new tab)", cart: "Cart" },
      toolbar: { back: "Back", forward: "Forward", up: "Up", sidebar: "Open navigation", search: "Search the archive…", viewGroup: "View", grid: "Icon view", list: "List view" },
      sidebar: { language: "LANGUAGE", quick: "QUICK ACCESS", sounds: "BY SOUND", info: "INFO", home: "All folders", demos: "Audio examples", bundle: "Complete pack", sampler: "Free sampler", samplerAria: "Download the free sampler (opens in a new tab)", purchases: "My purchases", purchasesAria: "My purchases (opens in a new tab)", xAria: "@subsuelofs on X (opens in a new tab)", cart: "Cart", guides: "Production guides", help: "What each folder includes", legalFolder: "Legal and privacy" },
      mobile: { home: "Home", pack: "Pack", demos: "Demos", help: "Help", cart: "Cart" },
      home: {
        kicker: "SUBSUELO / CATALOGUE", title: "One genre. 30 ways in.", lead: "Pick the sound you want to make. Each folder gives you 30 prompts that change the drums, bass, lead source and space while staying inside one coherent genre.", hint: "Click a folder to open it", mobileHint: "Tap a folder to open it", docs: "MORE INFORMATION", helpFile: "WHAT_EACH_FOLDER_INCLUDES.txt", demoFile: "HEAR_THE_EXAMPLES.audio", guidesFile: "PRODUCTION_GUIDES.folder", bundleFile: "COMPLETE_PACK.folder", legalFile: "LEGAL_AND_PRIVACY.folder", empty: "No results for this search.", emptyHint: "Try another name or clear the search.", clear: "Clear search",
        offerAria: "Complete pack offer", offerKicker: "COMPLETE PACK / 6 FOLDERS", offerTitle: "The full current catalogue in one ZIP.", offerText: "180 prompts, 60 negative prompts, guides in English and Spanish, and 24 MP3 references.", offerCompatibility: "Prompts are delivered in English, ready to paste into Styles; optional negative prompts go in Suno's Exclude field. SUBSUELO FS is independent and is not affiliated with Suno.", offerSeparate: "€90 separately", offerPrice: "€59", offerSaving: "SAVE €31", offerOpening: "Opening price until 30.07.2026", offerAction: "BUY COMPLETE PACK · €59",
        samplerAction: "TRY FREE SAMPLER · €0", samplerAria: "Get the free sampler (opens in a new tab)"
      },
      categories: { trap: "Ritual trap", garage: "Dark UK garage", jungle: "Degraded jungle", hiphop: "Abstract hip-hop", dub: "Dub hip-hop", noir: "Noir hip-hop" },
      inspector: { select: "Select a folder", selectHint: "Its sound, contents, audio example and price will appear here.", open: "Open folder", play: "Hear example", add: "Add", prompts: "{count} prompts", negatives: "{count} negative prompts", guide: "Spanish guide + English guide", demo: "1 audio example", demos: "{count} audio examples", folders: "{count} folders" },
      product: { edition: "PROMPT FOLDER", demoFolderName: "AUDIO_EXAMPLES", add: "Add to cart", buy: "Buy now", play: "Hear 30 sec", sampler: "Try free sampler · €0", contents: "Download contents", name: "Name", type: "Type", folder: "Folder", description: "Contents", availability: "Access", purchase: "Download available after payment", files: "{count} items", included: "Included in the download", available: "Available after purchase", public: "Public information", details: "View information", open: "Open", listen: "Listen", readme: "Download summary, file organisation and first steps.", promptsFolder: "PDF containing every prompt in English, numbered and ready to copy.", negativesFolder: "Separate PDF containing every negative prompt in English, numbered and ready to copy.", guideFile: "Shows where each text goes, how to work with or without vocals, and what each control changes.", demosFolder: "Folder containing 4 MP3 files for listening and reference. The public player offers one preview.", audioIncluded: "Full MP3 included for listening and reference after payment.", previewDescription: "Public 30-second excerpt from one of the included audio files.", demosIncluded: "4 MP3 files included + public preview", licenseFile: "Usage terms for prompts, negative prompts and audio examples.", esFolder: "Documents in Spanish; the copy-ready prompts remain in English.", enFolder: "Documents in English; the copy-ready prompts remain in English.", format: "Format", language: "Language", content: "Content", english: "English", spanishDocs: "Spanish · prompts in English", englishDocs: "English · prompts in English", afterPurchase: "Delivered inside the download after payment.", review: "You can check what it contains and its language before buying.", mainPrompt: "Complete prompt in English, ready to copy.", negativePrompt: "English list for the Exclude field.", audioPreview: "Public preview", previewOnly: "Listen only", notInZip: "The public player is a preview; the purchase includes 4 MP3 reference tracks." },
      editorial: { kicker: "FOLDER PROFILE", title: "One genre, 30 approaches", core: "Core sound", changes: "What changes", fit: "A good fit if you want", demo: "The preview you hear", compare: "Compare every folder", negativeGuide: "Understand negative prompts", more: "Related folders" },
      help: { kicker: "HELP / START_HERE.txt", title: "What each folder includes", lead: "Every purchase contains an ES folder, an EN folder and AUDIO_EXAMPLES. The prompts are ready to copy in English; the guides explain where each block goes and how optional negative prompts work.", prompt: "PROMPTS", promptText: "The PROMPTS PDF contains every prompt in the folder. Choose one and paste it in full into the Styles field.", negative: "NEGATIVE PROMPTS", negativeText: "The NEGATIVE PROMPTS PDF contains lists for the Exclude field. Use one when you want to avoid vocals or another specific element named by the list.", guide: "GUIDE", guideText: "There is one Spanish guide and the same guide in English. It shows where each block goes, how to work with or without vocals, and what each control changes.", demos: "AUDIO EXAMPLES", demosText: "The download includes 4 MP3 files as sound references. They are not licensed for sampling, release or reuse.", direction: "Choose one prompt and paste it into Styles", outside: "Use Exclude only when you want to remove something", together: "You only need one prompt to begin. A negative prompt is optional and is used to exclude something specific.", delivery: "After payment, you receive the ES, EN and AUDIO_EXAMPLES folders." },
      demos: { kicker: "AUDIO / PREVIEWS", title: "Hear every folder before you choose.", lead: "Play one public preview from each collection. Every folder also includes four full MP3 references that show its sound in practice.", track: "Track", edition: "Folder", length: "Length", action: "Action", open: "Open folder" },
      bundle: { kicker: "COMPLETE PACK", title: "All six folders. One download.", lead: "180 prompts, 60 negative prompts, guides in English and Spanish, and 24 MP3 references. This pack contains the six collections listed below; future releases are separate.", members: "Included folders", add: "Add complete pack", item: "Included in the pack", folderCount: "{count} folders", saving: "{separate} separately · save {saving}" },
      status: { delivery: "DIGITAL DOWNLOAD · ONE-TIME PAYMENT", legal: "LEGAL", item: "1 item", items: "{count} items", selected: "{count} selected", none: "No item selected", playing: "Playing: {title}" },
      taskbar: { online: "ONLINE" },
      cart: { title: "CART", close: "Close cart", subtitle: "Selected folders", clear: "Clear cart", empty: "No folders here yet.", emptyHint: "Open a folder and add the one you want to buy.", browse: "Back to catalogue", purchases: "Open my purchases", purchasesAria: "Open my purchases (opens in a new tab)", item: "Digital folder", bundle: "Complete pack", remove: "Remove", subtotal: "Subtotal", delivery: "Digital download · No shipping", checkout: "Continue to checkout" },
      checkout: { titlebar: "REVIEW ORDER", title: "Review your order.", desc: "Check the folders before continuing to secure checkout.", order: "Your order", unit: "Digital product", taxes: "Final price · taxes included", confirmations: "Purchase confirmations", privacyLead: "Your data will be processed to manage the order as described in the", privacy: "privacy notice", termsConsent: "I have read and accept the purchase terms and digital licence. I understand that the source files may not be shared, published or resold.", terms: "Purchase terms", license: "Digital licence", supplyConsent: "I request immediate delivery of the digital content and acknowledge that, when download or access begins, I will lose the right of withdrawal, without affecting my statutory rights if the content is not in conformity.", required: "Tick both boxes to continue.", total: "Total", paySecure: "CONTINUE TO CHECKOUT", payhipNote: "The email you enter is used to send your receipt and download. No account is required. Consent to receive product news is optional and requested separately. No charge is made yet.", back: "Back to cart" },
      legalUi: { folderKicker: "SYSTEM / LEGAL_AND_PRIVACY", folderTitle: "Legal and privacy", folderLead: "Read the purchase terms, privacy policy, licence and the store's other documents.", name: "Document", type: "Type", description: "Contents", access: "Action", public: "Public", open: "Open", sections: "IN THIS FILE", system: "SYSTEM DOCUMENT", updated: "Last updated", version: "Version" },
      dialog: { close: "Close" },
      audio: { play: "Play", pause: "Pause", close: "Close player", unavailable: "This audio preview could not be loaded." },
      messages: { added: "{name} added to cart.", duplicate: "That folder is already in your cart.", bundleContains: "The complete pack already contains that folder.", bundleReplaced: "The complete pack replaced the folders it already included.", fileIncluded: "This file is delivered inside the ZIP." }
    }
  };

  const legalDocuments = {
    es: {
      notice: {
        file: "AVISO_LEGAL.txt",
        title: "Aviso legal",
        description: "Identidad de la empresa, actividad, propiedad intelectual y contacto.",
        updated: legalProfile.updated.es,
        version: legalVersions.notice,
        sections: [
          { title: "Quién opera la tienda", paragraphs: [`${legalProfile.brand} es una marca comercial operada por ${legalProfile.legalName}, sociedad limitada unipersonal con NIF ${legalProfile.taxId} y domicilio social en ${legalProfile.address}.`, `Inscripción: ${legalProfile.registry}. EUID: ${legalProfile.euid}.`] },
          { title: "Contacto", paragraphs: [`Cuestiones generales o legales: ${legalProfile.legalEmail}. Pedidos, descargas y facturación: ${legalProfile.supportEmail}. Privacidad: ${legalProfile.privacyEmail}.`] },
          { title: "Actividad y precios", paragraphs: ["La tienda vende carpetas digitales con prompts, negative prompts, guías y archivos de audio cuando así se indique en la ficha. Antes del pago se muestra el contenido exacto, formato, idioma, precio total e impuestos aplicables. Las descargas no tienen gastos de envío."] },
          { title: "Uso del sitio", paragraphs: ["El sitio puede utilizarse para consultar el catálogo, escuchar muestras y comprar los productos publicados. No está permitido interferir en su funcionamiento, intentar acceder a contenido restringido ni utilizarlo con fines ilícitos. La versión de las condiciones mostrada al confirmar el pedido será la aplicable a esa compra."] },
          { title: "Propiedad intelectual", paragraphs: [`La marca, el diseño, los textos, la selección de contenidos y los archivos originales pertenecen a ${legalProfile.legalName} o se utilizan con autorización. La compra concede únicamente la licencia indicada para el producto; no transmite la propiedad intelectual de los archivos fuente.`] },
          { title: "Disponibilidad y responsabilidad", paragraphs: [`Pueden producirse interrupciones técnicas o de mantenimiento. Esto no limita el derecho del comprador a recibir lo contratado ni las soluciones previstas para archivos defectuosos, incompletos o no entregados. Para comunicar un error o un posible uso ilícito, escribe a ${legalProfile.legalEmail}.`] },
          { title: "Ley aplicable", paragraphs: ["Se aplica la legislación española y europea que corresponda. Las personas consumidoras conservan los derechos y fueros que les reconozca la normativa imperativa de su lugar de residencia."] }
        ]
      },
      privacy: {
        file: "PRIVACIDAD.txt",
        title: "Privacidad",
        description: "Datos tratados, finalidades, proveedores, conservación y derechos.",
        updated: legalProfile.updated.es,
        version: legalVersions.privacy,
        sections: [
          { title: "Responsable", paragraphs: [`El responsable del tratamiento es ${legalProfile.legalName}, NIF ${legalProfile.taxId}, con domicilio en ${legalProfile.address}. Contacto de privacidad: ${legalProfile.privacyEmail}.`] },
          { title: "Qué datos tratamos y de dónde proceden", paragraphs: ["Podemos tratar datos de identificación y contacto, facturación, productos adquiridos, importe y estado del pago, descargas, consultas, preferencias de comunicación y datos técnicos básicos de conexión, dispositivo y seguridad. Proceden del propio usuario y de los servicios utilizados para tramitar el pedido, el pago y la entrega.", "Los datos completos de la tarjeta son tratados por el proveedor de pago habilitado. La tienda recibe la confirmación y los datos de operación necesarios para gestionar el pedido. Los datos marcados como obligatorios son necesarios para contratar; sin ellos no podremos procesar la compra."] },
          { title: "Cuenta de cliente y acceso a compras", paragraphs: ["No hace falta crear una cuenta para comprar. Payhip solicita un correo para enviar el recibo y el enlace de descarga. De forma opcional, el comprador puede crear una cuenta de cliente para reunir sus compras en una biblioteca; una compra anterior puede vincularse desde su recibo o página de descarga.", `Esta web no guarda contraseñas ni ofrece un sistema propio de inicio de sesión. Las incidencias de acceso y descarga se atienden en ${legalProfile.supportEmail}.`] },
          { title: "Para qué y con qué base jurídica", paragraphs: ["No pedimos consentimiento para tratar los datos imprescindibles de un pedido."], list: ["Compra, pago, factura, entrega y soporte asociado: ejecución del contrato o medidas precontractuales.", "Obligaciones fiscales, contables y de consumo: cumplimiento de obligaciones legales.", "Seguridad, prevención del fraude y defensa de reclamaciones: interés legítimo en proteger la tienda y sus usuarios.", "Novedades comerciales y tecnologías no necesarias: consentimiento, revocable en cualquier momento."] },
          { title: "Comunicaciones comerciales", paragraphs: ["La compra y el marketing están separados. El checkout pide permiso mediante una casilla no premarcada a todos los compradores, con independencia de su país. No aceptar no impide comprar ni recibir el pedido. El consentimiento puede retirarse desde el enlace de baja de cada mensaje o escribiendo al contacto de privacidad."] },
          { title: "Proveedores y transferencias", paragraphs: ["GitHub Pages (GitHub, Inc.) aloja el sitio estático. OVHcloud registra el dominio, gestiona la zona DNS y presta el correo Zimbra. Payhip Limited (Reino Unido) ofrece el checkout, la biblioteca opcional de cliente, los recibos y la entrega digital. Stripe procesa los datos necesarios para cobrar, prevenir el fraude y confirmar la operación. No vendemos ni alquilamos datos personales.", "Los datos podrán comunicarse a asesores profesionales y autoridades cuando exista una obligación legal. Si un proveedor o subencargado accede a datos fuera del Espacio Económico Europeo, se aplicará una decisión de adecuación, cláusulas contractuales tipo u otra garantía válida. El checkout muestra los enlaces a la información de privacidad de Payhip y del proveedor de pago."] },
          { title: "Conservación", paragraphs: ["Los pedidos, facturas y documentación contable se conservarán durante seis años, sin perjuicio de otros plazos legales aplicables. Las pruebas de contratación y consentimiento conservarán el identificador del pedido, fecha, idioma y versión del texto aceptado durante el plazo necesario para acreditar la operación y atender responsabilidades. Las consultas se conservarán hasta resolverlas y, después, hasta dos años salvo que formen parte de un expediente contractual. Los datos comerciales se tratarán hasta retirar el consentimiento; se conservará la información mínima necesaria para respetar la baja."] },
          { title: "Derechos", paragraphs: [`Puedes solicitar acceso, rectificación, supresión, oposición, limitación o portabilidad y retirar un consentimiento escribiendo a ${legalProfile.privacyEmail}. Responderemos en el plazo máximo de un mes desde la recepción; cuando la complejidad o el número de solicitudes lo requiera, el plazo puede ampliarse otros dos meses y se informará durante el primer mes. Podremos pedir información adicional si es necesaria para verificar tu identidad. También puedes reclamar ante la Agencia Española de Protección de Datos en https://www.aepd.es.`] },
          { title: "Decisiones automatizadas", paragraphs: [`${legalProfile.legalName} no adopta decisiones exclusivamente automatizadas que produzcan efectos jurídicos o similares sobre el comprador. Las herramientas de plataforma o pago pueden generar indicadores de riesgo para revisar la seguridad de una operación conforme a sus propias políticas.`] }
        ]
      },
      terms: {
        file: "CONDICIONES_DE_COMPRA.txt",
        title: "Condiciones de compra",
        description: "Pedido, precio, entrega digital, desistimiento, garantía y reclamaciones.",
        updated: legalProfile.updated.es,
        version: legalVersions.terms,
        sections: [
          { title: "Vendedor, plataforma, producto y compatibilidad", paragraphs: [`${legalProfile.legalName}, titular de ${legalProfile.brand}, ofrece el producto, concede la licencia adicional directa y atiende al comprador. El cobro, el checkout alojado y la entrega se realizan mediante Payhip. En ese checkout también se muestran y aceptan las condiciones propias de Payhip; ambas relaciones contractuales deben leerse conjuntamente.`, "Cada ficha indica los archivos que se entregan, su cantidad, idioma, formato y licencia. Los prompts preparados para copiar están en inglés; las explicaciones se entregan en los idiomas indicados. Los documentos están pensados para un servicio de generación musical que admita instrucciones de estilo en inglés y, de forma opcional, un campo para exclusiones. El comprador necesita conexión, espacio suficiente y software compatible para descargarlos, abrirlos y conservarlos."] },
          { title: "Contenido y ejemplos de audio", paragraphs: ["La ficha del producto determina qué archivos forman parte de la descarga. Cuando se incluyen ejemplos de audio, se entregan para escucha y referencia bajo las limitaciones de la licencia digital. La muestra pública del reproductor puede ser una versión abreviada y no concede permiso para reutilizar ese audio."] },
          { title: "Precio, pago y pasos del pedido", paragraphs: ["Los precios se muestran en euros como importe total para el consumidor, con los impuestos aplicables incluidos y sin gastos de envío. El resumen final del checkout alojado es el importe vinculante antes de pagar. Los métodos disponibles aparecen allí y el cobro se realiza únicamente al confirmar la operación.", "El comprador selecciona productos, revisa el carrito, corrige o elimina elementos, consulta las condiciones y la licencia, marca las confirmaciones requeridas en esta web y vuelve a aceptarlas en el checkout. Antes del botón final de pago puede corregir los datos o abandonar el proceso. El contrato puede formalizarse en español o inglés.", `Payhip envía el recibo y el enlace de descarga. ${legalProfile.legalName} conserva la información del pedido y las respuestas de checkout disponibles para atender la compra y acreditar las condiciones aceptadas. Puede solicitarse una copia a ${legalProfile.supportEmail}.`] },
          { title: "Entrega digital y acceso posterior", paragraphs: [`Después de confirmarse el pago, Payhip habilita la descarga y envía un enlace al correo indicado sin demora injustificada. No es obligatorio crear una cuenta. La cuenta de cliente opcional permite reunir compras en una biblioteca. El límite operativo actual es de cinco intentos de descarga por archivo; si se agotan, el enlace falla, falta un archivo o la descarga está dañada, escribe a ${legalProfile.supportEmail} para restablecer el acceso sin coste.`] },
          { title: "Desistimiento", paragraphs: ["Antes de que comience el suministro digital, la persona consumidora dispone del plazo legal de catorce días cuando resulte aplicable. La entrega inmediata solo comenzará si marca una casilla separada, solicita expresamente que el suministro empiece durante ese plazo y reconoce que perderá el derecho de desistimiento una vez iniciado. La confirmación del pedido reproducirá esa declaración en un soporte duradero."], checkbox: "Solicito el suministro inmediato del contenido digital durante el plazo de desistimiento y reconozco que, una vez iniciado, perderé mi derecho de desistimiento." },
          { title: "Modelo de desistimiento", paragraphs: [`Si el derecho sigue vigente, puedes escribir a ${legalProfile.supportEmail} indicando: «Comunico mi desistimiento del pedido [número], contratado el [fecha]», junto con tu nombre, dirección y fecha de la solicitud. La firma solo es necesaria si se envía en papel.`] },
          { title: "Archivos defectuosos o distintos de lo anunciado", paragraphs: ["La pérdida del desistimiento no elimina los derechos legales de conformidad. Para contenido digital suministrado una sola vez, el vendedor responde por faltas de conformidad manifestadas durante dos años. Si un producto está incompleto, dañado o no coincide con su descripción, el comprador puede pedir que se ponga en conformidad y, cuando corresponda, una reducción del precio o la resolución y el reembolso."] },
          { title: "Atención, reclamaciones y ley aplicable", paragraphs: [`Pedidos, descargas, facturas y reclamaciones: ${legalProfile.supportEmail}. La reclamación se responderá en el plazo más breve posible y, en todo caso, en un máximo de quince días. Si no queda resuelta, se informará de la entidad de resolución alternativa competente y de si la empresa participa en el procedimiento.`, "Se aplica la legislación española, sin privar al consumidor de la protección imperativa de su país de residencia ni imponerle tribunales distintos de los que le reconoce la normativa aplicable."] }
        ]
      },
      license: {
        file: "LICENCIA_DIGITAL.txt",
        title: "Licencia digital",
        description: "Uso de prompts, guías, resultados creados y ejemplos de audio.",
        updated: legalProfile.updated.es,
        version: legalVersions.license,
        sections: [
          { title: "Quién concede esta licencia adicional", paragraphs: [`${legalProfile.legalName}, NIF ${legalProfile.taxId}, como titular de los derechos sobre el material original, concede directamente esta licencia al comprador identificado en el pedido. Se aplica a los prompts, negative prompts, guías y demás documentos originales incluidos en la compra.`] },
          { title: "Relación con el checkout", paragraphs: ["Esta licencia es una autorización adicional del titular de los derechos y se acepta antes del pago. Se suma a las condiciones que Payhip presenta en su checkout y no modifica las obligaciones independientes que existan entre el comprador y Payhip. En lo relativo a los derechos de NOMBRE DIRECCION, S.L.U. sobre el material original, deja constancia de los usos que autorizamos expresamente."] },
          { title: "Uso permitido", paragraphs: ["Se concede una licencia mundial, no exclusiva, no transferible y válida durante la protección legal del material para copiar, usar y adaptar los prompts dentro del flujo de trabajo del comprador, tanto en proyectos propios personales como comerciales. Se permite conservar una copia de seguridad.", "Si compra una empresa, la licencia pertenece a esa persona jurídica. Sus empleados o colaboradores pueden utilizar los archivos únicamente para proyectos de esa empresa y no pueden conservarlos, compartirlos ni usarlos por cuenta propia."] },
          { title: "Resultados creados", paragraphs: ["El comprador puede usar los resultados que cree con los prompts en proyectos personales o comerciales en la medida en que lo permitan las condiciones del servicio de terceros empleado y siempre que disponga de derechos sobre cualquier texto, muestra, voz u otro material que aporte.", "No se garantiza que un resultado sea único, exclusivo o protegible por derechos de autor. Un mismo prompt puede venderse a otros compradores y producir resultados diferentes o similares."] },
          { title: "Ejemplos de audio", paragraphs: ["Los ejemplos de audio, aunque estén incluidos en la carpeta, se entregan solo para escucha y referencia. No pueden publicarse, distribuirse, sincronizarse, revenderse ni utilizarse como muestras, salvo que la ficha conceda expresamente una licencia distinta."] },
          { title: "No está permitido", paragraphs: ["La licencia no permite convertir los archivos originales o una adaptación mínima en un producto para terceros."], list: ["Compartir, regalar, publicar o revender los archivos fuente.", "Incorporarlos a otra colección, biblioteca, plantilla, curso o producto descargable.", "Sublicenciarlos o presentarlos como un pack creado por el comprador.", "Dar acceso a personas ajenas al comprador autorizado.", "Publicar prompts completos o fragmentos suficientes para reconstruir la colección."] },
          { title: "Titularidad y derechos legales", paragraphs: [`${legalProfile.legalName} conserva la propiedad intelectual de los archivos originales. La licencia no limita los derechos legales del consumidor si el producto es defectuoso o no coincide con lo comprado. Consultas sobre un uso concreto: ${legalProfile.legalEmail}.`] }
        ]
      },
      storage: {
        file: "COOKIES_Y_ALMACENAMIENTO.txt",
        title: "Cookies y almacenamiento",
        description: "Preferencias locales y tecnologías necesarias u opcionales de la tienda.",
        updated: legalProfile.updated.es,
        version: legalVersions.storage,
        sections: [
          { title: "Qué guarda esta versión", paragraphs: ["Este sitio no instala analítica ni publicidad. Solo usa almacenamiento local del navegador con tres claves funcionales: subsuelo-language para el idioma, subsuelo-view para la vista de iconos o lista y subsuelo-cart-v5 para el contenido del carrito. No tienen caducidad automática y permanecen hasta que el usuario borra los datos del sitio. No permiten completar un pago por sí solas."] },
          { title: "Tecnologías necesarias", paragraphs: ["Al continuar al checkout alojado de Payhip, esa plataforma y el proveedor de pago pueden utilizar cookies o tecnologías estrictamente necesarias para mantener la sesión, proteger el pago y entregar la compra. No se solicita consentimiento cuando sean indispensables para prestar el servicio pedido por el usuario."] },
          { title: "Analítica, personalización y publicidad", paragraphs: ["Actualmente no se cargan tecnologías de analítica, personalización o publicidad en este dominio. Si se activa una herramienta no necesaria, se explicará su finalidad y se solicitará consentimiento previo cuando la ley lo exija, sin opciones premarcadas."] },
          { title: "Servicios externos", paragraphs: ["Payhip y Stripe pueden utilizar tecnologías necesarias propias en sus páginas para mantener la sesión, proteger el pago y entregar la compra. El webmail y el correo profesional son prestados por OVHcloud/Zimbra."] },
          { title: "Cómo borrar los datos", paragraphs: [`Puedes borrar cookies y almacenamiento local desde la configuración del navegador. Al hacerlo pueden desaparecer el carrito, el idioma elegido o la sesión. Contacto: ${legalProfile.privacyEmail}.`] }
        ]
      },
      refund: {
        file: "DESISTIMIENTO_Y_REEMBOLSOS.txt",
        title: "Desistimiento y reembolsos",
        description: "Plazos, suministro inmediato, incidencias y modelo de solicitud.",
        updated: legalProfile.updated.es,
        version: legalVersions.refund,
        sections: [
          { title: "Antes de la descarga", paragraphs: ["Cuando resulte aplicable, la persona consumidora puede desistir durante catorce días desde la contratación mientras no haya comenzado el suministro digital. Para pedirlo, puede usar el modelo incluido abajo o enviar una declaración inequívoca."] },
          { title: "Suministro inmediato", paragraphs: ["La descarga inmediata solo se iniciará después de una solicitud expresa y separada, junto con el reconocimiento de que el derecho de desistimiento se pierde cuando comienza el suministro. Esa declaración y las condiciones aceptadas se incluirán en la confirmación que pueda conservarse."] },
          { title: "Reembolso", paragraphs: ["Si el desistimiento sigue vigente, el importe se devolverá sin demora indebida y, como máximo, en catorce días desde la comunicación. Se utilizará el mismo medio de pago, salvo acuerdo expreso distinto sin coste para el consumidor."] },
          { title: "Contenido defectuoso o no entregado", paragraphs: [`Si falta un archivo, está dañado, no coincide con la ficha o el enlace falla, escribe a ${legalProfile.supportEmail} con el número de pedido. Se intentará poner el contenido en conformidad sin coste ni demora indebida. Cuando legalmente corresponda, podrá solicitarse reducción del precio o resolución y reembolso. Estos derechos de conformidad no desaparecen por haber comenzado la descarga y, para un suministro único, cubren faltas manifestadas durante dos años.`] },
          { title: "Modelo de desistimiento", paragraphs: [`Destinatario: ${legalProfile.legalName}, ${legalProfile.address}, ${legalProfile.supportEmail}. «Comunico mi desistimiento del pedido [número], contratado el [fecha]. Nombre: [nombre]. Dirección: [dirección]. Fecha: [fecha]». La firma solo es necesaria si se envía en papel.`] }
        ]
      },
      accessibility: {
        file: "ACCESIBILIDAD.txt",
        title: "Accesibilidad",
        description: "Compromiso de acceso, alcance actual y canal para comunicar barreras.",
        updated: legalProfile.updated.es,
        version: legalVersions.accessibility,
        sections: [
          { title: "Compromiso", paragraphs: ["La tienda se diseña para poder utilizarse con teclado, ampliación de pantalla, contraste suficiente, movimiento reducido y tecnologías de apoyo. El catálogo, la información previa a la compra y las condiciones deben poder consultarse sin depender solo del color, el sonido o el ratón."] },
          { title: "Alcance", paragraphs: ["Esta declaración cubre la tienda y su proceso de compra. Los PDF descargables cuentan con texto seleccionable, pero todavía no están etiquetados de forma estructural para todos los lectores de pantalla; se revisarán antes de la publicación definitiva o se ofrecerá una alternativa textual equivalente."] },
          { title: "Comunicar una barrera", paragraphs: [`Si encuentras una barrera, indica la página, el dispositivo, el navegador y la ayuda técnica utilizada en un correo a ${legalProfile.supportEmail}. Confirmaremos la recepción y daremos una respuesta en un plazo razonable.`] },
          { title: "Preparación", paragraphs: ["Declaración preparada mediante revisión interna de navegación con teclado, foco, contraste, zoom y adaptación móvil. Se actualizará cuando cambie la plataforma de venta o se complete una auditoría externa."] }
        ]
      }
    },
    en: {
      notice: {
        file: "LEGAL_NOTICE.txt",
        title: "Legal notice",
        description: "Company identity, activity, intellectual property and contact details.",
        updated: legalProfile.updated.en,
        version: legalVersions.notice,
        sections: [
          { title: "Store operator", paragraphs: [`${legalProfile.brand} is a trading name operated by ${legalProfile.legalName}, a Spanish single-member limited company with tax ID ${legalProfile.taxId} and registered office at ${legalProfile.address}.`, `Registration: ${legalProfile.registry}. EUID: ${legalProfile.euid}.`] },
          { title: "Contact", paragraphs: [`General or legal matters: ${legalProfile.legalEmail}. Orders, downloads and invoices: ${legalProfile.supportEmail}. Privacy: ${legalProfile.privacyEmail}.`] },
          { title: "Activity and prices", paragraphs: ["The store sells digital folders containing prompts, negative prompts, guides and audio files where stated on the product page. Exact contents, format, language, final price and applicable taxes are shown before payment. Digital downloads have no shipping charge."] },
          { title: "Use of the site", paragraphs: ["The site may be used to browse the catalogue, hear previews and purchase published products. Interfering with its operation, attempting to access restricted content or using it unlawfully is prohibited. The version of the terms displayed when the order is confirmed applies to that purchase."] },
          { title: "Intellectual property", paragraphs: [`The brand, design, text, content selection and original files belong to ${legalProfile.legalName} or are used with permission. Purchase grants only the licence stated for the product and does not transfer intellectual property ownership of the source files.`] },
          { title: "Availability and liability", paragraphs: [`Maintenance or technical interruptions may occur. This does not restrict the buyer's right to receive the purchased product or the remedies available for defective, incomplete or undelivered files. Report errors or potentially unlawful use to ${legalProfile.legalEmail}.`] },
          { title: "Governing law", paragraphs: ["Spanish and applicable European law govern the store. Consumers retain any mandatory rights and jurisdiction protections granted by the law of their place of residence."] }
        ]
      },
      privacy: {
        file: "PRIVACY.txt",
        title: "Privacy",
        description: "Data, purposes, providers, retention and individual rights.",
        updated: legalProfile.updated.en,
        version: legalVersions.privacy,
        sections: [
          { title: "Controller", paragraphs: [`The controller is ${legalProfile.legalName}, tax ID ${legalProfile.taxId}, registered office at ${legalProfile.address}. Privacy contact: ${legalProfile.privacyEmail}.`] },
          { title: "Data we process and its source", paragraphs: ["We may process identification and contact details, billing information, purchased products, transaction amount and status, downloads, enquiries, communication preferences, and basic connection, device and security data. Data comes from the user and from services used to process the order, payment and delivery.", "Complete card details are handled by the enabled payment provider. The store receives payment confirmation and the transaction details needed to manage the order. Fields marked as required are needed to enter into the contract; without them, we cannot process the purchase."] },
          { title: "Customer account and purchase access", paragraphs: ["No account is required to buy. Payhip asks for an email address so it can send the receipt and download link. Buyers may optionally create a customer account to keep purchases together in a library; an earlier purchase can be linked from its receipt or download page.", `This website stores no passwords and provides no sign-in system of its own. Access and download issues are handled at ${legalProfile.supportEmail}.`] },
          { title: "Purposes and legal bases", paragraphs: ["Consent is not requested for processing that is necessary to fulfil an order."], list: ["Purchase, payment, invoice, delivery and related support: performance of the contract or pre-contractual steps.", "Tax, accounting and consumer obligations: compliance with legal duties.", "Security, fraud prevention and defence of claims: legitimate interest in protecting the store and its users.", "Marketing updates and non-essential technologies: consent, which may be withdrawn at any time."] },
          { title: "Marketing communications", paragraphs: ["Purchasing and marketing are separate. Checkout asks every buyer for permission through an unticked box, regardless of country. Refusing does not prevent a purchase or delivery. Consent can be withdrawn through the unsubscribe link in each message or by writing to the privacy contact."] },
          { title: "Providers and international transfers", paragraphs: ["GitHub Pages (GitHub, Inc.) hosts the static website. OVHcloud registers the domain, manages DNS and provides Zimbra email. Payhip Limited (United Kingdom) provides checkout, the optional customer library, receipts and digital delivery. Stripe processes the data needed to collect payment, prevent fraud and confirm the transaction. We do not sell or rent personal data.", "Data may be disclosed to professional advisers and public authorities where required by law. If a provider or sub-processor accesses data outside the European Economic Area, an adequacy decision, standard contractual clauses or another valid safeguard will apply. Checkout links to Payhip's and the payment provider's own privacy information."] },
          { title: "Retention", paragraphs: ["Orders, invoices and accounting records are retained for six years, without prejudice to other applicable legal periods. Contract and consent evidence retains the order identifier, date, language and accepted-text version for as long as needed to prove the transaction and address liabilities. Enquiries are kept until resolved and then for up to two years unless they form part of a contractual record. Marketing data is processed until consent is withdrawn; the minimum information needed to honour an opt-out is retained."] },
          { title: "Your rights", paragraphs: [`You may request access, correction, deletion, restriction, objection or portability, and withdraw consent, by writing to ${legalProfile.privacyEmail}. We will respond within one month of receipt. Where the request is complex or numerous, that period may be extended by a further two months and you will be informed within the first month. We may request additional information where needed to verify your identity. You may also lodge a complaint with the Spanish Data Protection Agency at https://www.aepd.es.`] },
          { title: "Automated decisions", paragraphs: [`${legalProfile.legalName} does not make solely automated decisions that produce legal or similarly significant effects on a buyer. Platform or payment tools may generate risk indicators to review transaction security under their own policies.`] }
        ]
      },
      terms: {
        file: "PURCHASE_TERMS.txt",
        title: "Purchase terms",
        description: "Orders, price, digital delivery, withdrawal, conformity and complaints.",
        updated: legalProfile.updated.en,
        version: legalVersions.terms,
        sections: [
          { title: "Seller, platform, product and compatibility", paragraphs: [`${legalProfile.legalName}, operator of ${legalProfile.brand}, offers the product, grants the direct additional licence and supports the buyer. Payment, hosted checkout and delivery are provided through Payhip. Payhip also presents its own terms for acceptance at that checkout; both contractual relationships should be read together.`, "Each product page states the supplied files, quantity, language, format and licence. Copy-ready prompts are in English; explanatory documents are supplied in the languages stated. The documents are intended for a music-generation service that accepts English style instructions and, optionally, a field for exclusions. The buyer needs an internet connection, sufficient storage and compatible software to download, open and retain them."] },
          { title: "Contents and audio examples", paragraphs: ["The product page determines which files are included in the download. Where audio examples are included, they are provided for listening and reference under the digital licence. The public player may use a shortened preview and does not grant permission to reuse that audio."] },
          { title: "Price, payment and ordering steps", paragraphs: ["Prices are shown in euros as the final consumer amount, including applicable taxes and with no shipping charge. The final hosted-checkout summary is the binding amount shown before payment. Available methods appear there and no charge is made until the buyer confirms the transaction.", "The buyer selects products, reviews the cart, corrects or removes items, reads the terms and licence, ticks the confirmations on this website and accepts them again at checkout. Before the final payment button, the buyer can correct details or leave the process. The contract may be concluded in Spanish or English.", `Payhip sends the receipt and download link. ${legalProfile.legalName} retains the available order information and checkout responses needed to support the purchase and evidence the accepted terms. A copy may be requested from ${legalProfile.supportEmail}.`] },
          { title: "Digital delivery and later access", paragraphs: [`After payment is confirmed, Payhip makes the download available and emails a link without undue delay. Creating an account is not required. The optional customer account keeps purchases together in a library. The current operational limit is five download attempts per file; if attempts run out, the link fails, a file is missing or a download is damaged, contact ${legalProfile.supportEmail} to have access restored at no charge.`] },
          { title: "Withdrawal rights", paragraphs: ["Before digital supply begins, consumers have the applicable statutory fourteen-day withdrawal period. Immediate delivery will only begin where a separate box is ticked to expressly request supply during that period and acknowledge that the withdrawal right will be lost once supply begins. The order confirmation will reproduce that declaration on a durable medium."], checkbox: "I request the immediate supply of the digital content during the withdrawal period and acknowledge that, once supply begins, I will lose my right of withdrawal." },
          { title: "Model withdrawal notice", paragraphs: [`Where the right still applies, write to ${legalProfile.supportEmail} stating: ‘I hereby withdraw from order [number], placed on [date]’, together with your name, address and request date. A signature is only required for a paper notice.`] },
          { title: "Defective or misdescribed files", paragraphs: ["Loss of the withdrawal right does not remove statutory conformity rights. For digital content supplied once, the seller is liable for a lack of conformity that becomes apparent within two years. If a product is incomplete, damaged or does not match its description, the buyer may request that it be brought into conformity and, where appropriate, a price reduction or termination and refund."] },
          { title: "Support, complaints and governing law", paragraphs: [`Orders, downloads, invoices and complaints: ${legalProfile.supportEmail}. A complaint will be answered as soon as possible and in all cases within fifteen days. If it remains unresolved, information on the competent alternative dispute resolution body and whether the company will participate will be provided.`, "Spanish law applies without depriving a consumer of mandatory protection in their country of residence or imposing courts other than those available under applicable law."] }
        ]
      },
      license: {
        file: "DIGITAL_LICENSE.txt",
        title: "Digital licence",
        description: "Use of prompts, guides, created results and audio examples.",
        updated: legalProfile.updated.en,
        version: legalVersions.license,
        sections: [
          { title: "Who grants this additional licence", paragraphs: [`${legalProfile.legalName}, tax ID ${legalProfile.taxId}, as owner of the rights in the original material, grants this licence directly to the buyer identified in the order. It covers the prompts, negative prompts, guides and other original documents included in the purchase.`] },
          { title: "Relationship with checkout terms", paragraphs: ["This licence is an additional authorisation from the rights holder and is accepted before payment. It supplements the terms presented by Payhip at checkout and does not change any independent obligations between the buyer and Payhip. As regards NOMBRE DIRECCION, S.L.U.'s rights in the original material, it records the uses we expressly authorise."] },
          { title: "Permitted use", paragraphs: ["A worldwide, non-exclusive, non-transferable licence is granted for the legal term of protection to copy, use and adapt the prompts within the buyer's workflow, in the buyer's own personal or commercial projects. One backup copy may be kept.", "Where a company purchases the product, the licence belongs to that legal entity. Employees and contractors may use the files solely for that company's projects and may not keep, share or use them independently."] },
          { title: "Created results", paragraphs: ["The buyer may use results created with the prompts in personal or commercial projects to the extent permitted by the terms of the third-party service used and provided that the buyer holds the necessary rights to any supplied text, samples, voices or other material.", "The licence does not guarantee that a result will be unique, exclusive or protected by copyright. The same prompt may be sold to other buyers and may produce different or similar results."] },
          { title: "Audio examples", paragraphs: ["Audio examples are supplied for listening and reference only, even where included in the folder. They may not be released, distributed, synchronised, resold or used as samples unless the product page expressly grants a separate licence."] },
          { title: "Prohibited uses", paragraphs: ["The licence does not allow the original files or a minor adaptation to be turned into a product for third parties."], list: ["Sharing, giving away, publishing or reselling source files.", "Including them in another collection, library, template, course or downloadable product.", "Sublicensing them or presenting them as the buyer's own prompt pack.", "Giving access to anyone outside the authorised purchaser.", "Publishing complete prompts or enough material to reconstruct the collection."] },
          { title: "Ownership and statutory rights", paragraphs: [`${legalProfile.legalName} retains intellectual property rights in the original files. This licence does not restrict statutory consumer rights where a product is defective or does not match the purchase. Specific licensing questions: ${legalProfile.legalEmail}.`] }
        ]
      },
      storage: {
        file: "COOKIES_AND_STORAGE.txt",
        title: "Cookies and storage",
        description: "Local preferences and necessary or optional store technologies.",
        updated: legalProfile.updated.en,
        version: legalVersions.storage,
        sections: [
          { title: "What this version stores", paragraphs: ["This website installs no analytics or advertising. It only uses three functional browser-local-storage keys: subsuelo-language for the language, subsuelo-view for icon or list view, and subsuelo-cart-v5 for cart contents. They have no automatic expiry and remain until the user clears site data. They cannot complete a payment by themselves."] },
          { title: "Necessary technologies", paragraphs: ["When continuing to Payhip's hosted checkout, that platform and the payment provider may use strictly necessary cookies or similar technologies to maintain the session, secure payment and deliver the purchase. Consent is not requested where they are essential to provide the service requested by the user."] },
          { title: "Analytics, personalisation and advertising", paragraphs: ["No analytics, personalisation or advertising technologies currently load on this domain. If a non-essential tool is enabled, its purpose will be explained and prior consent requested where the law requires it, with no option pre-selected."] },
          { title: "External services", paragraphs: ["Payhip and Stripe may use necessary technologies on their own pages to maintain the session, secure payment and deliver the purchase. Professional webmail and email are provided by OVHcloud/Zimbra."] },
          { title: "Removing stored data", paragraphs: [`Cookies and local storage can be removed through browser settings. Doing so may clear the cart, selected language or active session. Contact: ${legalProfile.privacyEmail}.`] }
        ]
      },
      refund: {
        file: "WITHDRAWAL_AND_REFUNDS.txt",
        title: "Withdrawal and refunds",
        description: "Deadlines, immediate supply, delivery problems and model notice.",
        updated: legalProfile.updated.en,
        version: legalVersions.refund,
        sections: [
          { title: "Before download", paragraphs: ["Where applicable, a consumer may withdraw within fourteen days of contracting while digital supply has not begun. The model below may be used, or any other unequivocal statement may be sent."] },
          { title: "Immediate supply", paragraphs: ["Immediate download begins only after a separate express request and acknowledgement that the withdrawal right is lost once supply starts. That declaration and the accepted terms will be reproduced in a confirmation that can be retained."] },
          { title: "Refund", paragraphs: ["Where the withdrawal right remains available, payment will be returned without undue delay and no later than fourteen days after notice. The same payment method will be used unless another method is expressly agreed at no cost to the consumer."] },
          { title: "Defective or undelivered content", paragraphs: [`Missing, damaged, misdescribed files or failed links should be reported to ${legalProfile.supportEmail} with the order number. The content will be brought into conformity without charge or undue delay. Where the law provides, a price reduction or termination and refund may be requested. Conformity rights are not lost when download begins and, for one-off supply, cover defects appearing within two years.`] },
          { title: "Model withdrawal notice", paragraphs: [`To: ${legalProfile.legalName}, ${legalProfile.address}, ${legalProfile.supportEmail}. “I hereby withdraw from order [number], placed on [date]. Name: [name]. Address: [address]. Date: [date].” A signature is required only for a paper notice.`] }
        ]
      },
      accessibility: {
        file: "ACCESSIBILITY.txt",
        title: "Accessibility",
        description: "Access commitment, current scope and barrier-reporting channel.",
        updated: legalProfile.updated.en,
        version: legalVersions.accessibility,
        sections: [
          { title: "Commitment", paragraphs: ["The store is designed for keyboard use, screen magnification, sufficient contrast, reduced motion and assistive technologies. The catalogue, pre-purchase information and terms should not depend on colour, sound or mouse use alone."] },
          { title: "Scope", paragraphs: ["This statement covers the store and purchase flow. Downloadable PDFs contain selectable text, but are not yet structurally tagged for every screen reader; they will be reviewed before final publication or an equivalent text alternative will be offered."] },
          { title: "Report a barrier", paragraphs: [`When reporting a barrier, include the page, device, browser and assistive technology used in an email to ${legalProfile.supportEmail}. Receipt will be acknowledged and a response provided within a reasonable period.`] },
          { title: "Preparation", paragraphs: ["This statement was prepared through an internal review of keyboard navigation, focus, contrast, zoom and mobile adaptation. It will be updated when the sales platform changes or an external audit is completed."] }
        ]
      }
    }
  };

  // Añadir una carpeta aquí actualiza automáticamente navegación, filtros y totales del pack.
  const catalog = [
    { id: "trap", sku: "TRAP-RITUAL", name: "Trap Ritual", price: 15, tone: "#713d46", tags: ["trap"], category: { es: "Trap ritual", en: "Ritual trap" }, counts: { prompts: 30, negatives: 10, demos: 4 }, description: { es: "30 formas distintas de construir trap ritual oscuro. Cambian la batería, el movimiento del 808, la fuente principal y el espacio sin salir de la misma familia sonora.", en: "30 distinct routes into dark ritual trap. The drum pocket, 808 movement, lead source and space change from prompt to prompt without leaving the genre." }, demo: { title: "Ash Circle", src: "./audio/trap-ritual-ash-circle-preview.mp3", durationLabel: "00:30", files: ["001_ASH_CIRCLE_A.mp3", "001_ASH_CIRCLE_B.mp3", "018_SMOKE_SCRIPT_A.mp3", "018_SMOKE_SCRIPT_B.mp3"] } },
    { id: "garage", sku: "GARAJE-OSCURO", name: "Garaje Oscuro", price: 15, tone: "#425763", tags: ["garage"], category: { es: "Garage oscuro", en: "Dark UK garage" }, counts: { prompts: 30, negatives: 10, demos: 4 }, description: { es: "30 bases de UK garage oscuro con patrones 2-step, swing humano, subgrave y ambiente urbano. Cada una cambia la batería, el bajo, el motivo y el espacio.", en: "30 dark UK garage beats built on 2-step patterns, human swing, sub-bass and urban space. Each prompt changes the drums, bass movement, main motif and use of space." }, demo: { title: "Alley Pressure", src: "./audio/garaje-oscuro-alley-pressure-preview.mp3", durationLabel: "00:30", files: ["001_ALLEY_PRESSURE_A.mp3", "001_ALLEY_PRESSURE_B.mp3", "021_DUBBED_CORNER_A.mp3", "021_DUBBED_CORNER_B.mp3"] } },
    { id: "jungle", sku: "FOSSIL-JUNGLE", name: "Fossil Jungle", price: 15, tone: "#66705a", tags: ["jungle"], category: { es: "Jungle degradado", en: "Degraded jungle" }, counts: { prompts: 30, negatives: 10, demos: 4 }, description: { es: "30 piezas de jungle oscuro y degradado. Cambian la arquitectura de la batería, el comportamiento del bajo, la fuente de la muestra y el espacio.", en: "30 pieces of dark, degraded jungle. Break architecture, bass behaviour, sample source and space change from one prompt to the next while the genre stays intact." }, demo: { title: "Limestone Roll", src: "./audio/fossil-jungle-limestone-roll-preview.mp3", durationLabel: "00:30", files: ["001_LIMESTONE_ROLL_A.mp3", "001_LIMESTONE_ROLL_B.mp3", "020_CAVERN_CASSETTE_A.mp3", "020_CAVERN_CASSETTE_B.mp3"] } },
    { id: "low", sku: "LOW-PRESSURE", name: "Low Pressure", price: 15, tone: "#b34b35", tags: ["hiphop"], category: { es: "Hip-Hop abstracto", en: "Abstract hip-hop" }, counts: { prompts: 30, negatives: 10, demos: 4 }, description: { es: "30 bases pesadas, oscuras y texturales. Cada propuesta cambia la batería, el bajo, la fuente sonora o el espacio sin salir del hip-hop experimental abstracto.", en: "30 heavy, dark and textural abstract hip-hop beats. Each prompt changes the drums, bass, sound source or space while staying rooted in abstract experimental hip-hop." }, demo: { title: "Concrete Pulse", src: "./audio/low-pressure-concrete-pulse-preview.mp3", durationLabel: "00:30", files: ["001_CONCRETE_PULSE_A.mp3", "001_CONCRETE_PULSE_B.mp3", "019_CRACKED_RELAY_A.mp3", "019_CRACKED_RELAY_B.mp3"] } },
    { id: "abyss", sku: "ABYSS-DUB", name: "Abyss Dub", price: 15, tone: "#596352", tags: ["dub"], category: { es: "Hip-Hop dub", en: "Dub hip-hop" }, counts: { prompts: 30, negatives: 10, demos: 4 }, description: { es: "30 bases de hip-hop dub oscuro con batería de rap, subgrave enorme, acordes aislados y ecos profundos. Cambian el patrón, el bajo y la forma de mezclar el espacio.", en: "30 dark dub-inflected hip-hop beats with rap drums, immense sub-bass, isolated chords and deep echoes. The pocket, bass movement and use of space change across the folder." }, demo: { title: "Deep Chamber", src: "./audio/abyss-dub-deep-chamber-preview.mp3", durationLabel: "00:30", files: ["001_DEEP_CHAMBER_A.mp3", "001_DEEP_CHAMBER_B.mp3", "014_OCEAN_FLOOR_BREAK_A.mp3", "014_OCEAN_FLOOR_BREAK_B.mp3"] } },
    { id: "noir", sku: "NOIR-TAPES", name: "Noir Tapes", price: 15, tone: "#705e6b", tags: ["noir"], category: { es: "Hip-Hop noir", en: "Noir hip-hop" }, counts: { prompts: 30, negatives: 10, demos: 4 }, description: { es: "30 bases de hip-hop noir y boom bap abstracto construidas con muestras. Cambian el corte de batería, el bajo, la fuente y el tratamiento de cinta.", en: "30 sample-based noir hip-hop and abstract boom-bap beats. Each prompt changes the drum cut, bass, source material or tape treatment without leaving the collection's core sound." }, demo: { title: "Rain Evidence", src: "./audio/noir-tapes-rain-evidence-preview.mp3", durationLabel: "00:30", files: ["001_RAIN_EVIDENCE_A.mp3", "001_RAIN_EVIDENCE_B.mp3", "029_BURNT_ARCHIVE_A.mp3", "029_BURNT_ARCHIVE_B.mp3"] } }
  ];

  const productEditorial = Object.freeze({
    trap: {
      core: { es: "Trap oscuro e hipnótico con batería seca, 808 dominante y motivos rituales usados como textura.", en: "Dark, hypnotic trap with dry drums, a dominant 808 and ritual motifs used as texture." },
      changes: {
        es: ["pocket de bombo y caja", "densidad de hats", "movimiento del 808", "percusión orgánica o sampleada", "motivo principal", "mezcla seca, ancha o degradada"],
        en: ["kick and snare pocket", "hat density", "808 movement", "organic or sampled percussion", "main motif", "dry, wide or degraded mix"]
      },
      fit: { es: "Beats físicos y repetitivos donde el 808 manda y los detalles se mueven alrededor de un groove reconocible.", en: "Physical, repetitive beats where the 808 leads and the details move around a recognisable groove." },
      demo: { es: "Base seca y ceremonial con campana grave, golpes muy separados y un 808 que desciende al final de cada vuelta.", en: "A dry ceremonial beat with a low bell, widely spaced hits and an 808 that descends at the end of each cycle." },
      related: ["low", "noir"]
    },
    garage: {
      core: { es: "UK garage nocturno con swing humano, patrón 2-step, subgrave profundo y ambiente urbano mojado.", en: "Nocturnal UK garage with human swing, a 2-step pattern, deep sub-bass and wet urban ambience." },
      changes: {
        es: ["colocación del kick", "clap o snare", "shuffle de hats", "forma del bajo", "acordes o muestras", "calle, club o habitación"],
        en: ["kick placement", "clap or snare", "hat shuffle", "bass shape", "chords or samples", "street, club or room space"]
      },
      fit: { es: "Ritmos 2-step oscuros con movimiento humano, subgrave preciso y suficiente espacio entre golpes.", en: "Dark 2-step rhythms with human movement, precise sub-bass and enough space between hits." },
      demo: { es: "2-step seco y frontal, con subgrave corto, acordes mínimos y una acústica de calle estrecha.", en: "Dry, forward 2-step with short sub notes, minimal chords and the acoustics of a narrow street." },
      related: ["jungle", "abyss"]
    },
    jungle: {
      core: { es: "Jungle oscuro con breaks remuestreados, subgrave pesado, desgaste de cinta y muestras de archivo.", en: "Dark jungle with resampled breaks, heavy sub-bass, tape wear and archival samples." },
      changes: {
        es: ["familia del break", "forma de cortar la batería", "relación kick-break", "forma del subgrave", "fuente de la muestra", "desgaste y profundidad"],
        en: ["break family", "drum chopping", "kick-to-break relationship", "sub-bass shape", "sample source", "wear and depth"]
      },
      fit: { es: "Breaks rápidos con peso, textura envejecida y variaciones claras de corte sin perder el impulso del jungle.", en: "Fast breaks with weight, aged texture and clear chopping variations without losing the jungle drive." },
      demo: { es: "Batería recortada, rodante y seca, subgrave por pulsos y polvo de piedra en los agudos.", en: "Dry rolling break, pulsed sub-bass and stone dust in the high end." },
      related: ["garage", "low"]
    },
    low: {
      core: { es: "Hip-hop abstracto y pesado con subgrave frontal, batería de rap reconocible y diseño sonoro oscuro.", en: "Heavy abstract hip-hop with forward sub-bass, recognisable rap drums and dark sound design." },
      changes: {
        es: ["batería seca, rota o minimal", "sub sostenido o pulsado", "sample, drone o instrumento", "cantidad de silencio", "anchura de mezcla", "grado de suciedad"],
        en: ["dry, broken or minimal drums", "sustained or pulsed sub", "sample, drone or instrument", "amount of silence", "mix width", "degree of dirt"]
      },
      fit: { es: "Bases oscuras para rap con mucha presión en graves, pocos elementos y una textura distinta en cada propuesta.", en: "Dark rap beats with heavy low-end pressure, few elements and a different texture in each approach." },
      demo: { es: "Bombo recortado, subgrave por golpes y percusión grabada sobre cemento.", en: "Clipped kick, hit-by-hit sub-bass and percussion recorded on concrete." },
      related: ["trap", "noir"]
    },
    abyss: {
      core: { es: "Hip-hop de sound-system con subgrave enorme, batería espaciosa y ecos que transforman el entorno.", en: "Sound-system hip-hop with immense sub-bass, spacious drums and echoes that transform the environment." },
      changes: {
        es: ["pocket de hip-hop", "duración del sub", "objeto enviado al delay", "feedback y filtro", "profundidad de reverb", "espacio negativo"],
        en: ["hip-hop pocket", "sub-note length", "object sent to delay", "feedback and filter", "reverb depth", "negative space"]
      },
      fit: { es: "Baterías de rap amplias, bajos de sound-system y ecos profundos que acompañan el patrón sin sustituirlo.", en: "Wide rap drums, sound-system bass and deep echoes that support the pattern without replacing it." },
      demo: { es: "Hip-hop dub esencial: bombo corto, golpe de aro seco, subgrave sostenido y un acorde que desaparece en la profundidad.", en: "Essential dub hip-hop: short kick, dry rimshot, sustained sub and one chord disappearing into depth." },
      related: ["low", "garage"]
    },
    noir: {
      core: { es: "Hip-hop noir basado en muestras acústicas, batería polvorienta, bajo contenido y escenas nocturnas de cinta.", en: "Sample-based noir hip-hop with acoustic sources, dusty drums, restrained bass and nocturnal tape scenes." },
      changes: {
        es: ["corte boom-bap", "tipo de bajo", "piano, guitarra o cuerdas", "forma de cortar la muestra", "desgaste analógico", "habitación o calle"],
        en: ["boom-bap cut", "bass type", "piano, guitar or strings", "sample chopping", "analogue wear", "room or street space"]
      },
      fit: { es: "Boom bap oscuro y contenido, con materiales acústicos, escenas pequeñas y una sensación de cinta usada.", en: "Dark, restrained boom-bap with acoustic material, small scenes and the feel of worn tape." },
      demo: { es: "Batería recortada y polvorienta, piano de dos notas y lluvia contra una ventana cercana.", en: "Dusty break, two-note piano and rain against a nearby window." },
      related: ["low", "trap"]
    }
  });

  const catalogueTotals = catalog.reduce((totals, item) => ({ prompts: totals.prompts + item.counts.prompts, negatives: totals.negatives + item.counts.negatives }), { prompts: 0, negatives: 0 });
  const archive = { id: "archive", sku: "COMPLETE-PACK", name: { es: "Pack completo", en: "Complete pack" }, price: 59, tone: "#a44730", bundle: true, members: catalog.map((item) => item.id), description: { es: `Todo el catálogo en un solo ZIP: ${catalogueTotals.prompts} prompts y ${catalogueTotals.negatives} negative prompts.`, en: `The full catalogue in one ZIP: ${catalogueTotals.prompts} prompts and ${catalogueTotals.negatives} negative prompts.` } };
  const separateCataloguePrice = catalog.reduce((total, product) => total + product.price, 0);
  const archiveSaving = separateCataloguePrice - archive.price;
  const payhipProductKeys = Object.freeze({ trap: "0GiEq", garage: "HunFY", jungle: "LmWUN", low: "LrzFf", abyss: "TxsAr", noir: "8sFfE", archive: "SPXoI" });
  const attributionKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];
  const attribution = (() => {
    const incoming = new URLSearchParams(window.location.search);
    let stored = {};
    try { stored = JSON.parse(sessionStorage.getItem("subsuelo-attribution-v1") || "{}"); } catch { stored = {}; }
    const next = { ...stored };
    attributionKeys.forEach((key) => {
      const value = incoming.get(key)?.trim();
      if (value) next[key] = value.slice(0, 120);
    });
    try { sessionStorage.setItem("subsuelo-attribution-v1", JSON.stringify(next)); } catch { /* unavailable */ }
    return Object.freeze(next);
  })();
  const attributedPayhipUrl = (url, fallbackCampaign) => {
    const target = new URL(url);
    target.searchParams.set("utm_source", attribution.utm_source || "subsuelofs");
    target.searchParams.set("utm_medium", attribution.utm_medium || "website");
    target.searchParams.set("utm_campaign", attribution.utm_campaign || fallbackCampaign);
    ["utm_content", "utm_term"].forEach((key) => { if (attribution[key]) target.searchParams.set(key, attribution[key]); });
    return target.toString();
  };
  const freeSampler = Object.freeze({
    url: attributedPayhipUrl("https://payhip.com/b/LJp1T", "free_sampler"),
    prompts: 6,
    negatives: 7,
    demos: 6
  });
  const customerAccountUrl = "https://payhip.com/subsuelofs/b-account";
  const products = Object.fromEntries([...catalog, archive].map((product) => [product.id, { ...product, payhipKey: payhipProductKeys[product.id] }]));
  const productSeo = Object.freeze({
    trap: {
      es: { title: "Trap Ritual: 30 prompts de trap oscuro | SUBSUELO FS", description: "30 direcciones de trap ritual oscuro con 10 negative prompts, guías ES/EN y 4 audios de referencia. Descarga digital: 15 €." },
      en: { title: "Trap Ritual: 30 dark trap prompts | SUBSUELO FS", description: "30 dark ritual trap prompts, 10 negative prompts, guides in English and Spanish, and 4 MP3 references. One coherent sound, 30 distinct beats." }
    },
    garage: {
      es: { title: "Garaje Oscuro: 30 prompts de UK garage | SUBSUELO FS", description: "30 direcciones de UK garage oscuro con 10 negative prompts, guías ES/EN y 4 audios de referencia. Descarga digital: 15 €." },
      en: { title: "Garaje Oscuro: 30 dark UK garage prompts | SUBSUELO FS", description: "30 dark UK garage prompts built around 2-step drums, human swing, sub-bass and urban space, plus 10 negative prompts and 4 MP3 references." }
    },
    jungle: {
      es: { title: "Fossil Jungle: 30 prompts de jungle oscuro | SUBSUELO FS", description: "30 direcciones de jungle oscuro y degradado con 10 negative prompts, guías ES/EN y 4 audios de referencia. Descarga digital: 15 €." },
      en: { title: "Fossil Jungle: 30 dark jungle prompts | SUBSUELO FS", description: "30 dark, degraded jungle prompts with changing break architecture, bass behaviour and sample sources, plus 10 negative prompts and 4 MP3 references." }
    },
    low: {
      es: { title: "Low Pressure: 30 prompts de hip-hop abstracto | SUBSUELO FS", description: "30 direcciones de hip-hop abstracto con 10 negative prompts, guías ES/EN y 4 audios de referencia. Descarga digital: 15 €." },
      en: { title: "Low Pressure: 30 abstract hip-hop prompts | SUBSUELO FS", description: "30 dark instrumental prompts for heavy, textural abstract hip-hop, plus 10 negative prompts, guides in English and Spanish, and 4 MP3 references." }
    },
    abyss: {
      es: { title: "Abyss Dub: 30 prompts de hip-hop dub | SUBSUELO FS", description: "30 direcciones de hip-hop dub oscuro con 10 negative prompts, guías ES/EN y 4 audios de referencia. Descarga digital: 15 €." },
      en: { title: "Abyss Dub: 30 dark dub hip-hop prompts | SUBSUELO FS", description: "30 dub-inflected hip-hop prompts with rap drums, immense sub-bass, isolated chords and deep echoes, plus 10 negative prompts and 4 MP3 references." }
    },
    noir: {
      es: { title: "Noir Tapes: 30 prompts de hip-hop noir | SUBSUELO FS", description: "30 direcciones de hip-hop noir y boom bap abstracto con 10 negative prompts, guías ES/EN y 4 audios. Descarga digital: 15 €." },
      en: { title: "Noir Tapes: 30 noir hip-hop prompts | SUBSUELO FS", description: "30 sample-based noir hip-hop and abstract boom-bap prompts with changing drum cuts and tape treatment, plus 10 negative prompts and 4 MP3 references." }
    }
  });
  const legalOrder = ["notice", "privacy", "terms", "refund", "license", "storage", "accessibility"];
  const productRouteIds = new Set(catalog.map((product) => product.id));
  const categoryRouteIds = new Set(catalog.flatMap((product) => product.tags));
  const legalRouteIds = new Set(legalOrder);
  const documentRouteEntries = new Set(["readme", "prompts", "negatives", "guide", "license"]);

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const get = (object, path) => path.split(".").reduce((value, key) => value?.[key], object);
  const interpolate = (value, values = {}) => String(value).replace(/\{(\w+)\}/g, (_, key) => values[key] ?? `{${key}}`);
  const escapeHtml = (value) => String(value).replace(/[&<>"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[char]);
  const trackEvent = (name, data = {}) => {
    if (typeof window.umami?.track === "function") window.umami.track(name, data);
  };

  let language = "es";
  let viewMode = "grid";
  let query = "";
  let selectedProductId = null;
  let selectedFile = null;
  let cart = [];
  let appHistory = [];
  let historyCursor = 0;
  let toastTimer;
  let lastCartTrigger;
  let lastSidebarTrigger;
  let activeTrack = null;
  let lastTrackId = null;
  let lastRenderedRoute = null;
  const trackedDemoIds = new Set();

  try {
    const savedLanguage = localStorage.getItem("subsuelo-language");
    language = savedLanguage === "es" || savedLanguage === "en" ? savedLanguage : "es";
    viewMode = localStorage.getItem("subsuelo-view") === "list" ? "list" : "grid";
    const savedCart = JSON.parse(localStorage.getItem("subsuelo-cart-v5") || "[]");
    cart = Array.isArray(savedCart) ? savedCart.filter((id) => typeof id === "string" && Object.hasOwn(products, id)) : [];
  } catch {
    language = "es";
    cart = [];
  }

  const t = (path, values) => interpolate(get(copy[language], path) ?? path, values);
  const productName = (product) => typeof product?.name === "object" ? product.name[language] : product?.name || "";
  const categoryName = (category) => catalog.find((product) => product.tags.includes(category))?.category?.[language] || category;
  const price = (value) => new Intl.NumberFormat(language === "es" ? "es-ES" : "en-GB", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(value);
  const openingPriceNote = (modifier = "") => `<span class="opening-price-note${modifier ? ` opening-price-note--${modifier}` : ""}">${t("pricing.opening")}</span>`;
  const recoveredPath = () => {
    const route = new URLSearchParams(location.search).get("__route");
    return route && route.startsWith("/") && !route.startsWith("//") ? route : null;
  };
  const legacyPath = () => location.hash.startsWith("#/") ? location.hash.slice(1) : null;
  const currentPath = () => legacyPath() || recoveredPath() || location.pathname || "/";

  const localizedPath = (path, locale = language) => {
    const normalized = path.startsWith("/") ? path : `/${path}`;
    if (locale !== "en") return normalized;
    return normalized === "/" ? "/en/" : `/en${normalized}`;
  };

  language = /^\/en(?:\/|$)/u.test(currentPath()) ? "en" : "es";

  const parseRoute = (path = currentPath(), fallbackLocale = null) => {
    const cleanPath = typeof path === "string" ? path.split(/[?#]/, 1)[0] : "/";
    const parts = cleanPath.replace(/^\/+|\/+$/g, "").split("/").filter(Boolean);
    const locale = parts[0] === "en" ? "en" : fallbackLocale || "es";
    if (parts[0] === "en") parts.shift();
    const routed = (route) => ({ ...route, locale });
    if (!parts.length || (parts[0] === "home" && parts.length === 1)) return routed({ type: "home" });
    if (parts[0] === "category" && parts.length === 2 && categoryRouteIds.has(parts[1])) return routed({ type: "category", category: parts[1] });
    if (parts[0] === "product" && productRouteIds.has(parts[1])) {
      if (parts.length === 2) return routed({ type: "product", id: parts[1], section: null, entry: null });
      if ((parts[2] === "es" || parts[2] === "en") && (parts.length === 3 || (parts.length === 4 && documentRouteEntries.has(parts[3])))) {
        return routed({ type: "product", id: parts[1], section: parts[2], entry: parts[3] || null });
      }
      if (parts[2] === "demos" && (parts.length === 3 || (parts.length === 4 && parts[3] === "preview"))) {
        return routed({ type: "product", id: parts[1], section: "demos", entry: parts[3] || null });
      }
    }
    if (parts[0] === "demos" && parts.length === 1) return routed({ type: "demos" });
    if (parts[0] === "help" && parts.length === 1) return routed({ type: "help" });
    if (parts[0] === "legal" && (parts.length === 1 || (parts.length === 2 && legalRouteIds.has(parts[1])))) return routed({ type: "legal", document: parts[1] || null });
    if (parts[0] === "bundle" && parts.length === 1) return routed({ type: "bundle" });
    return routed({ type: "home" });
  };

  const routePath = (route) => {
    let path = "/";
    if (route.type === "category") path = `/category/${route.category}/`;
    if (route.type === "product") path = `/product/${route.id}${route.section ? `/${route.section}` : ""}${route.entry ? `/${route.entry}` : ""}/`;
    if (route.type === "demos") path = "/demos/";
    if (route.type === "help") path = "/help/";
    if (route.type === "legal") path = `/legal${route.document ? `/${route.document}` : ""}/`;
    if (route.type === "bundle") path = "/bundle/";
    return localizedPath(path, route.locale || language);
  };

  const normalizeRoute = (path) => routePath(parseRoute(path, language));
  const routeHref = (path) => normalizeRoute(path);

  const routeMetadata = (route) => {
    if (route.type === "product") {
      const product = products[route.id];
      const seo = productSeo[route.id]?.[language];
      return { ...seo, canonicalPath: localizedPath(`/product/${product.id}/`, route.locale), type: "product" };
    }
    if (route.type === "bundle") return language === "es"
      ? { title: `Pack completo: 180 prompts para instrumentales | ${legalProfile.brand}`, description: `Las 6 colecciones en un ZIP: 180 prompts, 60 negative prompts, guías ES/EN y 24 referencias de audio. Descarga digital: ${price(archive.price)}.`, canonicalPath: localizedPath("/bundle/", route.locale), type: "product" }
      : { title: `180 dark music prompts: complete pack | ${legalProfile.brand}`, description: "All 6 collections in one ZIP: 180 music prompts, 60 negative prompts, guides in English and Spanish, and 24 MP3 references.", canonicalPath: localizedPath("/bundle/", route.locale), type: "product" };
    if (route.type === "demos") return language === "es"
      ? { title: `Demos de instrumentales oscuras | ${legalProfile.brand}`, description: "Escucha una muestra de trap ritual, UK garage oscuro, jungle degradado, hip-hop abstracto, dub y noir antes de elegir una carpeta.", canonicalPath: localizedPath("/demos/", route.locale), type: "website" }
      : { title: `Dark instrumental prompt demos | ${legalProfile.brand}`, description: "Listen to audio examples for ritual trap, dark UK garage, degraded jungle, abstract hip-hop, dub and noir before choosing a prompt collection.", canonicalPath: localizedPath("/demos/", route.locale), type: "website" };
    if (route.type === "help") return language === "es"
      ? { title: `Qué incluye una carpeta de prompts | ${legalProfile.brand}`, description: "Qué contienen los PDF de prompts y negative prompts, dónde se usa cada archivo y qué incluyen las guías y las referencias de audio.", canonicalPath: localizedPath("/help/", route.locale), type: "website" }
      : { title: `How music generation prompts work | ${legalProfile.brand}`, description: "See what each prompt folder contains, where to paste each block, how optional negative prompts work and what the audio references are for.", canonicalPath: localizedPath("/help/", route.locale), type: "website" };
    if (route.type === "category") return { title: `${categoryName(route.category)} | ${legalProfile.brand}`, description: t("meta.description"), canonicalPath: routePath(route), type: "website" };
    if (route.type === "legal") return { title: `${breadcrumbData(route).at(-1)?.label || "Legal"} | ${legalProfile.brand}`, description: t("meta.description"), canonicalPath: routePath(route), type: "website" };
    return language === "es"
      ? { title: `Prompts para instrumentales oscuras | ${legalProfile.brand}`, description: "Seis carpetas para instrumentales oscuras: 180 prompts, 60 negative prompts, guías ES/EN y 24 MP3. Pack completo por 59 €; muestra gratis disponible.", canonicalPath: localizedPath("/", route.locale), type: "website" }
      : { title: `Music prompts for dark instrumentals | ${legalProfile.brand}`, description: "Six folders for dark instrumentals: 180 prompts, 60 negative prompts, ES/EN guides and 24 MP3s. Complete pack for €59; free sampler available.", canonicalPath: localizedPath("/", route.locale), type: "website" };
  };

  const syncRouteMetadata = (route) => {
    const metadata = routeMetadata(route);
    const canonicalUrl = `https://subsuelofs.com${metadata.canonicalPath}`;
    document.title = metadata.title;
    $("meta[name='description']")?.setAttribute("content", metadata.description);
    $("link[rel='canonical']")?.setAttribute("href", canonicalUrl);
    $("meta[property='og:type']")?.setAttribute("content", metadata.type);
    $("meta[property='og:url']")?.setAttribute("content", canonicalUrl);
    $("meta[property='og:locale']")?.setAttribute("content", language === "es" ? "es_ES" : "en_GB");
    $("meta[property='og:locale:alternate']")?.setAttribute("content", language === "es" ? "en_GB" : "es_ES");
    $("meta[property='og:title']")?.setAttribute("content", metadata.title);
    $("meta[property='og:description']")?.setAttribute("content", metadata.description);
    $("meta[name='twitter:title']")?.setAttribute("content", metadata.title);
    $("meta[name='twitter:description']")?.setAttribute("content", metadata.description);
    const basePath = metadata.canonicalPath.replace(/^\/en(?=\/)/u, "") || "/";
    $("link[rel='alternate'][hreflang='es']")?.setAttribute("href", `https://subsuelofs.com${localizedPath(basePath, "es")}`);
    $("link[rel='alternate'][hreflang='en']")?.setAttribute("href", `https://subsuelofs.com${localizedPath(basePath, "en")}`);
    $("link[rel='alternate'][hreflang='x-default']")?.setAttribute("href", `https://subsuelofs.com${localizedPath(basePath, "es")}`);
  };
  const initialRoute = normalizeRoute(currentPath());
  appHistory = [initialRoute];
  historyCursor = 0;
  history.replaceState({ appIndex: 0, route: initialRoute }, "", initialRoute);

  const navigate = (path, options = {}) => {
    const normalized = normalizeRoute(path);
    if (normalized === appHistory[historyCursor] && !options.force) {
      renderRoute();
      return;
    }
    appHistory = appHistory.slice(0, historyCursor + 1);
    appHistory.push(normalized);
    historyCursor = appHistory.length - 1;
    history.pushState({ appIndex: historyCursor, route: normalized }, "", normalized);
    const nextRoute = parseRoute(normalized);
    if (nextRoute.type === "product") trackEvent("pack_open", { pack: nextRoute.id });
    selectedFile = null;
    renderRoute();
    closeSidebar();
  };

  window.addEventListener("popstate", (event) => {
    const parsedRoute = parseRoute(currentPath());
    if (parsedRoute.locale !== language) syncLanguageUi(parsedRoute.locale);
    const route = routePath(parsedRoute);
    if (Number.isInteger(event.state?.appIndex)) historyCursor = Math.max(0, Math.min(event.state.appIndex, appHistory.length - 1));
    else {
      const existing = appHistory.lastIndexOf(route);
      historyCursor = existing >= 0 ? existing : 0;
    }
    selectedFile = null;
    renderRoute();
  });

  window.addEventListener("hashchange", () => {
    const path = legacyPath();
    if (!path) return;
    const parsedRoute = parseRoute(path);
    if (parsedRoute.locale !== language) syncLanguageUi(parsedRoute.locale);
    const normalized = routePath(parsedRoute);
    appHistory = appHistory.slice(0, historyCursor + 1);
    appHistory.push(normalized);
    historyCursor = appHistory.length - 1;
    history.replaceState({ appIndex: historyCursor, route: normalized }, "", normalized);
    selectedFile = null;
    renderRoute();
    closeSidebar();
  });

  const parentPath = (route) => {
    if (route.type === "product" && route.entry) return `/product/${route.id}/${route.section}`;
    if (route.type === "product" && route.section) return `/product/${route.id}`;
    if (route.type === "legal" && route.document) return "/legal";
    if (route.type === "product" || route.type === "category" || route.type === "demos" || route.type === "help" || route.type === "legal" || route.type === "bundle") return "/";
    return null;
  };

  const breadcrumbData = (route) => {
    const items = [{ label: "SUBSUELO", route: "/" }];
    if (route.type === "category") items.push({ label: categoryName(route.category), route: routePath(route) });
    if (route.type === "demos") items.push({ label: "DEMOS", route: "/demos" });
    if (route.type === "help") items.push({ label: "HELP", route: "/help" });
    if (route.type === "legal") {
      items.push({ label: "LEGAL", route: "/legal" });
      const document = legalDocuments[language][route.document];
      if (document) items.push({ label: document.file, route: routePath(route) });
    }
    if (route.type === "bundle") items.push({ label: productName(archive), route: "/bundle" });
    if (route.type === "product") {
      const product = products[route.id];
      items.push({ label: productName(product) || route.id, route: `/product/${route.id}` });
      if (route.section) items.push({ label: route.section.toUpperCase(), route: `/product/${route.id}/${route.section}` });
      if (route.entry) items.push({ label: fileDefinition(product, route.section, route.entry).name, route: routePath(route) });
    }
    return items;
  };

  const renderBreadcrumbs = (route) => {
    const items = breadcrumbData(route);
    $("[data-breadcrumb]").innerHTML = items.map((item, index) => {
      const href = routeHref(item.route);
      const target = parseRoute(href);
      const crawlable = target.type === "home" || target.type === "demos" || target.type === "bundle" || target.type === "help" || (target.type === "product" && !target.section);
      return crawlable
        ? `<a class="breadcrumb-button" href="${escapeHtml(href)}" data-route="${escapeHtml(href)}"${index === items.length - 1 ? ' aria-current="page"' : ""}>${escapeHtml(item.label)}</a>`
        : `<button class="breadcrumb-button" type="button" data-route="${escapeHtml(href)}"${index === items.length - 1 ? ' aria-current="page"' : ""}>${escapeHtml(item.label)}</button>`;
    }).join("");
  };

  const categories = () => {
    return [...new Set(catalog.flatMap((product) => product.tags))];
  };

  const treeItem = ({ route, label, icon = "folder", count, current, crawlable = false }) => {
    const href = routeHref(route);
    const content = `<span class="tree-icon tree-icon--${icon}"></span><span>${escapeHtml(label)}</span>${count !== undefined ? `<small>${count}</small>` : ""}`;
    return crawlable
      ? `<a class="tree-item ${current ? "is-current" : ""}" href="${escapeHtml(href)}" data-route="${escapeHtml(href)}"${current ? ' aria-current="page"' : ""}>${content}</a>`
      : `<button class="tree-item ${current ? "is-current" : ""}" type="button" data-route="${escapeHtml(href)}"${current ? ' aria-current="page"' : ""}>${content}</button>`;
  };

  const renderSidebar = (route) => {
    $("[data-sidebar-main]").innerHTML = [
      treeItem({ route: "/", label: t("sidebar.home"), count: catalog.length, current: route.type === "home", crawlable: true }),
      treeItem({ route: "/demos", label: t("sidebar.demos"), icon: "play", current: route.type === "demos", crawlable: true }),
      treeItem({ route: "/bundle", label: t("sidebar.bundle"), current: route.type === "bundle", crawlable: true }),
      `<a class="tree-item" href="${freeSampler.url}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(t("sidebar.samplerAria"))}" data-sampler-download="sidebar"><span class="tree-icon tree-icon--doc"></span><span>${t("sidebar.sampler")}</span><small>0 € ↗</small></a>`
    ].join("");
    $("[data-sidebar-categories]").innerHTML = categories().map((category) => treeItem({ route: `/category/${category}`, label: categoryName(category), count: catalog.filter((product) => product.tags.includes(category)).length, current: route.type === "category" && route.category === category })).join("");
    $("[data-sidebar-info]").innerHTML = [
      `<a class="tree-item" href="${localizedPath("/guides/", language)}"><span class="tree-icon tree-icon--folder"></span><span>${t("sidebar.guides")}</span></a>`,
      treeItem({ route: "/help", label: t("sidebar.help"), icon: "doc", current: route.type === "help", crawlable: true }),
      `<a class="tree-item" href="${customerAccountUrl}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(t("sidebar.purchasesAria"))}"><span class="tree-icon tree-icon--doc"></span><span>${t("sidebar.purchases")}</span><small>↗</small></a>`,
      treeItem({ route: "/legal", label: t("sidebar.legalFolder"), icon: "folder", count: legalOrder.length, current: route.type === "legal" }),
      `<button class="tree-item" type="button" data-open-cart><span class="cart-icon"></span><span>${t("sidebar.cart")}</span><small>${cart.length}</small></button>`,
      `<a class="tree-item" href="${legalProfile.xUrl}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(t("sidebar.xAria"))}"><span class="tree-icon tree-icon--doc"></span><span>@subsuelofs</span><small>X</small></a>`
    ].join("");
  };

  const folderMarkup = (product) => {
    const name = productName(product);
    const detail = product.bundle ? t("bundle.folderCount", { count: product.members.length }) : `${categoryName(product.tags[0])} · ${t("inspector.prompts", { count: product.counts.prompts })}`;
    const label = `${name}. ${detail}. ${price(product.price)}`;
    const href = routeHref(product.bundle ? "/bundle/" : `/product/${product.id}/`);
    return `<a class="folder-item ${selectedProductId === product.id ? "is-selected" : ""}" href="${href}" data-product-id="${product.id}" aria-label="${escapeHtml(label)}"><span class="folder-icon ${product.bundle ? "folder-icon--bundle" : ""}" style="--tone:${product.tone}"></span><strong>${escapeHtml(name)}</strong><small>${escapeHtml(detail)}</small><span class="folder-list-price">${price(product.price)}</span></a>`;
  };

  const matchingProducts = (route) => catalog.filter((product) => {
    const categoryMatch = route.type !== "category" || product.tags.includes(route.category);
    const search = query.trim().toLowerCase();
    const searchMatch = !search || `${productName(product)} ${product.sku} ${product.tags.join(" ")} ${product.description[language]}`.toLowerCase().includes(search);
    return categoryMatch && searchMatch;
  });

  const homeView = (route) => {
    const matches = matchingProducts(route);
    const title = route.type === "category" ? categoryName(route.category) : t("home.title");
    const lead = route.type === "category" ? `${t("home.lead")}` : t("home.lead");
    const folders = matches.length ? `<div class="folder-grid ${viewMode === "list" ? "is-list" : ""}" data-folder-grid>${matches.map(folderMarkup).join("")}</div>` : `<div class="empty-state"><div class="empty-folder"></div><h2>${t("home.empty")}</h2><p>${t("home.emptyHint")}</p><button class="help-action" type="button" data-clear-search>${t("home.clear")}</button></div>`;
    const hint = window.matchMedia("(max-width: 900px)").matches ? t("home.mobileHint") : t("home.hint");
    const helpHref = routeHref("/help/");
    const demosHref = routeHref("/demos/");
    const bundleHref = routeHref("/bundle/");
    const guidesHref = localizedPath("/guides/", language);
    const offer = `<section class="home-offer" aria-label="${escapeHtml(t("home.offerAria"))}"><span class="folder-icon folder-icon--bundle home-offer__icon" aria-hidden="true"></span><div class="home-offer__copy"><p>${t("home.offerKicker")}</p><h2>${t("home.offerTitle")}</h2><p>${t("home.offerText")}</p><small>${t("home.offerCompatibility")}</small></div><div class="home-offer__buy"><div class="home-offer__price"><s>${t("home.offerSeparate")}</s><strong>${t("home.offerPrice")}</strong><b>${t("home.offerSaving")}</b><span>${t("home.offerOpening")}</span></div><a class="home-offer__primary" href="${bundleHref}" data-buy="archive">${t("home.offerAction")}</a><a class="home-offer__secondary" href="${freeSampler.url}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(t("home.samplerAria"))}" data-sampler-download="home">${t("home.samplerAction")}<span aria-hidden="true">↗</span></a></div></section>`;
    return `<header class="view-heading"><div class="view-heading__copy"><p>${t("home.kicker")}</p><h1>${escapeHtml(title)}</h1><p>${escapeHtml(lead)}</p></div><p class="view-heading__hint">${hint}</p></header>${offer}${openingPriceNote("catalog")}${folders}<section class="system-files"><h2>${t("home.docs")}</h2><div class="system-file-row"><a class="system-file" href="${helpHref}" data-route="${helpHref}"><span class="file-icon file-icon--text">TXT</span><strong>${t("home.helpFile")}</strong></a><a class="system-file" href="${demosHref}" data-route="${demosHref}"><span class="file-icon file-icon--audio">AUDIO</span><strong>${t("home.demoFile")}</strong></a><a class="system-file" href="${guidesHref}" data-editorial-path="/guides/"><span class="row-folder-icon"></span><strong>${t("home.guidesFile")}</strong></a><a class="system-file" href="${bundleHref}" data-route="${bundleHref}"><span class="row-folder-icon"></span><strong>${t("home.bundleFile")}</strong></a><button class="system-file" type="button" data-route="${routeHref("/legal")}"><span class="row-folder-icon"></span><strong>${t("home.legalFile")}</strong></button></div></section>`;
  };

  const bundleCounts = () => archive.members.map((id) => products[id]).reduce((sum, product) => ({ prompts: sum.prompts + product.counts.prompts, negatives: sum.negatives + product.counts.negatives, demos: sum.demos + product.counts.demos }), { prompts: 0, negatives: 0, demos: 0 });

  const inspectorFacts = (counts) => `<div class="inspector-facts"><span>${t("inspector.prompts", { count: counts.prompts })}</span><span>${t("inspector.negatives", { count: counts.negatives })}</span><span>${t("inspector.guide")}</span><span>${t(counts.demos === 1 ? "inspector.demo" : "inspector.demos", { count: counts.demos })}</span></div>`;

  const emptyInspector = () => `<div class="inspector-empty"><span class="folder-icon"></span><h2>${t("inspector.select")}</h2><p>${t("inspector.selectHint")}</p></div>`;

  const productInspector = (product) => {
    const counts = product.bundle ? bundleCounts() : product.counts;
    const name = productName(product);
    const tags = product.bundle ? [t("bundle.kicker")] : product.tags.map(categoryName);
    const coverLabel = product.bundle ? t("inspector.folders", { count: product.members.length }) : `${t("inspector.prompts", { count: counts.prompts })} / ${t("inspector.negatives", { count: counts.negatives })}`;
    const facts = product.bundle ? `<div class="inspector-facts"><span>${t("inspector.folders", { count: product.members.length })}</span><span>${t("inspector.prompts", { count: counts.prompts })}</span><span>${t("inspector.negatives", { count: counts.negatives })}</span><span>${t("inspector.demos", { count: counts.demos })}</span></div>` : inspectorFacts(counts);
    return `<div class="inspector-cover" style="--tone:${product.tone}"><span>${escapeHtml(coverLabel)}</span><strong>${escapeHtml(name)}</strong></div><h2>${escapeHtml(name)}</h2><p>${escapeHtml(product.description[language])}</p><div class="tag-row">${tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div>${facts}<div class="inspector-price">${price(product.price)}</div><div class="inspector-actions"><button type="button" data-open-product="${product.id}">${t("inspector.open")}</button>${product.demo ? `<button type="button" data-play="${product.id}">${t("inspector.play")}</button>` : ""}<button class="primary-action" type="button" data-add="${product.id}">${t("inspector.add")} · ${price(product.price)}</button></div>`;
  };

  const fileDefinition = (product, section, entry) => {
    const definitions = {
      es: {
        readme: { name: "00_LEEME_PRIMERO_ES.txt", format: "TXT", language: t("product.spanishDocs"), description: t("product.readme"), access: "purchase" },
        prompts: { name: "01_PROMPTS_ES.pdf", format: "PDF", language: t("product.spanishDocs"), description: t("product.promptsFolder"), access: "purchase" },
        negatives: { name: "02_NEGATIVE_PROMPTS_ES.pdf", format: "PDF", language: t("product.spanishDocs"), description: t("product.negativesFolder"), access: "purchase" },
        guide: { name: "03_GUIA_RAPIDA_ES.pdf", format: "PDF", language: t("product.spanishDocs"), description: t("product.guideFile"), access: "purchase" },
        license: { name: "04_LICENCIA_ES.txt", format: "TXT", language: t("product.spanishDocs"), description: t("product.licenseFile"), access: "purchase" }
      },
      en: {
        readme: { name: "00_READ_ME_FIRST_EN.txt", format: "TXT", language: t("product.englishDocs"), description: t("product.readme"), access: "purchase" },
        prompts: { name: "01_PROMPTS_EN.pdf", format: "PDF", language: t("product.englishDocs"), description: t("product.promptsFolder"), access: "purchase" },
        negatives: { name: "02_NEGATIVE_PROMPTS_EN.pdf", format: "PDF", language: t("product.englishDocs"), description: t("product.negativesFolder"), access: "purchase" },
        guide: { name: "03_QUICK_GUIDE_EN.pdf", format: "PDF", language: t("product.englishDocs"), description: t("product.guideFile"), access: "purchase" },
        license: { name: "04_LICENSE_EN.txt", format: "TXT", language: t("product.englishDocs"), description: t("product.licenseFile"), access: "purchase" }
      }
    };
    if (section === "es" || section === "en") {
      if (entry && definitions[section][entry]) return definitions[section][entry];
      return { name: section.toUpperCase(), format: "FOLDER", language: section === "es" ? t("product.spanishDocs") : t("product.englishDocs"), description: t(section === "es" ? "product.esFolder" : "product.enFolder"), access: "purchase" };
    }
    if (section === "demos") return { name: `${product.demo.title}.preview`, format: "AUDIO", language: "AUDIO", description: t("product.previewDescription"), access: "teaser" };
    return definitions.es.readme;
  };

  const fileInspector = (product, definition) => {
    const accessLabel = t(definition.access === "public" ? "product.public" : definition.access === "teaser" ? "product.audioPreview" : "product.available");
    const availabilityTitle = t(definition.access === "public" ? "product.public" : definition.access === "teaser" ? "product.previewOnly" : "product.included");
    const availabilityText = t(definition.access === "public" ? "product.review" : definition.access === "teaser" ? "product.notInZip" : "product.afterPurchase");
    const actions = definition.access === "public" ? "" : `<div class="inspector-price">${price(product.price)}</div><div class="inspector-actions">${definition.access === "teaser" ? `<button type="button" data-play="${product.id}">${t("product.listen")}</button>` : ""}<button class="primary-action" type="button" data-add="${product.id}">${t("product.add")}</button></div>`;
    const icon = definition.format === "FOLDER"
      ? `<span class="row-folder-icon" aria-hidden="true"></span>`
      : `<span class="file-icon ${definition.format === "PDF" ? "file-icon--pdf" : definition.format === "AUDIO" ? "file-icon--audio" : "file-icon--text"}">${definition.format === "AUDIO" ? "AUDIO" : escapeHtml(definition.format)}</span>`;
    return `<div class="file-details"><div class="file-details__icon">${icon}</div><h2>${escapeHtml(definition.name)}</h2><p>${escapeHtml(definition.description)}</p><dl><div><dt>${t("product.format")}</dt><dd>${escapeHtml(definition.format)}</dd></div><div><dt>${t("product.language")}</dt><dd>${escapeHtml(definition.language)}</dd></div><div><dt>${t("product.content")}</dt><dd>${accessLabel}</dd></div></dl><div class="availability"><strong>${availabilityTitle}</strong><span>${availabilityText}</span></div>${actions}</div>`;
  };

  const productBanner = (product) => `<section class="product-banner" style="--tone:${product.tone}"><div class="product-banner__art"></div><div><p class="kicker">${t("product.edition")} / ${escapeHtml(categoryName(product.tags[0]))}</p><h1>${escapeHtml(productName(product))}</h1><p>${escapeHtml(product.description[language])}</p></div><div class="product-banner__buy"><div class="product-banner__price"><strong>${price(product.price)}</strong>${openingPriceNote()}</div><div class="product-banner__actions"><button type="button" data-play="${product.id}">${t("product.play")}</button><button class="primary-action" type="button" data-buy="${product.id}">${t("product.buy")} · ${price(product.price)}</button></div><a class="product-banner__sampler" href="${freeSampler.url}" target="_blank" rel="noopener noreferrer" data-sampler-download="product">${t("product.sampler")} ↗</a></div></section>`;

  const rowIcon = (type) => {
    if (type === "folder") return `<span class="row-folder-icon" aria-hidden="true"></span>`;
    const label = type === "audio" ? "AUDIO" : type === "pdf" ? "PDF" : "TXT";
    return `<span class="file-icon ${type === "pdf" ? "file-icon--pdf" : type === "audio" ? "file-icon--audio" : "file-icon--text"}">${label}</span>`;
  };
  const fileRow = ({ name, type, description, availability, route, action, productId, fileKey, entry, playId, disabled = false }) => `<button class="file-row ${selectedFile?.key === fileKey && selectedFile?.entry === entry ? "is-selected" : ""}" type="button" ${route ? `data-open-node="${escapeHtml(route)}"` : ""} ${playId ? `data-play="${playId}"` : ""} ${productId ? `data-file-product="${productId}" data-file-key="${fileKey}" ${entry ? `data-file-entry="${entry}"` : ""}` : ""}${disabled ? " disabled" : ""}><span class="file-row__name">${rowIcon(type)}<strong>${escapeHtml(name)}</strong></span><span>${escapeHtml(type === "folder" ? t("product.folder") : type.toUpperCase())}</span><span>${escapeHtml(description)}</span><span class="file-row__action">${escapeHtml(action)}</span></button>`;

  const fileList = (rows) => `<div class="file-list"><div class="file-list__header"><span>${t("product.name")}</span><span>${t("product.type")}</span><span>${t("product.description")}</span><span>${t("product.availability")}</span></div>${rows.join("")}</div>`;

  const purchaseStrip = (product) => {
    const detail = product.bundle ? t("bundle.saving", { separate: price(separateCataloguePrice), saving: price(archiveSaving) }) : t("product.purchase");
    return `<div class="purchase-strip"><div><strong>${escapeHtml(productName(product))} · ${price(product.price)}</strong><span>${escapeHtml(detail)}</span></div><div class="purchase-strip__actions">${product.demo ? `<button type="button" data-play="${product.id}">${t("product.play")}</button>` : ""}<button class="primary-action" type="button" data-add="${product.id}">${t("product.add")}</button></div></div>`;
  };

  const productRootView = (product) => {
    const rows = [
      fileRow({ name: "ES", type: "folder", description: t("product.esFolder"), availability: t("product.included"), route: `/product/${product.id}/es`, productId: product.id, fileKey: "es", action: t("product.open") }),
      fileRow({ name: "EN", type: "folder", description: t("product.enFolder"), availability: t("product.included"), route: `/product/${product.id}/en`, productId: product.id, fileKey: "en", action: t("product.open") }),
      fileRow({ name: t("product.demoFolderName"), type: "folder", description: t("product.demosFolder"), availability: t("product.included"), route: `/product/${product.id}/demos`, productId: product.id, fileKey: "demos", action: t("product.open") })
    ];
    const editorial = productEditorial[product.id];
    const compareHref = localizedPath("/compare/", language);
    const negativeHref = localizedPath("/guides/negative-prompts/", language);
    const related = editorial.related.map((id) => {
      const item = products[id];
      const href = routeHref(`/product/${id}/`);
      return `<a href="${href}" data-route="${href}"><span class="folder-icon" style="--tone:${item.tone}"></span><span><strong>${escapeHtml(productName(item))}</strong><small>${escapeHtml(categoryName(item.tags[0]))}</small></span></a>`;
    }).join("");
    const profile = `<section class="product-editorial"><header><p>${t("editorial.kicker")}</p><h2>${t("editorial.title")}</h2></header><div class="product-editorial__grid"><div><h3>${t("editorial.core")}</h3><p>${escapeHtml(editorial.core[language])}</p></div><div><h3>${t("editorial.fit")}</h3><p>${escapeHtml(editorial.fit[language])}</p></div><div class="product-editorial__wide"><h3>${t("editorial.changes")}</h3><div class="editorial-tags">${editorial.changes[language].map((item) => `<span>${escapeHtml(item)}</span>`).join("")}</div></div><div class="product-editorial__wide demo-profile-card"><h3>${t("editorial.demo")}: ${escapeHtml(product.demo.title)}</h3><p>${escapeHtml(editorial.demo[language])}</p></div></div><nav class="editorial-actions" aria-label="${t("editorial.kicker")}"><a href="${compareHref}">${t("editorial.compare")}</a><a href="${negativeHref}">${t("editorial.negativeGuide")}</a></nav><div class="related-folders"><strong>${t("editorial.more")}</strong><div>${related}</div></div></section>`;
    return `${productBanner(product)}<header class="subfolder-heading"><span class="folder-icon" style="--tone:${product.tone}"></span><div><h2>${t("product.contents")}</h2><p>${t("product.files", { count: rows.length })}</p></div></header>${fileList(rows)}${profile}${purchaseStrip(product)}`;
  };

  const languageFolderView = (product, section) => {
    const keys = ["readme", "prompts", "negatives", "guide", "license"];
    const rows = keys.map((key) => {
      const definition = fileDefinition(product, section, key);
      return fileRow({ name: definition.name, type: definition.format.toLowerCase(), description: definition.description, availability: t("product.included"), route: `/product/${product.id}/${section}/${key}`, productId: product.id, fileKey: section, entry: key, action: t("product.details") });
    });
    return `<header class="subfolder-heading"><span class="folder-icon" style="--tone:${product.tone}"></span><div><h1>${section.toUpperCase()}</h1><p>${t("product.files", { count: rows.length })}</p></div></header>${fileList(rows)}${purchaseStrip(product)}`;
  };

  const demosFolderView = (product) => {
    const definition = fileDefinition(product, "demos", "preview");
    const locked = product.demo.files.map((name) => fileRow({ name, type: "audio", description: t("product.audioIncluded"), availability: t("product.afterPurchase"), action: t("product.included"), disabled: true }));
    const preview = fileRow({ name: definition.name, type: "audio", description: definition.description, availability: t("product.previewOnly"), playId: product.id, action: t("product.listen") });
    return `<header class="subfolder-heading"><span class="folder-icon" style="--tone:${product.tone}"></span><div><h1>${t("product.demoFolderName")}</h1><p>${t("product.demosIncluded")}</p></div></header>${fileList([...locked, preview])}${purchaseStrip(product)}`;
  };

  const filePageView = (product, section, entry) => {
    const definition = fileDefinition(product, section, entry);
    const accessText = definition.access === "public" ? t("product.public") : definition.access === "teaser" ? t("product.audioPreview") : t("product.available");
    const availabilityText = definition.access === "public" ? t("product.public") : definition.access === "teaser" ? t("product.notInZip") : t("product.afterPurchase");
    return `<article class="help-document help-document--file"><header class="help-document__head">${escapeHtml(definition.name)}</header><div class="help-document__body"><div class="file-details__icon">${rowIcon(definition.format === "PDF" ? "pdf" : definition.format === "AUDIO" ? "audio" : "txt")}</div><h1 class="document-filename">${escapeHtml(definition.name)}</h1><p class="help-document__lead">${escapeHtml(definition.description)}</p><div class="concept-grid"><div class="concept-card"><h2>${t("product.format")}</h2><p>${escapeHtml(definition.format)}</p></div><div class="concept-card"><h2>${t("product.language")}</h2><p>${escapeHtml(definition.language)}</p></div><div class="concept-card"><h2>${t("product.content")}</h2><p>${accessText}</p></div><div class="concept-card"><h2>${t("product.availability")}</h2><p>${availabilityText}</p></div></div>${definition.access === "teaser" ? `<button class="help-action" type="button" data-play="${product.id}">${t("product.listen")}</button>` : ""}</div></article>${purchaseStrip(product)}`;
  };

  const helpView = () => `<article class="help-document"><header class="help-document__head">${t("help.kicker")}</header><div class="help-document__body"><h1>${t("help.title")}</h1><p class="help-document__lead">${t("help.lead")}</p><div class="two-part-map"><div class="map-block"><strong>${t("help.prompt")}</strong><span>${t("help.direction")}</span></div><div class="map-arrow">+</div><div class="map-block"><strong>${t("help.negative")}</strong><span>${t("help.outside")}</span></div></div><p class="help-document__lead">${t("help.together")}</p><div class="concept-grid"><section class="concept-card"><div class="concept-card__top"><span class="file-icon file-icon--pdf">PDF</span><h2>${t("help.prompt")}</h2></div><p>${t("help.promptText")}</p></section><section class="concept-card"><div class="concept-card__top"><span class="file-icon file-icon--pdf">PDF</span><h2>${t("help.negative")}</h2></div><p>${t("help.negativeText")}</p></section><section class="concept-card"><div class="concept-card__top"><span class="file-icon file-icon--pdf">PDF</span><h2>${t("help.guide")}</h2></div><p>${t("help.guideText")}</p></section><section class="concept-card"><div class="concept-card__top"><span class="file-icon file-icon--audio">AUDIO</span><h2>${t("help.demos")}</h2></div><p>${t("help.demosText")}</p></section></div><div class="availability"><strong>TXT / PDF / MP3</strong><span>${t("help.delivery")}</span></div></div></article>`;

  const legalInline = (value) => escapeHtml(value)
    .replace(/([\w.+-]+@[\w.-]+\.[A-Za-z]{2,})/g, '<a href="mailto:$1">$1</a>')
    .replace(/(https:\/\/[^\s<]*[A-Za-z0-9/#?=&_%~-])([.,;:!?)])?/g, '<a href="$1" rel="noopener noreferrer">$1</a>$2');

  const legalFolderView = () => {
    const rows = legalOrder.map((key) => {
      const document = legalDocuments[language][key];
      return fileRow({ name: document.file, type: "txt", description: document.description, availability: t("legalUi.public"), route: `/legal/${key}`, action: t("legalUi.open") });
    });
    return `<section class="legal-folder"><header class="view-heading"><div class="view-heading__copy"><p>${t("legalUi.folderKicker")}</p><h1>${t("legalUi.folderTitle")}</h1><p>${t("legalUi.folderLead")}</p></div></header><div class="file-list"><div class="file-list__header"><span>${t("legalUi.name")}</span><span>${t("legalUi.type")}</span><span>${t("legalUi.description")}</span><span>${t("legalUi.access")}</span></div>${rows.join("")}</div></section>`;
  };

  const legalDocumentView = (key) => {
    const document = legalDocuments[language][key];
    if (!document) return legalFolderView();
    const toc = document.sections.map((section, index) => `<button type="button" data-scroll-section="legal-section-${index}">${escapeHtml(section.title)}</button>`).join("");
    const sections = document.sections.map((section, index) => `<section id="legal-section-${index}"><h2>${escapeHtml(section.title)}</h2>${section.paragraphs.map((paragraph) => `<p>${legalInline(paragraph)}</p>`).join("")}${section.list ? `<ul>${section.list.map((item) => `<li>${legalInline(item)}</li>`).join("")}</ul>` : ""}${section.checkbox ? `<p class="consent-example"><strong aria-hidden="true">☐</strong> ${legalInline(section.checkbox)}</p>` : ""}</section>`).join("");
    return `<article class="legal-view"><header class="legal-view__header"><span class="file-icon file-icon--text">TXT</span><div><p>${t("legalUi.system")}</p><h1 class="document-filename">${escapeHtml(document.file)}</h1><small>${t("legalUi.updated")}: ${escapeHtml(document.updated)} · ${t("legalUi.version")}: ${escapeHtml(document.version)}</small></div></header><div class="legal-view__layout"><nav class="legal-toc" aria-label="${t("legalUi.sections")}"><strong>${t("legalUi.sections")}</strong>${toc}</nav><div class="legal-copy">${sections}</div></div></article>`;
  };

  const demosView = () => {
    const rows = catalog.map((product) => { const href = routeHref(`/product/${product.id}/`); return `<div class="file-row" data-track="${product.id}"><span class="file-row__name">${rowIcon("audio")}<span><strong>${escapeHtml(product.demo.title)}</strong><small class="demo-profile">${escapeHtml(productEditorial[product.id].demo[language])}</small></span></span><span><a href="${href}" data-route="${href}">${escapeHtml(productName(product))}</a></span><span>${product.demo.durationLabel}</span><span class="demo-row-actions"><button class="file-row__action" type="button" data-play="${product.id}">${t("product.listen")}</button><button class="file-row__action file-row__action--primary" type="button" data-add="${product.id}">${t("inspector.add")} · ${price(product.price)}</button></span></div>`; });
    return `<header class="view-heading"><div class="view-heading__copy"><p>${t("demos.kicker")}</p><h1>${t("demos.title")}</h1><p>${t("demos.lead")}</p></div></header><div class="file-list demo-list"><div class="file-list__header"><span>${t("demos.track")}</span><span>${t("demos.edition")}</span><span>${t("demos.length")}</span><span>${t("demos.action")}</span></div>${rows.join("")}</div>`;
  };

  const bundleView = () => {
    const rows = archive.members.map((id) => products[id]).map((product) => fileRow({ name: productName(product), type: "folder", description: product.description[language], availability: t("bundle.item"), route: `/product/${product.id}`, action: t("product.open") }));
    return `<header class="view-heading"><div class="view-heading__copy"><p>${t("bundle.kicker")}</p><h1>${t("bundle.title")}</h1><p>${t("bundle.lead")}</p></div></header>${openingPriceNote("heading")}<header class="subfolder-heading"><span class="folder-icon folder-icon--bundle"></span><div><h2>${t("bundle.members")}</h2><p>${t("product.files", { count: archive.members.length })}</p></div></header>${fileList(rows)}${purchaseStrip(archive)}`;
  };

  const renderInspector = (route) => {
    const inspector = $("[data-inspector]");
    if (selectedFile && route.type === "product" && Object.hasOwn(products, selectedFile.productId)) {
      const product = products[selectedFile.productId];
      inspector.innerHTML = fileInspector(product, fileDefinition(product, selectedFile.key, selectedFile.entry));
      return;
    }
    if (route.type === "product" && Object.hasOwn(products, route.id)) {
      inspector.innerHTML = productInspector(products[route.id]);
      return;
    }
    if (route.type === "bundle") {
      inspector.innerHTML = productInspector(archive);
      return;
    }
    if (selectedProductId && Object.hasOwn(products, selectedProductId)) {
      inspector.innerHTML = productInspector(products[selectedProductId]);
      return;
    }
    inspector.innerHTML = emptyInspector();
  };

  const renderStatus = (route) => {
    let count = 0;
    if (route.type === "home" || route.type === "category") count = matchingProducts(route).length;
    else if (route.type === "product") {
      const product = products[route.id];
      count = route.entry ? 1 : route.section === "es" || route.section === "en" ? 5 : route.section === "demos" ? product.counts.demos + 1 : 3;
    } else if (route.type === "demos") count = catalog.length;
    else if (route.type === "legal") count = route.document ? 1 : legalOrder.length;
    else if (route.type === "bundle") count = archive.members.length;
    else count = 4;
    $("[data-status-main]").textContent = count === 1 ? t("status.item") : t("status.items", { count });
    $("[data-status-selection]").textContent = activeTrack && !activeTrack.audio.paused ? t("status.playing", { title: products[activeTrack.id].demo.title }) : selectedProductId || selectedFile ? t("status.selected", { count: 1 }) : t("status.none");
  };

  const renderRoute = () => {
    const route = parseRoute();
    if (route.locale !== language) syncLanguageUi(route.locale);
    const routeKey = routePath(route);
    const routeChanged = routeKey !== lastRenderedRoute;
    const product = route.type === "product" ? products[route.id] : null;
    if (route.type === "product" && !Object.hasOwn(products, route.id)) {
      navigate("/", { force: true });
      return;
    }
    if (route.type === "product" && route.section) {
      const validLanguageRoute = ["es", "en"].includes(route.section) && (!route.entry || documentRouteEntries.has(route.entry));
      const validDemoRoute = route.section === "demos" && (!route.entry || route.entry === "preview");
      if (!validLanguageRoute && !validDemoRoute) {
        navigate(`/product/${route.id}`, { force: true });
        return;
      }
    }
    if (route.type === "legal" && route.document && !Object.hasOwn(legalDocuments[language], route.document)) {
      navigate("/legal", { force: true });
      return;
    }
    if (route.type !== "home" && route.type !== "category") selectedProductId = null;
    renderSidebar(route);
    renderBreadcrumbs(route);
    let html = "";
    if (route.type === "home" || route.type === "category") html = homeView(route);
    if (route.type === "help") html = helpView();
    if (route.type === "legal") html = route.document ? legalDocumentView(route.document) : legalFolderView();
    if (route.type === "demos") html = demosView();
    if (route.type === "bundle") html = bundleView();
    if (route.type === "product") {
      if (!route.section) html = productRootView(product);
      else if ((route.section === "es" || route.section === "en") && !route.entry) html = languageFolderView(product, route.section);
      else if (route.section === "demos" && !route.entry) html = demosFolderView(product);
      else html = filePageView(product, route.section, route.entry);
    }
    $("[data-view-content]").innerHTML = html;
    renderInspector(route);
    renderStatus(route);
    const parent = parentPath(route);
    $("[data-up]").disabled = !parent;
    $("[data-back]").disabled = historyCursor <= 0;
    $("[data-forward]").disabled = historyCursor >= appHistory.length - 1;
    $$('[data-view-mode]').forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.viewMode === viewMode)));
    const pageLabel = breadcrumbData(route).at(-1)?.label || "CATALOG";
    $("[data-task-title]").textContent = pageLabel;
    $$('[data-route]').forEach((button) => {
      const current = normalizeRoute(button.dataset.route) === routeKey;
      if (current) button.setAttribute("aria-current", "page");
      else button.removeAttribute("aria-current");
    });
    syncRouteMetadata(route);
    $("[data-route-announcer]").textContent = pageLabel;
    if (routeChanged) {
      const pane = $(".file-pane");
      pane.scrollTop = 0;
      const heading = $("[data-view-content] h1");
      if (heading) {
        heading.tabIndex = -1;
        requestAnimationFrame(() => heading.focus({ preventScroll: true }));
      }
    }
    lastRenderedRoute = routeKey;
    updateAudioUi();
  };

  const showToast = (message) => {
    const toast = $("[data-toast]");
    toast.textContent = message;
    toast.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2400);
  };

  const selectProduct = (id) => {
    if (!Object.hasOwn(products, id)) return;
    selectedProductId = id;
    selectedFile = null;
    $$('[data-product-id]').forEach((item) => item.classList.toggle("is-selected", item.dataset.productId === id));
    renderInspector(parseRoute());
    renderStatus(parseRoute());
  };

  const selectFile = (productId, key, entry) => {
    selectedFile = { productId, key, entry: entry || null };
    $$('[data-file-key]').forEach((row) => row.classList.toggle("is-selected", row.dataset.fileProduct === productId && row.dataset.fileKey === key && (row.dataset.fileEntry || null) === (entry || null)));
    renderInspector(parseRoute());
    renderStatus(parseRoute());
  };

  const renderCart = () => {
    $$('[data-cart-count]').forEach((element) => { element.textContent = String(cart.length); });
    $("[data-cart-items]").innerHTML = cart.map((id) => {
      const product = products[id];
      const name = productName(product);
      return `<article class="cart-item"><span class="cart-item__folder" style="--tone:${product.tone}"></span><div><strong>${escapeHtml(name)}</strong><small>${t(product.bundle ? "cart.bundle" : "cart.item")} · ${price(product.price)}</small></div><button type="button" data-remove="${product.id}" aria-label="${t("cart.remove")} ${escapeHtml(name)}">${t("cart.remove")}</button></article>`;
    }).join("");
    const empty = cart.length === 0;
    $("[data-cart-empty]").hidden = !empty;
    $("[data-cart-footer]").hidden = empty;
    const total = cart.reduce((sum, id) => sum + products[id].price, 0);
    $("[data-cart-total]").textContent = price(total);
    $("[data-checkout-total]").textContent = price(total);
    $("[data-checkout-pay-total]").textContent = price(total);
    $("[data-checkout-items]").innerHTML = cart.map((id) => {
      const product = products[id];
      return `<div class="checkout-order__item"><span><strong>${escapeHtml(productName(product))}</strong><small>${t("checkout.unit")} · ${escapeHtml(product.sku)}</small></span><b>${price(product.price)}</b></div>`;
    }).join("");
    try { localStorage.setItem("subsuelo-cart-v5", JSON.stringify(cart)); } catch { /* unavailable */ }
    renderSidebar(parseRoute());
  };

  const addToCart = (id) => {
    if (!Object.hasOwn(products, id)) return;
    const product = products[id];
    if (product.bundle) {
      const replaced = cart.some((item) => product.members.includes(item));
      cart = cart.filter((item) => !product.members.includes(item));
      if (!cart.includes(id)) cart.push(id);
      renderCart();
      trackEvent("add_to_cart", { product: id });
      showToast(replaced ? t("messages.bundleReplaced") : t("messages.added", { name: productName(product) }));
      return;
    }
    const containingBundle = cart.map((item) => products[item]).find((item) => item?.bundle && item.members.includes(id));
    if (containingBundle) return showToast(t("messages.bundleContains"));
    if (cart.includes(id)) return showToast(t("messages.duplicate"));
    cart.push(id);
    renderCart();
    trackEvent("add_to_cart", { product: id });
    showToast(t("messages.added", { name: productName(product) }));
  };

  const cartPanel = $("[data-cart-panel]");
  const cartBackdrop = $("[data-cart-backdrop]");
  const desktopShell = $(".desktop-shell");
  const focusableElements = (root) => $$('button:not([disabled]), a[href], input:not([disabled]), [tabindex]:not([tabindex="-1"])', root).filter((element) => !element.hidden);
  const openCart = (trigger) => {
    lastCartTrigger = trigger || document.activeElement;
    desktopShell.inert = true;
    cartPanel.inert = false;
    cartPanel.classList.add("is-open");
    cartPanel.setAttribute("aria-hidden", "false");
    cartBackdrop.hidden = false;
    $("[data-close-cart]").focus();
  };
  const closeCart = () => {
    const wasOpen = cartPanel.classList.contains("is-open");
    cartPanel.classList.remove("is-open");
    cartPanel.setAttribute("aria-hidden", "true");
    cartPanel.inert = true;
    cartBackdrop.hidden = true;
    desktopShell.inert = false;
    if (wasOpen) lastCartTrigger?.focus?.();
  };

  const sidebar = $("[data-sidebar]");
  const sidebarBackdrop = $("[data-sidebar-backdrop]");
  const sidebarToggle = $("[data-toggle-sidebar]");
  const sidebarMedia = window.matchMedia("(max-width: 900px)");
  const syncSidebarA11y = () => {
    const open = sidebar.classList.contains("is-open");
    sidebarToggle.setAttribute("aria-expanded", String(open));
    sidebar.inert = sidebarMedia.matches && !open;
    sidebar.setAttribute("aria-hidden", String(sidebarMedia.matches && !open));
  };
  const openSidebar = (trigger = sidebarToggle) => {
    lastSidebarTrigger = trigger;
    sidebar.classList.add("is-open");
    sidebarBackdrop.hidden = false;
    syncSidebarA11y();
    focusableElements(sidebar)[0]?.focus();
  };
  const closeSidebar = () => {
    const wasOpen = sidebar.classList.contains("is-open");
    sidebar.classList.remove("is-open");
    sidebarBackdrop.hidden = true;
    syncSidebarA11y();
    if (wasOpen && sidebarMedia.matches) lastSidebarTrigger?.focus?.();
  };
  sidebarMedia.addEventListener("change", () => { if (!sidebarMedia.matches) closeSidebar(); else syncSidebarA11y(); });
  syncSidebarA11y();

  const syncLanguageUi = (nextLanguage) => {
    language = nextLanguage;
    document.documentElement.lang = language;
    $$('[data-i18n]').forEach((element) => { const value = get(copy[language], element.dataset.i18n); if (value !== undefined) element.textContent = value; });
    $$('[data-i18n-aria-label]').forEach((element) => { const value = get(copy[language], element.dataset.i18nAriaLabel); if (value !== undefined) element.setAttribute("aria-label", value); });
    $$('[data-i18n-placeholder]').forEach((element) => { const value = get(copy[language], element.dataset.i18nPlaceholder); if (value !== undefined) element.setAttribute("placeholder", value); });
    $$('[data-i18n-content]').forEach((element) => { const value = get(copy[language], element.dataset.i18nContent); if (value !== undefined) element.setAttribute("content", value); });
    $$('[data-language]').forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.language === language)));
    $$('[data-route]').forEach((element) => {
      const localizedRoute = routePath({ ...parseRoute(element.dataset.route), locale: language });
      element.dataset.route = localizedRoute;
      if (element.matches("a[href]")) element.setAttribute("href", localizedRoute);
    });
    $$('[data-editorial-path]').forEach((element) => element.setAttribute("href", localizedPath(element.dataset.editorialPath, language)));
    $$('a[data-product-id][href]').forEach((element) => element.setAttribute("href", localizedPath(`/product/${element.dataset.productId}/`, language)));
    try { localStorage.setItem("subsuelo-language", language); } catch { /* unavailable */ }
    renderCart();
    updateAudioUi();
  };

  const applyLanguage = (nextLanguage) => {
    const localizedRoute = routePath({ ...parseRoute(), locale: nextLanguage });
    syncLanguageUi(nextLanguage);
    appHistory[historyCursor] = localizedRoute;
    history.replaceState({ appIndex: historyCursor, route: localizedRoute }, "", localizedRoute);
    renderRoute();
  };

  document.addEventListener("click", (event) => {
    const samplerDownload = event.target.closest("[data-sampler-download]");
    if (samplerDownload) {
      trackEvent("sampler_download", { placement: samplerDownload.dataset.samplerDownload });
      return;
    }
    const routeButton = event.target.closest("[data-route]");
    if (routeButton) {
      event.preventDefault();
      if (routeButton.hasAttribute("data-close-checkout") && checkoutDialog.open) checkoutDialog.close();
      navigate(routeButton.dataset.route);
      return;
    }
    const productFolder = event.target.closest("[data-product-id]");
    if (productFolder) {
      event.preventDefault();
      navigate(`/product/${productFolder.dataset.productId}`);
      return;
    }
    const openProduct = event.target.closest("[data-open-product]");
    if (openProduct) { const id = openProduct.dataset.openProduct; navigate(id === "archive" ? "/bundle" : `/product/${id}`); return; }
    const play = event.target.closest("[data-play]");
    if (play) { startTrack(play.dataset.play); return; }
    const file = event.target.closest("[data-file-key]");
    if (file) {
      const entry = file.dataset.fileEntry || null;
      if (file.dataset.fileKey === "demos" && entry === "1") startTrack(file.dataset.fileProduct);
      else if (window.matchMedia("(max-width: 900px)").matches) navigate(`/product/${file.dataset.fileProduct}/${file.dataset.fileKey}${entry ? `/${entry}` : ""}`);
      else selectFile(file.dataset.fileProduct, file.dataset.fileKey, entry);
      return;
    }
    const node = event.target.closest("[data-open-node]");
    if (node) { navigate(node.dataset.openNode); return; }
    const buy = event.target.closest("[data-buy]");
    if (buy) {
      event.preventDefault();
      addToCart(buy.dataset.buy);
      if (cart.length) openCheckoutReview();
      return;
    }
    const add = event.target.closest("[data-add]");
    if (add) { addToCart(add.dataset.add); return; }
    const openCartButton = event.target.closest("[data-open-cart]");
    if (openCartButton) { openCart(openCartButton); return; }
    const remove = event.target.closest("[data-remove]");
    if (remove) { cart = cart.filter((id) => id !== remove.dataset.remove); renderCart(); return; }
    if (event.target.closest("[data-clear-cart]")) { cart = []; renderCart(); return; }
    if (event.target.closest("[data-cart-browse]")) { closeCart(); navigate("/"); return; }
    if (event.target.closest("[data-clear-search]")) { query = ""; $("[data-search]").value = ""; renderRoute(); return; }
    const sectionButton = event.target.closest("[data-scroll-section]");
    if (sectionButton) { document.getElementById(sectionButton.dataset.scrollSection)?.scrollIntoView({ behavior: "smooth", block: "start" }); return; }
    if (event.target.closest("[data-toggle-sidebar]")) { sidebar.classList.contains("is-open") ? closeSidebar() : openSidebar(event.target.closest("[data-toggle-sidebar]")); return; }
    if (event.target.closest("[data-menu-view]")) { viewMode = viewMode === "grid" ? "list" : "grid"; try { localStorage.setItem("subsuelo-view", viewMode); } catch { /* unavailable */ } renderRoute(); }
  });

  document.addEventListener("dblclick", (event) => {
    const file = event.target.closest("[data-file-key]");
    if (file && !window.matchMedia("(max-width: 900px)").matches) navigate(`/product/${file.dataset.fileProduct}/${file.dataset.fileKey}${file.dataset.fileEntry ? `/${file.dataset.fileEntry}` : ""}`);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Tab" && cartPanel.classList.contains("is-open")) {
      const focusables = focusableElements(cartPanel);
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables.at(-1);
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
    if (event.key === "Enter") {
      const productFolder = event.target.closest("[data-product-id]");
      if (productFolder) navigate(`/product/${productFolder.dataset.productId}`);
    }
    if (event.altKey && event.key === "ArrowLeft") { event.preventDefault(); $("[data-back]").click(); }
    if (event.altKey && event.key === "ArrowRight") { event.preventDefault(); $("[data-forward]").click(); }
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") { event.preventDefault(); $("[data-search]").focus(); }
    if (event.key === "Escape") { closeCart(); closeSidebar(); }
  });

  $("[data-back]").addEventListener("click", () => { if (historyCursor > 0) history.back(); });
  $("[data-forward]").addEventListener("click", () => { if (historyCursor < appHistory.length - 1) history.forward(); });
  $("[data-up]").addEventListener("click", () => { const parent = parentPath(parseRoute()); if (parent) navigate(parent); });
  $$('[data-view-mode]').forEach((button) => button.addEventListener("click", () => { viewMode = button.dataset.viewMode; try { localStorage.setItem("subsuelo-view", viewMode); } catch { /* unavailable */ } renderRoute(); }));
  $$('[data-language]').forEach((button) => button.addEventListener("click", () => applyLanguage(button.dataset.language)));
  $("[data-search]").addEventListener("input", (event) => { query = event.currentTarget.value; const route = parseRoute(); if (route.type !== "home" && route.type !== "category") navigate("/"); else renderRoute(); });
  $("[data-close-cart]").addEventListener("click", closeCart);
  cartBackdrop.addEventListener("click", closeCart);
  sidebarBackdrop.addEventListener("click", closeSidebar);
  $("[data-skip]").addEventListener("click", (event) => {
    event.preventDefault();
    const pane = $("#file-view");
    pane.scrollTop = 0;
    pane.focus();
  });

  const checkoutDialog = $("[data-checkout-dialog]");
  const checkoutForm = $("[data-checkout-form]");
  const termsConsent = $("[data-consent-terms]");
  const supplyConsent = $("[data-consent-supply]");
  const checkoutButton = $("[data-place-order]");
  const consentError = $("[data-consent-error]");

  const updateCheckoutConsent = (showError = false) => {
    const accepted = termsConsent.checked && supplyConsent.checked;
    checkoutButton.disabled = !accepted;
    consentError.hidden = accepted || !showError;
    return accepted;
  };

  const resetCheckoutConsent = () => {
    checkoutForm.reset();
    updateCheckoutConsent();
  };

  const payhipCheckoutUrl = () => {
    const keys = cart.map((id) => products[id]?.payhipKey).filter(Boolean);
    if (!keys.length || keys.length !== cart.length) return null;
    const params = new URLSearchParams();
    if (keys.length === 1) params.set("link", keys[0]);
    else keys.forEach((key) => params.append("cart_links[]", key));
    return attributedPayhipUrl(`https://payhip.com/buy?${params.toString()}`, "checkout");
  };

  const openCheckoutReview = () => {
    if (!cart.length) return;
    closeCart();
    resetCheckoutConsent();
    checkoutDialog.showModal();
    termsConsent.focus();
  };

  $("[data-checkout]").addEventListener("click", openCheckoutReview);
  $$('[data-close-checkout]').forEach((button) => button.addEventListener("click", () => checkoutDialog.close()));
  [termsConsent, supplyConsent].forEach((input) => input.addEventListener("change", () => updateCheckoutConsent(false)));
  $("[data-back-to-cart]").addEventListener("click", () => { checkoutDialog.close(); openCart(lastCartTrigger); });
  checkoutForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!cart.length || !updateCheckoutConsent(true)) return;
    const checkoutUrl = payhipCheckoutUrl();
    if (!checkoutUrl) return;
    trackEvent("checkout_click", { cart_type: cart.length === 1 ? cart[0] : "multi" });
    window.location.assign(checkoutUrl);
  });
  checkoutDialog.addEventListener("click", (event) => { if (event.target === checkoutDialog) checkoutDialog.close(); });
  checkoutDialog.addEventListener("close", resetCheckoutConsent);

  const formatTime = (seconds) => {
    const safe = Number.isFinite(seconds) && seconds > 0 ? Math.floor(seconds) : 0;
    return `${String(Math.floor(safe / 60)).padStart(2, "0")}:${String(safe % 60).padStart(2, "0")}`;
  };

  const updateAudioProgress = () => {
    if (!activeTrack) return;
    const { audio } = activeTrack;
    const duration = Number.isFinite(audio.duration) && audio.duration > 0 ? audio.duration : 30;
    $("[data-dock-progress]").style.width = `${Math.min(audio.currentTime / duration, 1) * 100}%`;
    $("[data-dock-time]").textContent = formatTime(audio.currentTime);
  };

  function updateAudioUi() {
    $$('[data-play]').forEach((button) => {
      const product = products[button.dataset.play];
      if (!product?.demo) return;
      const current = activeTrack?.id === product.id;
      const playing = current && !activeTrack.audio.paused;
      const action = playing ? t("audio.pause") : current ? t("audio.play") : t("product.listen");
      button.textContent = action;
      button.setAttribute("aria-label", `${action} ${product.demo.title}`);
    });
    $$("[data-track]").forEach((row) => row.classList.toggle("is-selected", activeTrack?.id === row.dataset.track));
    const dockToggle = $("[data-dock-toggle]");
    const playing = activeTrack && !activeTrack.audio.paused;
    dockToggle.dataset.state = playing ? "pause" : "play";
    dockToggle.setAttribute("aria-label", t(playing ? "audio.pause" : "audio.play"));
    renderStatus(parseRoute());
  }

  const stopTrack = () => {
    if (!activeTrack) return;
    activeTrack.audio.pause();
    activeTrack.audio.currentTime = 0;
    activeTrack = null;
    $("[data-audio-dock]").hidden = true;
    $("[data-dock-progress]").style.width = "0%";
    $("[data-dock-time]").textContent = "00:00";
    updateAudioUi();
  };

  function startTrack(id) {
    const product = products[id];
    if (!product?.demo) return;
    if (activeTrack?.id === id) {
      if (activeTrack.audio.paused) activeTrack.audio.play().catch(() => showToast(t("audio.unavailable")));
      else activeTrack.audio.pause();
      updateAudioUi();
      return;
    }
    stopTrack(); lastTrackId = id;
    const audio = new Audio(product.demo.src);
    audio.preload = "metadata";
    activeTrack = { id, audio };
    if (!trackedDemoIds.has(id)) {
      trackedDemoIds.add(id);
      trackEvent("demo_play", { pack: id });
    }
    $("[data-audio-dock]").hidden = false;
    $("[data-dock-title]").textContent = product.demo.title;
    $("[data-dock-product]").textContent = productName(product);
    audio.addEventListener("timeupdate", updateAudioProgress);
    audio.addEventListener("loadedmetadata", updateAudioProgress);
    audio.addEventListener("play", updateAudioUi);
    audio.addEventListener("pause", updateAudioUi);
    audio.addEventListener("ended", () => { if (activeTrack?.audio === audio) stopTrack(); });
    audio.addEventListener("error", () => {
      if (activeTrack?.audio !== audio) return;
      showToast(t("audio.unavailable"));
      stopTrack();
    });
    updateAudioUi();
    audio.play().catch(() => {
      if (activeTrack?.audio !== audio) return;
      showToast(t("audio.unavailable"));
      stopTrack();
    });
  }

  $("[data-dock-toggle]").addEventListener("click", () => activeTrack ? startTrack(activeTrack.id) : lastTrackId && startTrack(lastTrackId));
  $("[data-dock-close]").addEventListener("click", stopTrack);

  const updateClock = () => { $("[data-clock]").textContent = new Intl.DateTimeFormat(language === "es" ? "es-ES" : "en-GB", { hour: "2-digit", minute: "2-digit" }).format(new Date()); };
  updateClock();
  setInterval(updateClock, 30000);

  renderCart();
  applyLanguage(language);
})();
