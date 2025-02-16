import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, u as unescapeHTML, e as addAttribute, F as Fragment } from './astro/server_D74Uuew0.mjs';
import 'kleur/colors';
import { S as Slideup, b as $$Image } from './action_dcaZU4o7.mjs';
import { a as $$Button } from './page_D0LVH7FG.mjs';

const $$Astro = createAstro("https://nhavantuonglai.com");
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hero;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline,
    content = await Astro2.slots.render("content"),
    actions = await Astro2.slots.render("actions"),
    image = await Astro2.slots.render("image")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Slideup", Slideup, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "~/assets/framer.jsx", "client:component-export": "Slideup" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="relative md:-mt-[76px] not-prose"> <div class="absolute inset-0 pointer-events-none" aria-hidden="true"></div> <div class="relative max-w-7xl mx-auto px-4 sm:px-6"> <div class="pt-0 md:pt-[120px] pointer-events-none"></div> <div class="py-12 md:py-20 lg:py-0 lg:flex lg:items-center lg:h-screen lg:gap-8"> <div class="basis-1/2 text-center lg:text-left pb-10 md:pb-16 mx-auto"> ${tagline && renderTemplate`<p class="text-base text-secondary dark:text-blue-200 font-bold tracking-wide uppercase">${unescapeHTML(tagline)}</p>`} ${title && renderTemplate`<h1>${unescapeHTML(title)}</h1>`} <div class="max-w-3xl mx-auto lg:max-w-none"> ${subtitle && renderTemplate`<p class="text-xl text-justify text-muted mb-6 dark:text-slate-300">${unescapeHTML(subtitle)}</p>`} ${actions && renderTemplate`<div class="max-w-xs sm:max-w-md m-auto flex flex-nowrap flex-col sm:flex-row sm:justify-center gap-4 lg:justify-start lg:m-0 lg:max-w-7xl"> ${Array.isArray(actions) ? actions.map((action, index) => renderTemplate`<div${addAttribute(index, "key")} class="flex w-full sm:w-auto"> ${renderComponent($$result2, "Button", $$Button, { ...action || {}, "class": "w-full sm:mb-0", "target": "_blank" })} </div>`) : renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(actions)}` })}`} </div>`} </div> ${content && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(content)}` })}`} </div> <div class="basis-1/2 text-center lg:text-left pb-10 md:pb-16 mx-auto"> ${image && renderTemplate`<div title="nhavantuonglai" class="relative m-auto max-w-5xl"> ${typeof image === "string" ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(image)}` })}` : renderTemplate`${renderComponent($$result2, "Image", $$Image, { "class": "mx-auto rounded-md w-full", "widths": [400, 768, 1024, 2040], "sizes": "(max-width: 767px) 400px, (max-width: 1023px) 768px, (max-width: 2039px) 1024px, 2040px", "loading": "eager", "width": 600, "height": 407, ...image })}`} </div>`} </div> </div> </div> </section> ` })}`;
}, "D:/OneCode/article-open/src/components/widgets/hero.astro", void 0);

export { $$Hero as $ };
