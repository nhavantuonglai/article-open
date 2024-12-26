import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, e as addAttribute, a as renderComponent } from './astro/server_J9QqgmFZ.mjs';
import 'kleur/colors';
import 'clsx';
import { f as findImage, a as $$Icon, b as $$Button } from './page_DQk_4Keq.mjs';
import { f as $$Image } from './soundcloud_DahVq9O8.mjs';
import { $ as $$Tags } from './tags_CipRPlyI.mjs';
import { g as getPermalink, a as getFormattedDate } from './permalinks_CK5jjW5e.mjs';

const $$Astro$3 = createAstro("https://nhavantuonglai.com");
const $$Headline = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Headline;
  const { title = await Astro2.slots.render("default"), subtitle = await Astro2.slots.render("subtitle") } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header class="mb-6 md:mb-12 text-center max-w-3xl mx-auto"> <h2 class="text-4xl md:text-5xl font-bold leading-tighter tracking-tighter font-heading">${unescapeHTML(title)}</h2> ${subtitle && renderTemplate`<div class="mt-2 md:mt-3 mx-auto text-xl text-gray-500 dark:text-slate-400 font-medium">${unescapeHTML(subtitle)}</div>`} </header>`;
}, "D:/OneCode/article-open/src/components/article/headline.astro", void 0);

const $$Astro$2 = createAstro("https://nhavantuonglai.com");
const $$ListItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ListItem;
  const { post } = Astro2.props;
  const image = await findImage(post.image);
  const link = getPermalink(post.permalink, "post") ;
  const truncateDescription = (text, maxWords = 30) => {
    const words = text.match(/[^\s,]+/g) || [];
    const truncated = words.slice(0, maxWords).join(" ");
    return words.length > maxWords ? truncated + "\u2026" : truncated;
  };
  return renderTemplate`${maybeRenderHead()}<article${addAttribute(`max-w-md mx-auto md:max-w-none grid gap-6 md:gap-8 ${image ? "md:grid-cols-2" : ""}`, "class")}> ${image && renderTemplate`<a class="relative block group"${addAttribute(link ?? "javascript:void(0)", "href")} target="_blank"> <div class="relative h-0 pb-[56.25%] md:pb-[75%] md:h-72 lg:pb-[56.25%] overflow-hidden bg-gray-400 dark:bg-slate-700 rounded shadow-lg"> ${renderComponent($$result, "Image", $$Image, { "src": image, "class": "absolute inset-0 object-cover w-full h-full mb-6 rounded shadow-lg bg-gray-400 dark:bg-slate-700", "widths": [400, 900], "width": 900, "sizes": "(max-width: 900px) 400px, 900px", "alt": post.title, "aspectRatio": "16:9", "loading": "lazy", "decoding": "async" })} </div> </a>`} <div class="mt-2"> <header> <div class="mb-1"> <span class="text-sm"> ${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:clock", "class": "w-3.5 h-3.5 inline-block -mt-0.5 dark:text-gray-400" })} <time${addAttribute(String(post.pubDatetime), "datetime")} class="inline-block">${getFormattedDate(post.pubDatetime)}</time> </span> </div> <h2 class="text-xl sm:text-2xl font-bold leading-tight mb-2 font-heading dark:text-slate-300"> ${link ? renderTemplate`<a class="hover:text-primary dark:hover:text-secondary transition ease-in duration-200"${addAttribute(link, "href")} target="_blank"> ${post.title} </a>` : post.title} </h2> </header> ${post.description && renderTemplate`<p class="flex-grow text-muted dark:text-slate-400 text-lg">${truncateDescription(post.description)}</p>`} <footer class="mt-5"> ${renderComponent($$result, "PostTags", $$Tags, { "tags": post.tags })} </footer> </div> </article>`;
}, "D:/OneCode/article-open/src/components/article/list-item.astro", void 0);

const $$Astro$1 = createAstro("https://nhavantuonglai.com");
const $$List = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$List;
  const { posts } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul> ${posts.map((post) => renderTemplate`<li class="text-justify mb-6 md:mb-12"> ${renderComponent($$result, "Item", $$ListItem, { "post": post })} </li>`)} </ul>`;
}, "D:/OneCode/article-open/src/components/article/list.astro", void 0);

const $$Astro = createAstro("https://nhavantuonglai.com");
const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { prevUrl, nextUrl, prevText = "B\xE0i m\u1EDBi h\u01A1n", nextText = "B\xE0i c\u0169 h\u01A1n" } = Astro2.props;
  return renderTemplate`${(prevUrl || nextUrl) && renderTemplate`${maybeRenderHead()}<div class="container flex"><div class="flex flex-row mx-auto justify-between">${prevUrl && renderTemplate`${renderComponent($$result, "Button", $$Button, { "variant": "tertiary", "class": "md:px-3 px-3 mr-2", "href": getPermalink(prevUrl) }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:chevron-left", "class": "w-6 h-6" })}<p class="ml-2">${prevText}</p>` })}`}${nextUrl && renderTemplate`${renderComponent($$result, "Button", $$Button, { "variant": "tertiary", "class": "md:px-3 px-3", "href": getPermalink(nextUrl) }, { "default": ($$result2) => renderTemplate`<span class="mr-2">${nextText}</span>${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:chevron-right", "class": "w-6 h-6" })}` })}`}</div></div>`}`;
}, "D:/OneCode/article-open/src/components/article/pagination.astro", void 0);

export { $$Headline as $, $$List as a, $$Pagination as b };
