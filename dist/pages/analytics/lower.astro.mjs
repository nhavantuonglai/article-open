import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent } from '../../chunks/astro/server_Cx2nMEd_.mjs';
import 'kleur/colors';
import { $ as $$Page } from '../../chunks/page_KtSAXQmz.mjs';
import 'clsx';
import { $ as $$Lower$2 } from '../../chunks/lower_BddkKkIy.mjs';
import { $ as $$Action, a as $$Flowschart } from '../../chunks/flowschart_CXfL3AIE.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Lower$1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", `<section class="relative md:-mt-[76px] not-prose"> <div class="absolute inset-0 pointer-events-none" aria-hidden="true"></div> <div class="pt-0 md:pt-[120px] pointer-events-none"></div> <h1 class="mx-auto max-w-7xl md:px-6 leading-tighter text-center text-4xl md:text-5xl font-bold leading-tighter tracking-tighter mb-6 font-heading">
C\xF4ng c\u1EE5 chuy\u1EC3n \u0111\u1ED5i ch\u1EEF hoa th\xE0nh ch\u1EEF th\u01B0\u1EDDng
</h1> <div class="mx-auto max-w-7xl md:px-6 px-4"> <textarea id="input" placeholder="Nh\u1EADp d\u1EEF li\u1EC7u c\u1EA7n chuy\u1EC3n \u0111\u1ED5i ch\u1EEF hoa th\xE0nh ch\u1EEF th\u01B0\u1EDDng v\xE0o \u0111\xE2y." class="px-4 mb-6 py-6 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900" required></textarea> <button id="convert-btn" class="btn-primary w-auto  mb-6">Chuy\u1EC3n \u0111\u1ED5i</button> <div id="output" class="mb-6 text-lg border border-gray-300 p-4 rounded-lg"></div> </div> <script client:load>
				document.addEventListener("DOMContentLoaded", function () {
					const buttonConvert = document.getElementById('convert-btn');
					const input = document.getElementById('input');
					const output = document.getElementById('output');

					buttonConvert.addEventListener('click', function() {
						const inputText = input.value;
						const lowerCaseText = inputText.toLowerCase();
						output.innerText = lowerCaseText;

					});

				});
			<\/script> </section> `])), maybeRenderHead());
}, "D:/OneCode/article-open/src/components/analytics/lower.astro", void 0);

const $$Lower = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "C\xF4ng c\u1EE5 chuy\u1EC3n \u0111\u1ED5i ch\u1EEF hoa th\xE0nh ch\u1EEF th\u01B0\u1EDDng | nhavantuonglai",
    ignoreTitleTemplate: true
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Page, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Lower", $$Lower$1, {})} ${renderComponent($$result2, "Content", $$Lower$2, {})} ${renderComponent($$result2, "Action", $$Action, {})} ${renderComponent($$result2, "Flowschart", $$Flowschart, {})} ` })}`;
}, "D:/OneCode/article-open/src/pages/analytics/lower.astro", void 0);

const $$file = "D:/OneCode/article-open/src/pages/analytics/lower.astro";
const $$url = "/analytics/lower";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Lower,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
