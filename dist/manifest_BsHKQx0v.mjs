import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_HEADER, q as decodeKey } from './chunks/astro/server_D74Uuew0.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

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
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
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
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
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
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///D:/OneCode/article-open/","cacheDir":"file:///D:/OneCode/article-open/node_modules/.astro/","outDir":"file:///D:/OneCode/article-open/dist/","srcDir":"file:///D:/OneCode/article-open/src/","publicDir":"file:///D:/OneCode/article-open/public/","buildClientDir":"file:///D:/OneCode/article-open/dist/client/","buildServerDir":"file:///D:/OneCode/article-open/dist/server/","adapterName":"","routes":[{"file":"file:///D:/OneCode/article-open/dist/404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"file:///D:/OneCode/article-open/dist/about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.md","pathname":"/about","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"file:///D:/OneCode/article-open/dist/analytics/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/analytics","isIndex":true,"type":"page","pattern":"^\\/analytics$","segments":[[{"content":"analytics","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/analytics/index.astro","pathname":"/analytics","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"file:///D:/OneCode/article-open/dist/contact/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"file:///D:/OneCode/article-open/dist/policy/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/policy","isIndex":false,"type":"page","pattern":"^\\/policy$","segments":[[{"content":"policy","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/policy.md","pathname":"/policy","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"file:///D:/OneCode/article-open/dist/rss.xml","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.ts","pathname":"/rss.xml","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"file:///D:/OneCode/article-open/dist/services/copywriter/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/services/copywriter","isIndex":false,"type":"page","pattern":"^\\/services\\/copywriter$","segments":[[{"content":"services","dynamic":false,"spread":false}],[{"content":"copywriter","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services/copywriter.astro","pathname":"/services/copywriter","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"file:///D:/OneCode/article-open/dist/services/marketing/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/services/marketing","isIndex":false,"type":"page","pattern":"^\\/services\\/marketing$","segments":[[{"content":"services","dynamic":false,"spread":false}],[{"content":"marketing","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services/marketing.astro","pathname":"/services/marketing","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"file:///D:/OneCode/article-open/dist/services/seo/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/services/seo","isIndex":false,"type":"page","pattern":"^\\/services\\/seo$","segments":[[{"content":"services","dynamic":false,"spread":false}],[{"content":"seo","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services/seo.astro","pathname":"/services/seo","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"file:///D:/OneCode/article-open/dist/services/website/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/services/website","isIndex":false,"type":"page","pattern":"^\\/services\\/website$","segments":[[{"content":"services","dynamic":false,"spread":false}],[{"content":"website","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services/website.astro","pathname":"/services/website","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"file:///D:/OneCode/article-open/dist/services/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/services","isIndex":true,"type":"page","pattern":"^\\/services$","segments":[[{"content":"services","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services/index.astro","pathname":"/services","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"file:///D:/OneCode/article-open/dist/term/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/term","isIndex":false,"type":"page","pattern":"^\\/term$","segments":[[{"content":"term","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/term.md","pathname":"/term","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"file:///D:/OneCode/article-open/dist/version/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/version","isIndex":false,"type":"page","pattern":"^\\/version$","segments":[[{"content":"version","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/version.md","pathname":"/version","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"file:///D:/OneCode/article-open/dist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}}],"site":"https://nhavantuonglai.com","base":"/","trailingSlash":"never","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["D:/OneCode/article-open/src/utils/blog.ts",{"propagation":"in-tree","containsHead":false}],["D:/OneCode/article-open/src/components/article/highlighted.astro",{"propagation":"in-tree","containsHead":false}],["D:/OneCode/article-open/src/components/article/related.astro",{"propagation":"in-tree","containsHead":false}],["D:/OneCode/article-open/src/pages/[...blog]/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/[...blog]/index@_@astro",{"propagation":"in-tree","containsHead":false}],["D:/OneCode/article-open/src/components/article/latest.astro",{"propagation":"in-tree","containsHead":false}],["D:/OneCode/article-open/src/components/content/article.astro",{"propagation":"in-tree","containsHead":false}],["D:/OneCode/article-open/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["D:/OneCode/article-open/src/pages/[...blog]/[...page].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/[...blog]/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["D:/OneCode/article-open/src/pages/[...blog]/[tag]/[...page].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/[...blog]/[tag]/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["D:/OneCode/article-open/src/pages/rss.xml.ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@ts",{"propagation":"in-tree","containsHead":false}],["D:/OneCode/article-open/src/pages/about.md",{"propagation":"none","containsHead":true}],["D:/OneCode/article-open/src/pages/policy.md",{"propagation":"none","containsHead":true}],["D:/OneCode/article-open/src/pages/term.md",{"propagation":"none","containsHead":true}],["D:/OneCode/article-open/src/pages/version.md",{"propagation":"none","containsHead":true}],["D:/OneCode/article-open/src/pages/404.astro",{"propagation":"none","containsHead":true}],["D:/OneCode/article-open/src/pages/analytics/index.astro",{"propagation":"none","containsHead":true}],["D:/OneCode/article-open/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["D:/OneCode/article-open/src/pages/services/copywriter.astro",{"propagation":"none","containsHead":true}],["D:/OneCode/article-open/src/pages/services/index.astro",{"propagation":"none","containsHead":true}],["D:/OneCode/article-open/src/pages/services/marketing.astro",{"propagation":"none","containsHead":true}],["D:/OneCode/article-open/src/pages/services/seo.astro",{"propagation":"none","containsHead":true}],["D:/OneCode/article-open/src/pages/services/website.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/about@_@md":"pages/about.astro.mjs","\u0000@astro-page:src/pages/analytics/index@_@astro":"pages/analytics.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/policy@_@md":"pages/policy.astro.mjs","\u0000@astro-page:src/pages/rss.xml@_@ts":"pages/rss.xml.astro.mjs","\u0000@astro-page:src/pages/services/copywriter@_@astro":"pages/services/copywriter.astro.mjs","\u0000@astro-page:src/pages/services/marketing@_@astro":"pages/services/marketing.astro.mjs","\u0000@astro-page:src/pages/services/seo@_@astro":"pages/services/seo.astro.mjs","\u0000@astro-page:src/pages/services/website@_@astro":"pages/services/website.astro.mjs","\u0000@astro-page:src/pages/services/index@_@astro":"pages/services.astro.mjs","\u0000@astro-page:src/pages/term@_@md":"pages/term.astro.mjs","\u0000@astro-page:src/pages/version@_@md":"pages/version.astro.mjs","\u0000@astro-page:src/pages/[...blog]/[tag]/[...page]@_@astro":"pages/_---blog_/_tag_/_---page_.astro.mjs","\u0000@astro-page:src/pages/[...blog]/[...page]@_@astro":"pages/_---blog_/_---page_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/[...blog]/index@_@astro":"pages/_---blog_.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_BsHKQx0v.mjs","D:/OneCode/article-open/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_BI4WUkxW.mjs","D:\\OneCode\\article-open\\.astro\\content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","D:\\OneCode\\article-open\\.astro\\content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_fYeOJb2u.mjs","~/assets/framer.jsx":"_astro/framer.DMG11ufi.js","@astrojs/react/client.js":"_astro/client.Ck7an2Yk.js","D:/OneCode/article-open/src/components/widgets/question.astro?astro&type=script&index=0&lang.ts":"_astro/question.astro_astro_type_script_index_0_lang.C-y7oULV.js","D:/OneCode/article-open/src/components/javascript/dcma.astro?astro&type=script&index=0&lang.ts":"_astro/dcma.astro_astro_type_script_index_0_lang.BP-Kd-PP.js","D:/OneCode/article-open/src/components/javascript/analytics.astro?astro&type=script&index=0&lang.ts":"_astro/analytics.astro_astro_type_script_index_0_lang.gO6KkRef.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["D:/OneCode/article-open/src/components/widgets/question.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"astro:page-load\",()=>{const a=document.querySelectorAll(\".faq-item\");a.forEach(t=>{const e=t.querySelector(\".faq-answer\");e&&(e.style.maxHeight=\"0\",e.style.opacity=\"0\")}),a.forEach(t=>{const e=t.querySelector(\".faq-answer\");e&&(t.addEventListener(\"mouseenter\",()=>{e.style.maxHeight=`${e.scrollHeight}px`,e.style.opacity=\"1\"}),t.addEventListener(\"mouseleave\",()=>{e.style.maxHeight=\"0\",e.style.opacity=\"0\"}))})});"],["D:/OneCode/article-open/src/components/javascript/dcma.astro?astro&type=script&index=0&lang.ts","(function(){document.addEventListener(\"DOMContentLoaded\",function(){var r=\"dmca-badge\",n=\"refurl\",a=document.querySelectorAll(\"a.\"+r);a.forEach(function(e){if(!e.href.includes(n)){var o=e.href.includes(\"?\")?\"&\":\"?\";e.href=e.href+o+n+\"=\"+encodeURIComponent(document.location.href)}})})})();"],["D:/OneCode/article-open/src/components/javascript/analytics.astro?astro&type=script&index=0&lang.ts","(function(e,n,r,t,m){e[t]=e[t]||[],e[t].push({\"gtm.start\":new Date().getTime(),event:\"gtm.js\"});var g=n.getElementsByTagName(r)[0],a=n.createElement(r),s=\"\";a.async=!0,a.src=\"https://www.googletagmanager.com/gtm.js?id=\"+m+s,g.parentNode.insertBefore(a,g)})(window,document,\"script\",\"dataLayer\",\"GTM-WN6L7TJP\");"]],"assets":["/file:///D:/OneCode/article-open/dist/404.html","/file:///D:/OneCode/article-open/dist/about/index.html","/file:///D:/OneCode/article-open/dist/analytics/index.html","/file:///D:/OneCode/article-open/dist/contact/index.html","/file:///D:/OneCode/article-open/dist/policy/index.html","/file:///D:/OneCode/article-open/dist/rss.xml","/file:///D:/OneCode/article-open/dist/services/copywriter/index.html","/file:///D:/OneCode/article-open/dist/services/marketing/index.html","/file:///D:/OneCode/article-open/dist/services/seo/index.html","/file:///D:/OneCode/article-open/dist/services/website/index.html","/file:///D:/OneCode/article-open/dist/services/index.html","/file:///D:/OneCode/article-open/dist/term/index.html","/file:///D:/OneCode/article-open/dist/version/index.html","/file:///D:/OneCode/article-open/dist/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"7TJD3ghKpcQXKzwQGrEoHA45dVr/nOVXUj4x4h7tEL0="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
