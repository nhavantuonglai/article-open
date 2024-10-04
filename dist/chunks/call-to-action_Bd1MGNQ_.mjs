import { d as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, a as renderComponent, e as renderSlot, F as Fragment, u as unescapeHTML } from './astro/server_BfxwJWhM.mjs';
import 'kleur/colors';
import { $ as $$Image } from './image_Bsu-3NOb.mjs';
import { f as findImage, a as $$Icon, b as $$Button } from './page-layout_7BvdpGlP.mjs';
import { a as getPermalink } from './permalinks_DgxcdhcO.mjs';
import 'clsx';
import { twMerge } from 'tailwind-merge';

const $$Astro$6 = createAstro("https://nhavantuonglai.com");
const $$GridItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$GridItem;
  const { post } = Astro2.props;
  const image = await findImage(post.image);
  const truncateDescription = (text, maxWords = 30) => {
    const words = text.match(/[^\s,]+/g) || [];
    const truncated = words.slice(0, maxWords).join(" ");
    return words.length > maxWords ? truncated + "\u2026" : truncated;
  };
  const truncateTitle = (description, maxLength = 60) => {
    if (description.length > maxLength) {
      return description.slice(0, maxLength) + "\u2026";
    }
    return description;
  };
  return renderTemplate`${maybeRenderHead()}<article class="mb-6 transition"> <div class="relative md:h-64 bg-gray-400 dark:bg-slate-700 rounded shadow-lg mb-6"> ${image && renderTemplate`<a${addAttribute(getPermalink(post.permalink, "post"), "href")} target="_blank"> ${renderComponent($$result, "Image", $$Image, { "src": image, "class": "w-full md:h-full rounded shadow-lg bg-gray-400 dark:bg-slate-700", "width": 600, "height": 407, "widths": [600, 407], "alt": post.title, "layout": "cover", "loading": "lazy", "decoding": "async" })} </a>`} </div> <h3 class="mb-6 text-xl font-bold leading-tight sm:text-2xl font-heading"> ${renderTemplate`<a${addAttribute(getPermalink(post.permalink, "post"), "href")} class="hover:text-primary dark:hover:text-secondary	transition ease-in duration-200" target="_blank"> ${truncateTitle(post.title)}</a>`} </h3> <p class="text-justify text-muted dark:text-slate-400 text-lg">${truncateDescription(post.description)}</p> </article>`;
}, "D:/Onecode/article-open/src/components/blog/grid-item.astro", void 0);

const $$Astro$5 = createAstro("https://nhavantuonglai.com");
const $$Grid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Grid;
  const { posts } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="grid mb-6 gap-6 row-gap-5 md:grid-cols-2 lg:grid-cols-4"> ${posts.map((post) => renderTemplate`${renderComponent($$result, "Item", $$GridItem, { "post": post })}`)} </div>`;
}, "D:/Onecode/article-open/src/components/blog/grid.astro", void 0);

const $$Astro$4 = createAstro("https://nhavantuonglai.com");
const $$Background = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Background;
  const { isDark = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["absolute inset-0", { "bg-dark dark:bg-transparent": isDark }], "class:list")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "D:/Onecode/article-open/src/components/ui/background.astro", void 0);

const $$Astro$3 = createAstro("https://nhavantuonglai.com");
const $$WidgetWrapper = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$WidgetWrapper;
  const { id, isDark = false, containerClass = "", bg, as = "section" } = Astro2.props;
  const WrapperTag = as;
  return renderTemplate`${renderComponent($$result, "WrapperTag", WrapperTag, { "class": "relative not-prose scroll-mt-[72px]", ...id ? { id } : {} }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="absolute inset-0 pointer-events-none -z-[1]" aria-hidden="true"> ${renderSlot($$result2, $$slots["bg"], renderTemplate` ${bg ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(bg)}` })}` : renderTemplate`${renderComponent($$result2, "Background", $$Background, { "isDark": isDark })}`} `)} </div> <div class="mb-6 md:mb-12 relative mx-auto max-w-7xl px-4 md:px-6 text-default"> ${renderSlot($$result2, $$slots["default"])} </div> ` })}`;
}, "D:/Onecode/article-open/src/components/ui/widget-wrapper.astro", void 0);

const $$Astro$2 = createAstro("https://nhavantuonglai.com");
const $$Headline = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Headline;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline,
    classes = {}
  } = Astro2.props;
  const {
    container: containerClass = "max-w-3xl",
    title: titleClass = "text-3xl md:text-4xl ",
    subtitle: subtitleClass = "text-xl text-justify"
  } = classes;
  return renderTemplate`${(title || subtitle || tagline) && renderTemplate`${maybeRenderHead()}<div class="mb-6 md:mx-auto text-center max-w-3xl" }>${tagline && renderTemplate`<p class="text-base text-secondary dark:text-blue-200 font-bold tracking-wide uppercase">${unescapeHTML(tagline)}</p>`}${title && renderTemplate`<h2 class="leading-tighter text-4xl md:text-5xl font-bold leading-tighter tracking-tighter mb-6 font-heading" , titleClass )}>${unescapeHTML(title)}</h2>`}${subtitle && renderTemplate`<p${addAttribute(twMerge("text-justify mt-4 text-muted", subtitleClass), "class")}>${unescapeHTML(subtitle)}</p>`}</div>`}`;
}, "D:/Onecode/article-open/src/components/ui/headline.astro", void 0);

const $$Astro$1 = createAstro("https://nhavantuonglai.com");
const $$ItemGrid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ItemGrid;
  const { items = [], columns, defaultIcon = "", classes = {} } = Astro2.props;
  const {
    container: containerClass = "",
    panel: panelClass = "",
    title: titleClass = "",
    description: descriptionClass = "",
    icon: defaultIconClass = "text-primary",
    action: actionClass = ""
  } = classes;
  return renderTemplate`${items && renderTemplate`${maybeRenderHead()}<div${addAttribute(twMerge(
    `grid mx-auto gap-8 md:gap-y-12 ${columns === 4 ? "lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2" : columns === 3 ? "lg:grid-cols-3 sm:grid-cols-2" : columns === 2 ? "sm:grid-cols-2 " : ""}`,
    containerClass
  ), "class")}>${items.map(({ title, description, icon, callToAction, classes: itemClasses = {} }) => renderTemplate`<div><div${addAttribute(twMerge("flex flex-row max-w-md text-justify", panelClass, itemClasses?.panel), "class")}><div class="flex justify-center">${(icon || defaultIcon) && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon || defaultIcon, "class": twMerge("w-7 h-7 mr-2 rtl:mr-0 rtl:ml-2", defaultIconClass, itemClasses?.icon) })}`}</div><div class="mt-0.5">${title && renderTemplate`<h4${addAttribute(twMerge("text-xl font-bold", titleClass, itemClasses?.title), "class")}>${title}</h4>`}${description && renderTemplate`<p${addAttribute(twMerge(`${title ? "mt-3" : ""} text-muted`, descriptionClass, itemClasses?.description), "class")}>${unescapeHTML(description)}</p>`}${callToAction && renderTemplate`<div${addAttribute(twMerge(`${title || description ? "mt-3" : ""}`, actionClass, itemClasses?.actionClass), "class")}>${renderComponent($$result, "Button", $$Button, { "variant": "link", ...callToAction })}</div>`}</div></div></div>`)}</div>`}`;
}, "D:/Onecode/article-open/src/components/ui/item-grid.astro", void 0);

const $$Astro = createAstro("https://nhavantuonglai.com");
const $$Services = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Services;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline,
    content = await Astro2.slots.render("content"),
    callToAction,
    items = [],
    columns,
    image = await Astro2.slots.render("image"),
    isReversed = false,
    isAfterContent = false,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-7xl mx-auto ${isAfterContent ? "pt-0 md:pt-0 lg:pt-0" : ""} ${classes?.container ?? ""}`, "bg": bg }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline, "classes": {
    container: "max-w-xl sm:mx-auto lg:max-w-2xl",
    title: "text-4xl md:text-5xl font-bold leading-tighter tracking-tighter mb-4 font-heading",
    subtitle: "max-w-3xl mx-auto sm:text-center text-xl text-muted dark:text-slate-400"
  } })} ${maybeRenderHead()}<div class="md:mx-auto text-center"> <div${addAttribute(`md:flex ${isReversed ? "md:flex-row-reverse" : ""} md:gap-16`, "class")}> <div class="md:basis-1/2 self-center"> ${content && renderTemplate`<div class="text-justify mb-6 text-lg dark:text-slate-400">${unescapeHTML(content)}</div>`} ${callToAction && renderTemplate`<div class="btn-primary w-auto mb-6"> ${renderComponent($$result2, "Button", $$Button, { "variant": "link", ...callToAction })} </div>`} ${renderComponent($$result2, "ItemGrid", $$ItemGrid, { "items": items, "columns": columns, "defaultIcon": "tabler:check", "classes": {
    container: `gap-y-4 md:gap-y-8`,
    panel: "max-w-none",
    title: "text-lg font-medium leading-6 dark:text-white ml-2 rtl:ml-0 rtl:mr-2",
    description: "text-muted dark:text-slate-400 ml-2 rtl:ml-0 rtl:mr-2",
    icon: "flex h-7 w-7 items-center justify-center rounded-full bg-primary dark:bg-primary text-gray-50 p-1",
    action: "text-lg font-medium leading-6 dark:text-white ml-2 rtl:ml-0 rtl:mr-2"
  } })} </div> <div aria-hidden="true" class="mt-10 md:mt-0 md:basis-1/2"> ${image && renderTemplate`<div class="relative m-auto max-w-4xl"> ${typeof image === "string" ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(image)}` })}` : renderTemplate`${renderComponent($$result2, "Image", $$Image, { "class": "mx-auto w-full rounded-lg bg-gray-500 shadow-lg", "width": 600, "height": 407, "widths": [400, 768], "sizes": "(max-width: 768px) 100vw, 432px", "layout": "responsive", ...image })}`} </div>`} </div> </div> </div> ` })}`;
}, "D:/Onecode/article-open/src/components/widgets/services.astro", void 0);

const $$CallToAction = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "CTA", $$Services, { "title": "Li\xEAn l\u1EA1c trao \u0111\u1ED5i", "callToAction": {
    text: "Nh\u1EAFn tin",
    href: "https://info.nhavantuonglai.com/instagram"
  }, "items": [
    {
      title: "T\u1EE9c th\u1EDDi",
      description: "B\u1EA1n c\xF3 th\u1EC3 g\u1EEDi v\xE0 nh\u1EADn tin nh\u1EAFn nhanh ch\xF3ng, tr\u1EF1c ti\u1EBFp, gi\xFAp nh\u1EEFng v\u1EA5n \u0111\u1EC1 c\xE1 nh\xE2n c\u1EE7a b\u1EA1n \u0111\u01B0\u1EE3c gi\u1EA3i quy\u1EBFt t\u1EE9c th\u1EDDi v\xE0 hi\u1EC7u qu\u1EA3 h\u01A1n.",
      icon: "tabler:bell-school"
    },
    {
      title: "Th\xE2n thi\u1EC7n",
      description: "V\xEC t\xEDnh ch\u1EA5t l\xE0 k\xEAnh li\xEAn l\u1EA1c nhanh, n\xEAn b\u1EA1n c\xF3 th\u1EC3 b\u1ECF qua nh\u1EEFng nghi th\u1EE9c giao ti\u1EBFp th\xF4ng th\u01B0\u1EDDng, ch\u1EC9 c\u1EA7n l\u1ECBch s\u1EF1 v\xE0 t\xF4n tr\u1ECDng th\xEC s\u1EBD nh\u1EADn \u0111\u01B0\u1EE3c s\u1EF1 ph\u1EA3n h\u1ED3i \u0111\u1EA7y th\xE2n thi\u1EC7n, tho\u1EA3i m\xE1i t\u1EEB t\xE1c gi\u1EA3.",
      icon: "tabler:brand-codecov"
    }
  ], "image": {
    src: "https://data.nhavantuonglai.com/image/illustrations/cover-nhavantuonglai-com-0480.jpg",
    alt: "nhan-tin-instagram"
  } }, { "content": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-4">Liên lạc thông qua Instagram</h3>
Thông qua Instagram, bạn có thể trao đổi trực tiếp và tức thời, cũng như cập nhật những thông tin mới nhất từ nhavantuonglai.
` })}` })} ${renderComponent($$result, "CTA", $$Services, { "isReversed": true, "callToAction": {
    text: "G\u1EEDi mail",
    href: "mailto:info@nhavantuonglai.com"
  }, "items": [
    {
      title: "Tin c\u1EADy",
      description: "Trong m\u1ED9t s\u1ED1 tr\u01B0\u1EDDng h\u1EE3p, email \u0111\u01B0\u1EE3c d\xF9ng nh\u01B0 m\u1ED9t t\xE0i li\u1EC7u ph\xE1p l\xFD, ch\xEDnh v\xEC v\u1EADy m\xE0 b\u1EA1n c\xF3 th\u1EC3 an t\xE2m v\xE0 tin c\u1EADy khi trao \u0111\u1ED5i v\u1EDBi t\xE1c gi\u1EA3 th\xF4ng qua email.",
      icon: "tabler:trees"
    },
    {
      title: "Chuy\xEAn nghi\u1EC7p",
      description: "C\u1EA5u tr\xFAc c\u1EE7a email \u0111\u1EB7t t\xEDnh chuy\xEAn nghi\u1EC7p l\xEAn h\xE0ng \u0111\u1EA7u, n\xEAn nh\u1EEFng th\xF4ng tin, n\u1ED9i dung \u0111\u01B0\u1EE3c vi\u1EBFt trong email t\u1EEB t\xE1c gi\u1EA3 s\u1EBD lu\xF4n \u0111\u1EA3m b\u1EA3o \u0111i\u1EC1u n\xE0y \u1EDF m\u1EE9c cao nh\u1EA5t.",
      icon: "tabler:award"
    }
  ], "image": {
    src: "https://data.nhavantuonglai.com/image/illustrations/cover-nhavantuonglai-com-0431.jpg",
    alt: "viet-mail"
  } }, { "content": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result3) => renderTemplate` <h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-4">Trao đổi trên email</h3>
Thông qua email cá nhân, bạn có thể trao đổi thỏa thuận hợp tác, kết nối chuyên sâu và mang tính chuyên nghiệp.
` })}` })}`;
}, "D:/Onecode/article-open/src/components/content/call-to-action.astro", void 0);

export { $$WidgetWrapper as $, $$Grid as a, $$Services as b, $$Headline as c, $$CallToAction as d };
