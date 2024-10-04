import { d as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, u as unescapeHTML, F as Fragment, b as addAttribute } from '../chunks/astro/server_BfxwJWhM.mjs';
import 'kleur/colors';
import { b as $$Button, a as $$Icon, $ as $$PageLayout } from '../chunks/page-layout_7BvdpGlP.mjs';
import { $ as $$Hero } from '../chunks/hero_16iDgzA_.mjs';
import { $ as $$WidgetWrapper, a as $$Grid, b as $$Services$1, c as $$Headline, d as $$CallToAction } from '../chunks/call-to-action_Bd1MGNQ_.mjs';
import { c as getBlogPermalink } from '../chunks/permalinks_DgxcdhcO.mjs';
import { d as findLatestPosts } from '../chunks/blog_DVimHaXD.mjs';
import { $ as $$Image } from '../chunks/image_Bsu-3NOb.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro("https://nhavantuonglai.com");
const $$BlogLatestPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BlogLatestPost;
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
  return renderTemplate`${renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": classes?.container, "bg": bg }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="flex flex-col lg:justify-between lg:flex-row mb-6">${title && renderTemplate`<div class="md:max-w-sm"><h2 class="text-4xl md:text-5xl font-bold leading-tighter tracking-tighter mb-6 font-heading">${unescapeHTML(title)}</h2></div>`}${information && renderTemplate`<p class="text-muted text-justify dark:text-slate-400 lg:text-sm lg:max-w-md">${unescapeHTML(information)}</p>`}</div>${renderComponent($$result2, "Grid", $$Grid, { "posts": posts })}<div class="flex flex-col lg:justify-between lg:flex-row mb-6">${linkText && linkUrl && renderTemplate`${renderComponent($$result2, "Button", $$Button, { "variant": "link", "href": linkUrl }, { "default": ($$result3) => renderTemplate`${linkText} »` })}`}</div>` })}` }`;
}, "D:/Onecode/article-open/src/components/widgets/blog-latest-post.astro", void 0);

const $$Article = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Article", $$BlogLatestPost, { "title": "B\xE0i m\u1EDBi nh\u1EA5t", "information": `Danh s\xE1ch 4 b\xE0i m\u1EDBi nh\u1EA5t, c\u1EADp nh\u1EADt theo th\u1EE9 t\u1EF1 ng\xE0y th\xE1ng tr\xEAn website, gi\xFAp d\xF2ng ch\u1EA3y th\xF4ng tin lu\xF4n \u0111\u01B0\u1EE3c c\u1EADp nh\u1EADt v\xE0 c\u1EA3m h\u1EE9ng vi\u1EBFt l\xE1ch lu\xF4n tu\xF4n tr\xE0o.` })}`;
}, "D:/Onecode/article-open/src/components/content/article.astro", void 0);

const $$Services = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Services", $$Services$1, { "title": "D\u1ECBch v\u1EE5 cung c\u1EA5p", "items": [
    {
      title: "N\u1ED9i dung h\u1EA5p d\u1EABn v\u1EDBi ng\u01B0\u1EDDi \u0111\u1ECDc",
      description: "N\u1ED9i dung vi\u1EBFt c\u1EE7a @nhavantuonglai lu\xF4n \u0111\u01B0\u1EE3c ch\xFA tr\u1ECDng \u0111\u1EC3 \u0111em l\u1EA1i tr\u1EA3i nghi\u1EC7m \u0111\u1ECDc t\u1ED1t nh\u1EA5t, kh\xF4ng ch\u1EC9 h\u1EA5p d\u1EABn v\u1EC1 m\u1EB7t n\u1ED9i dung m\xE0 c\xF2n m\u1EA1ch l\u1EA1c trong tr\xECnh b\xE0y."
    },
    {
      title: "N\u1ED9i dung \u0111\xE1p \u1EE9ng thu\u1EADt to\xE1n SEO",
      description: "Kh\xF4ng ch\u1EC9 \u0111\xE1p \u1EE9ng tr\u1EA3i nghi\u1EC7m \u0111\u1ECDc, c\xE1c s\u1EA3n ph\u1EA9m content c\u1EE7a @nhavantuonglai c\xF2n \u0111\xE1p \u1EE9ng t\u1ED1t c\xE1c thu\u1EADt to\xE1n, ti\xEAu ch\xED SEO c\u1EE7a c\xF4ng c\u1EE5 t\xECm ki\u1EBFm, gi\xFAp website c\u1EE7a b\u1EA1n d\u1EC5 d\xE0ng leo l\xEAn top t\xECm ki\u1EBFm."
    },
    {
      title: "N\u1ED9i dung t\u1EF1 vi\u1EBFt, kh\xF4ng x\xE0o n\u1EA5u",
      description: "T\u1EA5t c\u1EA3 c\xE1c b\xE0i vi\u1EBFt, s\u1EA3n ph\u1EA9m content \u0111\u1EC1u \u0111\u01B0\u1EE3c @nhavantuonglai t\u1EF1 vi\u1EBFt, kh\xF4ng sao ch\xE9p hay s\u1EED d\u1EE5ng n\u1ED9i dung c\xF3 s\u1EB5n. \u0110i\u1EC1u n\xE0y \u0111\u1EA3m b\u1EA3o r\u1EB1ng n\u1ED9i dung lu\xF4n m\u1EDBi m\u1EBB, \u0111\u1ED9c \u0111\xE1o v\xE0 mang t\xEDnh ch\u1EA5t ri\xEAng bi\u1EC7t cho t\u1EEBng kh\xE1ch h\xE0ng."
    }
  ], "image": {
    src: "https://data.nhavantuonglai.com/image/illustrations/cover-nhavantuonglai-com-0524.jpg",
    alt: "viet-bai-chuan-seo"
  } }, { "content": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-4">Viết bài chuẩn SEO</h3>
Dịch vụ viết bài chuẩn SEO của nhavantuonglai được thiết kế để cung cấp nội dung chất lượng cao. Điều này giúp tăng lượng truy cập vào website của bạn, cải thiện tỷ lệ chuyển đổi và tạo ra giá trị dài hạn cho doanh nghiệp.
` })}` })} ${renderComponent($$result, "Services", $$Services$1, { "isReversed": true, "isAfterContent": true, "items": [
    {
      title: "Giao di\u1EC7n hi\u1EC7n \u0111\u1EA1i trong m\u1EAFt ng\u01B0\u1EDDi d\xF9ng",
      description: "nhavantuonglai lu\xF4n ch\xFA tr\u1ECDng \u0111\u1EBFn vi\u1EC7c t\u1EA1o ra nh\u1EEFng giao di\u1EC7n website hi\u1EC7n \u0111\u1EA1i, b\u1EAFt m\u1EAFt v\xE0 th\xE2n thi\u1EC7n v\u1EDBi ng\u01B0\u1EDDi d\xF9ng. Giao di\u1EC7n th\xE2n thi\u1EC7n kh\xF4ng ch\u1EC9 gi\u1EEF ch\xE2n ng\u01B0\u1EDDi d\xF9ng l\xE2u h\u01A1n m\xE0 c\xF2n t\u1EA1o \u1EA5n t\u01B0\u1EE3ng t\u1ED1t, gi\xFAp t\u0103ng c\u01A1 h\u1ED9i chuy\u1EC3n \u0111\u1ED5i."
    },
    {
      title: "Backend th\xE2n thi\u1EC7n v\u1EDBi qu\u1EA3n tr\u1ECB vi\xEAn",
      description: "V\u1EDBi d\u1ECBch v\u1EE5 thi\u1EBFt k\u1EBF website c\u1EE7a nhavantuonglai, b\u1EA1n s\u1EBD c\xF3 m\u1ED9t website d\u1EC5 d\xE0ng ch\u1EC9nh s\u1EEDa v\xE0 bi\xEAn t\u1EADp. \u0110i\u1EC1u n\xE0y gi\xFAp b\u1EA1n lu\xF4n ch\u1EE7 \u0111\u1ED9ng trong vi\u1EC7c qu\u1EA3n l\xFD v\xE0 ph\xE1t tri\u1EC3n n\u1ED9i dung, \u0111\xE1p \u1EE9ng nhanh ch\xF3ng c\xE1c nhu c\u1EA7u kinh doanh."
    },
    {
      title: "C\u1EA5u tr\xFAc \u0111\u1EA3m b\u1EA3o t\u1ED1i \u01B0u SEO",
      description: "T\u1EA5t c\u1EA3 c\xE1c website do nhavantuonglai thi\u1EBFt k\u1EBF \u0111\u1EC1u \u0111\u01B0\u1EE3c t\u1ED1i \u01B0u h\xF3a \u0111\u1EC3 \u0111\xE1p \u1EE9ng c\xE1c y\xEAu c\u1EA7u c\u1EE7a thu\u1EADt to\xE1n SEO. Website t\u1ED1i \u01B0u h\xF3a SEO kh\xF4ng ch\u1EC9 gi\xFAp t\u0103ng l\u01B0\u1EE3ng truy c\u1EADp m\xE0 c\xF2n c\u1EA3i thi\u1EC7n hi\u1EC7u su\u1EA5t kinh doanh tr\u1EF1c tuy\u1EBFn."
    }
  ], "image": {
    src: "https://data.nhavantuonglai.com/image/illustrations/cover-nhavantuonglai-com-0513.jpg",
    alt: "website-chuan-seo"
  } }, { "content": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result3) => renderTemplate` <h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-4">Thiết kế website chuẩn SEO</h3>
Dịch vụ thiết kế website chuẩn SEO của nhavantuonglai được tạo ra để giúp doanh nghiệp có một website không chỉ đẹp mắt mà còn tối ưu hóa cho các công cụ tìm kiếm, và tăng cường sự hiện diện trực tuyến và thu hút khách hàng tiềm năng.
` })}` })} ${renderComponent($$result, "Services", $$Services$1, { "isAfterContent": true, "items": [
    {
      title: "T\xECm ki\u1EBFm, gi\u1EA3i quy\u1EBFt c\xE1c v\u1EA5n \u0111\u1EC1 SEO \u0111ang g\u1EB7p ph\u1EA3i",
      description: "nhavantuonglai c\xF3 \u0111\u1ED9i ng\u0169 chuy\xEAn gia SEO gi\xE0u kinh nghi\u1EC7m, s\u1EB5n s\xE0ng gi\u1EA3i quy\u1EBFt m\u1ECDi v\u1EA5n \u0111\u1EC1 li\xEAn quan \u0111\u1EBFn SEO c\u1EE7a website.  B\u1EB1ng k\u1EBF ho\u1EA1ch c\u1EA3i thi\u1EC7n SEO, website c\u1EE7a b\u1EA1n s\u1EBD tr\u1EDF n\xEAn th\xE2n thi\u1EC7n, t\u1EA3i nhanh v\xE0 thu h\xFAt ng\u01B0\u1EDDi \u0111\u1ECDc nhi\u1EC1u h\u01A1n."
    },
    {
      title: "\u0110\u1EC1 xu\u1EA5t, ho\xE0n thi\u1EC7n ti\xEAu chu\u1EA9n SEO \xE1p d\u1EE5ng sau n\xE0y",
      description: "Kh\xF4ng ch\u1EC9 d\u1EEBng l\u1EA1i \u1EDF vi\u1EC7c kh\u1EAFc ph\u1EE5c c\xE1c v\u1EA5n \u0111\u1EC1 hi\u1EC7n c\xF3, m\xE0 c\xF2n l\xE0 \u0111\u1EC1 xu\u1EA5t v\xE0 ho\xE0n thi\u1EC7n c\xE1c ti\xEAu chu\u1EA9n SEO cho website c\u1EE7a b\u1EA1n, \u0111\u1EC3 website c\u1EE7a b\u1EA1n kh\xF4ng ch\u1EC9 \u0111\u1EA1t chu\u1EA9n m\xE0 c\xF2n duy tr\xEC th\u1EE9 h\u1EA1ng cao m\u1ED9t c\xE1ch b\u1EC1n v\u1EEFng."
    },
    {
      title: "B\u1EA3o tr\xEC, b\u1EA3o d\u01B0\u1EE1ng khi k\u1EBFt th\xFAc d\u1EF1 \xE1n",
      description: "B\u1EA1n s\u1EBD nh\u1EADn \u0111\u01B0\u1EE3c h\u1ED7 tr\u1EE3 b\u1EA3o tr\xEC, b\u1EA3o d\u01B0\u1EE1ng trong 3 th\xE1ng k\u1EC3 t\u1EEB khi k\u1EBFt th\xFAc h\u1EE3p \u0111\u1ED3ng. Ch\xFAng t\xF4i cam k\u1EBFt theo d\xF5i, ki\u1EC3m tra v\xE0 \u0111i\u1EC1u ch\u1EC9nh c\xE1c y\u1EBFu t\u1ED1 SEO \u0111\u1EC3 \u0111\u1EA3m b\u1EA3o website c\u1EE7a b\u1EA1n lu\xF4n ho\u1EA1t \u0111\u1ED9ng hi\u1EC7u qu\u1EA3 v\xE0 duy tr\xEC th\u1EE9 h\u1EA1ng cao."
    }
  ], "image": {
    src: "https://data.nhavantuonglai.com/image/illustrations/cover-nhavantuonglai-com-0499.jpg",
    alt: "toi-uu-website-chuan-seo"
  } }, { "content": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result3) => renderTemplate` <h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-4">Thiết kế tối ưu website SEO</h3>
Dịch vụ tối ưu website chuẩn SEO của nhavantuonglai được thiết kế để giúp các doanh nghiệp giải quyết triệt để các vấn đề về SEO.  Dịch vụ không chỉ giúp website của bạn đạt chuẩn SEO mà còn duy trì và nâng cao hiệu quả SEO trong thời gian dài.
` })}` })}`;
}, "D:/Onecode/article-open/src/components/content/services.astro", void 0);

const $$Astro$1 = createAstro("https://nhavantuonglai.com");
const $$Brands$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
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
}, "D:/Onecode/article-open/src/components/widgets/brands.astro", void 0);

const $$Brands = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Brands", $$Brands$1, { "title": "\u0110\u01B0\u1EE3c tin \u0111\u1ECDc b\u1EDFi c\xE1c kh\xE1ch h\xE0ng c\u1EE7a", "images": [
    {
      src: "https://data.nhavantuonglai.com/image/clients/client-facebook.png",
      alt: "Facebook"
    },
    {
      src: "https://data.nhavantuonglai.com/image/clients/client-google.png",
      alt: "Google"
    },
    {
      src: "https://data.nhavantuonglai.com/image/clients/client-microsoft.png",
      alt: "Microsoft"
    },
    {
      src: "https://data.nhavantuonglai.com/image/clients/client-netflix.png",
      alt: "Netflix"
    },
    {
      src: "https://data.nhavantuonglai.com/image/clients/client-spotify.png",
      alt: "Spotify"
    },
    {
      src: "https://data.nhavantuonglai.com/image/clients/client-tiktok.png",
      alt: "Tiktok"
    },
    {
      src: "https://data.nhavantuonglai.com/image/clients/client-apple.png",
      alt: "Apple"
    }
  ] })}`;
}, "D:/Onecode/article-open/src/components/content/brands.astro", void 0);

const $$Astro = createAstro("https://nhavantuonglai.com");
const $$Testimonials$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
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
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-6xl mx-auto ${classes?.container ?? ""}`, "bg": bg }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline })} ${maybeRenderHead()}<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"> ${testimonials && testimonials.map(({ title: title2, testimonial, name, job, image }) => renderTemplate`<div class="flex h-auto"> <div class="text-justify flex flex-col p-4 md:p-6 rounded-md shadow-xl dark:shadow-none dark:border dark:border-slate-600"> ${title2 && renderTemplate`<h2 class="text-lg font-medium leading-6 pb-4">${title2}</h2>`} ${testimonial && renderTemplate`<blockquote class="flex-auto"> <p class="text-muted">" ${testimonial} "</p> </blockquote>`} <hr class="border-slate-200 dark:border-slate-600 my-4"> <div class="flex items-center"> ${image && renderTemplate`<div class="h-10 w-10 rounded-full border border-slate-200 dark:border-slate-600"> ${typeof image === "string" ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(image)}` })}` : renderTemplate`${renderComponent($$result2, "Image", $$Image, { "class": "h-10 w-10 rounded-full border border-slate-200 dark:border-slate-600 min-w-full min-h-full", "width": 40, "height": 40, "widths": [400, 768], "layout": "fixed", ...image })}`} </div>`} <div${addAttribute(title2, "title")} class="grow ml-3 rtl:ml-0 rtl:mr-3"> ${name && renderTemplate`<p class="text-base font-semibold">${name}</p>`} ${job && renderTemplate`<p class="text-xs text-muted">${job}</p>`} </div> </div> </div> </div>`)} </div> ${callToAction && renderTemplate`<div class="flex justify-center mx-auto w-fit mt-8 md:mt-12 font-medium"> ${renderComponent($$result2, "Button", $$Button, { ...callToAction })} </div>`}` })}`;
}, "D:/Onecode/article-open/src/components/widgets/testimonials.astro", void 0);

const $$Testimonials = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Testimonials", $$Testimonials$1, { "title": "B\u1EB1ng ch\u1EE9ng x\xE3 h\u1ED9i", "testimonials": [
    {
      testimonial: "T\xF4i \u0111\xE1nh gi\xE1 cao chuy\xEAn m\xF4n c\u1EE7a @nhavantuonglai, khi c\xE1c b\xE0i vi\u1EBFt kh\xF4ng ch\u1EC9 chu\u1EA9n SEO m\xE0 c\xF2n mang t\xEDnh s\xE1ng t\u1EA1o cao, gi\xFAp thu h\xFAt l\u01B0\u1EE3ng l\u1EDBn \u0111\u1ED9c gi\u1EA3 v\xE0o website c\u1EE7a t\xF4i.",
      name: "Ph\u1EA1m Vy",
      job: "Ch\u1EE7 shop qu\u1EA7n \xE1o",
      image: {
        src: "https://data.nhavantuonglai.com/image/clients/client-people-one.jpg",
        alt: "nhavantuonglai-pham-vy"
      }
    },
    {
      testimonial: "S\u1EA3n ph\u1EA9m content t\u1EEB @nhavantuonglai kh\xE1 \u1EA5n t\u01B0\u1EE3ng v\xE0 s\xE2u s\u1EAFc, th\u1EC3 hi\u1EC7n s\u1EF1 am hi\u1EC3u s\xE2u v\u1EC1 ng\xE0nh m\xE0 anh \u1EA5y vi\u1EBFt c\u0169ng nh\u01B0 tinh th\u1EA7n h\u1ECDc h\u1ECFi cao \u0111\u1ED9.",
      name: "V\u0103n Nh\xE0n",
      job: "Content Leader",
      image: {
        src: "https://data.nhavantuonglai.com/image/clients/client-people-two.jpg",
        alt: "nhavantuonglai-van-nhan"
      }
    },
    {
      testimonial: "@nhavantuonglai l\xE0 m\u1ED9t tr\u01B0\u1EDDng h\u1EE3p \u0111\u1EB7c bi\u1EC7t, khi v\u1EEBa gi\u1ECFi chuy\xEAn m\xF4n vi\u1EBFt m\xE0 c\xF2n c\xF3 tinh th\u1EA7n h\u1ECDc h\u1ECFi, c\u1EA7u ti\u1EBFn trong ng\xE0nh analysis.",
      name: "Tr\u1EA7n An",
      job: "Data Analysis",
      image: {
        src: "https://data.nhavantuonglai.com/image/clients/client-people-three.jpg",
        alt: "nhavantuonglai-tran-an"
      }
    }
  ] })}`;
}, "D:/Onecode/article-open/src/components/content/testimonials.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "\u0110\u1ECDc nhi\u1EC1u, hi\u1EC3u s\xE2u, vi\u1EBFt hay | nhavantuonglai",
    ignoreTitleTemplate: true
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Article", $$Article, {})} ${renderComponent($$result2, "Services", $$Services, {})} ${renderComponent($$result2, "Brands", $$Brands, {})} ${renderComponent($$result2, "Testimonials", $$Testimonials, {})} ${renderComponent($$result2, "CTA", $$CallToAction, {})} ` })}`;
}, "D:/Onecode/article-open/src/pages/index.astro", void 0);

const $$file = "D:/Onecode/article-open/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
