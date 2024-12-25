import { d as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, b as addAttribute, e as renderSlot, a as renderComponent, F as Fragment, s as spreadAttributes } from './astro/server_Cx2nMEd_.mjs';
import 'kleur/colors';
import 'clsx';
import { twMerge } from 'tailwind-merge';
import { g as getImage, f as findImage, a as $$Icon, b as $$Button } from './page_KtSAXQmz.mjs';
import { parseUrl, transformUrl } from 'unpic';
/* empty css                          */

const $$Astro$5 = createAstro("https://nhavantuonglai.com");
const $$Headline = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
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
}, "D:/OneCode/article-open/src/components/ui/headline.astro", void 0);

const $$Astro$4 = createAstro("https://nhavantuonglai.com");
const $$Background = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Background;
  const { isDark = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["absolute inset-0", { "bg-dark dark:bg-transparent": isDark }], "class:list")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "D:/OneCode/article-open/src/components/ui/background.astro", void 0);

const $$Astro$3 = createAstro("https://nhavantuonglai.com");
const $$Wrapper = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Wrapper;
  const { id, isDark = false, containerClass = "", bg, as = "section" } = Astro2.props;
  const WrapperTag = as;
  return renderTemplate`${renderComponent($$result, "WrapperTag", WrapperTag, { "class": "relative not-prose scroll-mt-[72px]", ...id ? { id } : {} }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="absolute inset-0 pointer-events-none -z-[1]" aria-hidden="true"> ${renderSlot($$result2, $$slots["bg"], renderTemplate` ${bg ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(bg)}` })}` : renderTemplate`${renderComponent($$result2, "Background", $$Background, { "isDark": isDark })}`} `)} </div> <div class="mb-6 md:mb-12 relative mx-auto max-w-7xl px-4 md:px-6 text-default"> ${renderSlot($$result2, $$slots["default"])} </div> ` })}`;
}, "D:/OneCode/article-open/src/components/ui/wrapper.astro", void 0);

const config = {
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
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
  ],
  formats: ["image/webp"]
};
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

const $$Astro$2 = createAstro("https://nhavantuonglai.com");
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new Error();
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  if (!props.loading) {
    props.loading = "lazy";
  }
  if (!props.decoding) {
    props.decoding = "async";
  }
  const _image = await findImage(props.src);
  let image = void 0;
  if (_image !== null && typeof _image === "object") {
    image = await getImagesOptimized(_image, props, astroAsseetsOptimizer);
  } else if (typeof _image === "string" && (_image.startsWith("http://") || _image.startsWith("https://"))) {
    image = await getImagesOptimized(_image, props, unpicOptimizer);
  } else if (_image) {
    image = await getImagesOptimized(_image, props);
  }
  return renderTemplate`${!image ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {})}` : renderTemplate`${maybeRenderHead()}<img title="nhavantuonglai"${addAttribute(image.src, "src")}${spreadAttributes(image.attributes)}>`}`;
}, "D:/OneCode/article-open/src/components/common/image.astro", void 0);

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
}, "D:/OneCode/article-open/src/components/ui/item-grid.astro", void 0);

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
  return renderTemplate`${renderComponent($$result, "Wrapper", $$Wrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-7xl mx-auto ${isAfterContent ? "pt-0 md:pt-0 lg:pt-0" : ""} ${classes?.container ?? ""}`, "bg": bg }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline, "classes": {
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
}, "D:/OneCode/article-open/src/components/widgets/services.astro", void 0);

const $$Action = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<h2 class="mx-auto max-w-7xl md:px-6 leading-tighter text-center text-4xl md:text-5xl font-bold leading-tighter tracking-tighter mb-6 font-heading">Đăng ký nhận bảng tin hàng tuần</h2> <form class="mx-auto max-w-7xl md:px-6 px-4" action="https://formspree.io/f/xeooodne" method="post"> <label class="mb-3 block text-lg font-medium">Họ và tên</label> <input type="text" name="ho-va-ten" name="Họ và tên" class="mx-auto max-w-7xl mb-4 py-3 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900" required> <label class="mb-3 block text-lg font-medium">Email liên lạc</label> <input type="email" name="email" name="Email liên lạc" class="mx-auto max-w-7xl mb-4 py-3 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900" required> <label class="mb-3 block text-lg font-medium">Nội dung trao đổi</label> <input type="text" name="noi-dung" content="Nội dung trao đổi" class="px-4 mb-4 py-6 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900" required> <button type="submit" class="btn-primary mb-6">Đăng ký</button> </form> ${renderComponent($$result, "CTA", $$Services, { "title": "Li\xEAn l\u1EA1c trao \u0111\u1ED5i", "callToAction": {
    text: "Nh\u1EAFn tin",
    href: "https://www.instagram.com/nhavantuonglai"
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
    src: "https://nhavantuonglai.com/image/cover/001-480.jpg",
    alt: "nhan-tin-instagram"
  } }, { "content": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result3) => renderTemplate` <h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-4">Liên lạc thông qua Instagram</h3>
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
    src: "https://nhavantuonglai.com/image/cover/001-431.jpg",
    alt: "viet-mail"
  } }, { "content": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result3) => renderTemplate` <h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-4">Trao đổi trên email</h3>
Thông qua email cá nhân, bạn có thể trao đổi thỏa thuận hợp tác, kết nối chuyên sâu và mang tính chuyên nghiệp.
` })}` })}`;
}, "D:/OneCode/article-open/src/components/content/action.astro", void 0);

const $$Flowschart = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<h2 class="mx-auto max-w-7xl md:px-6 leading-tighter text-center text-4xl md:text-5xl font-bold leading-tighter tracking-tighter mb-6 font-heading">Thống kê lưu lượng dữ liệu</h2> <div id="main-chart" class="relative mx-auto max-w-7xl mb-6"></div>  `;
}, "D:/OneCode/article-open/src/components/widgets/flowschart.astro", void 0);

export { $$Action as $, $$Flowschart as a, $$Services as b, $$Wrapper as c, $$Headline as d, $$ItemGrid as e, $$Image as f, $$Background as g };
