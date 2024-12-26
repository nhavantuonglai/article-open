import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent } from '../../chunks/astro/server_J9QqgmFZ.mjs';
import 'kleur/colors';
import { $ as $$Page } from '../../chunks/page_DQk_4Keq.mjs';
import 'clsx';
import { $ as $$Integrate$2 } from '../../chunks/integrate_DrQINyjc.mjs';
import { $ as $$Action, a as $$Soundcloud } from '../../chunks/soundcloud_DahVq9O8.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw) }));
var _a;
const $$Integrate$1 = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", `<section class="relative md:-mt-[76px] not-prose"> <div class="absolute inset-0 pointer-events-none" aria-hidden="true"></div> <div class="pt-0 md:pt-[120px] pointer-events-none"></div> <h1 class="mx-auto max-w-7xl md:px-6 leading-tighter text-center text-4xl md:text-5xl font-bold leading-tighter tracking-tighter mb-6 font-heading">
Tr\u1EE3 l\xFD AI Google t\xEDch h\u1EE3p Gemini API
</h1> <div class="mx-auto max-w-7xl md:px-6 px-4"> <textarea id="input" placeholder="Nh\u1EADp c\xE2u h\u1ECFi c\u1EE7a b\u1EA1n\u2026" class="px-4 mb-6 py-6 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900" required></textarea> <button id="convert-btn" class="btn-primary w-auto mb-6">G\u1EEDi y\xEAu c\u1EA7u</button> <div id="output" class="mb-6 text-lg border border-gray-300 p-4 rounded-lg"></div> </div> <script client:load>
		document.addEventListener("DOMContentLoaded", function () {
			const buttonConvert = document.getElementById('convert-btn');
			const input = document.getElementById('input');
			const output = document.getElementById('output');

			buttonConvert.addEventListener('click', async function () {
				const inputText = input.value.trim();
				if (!inputText) {
					output.innerText = "L\u1ED7i nh\u1EADp li\u1EC7u, kh\xF4ng t\xECm th\u1EA5y d\u1EEF li\u1EC7u \u0111\u1EA7u v\xE0o, vui l\xF2ng ki\u1EC3m tra l\u1EA1i.";
					return;
				}

				const apiKey = "AIzaSyDdLtr1xSz2DRc9BlXVpcHgoXhMvHlEHPo";

				const endpoint = \`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=\${apiKey}\`;

				output.innerText = "\u0110ang x\u1EED l\xFD\u2026";

				try {
					const response = await fetch(endpoint, {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify({
							contents: [
								{
									parts: [
										{ text: inputText }
									]
								}
							]
						})
					});

					if (!response.ok) {
						const error = await response.text();
						try {
							const errorJSON = JSON.parse(error);
							if (errorJSON.error && errorJSON.error.message) {
								output.innerText = \`L\u1ED7i m\xE1y ch\u1EE7 x\xE1c \u0111\u1ECBnh \u0111\u01B0\u1EE3c nguy\xEAn nh\xE2n: \${errorJSON.error.message}, vui l\xF2ng th\u1EED l\u1EA1i sau v\xE0 b\xE1o c\xE1o v\u1EDBi qu\u1EA3n tr\u1ECB vi\xEAn.\`;
							} else {
								output.innerText = \`L\u1ED7i m\xE1y ch\u1EE7 li\xEAn quan \u0111\u1EBFn th\u01B0 vi\u1EC7n Google Cloud Platform, vui l\xF2ng th\u1EED l\u1EA1i sau v\xE0 b\xE1o c\xE1o v\u1EDBi qu\u1EA3n tr\u1ECB vi\xEAn.\`;
							}
						} catch (parseError) {
							output.innerText = \`L\u1ED7i nh\u1EADp li\u1EC7u, \u0111\u1ECBnh d\u1EA1ng d\u1EEF li\u1EC7u kh\xF4ng h\u1EE3p l\u1EC7, vui l\xF2ng ki\u1EC3m tra l\u1EA1i.\`;
							console.error("Could not parse error response as JSON:", parseError);
						}
						console.error('Error response:', response.status, error);
						return;
					}

					const result = await response.json();
					const aiResponse = result.candidates[0].content;

					function formatText(text) {
						text = text.replace(/\u2014|-/g, '\u2013');
						text = text.replace(/\\.{3}/g, '\u2026');
						text = text.replace(/[*"]/g, '');
						return text;
					}

					if (typeof aiResponse === 'object' && aiResponse !== null && aiResponse.parts && Array.isArray(aiResponse.parts) && aiResponse.parts.length > 0 && aiResponse.parts[0].text) {
						output.innerText = formatText(aiResponse.parts[0].text);
					} else if (typeof aiResponse === 'string') {
						output.innerText = formatText(aiResponse);
					} else {
						output.innerText = "L\u1ED7i m\xE1y ch\u1EE7 li\xEAn quan \u0111\u1EBFn h\u1EC7 th\u1ED1ng Google AI, vui l\xF2ng th\u1EED l\u1EA1i sau v\xE0 b\xE1o c\xE1o v\u1EDBi qu\u1EA3n tr\u1ECB vi\xEAn.";
						console.error("Unexpected response format:", aiResponse);
					}

				} catch (error) {
					console.error('Error:', error);
					output.innerText = 'L\u1ED7i m\xE1y ch\u1EE7 kh\xF4ng th\u1EC3 k\u1EBFt n\u1ED1i, vui l\xF2ng th\u1EED l\u1EA1i sau v\xE0 b\xE1o c\xE1o v\u1EDBi qu\u1EA3n tr\u1ECB vi\xEAn.';
				}
			});
		});
	<\/script> </section>`], ["", `<section class="relative md:-mt-[76px] not-prose"> <div class="absolute inset-0 pointer-events-none" aria-hidden="true"></div> <div class="pt-0 md:pt-[120px] pointer-events-none"></div> <h1 class="mx-auto max-w-7xl md:px-6 leading-tighter text-center text-4xl md:text-5xl font-bold leading-tighter tracking-tighter mb-6 font-heading">
Tr\u1EE3 l\xFD AI Google t\xEDch h\u1EE3p Gemini API
</h1> <div class="mx-auto max-w-7xl md:px-6 px-4"> <textarea id="input" placeholder="Nh\u1EADp c\xE2u h\u1ECFi c\u1EE7a b\u1EA1n\u2026" class="px-4 mb-6 py-6 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900" required></textarea> <button id="convert-btn" class="btn-primary w-auto mb-6">G\u1EEDi y\xEAu c\u1EA7u</button> <div id="output" class="mb-6 text-lg border border-gray-300 p-4 rounded-lg"></div> </div> <script client:load>
		document.addEventListener("DOMContentLoaded", function () {
			const buttonConvert = document.getElementById('convert-btn');
			const input = document.getElementById('input');
			const output = document.getElementById('output');

			buttonConvert.addEventListener('click', async function () {
				const inputText = input.value.trim();
				if (!inputText) {
					output.innerText = "L\u1ED7i nh\u1EADp li\u1EC7u, kh\xF4ng t\xECm th\u1EA5y d\u1EEF li\u1EC7u \u0111\u1EA7u v\xE0o, vui l\xF2ng ki\u1EC3m tra l\u1EA1i.";
					return;
				}

				const apiKey = "AIzaSyDdLtr1xSz2DRc9BlXVpcHgoXhMvHlEHPo";

				const endpoint = \\\`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=\\\${apiKey}\\\`;

				output.innerText = "\u0110ang x\u1EED l\xFD\u2026";

				try {
					const response = await fetch(endpoint, {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify({
							contents: [
								{
									parts: [
										{ text: inputText }
									]
								}
							]
						})
					});

					if (!response.ok) {
						const error = await response.text();
						try {
							const errorJSON = JSON.parse(error);
							if (errorJSON.error && errorJSON.error.message) {
								output.innerText = \\\`L\u1ED7i m\xE1y ch\u1EE7 x\xE1c \u0111\u1ECBnh \u0111\u01B0\u1EE3c nguy\xEAn nh\xE2n: \\\${errorJSON.error.message}, vui l\xF2ng th\u1EED l\u1EA1i sau v\xE0 b\xE1o c\xE1o v\u1EDBi qu\u1EA3n tr\u1ECB vi\xEAn.\\\`;
							} else {
								output.innerText = \\\`L\u1ED7i m\xE1y ch\u1EE7 li\xEAn quan \u0111\u1EBFn th\u01B0 vi\u1EC7n Google Cloud Platform, vui l\xF2ng th\u1EED l\u1EA1i sau v\xE0 b\xE1o c\xE1o v\u1EDBi qu\u1EA3n tr\u1ECB vi\xEAn.\\\`;
							}
						} catch (parseError) {
							output.innerText = \\\`L\u1ED7i nh\u1EADp li\u1EC7u, \u0111\u1ECBnh d\u1EA1ng d\u1EEF li\u1EC7u kh\xF4ng h\u1EE3p l\u1EC7, vui l\xF2ng ki\u1EC3m tra l\u1EA1i.\\\`;
							console.error("Could not parse error response as JSON:", parseError);
						}
						console.error('Error response:', response.status, error);
						return;
					}

					const result = await response.json();
					const aiResponse = result.candidates[0].content;

					function formatText(text) {
						text = text.replace(/\u2014|-/g, '\u2013');
						text = text.replace(/\\\\.{3}/g, '\u2026');
						text = text.replace(/[*"]/g, '');
						return text;
					}

					if (typeof aiResponse === 'object' && aiResponse !== null && aiResponse.parts && Array.isArray(aiResponse.parts) && aiResponse.parts.length > 0 && aiResponse.parts[0].text) {
						output.innerText = formatText(aiResponse.parts[0].text);
					} else if (typeof aiResponse === 'string') {
						output.innerText = formatText(aiResponse);
					} else {
						output.innerText = "L\u1ED7i m\xE1y ch\u1EE7 li\xEAn quan \u0111\u1EBFn h\u1EC7 th\u1ED1ng Google AI, vui l\xF2ng th\u1EED l\u1EA1i sau v\xE0 b\xE1o c\xE1o v\u1EDBi qu\u1EA3n tr\u1ECB vi\xEAn.";
						console.error("Unexpected response format:", aiResponse);
					}

				} catch (error) {
					console.error('Error:', error);
					output.innerText = 'L\u1ED7i m\xE1y ch\u1EE7 kh\xF4ng th\u1EC3 k\u1EBFt n\u1ED1i, vui l\xF2ng th\u1EED l\u1EA1i sau v\xE0 b\xE1o c\xE1o v\u1EDBi qu\u1EA3n tr\u1ECB vi\xEAn.';
				}
			});
		});
	<\/script> </section>`])), maybeRenderHead());
}, "D:/OneCode/article-open/src/components/analytics/integrate.astro", void 0);

const $$Integrate = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "Tr\u1EE3 l\xFD AI Google t\xEDch h\u1EE3p Gemini API | nhavantuonglai",
    ignoreTitleTemplate: true
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Page, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Integrate", $$Integrate$1, {})} ${renderComponent($$result2, "Content", $$Integrate$2, {})} ${renderComponent($$result2, "Action", $$Action, {})} ${renderComponent($$result2, "Soundcloud", $$Soundcloud, {})} ` })}`;
}, "D:/OneCode/article-open/src/pages/analytics/integrate.astro", void 0);

const $$file = "D:/OneCode/article-open/src/pages/analytics/integrate.astro";
const $$url = "/analytics/integrate";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Integrate,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
