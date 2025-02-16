import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server_D74Uuew0.mjs';
import 'kleur/colors';
import { $ as $$Page } from '../../chunks/page_D0LVH7FG.mjs';
import { $ as $$Hero } from '../../chunks/hero_M2Y8KcXb.mjs';
import { $ as $$Seo$1 } from '../../chunks/seo_iQMedcZn.mjs';
import { $ as $$Prices } from '../../chunks/prices_BNc9qOHy.mjs';
import { a as $$Action } from '../../chunks/action_dcaZU4o7.mjs';
export { renderers } from '../../renderers.mjs';

const $$Seo = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "D\u1ECBch v\u1EE5 t\u01B0 v\u1EA5n v\xE0 th\u1EF1c hi\u1EC7n chi\u1EBFn l\u01B0\u1EE3c SEO",
    ignoreTitleTemplate: true
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Page, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "SEO", $$Seo$1, {})} ${renderComponent($$result2, "Prices", $$Prices, {})} ${renderComponent($$result2, "Action", $$Action, {})} ` })}`;
}, "D:/OneCode/article-open/src/pages/services/seo.astro", void 0);

const $$file = "D:/OneCode/article-open/src/pages/services/seo.astro";
const $$url = "/services/seo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Seo,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
