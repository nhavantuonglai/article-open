import 'cookie';
import 'kleur/colors';
import './chunks/astro/server_CPaUVu3N.mjs';
import 'clsx';
import 'html-escaper';
import { compile } from 'path-to-regexp';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///D:/Onecode/article-open/","adapterName":"","routes":[{"file":"file:///D:/Onecode/article-open/dist/404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"file:///D:/Onecode/article-open/dist/about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.md","pathname":"/about","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"file:///D:/Onecode/article-open/dist/analytics/count/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/analytics/count","isIndex":false,"type":"page","pattern":"^\\/analytics\\/count$","segments":[[{"content":"analytics","dynamic":false,"spread":false}],[{"content":"count","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/analytics/count.astro","pathname":"/analytics/count","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"file:///D:/Onecode/article-open/dist/analytics/emoji/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/analytics/emoji","isIndex":false,"type":"page","pattern":"^\\/analytics\\/emoji$","segments":[[{"content":"analytics","dynamic":false,"spread":false}],[{"content":"emoji","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/analytics/emoji.astro","pathname":"/analytics/emoji","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"file:///D:/Onecode/article-open/dist/analytics/lower/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/analytics/lower","isIndex":false,"type":"page","pattern":"^\\/analytics\\/lower$","segments":[[{"content":"analytics","dynamic":false,"spread":false}],[{"content":"lower","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/analytics/lower.astro","pathname":"/analytics/lower","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"file:///D:/Onecode/article-open/dist/analytics/normalize/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/analytics/normalize","isIndex":false,"type":"page","pattern":"^\\/analytics\\/normalize$","segments":[[{"content":"analytics","dynamic":false,"spread":false}],[{"content":"normalize","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/analytics/normalize.astro","pathname":"/analytics/normalize","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"file:///D:/Onecode/article-open/dist/analytics/unicode/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/analytics/unicode","isIndex":false,"type":"page","pattern":"^\\/analytics\\/unicode$","segments":[[{"content":"analytics","dynamic":false,"spread":false}],[{"content":"unicode","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/analytics/unicode.astro","pathname":"/analytics/unicode","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"file:///D:/Onecode/article-open/dist/analytics/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/analytics","isIndex":true,"type":"page","pattern":"^\\/analytics$","segments":[[{"content":"analytics","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/analytics/index.astro","pathname":"/analytics","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"file:///D:/Onecode/article-open/dist/contact/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"file:///D:/Onecode/article-open/dist/policy/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/policy","isIndex":false,"type":"page","pattern":"^\\/policy$","segments":[[{"content":"policy","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/policy.md","pathname":"/policy","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"file:///D:/Onecode/article-open/dist/rss.xml","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.ts","pathname":"/rss.xml","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"file:///D:/Onecode/article-open/dist/term/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/term","isIndex":false,"type":"page","pattern":"^\\/term$","segments":[[{"content":"term","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/term.md","pathname":"/term","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"file:///D:/Onecode/article-open/dist/version/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/version","isIndex":false,"type":"page","pattern":"^\\/version$","segments":[[{"content":"version","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/version.md","pathname":"/version","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"file:///D:/Onecode/article-open/dist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}}],"site":"https://nhavantuonglai.com","base":"/","trailingSlash":"never","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["D:/Onecode/article-open/src/utils/blog.ts",{"propagation":"in-tree","containsHead":false}],["D:/Onecode/article-open/src/components/blog/related-post.astro",{"propagation":"in-tree","containsHead":false}],["D:/Onecode/article-open/src/pages/[...blog]/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/[...blog]/index@_@astro",{"propagation":"in-tree","containsHead":false}],["D:/Onecode/article-open/src/components/widgets/blog-highlighted-post.astro",{"propagation":"in-tree","containsHead":false}],["D:/Onecode/article-open/src/components/widgets/blog-latest-post.astro",{"propagation":"in-tree","containsHead":false}],["D:/Onecode/article-open/src/components/content/article.astro",{"propagation":"in-tree","containsHead":false}],["D:/Onecode/article-open/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["D:/Onecode/article-open/src/pages/[...blog]/[...page].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/[...blog]/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["D:/Onecode/article-open/src/pages/[...blog]/[tag]/[...page].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/[...blog]/[tag]/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["D:/Onecode/article-open/src/pages/rss.xml.ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@ts",{"propagation":"in-tree","containsHead":false}],["D:/Onecode/article-open/src/pages/about.md",{"propagation":"none","containsHead":true}],["D:/Onecode/article-open/src/pages/policy.md",{"propagation":"none","containsHead":true}],["D:/Onecode/article-open/src/pages/term.md",{"propagation":"none","containsHead":true}],["D:/Onecode/article-open/src/pages/version.md",{"propagation":"none","containsHead":true}],["D:/Onecode/article-open/src/pages/404.astro",{"propagation":"none","containsHead":true}],["D:/Onecode/article-open/src/pages/analytics/count.astro",{"propagation":"none","containsHead":true}],["D:/Onecode/article-open/src/pages/analytics/emoji.astro",{"propagation":"none","containsHead":true}],["D:/Onecode/article-open/src/pages/analytics/index.astro",{"propagation":"none","containsHead":true}],["D:/Onecode/article-open/src/pages/analytics/lower.astro",{"propagation":"none","containsHead":true}],["D:/Onecode/article-open/src/pages/analytics/normalize.astro",{"propagation":"none","containsHead":true}],["D:/Onecode/article-open/src/pages/analytics/unicode.astro",{"propagation":"none","containsHead":true}],["D:/Onecode/article-open/src/pages/contact.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/about@_@md":"pages/about.astro.mjs","\u0000@astro-page:src/pages/analytics/count@_@astro":"pages/analytics/count.astro.mjs","\u0000@astro-page:src/pages/analytics/emoji@_@astro":"pages/analytics/emoji.astro.mjs","\u0000@astro-page:src/pages/analytics/lower@_@astro":"pages/analytics/lower.astro.mjs","\u0000@astro-page:src/pages/analytics/normalize@_@astro":"pages/analytics/normalize.astro.mjs","\u0000@astro-page:src/pages/analytics/unicode@_@astro":"pages/analytics/unicode.astro.mjs","\u0000@astro-page:src/pages/analytics/index@_@astro":"pages/analytics.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/policy@_@md":"pages/policy.astro.mjs","\u0000@astro-page:src/pages/rss.xml@_@ts":"pages/rss.xml.astro.mjs","\u0000@astro-page:src/pages/term@_@md":"pages/term.astro.mjs","\u0000@astro-page:src/pages/version@_@md":"pages/version.astro.mjs","\u0000@astro-page:src/pages/[...blog]/[tag]/[...page]@_@astro":"pages/_---blog_/_tag_/_---page_.astro.mjs","\u0000@astro-page:src/pages/[...blog]/[...page]@_@astro":"pages/_---blog_/_---page_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/[...blog]/index@_@astro":"pages/_---blog_.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_Oh-cnW2U.mjs","D:/Onecode/article-open/src/content/post/analytics-count.md?astroContentCollectionEntry=true":"chunks/analytics-count_BrqQgJEu.mjs","D:/Onecode/article-open/src/content/post/analytics-lower.md?astroContentCollectionEntry=true":"chunks/analytics-lower_Buy-imUw.mjs","D:/Onecode/article-open/src/content/post/analytics-normalize.md?astroContentCollectionEntry=true":"chunks/analytics-normalize_CObOmEGG.mjs","D:/Onecode/article-open/src/content/post/analytics-unicode.md?astroContentCollectionEntry=true":"chunks/analytics-unicode_B7XoOa5Y.mjs","D:/Onecode/article-open/src/content/post/analytics-count.md?astroPropagatedAssets":"chunks/analytics-count_BLIYOe4Z.mjs","D:/Onecode/article-open/src/content/post/analytics-lower.md?astroPropagatedAssets":"chunks/analytics-lower_ByA9i8XK.mjs","D:/Onecode/article-open/src/content/post/analytics-normalize.md?astroPropagatedAssets":"chunks/analytics-normalize_C0Jpqscm.mjs","D:/Onecode/article-open/src/content/post/analytics-unicode.md?astroPropagatedAssets":"chunks/analytics-unicode_BWpJOXxu.mjs","D:/Onecode/article-open/src/content/post/analytics-count.md":"chunks/analytics-count_yDP5aVO6.mjs","D:/Onecode/article-open/src/content/post/analytics-lower.md":"chunks/analytics-lower_C-Ls02uO.mjs","D:/Onecode/article-open/src/content/post/analytics-normalize.md":"chunks/analytics-normalize_B1pBwsOU.mjs","D:/Onecode/article-open/src/content/post/analytics-unicode.md":"chunks/analytics-unicode_DZeWivNB.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.D_DKySM-.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/file:///D:/Onecode/article-open/dist/404.html","/file:///D:/Onecode/article-open/dist/about/index.html","/file:///D:/Onecode/article-open/dist/analytics/count/index.html","/file:///D:/Onecode/article-open/dist/analytics/emoji/index.html","/file:///D:/Onecode/article-open/dist/analytics/lower/index.html","/file:///D:/Onecode/article-open/dist/analytics/normalize/index.html","/file:///D:/Onecode/article-open/dist/analytics/unicode/index.html","/file:///D:/Onecode/article-open/dist/analytics/index.html","/file:///D:/Onecode/article-open/dist/contact/index.html","/file:///D:/Onecode/article-open/dist/policy/index.html","/file:///D:/Onecode/article-open/dist/rss.xml","/file:///D:/Onecode/article-open/dist/term/index.html","/file:///D:/Onecode/article-open/dist/version/index.html","/file:///D:/Onecode/article-open/dist/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"experimentalEnvGetSecretEnabled":false});

export { manifest };
