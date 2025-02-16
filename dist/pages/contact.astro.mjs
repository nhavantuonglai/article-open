import { c as createComponent, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_D74Uuew0.mjs';
import 'kleur/colors';
import { $ as $$Page } from '../chunks/page_D0LVH7FG.mjs';
import { $ as $$Hero } from '../chunks/hero_M2Y8KcXb.mjs';
import { a as $$Action } from '../chunks/action_dcaZU4o7.mjs';
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "Th\xF4ng tin li\xEAn h\u1EC7"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Page, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Action", $$Action, {})} ` })}`;
}, "D:/OneCode/article-open/src/pages/contact.astro", void 0);

const $$file = "D:/OneCode/article-open/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Contact,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
