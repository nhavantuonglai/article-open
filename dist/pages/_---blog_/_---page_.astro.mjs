import { d as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_cgYrkjj8.mjs';
import 'kleur/colors';
import { d as getStaticPathsBlogList, $ as $$CallToAction, a as $$PageLayout, e as blogListRobots } from '../../chunks/call-to-action_DmB1CxZd.mjs';
import { $ as $$Hero } from '../../chunks/hero_Cwrs-g3x.mjs';
import { $ as $$Headline, a as $$List, b as $$Pagination } from '../../chunks/pagination_CFtPy2hr.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://nhavantuonglai.com");
const prerender = true;
const getStaticPaths = async ({ paginate }) => {
  return await getStaticPathsBlogList({ paginate });
};
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { page } = Astro2.props;
  const currentPage = page.currentPage ?? 1;
  const metadata = {
    title: `Danh s\xE1ch b\xE0i vi\u1EBFt ${currentPage > 1 ? ` | Trang ${currentPage}` : ""}`,
    robots: {
      index: currentPage === 1,
      follow: blogListRobots?.follow
    },
    openGraph: {
      type: "blog"
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${maybeRenderHead()}<section class="px-6 sm:px-6 py-12 sm:py-16 lg:py-20 mx-auto max-w-4xl"> ${renderComponent($$result2, "Headline", $$Headline, { "subtitle": "\u0111\xE3 xu\u1EA5t b\u1EA3n tr\xEAn website." }, { "default": ($$result3) => renderTemplate`
Bài viết
` })} ${renderComponent($$result2, "BlogList", $$List, { "posts": page.data })} ${renderComponent($$result2, "Pagination", $$Pagination, { "prevUrl": page.url.prev, "nextUrl": page.url.next })} </section> ${renderComponent($$result2, "CTA", $$CallToAction, {})} ` })}`;
}, "D:/Onebook/nhavantuonglai-vn/src/pages/[...blog]/[...page].astro", void 0);

const $$file = "D:/Onebook/nhavantuonglai-vn/src/pages/[...blog]/[...page].astro";
const $$url = "/[...blog]/[...page]";

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
