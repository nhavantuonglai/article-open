import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, g as renderScript, m as maybeRenderHead } from './astro/server_D74Uuew0.mjs';
import 'kleur/colors';
import { S as Slideup, d as $$Wrapper, e as $$Headline } from './action_dcaZU4o7.mjs';

const $$Astro = createAstro("https://nhavantuonglai.com");
const $$Question = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Question;
  const {
    title = "",
    subtitle = "",
    tagline = "",
    items = [],
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Slideup", Slideup, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "~/assets/framer.jsx", "client:component-export": "Slideup" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Wrapper", $$Wrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-7xl mx-auto ${classes?.container ?? ""}`, "bg": bg }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline })} ${maybeRenderHead()}<div class="grid gap-6"> ${items.map((item) => renderTemplate`<div class="faq-item w-full"> <div class="flex gap-3 cursor-pointer"> <svg class="mr-2 w-6 h-6 text-primary flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <circle cx="12" cy="12" r="10"></circle> <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path> <line x1="12" y1="17" x2="12.01" y2="17"></line> </svg> <h3 class="text-xl">${item.title}</h3> </div> <div class="faq-answer mb-6 mt-2 pl-9 transition-all duration-300 max-h-0 opacity-0 overflow-hidden"> <p class="text-xl">${item.description}</p> </div> </div>`)} </div> ` })} ${renderScript($$result2, "D:/OneCode/article-open/src/components/widgets/question.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "D:/OneCode/article-open/src/components/widgets/question.astro", void 0);

export { $$Question as $ };
