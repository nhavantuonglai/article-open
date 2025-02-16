import { b as createAstro, c as createComponent, m as maybeRenderHead, e as addAttribute, s as spreadAttributes, a as renderTemplate, r as renderComponent, F as Fragment, u as unescapeHTML, f as renderSlot } from './astro/server_D74Uuew0.mjs';
import 'kleur/colors';
import 'clsx';
import { f as findImage, b as $$Icon, a as $$Button } from './page_D0LVH7FG.mjs';
import { twMerge } from 'tailwind-merge';
import { g as getImage } from './_astro_assets_DuYI4pG9.mjs';
import { parseUrl, transformUrl } from 'unpic';
import { jsx } from 'react/jsx-runtime';
import 'react';
import { motion } from 'framer-motion';

const config = {
  deviceSizes: [
    640,
    750,
    828,
    960,
    1080,
    1280,
    1668,
    1920,
    2048,
    2560,
    3200,
    3840,
    4480,
    5120,
    6016
  ]};
const computeHeight = (width, aspectRatio) => {
  return Math.floor(width / aspectRatio);
};
const parseAspectRatio = (aspectRatio) => {
  if (typeof aspectRatio === "number") return aspectRatio;
  if (typeof aspectRatio === "string") {
    const match = aspectRatio.match(/(\d+)\s*[/:]\s*(\d+)/);
    if (match) {
      const [, num, den] = match.map(Number);
      if (den && !isNaN(num)) return num / den;
    } else {
      const numericValue = parseFloat(aspectRatio);
      if (!isNaN(numericValue)) return numericValue;
    }
  }
  return void 0;
};
const getSizes = (width, layout) => {
  if (!width || !layout) {
    return void 0;
  }
  switch (layout) {
    case `constrained`:
      return `(min-width: ${width}px) ${width}px, 100vw`;
    case `fixed`:
      return `${width}px`;
    case `fullWidth`:
      return `100vw`;
    default:
      return void 0;
  }
};
const pixelate = (value) => value || value === 0 ? `${value}px` : void 0;
const getStyle = ({
  width,
  height,
  aspectRatio,
  layout,
  objectFit = "cover",
  objectPosition = "center",
  background
}) => {
  const styleEntries = [
    ["object-fit", objectFit],
    ["object-position", objectPosition]
  ];
  if (background?.startsWith("https:") || background?.startsWith("http:") || background?.startsWith("data:")) {
    styleEntries.push(["background-image", `url(${background})`]);
    styleEntries.push(["background-size", "cover"]);
    styleEntries.push(["background-repeat", "no-repeat"]);
  } else {
    styleEntries.push(["background", background]);
  }
  if (layout === "fixed") {
    styleEntries.push(["width", pixelate(width)]);
    styleEntries.push(["height", pixelate(height)]);
    styleEntries.push(["object-position", "top left"]);
  }
  if (layout === "constrained") {
    styleEntries.push(["max-width", pixelate(width)]);
    styleEntries.push(["max-height", pixelate(height)]);
    styleEntries.push(["aspect-ratio", aspectRatio ? `${aspectRatio}` : void 0]);
    styleEntries.push(["width", "100%"]);
  }
  if (layout === "fullWidth") {
    styleEntries.push(["width", "100%"]);
    styleEntries.push(["aspect-ratio", aspectRatio ? `${aspectRatio}` : void 0]);
    styleEntries.push(["height", pixelate(height)]);
  }
  if (layout === "responsive") {
    styleEntries.push(["width", "100%"]);
    styleEntries.push(["height", "auto"]);
    styleEntries.push(["aspect-ratio", aspectRatio ? `${aspectRatio}` : void 0]);
  }
  if (layout === "contained") {
    styleEntries.push(["max-width", "100%"]);
    styleEntries.push(["max-height", "100%"]);
    styleEntries.push(["object-fit", "contain"]);
    styleEntries.push(["aspect-ratio", aspectRatio ? `${aspectRatio}` : void 0]);
  }
  if (layout === "cover") {
    styleEntries.push(["max-width", "100%"]);
    styleEntries.push(["max-height", "100%"]);
  }
  const styles = Object.fromEntries(styleEntries.filter(([, value]) => value));
  return Object.entries(styles).map(([key, value]) => `${key}: ${value};`).join(" ");
};
const getBreakpoints = ({
  width,
  breakpoints,
  layout
}) => {
  if (layout === "fullWidth" || layout === "cover" || layout === "responsive" || layout === "contained") {
    return breakpoints || config.deviceSizes;
  }
  if (!width) {
    return [];
  }
  const doubleWidth = width * 2;
  if (layout === "fixed") {
    return [width, doubleWidth];
  }
  if (layout === "constrained") {
    return [
      width,
      doubleWidth,
      ...(breakpoints || config.deviceSizes).filter((w) => w < doubleWidth)
    ];
  }
  return [];
};
const astroAsseetsOptimizer = async (image, breakpoints) => {
  if (!image || typeof image === "string") {
    return [];
  }
  return Promise.all(
    breakpoints.map(async (w) => {
      const url = (await getImage({ src: image, width: w })).src;
      return {
        src: url,
        width: w
      };
    })
  );
};
const unpicOptimizer = async (image, breakpoints, width, height) => {
  if (!image || typeof image !== "string") {
    return [];
  }
  const urlParsed = parseUrl(image);
  if (!urlParsed) {
    return [];
  }
  return Promise.all(
    breakpoints.map(async (w) => {
      const url = transformUrl({
        url: image,
        width: w,
        height: width && height ? computeHeight(w, width / height) : height,
        cdn: urlParsed.cdn
      }) || image;
      return {
        src: String(url),
        width: w
      };
    })
  );
};
async function getImagesOptimized(image, { src: _, width, height, sizes, aspectRatio, widths, layout = "constrained", style = "", ...rest }, transform = () => Promise.resolve([])) {
  if (typeof image !== "string") {
    width ||= Number(image.width) || void 0;
    height ||= typeof width === "number" ? computeHeight(width, image.width / image.height) : void 0;
  }
  width = width && Number(width) || void 0;
  height = height && Number(height) || void 0;
  widths ||= config.deviceSizes;
  sizes ||= getSizes(Number(width) || void 0, layout);
  aspectRatio = parseAspectRatio(aspectRatio);
  if (aspectRatio) {
    if (width) {
      if (height) ; else {
        height = width / aspectRatio;
      }
    } else if (height) {
      width = Number(height * aspectRatio);
    } else if (layout !== "fullWidth") {
      console.error("Khi ratio được thiết lập, chiều rộng hoặc chiều cao cũng phải được đặt tương ứng.");
      console.error("Image", image);
    }
  } else if (width && height) {
    aspectRatio = width / height;
  } else if (layout !== "fullWidth") {
    console.error("Phải đặt ratio hoặc cả chiều rộng và chiều cao tương ứng.");
    console.error("Image", image);
  }
  let breakpoints = getBreakpoints({ width, breakpoints: widths, layout });
  breakpoints = [...new Set(breakpoints)].sort((a, b) => a - b);
  const srcset = (await transform(image, breakpoints, Number(width) || void 0, Number(height) || void 0)).map(({ src, width: width2 }) => `${src} ${width2}w`).join(", ");
  return {
    src: typeof image === "string" ? image : image.src,
    attributes: {
      width,
      height,
      srcset: srcset || void 0,
      sizes,
      style: `${getStyle({
        width,
        height,
        aspectRatio,
        layout
      })}${style ?? ""}`,
      ...rest
    }
  };
}

const $$Astro$5 = createAstro("https://nhavantuonglai.com");
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (!props.alt) throw new Error();
  props.width = typeof props.width === "string" ? parseInt(props.width) : props.width;
  props.height = typeof props.height === "string" ? parseInt(props.height) : props.height;
  props.loading = props.loading || "lazy";
  props.decoding = props.decoding || "async";
  const _image = await findImage(props.src);
  let image = void 0;
  if (_image) {
    if (typeof _image === "object") {
      image = await getImagesOptimized(_image, props, astroAsseetsOptimizer);
    } else if (typeof _image === "string" && (_image.startsWith("http://") || _image.startsWith("https://"))) {
      image = await getImagesOptimized(_image, props, unpicOptimizer);
    } else {
      image = await getImagesOptimized(_image, props);
    }
  }
  return renderTemplate`${image ? renderTemplate`${maybeRenderHead()}<img title="nhavantuonglai"${addAttribute(image.src, "src")}${spreadAttributes(image.attributes)}>` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {})}`}`;
}, "D:/OneCode/article-open/src/components/common/image.astro", void 0);

const Slideup = ({ children, delay = 0, className = "" }) => /* @__PURE__ */ jsx(
  motion.div,
  {
    initial: { opacity: 0, y: 100 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 1, delay },
    className,
    children
  }
);
const Slideleft = ({ children, delay = 0, className = "" }) => /* @__PURE__ */ jsx(
  motion.div,
  {
    initial: { opacity: 0, x: -100 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 1, delay },
    className,
    children
  }
);
const Slideright = ({ children, delay = 0, className = "" }) => /* @__PURE__ */ jsx(
  motion.div,
  {
    initial: { opacity: 0, x: 100 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 1, delay },
    className,
    children
  }
);

const $$Astro$4 = createAstro("https://nhavantuonglai.com");
const $$Headline = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
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
  return renderTemplate`${(title || subtitle || tagline) && renderTemplate`${maybeRenderHead()}<div class="max-w-3xl mx-auto text-center" }>${tagline && renderTemplate`<p>${unescapeHTML(tagline)}</p>`}${title && renderTemplate`<h2 titleClass>${unescapeHTML(title)}</h2>`}${subtitle && renderTemplate`<p>${unescapeHTML(subtitle)}</p>`}</div>`}`;
}, "D:/OneCode/article-open/src/components/ui/headline.astro", void 0);

const $$Astro$3 = createAstro("https://nhavantuonglai.com");
const $$Background = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Background;
  const { isDark = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["absolute inset-0", { "bg-dark dark:bg-transparent": isDark }], "class:list")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "D:/OneCode/article-open/src/components/ui/background.astro", void 0);

const $$Astro$2 = createAstro("https://nhavantuonglai.com");
const $$Wrapper = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Wrapper;
  const { id, isDark = false, containerClass = "", bg, as = "section" } = Astro2.props;
  const WrapperTag = as;
  return renderTemplate`${renderComponent($$result, "WrapperTag", WrapperTag, { "class": "relative not-prose scroll-mt-[72px]", ...id ? { id } : {} }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="absolute inset-0 pointer-events-none -z-[1]" aria-hidden="true"> ${renderSlot($$result2, $$slots["bg"], renderTemplate` ${bg ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(bg)}` })}` : renderTemplate`${renderComponent($$result2, "Background", $$Background, { "isDark": isDark })}`} `)} </div> <div class="mb-6 md:mb-62 relative mx-auto max-w-7xl px-4 md:px-6 text-default"> ${renderSlot($$result2, $$slots["default"])} </div> ` })}`;
}, "D:/OneCode/article-open/src/components/ui/wrapper.astro", void 0);

const $$Astro$1 = createAstro("https://nhavantuonglai.com");
const $$Divide = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Divide;
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
    `grid mx-auto ${columns === 4 ? "lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2" : columns === 3 ? "lg:grid-cols-3 sm:grid-cols-2" : columns === 2 ? "sm:grid-cols-2 " : ""}`,
    containerClass
  ), "class")}>${items.map(({ title, description, icon, callToAction, classes: itemClasses = {} }) => renderTemplate`<div><div${addAttribute(twMerge("flex text-justify", panelClass, itemClasses?.panel), "class")}><div>${(icon || defaultIcon) && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon || defaultIcon, "class": twMerge("w-5 h-5 mr-2 ml-2", defaultIconClass) })}`}</div><div><h4 class="text-xl">${title}</h4>${description && renderTemplate`<p class="text-xl">${unescapeHTML(description)}</p>`}${callToAction && renderTemplate`<div${addAttribute(twMerge(`${title || description ? "mt-6" : ""}`, actionClass, itemClasses?.actionClass), "class")}>${renderComponent($$result, "Button", $$Button, { "variant": "link", ...callToAction })}</div>`}</div></div></div>`)}</div>`}`;
}, "D:/OneCode/article-open/src/components/ui/divide.astro", void 0);

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
  return renderTemplate`${renderComponent($$result, "Slideleft", Slideleft, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "~/assets/framer.jsx", "client:component-export": "Slideleft" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="relative md:-mt-[76px] not-prose"> <div class="absolute inset-0 pointer-events-none" aria-hidden="true"></div> <div class="relative max-w-7xl mx-auto"> <div class="pt-0 md:pt-[120px] pointer-events-none"></div> ${renderComponent($$result2, "Wrapper", $$Wrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-7xl mx-auto ${isAfterContent ? "pt-0 md:pt-0 lg:pt-0" : ""} ${classes?.container ?? ""}`, "bg": bg }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline, "classes": {
    container: "max-w-xl sm:mx-auto lg:max-w-2xl",
    title: "text-4xl md:text-5xl font-bold leading-tighter tracking-tighter mb-6 font-heading",
    subtitle: "max-w-3xl mx-auto sm:text-center text-xl text-muted dark:text-slate-400"
  } })} <div class="md:mx-auto text-center"> <div${addAttribute(`md:flex ${isReversed ? "md:flex-row-reverse" : ""} md:gap-16`, "class")}> <div class="md:basis-1/2 self-center"> ${content && renderTemplate`<p class="text-xl">${unescapeHTML(content)}</p>`} ${callToAction && renderTemplate`<div class="w-auto mb-6"> ${renderComponent($$result3, "Button", $$Button, { "variant": "link", ...callToAction })} </div>`} ${items && items.length > 0 && renderTemplate`${renderComponent($$result3, "Divide", $$Divide, { "items": items, "columns": columns, "defaultIcon": "tabler:check", "classes": {
    panel: "max-w-none",
    title: "text-lg font-medium leading-6 dark:text-white rtl:mr-2",
    description: "mb-6 text-lg text-muted dark:text-slate-400 rtl:mr-2",
    icon: "flex h-7 w-7 items-center justify-center rounded-full bg-primary dark:bg-primary text-gray-50 p-1",
    action: "text-lg font-medium leading-6 dark:text-white rtl:mr-2"
  } })}`} </div> <div aria-hidden="true" class="mt-60 md:mt-0 md:basis-1/2"> ${image && renderTemplate`<div class="relative m-auto max-w-4xl"> ${typeof image === "string" ? renderTemplate`${renderComponent($$result3, "Fragment", Fragment, {}, { "default": ($$result4) => renderTemplate`${unescapeHTML(image)}` })}` : renderTemplate`${renderComponent($$result3, "Image", $$Image, { "class": "mx-auto w-full rounded-lg bg-gray-500 shadow-lg", "width": 600, "height": 407, "widths": [400, 768], "sizes": "(max-width: 768px), 432px", "layout": "responsive", ...image })}`} </div>`} </div> </div> </div> ` })} </div> </section> ` })}`;
}, "D:/OneCode/article-open/src/components/widgets/services.astro", void 0);

const $$Action = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "CTA", $$Services, { "title": "Li\xEAn l\u1EA1c trao \u0111\u1ED5i", "callToAction": {
    text: "Nh\u1EAFn tin",
    href: "https://instagram.com/nhavantuonglai"
  }, "items": [
    {
      title: "T\u1EE9c th\u1EDDi",
      description: "B\u1EA1n c\xF3 th\u1EC3 g\u1EEDi v\xE0 nh\u1EADn tin nh\u1EAFn nhanh ch\xF3ng, tr\u1EF1c ti\u1EBFp, gi\xFAp nh\u1EEFng v\u1EA5n \u0111\u1EC1 c\xE1 nh\xE2n c\u1EE7a b\u1EA1n \u0111\u01B0\u1EE3c gi\u1EA3i quy\u1EBFt t\u1EE9c th\u1EDDi v\xE0 hi\u1EC7u qu\u1EA3 h\u01A1n."
    },
    {
      title: "Th\xE2n thi\u1EC7n",
      description: "V\xEC t\xEDnh ch\u1EA5t l\xE0 k\xEAnh li\xEAn l\u1EA1c nhanh, n\xEAn b\u1EA1n c\xF3 th\u1EC3 b\u1ECF qua nh\u1EEFng nghi th\u1EE9c giao ti\u1EBFp th\xF4ng th\u01B0\u1EDDng, ch\u1EC9 c\u1EA7n l\u1ECBch s\u1EF1 v\xE0 t\xF4n tr\u1ECDng th\xEC s\u1EBD nh\u1EADn \u0111\u01B0\u1EE3c s\u1EF1 ph\u1EA3n h\u1ED3i \u0111\u1EA7y th\xE2n thi\u1EC7n, tho\u1EA3i m\xE1i t\u1EEB t\xE1c gi\u1EA3."
    }
  ], "image": {
    src: "https://banmaixanh.org/image/cover/001-111.jpg",
    alt: "nhan-tin-instagram"
  } }, { "content": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h3>Liên lạc thông qua Instagram</h3> <p>Thông qua Instagram, bạn có thể trao đổi trực tiếp và tức thời, cũng như cập nhật những thông tin mới nhất từ nhavantuonglai.</p> ` })}` })} ${renderComponent($$result, "CTA", $$Services, { "isReversed": true, "callToAction": {
    text: "G\u1EEDi mail",
    href: "mailto:info@nhavantuonglai.com"
  }, "items": [
    {
      title: "Tin c\u1EADy",
      description: "Trong m\u1ED9t s\u1ED1 tr\u01B0\u1EDDng h\u1EE3p, email \u0111\u01B0\u1EE3c d\xF9ng nh\u01B0 m\u1ED9t t\xE0i li\u1EC7u ph\xE1p l\xFD, ch\xEDnh v\xEC v\u1EADy m\xE0 b\u1EA1n c\xF3 th\u1EC3 an t\xE2m v\xE0 tin c\u1EADy khi trao \u0111\u1ED5i v\u1EDBi t\xE1c gi\u1EA3 th\xF4ng qua email."
    },
    {
      title: "Chuy\xEAn nghi\u1EC7p",
      description: "C\u1EA5u tr\xFAc c\u1EE7a email \u0111\u1EB7t t\xEDnh chuy\xEAn nghi\u1EC7p l\xEAn h\xE0ng \u0111\u1EA7u, n\xEAn nh\u1EEFng th\xF4ng tin, n\u1ED9i dung \u0111\u01B0\u1EE3c vi\u1EBFt trong email t\u1EEB t\xE1c gi\u1EA3 s\u1EBD lu\xF4n \u0111\u1EA3m b\u1EA3o \u0111i\u1EC1u n\xE0y \u1EDF m\u1EE9c cao nh\u1EA5t."
    }
  ], "image": {
    src: "https://banmaixanh.org/image/cover/001-110.jpg",
    alt: "viet-mail"
  } }, { "content": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result3) => renderTemplate` <h3>Trao đổi trên email</h3> <p>Thông qua email cá nhân, bạn có thể trao đổi thỏa thuận hợp tác, kết nối chuyên sâu và mang tính chuyên nghiệp.</p> ` })}` })}`;
}, "D:/OneCode/article-open/src/components/content/action.astro", void 0);

export { $$Services as $, Slideup as S, $$Action as a, $$Image as b, Slideright as c, $$Wrapper as d, $$Headline as e, Slideleft as f, $$Background as g };
