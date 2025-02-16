import { c as createComponent, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_D74Uuew0.mjs';
import 'kleur/colors';
import { $ as $$Page } from '../chunks/page_D0LVH7FG.mjs';
import { $ as $$Hero } from '../chunks/hero_M2Y8KcXb.mjs';
import { $ as $$Prices } from '../chunks/prices_BNc9qOHy.mjs';
import { a as $$Action } from '../chunks/action_dcaZU4o7.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "D\u1ECBch v\u1EE5 cung c\u1EA5p",
    ignoreTitleTemplate: true
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Page, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Prices", $$Prices, {})} ${renderComponent($$result2, "Action", $$Action, {})} ` })}`;
}, "D:/OneCode/article-open/src/pages/services/index.astro", void 0);

const $$file = "D:/OneCode/article-open/src/pages/services/index.astro";
const $$url = "/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
