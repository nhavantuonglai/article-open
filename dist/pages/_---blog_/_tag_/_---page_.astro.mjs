import { d as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../../../chunks/astro/server_cgYrkjj8.mjs';
import 'kleur/colors';
import { b as getStaticPathsBlogTag, $ as $$CallToAction, a as $$PageLayout, c as blogTagRobots } from '../../../chunks/call-to-action_DmB1CxZd.mjs';
import { $ as $$Hero } from '../../../chunks/hero_Cwrs-g3x.mjs';
import { $ as $$Headline, a as $$List, b as $$Pagination } from '../../../chunks/pagination_CFtPy2hr.mjs';
import { $ as $$Floating } from '../../../chunks/floating_C56U8AIa.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://nhavantuonglai.com");
const prerender = true;
const getStaticPaths = async ({ paginate }) => {
  return await getStaticPathsBlogTag({ paginate });
};
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { page, tag } = Astro2.props;
  const currentPage = page.currentPage ?? 1;
  const metadata = {
    title: `Danh s\xE1ch b\xE0i vi\u1EBFt theo th\u1EBB ${tag}${currentPage > 1 ? ` | Trang ${currentPage} ` : ""}`,
    robots: {
      index: blogTagRobots?.index,
      follow: blogTagRobots?.follow
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${maybeRenderHead()}<section class="px-4 md:px-6 py-12 sm:py-16 lg:py-20 mx-auto max-w-4xl"> ${renderComponent($$result2, "Headline", $$Headline, {}, { "default": ($$result3) => renderTemplate`Thẻ bài: ${tag}.` })} ${renderComponent($$result2, "BlogList", $$List, { "posts": page.data })} ${renderComponent($$result2, "Pagination", $$Pagination, { "prevUrl": page.url.prev, "nextUrl": page.url.next })} </section> ${renderComponent($$result2, "CTA", $$CallToAction, {})} ${renderComponent($$result2, "Floating", $$Floating, {})} ` })}`;
}, "D:/Onebook/nhavantuonglai-vn/src/pages/[...blog]/[tag]/[...page].astro", void 0);

const $$file = "D:/Onebook/nhavantuonglai-vn/src/pages/[...blog]/[tag]/[...page].astro";
const $$url = "/[...blog]/[tag]/[...page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	getStaticPaths,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
