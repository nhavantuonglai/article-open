import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as createAstro, e as addAttribute, a as renderComponent, u as unescapeHTML, F as Fragment } from '../chunks/astro/server_J9QqgmFZ.mjs';
import 'kleur/colors';
import { a as $$Icon, f as findImage, $ as $$Page } from '../chunks/page_DQk_4Keq.mjs';
import { b as getBlogPermalink, c as getCanonical, g as getPermalink } from '../chunks/permalinks_CK5jjW5e.mjs';
import { e as findPostsByIds, f as fetchPosts, h as getRelatedPosts, i as blogPostRobots, j as getStaticPathsBlogPost } from '../chunks/blog_ChQAVSFU.mjs';
import 'clsx';
import { f as $$Image, c as $$Wrapper, $ as $$Action, a as $$Soundcloud } from '../chunks/soundcloud_DahVq9O8.mjs';
import { $ as $$Tags } from '../chunks/tags_CipRPlyI.mjs';
import { $ as $$Grid } from '../chunks/grid_BI_ep33F.mjs';
export { renderers } from '../renderers.mjs';

var __freeze$3 = Object.freeze;
var __defProp$3 = Object.defineProperty;
var __template$3 = (cooked, raw) => __freeze$3(__defProp$3(cooked, "raw", { value: __freeze$3(cooked.slice()) }));
var _a$3;
const $$Progress = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$3 || (_a$3 = __template$3(["", '<div id="scroll-progress" class="bg-primary h-1 fixed top-0 left-0 z-50"></div> <script type="module">\n\n	window.addEventListener("scroll", function () {\n		const scrollableHeight =\n			document.documentElement.scrollHeight - window.innerHeight;\n		const scrolled = window.scrollY;\n		const progressBar = document.getElementById("scroll-progress");\n		const progress = (scrolled / scrollableHeight) * 100;\n		progressBar.style.width = progress + "%";\n	});\n<\/script>'])), maybeRenderHead());
}, "D:/OneCode/article-open/src/components/javascript/progress.astro", void 0);

const $$Astro$4 = createAstro("https://nhavantuonglai.com");
const $$Social = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Social;
  const { text, url, class: className = "inline-block" } = Astro2.props;
  const socialShares = [
    { name: "twitter", icon: "tabler:brand-x", title: "Twitter Share" },
    { name: "facebook", icon: "tabler:brand-facebook", title: "Facebook Share" },
    { name: "linkedin", icon: "tabler:brand-linkedin", title: "Linkedin Share" },
    { name: "whatsapp", icon: "tabler:brand-whatsapp", title: "Whatsapp Share" },
    { name: "mail", icon: "tabler:mail", title: "Email Share" }
  ];
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(className, "class")}> <span class="align-super font-bold text-slate-500 dark:text-slate-400">Share:</span> ${socialShares.map((social) => renderTemplate`<button${addAttribute(social.name, "key")} class="ml-2 rtl:ml-0 rtl:mr-2"${addAttribute(social.title, "title")}${addAttribute(social.name, "data-aw-social-share")}${addAttribute(url, "data-aw-url")}${addAttribute(text, "data-aw-text")}> ${renderComponent($$result, "Icon", $$Icon, { "name": social.icon, "class": "w-6 h-6 text-gray-400 dark:text-slate-500 hover:text-black dark:hover:text-slate-300" })} </button>`)} </div>`;
}, "D:/OneCode/article-open/src/components/common/social.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw) }));
var _a$2;
const $$Table$1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$2 || (_a$2 = __template$2(["<script type=\"module\">\n\n	function generateTOC() {\n		const index = document.getElementById('index');\n		const headings = document.querySelectorAll('h2, h3, h4');\n\n		const tocList = document.createElement('ul');\n		let currentParent = null;\n\n		headings.forEach(heading => {\n			const listItem = document.createElement('li');\n			const anchor = document.createElement('a');\n			anchor.href = `#${heading.id}`;\n			anchor.textContent = heading.textContent;\n			listItem.appendChild(anchor);\n\n			switch (heading.tagName.toLowerCase()) {\n				case 'h2':\n					break;\n				case 'h3':\n					listItem.style.fontStyle = 'italic';\n					break;\n				case 'h4':\n					break;\n			}\n\n			if (heading.tagName.toLowerCase() === 'h3' || heading.tagName.toLowerCase() === 'h4') {\n				if (currentParent) {\n					const subList = currentParent.querySelector('ul') || document.createElement('ul');\n					subList.appendChild(listItem);\n					currentParent.appendChild(subList);\n				}\n			} else {\n				tocList.appendChild(listItem);\n				currentParent = listItem;\n			}\n		});\n\n		index.appendChild(tocList);\n\n		hideLastTOCItems(tocList, 21);\n	}\n\n	function hideLastTOCItems(tocList, count) {\n		const items = tocList.querySelectorAll('li');\n		const totalItems = items.length;\n\n		const itemsToHide = Math.min(count, totalItems);\n\n		for (let i = totalItems - itemsToHide; i < totalItems; i++) {\n			items[i].style.display = 'none';\n		}\n	}\n\n	window.onload = generateTOC;\n\n<\/script>"], ["<script type=\"module\">\n\n	function generateTOC() {\n		const index = document.getElementById('index');\n		const headings = document.querySelectorAll('h2, h3, h4');\n\n		const tocList = document.createElement('ul');\n		let currentParent = null;\n\n		headings.forEach(heading => {\n			const listItem = document.createElement('li');\n			const anchor = document.createElement('a');\n			anchor.href = \\`#\\${heading.id}\\`;\n			anchor.textContent = heading.textContent;\n			listItem.appendChild(anchor);\n\n			switch (heading.tagName.toLowerCase()) {\n				case 'h2':\n					break;\n				case 'h3':\n					listItem.style.fontStyle = 'italic';\n					break;\n				case 'h4':\n					break;\n			}\n\n			if (heading.tagName.toLowerCase() === 'h3' || heading.tagName.toLowerCase() === 'h4') {\n				if (currentParent) {\n					const subList = currentParent.querySelector('ul') || document.createElement('ul');\n					subList.appendChild(listItem);\n					currentParent.appendChild(subList);\n				}\n			} else {\n				tocList.appendChild(listItem);\n				currentParent = listItem;\n			}\n		});\n\n		index.appendChild(tocList);\n\n		hideLastTOCItems(tocList, 21);\n	}\n\n	function hideLastTOCItems(tocList, count) {\n		const items = tocList.querySelectorAll('li');\n		const totalItems = items.length;\n\n		const itemsToHide = Math.min(count, totalItems);\n\n		for (let i = totalItems - itemsToHide; i < totalItems; i++) {\n			items[i].style.display = 'none';\n		}\n	}\n\n	window.onload = generateTOC;\n\n<\/script>"])));
}, "D:/OneCode/article-open/src/components/javascript/table.astro", void 0);

const $$Table = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Table", $$Table$1, {})} ${maybeRenderHead()}<div class="max-w-3xl mx-auto mt-4 mb-6 px-4 sm:px-6 text-xl text-muted md:text-2xl text-muted dark:text-slate-400 text-justify" id="index"></div>`;
}, "D:/OneCode/article-open/src/components/article/table.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$AntiCopy = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<script client:load>\n	document.onselectstart = () => false;\n\n	function preventCopy(e) {\n		e.preventDefault();\n	}\n\n	function allowCopy() {\n		return true;\n	}\n\n	if (window.sidebar) {\n		document.onmousedown = preventCopy;\n		document.onclick = allowCopy;\n	}\n<\/script> <script client:load type="text/javascript">\n	function preventRightClickIE() {\n		if (document.all) {\n			return false;\n		}\n	}\n\n	function preventRightClickNS(e) {\n		if (document.layers || (document.getElementById && !document.all)) {\n			if (e.which == 2 || e.which == 3) {\n				return false;\n			}\n		}\n	}\n\n	if (document.layers) {\n		document.captureEvents(Event.MOUSEDOWN);\n		document.onmousedown = preventRightClickNS;\n	} else {\n		document.onmouseup = preventRightClickNS;\n		document.oncontextmenu = preventRightClickIE;\n	}\n\n	document.oncontextmenu = () => false;\n<\/script>'])));
}, "D:/OneCode/article-open/src/components/javascript/anti-copy.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$3 = createAstro("https://nhavantuonglai.com");
const $$Single = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Single;
  const { post, url } = Astro2.props;
  const { Content } = post;
  return renderTemplate(_a || (_a = __template(["", '<section class="py-20 max-w-7xl mx-auto pb-10"> <article> <header> <h1 class="mb-6 md:mb-12 px-4 sm:px-6 max-w-3xl mx-auto text-4xl md:text-5xl font-bold text-primary leading-tighter tracking-tighter font-heading"> ', ' </h1> <p class="max-w-3xl mx-auto mt-4 mb-6 px-4 sm:px-6 text-xl md:text-2xl text-muted dark:text-slate-400 text-justify"> ', ' </p> <div class="text-xl md:text-2xl text-muted dark:text-slate-400 flex justify-between flex-col sm:flex-row max-w-3xl mx-auto mt-0 mb-2 px-4 sm:px-6 sm:items-center"> <p> <time', ' class="inline-block"> ', " </time> ", `
&nbsp;\xB7 <span id="counter"></span> l\u01B0\u1EE3t xem.
<script client:load>
						let count = localStorage.getItem('pageCounter');
						if (count === null) {
							count = Math.floor(Math.random() * (543 - 74 + 1)) + 45;
						} else {
							count = parseInt(count);
						}

						count += 1;

						localStorage.setItem('pageCounter', count);
						document.getElementById('counter').textContent = count;
					<\/script> </p> </div> </header> `, " ", " ", ' <div class="sm:px-6 max-w-3xl px-6 text-justify mx-auto prose prose-xl md:text-2xl dark:prose-invert dark:prose-headings:text-primary prose-headings:font-heading prose-headings:leading-tighter prose-headings:tracking-tighter prose-headings:text-primary prose-h2:font-bold prose-h3:font-bold prose-h3:italic prose-h4:italic prose-a:font-bold prose-a:text-primary prose-a:target-blank dark:prose-a:text-accent prose-img:rounded-md mt-4 prose-headings:scroll-mt-[20px]"> ', ' </div> <div class="mx-auto px-6 sm:px-6 max-w-3xl mt-8 flex justify-between flex-col sm:flex-row"> ', ' </div> <div class="mx-auto px-6 sm:px-6 max-w-3xl mt-8 flex justify-between flex-col sm:flex-row"> ', " </div> </article> </section>"])), maybeRenderHead(), post.title, post.description, addAttribute(post.pubDatetime, "datetime"), `${new Date(post.pubDatetime).toLocaleDateString("vi-VN", { day: "numeric", month: "numeric", year: "numeric" }).replace(/(\d{1,2})\/(\d{1,2})\/(\d{4})/, "\u0110\u0103ng ng\xE0y $1 th\xE1ng $2 n\u0103m $3")}`, post.readingTime && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`
&nbsp;· <span>${post.readingTime}</span> phút đọc
` })}`, renderComponent($$result, "Table", $$Table, {}), post.image ? renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": post.image, "class": "max-w-3xl mx-auto mt-4 mb-6 px-4 sm:px-6", "widths": [400, 900], "sizes": "(max-width: 900px) 400px, 900px", "alt": post?.description || "", "width": "auto", "height": "auto", "loading": "eager", "decoding": "async" })}` : renderTemplate`<div class="border-t dark:border-slate-700"></div>`, renderComponent($$result, "Anticopy", $$AntiCopy, {}), Content ? renderTemplate`${renderComponent($$result, "Content", Content, {})}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(post.content || "")}` })}`, renderComponent($$result, "PostTags", $$Tags, { "tags": post.tags, "class": "mr-5 rtl:mr-0 rtl:ml-5" }), renderComponent($$result, "SocialShare", $$Social, { "url": url, "text": post.title, "class": "mt-5 sm:mt-1 align-middle text-gray-500 dark:text-slate-600" }));
}, "D:/OneCode/article-open/src/components/article/single.astro", void 0);

const $$Astro$2 = createAstro("https://nhavantuonglai.com");
const $$Highlighted = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Highlighted;
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
  return renderTemplate`${renderTemplate`${renderComponent($$result, "Wrapper", $$Wrapper, { "id": id, "isDark": isDark, "containerClass": classes?.container, "bg": bg }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="flex flex-col lg:justify-between lg:flex-row mb-6">${title && renderTemplate`<div class="md:max-w-sm"><h2 class="text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none group font-heading mb-2">${unescapeHTML(title)}</h2>${linkText && linkUrl && renderTemplate`<a class="text-muted dark:text-slate-400 hover:text-primary transition ease-in duration-200 block mb-6 lg:mb-0"${addAttribute(linkUrl, "href")} target="_blank">${linkText} »
</a>`}</div>`}${information && renderTemplate`<p class="text-muted dark:text-slate-400 lg:text-sm lg:max-w-md">${unescapeHTML(information)}</p>`}</div>${renderComponent($$result2, "Grid", $$Grid, { "posts": posts })}` })}`}`;
}, "D:/OneCode/article-open/src/components/article/highlighted.astro", void 0);

const $$Astro$1 = createAstro("https://nhavantuonglai.com");
const $$Related = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Related;
  const { post } = Astro2.props;
  const fetchedPosts = await fetchPosts();
  const relatedPosts = post.tags ? getRelatedPosts(fetchedPosts, post.slug, post.tags) : [];
  const randomPosts = relatedPosts.sort(() => Math.random() - 0.5).slice(0, 99);
  return renderTemplate`${renderTemplate`${renderComponent($$result, "BlogHighlightedPosts", $$Highlighted, { "classes": { container: "pt-0 lg:pt-0 md:pt-0" }, "title": "C\xF3 th\u1EC3 b\u1EA1n ch\u01B0a \u0111\u1ECDc", "linkText": "Xem t\u1EA5t c\u1EA3", "linkUrl": getBlogPermalink(), "postIds": randomPosts.map((post2) => post2.id) })}`}`;
}, "D:/OneCode/article-open/src/components/article/related.astro", void 0);

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
  const metadata = {
    title: post.title,
    description: post.description,
    robots: {
      index: blogPostRobots?.index,
      follow: blogPostRobots?.follow
    },
    openGraph: {
      type: "article",
      ...image ? { images: [{ url: image, width: 1200, height: 630 }] } : {}
    },
    ...post?.metadata,
    canonical: post?.metadata?.canonical || url
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Page, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Progress", $$Progress, {})} ${renderComponent($$result2, "Article", $$Single, { "post": { ...post, image }, "url": url })} ${renderComponent($$result2, "Related", $$Related, { "post": post })} ${renderComponent($$result2, "Action", $$Action, {})} ${renderComponent($$result2, "Soundcloud", $$Soundcloud, {})} ` })}`;
}, "D:/OneCode/article-open/src/pages/[...blog]/index.astro", void 0);

const $$file = "D:/OneCode/article-open/src/pages/[...blog]/index.astro";
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
