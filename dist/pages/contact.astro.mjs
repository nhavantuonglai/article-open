import { c as createComponent, r as renderTemplate, a as renderComponent } from '../chunks/astro/server_CPaUVu3N.mjs';
import 'kleur/colors';
import { $ as $$PageLayout } from '../chunks/page-layout_d3DMGMu3.mjs';
import { $ as $$Hero } from '../chunks/hero_ufQZXyFE.mjs';
import { $ as $$CallToAction } from '../chunks/call-to-action_BuMXOY6d.mjs';
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "S\u1EB5n s\xE0ng h\u1ED7 tr\u1EE3 khi b\u1EA1n c\u1EA7n | nhavantuonglai.",
    ignoreTitleTemplate: true,
    noindex: true
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "CTA", $$CallToAction, {})} ` })}`;
}, "D:/Onecode/article-open/src/pages/contact.astro", void 0);

const $$file = "D:/Onecode/article-open/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Contact,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
