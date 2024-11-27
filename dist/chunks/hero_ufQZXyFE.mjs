import { d as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, a as renderComponent, F as Fragment } from './astro/server_CPaUVu3N.mjs';
import 'kleur/colors';
import { $ as $$Image } from './image_BT53gAGN.mjs';
import { b as $$Button } from './page-layout_d3DMGMu3.mjs';

const $$Astro = createAstro("https://nhavantuonglai.com");
const $$Hero$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hero$1;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline,
    content = await Astro2.slots.render("content"),
    actions = await Astro2.slots.render("actions"),
    image = await Astro2.slots.render("image")
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="relative md:-mt-[76px] not-prose"> <div class="absolute inset-0 pointer-events-none" aria-hidden="true"></div> <div class="relative max-w-7xl mx-auto px-4 sm:px-6"> <div class="pt-0 md:pt-[120px] pointer-events-none"></div> <div class="py-12 md:py-20 lg:py-0 lg:flex lg:items-center lg:h-screen lg:gap-8"> <div class="basis-1/2 text-center lg:text-left pb-10 md:pb-16 mx-auto"> ${tagline && renderTemplate`<p class="text-base text-secondary dark:text-blue-200 font-bold tracking-wide uppercase">${unescapeHTML(tagline)}</p>`} ${title && renderTemplate`<h1 class="text-5xl md:text-6xl font-bold leading-tighter tracking-tighter mb-6 font-heading dark:text-gray-200">${unescapeHTML(title)}</h1>`} <div class="max-w-3xl mx-auto lg:max-w-none"> ${subtitle && renderTemplate`<p class="text-xl text-justify text-muted mb-6 dark:text-slate-300">${unescapeHTML(subtitle)}</p>`} ${actions && renderTemplate`<div class="max-w-xs sm:max-w-md m-auto flex flex-nowrap flex-col sm:flex-row sm:justify-center gap-4 lg:justify-start lg:m-0 lg:max-w-7xl"> ${Array.isArray(actions) ? actions.map((action) => renderTemplate`<div class="flex w-full sm:w-auto"> ${renderComponent($$result, "Button", $$Button, { ...action || {}, "class": "w-full sm:mb-0", "target": "_blank" })} </div>`) : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(actions)}` })}`} </div>`} </div> ${content && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(content)}` })}`} </div> <div class="basis-1/2 text-center lg:text-left pb-10 md:pb-16 mx-auto"> ${image && renderTemplate`<div title="nhavantuonglai" class="relative m-auto max-w-5xl"> ${typeof image === "string" ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(image)}` })}` : renderTemplate`${renderComponent($$result, "Image", $$Image, { "class": "mx-auto rounded-md w-full", "widths": [400, 768, 1024, 2040], "sizes": "(max-width: 767px) 400px, (max-width: 1023px) 768px, (max-width: 2039px) 1024px, 2040px", "loading": "eager", "width": 600, "height": 407, ...image })}`} </div>`} </div> </div> </div> </section>`;
}, "D:/Onecode/article-open/src/components/widgets/hero.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Hero", $$Hero$1, { "title": "\u0110\u1ECDc nhi\u1EC1u, hi\u1EC3u s\xE2u, vi\u1EBFt hay c\xF9ng nhavantuonglai", "subtitle": "nhavantuonglai l\xE0 website c\xE1 nh\xE2n, th\xF4ng qua k\u1EF9 n\u0103ng vi\u1EBFt l\xE1ch v\xE0 v\u1ED1n hi\u1EC3u bi\u1EBFt x\xE3 h\u1ED9i \u0111\u1EC3 ph\xE1n \xE1nh g\xF3c nh\xECn c\xE1 nh\xE2n th\xF4ng qua h\xECnh \u1EA3nh v\xE0 c\xE2u t\u1EEB, t\u1EADp trung th\u1EC3 hi\u1EC7n ch\u1EE7 y\u1EBFu d\u01B0\u1EDBi h\xECnh th\u1EE9c \u0111o\u1EA3n v\u0103n v\xE0 nghi\xEAn c\u1EE9u.", "actions": [
    { variant: "primary", text: "\u0110\u1ECDc th\xEAm", href: "https://www.instagram.com/nhavantuonglai", icon: "tabler:square-rounded-arrow-right" }
  ], "image": {
    src: "https://nhavantuonglai.com/image/cover/001-318.jpg",
    alt: "nhavantuonglai-cover"
  } })}`;
}, "D:/Onecode/article-open/src/components/content/hero.astro", void 0);

export { $$Hero as $ };
