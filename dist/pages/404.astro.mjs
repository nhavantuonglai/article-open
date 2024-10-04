import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_BfxwJWhM.mjs';
import 'kleur/colors';
import { $ as $$PageLayout } from '../chunks/page-layout_7BvdpGlP.mjs';
import { g as getHomePermalink } from '../chunks/permalinks_DgxcdhcO.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  const title = `404`;
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": { title } }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="flex items-center h-full p-16"> <div class="container flex flex-col items-center justify-center px-5 mx-auto my-8"> <div class="max-w-md text-center"> <h2 class="mb-6 font-bold text-9xl"> <span class="text-primary">404.</span> </h2> <p class="mt-4 mb-6 text-lg justify-center text-muted dark:text-slate-400">
Một hoặc nhiều các vấn đề sau đã phát sinh: website bảo trì, link không khả dụng, quyền truy cập hạn chế.
</p> <meta http-equiv="refresh" content="1;url=https://nhavantuonglai.com/"> <a rel="noopener noreferrer"${addAttribute(getHomePermalink(), "href")} class="btn ml-4">Về nguồn.</a> </div> </div> </section> ` })}`;
}, "D:/Onecode/article-open/src/pages/404.astro", void 0);

const $$file = "D:/Onecode/article-open/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
