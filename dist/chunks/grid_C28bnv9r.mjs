import { b as createAstro, c as createComponent, m as maybeRenderHead, e as addAttribute, r as renderComponent, a as renderTemplate } from './astro/server_D74Uuew0.mjs';
import 'kleur/colors';
import { b as $$Image } from './action_dcaZU4o7.mjs';
import { f as findImage } from './page_D0LVH7FG.mjs';
import { g as getPermalink } from './consts_DfSyGgUe.mjs';

const $$Astro$1 = createAstro("https://nhavantuonglai.com");
const $$Diagram = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Diagram;
  const { post } = Astro2.props;
  const image = await findImage(post.image);
  const truncateText = (text, maxLength, isTitle = false) => {
    const words = text.match(/[^\s,]+/g) || [];
    const truncated = words.slice(0, maxLength).join(" ");
    return isTitle && text.length > maxLength ? truncated + "\u2026" : truncated + (words.length > maxLength ? "\u2026" : "");
  };
  return renderTemplate`${maybeRenderHead()}<article class="mb-6 transition"> ${image && renderTemplate`<div class="relative md:h-64 bg-gray-400 dark:bg-slate-700 rounded shadow-lg mb-6"> <a${addAttribute(getPermalink(post.permalink, "post"), "href")} target="_blank"> ${renderComponent($$result, "Image", $$Image, { "src": image, "class": "w-full md:h-full rounded shadow-lg bg-gray-400 dark:bg-slate-700", "width": 600, "height": 407, "widths": [600, 407], "alt": post.title, "layout": "cover", "loading": "lazy", "decoding": "async" })} </a> </div>`} <h3> ${renderTemplate`<a${addAttribute(getPermalink(post.permalink, "post"), "href")} class="hover:text-primary dark:hover:text-secondary transition ease-in duration-200" target="_blank"> ${truncateText(post.title, 60, true)} </a>` } </h3> <p>${truncateText(post.description, 30)}</p> </article>`;
}, "D:/OneCode/article-open/src/components/article/diagram.astro", void 0);

const $$Astro = createAstro("https://nhavantuonglai.com");
const $$Grid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Grid;
  const { posts } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="grid mb-6 gap-6 row-gap-5 md:grid-cols-2 lg:grid-cols-4"> ${posts.map((post) => renderTemplate`${renderComponent($$result, "Diagram", $$Diagram, { "post": post })}`)} </div>`;
}, "D:/OneCode/article-open/src/components/article/grid.astro", void 0);

export { $$Grid as $ };
