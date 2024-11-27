import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, F as Fragment } from '../../chunks/astro/server_CPaUVu3N.mjs';
import 'kleur/colors';
import { $ as $$PageLayout } from '../../chunks/page-layout_d3DMGMu3.mjs';
import 'clsx';
import { $ as $$Services } from '../../chunks/services_BOpoSTm3.mjs';
import { $ as $$Question } from '../../chunks/question_0-p_xyNN.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Count$2 = createComponent(($$result, $$props, $$slots) => {
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
}, "D:/Onecode/article-open/src/components/analytics/count.astro", void 0);

const $$Count$1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative md:-mt-[76px] not-prose"> <div class="absolute inset-0 pointer-events-none" aria-hidden="true"></div> <div class="relative max-w-7xl mx-auto"> <div class="pt-0 md:pt-[120px] pointer-events-none"></div> ${renderComponent($$result, "CTA", $$Services, { "callToAction": {
    text: "Nh\u1EAFn tin",
    href: "https://www.instagram.com/nhavantuonglai/"
  }, "items": [
    {
      title: "Th\u1ED1ng k\xEA, t\u1ED5ng h\u1EE3p d\u1EEF li\u1EC7u",
      description: "Gi\xFAp ph\xE2n t\xEDch t\u1EA7n su\u1EA5t xu\u1EA5t hi\u1EC7n gi\xE1 tr\u1ECB gi\xFAp ph\xE2n t\xEDch s\u1ED1 li\u1EC7u l\u1EDBn m\u1ED9t c\xE1ch nhanh ch\xF3ng v\xE0 ch\xEDnh x\xE1c.",
      icon: "tabler:bell-school"
    },
    {
      title: "H\u1ED7 tr\u1EE3 gi\u1EA3i m\u1EADt m\xE3 thay th\u1EBF",
      description: "D\u1EF1a v\xE0o kh\u1EA3 n\u0103ng th\u1ED1ng k\xEA t\u1EA7n su\u1EA5t v\u0103n b\u1EA3n, k\u1EBFt h\u1EE3p c\xF9ng suy \u0111o\xE1n \u0111\u1EC3 \u0111\u01B0a ra ng\u1EEF c\u1EA3nh, k\u1EBFt c\u1EA5u ch\u1EEF ph\xF9 h\u1EE3p \u0111\u1EC3 ho\xE0n di\u1EC5n d\u1ECBch ra n\u1ED9i dung g\u1ED1c.",
      icon: "tabler:brand-codecov"
    }
  ], "image": {
    src: "https://nhavantuonglai.com/image/cover/001-324.jpg",
    alt: "nhan-tin-instagram"
  } }, { "content": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result3) => renderTemplate`
Bạn muốn biết từ hoặc cụm từ nào xuất hiện nhiều nhất trong văn bản? Công cụ đếm tần suất văn bản là trợ thủ đắc lực giúp bạn xác định số lần xuất hiện của bất kỳ giá trị nào.
` })}` })} </div> </section> ${renderComponent($$result, "Question", $$Question, { "items": [
    {
      title: "S\u1EED d\u1EE5ng c\xF4ng c\u1EE5 nh\u01B0 th\u1EBF n\xE0o?",
      description: "\u0110\u1EC3 s\u1EED d\u1EE5ng c\xF4ng c\u1EE5 \u0111\u1EBFm t\u1EA7n su\u1EA5t v\u0103n b\u1EA3n xu\u1EA5t hi\u1EC7n gi\xE1 tr\u1ECB, ch\u1EC9 c\u1EA7n d\xE1n d\u1EEF li\u1EC7u v\xE0 nh\u1EA5n Chuy\u1EC3n \u0111\u1ED5i, k\u1EBFt qu\u1EA3 s\u1EBD hi\u1EC3n th\u1ECB t\u1EE9c th\xEC.",
      icon: "tabler:chevrons-right"
    },
    {
      title: "C\xF3 gi\u1EDBi h\u1EA1n khi s\u1EED d\u1EE5ng c\xF4ng c\u1EE5 kh\xF4ng?",
      description: `C\xF4ng c\u1EE5 \u0111\u1EBFm t\u1EA7n su\u1EA5t v\u0103n b\u1EA3n kh\xF4ng gi\u1EDBi h\u1EA1n s\u1ED1 l\u1EA7n s\u1EED d\u1EE5ng, nh\u01B0ng n\u1EBFu l\u01B0\u1EE3ng d\u1EEF li\u1EC7u qu\xE1 l\u1EDBn, qu\xE1 tr\xECnh ph\xE2n t\xEDch c\xF3 th\u1EC3 ch\u1EADm l\u1EA1i.`,
      icon: "tabler:chevrons-right"
    },
    {
      title: "Nh\u1EEFng gi\u1EA3i ph\xE1p thay th\u1EBF kh\xE1c ph\xF9 h\u1EE3p \u0111\u1EC3 gi\u1EA3i quy\u1EBFt y\xEAu c\u1EA7u \u0111\u1EBFm t\u1EA7n su\u1EA5t v\u0103n b\u1EA3n",
      description: "Ngo\xE0i c\xF4ng c\u1EE5 n\xE0y, b\u1EA1n c\xF3 th\u1EC3 th\u1EED c\xE1c ng\xF4n ng\u1EEF l\u1EADp tr\xECnh nh\u01B0 Python ho\u1EB7c R v\u1EDBi th\u01B0 vi\u1EC7n h\u1ED7 tr\u1EE3 \u0111\u1EBFm t\u1EA7n su\u1EA5t m\u1EA1nh m\u1EBD.",
      icon: "tabler:chevrons-right"
    },
    {
      title: "C\xE1ch \u0111\u1EC3 li\xEAn l\u1EA1c, h\u1ED7 tr\u1EE3 v\xE0 g\xF3p \xFD ho\xE0n thi\u1EC7n c\xF4ng c\u1EE5",
      description: "N\u1EBFu c\xF3 b\u1EA5t k\u1EF3 th\u1EAFc m\u1EAFc ho\u1EB7c g\xF3p \xFD, h\xE3y li\xEAn h\u1EC7 ch\xFAng t\xF4i qua email info@nhavantuonglai.com \u0111\u1EC3 \u0111\u01B0\u1EE3c h\u1ED7 tr\u1EE3.",
      icon: "tabler:chevrons-right"
    }
  ] })}`;
}, "D:/Onecode/article-open/src/components/javascript/count.astro", void 0);

const $$Count = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "C\xF4ng c\u1EE5 \u0111\u1EBFm t\u1EA7n su\u1EA5t v\u0103n b\u1EA3n | nhavantuonglai",
    ignoreTitleTemplate: true
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Count", $$Count$2, {})} ${renderComponent($$result2, "Content", $$Count$1, {})} ` })}`;
}, "D:/Onecode/article-open/src/pages/analytics/count.astro", void 0);

const $$file = "D:/Onecode/article-open/src/pages/analytics/count.astro";
const $$url = "/analytics/count";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Count,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
