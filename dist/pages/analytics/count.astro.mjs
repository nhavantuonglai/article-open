import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent } from '../../chunks/astro/server_Cx2nMEd_.mjs';
import 'kleur/colors';
import { $ as $$Page } from '../../chunks/page_KtSAXQmz.mjs';
import 'clsx';
import { $ as $$Count$2 } from '../../chunks/count_DDro-IAO.mjs';
import { $ as $$Action, a as $$Flowschart } from '../../chunks/flowschart_CXfL3AIE.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw) }));
var _a;
const $$Count$1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", `<section class="relative md:-mt-[76px] not-prose"> <div class="absolute inset-0 pointer-events-none" aria-hidden="true"></div> <div class="pt-0 md:pt-[120px] pointer-events-none"></div> <h1 class="mx-auto max-w-7xl md:px-6 leading-tighter text-center text-4xl md:text-5xl font-bold leading-tighter tracking-tighter mb-6 font-heading">
C\xF4ng c\u1EE5 \u0111\u1EBFm t\u1EA7n su\u1EA5t v\u0103n b\u1EA3n
</h1> <div class="mx-auto max-w-7xl md:px-6 px-4"> <textarea id="input" placeholder="Nh\u1EADp d\u1EEF li\u1EC7u c\u1EA7n th\u1ED1ng k\xEA v\xE0o \u0111\xE2y." class="px-4 mb-6 py-6 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900" required></textarea> <button id="convert-btn" class="btn-primary w-auto mb-6">Th\u1ED1ng k\xEA</button> <div id="output" class="text-lg grid grid-cols-3 gap-4"> <div class="border border-gray-300 p-4 rounded-lg"> <h3 class="text-justify text-lg dark:text-slate-400 font-bold">T\u1ED5ng k\xFD t\u1EF1</h3> <p id="charCount"></p> </div> <div class="border border-gray-300 p-4 rounded-lg"> <h3 class="text-justify text-lg dark:text-slate-400 font-bold">Th\u1ED1ng k\xEA k\xFD t\u1EF1</h3> <p id="letterCount"></p> </div> <div class="border border-gray-300 p-4 rounded-lg"> <h3 class="text-justify text-lg dark:text-slate-400 font-bold">Th\u1ED1ng k\xEA \u0111o\u1EA1n v\u0103n</h3> <p id="paragraphCount"></p> </div> </div> </div> <script client:load>
				document.addEventListener("DOMContentLoaded", function () {
					const buttonConvert = document.getElementById('convert-btn');
					const buttonCopy = document.getElementById('copy-btn');
					const input = document.getElementById('input');
					const charCountOutput = document.getElementById('charCount');
					const letterCountOutput = document.getElementById('letterCount');
					const paragraphCountOutput = document.getElementById('paragraphCount');

					buttonConvert.addEventListener('click', function() {
						const inputText = input.value;

						const totalCharacters = inputText.length;

						const letterFrequency = {};
						const letters = inputText.match(/[a-zA-Z]/g);
						if (letters) {
							letters.forEach(function(letter) {
								const lowerLetter = letter.toLowerCase();
								if (letterFrequency[lowerLetter]) {
									letterFrequency[lowerLetter]++;
								} else {
									letterFrequency[lowerLetter] = 1;
								}
							});
						}

						const paragraphs = inputText.split(/(?<=[.!?])\\s+/);
						const totalParagraphs = paragraphs.length;

						charCountOutput.innerText = \`T\u1ED5ng s\u1ED1 k\xFD t\u1EF1: \${totalCharacters}\`;
						
						let letterCountText = '';
						for (const letter in letterFrequency) {
							letterCountText += \`\${letter}: \${letterFrequency[letter]}\\n\`;
						}
						letterCountOutput.innerText = letterCountText || "Kh\xF4ng c\xF3 ch\u1EEF c\xE1i n\xE0o.";

						paragraphCountOutput.innerText = \`T\u1ED5ng s\u1ED1 \u0111o\u1EA1n v\u0103n: \${totalParagraphs}\`;
					});
				});
			<\/script> </section> `], ["", `<section class="relative md:-mt-[76px] not-prose"> <div class="absolute inset-0 pointer-events-none" aria-hidden="true"></div> <div class="pt-0 md:pt-[120px] pointer-events-none"></div> <h1 class="mx-auto max-w-7xl md:px-6 leading-tighter text-center text-4xl md:text-5xl font-bold leading-tighter tracking-tighter mb-6 font-heading">
C\xF4ng c\u1EE5 \u0111\u1EBFm t\u1EA7n su\u1EA5t v\u0103n b\u1EA3n
</h1> <div class="mx-auto max-w-7xl md:px-6 px-4"> <textarea id="input" placeholder="Nh\u1EADp d\u1EEF li\u1EC7u c\u1EA7n th\u1ED1ng k\xEA v\xE0o \u0111\xE2y." class="px-4 mb-6 py-6 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900" required></textarea> <button id="convert-btn" class="btn-primary w-auto mb-6">Th\u1ED1ng k\xEA</button> <div id="output" class="text-lg grid grid-cols-3 gap-4"> <div class="border border-gray-300 p-4 rounded-lg"> <h3 class="text-justify text-lg dark:text-slate-400 font-bold">T\u1ED5ng k\xFD t\u1EF1</h3> <p id="charCount"></p> </div> <div class="border border-gray-300 p-4 rounded-lg"> <h3 class="text-justify text-lg dark:text-slate-400 font-bold">Th\u1ED1ng k\xEA k\xFD t\u1EF1</h3> <p id="letterCount"></p> </div> <div class="border border-gray-300 p-4 rounded-lg"> <h3 class="text-justify text-lg dark:text-slate-400 font-bold">Th\u1ED1ng k\xEA \u0111o\u1EA1n v\u0103n</h3> <p id="paragraphCount"></p> </div> </div> </div> <script client:load>
				document.addEventListener("DOMContentLoaded", function () {
					const buttonConvert = document.getElementById('convert-btn');
					const buttonCopy = document.getElementById('copy-btn');
					const input = document.getElementById('input');
					const charCountOutput = document.getElementById('charCount');
					const letterCountOutput = document.getElementById('letterCount');
					const paragraphCountOutput = document.getElementById('paragraphCount');

					buttonConvert.addEventListener('click', function() {
						const inputText = input.value;

						const totalCharacters = inputText.length;

						const letterFrequency = {};
						const letters = inputText.match(/[a-zA-Z]/g);
						if (letters) {
							letters.forEach(function(letter) {
								const lowerLetter = letter.toLowerCase();
								if (letterFrequency[lowerLetter]) {
									letterFrequency[lowerLetter]++;
								} else {
									letterFrequency[lowerLetter] = 1;
								}
							});
						}

						const paragraphs = inputText.split(/(?<=[.!?])\\\\s+/);
						const totalParagraphs = paragraphs.length;

						charCountOutput.innerText = \\\`T\u1ED5ng s\u1ED1 k\xFD t\u1EF1: \\\${totalCharacters}\\\`;
						
						let letterCountText = '';
						for (const letter in letterFrequency) {
							letterCountText += \\\`\\\${letter}: \\\${letterFrequency[letter]}\\\\n\\\`;
						}
						letterCountOutput.innerText = letterCountText || "Kh\xF4ng c\xF3 ch\u1EEF c\xE1i n\xE0o.";

						paragraphCountOutput.innerText = \\\`T\u1ED5ng s\u1ED1 \u0111o\u1EA1n v\u0103n: \\\${totalParagraphs}\\\`;
					});
				});
			<\/script> </section> `])), maybeRenderHead());
}, "D:/OneCode/article-open/src/components/analytics/count.astro", void 0);

const $$Count = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "C\xF4ng c\u1EE5 \u0111\u1EBFm t\u1EA7n su\u1EA5t v\u0103n b\u1EA3n | nhavantuonglai",
    ignoreTitleTemplate: true
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Page, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Count", $$Count$1, {})} ${renderComponent($$result2, "Content", $$Count$2, {})} ${renderComponent($$result2, "Action", $$Action, {})} ${renderComponent($$result2, "Flowschart", $$Flowschart, {})} ` })}`;
}, "D:/OneCode/article-open/src/pages/analytics/count.astro", void 0);

const $$file = "D:/OneCode/article-open/src/pages/analytics/count.astro";
const $$url = "/analytics/count";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Count,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
