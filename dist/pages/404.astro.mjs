import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_D74Uuew0.mjs';
import 'kleur/colors';
import { $ as $$Page } from '../chunks/page_D0LVH7FG.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$404 = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "404"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Page, { "metadata": metadata }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", `<section class="flex items-center h-full p-16"> <div class="container flex flex-col items-center justify-center px-5 mx-auto my-8"> <h1 class="max-w-3xl mx-auto px-4 sm:px-6 text-9xl">
404.
</h1> <p class="max-w-3xl mx-auto px-4 sm:px-6">
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

			<\/script> </div> </section> `])), maybeRenderHead()) })}`;
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
