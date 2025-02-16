import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, d as defineScriptVars, e as addAttribute, m as maybeRenderHead, F as Fragment } from '../chunks/astro/server_D74Uuew0.mjs';
import 'kleur/colors';
import { $ as $$Page } from '../chunks/page_D0LVH7FG.mjs';
import { $ as $$Hero } from '../chunks/hero_BoT9xsi0.mjs';
import { S as Slideup, $ as $$Services, a as $$Action } from '../chunks/action_dcaZU4o7.mjs';
import { $ as $$Question } from '../chunks/question_FrDTImTS.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://nhavantuonglai.com");
const $$Analytics = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Analytics;
  const {
    id,
    title = "Nh\u1EADp n\u1ED9i dung",
    description = "",
    inputType,
    outputType,
    placeholder = "Nh\u1EADp n\u1ED9i dung c\u1EA7n x\u1EED l\xFD.",
    downloadText = "T\u1EA3i xu\u1ED1ng.",
    debounceTime = 500,
    channels = []
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Slideup", Slideup, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "~/assets/framer.jsx", "client:component-export": "Slideup" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", '<section class="relative md:-mt-[76px] not-prose"> <div class="mx-auto max-w-7xl md:px-6 px-4"> <div class="bg-white text-black p-4 rounded-lg mb-6"> <h2 class="text-center">', "</h2> ", " ", " ", " ", " ", ' </div> <div class="border border-primary bg-white text-black p-4 rounded-lg"> ', " ", " ", " ", " <div", ' class="w-full bg-gray-200 rounded h-2 mb-6 hidden"> <div', ' class="h-2 bg-primary rounded mb-6" style="width: 0%"></div> </div> </div> </div> </section> <script>(function(){', "\n\n		document.addEventListener('DOMContentLoaded', () => {\n			const input = document.getElementById(`${id}-input`);\n			const fileInput = document.getElementById(`${id}-file`);\n			const progressBar = document.getElementById(`${id}-progress-bar`);\n			const progressContainer = document.getElementById(`${id}-progress`);\n			const fileOutput = document.getElementById(`${id}-file-output`);\n			const uploadBtn = document.getElementById(`${id}-upload-btn`);\n			let debounceTimeout;\n\n			const processInput = async () => {\n				let progress = 0;\n				progressBar.style.width = '0%';\n				progressContainer.classList.remove('hidden');\n				if (fileOutput) fileOutput.classList.add('hidden');\n\n				const interval = setInterval(() => {\n					progress += 5;\n					progressBar.style.width = `${progress}%`;\n\n					if (progress >= 100) {\n						clearInterval(interval);\n						setTimeout(() => {\n							progressContainer.classList.add('hidden');\n							if (fileOutput) fileOutput.classList.remove('hidden');\n						}, 500);\n					}\n				}, 200);\n			};\n\n			if (inputType === 'text') {\n				input.addEventListener('input', () => {\n					clearTimeout(debounceTimeout);\n					\n					const value = input.value.trim();\n					if (!value) {\n						progressContainer.classList.add('hidden');\n						if (fileOutput) fileOutput.classList.add('hidden');\n						return;\n					}\n\n					debounceTimeout = setTimeout(processInput, debounceTime);\n				});\n			}\n\n			if (inputType === 'file') {\n				uploadBtn.addEventListener('click', () => {\n					fileInput.click();\n				});\n\n				fileInput.addEventListener('change', (event) => {\n					if (event.target.files && event.target.files[0]) {\n						processInput();\n					}\n				});\n			}\n		});\n\n	})();<\/script> "], [" ", '<section class="relative md:-mt-[76px] not-prose"> <div class="mx-auto max-w-7xl md:px-6 px-4"> <div class="bg-white text-black p-4 rounded-lg mb-6"> <h2 class="text-center">', "</h2> ", " ", " ", " ", " ", ' </div> <div class="border border-primary bg-white text-black p-4 rounded-lg"> ', " ", " ", " ", " <div", ' class="w-full bg-gray-200 rounded h-2 mb-6 hidden"> <div', ' class="h-2 bg-primary rounded mb-6" style="width: 0%"></div> </div> </div> </div> </section> <script>(function(){', "\n\n		document.addEventListener('DOMContentLoaded', () => {\n			const input = document.getElementById(\\`\\${id}-input\\`);\n			const fileInput = document.getElementById(\\`\\${id}-file\\`);\n			const progressBar = document.getElementById(\\`\\${id}-progress-bar\\`);\n			const progressContainer = document.getElementById(\\`\\${id}-progress\\`);\n			const fileOutput = document.getElementById(\\`\\${id}-file-output\\`);\n			const uploadBtn = document.getElementById(\\`\\${id}-upload-btn\\`);\n			let debounceTimeout;\n\n			const processInput = async () => {\n				let progress = 0;\n				progressBar.style.width = '0%';\n				progressContainer.classList.remove('hidden');\n				if (fileOutput) fileOutput.classList.add('hidden');\n\n				const interval = setInterval(() => {\n					progress += 5;\n					progressBar.style.width = \\`\\${progress}%\\`;\n\n					if (progress >= 100) {\n						clearInterval(interval);\n						setTimeout(() => {\n							progressContainer.classList.add('hidden');\n							if (fileOutput) fileOutput.classList.remove('hidden');\n						}, 500);\n					}\n				}, 200);\n			};\n\n			if (inputType === 'text') {\n				input.addEventListener('input', () => {\n					clearTimeout(debounceTimeout);\n					\n					const value = input.value.trim();\n					if (!value) {\n						progressContainer.classList.add('hidden');\n						if (fileOutput) fileOutput.classList.add('hidden');\n						return;\n					}\n\n					debounceTimeout = setTimeout(processInput, debounceTime);\n				});\n			}\n\n			if (inputType === 'file') {\n				uploadBtn.addEventListener('click', () => {\n					fileInput.click();\n				});\n\n				fileInput.addEventListener('change', (event) => {\n					if (event.target.files && event.target.files[0]) {\n						processInput();\n					}\n				});\n			}\n		});\n\n	})();<\/script> "])), maybeRenderHead(), title, description && renderTemplate`<p>${description}</p>`, inputType === "text" && renderTemplate`<textarea${addAttribute(`${id}-input`, "id")}${addAttribute(placeholder, "placeholder")} class="w-full text-justify text-lg dark:text-slate-400 border border-gray-300 p-4 rounded-lg break-words bg-white dark:bg-slate-900" style="resize: none; height: 150px;"></textarea>`, inputType === "compare-text" && renderTemplate`<textarea${addAttribute(`${id}-input`, "id")}${addAttribute(placeholder, "placeholder")} class="w-full text-justify text-lg dark:text-slate-400 border border-gray-300 p-4 rounded-lg break-words bg-white dark:bg-slate-900" style="resize: none; height: 150px;"></textarea>
					<textarea${addAttribute(`${id}-input`, "id")}${addAttribute(placeholder, "placeholder")} class="w-full text-justify text-lg dark:text-slate-400 border border-gray-300 p-4 rounded-lg break-words bg-white dark:bg-slate-900" style="resize: none; height: 150px;"></textarea>`, inputType === "file" && renderTemplate`<div${addAttribute(`${id}-input`, "id")} class="flex flex-col items-center justify-center p-6 rounded-md bg-gray-50"> <p> <button${addAttribute(`${id}-upload-btn`, "id")} class="mb-6 text-lg font-medium leading-6">
Choose File
</button> </p> <input type="file"${addAttribute(`${id}-file`, "id")} class="hidden"> </div>`, inputType === "button" && renderTemplate`<div${addAttribute(`${id}-buttons`, "id")} class="flex flex-wrap gap-2"> ${channels.map((channel) => renderTemplate`<button class="btn w-auto mb-6"${addAttribute(channel.url, "data-url")}> ${channel.name} </button>`)} </div>`, outputType === "text" && renderTemplate`<div${addAttribute(`${id}-text-output`, "id")} class="overflow-y-auto min-h-[400px] h-auto p-2 rounded text-justify text-lg mb-6"></div>`, outputType === "file" && renderTemplate`<div${addAttribute(`${id}-file-output`, "id")} class="hidden"> <a${addAttribute(`${id}-download`, "id")} href="#" class="btn w-auto mb-6"> ${downloadText} </a> </div>`, outputType === "audio" && renderTemplate`<div${addAttribute(`${id}-audio-output`, "id")} class="text-justify mb-6 text-lg dark:text-slate-400"> <audio${addAttribute(`${id}-audio-player`, "id")} class="w-full	mb-6" controls> <source${addAttribute(`${id}-audio-source`, "id")} src="" type="audio/mpeg"> </audio> <div${addAttribute(`${id}-status`, "id")} class="text-justify mb-6 text-lg dark:text-slate-400"></div> </div>`, outputType === "video" && renderTemplate`<div${addAttribute(`${id}-video-output`, "id")} class="text-justify mb-6 text-lg dark:text-slate-400"> <video${addAttribute(`${id}-video-player`, "id")} class="w-full	mb-6" controls> <source${addAttribute(`${id}-video-source`, "id")} src="" type="video/mp4"> </video> <div${addAttribute(`${id}-status`, "id")} class="text-justify mb-6 text-lg dark:text-slate-400"></div> </div>`, addAttribute(`${id}-progress`, "id"), addAttribute(`${id}-progress-bar`, "id"), defineScriptVars({ id, inputType, debounceTime })) })}`;
}, "D:/OneCode/article-open/src/components/widgets/analytics.astro", void 0);

const $$Index$1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Hero", $$Hero, { "title": "C\xF4ng c\u1EE5 \u0111\u1EBFm t\u1EA7n su\u1EA5t v\u0103n b\u1EA3n", "subtitle": "C\xF4ng c\u1EE5 \u0111\u1EBFm t\u1EA7n su\u1EA5t v\u0103n b\u1EA3n gi\xFAp l\xE0m s\u1EA1ch v\xE0 l\u1ECDc v\u0103n b\u1EA3n, \u0111\u1EA3m b\u1EA3o d\u1EEF li\u1EC7u tr\u1EDF n\xEAn d\u1EC5 s\u1EED d\u1EE5ng, t\u1ED1i \u01B0u h\xF3a hi\u1EC7u qu\u1EA3 c\xF4ng vi\u1EC7c v\xE0 ph\xE2n t\xEDch.", "image": {
    src: "https://banmaixanh.org/image/cover/001-073.jpg",
    alt: "nhavantuonglai-cover"
  } })} ${renderComponent($$result, "Analytics", $$Analytics, { "id": "text-counter", "title": "C\xF4ng c\u1EE5 \u0111\u1EBFm t\u1EA7n su\u1EA5t v\u0103n b\u1EA3n", "description": "H\u01B0\u1EDBng d\u1EABn: Sao ch\xE9p v\xE0 d\xE1n v\u0103n b\u1EA3n \u0111\u1EBFm t\u1EA7n su\u1EA5t, c\xF4ng c\u1EE5 s\u1EBD tr\u1EA3 v\u1EC1 k\u1EBFt qu\u1EA3 t\u01B0\u01A1ng \u1EE9ng.", "inputType": "text", "outputType": "text", "placeholder": "Vui l\xF2ng nh\u1EADp v\u0103n b\u1EA3n \u0111\u1EBFm t\u1EA7n su\u1EA5t \u1EDF \u0111\xE2y.", "debounceTime": 500 })} ${maybeRenderHead()}<index></index> ${renderComponent($$result, "CTA", $$Services, { "callToAction": {
    text: "S\u1EED d\u1EE5ng c\xF4ng c\u1EE5",
    href: "https://nhavantuonglai.com/analytics/count"
  }, "items": [
    {
      title: "Th\u1ED1ng k\xEA, t\u1ED5ng h\u1EE3p d\u1EEF li\u1EC7u",
      description: "Gi\xFAp ph\xE2n t\xEDch t\u1EA7n su\u1EA5t xu\u1EA5t hi\u1EC7n gi\xE1 tr\u1ECB gi\xFAp ph\xE2n t\xEDch s\u1ED1 li\u1EC7u l\u1EDBn nhanh ch\xF3ng v\xE0 ch\xEDnh x\xE1c."
    },
    {
      title: "H\u1ED7 tr\u1EE3 gi\u1EA3i m\u1EADt m\xE3 thay th\u1EBF",
      description: "D\u1EF1a v\xE0o kh\u1EA3 n\u0103ng th\u1ED1ng k\xEA t\u1EA7n su\u1EA5t v\u0103n b\u1EA3n, k\u1EBFt h\u1EE3p c\xF9ng suy \u0111o\xE1n \u0111\u1EC3 \u0111\u01B0a ra ng\u1EEF c\u1EA3nh, k\u1EBFt c\u1EA5u ch\u1EEF ph\xF9 h\u1EE3p \u0111\u1EC3 ho\xE0n di\u1EC5n d\u1ECBch ra n\u1ED9i dung g\u1ED1c."
    }
  ], "image": {
    src: "https://banmaixanh.org/image/cover/001-629.jpg",
    alt: "nhan-tin-instagram"
  } }, { "content": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result3) => renderTemplate`
Bạn muốn biết từ hoặc cụm từ nào xuất hiện nhiều nhất trong văn bản? công cụ đếm tần suất văn bản là trợ thủ đắc lực giúp bạn xác định số lần xuất hiện của bất kỳ giá trị nào.
` })}` })} ${renderComponent($$result, "CTA", $$Services, { "title": "Gi\u1EDBi thi\u1EC7u v\u1EC1 c\xF4ng c\u1EE5 \u0111\u1EBFm t\u1EA7n su\u1EA5t v\u0103n b\u1EA3n", "isReversed": true, "items": [
    {
      title: "C\xF4ng c\u1EE5 \u0111\u1EBFm t\u1EA7n su\u1EA5t v\u0103n b\u1EA3n l\xE0 g\xEC?",
      description: "C\xF4ng c\u1EE5 \u0111\u1EBFm t\u1EA7n su\u1EA5t v\u0103n b\u1EA3n l\xE0 gi\u1EA3i ph\xE1p k\u1EF9 thu\u1EADt s\u1ED1, gi\xFAp ng\u01B0\u1EDDi d\xF9ng nhanh ch\xF3ng x\xE1c \u0111\u1ECBnh s\u1ED1 l\u1EA7n xu\u1EA5t hi\u1EC7n c\u1EE7a t\u1EEB ho\u1EB7c c\u1EE5m t\u1EEB trong v\u0103n b\u1EA3n b\u1EA5t k\u1EF3. B\u1EB1ng c\xE1ch s\u1EED d\u1EE5ng c\xF4ng c\u1EE5 n\xE0y, ng\u01B0\u1EDDi d\xF9ng kh\xF4ng ch\u1EC9 d\u1EC5 d\xE0ng t\xECm ra c\xE1c y\u1EBFu t\u1ED1 quan tr\u1ECDng m\xE0 c\xF2n ph\xE1t hi\u1EC7n c\xE1c t\u1EEB kh\xF3a ch\xEDnh trong n\u1ED9i dung. V\u1EDBi s\u1EF1 ph\xE1t tri\u1EC3n c\u1EE7a c\xF4ng ngh\u1EC7, c\xE1c c\xF4ng c\u1EE5 \u0111\u1EBFm t\u1EA7n su\u1EA5t v\u0103n b\u1EA3n ng\xE0y c\xE0ng \u0111\u01B0\u1EE3c c\u1EA3i ti\u1EBFn, cho ph\xE9p x\u1EED l\xFD d\u1EEF li\u1EC7u l\u1EDBn, h\u1ED7 tr\u1EE3 ph\xE2n t\xEDch chi ti\u1EBFt v\xE0 tr\u1EF1c quan h\u01A1n."
    },
    {
      title: "T\u1EA1i sao c\u1EA7n \u0111\u1EBFn c\xF4ng c\u1EE5 \u0111\u1EBFm t\u1EA7n su\u1EA5t v\u0103n b\u1EA3n?",
      description: "Trong nhi\u1EC1u l\u0129nh v\u1EF1c, vi\u1EC7c ph\xE2n t\xEDch v\u0103n b\u1EA3n \u0111\u1EC3 t\xECm ra t\u1EA7n su\u1EA5t t\u1EEB ng\u1EEF \u0111\xF3ng vai tr\xF2 quan tr\u1ECDng. T\u1EEB ti\u1EBFp th\u1ECB n\u1ED9i dung, nghi\xEAn c\u1EE9u ng\xF4n ng\u1EEF, \u0111\u1EBFn qu\u1EA3n l\xFD d\u1EEF li\u1EC7u, c\xF4ng c\u1EE5 \u0111\u1EBFm t\u1EA7n su\u1EA5t v\u0103n b\u1EA3n gi\xFAp t\u1ED1i \u01B0u h\xF3a quy tr\xECnh l\xE0m vi\u1EC7c, ti\u1EBFt ki\u1EC7m th\u1EDDi gian v\xE0 n\xE2ng cao \u0111\u1ED9 ch\xEDnh x\xE1c. \u0110\u1EB7c bi\u1EC7t, v\u1EDBi c\xE1c t\xE0i li\u1EC7u d\xE0i ho\u1EB7c d\u1EEF li\u1EC7u ph\u1EE9c t\u1EA1p, vi\u1EC7c \u0111\u1EBFm t\u1EA7n su\u1EA5t th\u1EE7 c\xF4ng kh\xF4ng ch\u1EC9 m\u1EA5t th\u1EDDi gian m\xE0 c\xF2n d\u1EC5 d\u1EABn \u0111\u1EBFn sai s\xF3t."
    }
  ], "image": {
    src: "https://banmaixanh.org/image/cover/001-650.jpg",
    alt: "nhan-tin-instagram"
  } })} ${renderComponent($$result, "CTA", $$Services, { "title": "T\xEDnh n\u0103ng n\u1ED5i b\u1EADt c\u1EE7a c\xF4ng c\u1EE5 \u0111\u1EBFm t\u1EA7n su\u1EA5t v\u0103n b\u1EA3n", "items": [
    {
      title: "\u0110\u1EBFm v\u0103n b\u1EA3n ch\xEDnh x\xE1c v\xE0 nhanh ch\xF3ng",
      description: "C\xF4ng c\u1EE5 \u0111\u1EBFm t\u1EA7n su\u1EA5t v\u0103n b\u1EA3n s\u1EDF h\u1EEFu kh\u1EA3 n\u0103ng x\u1EED l\xFD d\u1EEF li\u1EC7u v\u01B0\u1EE3t tr\u1ED9i: (1) X\xE1c \u0111\u1ECBnh t\u1EA7n su\u1EA5t t\u1EEB ng\u1EEF: D\u1EC5 d\xE0ng x\xE1c \u0111\u1ECBnh t\u1EEB ho\u1EB7c c\u1EE5m t\u1EEB n\xE0o xu\u1EA5t hi\u1EC7n nhi\u1EC1u nh\u1EA5t trong v\u0103n b\u1EA3n. (2) Ph\xE2n t\xEDch nhanh ch\xF3ng: Ch\u1EC9 c\u1EA7n nh\u1EADp v\u0103n b\u1EA3n, c\xF4ng c\u1EE5 s\u1EBD tr\u1EA3 v\u1EC1 k\u1EBFt qu\u1EA3 t\u1EE9c th\xEC, gi\xFAp ti\u1EBFt ki\u1EC7m th\u1EDDi gian. (3) H\u1ED7 tr\u1EE3 \u0111a ng\xF4n ng\u1EEF: Kh\xF4ng ch\u1EC9 gi\u1EDBi h\u1EA1n \u1EDF ti\u1EBFng Anh, nhi\u1EC1u c\xF4ng c\u1EE5 c\xF2n h\u1ED7 tr\u1EE3 ti\u1EBFng Vi\u1EC7t v\xE0 c\xE1c ng\xF4n ng\u1EEF kh\xE1c, ph\u1EE5c v\u1EE5 nhu c\u1EA7u ph\xE2n t\xEDch to\xE0n c\u1EA7u."
    },
    {
      title: "Ph\xE2n t\xEDch n\xE2ng cao",
      description: "Ngo\xE0i vi\u1EC7c \u0111\u1EBFm t\u1EA7n su\u1EA5t, c\xF4ng c\u1EE5 c\xF2n t\xEDch h\u1EE3p c\xE1c t\xEDnh n\u0103ng ph\xE2n t\xEDch s\xE2u: (1) Th\u1ED1ng k\xEA theo nh\xF3m t\u1EEB: c\xF4ng c\u1EE5 c\xF3 th\u1EC3 nh\u1EADn di\u1EC7n v\xE0 ph\xE2n t\xEDch c\xE1c c\u1EE5m t\u1EEB 2 - 3 t\u1EEB, gi\xFAp ph\xE1t hi\u1EC7n c\xE1c xu h\u01B0\u1EDBng n\u1ED9i dung. (2) Bi\u1EC3u \u0111\u1ED3 tr\u1EF1c quan: T\u1EA1o ra c\xE1c bi\u1EC3u \u0111\u1ED3 t\u1EA7n su\u1EA5t t\u1EEB ng\u1EEF, gi\xFAp ng\u01B0\u1EDDi d\xF9ng d\u1EC5 d\xE0ng hi\u1EC3u v\xE0 tr\xECnh b\xE0y k\u1EBFt qu\u1EA3."
    }
  ], "image": {
    src: "https://banmaixanh.org/image/cover/001-685.jpg",
    alt: "nhan-tin-instagram"
  } })} ${renderComponent($$result, "CTA", $$Services, { "title": "L\u1EE3i \xEDch v\xE0 \u1EE9ng d\u1EE5ng th\u1EF1c t\u1EBF c\u1EE7a c\xF4ng c\u1EE5 \u0111\u1EBFm t\u1EA7n su\u1EA5t v\u0103n b\u1EA3n", "isReversed": true, "items": [
    {
      title: "L\u1EE3i \xEDch c\u1EE7a c\xF4ng c\u1EE5 \u0111\u1EBFm t\u1EA7n su\u1EA5t v\u0103n b\u1EA3n",
      description: "C\xF4ng c\u1EE5 n\xE0y mang l\u1EA1i nhi\u1EC1u l\u1EE3i \xEDch thi\u1EBFt th\u1EF1c: (1) Ph\xE2n t\xEDch n\u1ED9i dung hi\u1EC7u qu\u1EA3: X\xE1c \u0111\u1ECBnh c\xE1c t\u1EEB kh\xF3a ch\xEDnh ho\u1EB7c c\u1EE5m t\u1EEB \u0111\u01B0\u1EE3c s\u1EED d\u1EE5ng nhi\u1EC1u nh\u1EA5t, h\u1ED7 tr\u1EE3 t\u1ED1i \u01B0u h\xF3a n\u1ED9i dung b\xE0i vi\u1EBFt ho\u1EB7c chi\u1EBFn d\u1ECBch marketing. (2) T\u0103ng \u0111\u1ED9 ch\xEDnh x\xE1c: Gi\u1EA3m thi\u1EC3u sai s\xF3t so v\u1EDBi vi\u1EC7c \u0111\u1EBFm th\u1EE7 c\xF4ng, \u0111\u1EB7c bi\u1EC7t v\u1EDBi c\xE1c t\xE0i li\u1EC7u d\xE0i ho\u1EB7c ph\u1EE9c t\u1EA1p. (3) Ti\u1EBFt ki\u1EC7m th\u1EDDi gian: K\u1EBFt qu\u1EA3 ph\xE2n t\xEDch \u0111\u01B0\u1EE3c tr\u1EA3 v\u1EC1 ch\u1EC9 trong v\xE0i gi\xE2y, gi\xFAp ng\u01B0\u1EDDi d\xF9ng t\u1EADp trung v\xE0o c\xE1c t\xE1c v\u1EE5 quan tr\u1ECDng kh\xE1c."
    },
    {
      title: "\u1EE8ng d\u1EE5ng c\xF4ng c\u1EE5 \u0111\u1EBFm t\u1EA7n su\u1EA5t v\u0103n b\u1EA3n trong c\xE1c l\u0129nh v\u1EF1c",
      description: "(1) Ti\u1EBFp th\u1ECB n\u1ED9i dung: Ph\xE2n t\xEDch c\xE1c t\u1EEB kh\xF3a ch\xEDnh trong b\xE0i vi\u1EBFt ho\u1EB7c chi\u1EBFn d\u1ECBch qu\u1EA3ng c\xE1o \u0111\u1EC3 \u0111\u1EA3m b\u1EA3o n\u1ED9i dung ph\xF9 h\u1EE3p v\u1EDBi xu h\u01B0\u1EDBng t\xECm ki\u1EBFm. (2) Nghi\xEAn c\u1EE9u ng\xF4n ng\u1EEF: H\u1ED7 tr\u1EE3 nghi\xEAn c\u1EE9u t\u1EA7n su\u1EA5t t\u1EEB ng\u1EEF trong c\xE1c ng\xF4n ng\u1EEF kh\xE1c nhau, ph\u1EE5c v\u1EE5 m\u1EE5c \u0111\xEDch h\u1ECDc thu\u1EADt. (3) Ph\xE2n t\xEDch d\u1EEF li\u1EC7u doanh nghi\u1EC7p: T\xECm ki\u1EBFm c\xE1c c\u1EE5m t\u1EEB quan tr\u1ECDng trong t\xE0i li\u1EC7u kh\xE1ch h\xE0ng ho\u1EB7c b\xE1o c\xE1o n\u1ED9i b\u1ED9, gi\xFAp \u0111\u01B0a ra quy\u1EBFt \u0111\u1ECBnh chi\u1EBFn l\u01B0\u1EE3c."
    }
  ], "image": {
    src: "https://banmaixanh.org/image/cover/001-695.jpg",
    alt: "nhan-tin-instagram"
  } })} ${renderComponent($$result, "CTA", $$Services, { "title": "\u0110\xE1nh gi\xE1 tr\u1EA3i nghi\u1EC7m c\xF4ng c\u1EE5 \u0111\u1EBFm t\u1EA7n su\u1EA5t v\u0103n b\u1EA3n", "items": [
    {
      title: "Giao di\u1EC7n th\xE2n thi\u1EC7n v\xE0 d\u1EC5 s\u1EED d\u1EE5ng",
      description: "H\u1EA7u h\u1EBFt c\xE1c c\xF4ng c\u1EE5 \u0111\u1EBFm t\u1EA7n su\u1EA5t v\u0103n b\u1EA3n hi\u1EC7n nay \u0111\u1EC1u \u0111\u01B0\u1EE3c thi\u1EBFt k\u1EBF v\u1EDBi giao di\u1EC7n th\xE2n thi\u1EC7n, d\u1EC5 d\xE0ng ti\u1EBFp c\u1EADn cho c\u1EA3 ng\u01B0\u1EDDi m\u1EDBi b\u1EAFt \u0111\u1EA7u. Ch\u1EC9 c\u1EA7n nh\u1EADp v\u0103n b\u1EA3n v\xE0 nh\u1EA5n n\xFAt ph\xE2n t\xEDch, ng\u01B0\u1EDDi d\xF9ng s\u1EBD nhanh ch\xF3ng nh\u1EADn \u0111\u01B0\u1EE3c k\u1EBFt qu\u1EA3 chi ti\u1EBFt. C\xF4ng c\u1EE5 \u0111\u1EBFm t\u1EA7n su\u1EA5t v\u0103n b\u1EA3n kh\xF4ng ch\u1EC9 nhanh m\xE0 c\xF2n \u0111\u1EA3m b\u1EA3o \u0111\u1ED9 ch\xEDnh x\xE1c cao. Ng\u01B0\u1EDDi d\xF9ng c\xF3 th\u1EC3 tin t\u01B0\u1EDFng v\xE0o k\u1EBFt qu\u1EA3 ph\xE2n t\xEDch \u0111\u1EC3 \u0111\u01B0a ra c\xE1c quy\u1EBFt \u0111\u1ECBnh chi\u1EBFn l\u01B0\u1EE3c ho\u1EB7c c\u1EA3i thi\u1EC7n n\u1ED9i dung."
    },
    {
      title: "Ph\xF9 h\u1EE3p v\u1EDBi nhi\u1EC1u \u0111\u1ED1i t\u01B0\u1EE3ng ng\u01B0\u1EDDi d\xF9ng",
      description: "T\u1EEB c\xE1c nh\xE0 ti\u1EBFp th\u1ECB, nh\xE0 nghi\xEAn c\u1EE9u \u0111\u1EBFn h\u1ECDc sinh sinh vi\xEAn, c\xF4ng c\u1EE5 \u0111\u1EBFm t\u1EA7n su\u1EA5t v\u0103n b\u1EA3n \u0111\xE1p \u1EE9ng m\u1ECDi nhu c\u1EA7u kh\xE1c nhau. V\u1EDBi t\xEDnh n\u0103ng \u0111a d\u1EA1ng v\xE0 d\u1EC5 s\u1EED d\u1EE5ng, c\xF4ng c\u1EE5 n\xE0y \u0111\xE3 tr\u1EDF th\xE0nh l\u1EF1a ch\u1ECDn h\xE0ng \u0111\u1EA7u trong vi\u1EC7c x\u1EED l\xFD v\xE0 ph\xE2n t\xEDch v\u0103n b\u1EA3n."
    }
  ], "image": {
    src: "https://banmaixanh.org/image/cover/001-699.jpg",
    alt: "nhan-tin-instagram"
  } })} ${renderComponent($$result, "Question", $$Question, { "items": [
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
}, "D:/OneCode/article-open/src/components/content/analytics/index.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "C\xF4ng c\u1EE5 \u0111\u1EBFm t\u1EA7n su\u1EA5t v\u0103n b\u1EA3n | nhavantuonglai",
    ignoreTitleTemplate: true
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Page, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Index", $$Index$1, {})} ${renderComponent($$result2, "Action", $$Action, {})} ` })}`;
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
