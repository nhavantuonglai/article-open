import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, u as unescapeHTML, d as renderSlot, F as Fragment, e as addAttribute } from '../chunks/astro/server_J9QqgmFZ.mjs';
import 'kleur/colors';
import { b as $$Button, a as $$Icon, $ as $$Page } from '../chunks/page_DQk_4Keq.mjs';
import { $ as $$Hero } from '../chunks/hero_DomAbGkL.mjs';
import { $ as $$Grid } from '../chunks/grid_BI_ep33F.mjs';
import { b as getBlogPermalink } from '../chunks/permalinks_CK5jjW5e.mjs';
import { d as findLatestPosts } from '../chunks/blog_ChQAVSFU.mjs';
import { c as $$Wrapper, g as $$Background, d as $$Headline, f as $$Image, e as $$ItemGrid, $ as $$Action, a as $$Soundcloud } from '../chunks/soundcloud_DahVq9O8.mjs';
import { $ as $$Services } from '../chunks/services_pr8yYGle.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$5 = createAstro("https://nhavantuonglai.com");
const $$Latest = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Latest;
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
  return renderTemplate`${renderTemplate`${renderComponent($$result, "Wrapper", $$Wrapper, { "id": id, "isDark": isDark, "containerClass": classes?.container, "bg": bg }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="flex flex-col lg:justify-between lg:flex-row mb-6">${title && renderTemplate`<div class="md:max-w-sm"><h2 class="text-4xl md:text-5xl font-bold leading-tighter tracking-tighter mb-6 font-heading">${unescapeHTML(title)}</h2></div>`}${information && renderTemplate`<p class="text-muted text-justify dark:text-slate-400 lg:text-sm lg:max-w-md">${unescapeHTML(information)}</p>`}</div>${renderComponent($$result2, "Grid", $$Grid, { "posts": posts })}${linkText && linkUrl && renderTemplate`<div class="flex flex-col lg:justify-between lg:flex-row mb-6">${renderComponent($$result2, "Button", $$Button, { "variant": "link", "href": linkUrl }, { "default": ($$result3) => renderTemplate`${linkText} »` })}</div>`}` })}`}`;
}, "D:/OneCode/article-open/src/components/article/latest.astro", void 0);

const $$Article = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Article", $$Latest, { "title": "B\xE0i vi\u1EBFt g\u1EA7n \u0111\xE2y", "information": `Bam g\u1ED3m 12 b\xE0i m\u1EDBi xu\u1EA5t b\u1EA3n g\u1EA7n \u0111\xE2y, ch\u1EE9a nhi\u1EC1u n\u1ED9i dung m\u1EDBi m\u1EBB v\xE0 h\u1EA5p d\u1EABn, th\xFA v\u1ECB \u0111\u1EE3i b\u1EA1n kh\xE1m ph\xE1.` })}`;
}, "D:/OneCode/article-open/src/components/content/article.astro", void 0);

const $$Astro$4 = createAstro("https://nhavantuonglai.com");
const $$WidgetWrapper = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$WidgetWrapper;
  const { id, isDark = false, containerClass = "", bg, as = "section" } = Astro2.props;
  const WrapperTag = as;
  return renderTemplate`${renderComponent($$result, "WrapperTag", WrapperTag, { "class": "relative not-prose scroll-mt-[72px]", ...id ? { id } : {} }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="absolute inset-0 pointer-events-none -z-[1]" aria-hidden="true"> ${renderSlot($$result2, $$slots["bg"], renderTemplate` ${bg ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(bg)}` })}` : renderTemplate`${renderComponent($$result2, "Background", $$Background, { "isDark": isDark })}`} `)} </div> <div class="mb-6 md:mb-12 relative mx-auto max-w-7xl px-4 md:px-6 text-default"> ${renderSlot($$result2, $$slots["default"])} </div> ` })}`;
}, "D:/OneCode/article-open/src/components/ui/widget-wrapper.astro", void 0);

const $$Astro$3 = createAstro("https://nhavantuonglai.com");
const $$Pricing = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
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
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-7xl mx-auto ${classes?.container ?? ""}`, "bg": bg }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline })} ${maybeRenderHead()}<div class="flex items-stretch justify-center"> <div class="grid grid-cols-3 gap-4 dark:text-white sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"> ${prices && prices.length > 0 && prices.map(({
    title: title2,
    subtitle: subtitle2,
    price,
    period,
    items,
    callToAction,
    hasRibbon = false,
    ribbonTitle
  }, index) => renderTemplate`<div${addAttribute(index, "key")} class="col-span-3 mx-auto flex w-full sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1"> ${price && period && renderTemplate`<div class="rounded-lg backdrop-blur border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900 shadow px-6 py-8 flex w-full max-w-sm flex-col justify-between text-center">  ${hasRibbon && ribbonTitle && renderTemplate`<div class="absolute right-[-5px] 2xl:right-[-8px] rtl:right-auto rtl:left-[-8px] rtl:2xl:left-[-10px] top-[-5px] 2xl:top-[-10px] z-[1] h-[100px] w-[100px] overflow-hidden text-right"> <span class="absolute top-[19px] right-[-21px] rtl:right-auto rtl:left-[-21px] block w-full rotate-45 rtl:-rotate-45 bg-green-700 text-center text-[10px] font-bold uppercase leading-5 text-white shadow-[0_3px_10px_-5px_rgba(0,0,0,0.3)] before:absolute before:left-0 before:top-full before:z-[-1] before:border-[3px] before:border-r-transparent before:border-b-transparent before:border-l-green-800 before:border-t-green-800 before:content-[''] after:absolute after:right-0 after:top-full after:z-[-1] after:border-[3px] after:border-l-transparent after:border-b-transparent after:border-r-green-800 after:border-t-green-800 after:content-['']"> ${ribbonTitle} </span> </div>`} <div class="px-2 py-0">  ${title2 && renderTemplate`<h3 class="text-center text-xl font-semibold uppercase leading-6 tracking-wider mb-2">${title2}</h3>`} ${subtitle2 && renderTemplate`<p class="font-light sm:text-lg text-gray-600 dark:text-slate-400">${subtitle2}</p>`}  <div class="my-8"> <div class="flex items-center justify-center text-center mb-1"> <span class="text-4xl font-extrabold">${price}</span> <span class="text-4xl">000 đ</span> </div> <span class="text-base leading-6 lowercase text-gray-600 dark:text-slate-400">${period}</span> </div>  ${items && items.length > 0 && renderTemplate`<ul role="list" class="my-8 md:my-10 space-y-2 text-left"> ${items.map(({ description, icon }, index2) => description && renderTemplate`<li${addAttribute(index2, "key")} class="mb-1.5 flex items-start space-x-3 leading-7"> <div class="rounded-full bg-primary mt-1"> ${renderComponent($$result2, "Icon", $$Icon, { "name": icon || "tabler:check", "class": "w-5 h-5 font-bold p-1 text-white" })} </div> <span>${description}</span> </li>`)} </ul>`} </div>  ${callToAction && renderTemplate`<div class="flex justify-center"> ${typeof callToAction === "string" ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(callToAction)}` })}` : callToAction?.href && renderTemplate`${renderComponent($$result2, "Button", $$Button, { ...hasRibbon ? { variant: "primary" } : {}, ...callToAction })}`} </div>`} </div>`} </div>`)} </div> </div> ` })}`;
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
        text: "Thu\xEA thi\u1EBFt k\u1EBF",
        href: "https://instagram.com/nhavantuonglai"
      }
    }
  ] })}`;
}, "D:/OneCode/article-open/src/components/content/prices.astro", void 0);

const $$Astro$2 = createAstro("https://nhavantuonglai.com");
const $$Brands$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Brands$1;
  const {
    title = "",
    subtitle = "",
    tagline = "",
    icons = [],
    images = [],
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-6xl mx-auto ${classes?.container ?? ""}`, "bg": bg }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline, "class": "leading-tighter text-4xl md:text-5xl font-bold leading-tighter tracking-tighter mb-4 font-heading" })} ${maybeRenderHead()}<div class="flex flex-wrap justify-center gap-x-6 sm:gap-x-12 lg:gap-x-24"> ${icons && icons.map((icon) => renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": icon, "class": "py-3 lg:py-5 w-12 h-auto mx-auto sm:mx-0 text-gray-500" })}`)} ${images && images.map(
    (image) => image.src && renderTemplate`<div class="flex justify-center col-span-1 my-2 lg:my-4 py-1 px-3 rounded-md dark:bg-gray-200"> <img title="nhavantuonglai"${addAttribute(image.src, "src")}${addAttribute(image.alt || "", "alt")} class="max-h-12"> </div>`
  )} </div> ` })}`;
}, "D:/OneCode/article-open/src/components/widgets/brands.astro", void 0);

const $$Brands = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Brands", $$Brands$1, { "title": "Tin t\u01B0\u1EDFng b\u1EDFi kh\xE1ch h\xE0ng c\u1EE7a", "images": [
    {
      src: "https://nhavantuonglai.com/image/clients/facebook.png",
      alt: "Facebook"
    },
    {
      src: "https://nhavantuonglai.com/image/clients/google.png",
      alt: "Google"
    },
    {
      src: "https://nhavantuonglai.com/image/clients/microsoft.png",
      alt: "Microsoft"
    },
    {
      src: "https://nhavantuonglai.com/image/clients/netflix.png",
      alt: "Netflix"
    },
    {
      src: "https://nhavantuonglai.com/image/clients/spotify.png",
      alt: "Spotify"
    },
    {
      src: "https://nhavantuonglai.com/image/clients/tiktok.png",
      alt: "Tiktok"
    },
    {
      src: "https://nhavantuonglai.com/image/clients/apple.png",
      alt: "Apple"
    }
  ] })}`;
}, "D:/OneCode/article-open/src/components/content/brands.astro", void 0);

const $$Astro$1 = createAstro("https://nhavantuonglai.com");
const $$Testimonials$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Testimonials$1;
  const {
    title = "",
    subtitle = "",
    tagline = "",
    testimonials = [],
    callToAction,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-6xl mx-auto ${classes?.container ?? ""}`, "bg": bg }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline })} ${maybeRenderHead()}<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"> ${testimonials && testimonials.length > 0 && testimonials.map(({ title: title2, testimonial, name, job, image }) => renderTemplate`<div class="flex h-auto"> <div class="text-justify flex flex-col p-4 md:p-6 rounded-md shadow-xl dark:shadow-none dark:border dark:border-slate-600"> ${title2 && renderTemplate`<h2 class="text-lg font-medium leading-6 pb-4">${title2}</h2>`} ${testimonial && renderTemplate`<blockquote class="flex-auto"> <p class="text-muted italic">${testimonial}</p> </blockquote>`} <hr class="border-slate-200 dark:border-slate-600 my-4"> <div class="flex items-center"> ${image && renderTemplate`<div class="h-10 w-10 rounded-full border border-slate-200 dark:border-slate-600"> ${typeof image === "string" ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(image)}` })}` : renderTemplate`${renderComponent($$result2, "Image", $$Image, { "class": "h-10 w-10 rounded-full border border-slate-200 dark:border-slate-600 min-w-full min-h-full", "width": 40, "height": 40, "widths": [400, 768], "layout": "fixed", ...image })}`} </div>`} <div${addAttribute(title2, "title")} class="grow ml-3 rtl:ml-0 rtl:mr-3"> ${name && renderTemplate`<p class="text-base font-semibold">${name}</p>`} ${job && renderTemplate`<p class="text-xs text-muted">${job}</p>`} </div> </div> </div> </div>`)} </div> ${callToAction && renderTemplate`<div class="flex justify-center mx-auto w-fit mt-8 md:mt-12 font-medium"> ${renderComponent($$result2, "Button", $$Button, { ...callToAction })} </div>`}` })}`;
}, "D:/OneCode/article-open/src/components/widgets/testimonials.astro", void 0);

const $$Testimonials = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Testimonials", $$Testimonials$1, { "title": "\u0110\xE1nh gi\xE1 t\u1EEB kh\xE1ch h\xE0ng", "testimonials": [
    {
      testimonial: "D\u1ECBch v\u1EE5 vi\u1EBFt b\xE0i SEO c\u1EE7a nhavantuonglai kh\xE1 ch\u1EA5t l\u01B0\u1EE3ng, gi\xFAp t\u0103ng l\u01B0\u1EE3ng truy c\u1EADp website c\u1EE7a t\xF4i t\u0103ng r\xF5 r\u1EC7t. C\u1EADu \u1EA5y c\u0169ng r\u1EA5t c\u1EA7u th\u1ECB khi lu\xF4n l\u1EAFng nghe v\xE0 \u0111i\u1EC1u ch\u1EC9nh theo y\xEAu c\u1EA7u c\u1EE7a kh\xE1ch h\xE0ng.",
      name: "Nguy\u1EC5n \u0110an Nguy\xEAn",
      job: "Marketing Manager t\u1EA1i Hygge Vietnam",
      image: {
        src: "https://nhavantuonglai.com/image/member/nguyen-dan-nguyen.jpg",
        alt: "nhavantuonglai-nguyen-dan-nguyen"
      }
    },
    {
      testimonial: "nhavantuonglai gi\xFAp t\xF4i t\u1ED1i \u01B0u SEO website hi\u1EC7u qu\u1EA3 v\u1EDBi chi ph\xED h\u1EE3p l\xFD. Th\u1EE9 h\u1EA1ng t\u1EEB kh\xF3a v\xE0 b\xE0i vi\u1EBFt \u0111\u01B0\u1EE3c c\u1EA3i thi\u1EC7n r\xF5 r\u1EC7t. D\u1ECBch v\u1EE5 c\u1EADu \u1EA5y cung c\u1EA5p r\u1EA5t thi\u1EBFt th\u1EF1c, \u0111\xE1p \u1EE9ng \u0111\xFAng v\xE0 \u0111\u1EE7 nhu c\u1EA7u c\u1EE7a t\xF4i.",
      name: "Tr\u1EA7n M\u1EF9 Anh",
      job: "Content Leader t\u1EA1i Drafticle",
      image: {
        src: "https://nhavantuonglai.com/image/member/tran-my-anh.jpg",
        alt: "nhavantuonglai-tran-my-anh"
      }
    },
    {
      testimonial: "Website c\u1EE7a t\xF4i \u0111\u01B0\u1EE3c nhavantuonglai thi\u1EBFt k\u1EBF l\u1EA1i tr\xF4ng \u0111\u1EB9p, d\u1EC5 s\u1EED d\u1EE5ng v\xE0 t\u1ED1i \u01B0u tr\u1EA3i nghi\u1EC7m. Chi ph\xED c\u0169ng h\u1EE3p l\xFD, ch\u1EA5t l\u01B0\u1EE3ng v\u01B0\u1EE3t tr\u1ED9i v\u1EDBi th\xE1i \u0111\u1ED9 chuy\xEAn nghi\u1EC7p, t\u1EADn t\xE2m v\xE0 lu\xF4n h\u1ED7 tr\u1EE3 t\xF4i trong su\u1ED1t qu\xE1 tr\xECnh tri\u1EC3n khai v\xE0 v\u1EADn h\xE0nh website.",
      name: "L\xEA M\u1EF9 Kim",
      job: "Website Analysis t\u1EA1i Rawfulness",
      image: {
        src: "https://nhavantuonglai.com/image/member/le-my-kim.jpg",
        alt: "nhavantuonglai-le-my-kim"
      }
    }
  ] })}`;
}, "D:/OneCode/article-open/src/components/content/testimonials.astro", void 0);

const $$Astro = createAstro("https://nhavantuonglai.com");
const $$Faq = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Faq;
  const {
    title = "",
    subtitle = "",
    tagline = "",
    items = [],
    columns = 2,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-7xl mx-auto ${classes?.container ?? ""}`, "bg": bg }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline })} ${renderComponent($$result2, "ItemGrid", $$ItemGrid, { "items": items, "columns": columns, "defaultIcon": "tabler:chevron-right", "classes": {
    container: `${columns === 1 ? "max-w-4xl" : ""} gap-y-8 md:gap-y-12`,
    panel: "max-w-none",
    icon: "flex-shrink-0 mt-1 w-6 h-6 text-primary"
  } })} ` })}`;
}, "D:/OneCode/article-open/src/components/widgets/faq.astro", void 0);

const $$Asked = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "FAQ", $$Faq, { "title": "10 v\u1EA1n c\xE2u h\u1ECFi t\xE0o lao", "items": [
    {
      title: "Vi\u1EBFt c\xF3 ph\u1EA3i l\xE0 qu\xE1 tr\xECnh t\u1EF1 h\u1ECDc kh\xF4ng?",
      description: "Cho d\xF9 b\u1EA1n vi\u1EBFt ti\u1EC3u thuy\u1EBFt, th\u01A1, k\u1ECBch hay k\u1ECBch b\u1EA3n, b\u1EA1n ho\xE0n to\xE0n c\xF3 th\u1EC3 t\u1EF1 d\u1EA1y m\xECnh c\xE1ch tr\u1EDF th\xE0nh m\u1ED9t nh\xE0 v\u0103n s\xE1ng t\u1EA1o. Letter Review tin r\u1EB1ng trong m\u1ED7i t\xE1c ph\u1EA9m ngh\u1EC7 thu\u1EADt tuy\u1EC7t v\u1EDDi l\xE0 t\u1EA5t c\u1EA3 c\xE1c quy t\u1EAFc v\xE0 b\xE0i h\u1ECDc b\u1EA1n c\u1EA7n \u0111\u1EC3 t\u1EA1o ra m\u1ED9t t\xE1c ph\u1EA9m ngh\u1EC7 thu\u1EADt tuy\u1EC7t v\u1EDDi.",
      icon: "tabler:chevrons-right"
    },
    {
      title: "C\xE1c nh\xE0 v\u0103n c\xF3 t\u1EF1 h\u1ECDc kh\xF4ng?",
      description: `H\u1EA7u h\u1EBFt c\xE1c nh\xE0 v\u0103n \u0111\u1EC1u t\u1EF1 h\u1ECDc. T\xF4i h\u1ECDc b\u1EB1ng c\xE1ch \u0111\u1ECDc nhi\u1EC1u, vi\u1EBFt nhi\u1EC1u, sau \u0111\xF3 ph\xEA b\xECnh b\xE0i vi\u1EBFt c\u1EE7a ng\u01B0\u1EDDi kh\xE1c. Cu\u1ED1i c\xF9ng, t\xF4i quy\u1EBFt \u0111\u1ECBnh \u0111\u1ECDc m\u1ED9t v\xE0i cu\u1ED1n s\xE1ch v\u1EC1 vi\u1EBFt l\xE1ch s\xE1ng t\u1EA1o.`,
      icon: "tabler:chevrons-right"
    },
    {
      title: "K\u1EF9 n\u0103ng vi\u1EBFt c\u01A1 b\u1EA3n l\xE0 g\xEC?",
      description: "K\u1EF9 n\u0103ng vi\u1EBFt c\u01A1 b\u1EA3n: Ch\xFAng bao g\u1ED3m ch\xEDnh t\u1EA3, vi\u1EBFt hoa, d\u1EA5u c\xE2u, ch\u1EEF vi\u1EBFt tay v\xE0 b\xE0n ph\xEDm, v\xE0 c\u1EA5u tr\xFAc c\xE2u (v\xED d\u1EE5: h\u1ECDc c\xE1ch lo\u1EA1i b\u1ECF c\xE1c \u0111o\u1EA1n ch\u1EA1y v\xE0 c\xE1c \u0111o\u1EA1n c\xE2u). K\u1EF9 n\u0103ng vi\u1EBFt c\u01A1 b\u1EA3n \u0111\xF4i khi \u0111\u01B0\u1EE3c g\u1ECDi l\xE0 c\u01A1 ch\u1EBF c\u1EE7a v\u0103n ch\u01B0\u01A1ng.",
      icon: "tabler:chevrons-right"
    },
    {
      title: "Nh\xE0 v\u0103n \u0111\u01B0\u1EE3c sinh ra hay \u0111\u01B0\u1EE3c \u0111\xE0o t\u1EA1o?",
      description: `Nh\xE0 v\u0103n gi\u1ECFi \u0111\u01B0\u1EE3c d\u1EA1y, kh\xF4ng ph\u1EA3i sinh ra. \u1EDE b\u1EA5t k\u1EF3 c\u1EA5p \u0111\u1ED9 n\xE0o, ng\u01B0\u1EDDi ta c\xF3 th\u1EC3 \u0111\u01B0\u1EE3c d\u1EA1y c\xE1c k\u1EF9 n\u0103ng \u0111\u1EC3 tr\u1EDF th\xE0nh m\u1ED9t nh\xE0 v\u0103n gi\u1ECFi v\xE0 c\u1EA3i thi\u1EC7n kh\u1EA3 n\u0103ng vi\u1EBFt c\u1EE7a h\u1ECD, duy tr\xEC ch\xFAng l\xE0 \u0111i\u1EC1u t\u1EA1o n\xEAn m\u1ED9t nh\xE0 v\u0103n gi\u1ECFi.`,
      icon: "tabler:chevrons-right"
    },
    {
      title: "Vi\u1EBFt l\xE1ch c\xF3 c\xF2n l\xE0 m\u1ED9t ngh\u1EC1 nghi\u1EC7p kh\xF4ng?",
      description: `Vi\u1EC7c l\xE0m c\u1EE7a c\xE1c nh\xE0 v\u0103n v\xE0 t\xE1c gi\u1EA3 \u0111\u01B0\u1EE3c d\u1EF1 \u0111o\xE1n s\u1EBD t\u0103ng 4% t\u1EEB n\u0103m 2022 \u0111\u1EBFn n\u0103m 2032, nhanh b\u1EB1ng m\u1EE9c trung b\xECnh cho t\u1EA5t c\u1EA3 c\xE1c ng\xE0nh ngh\u1EC1. Kho\u1EA3ng 15.500 c\u01A1 h\u1ED9i cho c\xE1c nh\xE0 v\u0103n v\xE0 t\xE1c gi\u1EA3 \u0111\u01B0\u1EE3c d\u1EF1 ki\u1EBFn m\u1ED7i n\u0103m, trung b\xECnh, trong th\u1EADp k\u1EF7 n\xE0y.`,
      icon: "tabler:chevrons-right"
    },
    {
      title: "5 ki\u1EC3u vi\u1EBFt l\xE0 g\xEC?",
      description: `N\u0103m lo\u1EA1i v\u0103n b\u1EA3n ch\xEDnh l\xE0 ph\u01A1i b\xE0y, thuy\u1EBFt ph\u1EE5c, t\u01B0\u1EDDng thu\u1EADt, m\xF4 t\u1EA3 v\xE0 s\xE1ng t\u1EA1o. M\u1ED7i ng\u01B0\u1EDDi ph\u1EE5c v\u1EE5 m\u1ED9t m\u1EE5c \u0111\xEDch kh\xE1c nhau v\xE0 s\u1EED d\u1EE5ng c\xE1c k\u1EF9 thu\u1EADt kh\xE1c nhau \u0111\u1EC3 th\u1EF1c hi\u1EC7n n\xF3.`,
      icon: "tabler:chevrons-right"
    },
    {
      title: "T\xF4i c\xF3 th\u1EC3 vi\u1EBFt m\xE0 kh\xF4ng c\xF3 kinh nghi\u1EC7m?",
      description: `B\u1EAFt \u0111\u1EA7u m\u1ED9t doanh nghi\u1EC7p vi\u1EBFt l\xE1ch t\u1EF1 do c\xF3 th\u1EC3 l\xE0 qu\xE1 s\u1EE9c, nh\u01B0ng n\xF3 kh\xF4ng ph\u1EA3i l\xE0 kh\xF4ng th\u1EC3. R\u1EA5t nhi\u1EC1u nh\xE0 v\u0103n t\u1EF1 do th\xE0nh c\xF4ng b\u1EAFt \u0111\u1EA7u m\xE0 kh\xF4ng c\xF3 kinh nghi\u1EC7m ho\u1EB7c tr\xECnh \u0111\u1ED9 h\u1ECDc v\u1EA5n \u2013 c\xF3 nh\u1EEFng c\u01A1 h\u1ED9i h\u1EE3p \u0111\u1ED3ng bi\u1EC3u di\u1EC5n b\u1EB1ng v\u0103n b\u1EA3n ch\u1EC9 ch\u1EDD b\u1EA1n \u0111\u0103ng k\xFD ch\xFAng. N\u1EBFu b\u1EA1n mu\u1ED1n b\u1EAFt \u0111\u1EA7u vi\u1EBFt, kh\xF4ng c\xF3 th\u1EDDi \u0111i\u1EC3m n\xE0o t\u1ED1t h\u01A1n ng\xE0y h\xF4m nay.`,
      icon: "tabler:chevrons-right"
    },
    {
      title: "T\xF4i c\xF3 th\u1EC3 g\xF5 1.000 t\u1EEB trong m\u1ED9t gi\u1EDD kh\xF4ng?",
      description: `Vi\u1EBFt 1.000 t\u1EEB s\u1EBD m\u1EA5t kho\u1EA3ng 25 ph\xFAt \u0111\u1ED1i v\u1EDBi ng\u01B0\u1EDDi vi\u1EBFt trung b\xECnh g\xF5 tr\xEAn b\xE0n ph\xEDm v\xE0 50 ph\xFAt \u0111\u1ED1i v\u1EDBi ch\u1EEF vi\u1EBFt tay. Tuy nhi\xEAn, n\u1EBFu n\u1ED9i dung c\u1EA7n bao g\u1ED3m nghi\xEAn c\u1EE9u chuy\xEAn s\xE2u, li\xEAn k\u1EBFt, tr\xEDch d\u1EABn ho\u1EB7c \u0111\u1ED3 h\u1ECDa nh\u01B0 cho m\u1ED9t b\xE0i vi\u1EBFt tr\xEAn blog ho\u1EB7c b\xE0i lu\u1EADn trung h\u1ECDc, \u0111\u1ED9 d\xE0i c\xF3 th\u1EC3 t\u0103ng l\xEAn 3,3 gi\u1EDD.`,
      icon: "tabler:chevrons-right"
    },
    {
      title: "L\xE0m th\u1EBF n\xE0o \u0111\u1EC3 b\u1EAFt \u0111\u1EA7u s\u1EF1 nghi\u1EC7p vi\u1EBFt l\xE1ch chuy\xEAn nghi\u1EC7p?",
      description: `\u0110\u1EC3 b\u1EAFt \u0111\u1EA7u, h\xE3y vi\u1EBFt h\xE0ng ng\xE0y \u0111\u1EC3 r\xE8n luy\u1EC7n k\u1EF9 n\u0103ng, \u0111\u1ECDc s\xE1ch v\xE0 t\xE0i li\u1EC7u li\xEAn quan, v\xE0 tham gia c\xE1c kh\xF3a h\u1ECDc vi\u1EBFt. t\u1EA1o blog c\xE1 nh\xE2n \u0111\u1EC3 chia s\u1EBB b\xE0i vi\u1EBFt v\xE0 t\xECm ki\u1EBFm c\u01A1 h\u1ED9i l\xE0m vi\u1EC7c t\u1EF1 do.`,
      icon: "tabler:chevrons-right"
    },
    {
      title: "L\xE0m sao \u0111\u1EC3 t\xECm c\u1EA3m h\u1EE9ng vi\u1EBFt l\xE1ch?",
      description: `\u0110\u1ECDc s\xE1ch, nghe nh\u1EA1c, xem phim, ho\u1EB7c \u0111i d\u1EA1o \u0111\u1EC3 t\xECm c\u1EA3m h\u1EE9ng. gi\u1EEF m\u1ED9t cu\u1ED1n s\u1ED5 ghi ch\xE9p \xFD t\u01B0\u1EDFng v\xE0 tham gia c\xE1c bu\u1ED5i h\u1ED9i th\u1EA3o, nh\xF3m vi\u1EBFt \u0111\u1EC3 trao \u0111\u1ED5i v\xE0 t\xECm c\u1EA3m h\u1EE9ng t\u1EEB ng\u01B0\u1EDDi kh\xE1c.`,
      icon: "tabler:chevrons-right"
    },
    {
      title: "L\xE0m th\u1EBF n\xE0o \u0111\u1EC3 c\u1EA3i thi\u1EC7n k\u1EF9 n\u0103ng vi\u1EBFt?",
      description: `Vi\u1EBFt m\u1ED7i ng\xE0y, \u0111\u1ECDc nhi\u1EC1u th\u1EC3 lo\u1EA1i s\xE1ch kh\xE1c nhau, v\xE0 nh\u1EADn ph\u1EA3n h\u1ED3i t\u1EEB ng\u01B0\u1EDDi \u0111\u1ECDc. Tham gia c\xE1c kh\xF3a h\u1ECDc vi\u1EBFt v\xE0 vi\u1EBFt cho c\xE1c t\u1EA1p ch\xED, blog \u0111\u1EC3 t\xEDch l\u0169y kinh nghi\u1EC7m.`,
      icon: "tabler:chevrons-right"
    },
    {
      title: "L\xE0m sao \u0111\u1EC3 vi\u1EBFt b\xE0i vi\u1EBFt c\xF3 s\u1EE9c h\xFAt?",
      description: `B\u1EAFt \u0111\u1EA7u v\u1EDBi m\u1ED9t c\xE2u m\u1EDF \u0111\u1EA7u h\u1EA5p d\u1EABn, s\u1EED d\u1EE5ng ng\xF4n t\u1EEB r\xF5 r\xE0ng, m\u1EA1ch l\u1EA1c, v\xE0 k\u1EC3 chuy\u1EC7n sinh \u0111\u1ED9ng. Ch\xFA \xFD \u0111\u1EBFn c\u1EA5u tr\xFAc b\xE0i vi\u1EBFt v\xE0 lu\xF4n ch\u1EC9nh s\u1EEDa c\u1EA9n th\u1EADn.`,
      icon: "tabler:chevrons-right"
    },
    {
      title: "L\xE0m th\u1EBF n\xE0o \u0111\u1EC3 x\xE2y d\u1EF1ng phong c\xE1ch vi\u1EBFt ri\xEAng?",
      description: `Vi\u1EBFt th\u01B0\u1EDDng xuy\xEAn \u0111\u1EC3 t\xECm ra gi\u1ECDng v\u0103n t\u1EF1 nhi\xEAn c\u1EE7a m\xECnh, \u0111\u1ECDc nhi\u1EC1u \u0111\u1EC3 hi\u1EC3u c\xE1c phong c\xE1ch kh\xE1c nhau, v\xE0 th\u1EED nghi\u1EC7m v\u1EDBi c\xE1c th\u1EC3 lo\u1EA1i kh\xE1c nhau \u0111\u1EC3 t\xECm ra phong c\xE1ch ph\xF9 h\u1EE3p nh\u1EA5t.`,
      icon: "tabler:chevrons-right"
    },
    {
      title: "L\xE0m sao \u0111\u1EC3 \u0111\u1ED1i ph\xF3 v\u1EDBi vi\u1EC7c b\u1ECB t\u1EEB ch\u1ED1i b\xE0i vi\u1EBFt?",
      description: `Xem l\u1EA1i ph\u1EA3n h\u1ED3i, c\u1EA3i thi\u1EC7n b\xE0i vi\u1EBFt, v\xE0 kh\xF4ng n\u1EA3n l\xF2ng. m\u1ED7i l\u1EA7n t\u1EEB ch\u1ED1i l\xE0 c\u01A1 h\u1ED9i \u0111\u1EC3 h\u1ECDc h\u1ECFi v\xE0 ho\xE0n thi\u1EC7n k\u1EF9 n\u0103ng. Ti\u1EBFp t\u1EE5c g\u1EEDi b\xE0i vi\u1EBFt t\u1EDBi c\xE1c t\u1EA1p ch\xED kh\xE1c.`,
      icon: "tabler:chevrons-right"
    },
    {
      title: "L\xE0m th\u1EBF n\xE0o \u0111\u1EC3 t\xECm th\u1ECB tr\u01B0\u1EDDng cho b\xE0i vi\u1EBFt c\u1EE7a m\xECnh?",
      description: `Nghi\xEAn c\u1EE9u c\xE1c t\u1EA1p ch\xED, blog, v\xE0 website ch\u1EA5p nh\u1EADn b\xE0i vi\u1EBFt t\u1EF1 do. Tham gia c\xE1c nh\xF3m vi\u1EBFt l\xE1ch tr\u1EF1c tuy\u1EBFn \u0111\u1EC3 t\xECm hi\u1EC3u v\u1EC1 c\xE1c c\u01A1 h\u1ED9i c\xF4ng vi\u1EC7c v\xE0 k\u1EBFt n\u1ED1i v\u1EDBi bi\xEAn t\u1EADp vi\xEAn.`,
      icon: "tabler:chevrons-right"
    },
    {
      title: "L\xE0m sao \u0111\u1EC3 \u0111\u1EA3m b\u1EA3o b\xE0i vi\u1EBFt kh\xF4ng b\u1ECB \u0111\u1EA1o v\u0103n?",
      description: `Lu\xF4n tr\xEDch d\u1EABn ngu\u1ED3n t\xE0i li\u1EC7u s\u1EED d\u1EE5ng v\xE0 s\u1EED d\u1EE5ng c\xF4ng c\u1EE5 ki\u1EC3m tra \u0111\u1EA1o v\u0103n. Vi\u1EBFt b\xE0i t\u1EEB ch\xEDnh \xFD t\u01B0\u1EDFng v\xE0 ng\xF4n t\u1EEB c\u1EE7a m\xECnh \u0111\u1EC3 tr\xE1nh sao ch\xE9p.`,
      icon: "tabler:chevrons-right"
    },
    {
      title: "L\xE0m th\u1EBF n\xE0o \u0111\u1EC3 vi\u1EBFt b\xE0i lu\u1EADn chuy\xEAn nghi\u1EC7p?",
      description: `B\u1EAFt \u0111\u1EA7u v\u1EDBi m\u1ED9t lu\u1EADn \u0111i\u1EC3m r\xF5 r\xE0ng, l\u1EADp d\xE0n \xFD, v\xE0 ph\xE1t tri\u1EC3n t\u1EEBng ph\u1EA7n v\u1EDBi d\u1EABn ch\u1EE9ng c\u1EE5 th\u1EC3. K\u1EBFt th\xFAc b\u1EB1ng m\u1ED9t k\u1EBFt lu\u1EADn t\xF3m t\u1EAFt l\u1EA1i quan \u0111i\u1EC3m v\xE0 \xFD ch\xEDnh.`,
      icon: "tabler:chevrons-right"
    },
    {
      title: "L\xE0m sao \u0111\u1EC3 vi\u1EBFt s\xE1ch v\xE0 xu\u1EA5t b\u1EA3n?",
      description: `Vi\u1EBFt b\u1EA3n th\u1EA3o ho\xE0n ch\u1EC9nh, t\xECm ki\u1EBFm bi\xEAn t\u1EADp vi\xEAn \u0111\u1EC3 ch\u1EC9nh s\u1EEDa, v\xE0 g\u1EEDi b\u1EA3n th\u1EA3o t\u1EDBi c\xE1c nh\xE0 xu\u1EA5t b\u1EA3n ho\u1EB7c t\u1EF1 xu\u1EA5t b\u1EA3n th\xF4ng qua c\xE1c n\u1EC1n t\u1EA3ng tr\u1EF1c tuy\u1EBFn.`,
      icon: "tabler:chevrons-right"
    },
    {
      title: "L\xE0m th\u1EBF n\xE0o \u0111\u1EC3 gi\u1EEF \u0111\u1ED9ng l\u1EF1c vi\u1EBFt l\xE1ch?",
      description: `\u0110\u1EB7t m\u1EE5c ti\xEAu c\u1EE5 th\u1EC3, gi\u1EEF th\xF3i quen vi\u1EBFt h\xE0ng ng\xE0y, v\xE0 tham gia c\u1ED9ng \u0111\u1ED3ng vi\u1EBFt l\xE1ch \u0111\u1EC3 nh\u1EADn \u0111\u1ED9ng vi\xEAn v\xE0 chia s\u1EBB kinh nghi\u1EC7m. \u0110\u1ECDc s\xE1ch truy\u1EC1n c\u1EA3m h\u1EE9ng \u0111\u1EC3 duy tr\xEC \u0111\u1ED9ng l\u1EF1c.`,
      icon: "tabler:chevrons-right"
    },
    {
      title: "L\xE0m sao \u0111\u1EC3 vi\u1EBFt blog h\u1EA5p d\u1EABn?",
      description: `Ch\u1ECDn ch\u1EE7 \u0111\u1EC1 m\xE0 b\u1EA1n \u0111am m\xEA, vi\u1EBFt b\u1EB1ng gi\u1ECDng v\u0103n th\xE2n thi\u1EC7n v\xE0 d\u1EC5 hi\u1EC3u, v\xE0 s\u1EED d\u1EE5ng h\xECnh \u1EA3nh minh h\u1ECDa \u0111\u1EC3 t\u0103ng t\xEDnh h\u1EA5p d\u1EABn. C\u1EADp nh\u1EADt blog th\u01B0\u1EDDng xuy\xEAn \u0111\u1EC3 gi\u1EEF ch\xE2n ng\u01B0\u1EDDi \u0111\u1ECDc.`,
      icon: "tabler:chevrons-right"
    },
    {
      title: "L\xE0m th\u1EBF n\xE0o \u0111\u1EC3 vi\u1EBFt ti\u1EC3u thuy\u1EBFt?",
      description: `B\u1EAFt \u0111\u1EA7u v\u1EDBi \xFD t\u01B0\u1EDFng c\u1ED1t truy\u1EC7n, x\xE2y d\u1EF1ng nh\xE2n v\u1EADt, v\xE0 l\u1EADp k\u1EBF ho\u1EA1ch chi ti\u1EBFt cho t\u1EEBng ch\u01B0\u01A1ng. Vi\u1EBFt h\xE0ng ng\xE0y v\xE0 ch\u1EC9nh s\u1EEDa b\u1EA3n th\u1EA3o nhi\u1EC1u l\u1EA7n tr\u01B0\u1EDBc khi ho\xE0n thi\u1EC7n.`,
      icon: "tabler:chevrons-right"
    },
    {
      title: "L\xE0m sao \u0111\u1EC3 vi\u1EBFt b\xE0i ph\u1ECFng v\u1EA5n hi\u1EC7u qu\u1EA3?",
      description: `Chu\u1EA9n b\u1ECB c\xE2u h\u1ECFi c\u1EE5 th\u1EC3, t\xECm hi\u1EC3u k\u1EF9 v\u1EC1 ng\u01B0\u1EDDi \u0111\u01B0\u1EE3c ph\u1ECFng v\u1EA5n, v\xE0 ghi ch\xE9p chi ti\u1EBFt. Sau khi ph\u1ECFng v\u1EA5n, ch\u1EC9nh s\u1EEDa b\xE0i vi\u1EBFt \u0111\u1EC3 \u0111\u1EA3m b\u1EA3o th\xF4ng tin ch\xEDnh x\xE1c v\xE0 h\u1EA5p d\u1EABn.`,
      icon: "tabler:chevrons-right"
    },
    {
      title: "L\xE0m th\u1EBF n\xE0o \u0111\u1EC3 vi\u1EBFt k\u1ECBch b\u1EA3n phim?",
      description: `H\u1ECDc v\u1EC1 c\u1EA5u tr\xFAc k\u1ECBch b\u1EA3n, t\u1EA1o nh\xE2n v\u1EADt v\xE0 c\u1ED1t truy\u1EC7n h\u1EA5p d\u1EABn, v\xE0 vi\u1EBFt theo \u0111\u1ECBnh d\u1EA1ng k\u1ECBch b\u1EA3n chuy\xEAn nghi\u1EC7p. Tham gia c\xE1c kh\xF3a h\u1ECDc vi\u1EBFt k\u1ECBch b\u1EA3n \u0111\u1EC3 n\u1EAFm v\u1EEFng k\u1EF9 n\u0103ng.`,
      icon: "tabler:chevrons-right"
    },
    {
      title: "L\xE0m sao \u0111\u1EC3 vi\u1EBFt b\xE0i b\xE1o khoa h\u1ECDc?",
      description: `Nghi\xEAn c\u1EE9u k\u1EF9 l\u01B0\u1EE1ng, tu\xE2n th\u1EE7 c\u1EA5u tr\xFAc b\xE0i b\xE1o khoa h\u1ECDc, v\xE0 tr\xEDch d\u1EABn ngu\u1ED3n t\xE0i li\u1EC7u ch\xEDnh x\xE1c. Vi\u1EBFt r\xF5 r\xE0ng, m\u1EA1ch l\u1EA1c v\xE0 ch\u1EC9nh s\u1EEDa k\u1EF9 l\u01B0\u1EE1ng tr\u01B0\u1EDBc khi g\u1EEDi \u0111\u0103ng.`,
      icon: "tabler:chevrons-right"
    },
    {
      title: "L\xE0m th\u1EBF n\xE0o \u0111\u1EC3 vi\u1EBFt t\u1EF1 truy\u1EC7n?",
      description: `X\xE1c \u0111\u1ECBnh m\u1EE5c ti\xEAu vi\u1EBFt, l\u1EADp d\xE0n \xFD cho c\xE1c giai \u0111o\u1EA1n quan tr\u1ECDng c\u1EE7a cu\u1ED9c \u0111\u1EDDi, v\xE0 vi\u1EBFt ch\xE2n th\u1EF1c, c\u1EA3m x\xFAc. Ch\u1EC9nh s\u1EEDa v\xE0 t\xECm ki\u1EBFm ph\u1EA3n h\u1ED3i t\u1EEB ng\u01B0\u1EDDi \u0111\u1ECDc.`,
      icon: "tabler:chevrons-right"
    },
    {
      title: "L\xE0m sao \u0111\u1EC3 vi\u1EBFt b\xE0i PR hi\u1EC7u qu\u1EA3?",
      description: `Hi\u1EC3u r\xF5 s\u1EA3n ph\u1EA9m ho\u1EB7c d\u1ECBch v\u1EE5, vi\u1EBFt ti\xEAu \u0111\u1EC1 thu h\xFAt, v\xE0 s\u1EED d\u1EE5ng ng\xF4n ng\u1EEF \u0111\u01A1n gi\u1EA3n, d\u1EC5 hi\u1EC3u. Ch\xFA \xFD \u0111\u1EBFn th\xF4ng \u0111i\u1EC7p ch\xEDnh v\xE0 k\u1EBFt h\u1EE3p h\xECnh \u1EA3nh \u0111\u1EC3 t\u0103ng hi\u1EC7u qu\u1EA3.`,
      icon: "tabler:chevrons-right"
    },
    {
      title: "L\xE0m th\u1EBF n\xE0o \u0111\u1EC3 vi\u1EBFt content social hi\u1EC7u qu\u1EA3?",
      description: `Vi\u1EBFt ng\u1EAFn g\u1ECDn, s\xFAc t\xEDch, v\xE0 t\u1EA1o ra n\u1ED9i dung h\u1EA5p d\u1EABn, g\xE2y ch\xFA \xFD. S\u1EED d\u1EE5ng h\xECnh \u1EA3nh, video \u0111\u1EC3 t\u0103ng t\u01B0\u01A1ng t\xE1c v\xE0 th\u01B0\u1EDDng xuy\xEAn c\u1EADp nh\u1EADt \u0111\u1EC3 duy tr\xEC s\u1EF1 quan t\xE2m.`,
      icon: "tabler:chevrons-right"
    },
    {
      title: "L\xE0m sao \u0111\u1EC3 vi\u1EBFt email chuy\xEAn nghi\u1EC7p?",
      description: `B\u1EAFt \u0111\u1EA7u v\u1EDBi l\u1EDDi ch\xE0o l\u1ECBch s\u1EF1, tr\xECnh b\xE0y n\u1ED9i dung r\xF5 r\xE0ng, m\u1EA1ch l\u1EA1c, v\xE0 k\u1EBFt th\xFAc b\u1EB1ng l\u1EDDi c\u1EA3m \u01A1n ho\u1EB7c k\xEAu g\u1ECDi h\xE0nh \u0111\u1ED9ng. Ki\u1EC3m tra k\u1EF9 l\u1ED7i ch\xEDnh t\u1EA3 v\xE0 ng\u1EEF ph\xE1p.`,
      icon: "tabler:chevrons-right"
    },
    {
      title: "L\xE0m th\u1EBF n\xE0o \u0111\u1EC3 vi\u1EBFt b\xE0i gi\u1EDBi thi\u1EC7u s\u1EA3n ph\u1EA9m?",
      description: `N\xEAu r\xF5 l\u1EE3i \xEDch v\xE0 t\xEDnh n\u0103ng c\u1EE7a s\u1EA3n ph\u1EA9m, s\u1EED d\u1EE5ng ng\xF4n ng\u1EEF \u0111\u01A1n gi\u1EA3n, d\u1EC5 hi\u1EC3u, v\xE0 k\u1EBFt h\u1EE3p h\xECnh \u1EA3nh minh h\u1ECDa. T\u1EADp trung v\xE0o nhu c\u1EA7u v\xE0 mong mu\u1ED1n c\u1EE7a kh\xE1ch h\xE0ng.`,
      icon: "tabler:chevrons-right"
    },
    {
      title: "L\xE0m sao \u0111\u1EC3 vi\u1EBFt b\xE0i ph\xEA b\xECnh s\xE1ch?",
      description: `\u0110\u1ECDc k\u1EF9 s\xE1ch, ghi ch\xFA l\u1EA1i c\xE1c \u0111i\u1EC3m ch\xEDnh, v\xE0 vi\u1EBFt nh\u1EADn x\xE9t kh\xE1ch quan. N\xEAu r\xF5 \u0111i\u1EC3m m\u1EA1nh, \u0111i\u1EC3m y\u1EBFu v\xE0 so s\xE1nh v\u1EDBi c\xE1c t\xE1c ph\u1EA9m kh\xE1c trong c\xF9ng th\u1EC3 lo\u1EA1i.`,
      icon: "tabler:chevrons-right"
    },
    {
      title: "L\xE0m th\u1EBF n\xE0o \u0111\u1EC3 vi\u1EBFt truy\u1EC7n ng\u1EAFn?",
      description: `B\u1EAFt \u0111\u1EA7u v\u1EDBi \xFD t\u01B0\u1EDFng \u0111\u01A1n gi\u1EA3n, t\u1EA1o nh\xE2n v\u1EADt v\xE0 t\xECnh hu\u1ED1ng h\u1EA5p d\u1EABn, v\xE0 vi\u1EBFt m\u1ED9t c\u1ED1t truy\u1EC7n ng\u1EAFn g\u1ECDn, s\xFAc t\xEDch. Ch\xFA \xFD \u0111\u1EBFn chi ti\u1EBFt v\xE0 c\u1EA3m x\xFAc \u0111\u1EC3 thu h\xFAt ng\u01B0\u1EDDi \u0111\u1ECDc.`,
      icon: "tabler:chevrons-right"
    },
    {
      title: "L\xE0m sao \u0111\u1EC3 vi\u1EBFt b\xE0i ti\u1EC3u lu\u1EADn \u1EE9ng tuy\u1EC3n h\u1ECDc b\u1ED5ng?",
      description: `N\xEAu r\xF5 m\u1EE5c ti\xEAu, kinh nghi\u1EC7m, v\xE0 th\xE0nh t\u1EF1u c\xE1 nh\xE2n, tr\xECnh b\xE0y l\xFD do t\u1EA1i sao b\u1EA1n x\u1EE9ng \u0111\xE1ng v\u1EDBi h\u1ECDc b\u1ED5ng. Vi\u1EBFt ch\xE2n th\u1EF1c, c\u1EA3m x\xFAc v\xE0 ki\u1EC3m tra l\u1ED7i tr\u01B0\u1EDBc khi g\u1EEDi.`,
      icon: "tabler:chevrons-right"
    },
    {
      title: "L\xE0m th\u1EBF n\xE0o \u0111\u1EC3 vi\u1EBFt b\xE0i thuy\u1EBFt tr\xECnh?",
      description: `X\xE1c \u0111\u1ECBnh ch\u1EE7 \u0111\u1EC1 ch\xEDnh, l\u1EADp d\xE0n \xFD chi ti\u1EBFt, v\xE0 vi\u1EBFt n\u1ED9i dung r\xF5 r\xE0ng, m\u1EA1ch l\u1EA1c. S\u1EED d\u1EE5ng h\xECnh \u1EA3nh v\xE0 bi\u1EC3u \u0111\u1ED3 minh h\u1ECDa \u0111\u1EC3 t\u0103ng t\xEDnh thuy\u1EBFt ph\u1EE5c v\xE0 h\u1EA5p d\u1EABn.`,
      icon: "tabler:chevrons-right"
    },
    {
      title: "L\xE0m sao \u0111\u1EC3 vi\u1EBFt b\xE0i vi\u1EBFt qu\u1EA3ng c\xE1o?",
      description: `N\u1EAFm r\xF5 s\u1EA3n ph\u1EA9m ho\u1EB7c d\u1ECBch v\u1EE5, vi\u1EBFt ti\xEAu \u0111\u1EC1 thu h\xFAt, v\xE0 s\u1EED d\u1EE5ng ng\xF4n ng\u1EEF l\xF4i cu\u1ED1n, k\xEDch th\xEDch h\xE0nh \u0111\u1ED9ng. Ch\xFA \xFD \u0111\u1EBFn th\xF4ng \u0111i\u1EC7p ch\xEDnh v\xE0 k\u1EBFt h\u1EE3p h\xECnh \u1EA3nh.`,
      icon: "tabler:chevrons-right"
    },
    {
      title: "L\xE0m th\u1EBF n\xE0o \u0111\u1EC3 vi\u1EBFt ti\u1EC3u thuy\u1EBFt d\xE0i?",
      description: `l\u1EADp k\u1EBF ho\u1EA1ch chi ti\u1EBFt cho c\u1ED1t truy\u1EC7n, chia th\xE0nh c\xE1c ch\u01B0\u01A1ng, v\xE0 vi\u1EBFt m\u1ED7i ng\xE0y. Ch\u1EC9nh s\u1EEDa b\u1EA3n th\u1EA3o nhi\u1EC1u l\u1EA7n v\xE0 t\xECm ph\u1EA3n h\u1ED3i t\u1EEB ng\u01B0\u1EDDi \u0111\u1ECDc v\xE0 bi\xEAn t\u1EADp vi\xEAn.`,
      icon: "tabler:chevrons-right"
    },
    {
      title: "L\xE0m sao \u0111\u1EC3 vi\u1EBFt b\xE0i \u0111\xE1nh gi\xE1 phim?",
      description: `Xem phim k\u1EF9 l\u01B0\u1EE1ng, ghi ch\xFA c\xE1c \u0111i\u1EC3m quan tr\u1ECDng, v\xE0 vi\u1EBFt nh\u1EADn x\xE9t kh\xE1ch quan. N\xEAu r\xF5 \u0111i\u1EC3m m\u1EA1nh, \u0111i\u1EC3m y\u1EBFu c\u1EE7a phim v\xE0 so s\xE1nh v\u1EDBi c\xE1c t\xE1c ph\u1EA9m c\xF9ng th\u1EC3 lo\u1EA1i.`,
      icon: "tabler:chevrons-right"
    },
    {
      title: "L\xE0m th\u1EBF n\xE0o \u0111\u1EC3 vi\u1EBFt b\xE0i vi\u1EBFt chuy\xEAn s\xE2u?",
      description: `Nghi\xEAn c\u1EE9u k\u1EF9 l\u01B0\u1EE1ng, l\u1EADp d\xE0n \xFD chi ti\u1EBFt, v\xE0 vi\u1EBFt r\xF5 r\xE0ng, m\u1EA1ch l\u1EA1c. S\u1EED d\u1EE5ng ngu\u1ED3n t\xE0i li\u1EC7u ch\xEDnh x\xE1c v\xE0 tr\xEDch d\u1EABn \u0111\xFAng quy \u0111\u1ECBnh \u0111\u1EC3 t\u0103ng t\xEDnh thuy\u1EBFt ph\u1EE5c.`,
      icon: "tabler:chevrons-right"
    },
    {
      title: "L\xE0m sao \u0111\u1EC3 vi\u1EBFt b\xE0i vi\u1EBFt v\u1EC1 du l\u1ECBch?",
      description: `Chia s\u1EBB kinh nghi\u1EC7m th\u1EF1c t\u1EBF, s\u1EED d\u1EE5ng ng\xF4n ng\u1EEF sinh \u0111\u1ED9ng, v\xE0 k\xE8m theo h\xECnh \u1EA3nh minh h\u1ECDa. N\xEAu r\xF5 \u0111i\u1EC3m \u0111\u1EBFn, ho\u1EA1t \u0111\u1ED9ng th\xFA v\u1ECB v\xE0 c\xE1c m\u1EB9o h\u1EEFu \xEDch cho ng\u01B0\u1EDDi \u0111\u1ECDc.`,
      icon: "tabler:chevrons-right"
    }
  ] })}`;
}, "D:/OneCode/article-open/src/components/content/asked.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "V\u0103n hay trong hi\u1EC7n t\u1EA1i, ch\u1EEF t\u1ED1t \u1EDF t\u01B0\u01A1ng lai | nhavantuonglai",
    ignoreTitleTemplate: true
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Page, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Article", $$Article, {})} ${renderComponent($$result2, "Services", $$Services, {})} ${renderComponent($$result2, "Prices", $$Prices, {})} ${renderComponent($$result2, "Brands", $$Brands, {})} ${renderComponent($$result2, "Testimonials", $$Testimonials, {})} ${renderComponent($$result2, "Aks", $$Asked, {})} ${renderComponent($$result2, "Action", $$Action, {})} ${renderComponent($$result2, "Soundcloud", $$Soundcloud, {})} ` })}`;
}, "D:/OneCode/article-open/src/pages/index.astro", void 0);

const $$file = "D:/OneCode/article-open/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
