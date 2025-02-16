import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, f as renderSlot, F as Fragment, u as unescapeHTML, e as addAttribute } from './astro/server_D74Uuew0.mjs';
import 'kleur/colors';
import { b as $$Icon, a as $$Button } from './page_D0LVH7FG.mjs';
import { g as $$Background, S as Slideup, e as $$Headline } from './action_dcaZU4o7.mjs';

const $$Astro$1 = createAstro("https://nhavantuonglai.com");
const $$Block = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Block;
  const { id, isDark = false, containerClass = "", bg, as = "section" } = Astro2.props;
  const WrapperTag = as;
  return renderTemplate`${renderComponent($$result, "WrapperTag", WrapperTag, { "class": "relative not-prose scroll-mt-[72px]", ...id ? { id } : {} }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="absolute inset-0 pointer-events-none -z-[1]" aria-hidden="true"> ${renderSlot($$result2, $$slots["bg"], renderTemplate` ${bg ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(bg)}` })}` : renderTemplate`${renderComponent($$result2, "Background", $$Background, { "isDark": isDark })}`} `)} </div> <div class="mb-6 md:mb-62 relative mx-auto max-w-7xl px-4 md:px-6 text-default"> ${renderSlot($$result2, $$slots["default"])} </div> ` })}`;
}, "D:/OneCode/article-open/src/components/ui/block.astro", void 0);

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
  return renderTemplate`${renderComponent($$result, "Slideup", Slideup, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "~/assets/framer.jsx", "client:component-export": "Slideup" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Block", $$Block, { "id": id, "isDark": isDark, "containerClass": `max-w-7xl mx-auto ${classes?.container ?? ""}`, "bg": bg }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline })} ${maybeRenderHead()}<div class="justify-center"> <div class="grid grid-cols-3 gap-4 dark:text-white sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"> ${prices && prices.length > 0 && prices.map(({
    title: title2,
    subtitle: subtitle2,
    price,
    period,
    items,
    callToAction,
    hasRibbon = false,
    ribbonTitle
  }, index) => renderTemplate`<div${addAttribute(index, "key")} class="col-span-3 mx-auto flex w-full sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1"> ${price && period && renderTemplate`<div class="rounded-lg backdrop-blur border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900 shadow px-6 py-8 flex w-full max-w-sm flex-col justify-between text-center"> ${hasRibbon && ribbonTitle && renderTemplate`<div class="absolute right-[-5px] 2xl:right-[-8px] rtl:right-auto rtl:left-[-8px] rtl:2xl:left-[-10px] top-[-5px] 2xl:top-[-10px] z-[1] h-[100px] w-[100px] overflow-hidden text-right"> <span class="absolute top-[19px] right-[-21px] rtl:right-auto rtl:left-[-21px] block w-full rotate-45 rtl:-rotate-45 bg-green-700 text-center text-[10px] font-bold uppercase leading-5 text-white shadow-[0_3px_10px_-5px_rgba(0,0,0,0.3)] before:absolute before:left-0 before:top-full before:z-[-1] before:border-[3px] before:border-r-transparent before:border-b-transparent before:border-l-green-800 before:border-t-green-800 before:content-[''] after:absolute after:right-0 after:top-full after:z-[-1] after:border-[3px] after:border-l-transparent after:border-b-transparent after:border-r-green-800 after:border-t-green-800 after:content-['']"> ${ribbonTitle} </span> </div>`} <div class="px-2 py-0"> ${title2 && renderTemplate`<h3>${title2}</h3>`} ${subtitle2 && renderTemplate`<p class="font-light sm:text-lg text-gray-600 dark:text-slate-400">${subtitle2}</p>`} <div> <div class="flex items-center justify-center text-center mb-6"> <span class="text-4xl font-extrabold">${price}</span> <span class="text-4xl">000 đ</span> </div> <span class="text-base leading-6 lowercase text-gray-600 dark:text-slate-400">${period}</span> </div> ${items && items.length > 0 && renderTemplate`<ul role="list" class="my-8 md:my-10 space-y-2 text-left"> ${items.map(({ description, icon }, index2) => description && renderTemplate`<li${addAttribute(index2, "key")} class="mb-6.5 flex items-center items-start space-x-3 leading-7"> <div class="rounded-full bg-primary"> ${renderComponent($$result3, "Icon", $$Icon, { "name": icon || "tabler:check", "class": "w-5 h-5 font-bold p-1 text-white" })} </div> <span>${description}</span> </li>`)} </ul>`} </div> ${callToAction && renderTemplate`<div class="flex justify-center"> ${typeof callToAction === "string" ? renderTemplate`${renderComponent($$result3, "Fragment", Fragment, {}, { "default": ($$result4) => renderTemplate`${unescapeHTML(callToAction)}` })}` : callToAction?.href && renderTemplate`${renderComponent($$result3, "Button", $$Button, { ...hasRibbon ? { variant: "primary" } : {}, ...callToAction })}`} </div>`} </div>`} </div>`)} </div> </div> ` })} ` })}`;
}, "D:/OneCode/article-open/src/components/widgets/pricing.astro", void 0);

const $$Prices = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Prices", $$Pricing, { "title": "B\xE1o gi\xE1 chi ph\xED d\u1ECBch v\u1EE5", "prices": [
    {
      title: "Vi\u1EBFt b\xE0i",
      subtitle: "Ph\u1ED5 bi\u1EBFn v\u1EDBi c\xE1 nh\xE2n",
      price: 99,
      period: "m\u1ED7i b\xE0i",
      items: [
        {
          description: "C\u1EA5u tr\xFAc chu\u1EA9n SEO."
        },
        {
          description: "N\u1ED9i dung th\xE2n thi\u1EC7n, h\u1EEFu \xEDch."
        },
        {
          description: "S\u1ED1 l\u01B0\u1EE3ng ch\u1EEF linh ho\u1EA1t."
        },
        {
          description: "Ch\u1EA5t l\u01B0\u1EE3ng lu\xF4n c\u1ED1 \u0111\u1ECBnh."
        }
      ],
      callToAction: {
        target: "_blank",
        text: "Thu\xEA vi\u1EBFt",
        href: "https://instagram.com/nhavantuonglai"
      }
    },
    {
      title: "T\u1ED1i \u01B0u SEO",
      subtitle: "Ph\u1ED5 bi\u1EBFn v\u1EDBi d\u1EF1 \xE1n",
      price: 2999,
      period: "m\u1ED7i d\u1EF1 \xE1n",
      items: [
        {
          description: "Cam k\u1EBFt traffic, th\u1EE9 h\u1EA1ng."
        },
        {
          description: "T\u1ED1i \u01B0u n\u1ED9i dung, t\u1ED1c \u0111\u1ED9 t\u1EA3i."
        },
        {
          description: "C\u1EADp nh\u1EADt nhanh nh\u1EA1y thu\u1EADt to\xE1n m\u1EDBi."
        },
        {
          description: "B\u1EA3o h\xE0nh t\u1ED1i thi\u1EC3u 6 th\xE1ng."
        }
      ],
      callToAction: {
        target: "_blank",
        text: "Thu\xEA t\u1ED1i \u01B0u",
        href: "https://instagram.com/nhavantuonglai"
      },
      hasRibbon: true,
      ribbonTitle: "d\xF9ng nhi\u1EC1u"
    },
    {
      title: "Thi\u1EBFt k\u1EBF website",
      subtitle: "Ph\u1ED5 bi\u1EBFn v\u1EDBi doanh nghi\u1EC7p",
      price: 4999,
      period: "m\u1ED7i s\u1EA3n ph\u1EA9m",
      items: [
        {
          description: "Th\xE2n thi\u1EC7n ng\u01B0\u1EDDi \u0111\u1ECDc, qu\u1EA3n l\xFD."
        },
        {
          description: "Giao di\u1EC7n hi\u1EC7n \u0111\u1EA1i, t\u1EA3i nhanh."
        },
        {
          description: "Kh\xF4ng t\u1ED1n ph\xED hosting."
        },
        {
          description: "Kh\xF4ng y\xEAu c\u1EA7u hi\u1EC3u bi\u1EBFt k\u1EF9 thu\u1EADt."
        }
      ],
      callToAction: {
        target: "_blank",
        text: "Thu\xEA thi\u1EBFt k\u1EBF",
        href: "https://instagram.com/nhavantuonglai"
      }
    }
  ] })}`;
}, "D:/OneCode/article-open/src/components/content/prices.astro", void 0);

export { $$Prices as $, $$Block as a };
