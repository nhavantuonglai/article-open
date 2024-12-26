import { c as createComponent, r as renderTemplate, a as renderComponent } from '../chunks/astro/server_J9QqgmFZ.mjs';
import 'kleur/colors';
import { $ as $$Page } from '../chunks/page_DQk_4Keq.mjs';
import { $ as $$Hero } from '../chunks/hero_DomAbGkL.mjs';
import { $ as $$Compare } from '../chunks/compare_BoAockw6.mjs';
import { $ as $$Count } from '../chunks/count_CZkYR-pS.mjs';
import { $ as $$Emoji } from '../chunks/emoji_BtmH4LAt.mjs';
import { $ as $$Integrate } from '../chunks/integrate_DrQINyjc.mjs';
import { $ as $$Lower } from '../chunks/lower_BBxmrdxc.mjs';
import { $ as $$Normalize } from '../chunks/normalize_FQS1NGDS.mjs';
import { $ as $$Unicode } from '../chunks/unicode_BeITfekZ.mjs';
import { $ as $$Action, a as $$Soundcloud } from '../chunks/soundcloud_DahVq9O8.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "C\xF4ng c\u1EE5 n\xE2ng cao"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Page, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Integrate", $$Integrate, {})} ${renderComponent($$result2, "Compare", $$Compare, {})} ${renderComponent($$result2, "Normalize", $$Normalize, {})} ${renderComponent($$result2, "Count", $$Count, {})} ${renderComponent($$result2, "Lower", $$Lower, {})} ${renderComponent($$result2, "Emoji", $$Emoji, {})} ${renderComponent($$result2, "Unicode", $$Unicode, {})} ${renderComponent($$result2, "Action", $$Action, {})} ${renderComponent($$result2, "Soundcloud", $$Soundcloud, {})} ` })}`;
}, "D:/OneCode/article-open/src/pages/analytics/index.astro", void 0);

const $$file = "D:/OneCode/article-open/src/pages/analytics/index.astro";
const $$url = "/analytics";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
