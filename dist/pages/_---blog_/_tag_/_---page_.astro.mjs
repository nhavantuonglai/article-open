import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../../../chunks/astro/server_J9QqgmFZ.mjs';
import 'kleur/colors';
import { g as getStaticPathsBlogTag, b as blogTagRobots } from '../../../chunks/blog_ChQAVSFU.mjs';
import { $ as $$Page } from '../../../chunks/page_DQk_4Keq.mjs';
import { $ as $$Hero } from '../../../chunks/hero_DomAbGkL.mjs';
import { $ as $$Headline, a as $$List, b as $$Pagination } from '../../../chunks/pagination_CSguwpaG.mjs';
import { $ as $$Action, a as $$Soundcloud } from '../../../chunks/soundcloud_DahVq9O8.mjs';
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Page, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${maybeRenderHead()}<section class="px-4 md:px-6 py-20 mx-auto max-w-4xl"> ${renderComponent($$result2, "Headline", $$Headline, {}, { "default": ($$result3) => renderTemplate`Thẻ bài: ${tag}.` })} ${renderComponent($$result2, "BlogList", $$List, { "posts": page.data })} ${renderComponent($$result2, "Pagination", $$Pagination, { "prevUrl": page.url.prev, "nextUrl": page.url.next })} </section> ${renderComponent($$result2, "Action", $$Action, {})} ${renderComponent($$result2, "Soundcloud", $$Soundcloud, {})} ` })}`;
}, "D:/OneCode/article-open/src/pages/[...blog]/[tag]/[...page].astro", void 0);

const $$file = "D:/OneCode/article-open/src/pages/[...blog]/[tag]/[...page].astro";
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
