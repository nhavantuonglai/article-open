import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as createAstro, b as addAttribute, a as renderComponent, F as Fragment, u as unescapeHTML } from '../chunks/astro/server_cgYrkjj8.mjs';
import 'kleur/colors';
import merge from 'lodash.merge';
import { k as $$Icon, j as getFormattedDate, i as $$Image, o as getBlogPermalink, l as $$Button, I as I18N, q as findPostsByIds, m as $$WidgetWrapper, r as fetchPosts, s as getRelatedPosts, t as getCanonical, h as getPermalink, f as findImage, u as blogPostRobots, v as getStaticPathsBlogPost, $ as $$CallToAction, a as $$PageLayout } from '../chunks/call-to-action_DmB1CxZd.mjs';
import 'clsx';
import { $ as $$Tags } from '../chunks/tags_I6GkNoiQ.mjs';
import { $ as $$Grid } from '../chunks/grid_Dy74GOMd.mjs';
import { $ as $$Floating } from '../chunks/floating_C56U8AIa.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Progress = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<div id="scroll-progress" class="bg-orange-600 h-1 fixed top-0 left-0 z-50"></div> <script type="module">\n  window.addEventListener("scroll", function () {\n    const scrollableHeight =\n      document.documentElement.scrollHeight - window.innerHeight;\n    const scrolled = window.scrollY;\n    const progressBar = document.getElementById("scroll-progress");\n    const progress = (scrolled / scrollableHeight) * 100;\n    progressBar.style.width = progress + "%";\n  });\n<\/script>'])), maybeRenderHead());
}, "D:/Onebook/nhavantuonglai-vn/src/components/blog/progress.astro", void 0);

const $$Astro$4 = createAstro("https://nhavantuonglai.com");
const $$Social = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Social;
  const { text, url, class: className = "inline-block" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(className, "class")}> <span class="align-super font-bold text-slate-500 dark:text-slate-400">Share:</span> <button class="ml-2 rtl:ml-0 rtl:mr-2" title="Twitter Share" data-aw-social-share="twitter"${addAttribute(url, "data-aw-url")}${addAttribute(text, "data-aw-text")}>${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:brand-x", "class": "w-6 h-6 text-gray-400 dark:text-slate-500 hover:text-black dark:hover:text-slate-300" })} </button> <button class="ml-2 rtl:ml-0 rtl:mr-2" title="Facebook Share" data-aw-social-share="facebook"${addAttribute(url, "data-aw-url")}>${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:brand-facebook", "class": "w-6 h-6 text-gray-400 dark:text-slate-500 hover:text-black dark:hover:text-slate-300" })} </button> <button class="ml-2 rtl:ml-0 rtl:mr-2" title="Linkedin Share" data-aw-social-share="linkedin"${addAttribute(url, "data-aw-url")}${addAttribute(text, "data-aw-text")}>${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:brand-linkedin", "class": "w-6 h-6 text-gray-400 dark:text-slate-500 hover:text-black dark:hover:text-slate-300" })} </button> <button class="ml-2 rtl:ml-0 rtl:mr-2" title="Whatsapp Share" data-aw-social-share="whatsapp"${addAttribute(url, "data-aw-url")}${addAttribute(text, "data-aw-text")}>${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:brand-whatsapp", "class": "w-6 h-6 text-gray-400 dark:text-slate-500 hover:text-black dark:hover:text-slate-300" })} </button> <button class="ml-2 rtl:ml-0 rtl:mr-2" title="Email Share" data-aw-social-share="mail"${addAttribute(url, "data-aw-url")}${addAttribute(text, "data-aw-text")}>${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:mail", "class": "w-6 h-6 text-gray-400 dark:text-slate-500 hover:text-black dark:hover:text-slate-300" })} </button> </div>`;
}, "D:/Onebook/nhavantuonglai-vn/src/components/common/social.astro", void 0);

const $$Astro$3 = createAstro("https://nhavantuonglai.com");
const $$SinglePost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SinglePost;
  const { post, url } = Astro2.props;
  const { Content } = post;
  return renderTemplate`${maybeRenderHead()}<section class="py-16 max-w-7xl mx-auto"> <article> <header${addAttribute(post.image ? "" : "", "class")}> <h1 class="px-4 sm:px-6 max-w-3xl mx-auto text-4xl md:text-5xl font-bold text-primary leading-tighter tracking-tighter font-heading"> ${post.title} </h1> <p class="max-w-3xl mx-auto mt-4 mb-8 px-4 sm:px-6 text-xl md:text-2xl text-muted dark:text-slate-400 text-justify"> ${post.description} </p> <div class="flex justify-between flex-col sm:flex-row max-w-3xl mx-auto mt-0 mb-2 px-4 sm:px-6 sm:items-center"> <p> ${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:clock", "class": "w-4 h-4 inline-block -mt-0.5 dark:text-gray-400" })} <time${addAttribute(String(post.pubDatetime), "datetime")} class="inline-block">${getFormattedDate(post.pubDatetime)}</time> ${post.readingTime && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`
&nbsp;· <span>${post.readingTime}</span> phút đọc.
` })}`} </p> </div> ${post.image ? renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": post.image, "class": "max-w-3xl mx-auto mt-4 mb-8 px-4 sm:px-6", "widths": [400, 900], "sizes": "(max-width: 900px) 400px, 900px", "alt": post?.description || "", "width": "auto", "height": "auto", "loading": "eager", "decoding": "async" })}` : renderTemplate`<div <img class="max-w-3xl mx-auto px-4 sm:px-6"> <div class="border-t dark:border-slate-700"></div> </div>`} </header> <div class="text-justify mx-auto px-6 sm:px-6 max-w-3xl prose prose-md text-xl lg:prose-xl dark:prose-invert dark:prose-headings:text-slate-300 prose-headings:font-heading prose-headings:leading-tighter prose-headings:tracking-tighter prose-headings:font-bold prose-a:text-primary dark:prose-a:text-accent prose-img:rounded-md prose-img:shadow-lg mt-4 prose-headings:scroll-mt-[80px]"> ${Content ? renderTemplate`${renderComponent($$result, "Content", Content, {})}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(post.content || "")}` })}`} </div> <div class="mx-auto px-6 sm:px-6 max-w-3xl mt-8 flex justify-between flex-col sm:flex-row"> ${renderComponent($$result, "PostTags", $$Tags, { "tags": post.tags, "class": "mr-5 rtl:mr-0 rtl:ml-5" })} </div> <div class="mx-auto px-6 sm:px-6 max-w-3xl mt-8 flex justify-between flex-col sm:flex-row"> ${renderComponent($$result, "SocialShare", $$Social, { "url": url, "text": post.title, "class": "mt-5 sm:mt-1 align-middle text-gray-500 dark:text-slate-600" })} </div> </article> </section>`;
}, "D:/Onebook/nhavantuonglai-vn/src/components/blog/single-post.astro", void 0);

const $$ToBlogLink = createComponent(($$result, $$props, $$slots) => {
  const { textDirection } = I18N;
  return renderTemplate`${maybeRenderHead()}<div class="mx-auto px-6 sm:px-6 max-w-3xl pt-8 md:pt-4 pb-12 md:pb-20"> ${renderComponent($$result, "Button", $$Button, { "variant": "tertiary", "class": "px-3 md:px-3", "href": getBlogPermalink() }, { "default": ($$result2) => renderTemplate`${textDirection === "rtl" ? renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:chevron-right", "class": "w-5 h-5 mr-1 -ml-1.5 rtl:-mr-1.5 rtl:ml-1" })}` : renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:chevron-left", "class": "w-5 h-5 mr-1 -ml-1.5 rtl:-mr-1.5 rtl:ml-1" })}`} Quay lại.
` })} </div>`;
}, "D:/Onebook/nhavantuonglai-vn/src/components/blog/to-blog-link.astro", void 0);

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
  return renderTemplate`${renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": classes?.container, "bg": bg }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="flex flex-col lg:justify-between lg:flex-row mb-8">${title && renderTemplate`<div class="md:max-w-sm"><h2 class="text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none group font-heading mb-2">${unescapeHTML(title)}</h2>${linkText && linkUrl && renderTemplate`<a class="text-muted dark:text-slate-400 hover:text-primary transition ease-in duration-200 block mb-6 lg:mb-0"${addAttribute(linkUrl, "href")} target="_blank">${linkText} »
</a>`}</div>`}${information && renderTemplate`<p class="text-muted dark:text-slate-400 lg:text-sm lg:max-w-md">${unescapeHTML(information)}</p>`}</div>${renderComponent($$result2, "Grid", $$Grid, { "posts": posts })}` })}` }`;
}, "D:/Onebook/nhavantuonglai-vn/src/components/widgets/blog-highlighted-post.astro", void 0);

const $$Astro$1 = createAstro("https://nhavantuonglai.com");
const $$RelatedPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$RelatedPost;
  const { post } = Astro2.props;
  const fetchedPosts = await fetchPosts();
  const relatedPosts = post.tags ? getRelatedPosts(fetchedPosts, post.slug, post.tags) : [];
  return renderTemplate`${renderTemplate`${renderComponent($$result, "BlogHighlightedPosts", $$BlogHighlightedPost, { "classes": { container: "pt-0 lg:pt-0 md:pt-0" }, "title": "C\xF3 th\u1EC3 b\u1EA1n ch\u01B0a \u0111\u1ECDc", "linkText": "Xem t\u1EA5t c\u1EA3", "linkUrl": getBlogPermalink(), "postIds": relatedPosts.map((post2) => post2.id) })}` }`;
}, "D:/Onebook/nhavantuonglai-vn/src/components/blog/related-post.astro", void 0);

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
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Progress", $$Progress, {})} ${renderComponent($$result2, "SinglePost", $$SinglePost, { "post": { ...post, image }, "url": url })} ${renderComponent($$result2, "ToBlogLink", $$ToBlogLink, {})} ${renderComponent($$result2, "RelatedPosts", $$RelatedPost, { "post": post })} ${renderComponent($$result2, "CTA", $$CallToAction, {})} ${renderComponent($$result2, "Floating", $$Floating, {})} ` })}`;
}, "D:/Onebook/nhavantuonglai-vn/src/pages/[...blog]/index.astro", void 0);

const $$file = "D:/Onebook/nhavantuonglai-vn/src/pages/[...blog]/index.astro";
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
