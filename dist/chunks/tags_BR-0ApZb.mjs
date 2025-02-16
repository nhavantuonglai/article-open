import { b as createAstro, c as createComponent, r as renderComponent, F as Fragment, a as renderTemplate, e as addAttribute, m as maybeRenderHead } from './astro/server_D74Uuew0.mjs';
import 'kleur/colors';
import { g as getPermalink } from './consts_DfSyGgUe.mjs';

const $$Astro = createAstro("https://nhavantuonglai.com");
const $$Tags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Tags;
  const { tags, class: className = "text-sm", title, isCategory = false } = Astro2.props;
  return renderTemplate`${tags && Array.isArray(tags) && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${title && renderTemplate`${maybeRenderHead()}<span class="align-super font-normal underline underline-offset-4 decoration-2 dark:text-slate-400">${title}</span>`}<ul${addAttribute(className, "class")}>${tags.map((tag) => renderTemplate`<li class="bg-gray-100 dark:bg-slate-700 inline-block mr-2 rtl:mr-0 rtl:ml-2 mb-6 py-0.5 px-2 lowercase font-medium">${renderTemplate`<a${addAttribute(getPermalink(tag, isCategory ? "category" : "tag"), "href")} class="text-xl text-muted dark:text-slate-300 hover:text-primary dark:hover:text-secondary" target="_blank">${tag}</a>`}</li>`)}</ul>` })}`}`;
}, "D:/OneCode/article-open/src/components/article/tags.astro", void 0);

export { $$Tags as $ };
