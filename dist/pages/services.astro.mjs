import { c as createComponent, r as renderTemplate, a as renderComponent } from '../chunks/astro/server_J9QqgmFZ.mjs';
import 'kleur/colors';
import { $ as $$Page } from '../chunks/page_DQk_4Keq.mjs';
import { $ as $$Hero } from '../chunks/hero_DomAbGkL.mjs';
import { $ as $$Services } from '../chunks/services_pr8yYGle.mjs';
import { $ as $$Action, a as $$Soundcloud } from '../chunks/soundcloud_DahVq9O8.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "D\u1ECBch v\u1EE5 cung c\u1EA5p"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Page, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Services", $$Services, {})} ${renderComponent($$result2, "Action", $$Action, {})} ${renderComponent($$result2, "Soundcloud", $$Soundcloud, {})} ` })}`;
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
