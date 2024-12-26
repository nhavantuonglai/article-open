import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_J9QqgmFZ.mjs';
import 'kleur/colors';
import { $ as $$Page } from '../chunks/page_DQk_4Keq.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$404 = createComponent(($$result, $$props, $$slots) => {
  const title = `404`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Page, { "metadata": { title } }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", `<section class="flex items-center h-full p-16"> <div class="container flex flex-col items-center justify-center px-5 mx-auto my-8"> <div class="max-w-md text-center"> <h2 class="mb-6 font-bold text-9xl"> <span class="text-primary">404.</span> </h2> <p class="mt-4 mb-6 text-lg justify-center text-muted dark:text-slate-400">
Li\xEAn k\u1EBFt hi\u1EC7n kh\xF4ng kh\u1EA3 d\u1EE5ng, v\u1EC1 trang ch\u1EE7 sau <span id="timer">5</span> gi\xE2y.
</p> <script client:load>

					let countdown = 5;
					const timerElement = document.getElementById('timer');

					const interval = setInterval(() => {
						countdown--;
						timerElement.textContent = countdown;

						if (countdown <= 0) {
							clearInterval(interval);
							window.location.href = "https://nhavantuonglai.com";
						}
					}, 1000);

				<\/script> </div> </div> </section> `])), maybeRenderHead()) })}`;
}, "D:/OneCode/article-open/src/pages/404.astro", void 0);

const $$file = "D:/OneCode/article-open/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
