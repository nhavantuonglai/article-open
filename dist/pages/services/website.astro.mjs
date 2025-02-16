import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server_D74Uuew0.mjs';
import 'kleur/colors';
import { $ as $$Page } from '../../chunks/page_D0LVH7FG.mjs';
import { $ as $$Hero } from '../../chunks/hero_M2Y8KcXb.mjs';
import { $ as $$Website$1 } from '../../chunks/website_MOl9jUHN.mjs';
import { $ as $$Prices } from '../../chunks/prices_BNc9qOHy.mjs';
import { a as $$Action } from '../../chunks/action_dcaZU4o7.mjs';
export { renderers } from '../../renderers.mjs';

const $$Website = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "D\u1ECBch v\u1EE5 t\u01B0 v\u1EA5n v\xE0 thi\u1EBFt k\u1EBF website chu\u1EA9n SEO",
    ignoreTitleTemplate: true
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Page, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Website", $$Website$1, {})} ${renderComponent($$result2, "Prices", $$Prices, {})} ${renderComponent($$result2, "Action", $$Action, {})} ` })}`;
}, "D:/OneCode/article-open/src/pages/services/website.astro", void 0);

const $$file = "D:/OneCode/article-open/src/pages/services/website.astro";
const $$url = "/services/website";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Website,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
