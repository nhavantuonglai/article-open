import { d as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, b as addAttribute, F as Fragment, u as unescapeHTML } from '../chunks/astro/server_CPaUVu3N.mjs';
import 'kleur/colors';
import { a as $$Icon, b as $$Button, $ as $$PageLayout } from '../chunks/page-layout_d3DMGMu3.mjs';
import { $ as $$Hero } from '../chunks/hero_ufQZXyFE.mjs';
import { $ as $$Services, a as $$Brands, b as $$Testimonials } from '../chunks/testimonials_BbzCh4sT.mjs';
import { a as $$WidgetWrapper, b as $$Headline } from '../chunks/services_BOpoSTm3.mjs';
import { $ as $$CallToAction } from '../chunks/call-to-action_BuMXOY6d.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://nhavantuonglai.com");
const $$Pricing = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pricing;
  const {
    title = "",
    subtitle = "",
    tagline = "",
    prices = [],
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-7xl mx-auto ${classes?.container ?? ""}`, "bg": bg }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline })} ${maybeRenderHead()}<div class="flex items-stretch justify-center"> <div class="grid grid-cols-3 gap-4 dark:text-white sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"> ${prices && prices.map(({ title: title2, subtitle: subtitle2, price, period, items, callToAction, hasRibbon = false, ribbonTitle }) => renderTemplate`<div class="col-span-3 mx-auto flex w-full sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1"> ${price && period && renderTemplate`<div class="rounded-lg backdrop-blur border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900 shadow px-6 py-8 flex w-full max-w-sm flex-col justify-between text-center"> ${hasRibbon && ribbonTitle && renderTemplate`<div class="absolute right-[-5px] 2xl:right-[-8px] rtl:right-auto rtl:left-[-8px] rtl:2xl:left-[-10px] top-[-5px] 2xl:top-[-10px] z-[1] h-[100px] w-[100px] overflow-hidden text-right"> <span class="absolute top-[19px] right-[-21px] rtl:right-auto rtl:left-[-21px] block w-full rotate-45 rtl:-rotate-45 bg-green-700 text-center text-[10px] font-bold uppercase leading-5 text-white shadow-[0_3px_10px_-5px_rgba(0,0,0,0.3)] before:absolute before:left-0 before:top-full before:z-[-1] before:border-[3px] before:border-r-transparent before:border-b-transparent before:border-l-green-800 before:border-t-green-800 before:content-[''] after:absolute after:right-0 after:top-full after:z-[-1] after:border-[3px] after:border-l-transparent after:border-b-transparent after:border-r-green-800 after:border-t-green-800 after:content-['']"> ${ribbonTitle} </span> </div>`} <div class="px-2 py-0"> ${title2 && renderTemplate`<h3 class="text-center text-xl font-semibold uppercase leading-6 tracking-wider mb-2">${title2}</h3>`} ${subtitle2 && renderTemplate`<p class="font-light sm:text-lg text-gray-600 dark:text-slate-400">${subtitle2}</p>`} <div class="my-8"> <div class="flex items-center justify-center text-center mb-1"> <span class="text-5xl">$</span> <span class="text-6xl font-extrabold">${price}</span> </div> <span class="text-base leading-6 lowercase text-gray-600 dark:text-slate-400">${period}</span> </div> ${items && renderTemplate`<ul role="list" class="my-8 md:my-10 space-y-2 text-left"> ${items.map(
    ({ description, icon }) => description && renderTemplate`<li class="mb-1.5 flex items-start space-x-3 leading-7"> <div class="rounded-full bg-primary mt-1"> ${renderComponent($$result2, "Icon", $$Icon, { "name": icon ? icon : "tabler:check", "class": "w-5 h-5 font-bold p-1 text-white" })} </div> <span>${description}</span> </li>`
  )} </ul>`} </div> ${callToAction && renderTemplate`<div${addAttribute(`flex justify-center`, "class")}> ${typeof callToAction === "string" ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(callToAction)}` })}` : callToAction && callToAction.href && renderTemplate`${renderComponent($$result2, "Button", $$Button, { ...hasRibbon ? { variant: "primary" } : {}, ...callToAction })}`} </div>`} </div>`} </div>`)} </div> </div> ` })}`;
}, "D:/Onecode/article-open/src/components/widgets/pricing.astro", void 0);

const $$Prices = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Prices", $$Pricing, { "title": "B\xE1o gi\xE1 d\u1ECBch v\u1EE5", "prices": [
    {
      title: "Vi\u1EBFt b\xE0i",
      subtitle: "Ph\u1ED5 bi\u1EBFn v\u1EDBi c\xE1 nh\xE2n",
      price: 9,
      period: "m\u1ED7i b\xE0i",
      items: [
        {
          description: "C\u1EA5u tr\xFAc chu\u1EA9n SEO"
        },
        {
          description: "N\u1ED9i dung th\xE2n thi\u1EC7n, h\u1EEFu \xEDch"
        },
        {
          description: "S\u1ED1 l\u01B0\u1EE3ng ch\u1EEF linh ho\u1EA1t"
        },
        {
          description: "Ch\u1EA5t l\u01B0\u1EE3ng lu\xF4n c\u1ED1 \u0111\u1ECBnh"
        }
      ],
      callToAction: {
        target: "_blank",
        text: "Get started",
        href: "https://info.nhavantuonglai.com/instagram"
      }
    },
    {
      title: "SEO",
      subtitle: "Ph\u1ED5 bi\u1EBFn v\u1EDBi d\u1EF1 \xE1n",
      price: 499,
      period: "m\u1ED7i d\u1EF1 \xE1n",
      items: [
        {
          description: "Cam k\u1EBFt traffic, th\u1EE9 h\u1EA1ng"
        },
        {
          description: "T\u1ED1i \u01B0u n\u1ED9i dung, t\u1ED1c \u0111\u1ED9 t\u1EA3i"
        },
        {
          description: "C\u1EADp nh\u1EADt nhanh nh\u1EA1y thu\u1EADt to\xE1n m\u1EDBi"
        },
        {
          description: "B\u1EA3o h\xE0nh t\u1ED1i thi\u1EC3u 6 th\xE1ng"
        }
      ],
      callToAction: {
        target: "_blank",
        text: "Get started",
        href: "https://info.nhavantuonglai.com/instagram"
      },
      hasRibbon: true,
      ribbonTitle: "d\xF9ng nhi\u1EC1u"
    },
    {
      title: "Website",
      subtitle: "Ph\u1ED5 bi\u1EBFn v\u1EDBi doanh nghi\u1EC7p",
      price: 199,
      period: "m\u1ED7i s\u1EA3n ph\u1EA9m",
      items: [
        {
          description: "Th\xE2n thi\u1EC7n ng\u01B0\u1EDDi \u0111\u1ECDc, qu\u1EA3n l\xFD"
        },
        {
          description: "Giao di\u1EC7n hi\u1EC7n \u0111\u1EA1i, t\u1EA3i nhanh"
        },
        {
          description: "Kh\xF4ng t\u1ED1n ph\xED hosting"
        },
        {
          description: "Kh\xF4ng y\xEAu c\u1EA7u hi\u1EC3u bi\u1EBFt k\u1EF9 thu\u1EADt"
        }
      ],
      callToAction: {
        target: "_blank",
        text: "Get started",
        href: "#"
      }
    }
  ] })}`;
}, "D:/Onecode/article-open/src/components/content/prices.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "D\u1ECBch v\u1EE5 cung c\u1EA5p | nhavantuonglai"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Services", $$Services, {})} ${renderComponent($$result2, "Brands", $$Brands, {})} ${renderComponent($$result2, "Testimonials", $$Testimonials, {})} ${renderComponent($$result2, "Prices", $$Prices, {})} ${renderComponent($$result2, "CTA", $$CallToAction, {})} ` })}`;
}, "D:/Onecode/article-open/src/pages/analytics/index.astro", void 0);

const $$file = "D:/Onecode/article-open/src/pages/analytics/index.astro";
const $$url = "/analytics";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
