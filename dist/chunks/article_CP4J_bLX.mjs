import { d as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, u as unescapeHTML } from './astro/server_cgYrkjj8.mjs';
import 'kleur/colors';
import { $ as $$Grid } from './grid_Dy74GOMd.mjs';
import { o as getBlogPermalink, p as findLatestPosts, m as $$WidgetWrapper, l as $$Button } from './call-to-action_DmB1CxZd.mjs';

const $$Astro = createAstro("https://nhavantuonglai.com");
const $$BlogLatestPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogLatestPost;
  const {
    title = await Astro2.slots.render("title"),
    linkText = "Xem th\xEAm",
    linkUrl = getBlogPermalink(),
    information = await Astro2.slots.render("information"),
    count = 4,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  const posts = await findLatestPosts({ count }) ;
  return renderTemplate`${renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": classes?.container, "bg": bg }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="flex flex-col lg:justify-between lg:flex-row mb-8">${title && renderTemplate`<div class="md:max-w-sm"><h2 class="text-4xl md:text-5xl font-bold leading-tighter tracking-tighter mb-4 font-heading">${unescapeHTML(title)}</h2>${linkText && linkUrl && renderTemplate`${renderComponent($$result2, "Button", $$Button, { "variant": "link", "href": linkUrl }, { "default": ($$result3) => renderTemplate`${linkText} »` })}`}</div>`}${information && renderTemplate`<p class="text-muted text-justify dark:text-slate-400 lg:text-sm lg:max-w-md">${unescapeHTML(information)}</p>`}</div>${renderComponent($$result2, "Grid", $$Grid, { "posts": posts })}` })}` }`;
}, "D:/Onebook/nhavantuonglai-vn/src/components/widgets/blog-latest-post.astro", void 0);

const $$Article = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Article", $$BlogLatestPost, { "title": "B\xE0i m\u1EDBi nh\u1EA5t", "information": `Danh s\xE1ch 4 b\xE0i m\u1EDBi nh\u1EA5t, c\u1EADp nh\u1EADt theo th\u1EE9 t\u1EF1 ng\xE0y th\xE1ng tr\xEAn website, gi\xFAp d\xF2ng ch\u1EA3y th\xF4ng tin lu\xF4n \u0111\u01B0\u1EE3c c\u1EADp nh\u1EADt v\xE0 c\u1EA3m h\u1EE9ng vi\u1EBFt l\xE1ch lu\xF4n tu\xF4n tr\xE0o.` })}`;
}, "D:/Onebook/nhavantuonglai-vn/src/components/content/article.astro", void 0);

export { $$Article as $ };
