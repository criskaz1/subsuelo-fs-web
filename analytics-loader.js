(() => {
  "use strict";

  const config = window.SUBSUELO_ANALYTICS;
  const enabled = config?.provider === "umami"
    && config.enabled === true
    && typeof config.websiteId === "string"
    && config.websiteId.trim().length > 0
    && typeof config.scriptUrl === "string"
    && /^https:\/\//u.test(config.scriptUrl);
  const queue = [];
  let ready = false;

  const safeData = (data) => Object.fromEntries(Object.entries(data || {})
    .filter(([, value]) => ["string", "number", "boolean"].includes(typeof value))
    .map(([key, value]) => [String(key).slice(0, 40), typeof value === "string" ? value.slice(0, 120) : value]));

  window.SUBSUELO_TRACK = (name, data = {}) => {
    if (!enabled || typeof name !== "string" || !name.trim()) return;
    const event = { name: name.slice(0, 40), data: safeData(data) };
    if (!ready || typeof window.umami?.track !== "function") {
      queue.push(event);
      return;
    }
    window.umami.track(event.name, event.data);
  };

  if (!enabled) return;

  const script = document.createElement("script");
  script.defer = true;
  script.src = config.scriptUrl;
  script.dataset.websiteId = config.websiteId;
  script.dataset.autoTrack = "false";
  script.dataset.doNotTrack = "true";
  if (typeof config.hostUrl === "string" && /^https:\/\//u.test(config.hostUrl)) script.dataset.hostUrl = config.hostUrl;
  script.addEventListener("load", () => {
    ready = typeof window.umami?.track === "function";
    if (!ready) return;
    while (queue.length) {
      const event = queue.shift();
      window.umami.track(event.name, event.data);
    }
  });
  document.head.append(script);

  window.SUBSUELO_TRACK("page_view", {
    path: `${location.pathname}${location.search}`,
    locale: document.documentElement.lang || "es"
  });
})();
