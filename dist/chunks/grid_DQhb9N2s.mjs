import { d as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, a as renderComponent } from './astro/server_Cx2nMEd_.mjs';
import 'kleur/colors';
import { f as $$Image } from './flowschart_CXfL3AIE.mjs';
import { f as findImage } from './page_KtSAXQmz.mjs';
import { a as getPermalink } from './permalinks_DNkgwRsR.mjs';

const $$Astro$1 = createAstro("https://nhavantuonglai.com");
const $$GridItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$GridItem;
  const { post } = Astro2.props;
  const image = await findImage(post.image);
  const truncateDescription = (text, maxWords = 30) => {
    const words = text.match(/[^\s,]+/g) || [];
    const truncated = words.slice(0, maxWords).join(" ");
    return words.length > maxWords ? truncated + "\u2026" : truncated;
  };
  const truncateTitle = (description, maxLength = 60) => {
    if (description.length > maxLength) {
      return description.slice(0, maxLength) + "\u2026";
    }
    return description;
  };
  return renderTemplate`${maybeRenderHead()}<article class="mb-6 transition"> <div class="relative md:h-64 bg-gray-400 dark:bg-slate-700 rounded shadow-lg mb-6"> ${image && renderTemplate`<a${addAttribute(getPermalink(post.permalink, "post"), "href")} target="_blank"> ${renderComponent($$result, "Image", $$Image, { "src": image, "class": "w-full md:h-full rounded shadow-lg bg-gray-400 dark:bg-slate-700", "width": 600, "height": 407, "widths": [600, 407], "alt": post.title, "layout": "cover", "loading": "lazy", "decoding": "async" })} </a>`} </div> <h3 class="mb-6 text-xl font-bold leading-tight sm:text-2xl font-heading"> ${renderTemplate`<a${addAttribute(getPermalink(post.permalink, "post"), "href")} class="hover:text-primary dark:hover:text-secondary	transition ease-in duration-200" target="_blank"> ${truncateTitle(post.title)}</a>`} </h3> <p class="text-justify text-muted dark:text-slate-400 text-lg">${truncateDescription(post.description)}</p> </article>`;
}, "D:/OneCode/article-open/src/components/article/grid-item.astro", void 0);

const $$Astro = createAstro("https://nhavantuonglai.com");
const $$Grid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Grid;
  const { posts } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="grid mb-6 gap-6 row-gap-5 md:grid-cols-2 lg:grid-cols-4"> ${posts.map((post) => renderTemplate`${renderComponent($$result, "Item", $$GridItem, { "post": post })}`)} </div>`;
}, "D:/OneCode/article-open/src/components/article/grid.astro", void 0);

export { $$Grid as $ };
