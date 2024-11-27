import { d as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, u as unescapeHTML } from '../chunks/astro/server_CPaUVu3N.mjs';
import 'kleur/colors';
import { b as $$Button, $ as $$PageLayout } from '../chunks/page-layout_d3DMGMu3.mjs';
import { $ as $$Hero } from '../chunks/hero_ufQZXyFE.mjs';
import { $ as $$Grid } from '../chunks/grid_CD71nz9s.mjs';
import { c as getBlogPermalink } from '../chunks/permalinks_BIoFwlVb.mjs';
import { d as findLatestPosts } from '../chunks/blog_C-pAyLQ5.mjs';
import { a as $$WidgetWrapper } from '../chunks/services_BOpoSTm3.mjs';
import { $ as $$Services, a as $$Brands, b as $$Testimonials } from '../chunks/testimonials_BbzCh4sT.mjs';
import { $ as $$CallToAction } from '../chunks/call-to-action_BuMXOY6d.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://nhavantuonglai.com");
const $$BlogLatestPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogLatestPost;
  const {
    title = await Astro2.slots.render("title"),
    linkText = "\u0110\u1ECDc th\xEAm",
    linkUrl = getBlogPermalink(),
    information = await Astro2.slots.render("information"),
    count = 12,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  const posts = await findLatestPosts({ count }) ;
  return renderTemplate`${renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": classes?.container, "bg": bg }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="flex flex-col lg:justify-between lg:flex-row mb-6">${title && renderTemplate`<div class="md:max-w-sm"><h2 class="text-4xl md:text-5xl font-bold leading-tighter tracking-tighter mb-6 font-heading">${unescapeHTML(title)}</h2></div>`}${information && renderTemplate`<p class="text-muted text-justify dark:text-slate-400 lg:text-sm lg:max-w-md">${unescapeHTML(information)}</p>`}</div>${renderComponent($$result2, "Grid", $$Grid, { "posts": posts })}<div class="flex flex-col lg:justify-between lg:flex-row mb-6">${linkText && linkUrl && renderTemplate`${renderComponent($$result2, "Button", $$Button, { "variant": "link", "href": linkUrl }, { "default": ($$result3) => renderTemplate`${linkText} »` })}`}</div>` })}` }`;
}, "D:/Onecode/article-open/src/components/widgets/blog-latest-post.astro", void 0);

const $$Article = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Article", $$BlogLatestPost, { "title": "B\xE0i m\u1EDBi nh\u1EA5t", "information": `Danh s\xE1ch 4 b\xE0i m\u1EDBi nh\u1EA5t, c\u1EADp nh\u1EADt theo th\u1EE9 t\u1EF1 ng\xE0y th\xE1ng tr\xEAn website, gi\xFAp d\xF2ng ch\u1EA3y th\xF4ng tin lu\xF4n \u0111\u01B0\u1EE3c c\u1EADp nh\u1EADt v\xE0 c\u1EA3m h\u1EE9ng vi\u1EBFt l\xE1ch lu\xF4n tu\xF4n tr\xE0o.` })}`;
}, "D:/Onecode/article-open/src/components/content/article.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "\u0110\u1ECDc nhi\u1EC1u, hi\u1EC3u s\xE2u, vi\u1EBFt hay | nhavantuonglai",
    ignoreTitleTemplate: true
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Article", $$Article, {})} ${renderComponent($$result2, "Services", $$Services, {})} ${renderComponent($$result2, "Brands", $$Brands, {})} ${renderComponent($$result2, "Testimonials", $$Testimonials, {})} ${renderComponent($$result2, "CTA", $$CallToAction, {})} ` })}`;
}, "D:/Onecode/article-open/src/pages/index.astro", void 0);

const $$file = "D:/Onecode/article-open/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
