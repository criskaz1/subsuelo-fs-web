(() => {
  "use strict";

  const path = location.pathname.length > 1 ? location.pathname.replace(/\/+$/, "") : "/";
  const validRoutePatterns = [
    /^\/en$/,
    /^\/(?:en\/)?(?:home|demos|help|bundle|legal)$/,
    /^\/(?:en\/)?category\/[a-z0-9-]+$/,
    /^\/(?:en\/)?legal\/(?:notice|privacy|terms|refund|license|storage|accessibility)$/,
    /^\/(?:en\/)?product\/[a-z0-9-]+(?:\/(?:es|en)(?:\/(?:readme|prompts|negatives|guide|license))?|\/demos(?:\/preview)?)?$/
  ];

  if (!validRoutePatterns.some((pattern) => pattern.test(path))) return;

  const destination = new URL(path === "/en" || path.startsWith("/en/") ? "/en/" : "/", location.origin);
  destination.searchParams.set("__route", path);
  location.replace(destination.href);
})();
