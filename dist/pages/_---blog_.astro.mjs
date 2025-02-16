import { c as createComponent, a as renderTemplate, m as maybeRenderHead, b as createAstro, e as addAttribute, r as renderComponent, F as Fragment, u as unescapeHTML } from '../chunks/astro/server_D74Uuew0.mjs';
import 'kleur/colors';
import { b as $$Icon, f as findImage, $ as $$Page } from '../chunks/page_D0LVH7FG.mjs';
import { a as getBlogPermalink, b as getCanonical, g as getPermalink } from '../chunks/consts_DfSyGgUe.mjs';
import { e as findPostsByIds, f as fetchPosts, h as getRelatedPosts, i as blogPostRobots, j as getStaticPathsBlogPost } from '../chunks/blog_BED9qZzI.mjs';
import 'clsx';
import { S as Slideup, c as Slideright, b as $$Image, f as Slideleft, d as $$Wrapper, a as $$Action } from '../chunks/action_dcaZU4o7.mjs';
import { $ as $$Tags } from '../chunks/tags_BR-0ApZb.mjs';
import { $ as $$Grid } from '../chunks/grid_C28bnv9r.mjs';
export { renderers } from '../renderers.mjs';

var __freeze$3 = Object.freeze;
var __defProp$3 = Object.defineProperty;
var __template$3 = (cooked, raw) => __freeze$3(__defProp$3(cooked, "raw", { value: __freeze$3(cooked.slice()) }));
var _a$3;
const $$Progress = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$3 || (_a$3 = __template$3(["", '<div id="scroll-progress" class="bg-primary h-1 fixed top-0 left-0 z-50"></div> <script type="module">\n\n	window.addEventListener("scroll", function () {\n		const scrollableHeight =\n			document.documentElement.scrollHeight - window.innerHeight;\n		const scrolled = window.scrollY;\n		const progressBar = document.getElementById("scroll-progress");\n		const progress = (scrolled / scrollableHeight) * 100;\n		progressBar.style.width = progress + "%";\n	});\n\n<\/script>'])), maybeRenderHead());
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
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
const $$Table = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", `<p class="max-w-3xl mx-auto" id="index"> <script type="module">

		function generateTOC() {
			const index = document.getElementById('index');
			const headings = document.querySelectorAll('h2, h3, h4');

			const tocList = document.createElement('ul');
			let currentParent = null;

			headings.forEach(heading => {
				const listItem = document.createElement('li');
				const anchor = document.createElement('a');
				anchor.href = \`#\${heading.id}\`;
				anchor.textContent = heading.textContent;
				listItem.appendChild(anchor);

				switch (heading.tagName.toLowerCase()) {
					case 'h2':
						break;
					case 'h3':
						listItem.style.fontStyle = 'italic';
						break;
					case 'h4':
						break;
				}

				if (heading.tagName.toLowerCase() === 'h3' || heading.tagName.toLowerCase() === 'h4') {
					if (currentParent) {
						const subList = currentParent.querySelector('ul') || document.createElement('ul');
						subList.appendChild(listItem);
						currentParent.appendChild(subList);
					}
				} else {
					tocList.appendChild(listItem);
					currentParent = listItem;
				}
			});

			index.appendChild(tocList);

			hideLastTOCItems(tocList, 21);
		}

		function hideLastTOCItems(tocList, count) {
			const items = tocList.querySelectorAll('li');
			const totalItems = items.length;

			const itemsToHide = Math.min(count, totalItems);

			for (let i = totalItems - itemsToHide; i < totalItems; i++) {
				items[i].style.display = 'none';
			}
		}

		window.onload = generateTOC;

	<\/script> </p>`], ["", `<p class="max-w-3xl mx-auto" id="index"> <script type="module">

		function generateTOC() {
			const index = document.getElementById('index');
			const headings = document.querySelectorAll('h2, h3, h4');

			const tocList = document.createElement('ul');
			let currentParent = null;

			headings.forEach(heading => {
				const listItem = document.createElement('li');
				const anchor = document.createElement('a');
				anchor.href = \\\`#\\\${heading.id}\\\`;
				anchor.textContent = heading.textContent;
				listItem.appendChild(anchor);

				switch (heading.tagName.toLowerCase()) {
					case 'h2':
						break;
					case 'h3':
						listItem.style.fontStyle = 'italic';
						break;
					case 'h4':
						break;
				}

				if (heading.tagName.toLowerCase() === 'h3' || heading.tagName.toLowerCase() === 'h4') {
					if (currentParent) {
						const subList = currentParent.querySelector('ul') || document.createElement('ul');
						subList.appendChild(listItem);
						currentParent.appendChild(subList);
					}
				} else {
					tocList.appendChild(listItem);
					currentParent = listItem;
				}
			});

			index.appendChild(tocList);

			hideLastTOCItems(tocList, 21);
		}

		function hideLastTOCItems(tocList, count) {
			const items = tocList.querySelectorAll('li');
			const totalItems = items.length;

			const itemsToHide = Math.min(count, totalItems);

			for (let i = totalItems - itemsToHide; i < totalItems; i++) {
				items[i].style.display = 'none';
			}
		}

		window.onload = generateTOC;

	<\/script> </p>`])), maybeRenderHead());
}, "D:/OneCode/article-open/src/components/article/table.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$AntiCopy = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<script client:load>\n\n	document.onselectstart = () => false;\n\n	function preventCopy(e) {\n		e.preventDefault();\n	}\n\n	function allowCopy() {\n		return true;\n	}\n\n	if (window.sidebar) {\n		document.onmousedown = preventCopy;\n		document.onclick = allowCopy;\n	}\n\n<\/script> <script client:load type="text/javascript">\n	function preventRightClickIE() {\n		if (document.all) {\n			return false;\n		}\n	}\n\n	function preventRightClickNS(e) {\n		if (document.layers || (document.getElementById && !document.all)) {\n			if (e.which == 2 || e.which == 3) {\n				return false;\n			}\n		}\n	}\n\n	if (document.layers) {\n		document.captureEvents(Event.MOUSEDOWN);\n		document.onmousedown = preventRightClickNS;\n	} else {\n		document.onmouseup = preventRightClickNS;\n		document.oncontextmenu = preventRightClickIE;\n	}\n\n	document.oncontextmenu = () => false;\n\n<\/script>'])));
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
  return renderTemplate(_a || (_a = __template(["", '<section class="py-20 max-w-7xl mx-auto pb-10"> <article> <header class="mx-auto px-4 sm:px-6"> ', ` <script client:load>

			let count = localStorage.getItem('pageCounter');
			if (count === null) {
				count = Math.floor(Math.random() * (543 - 74 + 1)) + 45;
			} else {
				count = parseInt(count);
			}
			count += 1;
			localStorage.setItem('pageCounter', count);
			document.getElementById('counter').textContent = count;

			<\/script> </header> <div class="max-w-8xl mx-auto px-4 sm:px-6"> <div class="grid grid-cols-1 lg:grid-cols-[1fr,3fr] gap-8"> <div class="relative"> <div id="table-wrapper"> <div class="relative mt-6"> `, " </div> </div> </div> <div> ", " </div> </div> </div></article> </section>"])), maybeRenderHead(), post.image ? renderTemplate`<div class="relative w-full min-h-[400px]"> ${renderComponent($$result, "Image", $$Image, { "src": post.image, "class": "absolute inset-0 w-full h-full object-cover blur-[3px]", "widths": [600, 900], "sizes": "(max-width: 900px) 600px, 900px", "alt": post?.description || "", "width": "auto", "height": "auto", "loading": "eager", "decoding": "async" })} <div class="absolute inset-0 bg-black/30 dark:bg-black/50"></div> <div class="relative z-10 mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 py-12"> <div> ${renderComponent($$result, "Slideup", Slideup, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "~/assets/framer.jsx", "client:component-export": "Slideup" }, { "default": ($$result2) => renderTemplate` <h1 class="text-white mb-4"> ${post.title} </h1> ` })} ${renderComponent($$result, "Slideright", Slideright, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "~/assets/framer.jsx", "client:component-export": "Slideright" }, { "default": ($$result2) => renderTemplate` <p class="text-white"> <time${addAttribute(post.pubDatetime, "datetime")}> ${`${new Date(post.pubDatetime).toLocaleDateString("vi-VN", { day: "numeric", month: "numeric", year: "numeric" }).replace(/(\d{1,2})\/(\d{1,2})\/(\d{4})/, "\u0110\u0103ng ng\xE0y $1 th\xE1ng $2 n\u0103m $3")}.`} </time> </p> ` })} </div> <div> ${renderComponent($$result, "Slideleft", Slideleft, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "~/assets/framer.jsx", "client:component-export": "Slideleft" }, { "default": ($$result2) => renderTemplate` <p class="text-white"> ${post.description} </p> <p class="text-white"> ${post.readingTime && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` <span>${post.readingTime}</span> phút đọc
` })}`}
&nbsp;· <span id="counter"></span> lượt xem.
</p> ` })} </div> </div> </div>` : renderTemplate`<div class="border-t dark:border-slate-700"></div>`, renderComponent($$result, "Slideright", Slideright, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "~/assets/framer.jsx", "client:component-export": "Slideright" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Table", $$Table, {})} ` }), renderComponent($$result, "Slideup", Slideup, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "~/assets/framer.jsx", "client:component-export": "Slideup" }, { "default": ($$result2) => renderTemplate` <div class="text-2xl prose max-w-4xl prose-a:font-bold prose-a:text-primary prose-a:target-blank prose-img:rounded-md mt-6 dark:prose-headings:text-primary dark:prose-a:text-accent"> ${Content ? renderTemplate`${renderComponent($$result2, "Content", Content, {})}` : renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(post.content || "")}` })}`} ${renderComponent($$result2, "Anticopy", $$AntiCopy, {})} </div> ${renderComponent($$result2, "PostTags", $$Tags, { "tags": post.tags })} ${renderComponent($$result2, "SocialShare", $$Social, { "url": url, "text": post.title, "class": "mt-5 sm:mt-6 align-middle text-gray-500 dark:text-slate-600" })} ` }));
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
  const posts = await findPostsByIds(postIds);
  return renderTemplate`${renderTemplate`${renderComponent($$result, "Wrapper", $$Wrapper, { "id": id, "isDark": isDark, "containerClass": classes?.container, "bg": bg }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="flex flex-col lg:justify-between lg:flex-row mb-6">${title && renderTemplate`<div class="md:max-w-sm"><h2 class="max-w-3xl mx-auto">${unescapeHTML(title)}</h2>${linkText && linkUrl && renderTemplate`<a class="text-muted dark:text-slate-400 hover:text-primary transition ease-in duration-200 block mb-6 lg:mb-0"${addAttribute(linkUrl, "href")} target="_blank">${linkText} »
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
  return renderTemplate`${renderComponent($$result, "Slideup", Slideup, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "~/assets/framer.jsx", "client:component-export": "Slideup" }, { "default": ($$result2) => renderTemplate`${renderTemplate`${renderComponent($$result2, "BlogHighlightedPosts", $$Highlighted, { "classes": { container: "pt-0 lg:pt-0 md:pt-0" }, "title": "C\xF3 th\u1EC3 b\u1EA1n ch\u01B0a \u0111\u1ECDc", "linkText": "Xem t\u1EA5t c\u1EA3", "linkUrl": getBlogPermalink(), "postIds": randomPosts.map((post2) => post2.id) })}`}` })}`;
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Page, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Progress", $$Progress, {})} ${renderComponent($$result2, "Article", $$Single, { "post": { ...post, image }, "url": url })} ${renderComponent($$result2, "Related", $$Related, { "post": post })} ${renderComponent($$result2, "Action", $$Action, {})} ` })}`;
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
