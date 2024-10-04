import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as createAstro, b as addAttribute, a as renderComponent, F as Fragment, u as unescapeHTML } from '../chunks/astro/server_BfxwJWhM.mjs';
import 'kleur/colors';
import merge from 'lodash.merge';
import { a as $$Icon, b as $$Button, f as findImage, $ as $$PageLayout } from '../chunks/page-layout_7BvdpGlP.mjs';
import { b as getFormattedDate, c as getBlogPermalink, I as I18N, d as getCanonical, a as getPermalink } from '../chunks/permalinks_DgxcdhcO.mjs';
import { e as findPostsByIds, f as fetchPosts, h as getRelatedPosts, i as blogPostRobots, j as getStaticPathsBlogPost } from '../chunks/blog_DVimHaXD.mjs';
import 'clsx';
import { $ as $$Image } from '../chunks/image_Bsu-3NOb.mjs';
import { $ as $$Tags } from '../chunks/tags_B4OAKphF.mjs';
import { $ as $$WidgetWrapper, a as $$Grid, d as $$CallToAction } from '../chunks/call-to-action_Bd1MGNQ_.mjs';
export { renderers } from '../renderers.mjs';

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Progress = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<div id="scroll-progress" class="bg-primary h-1 fixed top-0 left-0 z-50"></div> <script type="module">\n  window.addEventListener("scroll", function () {\n    const scrollableHeight =\n      document.documentElement.scrollHeight - window.innerHeight;\n    const scrolled = window.scrollY;\n    const progressBar = document.getElementById("scroll-progress");\n    const progress = (scrolled / scrollableHeight) * 100;\n    progressBar.style.width = progress + "%";\n  });\n<\/script>'])), maybeRenderHead());
}, "D:/Onecode/article-open/src/components/blog/progress.astro", void 0);

const $$Astro$4 = createAstro("https://nhavantuonglai.com");
const $$Social = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Social;
  const { text, url, class: className = "inline-block" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(className, "class")}> <span class="align-super font-bold text-slate-500 dark:text-slate-400">Share:</span> <button class="ml-2 rtl:ml-0 rtl:mr-2" title="Twitter Share" data-aw-social-share="twitter"${addAttribute(url, "data-aw-url")}${addAttribute(text, "data-aw-text")}>${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:brand-x", "class": "w-6 h-6 text-gray-400 dark:text-slate-500 hover:text-black dark:hover:text-slate-300" })} </button> <button class="ml-2 rtl:ml-0 rtl:mr-2" title="Facebook Share" data-aw-social-share="facebook"${addAttribute(url, "data-aw-url")}>${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:brand-facebook", "class": "w-6 h-6 text-gray-400 dark:text-slate-500 hover:text-black dark:hover:text-slate-300" })} </button> <button class="ml-2 rtl:ml-0 rtl:mr-2" title="Linkedin Share" data-aw-social-share="linkedin"${addAttribute(url, "data-aw-url")}${addAttribute(text, "data-aw-text")}>${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:brand-linkedin", "class": "w-6 h-6 text-gray-400 dark:text-slate-500 hover:text-black dark:hover:text-slate-300" })} </button> <button class="ml-2 rtl:ml-0 rtl:mr-2" title="Whatsapp Share" data-aw-social-share="whatsapp"${addAttribute(url, "data-aw-url")}${addAttribute(text, "data-aw-text")}>${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:brand-whatsapp", "class": "w-6 h-6 text-gray-400 dark:text-slate-500 hover:text-black dark:hover:text-slate-300" })} </button> <button class="ml-2 rtl:ml-0 rtl:mr-2" title="Email Share" data-aw-social-share="mail"${addAttribute(url, "data-aw-url")}${addAttribute(text, "data-aw-text")}>${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:mail", "class": "w-6 h-6 text-gray-400 dark:text-slate-500 hover:text-black dark:hover:text-slate-300" })} </button> </div>`;
}, "D:/Onecode/article-open/src/components/common/social.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$AntiCopy = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<script client:load>\n	document.onselectstart = () => false;\n\n	function preventCopy(e) {\n		e.preventDefault();\n	}\n\n	function allowCopy() {\n		return true;\n	}\n\n	if (window.sidebar) {\n		document.onmousedown = preventCopy;\n		document.onclick = allowCopy;\n	}\n<\/script> <script client:load type="text/javascript">\n	function preventRightClickIE() {\n		if (document.all) {\n			return false;\n		}\n	}\n\n	function preventRightClickNS(e) {\n		if (document.layers || (document.getElementById && !document.all)) {\n			if (e.which == 2 || e.which == 3) {\n				return false;\n			}\n		}\n	}\n\n	if (document.layers) {\n		document.captureEvents(Event.MOUSEDOWN);\n		document.onmousedown = preventRightClickNS;\n	} else {\n		document.onmouseup = preventRightClickNS;\n		document.oncontextmenu = preventRightClickIE;\n	}\n\n	document.oncontextmenu = () => false;\n<\/script>'])));
}, "D:/Onecode/article-open/src/components/widgets/anti-copy.astro", void 0);

const $$Astro$3 = createAstro("https://nhavantuonglai.com");
const $$SinglePost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SinglePost;
  const { post, url } = Astro2.props;
  const { Content } = post;
  return renderTemplate`${maybeRenderHead()}<section class="py-20 max-w-7xl mx-auto pb-10"> <article> ${renderComponent($$result, "Anticopy", $$AntiCopy, {})} <header${addAttribute(post.image ? "" : "", "class")}> <h1 class="mb-6 md:mb-12 px-4 sm:px-6 max-w-3xl mx-auto text-4xl md:text-5xl font-bold text-primary leading-tighter tracking-tighter font-heading"> ${post.title} </h1> <p class="max-w-3xl mx-auto mt-4 mb-6 px-4 sm:px-6 text-xl md:text-2xl text-muted dark:text-slate-400 text-justify"> ${post.description} </p> <div class="flex justify-between flex-col sm:flex-row max-w-3xl mx-auto mt-0 mb-2 px-4 sm:px-6 sm:items-center"> <p> ${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:clock", "class": "w-4 h-4 inline-block -mt-0.5 dark:text-gray-400" })} <time${addAttribute(String(post.pubDatetime), "datetime")} class="inline-block">${getFormattedDate(post.pubDatetime)}</time> ${post.readingTime && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`
&nbsp;· <span>${post.readingTime}</span> phút đọc.
` })}`} </p> </div> ${post.image ? renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": post.image, "class": "max-w-3xl mx-auto mt-4 mb-6 px-4 sm:px-6", "widths": [400, 900], "sizes": "(max-width: 900px) 400px, 900px", "alt": post?.description || "", "width": "auto", "height": "auto", "loading": "eager", "decoding": "async" })}` : renderTemplate`<div <img class="max-w-3xl mx-auto px-4 sm:px-6"> <div class="border-t dark:border-slate-700"></div> </div>`} </header> <div class="sm:px-6 max-w-3xl px-6 text-justify mx-auto prose prose-xl text-xl dark:prose-invert dark:prose-headings:text-primary prose-headings:font-heading prose-headings:leading-tighter prose-headings:tracking-tighter prose-headings:text-primary prose-h2:font-bold prose-h3:font-bold prose-h3:italic prose-h4:italic prose-a:font-bold prose-a:text-primary prose-a:target-blank dark:prose-a:text-accent prose-img:rounded-md mt-4 prose-headings:scroll-mt-[20px]"> ${Content ? renderTemplate`${renderComponent($$result, "Content", Content, {})}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(post.content || "")}` })}`} </div> <div class="mx-auto px-6 sm:px-6 max-w-3xl mt-8 flex justify-between flex-col sm:flex-row"> ${renderComponent($$result, "PostTags", $$Tags, { "tags": post.tags, "class": "mr-5 rtl:mr-0 rtl:ml-5" })} </div> <div class="mx-auto px-6 sm:px-6 max-w-3xl mt-8 flex justify-between flex-col sm:flex-row"> ${renderComponent($$result, "SocialShare", $$Social, { "url": url, "text": post.title, "class": "mt-5 sm:mt-1 align-middle text-gray-500 dark:text-slate-600" })} </div> </article> </section>`;
}, "D:/Onecode/article-open/src/components/blog/single-post.astro", void 0);

const $$ToBlogLink = createComponent(($$result, $$props, $$slots) => {
  const { textDirection } = I18N;
  return renderTemplate`${maybeRenderHead()}<div class="mx-auto px-6 sm:px-6 max-w-3xl pb-10"> ${renderComponent($$result, "Button", $$Button, { "variant": "tertiary", "class": "px-3 md:px-3", "href": getBlogPermalink() }, { "default": ($$result2) => renderTemplate`${textDirection === "rtl" ? renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:chevron-right", "class": "w-5 h-5 mr-1 -ml-1.5 rtl:-mr-1.5 rtl:ml-1" })}` : renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:chevron-left", "class": "w-5 h-5 mr-1 -ml-1.5 rtl:-mr-1.5 rtl:ml-1" })}`} Quay lại.
` })} </div>`;
}, "D:/Onecode/article-open/src/components/blog/to-blog-link.astro", void 0);

const $$Astro$2 = createAstro("https://nhavantuonglai.com");
const $$BlogHighlightedPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BlogHighlightedPost;
  const {
    title = await Astro2.slots.render("title"),
    linkText = "View all posts",
    linkUrl = getBlogPermalink(),
    information = await Astro2.slots.render("information"),
    postIds = [],
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  const posts = await findPostsByIds(postIds) ;
  return renderTemplate`${renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": classes?.container, "bg": bg }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="flex flex-col lg:justify-between lg:flex-row mb-6">${title && renderTemplate`<div class="md:max-w-sm"><h2 class="text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none group font-heading mb-2">${unescapeHTML(title)}</h2>${linkText && linkUrl && renderTemplate`<a class="text-muted dark:text-slate-400 hover:text-primary transition ease-in duration-200 block mb-6 lg:mb-0"${addAttribute(linkUrl, "href")} target="_blank">${linkText} »
</a>`}</div>`}${information && renderTemplate`<p class="text-muted dark:text-slate-400 lg:text-sm lg:max-w-md">${unescapeHTML(information)}</p>`}</div>${renderComponent($$result2, "Grid", $$Grid, { "posts": posts })}` })}` }`;
}, "D:/Onecode/article-open/src/components/widgets/blog-highlighted-post.astro", void 0);

const $$Astro$1 = createAstro("https://nhavantuonglai.com");
const $$RelatedPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$RelatedPost;
  const { post } = Astro2.props;
  const fetchedPosts = await fetchPosts();
  const relatedPosts = post.tags ? getRelatedPosts(fetchedPosts, post.slug, post.tags) : [];
  return renderTemplate`${renderTemplate`${renderComponent($$result, "BlogHighlightedPosts", $$BlogHighlightedPost, { "classes": { container: "pt-0 lg:pt-0 md:pt-0" }, "title": "C\xF3 th\u1EC3 b\u1EA1n ch\u01B0a \u0111\u1ECDc", "linkText": "Xem t\u1EA5t c\u1EA3", "linkUrl": getBlogPermalink(), "postIds": relatedPosts.map((post2) => post2.id) })}` }`;
}, "D:/Onecode/article-open/src/components/blog/related-post.astro", void 0);

const $$Astro = createAstro("https://nhavantuonglai.com");
const prerender = true;
const getStaticPaths = async () => {
  return await getStaticPathsBlogPost();
};
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { post } = Astro2.props;
  const url = getCanonical(getPermalink(post.permalink, "post"));
  const image = await findImage(post.image);
  const metadata = merge(
    {
      title: post.title,
      description: post.description,
      robots: {
        index: blogPostRobots?.index,
        follow: blogPostRobots?.follow
      },
      openGraph: {
        type: "article",
        ...image ? { images: [{ url: image, width: image?.width, height: image?.height }] } : {}
      }
    },
    { ...post?.metadata ? { ...post.metadata, canonical: post.metadata?.canonical || url } : {} }
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Progress", $$Progress, {})} ${renderComponent($$result2, "SinglePost", $$SinglePost, { "post": { ...post, image }, "url": url })} ${renderComponent($$result2, "ToBlogLink", $$ToBlogLink, {})} ${renderComponent($$result2, "RelatedPosts", $$RelatedPost, { "post": post })} ${renderComponent($$result2, "CTA", $$CallToAction, {})} ` })}`;
}, "D:/Onecode/article-open/src/pages/[...blog]/index.astro", void 0);

const $$file = "D:/Onecode/article-open/src/pages/[...blog]/index.astro";
const $$url = "/[...blog]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
