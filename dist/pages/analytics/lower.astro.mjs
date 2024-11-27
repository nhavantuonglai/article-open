import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, F as Fragment } from '../../chunks/astro/server_CPaUVu3N.mjs';
import 'kleur/colors';
import { $ as $$PageLayout } from '../../chunks/page-layout_d3DMGMu3.mjs';
import 'clsx';
import { $ as $$Services } from '../../chunks/services_BOpoSTm3.mjs';
import { $ as $$Question } from '../../chunks/question_0-p_xyNN.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Lower$2 = createComponent(($$result, $$props, $$slots) => {
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
}, "D:/Onecode/article-open/src/components/analytics/lower.astro", void 0);

const $$Lower$1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative md:-mt-[76px] not-prose"> <div class="absolute inset-0 pointer-events-none" aria-hidden="true"></div> <div class="relative max-w-7xl mx-auto"> <div class="pt-0 md:pt-[120px] pointer-events-none"></div> ${renderComponent($$result, "CTA", $$Services, { "callToAction": {
    text: "Nh\u1EAFn tin",
    href: "https://www.instagram.com/nhavantuonglai/"
  }, "items": [
    {
      title: "Chu\u1EA9n h\xF3a d\u1EEF li\u1EC7u",
      description: "Gi\xFAp nhanh ch\xF3ng v\xE0 d\u1EC5 d\xE0ng chuy\u1EC3n ch\u1EEF hoa th\xE0nh ch\u1EEF th\u01B0\u1EDDng \u0111\u1EC3 s\u1EED d\u1EE5ng, \u0111\u0103ng l\xEAn m\u1EA1ng x\xE3 h\u1ED9i.",
      icon: "tabler:bell-school"
    },
    {
      title: "L\u1ECDc b\u1ECF k\xFD t\u1EF1 l\u1ED7i",
      description: "Gi\xFAp chu\u1EA9n h\xF3a d\u1EEF li\u1EC7u \u0111\u1EA7u ra, \u0111\u1EC3 \u0111\u1ED3ng nh\u1EA5t v\xE0 \u0111\u1EA3m b\u1EA3o t\xEDnh nguy\xEAn v\u1EB9n c\u1EE7a d\u1EEF li\u1EC7u.",
      icon: "tabler:brand-codecov"
    }
  ], "image": {
    src: "https://nhavantuonglai.com/image/cover/001-688.jpg",
    alt: "nhan-tin-instagram"
  } }, { "content": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result3) => renderTemplate`
Công cụ chuyển đổi chữ hoa thành chữ thường là công cụ trực tuyến giúp dữ liệu của bạn sạch và dễ sử dụng với công cụ chuẩn hóa dữ liệu thô!
` })}` })} </div> </section> ${renderComponent($$result, "Question", $$Question, { "items": [
    {
      title: "S\u1EED d\u1EE5ng c\xF4ng c\u1EE5 nh\u01B0 th\u1EBF n\xE0o?",
      description: "\u0110\u1EC3 s\u1EED d\u1EE5ng c\xF4ng c\u1EE5 chuy\u1EC3n \u0111\u1ED5i ch\u1EEF hoa th\xE0nh ch\u1EEF th\u01B0\u1EDDng, b\u1EA1n ch\u1EC9 c\u1EA7n d\xE1n v\u0103n b\u1EA3n v\xE0o \xF4, nh\u1EA5n Chuy\u1EC3n \u0111\u1ED5i l\xE0 d\u1EEF li\u1EC7u s\u1EBD s\u1EB5n s\xE0ng cho c\xE1c d\u1EF1 \xE1n SEO v\xE0 \u0111\u1ECBnh d\u1EA1ng markdown.",
      icon: "tabler:chevrons-right"
    },
    {
      title: "C\xF3 gi\u1EDBi h\u1EA1n khi s\u1EED d\u1EE5ng c\xF4ng c\u1EE5 kh\xF4ng?",
      description: `C\xF4ng c\u1EE5 chuy\u1EC3n \u0111\u1ED5i ch\u1EEF hoa th\xE0nh ch\u1EEF th\u01B0\u1EDDng kh\xF4ng gi\u1EDBi h\u1EA1n s\u1ED1 l\u1EA7n s\u1EED d\u1EE5ng, nh\u01B0ng v\u1EDBi d\u1EEF li\u1EC7u l\u1EDBn, k\u1EBFt qu\u1EA3 c\xF3 th\u1EC3 m\u1EA5t th\xEAm th\u1EDDi gian.`,
      icon: "tabler:chevrons-right"
    },
    {
      title: "Nh\u1EEFng gi\u1EA3i ph\xE1p thay th\u1EBF kh\xE1c ph\xF9 h\u1EE3p \u0111\u1EC3 gi\u1EA3i quy\u1EBFt y\xEAu c\u1EA7u chuy\u1EC3n \u0111\u1ED5i ch\u1EEF hoa th\xE0nh ch\u1EEF th\u01B0\u1EDDng",
      description: "Ngo\xE0i c\xF4ng c\u1EE5 n\xE0y, b\u1EA1n c\xF3 th\u1EC3 th\u1EED c\xE1c ng\xF4n ng\u1EEF l\u1EADp tr\xECnh nh\u01B0 Python ho\u1EB7c R v\u1EDBi th\u01B0 vi\u1EC7n h\u1ED7 tr\u1EE3 \u0111\u1EBFm t\u1EA7n su\u1EA5t m\u1EA1nh m\u1EBD.",
      icon: "tabler:chevrons-right"
    },
    {
      title: "C\xE1ch \u0111\u1EC3 li\xEAn l\u1EA1c, h\u1ED7 tr\u1EE3 v\xE0 g\xF3p \xFD ho\xE0n thi\u1EC7n c\xF4ng c\u1EE5",
      description: "N\u1EBFu c\xF3 b\u1EA5t k\u1EF3 th\u1EAFc m\u1EAFc ho\u1EB7c g\xF3p \xFD, h\xE3y li\xEAn h\u1EC7 ch\xFAng t\xF4i qua email info@nhavantuonglai.com \u0111\u1EC3 \u0111\u01B0\u1EE3c h\u1ED7 tr\u1EE3.",
      icon: "tabler:chevrons-right"
    }
  ] })}`;
}, "D:/Onecode/article-open/src/components/javascript/lower.astro", void 0);

const $$Lower = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "C\xF4ng c\u1EE5 chuy\u1EC3n \u0111\u1ED5i ch\u1EEF hoa th\xE0nh ch\u1EEF th\u01B0\u1EDDng | nhavantuonglai",
    ignoreTitleTemplate: true
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Lower", $$Lower$2, {})} ${renderComponent($$result2, "Content", $$Lower$1, {})} ` })}`;
}, "D:/Onecode/article-open/src/pages/analytics/lower.astro", void 0);

const $$file = "D:/Onecode/article-open/src/pages/analytics/lower.astro";
const $$url = "/analytics/lower";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Lower,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
