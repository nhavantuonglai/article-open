import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent } from '../../chunks/astro/server_J9QqgmFZ.mjs';
import 'kleur/colors';
import { $ as $$Page } from '../../chunks/page_DQk_4Keq.mjs';
import 'clsx';
import { $ as $$Compare$2 } from '../../chunks/compare_BoAockw6.mjs';
import { $ as $$Action, a as $$Soundcloud } from '../../chunks/soundcloud_DahVq9O8.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw) }));
var _a;
const $$Compare$1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", `<section class="relative md:-mt-[76px] not-prose"> <div class="absolute inset-0 pointer-events-none" aria-hidden="true"></div> <div class="pt-0 md:pt-[120px] pointer-events-none"></div> <h1 class="mx-auto max-w-7xl md:px-6 leading-tighter text-center text-4xl md:text-5xl font-bold leading-tighter tracking-tighter mb-6 font-heading">
C\xF4ng c\u1EE5 \u0111\u1ED1i chi\u1EBFu v\u0103n b\u1EA3n
</h1> <div class="mx-auto max-w-7xl md:px-6 px-4"> <textarea id="input1" placeholder="N\u1ED9i dung \u0111\u1ED1i chi\u1EBFu A" class="px-4 mb-4 py-6 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900" required></textarea> <textarea id="input2" placeholder="N\u1ED9i dung \u0111\u1ED1i chi\u1EBFu B" class="px-4 mb-6 py-6 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900" required></textarea> <button id="compare-btn" class="btn-primary w-auto mb-6">\u0110\u1ED1i chi\u1EBFu</button> <div id="output" class="text-lg border border-gray-300 p-4 rounded-lg bg-white dark:bg-slate-900"> <h3 class="text-lg dark:text-slate-400 font-bold mb-4">K\u1EBFt qu\u1EA3 \u0111\u1ED1i chi\u1EBFu</h3> <p id="output-text"></p> </div> </div> <script client:load>
				document.addEventListener("DOMContentLoaded", function () {
					const buttonCompare = document.getElementById('compare-btn');
					const input1 = document.getElementById('input1');
					const input2 = document.getElementById('input2');
					const outputText = document.getElementById('output-text');

					buttonCompare.addEventListener('click', function() {
						const text1 = input1.value.split("\\n").map(line => line.trim());
						const text2 = input2.value.split("\\n").map(line => line.trim());

						const set1 = new Set(text1);
						const set2 = new Set(text2);

						const onlyInFirst = text1.filter(line => !set2.has(line));
						const onlyInSecond = text2.filter(line => !set1.has(line));

						const result = [
							...onlyInFirst.map(line => \`Ch\u1EC9 c\xF3 trong b\u1EA3n A: \${line}\`),
							...onlyInSecond.map(line => \`Ch\u1EC9 c\xF3 trong b\u1EA3n B: \${line}\`)
						].join("\\n");

						outputText.innerText = result || "Kh\xF4ng c\xF3 s\u1EF1 kh\xE1c bi\u1EC7t gi\u1EEFa n\u1ED9i dung \u0111\u1ED1i chi\u1EBFu.";
					});
				});
			<\/script> </section> `], ["", `<section class="relative md:-mt-[76px] not-prose"> <div class="absolute inset-0 pointer-events-none" aria-hidden="true"></div> <div class="pt-0 md:pt-[120px] pointer-events-none"></div> <h1 class="mx-auto max-w-7xl md:px-6 leading-tighter text-center text-4xl md:text-5xl font-bold leading-tighter tracking-tighter mb-6 font-heading">
C\xF4ng c\u1EE5 \u0111\u1ED1i chi\u1EBFu v\u0103n b\u1EA3n
</h1> <div class="mx-auto max-w-7xl md:px-6 px-4"> <textarea id="input1" placeholder="N\u1ED9i dung \u0111\u1ED1i chi\u1EBFu A" class="px-4 mb-4 py-6 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900" required></textarea> <textarea id="input2" placeholder="N\u1ED9i dung \u0111\u1ED1i chi\u1EBFu B" class="px-4 mb-6 py-6 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900" required></textarea> <button id="compare-btn" class="btn-primary w-auto mb-6">\u0110\u1ED1i chi\u1EBFu</button> <div id="output" class="text-lg border border-gray-300 p-4 rounded-lg bg-white dark:bg-slate-900"> <h3 class="text-lg dark:text-slate-400 font-bold mb-4">K\u1EBFt qu\u1EA3 \u0111\u1ED1i chi\u1EBFu</h3> <p id="output-text"></p> </div> </div> <script client:load>
				document.addEventListener("DOMContentLoaded", function () {
					const buttonCompare = document.getElementById('compare-btn');
					const input1 = document.getElementById('input1');
					const input2 = document.getElementById('input2');
					const outputText = document.getElementById('output-text');

					buttonCompare.addEventListener('click', function() {
						const text1 = input1.value.split("\\\\n").map(line => line.trim());
						const text2 = input2.value.split("\\\\n").map(line => line.trim());

						const set1 = new Set(text1);
						const set2 = new Set(text2);

						const onlyInFirst = text1.filter(line => !set2.has(line));
						const onlyInSecond = text2.filter(line => !set1.has(line));

						const result = [
							...onlyInFirst.map(line => \\\`Ch\u1EC9 c\xF3 trong b\u1EA3n A: \\\${line}\\\`),
							...onlyInSecond.map(line => \\\`Ch\u1EC9 c\xF3 trong b\u1EA3n B: \\\${line}\\\`)
						].join("\\\\n");

						outputText.innerText = result || "Kh\xF4ng c\xF3 s\u1EF1 kh\xE1c bi\u1EC7t gi\u1EEFa n\u1ED9i dung \u0111\u1ED1i chi\u1EBFu.";
					});
				});
			<\/script> </section> `])), maybeRenderHead());
}, "D:/OneCode/article-open/src/components/analytics/compare.astro", void 0);

const $$Compare = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "C\xF4ng c\u1EE5 \u0111\u1ED1i chi\u1EBFu v\u0103n b\u1EA3n | nhavantuonglai",
    ignoreTitleTemplate: true
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Page, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Compare", $$Compare$1, {})} ${renderComponent($$result2, "Content", $$Compare$2, {})} ${renderComponent($$result2, "Action", $$Action, {})} ${renderComponent($$result2, "Soundcloud", $$Soundcloud, {})} ` })}`;
}, "D:/OneCode/article-open/src/pages/analytics/compare.astro", void 0);

const $$file = "D:/OneCode/article-open/src/pages/analytics/compare.astro";
const $$url = "/analytics/compare";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Compare,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
