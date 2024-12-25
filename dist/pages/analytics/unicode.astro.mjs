import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent } from '../../chunks/astro/server_Cx2nMEd_.mjs';
import 'kleur/colors';
import { $ as $$Page } from '../../chunks/page_KtSAXQmz.mjs';
import 'clsx';
import { $ as $$Unicode$2 } from '../../chunks/unicode_rCYL678b.mjs';
import { $ as $$Action, a as $$Flowschart } from '../../chunks/flowschart_CXfL3AIE.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Unicode$1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", `<section class="relative md:-mt-[76px] not-prose"> <div class="absolute inset-0 pointer-events-none" aria-hidden="true"></div> <div class="pt-0 md:pt-[120px] pointer-events-none"></div> <h1 class="mx-auto max-w-7xl md:px-6 leading-tighter text-center text-4xl md:text-5xl font-bold leading-tighter tracking-tighter mb-6 font-heading">
C\xF4ng c\u1EE5 chuy\u1EC3n \u0111\u1ED5i v\u0103n b\u1EA3n Unicode
</h1> <div class="mx-auto max-w-7xl md:px-6 px-4"> <textarea id="input" placeholder="Nh\u1EADp v\u0103n b\u1EA3n c\u1EA7n chuy\u1EC3n \u0111\u1ED5i font ch\u1EEF Facebook v\xE0o \u0111\xE2y." class="px-4 mb-6 py-6 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900" required></textarea> <button id="convert-btn" class="btn-primary w-auto mb-6">Chuy\u1EC3n \u0111\u1ED5i v\u0103n b\u1EA3n</button> <div id="output" class="mb-6 text-lg grid grid-cols-1 gap-4"> <div class="border border-gray-300 p-4 rounded-lg"> <h3 class="text-justify text-lg dark:text-slate-400">V\u0103n b\u1EA3n ki\u1EC3u \u0111\u1EADm</h3> <p id="boldText"></p> </div> <div class="border border-gray-300 p-4 rounded-lg"> <h3 class="text-justify text-lg dark:text-slate-400">V\u0103n b\u1EA3n ki\u1EC3u nghi\xEAng</h3> <p id="italicText"></p> </div> <div class="border border-gray-300 p-4 rounded-lg"> <h3 class="text-justify text-lg dark:text-slate-400">V\u0103n b\u1EA3n ki\u1EC3u vi\u1EBFt tay</h3> <p id="handwritingText"></p> </div> <div class="border border-gray-300 p-4 rounded-lg"> <h3 class="text-justify text-lg dark:text-slate-400">V\u0103n b\u1EA3n ki\u1EC3u c\xE1ch</h3> <p id="fancyText"></p> </div> <div class="border border-gray-300 p-4 rounded-lg"> <h3 class="text-justify text-lg dark:text-slate-400">V\u0103n b\u1EA3n ki\u1EC3u \u0111\u1EADm v\xE0 nghi\xEAng</h3> <p id="boldItalicText"></p> </div> </div> </div> <script client:load>
				document.addEventListener("DOMContentLoaded", function () {
					const buttonConvert = document.getElementById('convert-btn');
					const input = document.getElementById('input');
					const boldTextOutput = document.getElementById('boldText');
					const italicTextOutput = document.getElementById('italicText');
					const handwritingTextOutput = document.getElementById('handwritingText');
					const fancyTextOutput = document.getElementById('fancyText');
					const boldItalicTextOutput = document.getElementById('boldItalicText');

					function toBold(text) {
						const boldChars = {
							'a': '\u{1D5EE}', 'b': '\u{1D5EF}', 'c': '\u{1D5F0}', 'd': '\u{1D5F1}', 'e': '\u{1D5F2}', 'f': '\u{1D5F3}', 'g': '\u{1D5F4}', 'h': '\u{1D5F5}', 'i': '\u{1D5F6}', 'j': '\u{1D5F7}', 'k': '\u{1D5F8}', 'l': '\u{1D5F9}', 'm': '\u{1D5FA}', 'n': '\u{1D5FB}', 'o': '\u{1D5FC}', 'p': '\u{1D5FD}', 'q': '\u{1D5FE}', 'r': '\u{1D5FF}', 's': '\u{1D600}', 't': '\u{1D601}', 'u': '\u{1D602}', 'v': '\u{1D603}', 'w': '\u{1D604}', 'x': '\u{1D605}', 'y': '\u{1D606}', 'z': '\u{1D607}', 'A': '\u{1D5D4}', 'B': '\u{1D5D5}', 'C': '\u{1D5D6}', 'D': '\u{1D5D7}', 'E': '\u{1D5D8}', 'F': '\u{1D5D9}', 'G': '\u{1D5DA}', 'H': '\u{1D5DB}', 'I': '\u{1D5DC}', 'J': '\u{1D5DD}', 'K': '\u{1D5DE}', 'L': '\u{1D5DF}', 'M': '\u{1D5E0}', 'N': '\u{1D5E1}', 'O': '\u{1D5E2}', 'P': '\u{1D5E3}', 'Q': '\u{1D5E4}', 'R': '\u{1D5E5}', 'S': '\u{1D5E6}', 'T': '\u{1D5E7}', 'U': '\u{1D5E8}', 'V': '\u{1D5E9}', 'W': '\u{1D5EA}', 'X': '\u{1D5EB}', 'Y': '\u{1D5EC}', 'Z': '\u{1D5ED}', '0': '\u{1D7CE}', '1': '\u{1D7CF}', '2': '\u{1D7D0}', '3': '\u{1D7D1}', '4': '\u{1D7D2}', '5': '\u{1D7D3}', '6': '\u{1D7D4}', '7': '\u{1D7D5}', '8': '\u{1D7D6}', '9': '\u{1D7D7}'
						};
						return text.split('').map(c => boldChars[c] || c).join('');
					}

					function toItalic(text) {
						const italicChars = {
							'a': '\u{1D622}', 'b': '\u{1D623}', 'c': '\u{1D624}', 'd': '\u{1D625}', 'e': '\u{1D626}', 'f': '\u{1D627}', 'g': '\u{1D628}', 'h': '\u{1D629}', 'i': '\u{1D62A}', 'j': '\u{1D62B}', 'k': '\u{1D62C}', 'l': '\u{1D62D}', 'm': '\u{1D62E}', 'n': '\u{1D62F}', 'o': '\u{1D630}', 'p': '\u{1D631}', 'q': '\u{1D632}', 'r': '\u{1D633}', 's': '\u{1D634}', 't': '\u{1D635}', 'u': '\u{1D636}', 'v': '\u{1D637}', 'w': '\u{1D638}', 'x': '\u{1D639}', 'y': '\u{1D63A}', 'z': '\u{1D63B}', 'A': '\u{1D608}', 'B': '\u{1D609}', 'C': '\u{1D60A}', 'D': '\u{1D60B}', 'E': '\u{1D60C}', 'F': '\u{1D60D}', 'G': '\u{1D60E}', 'H': '\u{1D60F}', 'I': '\u{1D610}', 'J': '\u{1D611}', 'K': '\u{1D612}', 'L': '\u{1D613}', 'M': '\u{1D614}', 'N': '\u{1D615}', 'O': '\u{1D616}', 'P': '\u{1D617}', 'Q': '\u{1D618}', 'R': '\u{1D619}', 'S': '\u{1D61A}', 'T': '\u{1D61B}', 'U': '\u{1D61C}', 'V': '\u{1D61D}', 'W': '\u{1D61E}', 'X': '\u{1D61F}', 'Y': '\u{1D620}', 'Z': '\u{1D621}', '0': '\u{1D7CE}', '1': '\u{1D7CF}', '2': '\u{1D7D0}', '3': '\u{1D7D1}', '4': '\u{1D7D2}', '5': '\u{1D7D3}', '6': '\u{1D7D4}', '7': '\u{1D7D5}', '8': '\u{1D7D6}', '9': '\u{1D7D7}'
						};
						return text.split('').map(c => italicChars[c] || c).join('');
					}

					function toHandwriting(text) {
						const handwritingChars = {
							'a': '\u{1D4B6}', 'b': '\u{1D4B7}', 'c': '\u{1D4B8}', 'd': '\u{1D4B9}', 'e': '\u{1D452}', 'f': '\u{1D4BB}', 'g': '\u{1D454}', 'h': '\u{1D4BD}', 'i': '\u{1D4BE}', 'j': '\u{1D4BF}', 'k': '\u{1D4C0}', 'l': '\u{1D4C1}', 'm': '\u{1D4C2}', 'n': '\u{1D4C3}', 'o': '\u{1D45C}', 'p': '\u{1D4C5}', 'q': '\u{1D4C6}', 'r': '\u{1D4C7}', 's': '\u{1D4C8}', 't': '\u{1D4C9}', 'u': '\u{1D4CA}', 'v': '\u{1D4CB}', 'w': '\u{1D4CC}', 'x': '\u{1D4CD}', 'y': '\u{1D4CE}', 'z': '\u{1D4CF}', 'A': '\u{1D49C}', 'B': '\u212C', 'C': '\u{1D49E}', 'D': '\u{1D49F}', 'E': '\u2130', 'F': '\u2131', 'G': '\u{1D4A2}', 'H': '\u210B', 'I': '\u2110', 'J': '\u{1D4A5}', 'K': '\u{1D4A6}', 'L': '\u2112', 'M': '\u2133', 'N': '\u{1D4A9}', 'O': '\u{1D4AA}', 'P': '\u{1D4AB}', 'Q': '\u{1D4AC}', 'R': '\u211B', 'S': '\u{1D4AE}', 'T': '\u{1D4AF}', 'U': '\u{1D4B0}', 'V': '\u{1D4B1}', 'W': '\u{1D4B2}', 'X': '\u{1D4B3}', 'Y': '\u{1D4B4}', 'Z': '\u{1D4B5}', '0': '\u{1D7CE}', '1': '\u{1D7CF}', '2': '\u{1D7D0}', '3': '\u{1D7D1}', '4': '\u{1D7D2}', '5': '\u{1D7D3}', '6': '\u{1D7D4}', '7': '\u{1D7D5}', '8': '\u{1D7D6}', '9': '\u{1D7D7}'
						};
						return text.split('').map(c => handwritingChars[c] || c).join('');
					}

					function toFancy(text) {
						const fancyChars = {
							'a': '\u{1D4EA}', 'b': '\u{1D4EB}', 'c': '\u{1D4EC}', 'd': '\u{1D4ED}', 'e': '\u{1D4EE}', 'f': '\u{1D4EF}', 'g': '\u{1D4F0}', 'h': '\u{1D4F1}', 'i': '\u{1D4F2}', 'j': '\u{1D4F3}', 'k': '\u{1D4F4}', 'l': '\u{1D4F5}', 'm': '\u{1D4F6}', 'n': '\u{1D4F7}', 'o': '\u{1D4F8}', 'p': '\u{1D4F9}', 'q': '\u{1D4FA}', 'r': '\u{1D4FB}', 's': '\u{1D4FC}', 't': '\u{1D4FD}', 'u': '\u{1D4FE}', 'v': '\u{1D4FF}', 'w': '\u{1D500}', 'x': '\u{1D501}', 'y': '\u{1D502}', 'z': '\u{1D503}', 'A': '\u{1D4D0}', 'B': '\u{1D4D1}', 'C': '\u{1D4D2}', 'D': '\u{1D4D3}', 'E': '\u{1D4D4}', 'F': '\u{1D4D5}', 'G': '\u{1D4D6}', 'H': '\u{1D4D7}', 'I': '\u{1D4D8}', 'J': '\u{1D4D9}', 'K': '\u{1D4DA}', 'L': '\u{1D4DB}', 'M': '\u{1D4DC}', 'N': '\u{1D4DD}', 'O': '\u{1D4DE}', 'P': '\u{1D4DF}', 'Q': '\u{1D4E0}', 'R': '\u{1D4E1}', 'S': '\u{1D4E2}', 'T': '\u{1D4E3}', 'U': '\u{1D4E4}', 'V': '\u{1D4E5}', 'W': '\u{1D4E6}', 'X': '\u{1D4E7}', 'Y': '\u{1D4E8}', 'Z': '\u{1D4E9}', '0': '\u{1D7CE}', '1': '\u{1D7CF}', '2': '\u{1D7D0}', '3': '\u{1D7D1}', '4': '\u{1D7D2}', '5': '\u{1D7D3}', '6': '\u{1D7D4}', '7': '\u{1D7D5}', '8': '\u{1D7D6}', '9': '\u{1D7D7}'
						};
						return text.split('').map(c => fancyChars[c] || c).join('');
					}

					function toBoldItalic(text) {
						const boldItalicChars = {
							'a': '\u{1D656}', 'b': '\u{1D657}', 'c': '\u{1D658}', 'd': '\u{1D659}', 'e': '\u{1D65A}', 'f': '\u{1D65B}', 'g': '\u{1D65C}', 'h': '\u{1D65D}', 'i': '\u{1D65E}', 'j': '\u{1D65F}', 'k': '\u{1D660}', 'l': '\u{1D661}', 'm': '\u{1D662}', 'n': '\u{1D663}', 'o': '\u{1D664}', 'p': '\u{1D665}', 'q': '\u{1D666}', 'r': '\u{1D667}', 's': '\u{1D668}', 't': '\u{1D669}', 'u': '\u{1D66A}', 'v': '\u{1D66B}', 'w': '\u{1D66C}', 'x': '\u{1D66D}', 'y': '\u{1D66E}', 'z': '\u{1D66F}', 'A': '\u{1D63C}', 'B': '\u{1D63D}', 'C': '\u{1D63E}', 'D': '\u{1D63F}', 'E': '\u{1D640}', 'F': '\u{1D641}', 'G': '\u{1D642}', 'H': '\u{1D643}', 'I': '\u{1D644}', 'J': '\u{1D645}', 'K': '\u{1D646}', 'L': '\u{1D647}', 'M': '\u{1D648}', 'N': '\u{1D649}', 'O': '\u{1D64A}', 'P': '\u{1D64B}', 'Q': '\u{1D64C}', 'R': '\u{1D64D}', 'S': '\u{1D64E}', 'T': '\u{1D64F}', 'U': '\u{1D650}', 'V': '\u{1D651}', 'W': '\u{1D652}', 'X': '\u{1D653}', 'Y': '\u{1D654}', 'Z': '\u{1D655}', '0': '\u{1D7CE}', '1': '\u{1D7CF}', '2': '\u{1D7D0}', '3': '\u{1D7D1}', '4': '\u{1D7D2}', '5': '\u{1D7D3}', '6': '\u{1D7D4}', '7': '\u{1D7D5}', '8': '\u{1D7D6}', '9': '\u{1D7D7}'
						};
						return text.split('').map(c => boldItalicChars[c] || c).join('');
					}

					buttonConvert.addEventListener('click', function() {
						const inputText = input.value;

						boldTextOutput.innerText = toBold(inputText);
						italicTextOutput.innerText = toItalic(inputText);
						handwritingTextOutput.innerText = toHandwriting(inputText);
						fancyTextOutput.innerText = toFancy(inputText);
						boldItalicTextOutput.innerText = toBoldItalic(inputText);
					});
				});
			<\/script> </section> `])), maybeRenderHead());
}, "D:/OneCode/article-open/src/components/analytics/unicode.astro", void 0);

const $$Unicode = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "C\xF4ng c\u1EE5 chuy\u1EC3n \u0111\u1ED5i v\u0103n b\u1EA3n Unicode | nhavantuonglai",
    ignoreTitleTemplate: true
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Page, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Unicode", $$Unicode$1, {})} ${renderComponent($$result2, "Content", $$Unicode$2, {})} ${renderComponent($$result2, "Action", $$Action, {})} ${renderComponent($$result2, "Flowschart", $$Flowschart, {})} ` })}`;
}, "D:/OneCode/article-open/src/pages/analytics/unicode.astro", void 0);

const $$file = "D:/OneCode/article-open/src/pages/analytics/unicode.astro";
const $$url = "/analytics/unicode";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Unicode,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
