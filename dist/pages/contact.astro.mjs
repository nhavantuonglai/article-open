import { c as createComponent, r as renderTemplate, a as renderComponent } from '../chunks/astro/server_J9QqgmFZ.mjs';
import 'kleur/colors';
import { $ as $$Page } from '../chunks/page_DQk_4Keq.mjs';
import { $ as $$Hero } from '../chunks/hero_DomAbGkL.mjs';
import { $ as $$Action, a as $$Soundcloud } from '../chunks/soundcloud_DahVq9O8.mjs';
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "Th\xF4ng tin li\xEAn h\u1EC7 | nhavantuonglai.",
    ignoreTitleTemplate: true,
    noindex: true
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Page, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Action", $$Action, {})} ${renderComponent($$result2, "Soundcloud", $$Soundcloud, {})} ` })}`;
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
