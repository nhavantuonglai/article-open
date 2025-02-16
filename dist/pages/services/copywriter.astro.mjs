import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server_D74Uuew0.mjs';
import 'kleur/colors';
import { $ as $$Page } from '../../chunks/page_D0LVH7FG.mjs';
import { $ as $$Hero } from '../../chunks/hero_M2Y8KcXb.mjs';
import { $ as $$Copywriter$1 } from '../../chunks/copywriter_E3shS97g.mjs';
import { $ as $$Prices } from '../../chunks/prices_BNc9qOHy.mjs';
import { a as $$Action } from '../../chunks/action_dcaZU4o7.mjs';
export { renderers } from '../../renderers.mjs';

const $$Copywriter = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "D\u1ECBch v\u1EE5 vi\u1EBFt b\xE0i ch\u1EA5t l\u01B0\u1EE3ng cao",
    ignoreTitleTemplate: true
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Page, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Copywriter", $$Copywriter$1, {})} ${renderComponent($$result2, "Prices", $$Prices, {})} ${renderComponent($$result2, "Action", $$Action, {})} ` })}`;
}, "D:/OneCode/article-open/src/pages/services/copywriter.astro", void 0);

const $$file = "D:/OneCode/article-open/src/pages/services/copywriter.astro";
const $$url = "/services/copywriter";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Copywriter,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
