import 'cookie';
import 'kleur/colors';
import './chunks/astro/server_BfxwJWhM.mjs';
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

const manifest = deserializeManifest({"hrefRoot":"file:///D:/Onecode/article-open/","adapterName":"","routes":[{"file":"file:///D:/Onecode/article-open/dist/404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"file:///D:/Onecode/article-open/dist/rss.xml","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.ts","pathname":"/rss.xml","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"file:///D:/Onecode/article-open/dist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}}],"site":"https://nhavantuonglai.com","base":"/","trailingSlash":"never","compressHTML":true,"componentMetadata":[["D:/Onecode/article-open/src/pages/404.astro",{"propagation":"none","containsHead":true}],["D:/Onecode/article-open/src/pages/[...blog]/[...page].astro",{"propagation":"in-tree","containsHead":true}],["D:/Onecode/article-open/src/pages/[...blog]/[tag]/[...page].astro",{"propagation":"in-tree","containsHead":true}],["D:/Onecode/article-open/src/pages/[...blog]/index.astro",{"propagation":"in-tree","containsHead":true}],["D:/Onecode/article-open/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["D:/Onecode/article-open/src/utils/blog.ts",{"propagation":"in-tree","containsHead":false}],["D:/Onecode/article-open/src/components/blog/related-post.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/[...blog]/index@_@astro",{"propagation":"in-tree","containsHead":false}],["D:/Onecode/article-open/src/components/widgets/blog-highlighted-post.astro",{"propagation":"in-tree","containsHead":false}],["D:/Onecode/article-open/src/components/widgets/blog-latest-post.astro",{"propagation":"in-tree","containsHead":false}],["D:/Onecode/article-open/src/components/content/article.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/[...blog]/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/[...blog]/[tag]/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["D:/Onecode/article-open/src/pages/rss.xml.ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@ts",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/rss.xml@_@ts":"pages/rss.xml.astro.mjs","\u0000@astro-page:src/pages/[...blog]/[tag]/[...page]@_@astro":"pages/_---blog_/_tag_/_---page_.astro.mjs","\u0000@astro-page:src/pages/[...blog]/[...page]@_@astro":"pages/_---blog_/_---page_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/[...blog]/index@_@astro":"pages/_---blog_.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_B2CfPpKT.mjs","D:/Onecode/article-open/src/content/post/lorem-ipsum-dolor-sit-amet.md?astroContentCollectionEntry=true":"chunks/lorem-ipsum-dolor-sit-amet_ZProJhyL.mjs","D:/Onecode/article-open/src/content/post/lorem-ipsum-nulla-facilisi.md?astroContentCollectionEntry=true":"chunks/lorem-ipsum-nulla-facilisi_DF7dyg3t.mjs","D:/Onecode/article-open/src/content/post/lorem-ipsum-nunc-bibendum.md?astroContentCollectionEntry=true":"chunks/lorem-ipsum-nunc-bibendum_BHIs8jZR.mjs","D:/Onecode/article-open/src/content/post/lorem-ipsum-ut-facilisis.md?astroContentCollectionEntry=true":"chunks/lorem-ipsum-ut-facilisis_Dq0UU2Wk.mjs","D:/Onecode/article-open/src/content/post/lorem-ipsum-dolor-sit-amet.md?astroPropagatedAssets":"chunks/lorem-ipsum-dolor-sit-amet_yRMawFc-.mjs","D:/Onecode/article-open/src/content/post/lorem-ipsum-nulla-facilisi.md?astroPropagatedAssets":"chunks/lorem-ipsum-nulla-facilisi_DEdM1roV.mjs","D:/Onecode/article-open/src/content/post/lorem-ipsum-nunc-bibendum.md?astroPropagatedAssets":"chunks/lorem-ipsum-nunc-bibendum_B1MAF6Qm.mjs","D:/Onecode/article-open/src/content/post/lorem-ipsum-ut-facilisis.md?astroPropagatedAssets":"chunks/lorem-ipsum-ut-facilisis_D7XSO_tB.mjs","D:/Onecode/article-open/src/content/post/lorem-ipsum-dolor-sit-amet.md":"chunks/lorem-ipsum-dolor-sit-amet_BaPkI_ut.mjs","D:/Onecode/article-open/src/content/post/lorem-ipsum-nulla-facilisi.md":"chunks/lorem-ipsum-nulla-facilisi_BlT40p59.mjs","D:/Onecode/article-open/src/content/post/lorem-ipsum-nunc-bibendum.md":"chunks/lorem-ipsum-nunc-bibendum_sR0dHlGS.mjs","D:/Onecode/article-open/src/content/post/lorem-ipsum-ut-facilisis.md":"chunks/lorem-ipsum-ut-facilisis_CDpMM31O.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.D_DKySM-.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/file:///D:/Onecode/article-open/dist/404.html","/file:///D:/Onecode/article-open/dist/rss.xml","/file:///D:/Onecode/article-open/dist/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"experimentalEnvGetSecretEnabled":false});

export { manifest };
