(() => {
  "use strict";

  const path = location.pathname.length > 1 ? location.pathname.replace(/\/+$/, "") : "/";
  const validRoutePatterns = [
    /^\/(?:home|demos|help|bundle|legal)$/,
    /^\/category\/(?:trap|garage|jungle|hiphop|dub|noir)$/,
    /^\/legal\/(?:notice|privacy|terms|refund|license|storage|accessibility)$/,
    /^\/product\/(?:trap|garage|jungle|low|abyss|noir)(?:\/(?:es|en)(?:\/(?:readme|prompts|negatives|guide|license))?|\/demos(?:\/preview)?)?$/
  ];

  if (!validRoutePatterns.some((pattern) => pattern.test(path))) return;

  const destination = new URL("/", location.origin);
  destination.searchParams.set("__route", path);
  location.replace(destination.href);
})();
