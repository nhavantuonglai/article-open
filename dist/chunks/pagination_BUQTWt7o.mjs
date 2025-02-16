import { b as createAstro, c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate, r as renderComponent, e as addAttribute, F as Fragment } from './astro/server_D74Uuew0.mjs';
import 'kleur/colors';
import 'clsx';
import { S as Slideup, b as $$Image } from './action_dcaZU4o7.mjs';
import { $ as $$Tags } from './tags_BR-0ApZb.mjs';
import { g as getPermalink } from './consts_DfSyGgUe.mjs';
import { f as findImage, a as $$Button, b as $$Icon } from './page_D0LVH7FG.mjs';

const $$Astro$3 = createAstro("https://nhavantuonglai.com");
const $$Headline = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Headline;
  const { title = await Astro2.slots.render("default"), subtitle = await Astro2.slots.render("subtitle") } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header class="mb-6 md:mb-62 text-center max-w-3xl mx-auto"> <h2 class="max-w-3xl mx-auto px-4 sm:px-6">${unescapeHTML(title)}</h2> ${subtitle && renderTemplate`<div class="mt-6 md:mt-6 mx-auto text-xl text-gray-500 dark:text-slate-400 font-medium">${unescapeHTML(subtitle)}</div>`} </header>`;
}, "D:/OneCode/article-open/src/components/article/headline.astro", void 0);

const $$Astro$2 = createAstro("https://nhavantuonglai.com");
const $$Bloglist = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Bloglist;
  const { post } = Astro2.props;
  const image = await findImage(post.image);
  const link = getPermalink(post.permalink, "post") ;
  const truncateDescription = (text, maxWords = 30) => {
    const words = text.match(/[^\s,]+/g) || [];
    const truncated = words.slice(0, maxWords).join(" ");
    return words.length > maxWords ? truncated + "\u2026" : truncated;
  };
  return renderTemplate`${renderComponent($$result, "Slideup", Slideup, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "~/assets/framer.jsx", "client:component-export": "Slideup" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article${addAttribute(`grid gap-6 md:gap-8 ${image ? "md:grid-cols-2" : ""}`, "class")}> ${image && renderTemplate`<a class="relative block group"${addAttribute(link ?? "javascript:void(0)", "href")} target="_blank"> <div class="relative h-0 pb-[56.25%] md:pb-[75%] md:h-72 lg:pb-[56.25%] overflow-hidden bg-gray-400 dark:bg-slate-700 rounded shadow-lg"> ${renderComponent($$result2, "Image", $$Image, { "src": image, "class": "absolute inset-0 object-cover w-full h-full mb-6 rounded shadow-lg bg-gray-400 dark:bg-slate-700", "widths": [400, 900], "width": 900, "sizes": "(max-width: 900px) 400px, 900px", "alt": post.title, "aspectRatio": "16:9", "loading": "lazy", "decoding": "async" })} </div> </a>`} <div> <header> <p class="text-xl"> <time${addAttribute(post.pubDatetime, "datetime")}> ${`${new Date(post.pubDatetime).toLocaleDateString("vi-VN", { day: "numeric", month: "numeric", year: "numeric" }).replace(/(\d{1,2})\/(\d{1,2})\/(\d{4})/, "\u0110\u0103ng ng\xE0y $1 th\xE1ng $2 n\u0103m $3")}`} </time> ${post.readingTime && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`
&nbsp;· <span>${post.readingTime}</span> phút đọc.
` })}`} </p> <h2 class="max-w-3xl mx-auto"> ${link ? renderTemplate`<a class="hover:text-primary dark:hover:text-secondary transition ease-in duration-200"${addAttribute(link, "href")} target="_blank"> ${post.title} </a>` : post.title} </h2> </header> ${post.description && renderTemplate`<p class="text-xl">${truncateDescription(post.description)}</p>`} <footer className="text-xl"> ${renderComponent($$result2, "PostTags", $$Tags, { "tags": post.tags.slice(0, 6) })} </footer> </div> </article> ` })}`;
}, "D:/OneCode/article-open/src/components/article/bloglist.astro", void 0);

const $$Astro$1 = createAstro("https://nhavantuonglai.com");
const $$List = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$List;
  const { posts } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul> ${posts.map((post) => renderTemplate`<li class="text-justify mb-6 md:mb-62"> ${renderComponent($$result, "Item", $$Bloglist, { "post": post })} </li>`)} </ul>`;
}, "D:/OneCode/article-open/src/components/article/list.astro", void 0);

const $$Astro = createAstro("https://nhavantuonglai.com");
const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { prevUrl, nextUrl, prevText = "B\xE0i m\u1EDBi h\u01A1n", nextText = "B\xE0i c\u0169 h\u01A1n" } = Astro2.props;
  return renderTemplate`${(prevUrl || nextUrl) && renderTemplate`${maybeRenderHead()}<div class="container flex"><div class="flex flex-row mx-auto justify-between">${prevUrl && renderTemplate`${renderComponent($$result, "Button", $$Button, { "variant": "primary", "class": "md:px-3 px-3 mr-2", "href": getPermalink(prevUrl) }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:chevron-left", "class": "w-6 h-6" })}<p class="ml-2">${prevText}</p>` })}`}${nextUrl && renderTemplate`${renderComponent($$result, "Button", $$Button, { "variant": "primary", "class": "md:px-3 px-3", "href": getPermalink(nextUrl) }, { "default": ($$result2) => renderTemplate`<span class="mr-2">${nextText}</span>${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:chevron-right", "class": "w-6 h-6" })}` })}`}</div></div>`}`;
}, "D:/OneCode/article-open/src/components/article/pagination.astro", void 0);

export { $$Headline as $, $$List as a, $$Pagination as b };
