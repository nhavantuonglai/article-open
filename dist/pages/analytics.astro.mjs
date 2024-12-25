import { c as createComponent, r as renderTemplate, a as renderComponent } from '../chunks/astro/server_Cx2nMEd_.mjs';
import 'kleur/colors';
import { $ as $$Page } from '../chunks/page_KtSAXQmz.mjs';
import { $ as $$Hero } from '../chunks/hero_A5_4sfW0.mjs';
import { $ as $$Compare } from '../chunks/compare_XQntvuqE.mjs';
import { $ as $$Count } from '../chunks/count_DDro-IAO.mjs';
import { $ as $$Emoji } from '../chunks/emoji_BTW3uAyM.mjs';
import { $ as $$Integrate } from '../chunks/integrate_BmWuqyFU.mjs';
import { $ as $$Lower } from '../chunks/lower_BddkKkIy.mjs';
import { $ as $$Normalize } from '../chunks/normalize_BOj06kkl.mjs';
import { $ as $$Unicode } from '../chunks/unicode_rCYL678b.mjs';
import { $ as $$Action, a as $$Flowschart } from '../chunks/flowschart_CXfL3AIE.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "C\xF4ng c\u1EE5 n\xE2ng cao | nhavantuonglai"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Page, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Integrate", $$Integrate, {})} ${renderComponent($$result2, "Compare", $$Compare, {})} ${renderComponent($$result2, "Normalize", $$Normalize, {})} ${renderComponent($$result2, "Count", $$Count, {})} ${renderComponent($$result2, "Lower", $$Lower, {})} ${renderComponent($$result2, "Emoji", $$Emoji, {})} ${renderComponent($$result2, "Unicode", $$Unicode, {})} ${renderComponent($$result2, "Action", $$Action, {})} ${renderComponent($$result2, "Flowschart", $$Flowschart, {})} ` })}`;
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
