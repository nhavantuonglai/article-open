import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_cgYrkjj8.mjs';
import 'kleur/colors';
import { g as getHomePermalink, $ as $$CallToAction, a as $$PageLayout } from '../chunks/call-to-action_DmB1CxZd.mjs';
import { $ as $$Article } from '../chunks/article_CP4J_bLX.mjs';
import { $ as $$Floating } from '../chunks/floating_C56U8AIa.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  const title = `\u0110\xE3 x\u1EA3y ra l\u1ED7i`;
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": { title } }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="flex items-center h-full p-16"> <div class="container flex flex-col items-center justify-center px-5 mx-auto my-8"> <div class="max-w-md text-center"> <h2 class="mb-8 font-bold text-9xl"> <span class="text-primary">404.</span> </h2> <p class="mt-4 mb-8 text-lg justify-center text-muted dark:text-slate-400">
Một hoặc nhiều các vấn đề sau đã phát sinh: website bảo trì, link không khả dụng, quyền truy cập hạn chế.
</p> <a rel="noopener noreferrer"${addAttribute(getHomePermalink(), "href")} class="btn ml-4">Về nguồn.</a> </div> </div> </section> ${renderComponent($$result2, "Article", $$Article, {})} ${renderComponent($$result2, "CTA", $$CallToAction, {})} ${renderComponent($$result2, "Floating", $$Floating, {})} ` })}`;
}, "D:/Onebook/nhavantuonglai-vn/src/pages/404.astro", void 0);

const $$file = "D:/Onebook/nhavantuonglai-vn/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
