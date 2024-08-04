import { c as createComponent, r as renderTemplate, b as addAttribute, a as renderComponent, u as unescapeHTML, F as Fragment, e as defineScriptVars, d as createAstro, m as maybeRenderHead, s as spreadAttributes, f as renderSlot, g as renderHead, h as renderUniqueStylesheet, i as renderScriptElement, j as createHeadAndContent } from './astro/server_cgYrkjj8.mjs';
import 'kleur/colors';
/* empty css                          */
import 'clsx';
import merge from 'lodash.merge';
import { escape } from 'html-escaper';
import * as z from 'zod';
import { l as lookup, A as AstroError, E as ExpectedImageOptions, f as ExpectedImage, g as ExpectedNotESMImage, r as resolveSrc, i as isRemoteImage, F as FailedToFetchRemoteImageDimensions, h as isESMImportedImage, j as isLocalService, D as DEFAULT_HASH_PROPS, k as InvalidImageService, m as ImageMissingAlt, U as UnknownContentCollectionError, p as prependForwardSlash } from './astro/assets-service_DtANj-ih.mjs';
import * as mime from 'mrmime';
import { parseUrl, transformUrl } from 'unpic';
import pLimit from 'p-limit';
import slugify from 'limax';
import { getIconData, iconToSVG } from '@iconify/utils';
import { twMerge } from 'tailwind-merge';

const SITE = {"name":"nhavantuonglai","site":"https://nhavantuonglai.com","base":"/","trailingSlash":false};
										const I18N = {"language":"vi","textDirection":"ltr"};
										const METADATA = {"title":{"default":"nhavantuonglai","template":"%s | nhavantuonglai"},"description":"nhavantuonglai là người viết lách chuyên nghiệp, tập trung viết dưới hình thức đoản văn, nghiên cứu và chia sẻ học thuật. Thể hiện vốn hiểu biết đời sống phong phú và kinh nghiệm viết vững vàng.","robots":{"index":true,"follow":true},"openGraph":{"type":"website","site_name":"nhavantuonglai","images":{"url":"https://data.nhavantuonglai.com/image/illustrations/cover-nhavantuonglai-com-0753.jpg","width":600,"height":407}},"twitter":{"handle":"@nhavantuonglai","site":"@nhavantuonglai","cardType":"summary_large_image"}};
										const APP_BLOG = {"isEnabled":true,"postsPerPage":10,"isRelatedPostsEnabled":true,"relatedPostsCount":4,"post":{"isEnabled":true,"permalink":"article/%slug%","robots":{"index":true,"follow":true}},"tag":{"isEnabled":true,"pathname":"tags","robots":{"index":true,"follow":true}},"list":{"isEnabled":true,"pathname":"article","robots":{"index":true}}};
										const UI = {"theme":"system","classes":{},"tokens":{"default":{"fonts":{"sans":"InterVariable","serif":"InterVariable","heading":"InterVariable"},"colors":{"default":"rgb(33 39 55)","heading":"rgb(234 237 243)","muted":"rgb(33 39 55 / 66%)","bgPage":"rgb(234 237 243)","primary":"rgb(255 114 94)","secondary":"rgb(255 114 94)","accent":"rgb(255 114 94)"}},"dark":{"fonts":{},"colors":{"default":"rgb(234 237 243)","heading":"rgb(33 39 55)","muted":"rgb(229 236 246 / 66%)","bgPage":"rgb(33 39 55)","primary":"rgb(255 114 94)","secondary":"rgb(255 114 94)","accent":"rgb(255 114 94)"}}}};

const formatter = new Intl.DateTimeFormat(I18N?.language, {
  year: "numeric",
  month: "short",
  day: "numeric",
  timeZone: "UTC"
});
const getFormattedDate = (date) => date ? formatter.format(date) : "";
const trim = (str = "", ch) => {
  let start = 0, end = str.length || 0;
  while (start < end && str[start] === ch) ++start;
  while (end > start && str[end - 1] === ch) --end;
  return start > 0 || end < str.length ? str.substring(start, end) : str;
};

const trimSlash = (s) => trim(trim(s, "/"));
const createPath = (...params) => {
  const paths = params.map((el) => trimSlash(el)).filter((el) => !!el).join("/");
  return "/" + paths + ("");
};
const BASE_PATHNAME = SITE.base ;
const cleanSlug = (text = "") => trimSlash(text).split("/").map((slug) => slugify(slug)).join("/");
const BLOG_BASE = cleanSlug(APP_BLOG?.list?.pathname);
cleanSlug(APP_BLOG?.category?.pathname);
const TAG_BASE = cleanSlug(APP_BLOG?.tag?.pathname) || "tag";
const POST_PERMALINK_PATTERN = trimSlash(APP_BLOG?.post?.permalink );
const getCanonical = (path = "") => {
  const url = String(new URL(path, SITE.site));
  if (path && url.endsWith("/")) {
    return url.slice(0, -1);
  }
  return url;
};
const getPermalink = (slug = "", type = "page") => {
  let permalink;
  switch (type) {
    case "tag":
      permalink = createPath(TAG_BASE, trimSlash(slug));
      break;
    case "post":
      permalink = createPath(trimSlash(slug));
      break;
    case "page":
    default:
      permalink = createPath(slug);
      break;
  }
  return definitivePermalink(permalink);
};
const getHomePermalink = () => getPermalink("/");
const getBlogPermalink = () => getPermalink(BLOG_BASE);
const getAsset = (path) => "/" + [BASE_PATHNAME, path].map((el) => trimSlash(el)).filter((el) => !!el).join("/");
const definitivePermalink = (permalink) => createPath(BASE_PATHNAME, permalink);

const $$CommonMeta = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="sitemap"${addAttribute(getAsset("/sitemap-index.xml"), "href")}>`;
}, "D:/Onebook/nhavantuonglai-vn/src/components/common/common-meta.astro", void 0);

const favIcon = "/_astro/favicon.BBzNFfdW.ico";

const favIconSvg = new Proxy({"src":"/_astro/favicon.DiTH_WFJ.svg","width":256,"height":256,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Onebook/nhavantuonglai-vn/src/assets/favicons/favicon.svg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("D:/Onebook/nhavantuonglai-vn/src/assets/favicons/favicon.svg");
							return target[name];
						}
					});

const appleTouchIcon = new Proxy({"src":"/_astro/favicon.BBzNFfdW.ico","width":256,"height":256,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Onebook/nhavantuonglai-vn/src/assets/favicons/apple-touch-icon.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("D:/Onebook/nhavantuonglai-vn/src/assets/favicons/apple-touch-icon.png");
							return target[name];
						}
					});

const $$Favicons = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<link rel="shortcut icon"${addAttribute(favIcon, "href")}><link rel="icon" type="image/svg+xml"${addAttribute(favIconSvg.src, "href")}><link rel="mask-icon"${addAttribute(favIconSvg.src, "href")} color="#ff725e"><link rel="apple-touch-icon" sizes="180x180"${addAttribute(appleTouchIcon.src, "href")}>`;
}, "D:/Onebook/nhavantuonglai-vn/src/components/favicons.astro", void 0);

const $$CustomStyles = createComponent(($$result, $$props, $$slots) => {
  const { tokens } = UI;
  const html = `
	<style>
		:root {
			--aw-font-sans: ${tokens.default.fonts.sans ? `'${tokens.default.fonts.sans}'` : '""'};
			--aw-font-serif: ${tokens.default.fonts.serif ? `'${tokens.default.fonts.serif}'` : "var(--aw-font-sans)"};
			--aw-font-heading: ${tokens.default.fonts.heading ? `'${tokens.default.fonts.heading}'` : "var(--aw-font-sans)"};

			--aw-color-primary: ${tokens.default.colors.primary};
			--aw-color-secondary: ${tokens.default.colors.secondary};
			--aw-color-accent: ${tokens.default.colors.accent};

			--aw-color-text-heading: ${tokens.default.colors.heading};
			--aw-color-text-default: ${tokens.default.colors.default};
			--aw-color-text-muted: ${tokens.default.colors.muted};
			--aw-color-bg-page: ${tokens.default.colors.bgPage};

			--aw-color-bg-page-dark: ${tokens.dark.colors.bgPage};

			::selection {
				background-color: lavender;
			}
		}

		.dark {
			${tokens.dark.fonts.sans ? `--aw-font-sans: '${tokens.dark.fonts.sans}';` : ""}
			${tokens.dark.fonts.serif ? `--aw-font-serif: '${tokens.dark.fonts.serif};'` : ""}
			${tokens.dark.fonts.heading ? `--aw-font-heading: '${tokens.dark.fonts.heading}';` : ""}

			--aw-color-primary: ${tokens.dark.colors.primary};
			--aw-color-secondary: ${tokens.dark.colors.secondary};
			--aw-color-accent: ${tokens.dark.colors.accent};

			--aw-color-text-heading: ${tokens.dark.colors.heading};
			--aw-color-text-default: ${tokens.dark.colors.default};
			--aw-color-text-muted: ${tokens.dark.colors.muted};
			--aw-color-bg-page: ${tokens.dark.colors.bgPage};

			::selection {
				background-color: black;
				color: snow;
			}
		}
	</style>
`;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(html)}` })}`;
}, "D:/Onebook/nhavantuonglai-vn/src/components/custom-styles.astro", void 0);

var __freeze$3 = Object.freeze;
var __defProp$3 = Object.defineProperty;
var __template$3 = (cooked, raw) => __freeze$3(__defProp$3(cooked, "raw", { value: __freeze$3(cooked.slice()) }));
var _a$3;
const $$ApplyColorMode = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$3 || (_a$3 = __template$3(["<script>(function(){", '\n	function applyTheme(theme) {\n		if (theme === "dark") {\n			document.documentElement.classList.add("dark");\n		} else {\n			document.documentElement.classList.remove("dark");\n		}\n		const matches = document.querySelectorAll("[data-aw-toggle-color-scheme] >input");\n\n		if (matches && matches.length) {\n			matches.forEach((elem) =>{\n				elem.checked = theme !== "dark";\n			});\n		}\n	}\n\n	if ((defaultTheme && defaultTheme.endsWith(":only")) || (!localStorage.theme && defaultTheme !== "system")) {\n		applyTheme(defaultTheme.replace(":only", ""));\n	} else if (\n		localStorage.theme === "dark" ||\n		(!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)\n	) {\n		applyTheme("dark");\n	} else {\n		applyTheme("light");\n	}\n})();<\/script>'])), defineScriptVars({ defaultTheme: UI.theme  }));
}, "D:/Onebook/nhavantuonglai-vn/src/components/common/apply-color-mode.astro", void 0);

const createMetaTag = (attributes) => {
  const attrs = Object.entries(attributes).map(([key, value]) => `${key}="${escape(value)}"`).join(" ");
  return `<meta ${attrs} />`;
};
const createLinkTag = (attributes) => {
  const attrs = Object.entries(attributes).map(([key, value]) => `${key}="${escape(value)}"`).join(" ");
  return `<link ${attrs} />`;
};
const createOpenGraphTag = (property, content) => {
  return createMetaTag({ property: `og:${property}`, content });
};
const buildOpenGraphMediaTags = (mediaType, media) => {
  let tags = "";
  const addTag = (tag) => {
    tags += tag + "\n";
  };
  media.forEach((medium) => {
    addTag(createOpenGraphTag(mediaType, medium.url));
    if (medium.alt) {
      addTag(createOpenGraphTag(`${mediaType}:alt`, medium.alt));
    }
    if (medium.secureUrl) {
      addTag(createOpenGraphTag(`${mediaType}:secure_url`, medium.secureUrl));
    }
    if (medium.type) {
      addTag(createOpenGraphTag(`${mediaType}:type`, medium.type));
    }
    if (medium.width) {
      addTag(createOpenGraphTag(`${mediaType}:width`, medium.width.toString()));
    }
    if (medium.height) {
      addTag(createOpenGraphTag(`${mediaType}:height`, medium.height.toString()));
    }
  });
  return tags;
};
const buildTags = (config) => {
  let tagsToRender = "";
  const addTag = (tag) => {
    tagsToRender += tag + "\n";
  };
  if (config.title) {
    const formattedTitle = config.titleTemplate ? config.titleTemplate.replace("%s", config.title) : config.title;
    addTag(`<title>${escape(formattedTitle)}</title>`);
  }
  if (config.description) {
    addTag(createMetaTag({ name: "description", content: config.description }));
  }
  let robotsContent = [];
  if (typeof config.noindex !== "undefined") {
    robotsContent.push(config.noindex ? "noindex" : "index");
  }
  if (typeof config.nofollow !== "undefined") {
    robotsContent.push(config.nofollow ? "nofollow" : "follow");
  }
  if (config.robotsProps) {
    const { nosnippet, maxSnippet, maxImagePreview, noarchive, unavailableAfter, noimageindex, notranslate } = config.robotsProps;
    if (nosnippet) robotsContent.push("nosnippet");
    if (maxSnippet) robotsContent.push(`max-snippet:${maxSnippet}`);
    if (maxImagePreview) robotsContent.push(`max-image-preview:${maxImagePreview}`);
    if (noarchive) robotsContent.push("noarchive");
    if (unavailableAfter) robotsContent.push(`unavailable_after:${unavailableAfter}`);
    if (noimageindex) robotsContent.push("noimageindex");
    if (notranslate) robotsContent.push("notranslate");
  }
  if (robotsContent.length > 0) {
    addTag(createMetaTag({ name: "robots", content: robotsContent.join(",") }));
  }
  if (config.canonical) {
    addTag(createLinkTag({ rel: "canonical", href: config.canonical }));
  }
  if (config.mobileAlternate) {
    addTag(createLinkTag({ rel: "alternate", media: config.mobileAlternate.media, href: config.mobileAlternate.href }));
  }
  if (config.languageAlternates && config.languageAlternates.length > 0) {
    config.languageAlternates.forEach((languageAlternate) => {
      addTag(createLinkTag({ rel: "alternate", hrefLang: languageAlternate.hrefLang, href: languageAlternate.href }));
    });
  }
  if (config.openGraph) {
    const title = config.openGraph?.title || config.title;
    if (title) {
      addTag(createOpenGraphTag("title", title));
    }
    const description = config.openGraph?.description || config.description;
    if (description) {
      addTag(createOpenGraphTag("description", description));
    }
    if (config.openGraph.url) {
      addTag(createOpenGraphTag("url", config.openGraph.url));
    }
    if (config.openGraph.type) {
      addTag(createOpenGraphTag("type", config.openGraph.type));
    }
    if (config.openGraph.images && config.openGraph.images.length) {
      addTag(buildOpenGraphMediaTags("image", config.openGraph.images));
    }
    if (config.openGraph.videos && config.openGraph.videos.length) {
      addTag(buildOpenGraphMediaTags("video", config.openGraph.videos));
    }
    if (config.openGraph.locale) {
      addTag(createOpenGraphTag("locale", config.openGraph.locale));
    }
    if (config.openGraph.site_name) {
      addTag(createOpenGraphTag("site_name", config.openGraph.site_name));
    }
    if (config.openGraph.profile) {
      if (config.openGraph.profile.firstName) {
        addTag(createOpenGraphTag("profile:first_name", config.openGraph.profile.firstName));
      }
      if (config.openGraph.profile.lastName) {
        addTag(createOpenGraphTag("profile:last_name", config.openGraph.profile.lastName));
      }
      if (config.openGraph.profile.username) {
        addTag(createOpenGraphTag("profile:username", config.openGraph.profile.username));
      }
      if (config.openGraph.profile.gender) {
        addTag(createOpenGraphTag("profile:gender", config.openGraph.profile.gender));
      }
    }
    if (config.openGraph.book) {
      if (config.openGraph.book.authors && config.openGraph.book.authors.length) {
        config.openGraph.book.authors.forEach((author) => {
          addTag(createOpenGraphTag("book:author", author));
        });
      }
      if (config.openGraph.book.isbn) {
        addTag(createOpenGraphTag("book:isbn", config.openGraph.book.isbn));
      }
      if (config.openGraph.book.releaseDate) {
        addTag(createOpenGraphTag("book:release_date", config.openGraph.book.releaseDate));
      }
      if (config.openGraph.book.tags && config.openGraph.book.tags.length) {
        config.openGraph.book.tags.forEach((tag) => {
          addTag(createOpenGraphTag("book:tag", tag));
        });
      }
    }
    if (config.openGraph.article) {
      if (config.openGraph.article.publishedTime) {
        addTag(createOpenGraphTag("article:published_time", config.openGraph.article.publishedTime));
      }
      if (config.openGraph.article.modifiedTime) {
        addTag(createOpenGraphTag("article:modified_time", config.openGraph.article.modifiedTime));
      }
      if (config.openGraph.article.expirationTime) {
        addTag(createOpenGraphTag("article:expiration_time", config.openGraph.article.expirationTime));
      }
      if (config.openGraph.article.authors && config.openGraph.article.authors.length) {
        config.openGraph.article.authors.forEach((author) => {
          addTag(createOpenGraphTag("article:author", author));
        });
      }
      if (config.openGraph.article.section) {
        addTag(createOpenGraphTag("article:section", config.openGraph.article.section));
      }
      if (config.openGraph.article.tags && config.openGraph.article.tags.length) {
        config.openGraph.article.tags.forEach((tag) => {
          addTag(createOpenGraphTag("article:tag", tag));
        });
      }
    }
    if (config.openGraph.video) {
      if (config.openGraph.video.actors && config.openGraph.video.actors.length) {
        config.openGraph.video.actors.forEach((actor) => {
          addTag(createOpenGraphTag("video:actor", actor.profile));
          if (actor.role) {
            addTag(createOpenGraphTag("video:actor:role", actor.role));
          }
        });
      }
      if (config.openGraph.video.directors && config.openGraph.video.directors.length) {
        config.openGraph.video.directors.forEach((director) => {
          addTag(createOpenGraphTag("video:director", director));
        });
      }
      if (config.openGraph.video.writers && config.openGraph.video.writers.length) {
        config.openGraph.video.writers.forEach((writer) => {
          addTag(createOpenGraphTag("video:writer", writer));
        });
      }
      if (config.openGraph.video.duration) {
        addTag(createOpenGraphTag("video:duration", config.openGraph.video.duration.toString()));
      }
      if (config.openGraph.video.releaseDate) {
        addTag(createOpenGraphTag("video:release_date", config.openGraph.video.releaseDate));
      }
      if (config.openGraph.video.tags && config.openGraph.video.tags.length) {
        config.openGraph.video.tags.forEach((tag) => {
          addTag(createOpenGraphTag("video:tag", tag));
        });
      }
      if (config.openGraph.video.series) {
        addTag(createOpenGraphTag("video:series", config.openGraph.video.series));
      }
    }
  }
  if (config.facebook && config.facebook.appId) {
    addTag(createMetaTag({ property: "fb:app_id", content: config.facebook.appId }));
  }
  if (config.twitter) {
    if (config.twitter.cardType) {
      addTag(createMetaTag({ name: "twitter:card", content: config.twitter.cardType }));
    }
    if (config.twitter.site) {
      addTag(createMetaTag({ name: "twitter:site", content: config.twitter.site }));
    }
    if (config.twitter.handle) {
      addTag(createMetaTag({ name: "twitter:creator", content: config.twitter.handle }));
    }
  }
  if (config.additionalMetaTags && config.additionalMetaTags.length > 0) {
    config.additionalMetaTags.forEach((metaTag) => {
      const attributes = {
        content: metaTag.content
      };
      if ("name" in metaTag && metaTag.name) {
        attributes.name = metaTag.name;
      } else if ("property" in metaTag && metaTag.property) {
        attributes.property = metaTag.property;
      } else if ("httpEquiv" in metaTag && metaTag.httpEquiv) {
        attributes["http-equiv"] = metaTag.httpEquiv;
      }
      addTag(createMetaTag(attributes));
    });
  }
  if (config.additionalLinkTags && config.additionalLinkTags.length > 0) {
    config.additionalLinkTags.forEach((linkTag) => {
      const attributes = {
        rel: linkTag.rel,
        href: linkTag.href
      };
      if (linkTag.sizes) {
        attributes.sizes = linkTag.sizes;
      }
      if (linkTag.media) {
        attributes.media = linkTag.media;
      }
      if (linkTag.type) {
        attributes.type = linkTag.type;
      }
      if (linkTag.color) {
        attributes.color = linkTag.color;
      }
      if (linkTag.as) {
        attributes.as = linkTag.as;
      }
      if (linkTag.crossOrigin) {
        attributes.crossorigin = linkTag.crossOrigin;
      }
      addTag(createLinkTag(attributes));
    });
  }
  return tagsToRender.trim();
};

const $$Astro$h = createAstro("https://nhavantuonglai.com");
const $$AstroSeo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$AstroSeo;
  const {
    title,
    titleTemplate,
    noindex,
    nofollow,
    robotsProps,
    description,
    canonical,
    mobileAlternate,
    languageAlternates,
    openGraph,
    facebook,
    twitter,
    additionalMetaTags,
    additionalLinkTags
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(buildTags({
    title,
    titleTemplate,
    noindex,
    nofollow,
    robotsProps,
    description,
    canonical,
    mobileAlternate,
    languageAlternates,
    openGraph,
    facebook,
    twitter,
    additionalMetaTags,
    additionalLinkTags
  }))}` })}`;
}, "D:/Onebook/nhavantuonglai-vn/node_modules/@astrolib/seo/src/AstroSeo.astro", void 0);

function isImageMetadata(src) {
  return src.fsPath && !("fsPath" in src);
}

async function probe(url) {
  const response = await fetch(url);
  if (!response.body || !response.ok) {
    throw new Error("Failed to fetch image");
  }
  const reader = response.body.getReader();
  let done, value;
  let accumulatedChunks = new Uint8Array();
  while (!done) {
    const readResult = await reader.read();
    done = readResult.done;
    if (done) break;
    if (readResult.value) {
      value = readResult.value;
      let tmp = new Uint8Array(accumulatedChunks.length + value.length);
      tmp.set(accumulatedChunks, 0);
      tmp.set(value, accumulatedChunks.length);
      accumulatedChunks = tmp;
      try {
        const dimensions = lookup(accumulatedChunks);
        if (dimensions) {
          await reader.cancel();
          return dimensions;
        }
      } catch (error) {
      }
    }
  }
  throw new Error("Failed to parse the size");
}

async function getConfiguredImageService() {
  if (!globalThis?.astroAsset?.imageService) {
    const { default: service } = await import(
      // @ts-expect-error
      './astro/assets-service_DtANj-ih.mjs'
    ).then(n => n.s).catch((e) => {
      const error = new AstroError(InvalidImageService);
      error.cause = e;
      throw error;
    });
    if (!globalThis.astroAsset) globalThis.astroAsset = {};
    globalThis.astroAsset.imageService = service;
    return service;
  }
  return globalThis.astroAsset.imageService;
}
async function getImage$1(options, imageConfig) {
  if (!options || typeof options !== "object") {
    throw new AstroError({
      ...ExpectedImageOptions,
      message: ExpectedImageOptions.message(JSON.stringify(options))
    });
  }
  if (typeof options.src === "undefined") {
    throw new AstroError({
      ...ExpectedImage,
      message: ExpectedImage.message(
        options.src,
        "undefined",
        JSON.stringify(options)
      )
    });
  }
  if (isImageMetadata(options)) {
    throw new AstroError(ExpectedNotESMImage);
  }
  const service = await getConfiguredImageService();
  const resolvedOptions = {
    ...options,
    src: await resolveSrc(options.src)
  };
  if (options.inferSize && isRemoteImage(resolvedOptions.src)) {
    try {
      const result = await probe(resolvedOptions.src);
      resolvedOptions.width ??= result.width;
      resolvedOptions.height ??= result.height;
      delete resolvedOptions.inferSize;
    } catch {
      throw new AstroError({
        ...FailedToFetchRemoteImageDimensions,
        message: FailedToFetchRemoteImageDimensions.message(resolvedOptions.src)
      });
    }
  }
  const originalFilePath = isESMImportedImage(resolvedOptions.src) ? resolvedOptions.src.fsPath : void 0;
  const clonedSrc = isESMImportedImage(resolvedOptions.src) ? (
    // @ts-expect-error - clone is a private, hidden prop
    resolvedOptions.src.clone ?? resolvedOptions.src
  ) : resolvedOptions.src;
  resolvedOptions.src = clonedSrc;
  const validatedOptions = service.validateOptions ? await service.validateOptions(resolvedOptions, imageConfig) : resolvedOptions;
  const srcSetTransforms = service.getSrcSet ? await service.getSrcSet(validatedOptions, imageConfig) : [];
  let imageURL = await service.getURL(validatedOptions, imageConfig);
  let srcSets = await Promise.all(
    srcSetTransforms.map(async (srcSet) => ({
      transform: srcSet.transform,
      url: await service.getURL(srcSet.transform, imageConfig),
      descriptor: srcSet.descriptor,
      attributes: srcSet.attributes
    }))
  );
  if (isLocalService(service) && globalThis.astroAsset.addStaticImage && !(isRemoteImage(validatedOptions.src) && imageURL === validatedOptions.src)) {
    const propsToHash = service.propertiesToHash ?? DEFAULT_HASH_PROPS;
    imageURL = globalThis.astroAsset.addStaticImage(
      validatedOptions,
      propsToHash,
      originalFilePath
    );
    srcSets = srcSetTransforms.map((srcSet) => ({
      transform: srcSet.transform,
      url: globalThis.astroAsset.addStaticImage(srcSet.transform, propsToHash, originalFilePath),
      descriptor: srcSet.descriptor,
      attributes: srcSet.attributes
    }));
  }
  return {
    rawOptions: resolvedOptions,
    options: validatedOptions,
    src: imageURL,
    srcSet: {
      values: srcSets,
      attribute: srcSets.map((srcSet) => `${srcSet.url} ${srcSet.descriptor}`).join(", ")
    },
    attributes: service.getHTMLAttributes !== void 0 ? await service.getHTMLAttributes(validatedOptions, imageConfig) : {}
  };
}

const $$Astro$g = createAstro("https://nhavantuonglai.com");
const $$Image$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Image$1;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  const image = await getImage(props);
  const additionalAttributes = {};
  if (image.srcSet.values.length > 0) {
    additionalAttributes.srcset = image.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(additionalAttributes)}${spreadAttributes(image.attributes)}>`;
}, "D:/Onebook/nhavantuonglai-vn/node_modules/astro/components/Image.astro", void 0);

const $$Astro$f = createAstro("https://nhavantuonglai.com");
const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Picture;
  const defaultFormats = ["webp"];
  const defaultFallbackFormat = "png";
  const specialFormatsFallback = ["gif", "svg", "jpg", "jpeg"];
  const { formats = defaultFormats, pictureAttributes = {}, fallbackFormat, ...props } = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  const scopedStyleClass = props.class?.match(/\bastro-\w{8}\b/)?.[0];
  if (scopedStyleClass) {
    if (pictureAttributes.class) {
      pictureAttributes.class = `${pictureAttributes.class} ${scopedStyleClass}`;
    } else {
      pictureAttributes.class = scopedStyleClass;
    }
  }
  for (const key in props) {
    if (key.startsWith("data-astro-cid")) {
      pictureAttributes[key] = props[key];
    }
  }
  const originalSrc = await resolveSrc(props.src);
  const optimizedImages = await Promise.all(
    formats.map(
      async (format) => await getImage({
        ...props,
        src: originalSrc,
        format,
        widths: props.widths,
        densities: props.densities
      })
    )
  );
  let resultFallbackFormat = fallbackFormat ?? defaultFallbackFormat;
  if (!fallbackFormat && isESMImportedImage(originalSrc) && specialFormatsFallback.includes(originalSrc.format)) {
    resultFallbackFormat = originalSrc.format;
  }
  const fallbackImage = await getImage({
    ...props,
    format: resultFallbackFormat,
    widths: props.widths,
    densities: props.densities
  });
  const imgAdditionalAttributes = {};
  const sourceAdditionalAttributes = {};
  if (props.sizes) {
    sourceAdditionalAttributes.sizes = props.sizes;
  }
  if (fallbackImage.srcSet.values.length > 0) {
    imgAdditionalAttributes.srcset = fallbackImage.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<picture${spreadAttributes(pictureAttributes)}> ${Object.entries(optimizedImages).map(([_, image]) => {
    const srcsetAttribute = props.densities || !props.densities && !props.widths ? `${image.src}${image.srcSet.values.length > 0 ? ", " + image.srcSet.attribute : ""}` : image.srcSet.attribute;
    return renderTemplate`<source${addAttribute(srcsetAttribute, "srcset")}${addAttribute(mime.lookup(image.options.format ?? image.src) ?? `image/${image.options.format}`, "type")}${spreadAttributes(sourceAdditionalAttributes)}>`;
  })} <img${addAttribute(fallbackImage.src, "src")}${spreadAttributes(imgAdditionalAttributes)}${spreadAttributes(fallbackImage.attributes)}> </picture>`;
}, "D:/Onebook/nhavantuonglai-vn/node_modules/astro/components/Picture.astro", void 0);

const imageConfig = {"service":{"entrypoint":"astro/assets/services/squoosh","config":{}},"domains":[],"remotePatterns":[]};
					const getImage = async (options) => await getImage$1(options, imageConfig);

const load$1 = async function() {
  let images = void 0;
  try {
    images = /* #__PURE__ */ Object.assign({});
  } catch (e) {
  }
  return images;
};
let _images = void 0;
const fetchLocalImages = async () => {
  _images = _images || await load$1();
  return _images;
};
const findImage = async (imagePath) => {
  if (typeof imagePath !== "string") {
    return imagePath;
  }
  if (imagePath.startsWith("http://") || imagePath.startsWith("https://") || imagePath.startsWith("/")) {
    return imagePath;
  }
  if (!imagePath.startsWith("~/assets/images")) {
    return imagePath;
  }
  const images = await fetchLocalImages();
  const key = imagePath.replace("~/", "/src/");
  return images && typeof images[key] === "function" ? (await images[key]())["default"] : null;
};
const adaptOpenGraphImages = async (openGraph = {}, astroSite = new URL("")) => {
  if (!openGraph?.images?.length) {
    return openGraph;
  }
  const images = openGraph.images;
  const defaultWidth = 1200;
  const defaultHeight = 626;
  const adaptedImages = await Promise.all(
    images.map(async (image) => {
      if (image?.url) {
        const resolvedImage = await findImage(image.url);
        if (!resolvedImage) {
          return {
            url: ""
          };
        }
        const _image = await getImage({
          src: resolvedImage,
          alt: "Placeholder alt",
          width: image?.width || defaultWidth,
          height: image?.height || defaultHeight
        });
        if (typeof _image === "object") {
          return {
            url: "src" in _image && typeof _image.src === "string" ? String(new URL(_image.src, astroSite)) : "pepe",
            width: "width" in _image && typeof _image.width === "number" ? _image.width : void 0,
            height: "height" in _image && typeof _image.height === "number" ? _image.height : void 0
          };
        }
        return {
          url: ""
        };
      }
      return {
        url: ""
      };
    })
  );
  return { ...openGraph, ...adaptedImages ? { images: adaptedImages } : {} };
};

const $$Astro$e = createAstro("https://nhavantuonglai.com");
const $$Metadata = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Metadata;
  const {
    title,
    ignoreTitleTemplate = false,
    canonical = String(getCanonical(String(Astro2.url.pathname))),
    robots = {},
    description,
    openGraph = {},
    twitter = {}
  } = Astro2.props;
  const seoProps = merge(
    {
      title: "",
      titleTemplate: "%s",
      canonical,
      noindex: true,
      nofollow: true,
      description: void 0,
      openGraph: {
        url: canonical,
        site_name: SITE?.name,
        images: [],
        locale: I18N?.language ,
        type: "website"
      },
      twitter: {
        cardType: openGraph?.images?.length ? "summary_large_image" : "summary"
      }
    },
    {
      title: METADATA?.title?.default,
      titleTemplate: METADATA?.title?.template,
      noindex: !METADATA.robots.index ,
      nofollow: !METADATA.robots.follow ,
      description: METADATA?.description,
      openGraph: METADATA?.openGraph,
      twitter: METADATA?.twitter
    },
    {
      title,
      titleTemplate: ignoreTitleTemplate ? "%s" : void 0,
      canonical,
      noindex: typeof robots?.index !== "undefined" ? !robots.index : void 0,
      nofollow: typeof robots?.follow !== "undefined" ? !robots.follow : void 0,
      description,
      openGraph: { url: canonical, ...openGraph },
      twitter
    }
  );
  return renderTemplate`${renderComponent($$result, "AstroSeo", $$AstroSeo, { ...{ ...seoProps, openGraph: await adaptOpenGraphImages(seoProps?.openGraph, Astro2.site) } })}`;
}, "D:/Onebook/nhavantuonglai-vn/src/components/common/metadata.astro", void 0);

const $$SiteVerification = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${SITE.googleSiteVerificationId && renderTemplate`<meta name="google-site-verification"${addAttribute(SITE.googleSiteVerificationId, "content")}>`}`;
}, "D:/Onebook/nhavantuonglai-vn/src/components/common/site-verification.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$Analytics = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderTemplate(_a$2 || (_a$2 = __template$2(["<script>\n	(function(w,d,s,l,i)\n	{w[l]=w[l]||[];\n		w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});\n		var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;\n		j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n	})\n	(window,document,'script','dataLayer','GTM-KPF6LHF');\n<\/script>"])))}`;
}, "D:/Onebook/nhavantuonglai-vn/src/components/common/analytics.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$BasicScripts = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["<script>(function(){", "\n	if (window.basic_script) {\n		return;\n	}\n\n	window.basic_script = true;\n\n	function applyTheme(theme) {\n		if (theme === 'dark') {\n			document.documentElement.classList.add('dark');\n		} else {\n			document.documentElement.classList.remove('dark');\n		}\n	}\n\n	const initTheme = function () {\n		if ((defaultTheme && defaultTheme.endsWith(':only')) || (!localStorage.theme && defaultTheme !== 'system')) {\n			applyTheme(defaultTheme.replace(':only', ''));\n		} else if (\n			localStorage.theme === 'dark' ||\n			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)\n		) {\n			applyTheme('dark');\n		} else {\n			applyTheme('light');\n		}\n	};\n	initTheme();\n\n	function attachEvent(selector, event, fn) {\n		const matches = typeof selector === 'string' ? document.querySelectorAll(selector) : selector;\n		if (matches && matches.length) {\n			matches.forEach((elem) =>{\n				elem.addEventListener(event, (e) =>fn(e, elem), false);\n			});\n		}\n	}\n\n	const onLoad = function () {\n		let lastKnownScrollPosition = window.scrollY;\n		let ticking = true;\n\n		attachEvent('#header nav', 'click', function () {\n			document.querySelector('[data-aw-toggle-menu]')?.classList.remove('expanded');\n			document.body.classList.remove('overflow-hidden');\n			document.getElementById('header')?.classList.remove('h-screen');\n			document.getElementById('header')?.classList.remove('expanded');\n			document.getElementById('header')?.classList.remove('bg-page');\n			document.querySelector('#header nav')?.classList.add('hidden');\n			document.querySelector('#header >div >div:last-child')?.classList.add('hidden');\n		});\n\n		attachEvent('[data-aw-toggle-menu]', 'click', function (_, elem) {\n			elem.classList.toggle('expanded');\n			document.body.classList.toggle('overflow-hidden');\n			document.getElementById('header')?.classList.toggle('h-screen');\n			document.getElementById('header')?.classList.toggle('expanded');\n			document.getElementById('header')?.classList.toggle('bg-page');\n			document.querySelector('#header nav')?.classList.toggle('hidden');\n			document.querySelector('#header >div >div:last-child')?.classList.toggle('hidden');\n		});\n\n		attachEvent('[data-aw-toggle-color-scheme]', 'click', function () {\n			if (defaultTheme.endsWith(':only')) {\n				return;\n			}\n			document.documentElement.classList.toggle('dark');\n			localStorage.theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';\n		});\n\n		attachEvent('[data-aw-social-share]', 'click', function (_, elem) {\n			const network = elem.getAttribute('data-aw-social-share');\n			const url = encodeURIComponent(elem.getAttribute('data-aw-url'));\n			const text = encodeURIComponent(elem.getAttribute('data-aw-text'));\n\n			let href;\n			switch (network) {\n				case 'facebook':\n					href = `https://www.facebook.com/sharer.php?u=${url}`;\n					break;\n				case 'twitter':\n					href = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;\n					break;\n				case 'linkedin':\n					href = `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${text}`;\n					break;\n				case 'whatsapp':\n					href = `https://wa.me/?text=${text}%20${url}`;\n					break;\n				case 'mail':\n					href = `mailto:?subject=%22${text}%22&body=${text}%20${url}`;\n					break;\n\n				default:\n					return;\n			}\n\n			const newlink = document.createElement('a');\n			newlink.target = '_blank';\n			newlink.href = href;\n			newlink.click();\n		});\n\n		let screenSize = window.matchMedia('(max-width: 767px)');\n		screenSize.addEventListener('change', function () {\n			document.querySelector('[data-aw-toggle-menu]')?.classList.remove('expanded');\n			document.body.classList.remove('overflow-hidden');\n			document.getElementById('header')?.classList.remove('h-screen');\n			document.getElementById('header')?.classList.remove('expanded');\n			document.getElementById('header')?.classList.remove('bg-page');\n			document.querySelector('#header nav')?.classList.add('hidden');\n			document.querySelector('#header >div >div:last-child')?.classList.add('hidden');\n		});\n\n		function applyHeaderStylesOnScroll() {\n			const header = document.querySelector('#header[data-aw-sticky-header]');\n			if (lastKnownScrollPosition >60 && !header.classList.contains('scroll')) {\n				document.getElementById('header').classList.add('scroll');\n			} else if (lastKnownScrollPosition <= 60 && header.classList.contains('scroll')) {\n				document.getElementById('header').classList.remove('scroll');\n			}\n			ticking = false;\n		}\n		applyHeaderStylesOnScroll();\n\n		attachEvent([document], 'scroll', function () {\n			lastKnownScrollPosition = window.scrollY;\n\n			if (!ticking) {\n				window.requestAnimationFrame(() =>{\n					applyHeaderStylesOnScroll();\n				});\n				ticking = true;\n			}\n		});\n	};\n	const onPageShow = function () {\n		document.documentElement.classList.add('motion-safe:scroll-smooth');\n		const elem = document.querySelector('[data-aw-toggle-menu]');\n		if (elem) {\n			elem.classList.remove('expanded');\n		}\n		document.body.classList.remove('overflow-hidden');\n		document.getElementById('header')?.classList.remove('h-screen');\n		document.getElementById('header')?.classList.remove('expanded');\n		document.querySelector('#header nav')?.classList.add('hidden');\n	};\n\n	window.onload = onLoad;\n	window.onpageshow = onPageShow;\n\n	document.addEventListener('astro:after-swap', () =>{\n		initTheme();\n		onLoad();\n		onPageShow();\n	});\n})();<\/script>"], ["<script>(function(){", "\n	if (window.basic_script) {\n		return;\n	}\n\n	window.basic_script = true;\n\n	function applyTheme(theme) {\n		if (theme === 'dark') {\n			document.documentElement.classList.add('dark');\n		} else {\n			document.documentElement.classList.remove('dark');\n		}\n	}\n\n	const initTheme = function () {\n		if ((defaultTheme && defaultTheme.endsWith(':only')) || (!localStorage.theme && defaultTheme !== 'system')) {\n			applyTheme(defaultTheme.replace(':only', ''));\n		} else if (\n			localStorage.theme === 'dark' ||\n			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)\n		) {\n			applyTheme('dark');\n		} else {\n			applyTheme('light');\n		}\n	};\n	initTheme();\n\n	function attachEvent(selector, event, fn) {\n		const matches = typeof selector === 'string' ? document.querySelectorAll(selector) : selector;\n		if (matches && matches.length) {\n			matches.forEach((elem) =>{\n				elem.addEventListener(event, (e) =>fn(e, elem), false);\n			});\n		}\n	}\n\n	const onLoad = function () {\n		let lastKnownScrollPosition = window.scrollY;\n		let ticking = true;\n\n		attachEvent('#header nav', 'click', function () {\n			document.querySelector('[data-aw-toggle-menu]')?.classList.remove('expanded');\n			document.body.classList.remove('overflow-hidden');\n			document.getElementById('header')?.classList.remove('h-screen');\n			document.getElementById('header')?.classList.remove('expanded');\n			document.getElementById('header')?.classList.remove('bg-page');\n			document.querySelector('#header nav')?.classList.add('hidden');\n			document.querySelector('#header >div >div:last-child')?.classList.add('hidden');\n		});\n\n		attachEvent('[data-aw-toggle-menu]', 'click', function (_, elem) {\n			elem.classList.toggle('expanded');\n			document.body.classList.toggle('overflow-hidden');\n			document.getElementById('header')?.classList.toggle('h-screen');\n			document.getElementById('header')?.classList.toggle('expanded');\n			document.getElementById('header')?.classList.toggle('bg-page');\n			document.querySelector('#header nav')?.classList.toggle('hidden');\n			document.querySelector('#header >div >div:last-child')?.classList.toggle('hidden');\n		});\n\n		attachEvent('[data-aw-toggle-color-scheme]', 'click', function () {\n			if (defaultTheme.endsWith(':only')) {\n				return;\n			}\n			document.documentElement.classList.toggle('dark');\n			localStorage.theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';\n		});\n\n		attachEvent('[data-aw-social-share]', 'click', function (_, elem) {\n			const network = elem.getAttribute('data-aw-social-share');\n			const url = encodeURIComponent(elem.getAttribute('data-aw-url'));\n			const text = encodeURIComponent(elem.getAttribute('data-aw-text'));\n\n			let href;\n			switch (network) {\n				case 'facebook':\n					href = \\`https://www.facebook.com/sharer.php?u=\\${url}\\`;\n					break;\n				case 'twitter':\n					href = \\`https://twitter.com/intent/tweet?url=\\${url}&text=\\${text}\\`;\n					break;\n				case 'linkedin':\n					href = \\`https://www.linkedin.com/shareArticle?mini=true&url=\\${url}&title=\\${text}\\`;\n					break;\n				case 'whatsapp':\n					href = \\`https://wa.me/?text=\\${text}%20\\${url}\\`;\n					break;\n				case 'mail':\n					href = \\`mailto:?subject=%22\\${text}%22&body=\\${text}%20\\${url}\\`;\n					break;\n\n				default:\n					return;\n			}\n\n			const newlink = document.createElement('a');\n			newlink.target = '_blank';\n			newlink.href = href;\n			newlink.click();\n		});\n\n		let screenSize = window.matchMedia('(max-width: 767px)');\n		screenSize.addEventListener('change', function () {\n			document.querySelector('[data-aw-toggle-menu]')?.classList.remove('expanded');\n			document.body.classList.remove('overflow-hidden');\n			document.getElementById('header')?.classList.remove('h-screen');\n			document.getElementById('header')?.classList.remove('expanded');\n			document.getElementById('header')?.classList.remove('bg-page');\n			document.querySelector('#header nav')?.classList.add('hidden');\n			document.querySelector('#header >div >div:last-child')?.classList.add('hidden');\n		});\n\n		function applyHeaderStylesOnScroll() {\n			const header = document.querySelector('#header[data-aw-sticky-header]');\n			if (lastKnownScrollPosition >60 && !header.classList.contains('scroll')) {\n				document.getElementById('header').classList.add('scroll');\n			} else if (lastKnownScrollPosition <= 60 && header.classList.contains('scroll')) {\n				document.getElementById('header').classList.remove('scroll');\n			}\n			ticking = false;\n		}\n		applyHeaderStylesOnScroll();\n\n		attachEvent([document], 'scroll', function () {\n			lastKnownScrollPosition = window.scrollY;\n\n			if (!ticking) {\n				window.requestAnimationFrame(() =>{\n					applyHeaderStylesOnScroll();\n				});\n				ticking = true;\n			}\n		});\n	};\n	const onPageShow = function () {\n		document.documentElement.classList.add('motion-safe:scroll-smooth');\n		const elem = document.querySelector('[data-aw-toggle-menu]');\n		if (elem) {\n			elem.classList.remove('expanded');\n		}\n		document.body.classList.remove('overflow-hidden');\n		document.getElementById('header')?.classList.remove('h-screen');\n		document.getElementById('header')?.classList.remove('expanded');\n		document.querySelector('#header nav')?.classList.add('hidden');\n	};\n\n	window.onload = onLoad;\n	window.onpageshow = onPageShow;\n\n	document.addEventListener('astro:after-swap', () =>{\n		initTheme();\n		onLoad();\n		onPageShow();\n	});\n})();<\/script>"])), defineScriptVars({ defaultTheme: UI.theme }));
}, "D:/Onebook/nhavantuonglai-vn/src/components/common/basic-scripts.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$d = createAstro("https://nhavantuonglai.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Layout;
  const { metadata = {} } = Astro2.props;
  const { language, textDirection } = I18N;
  return renderTemplate(_a || (_a = __template(["<html", "", ' class="2xl:text-[20px]"> <head><script defer src="https://data.nhavantuonglai.com/javascript/floating.js"><\/script>', "", "", "", "", "", "", "", '</head> <body class="antialiased text-default bg-page tracking-tight"> ', " ", '   <div id="fb-root"></div> <script async defer crossorigin="anonymous" src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v20.0&appId=992983159168871" nonce="CErKuz80"><\/script> </body> </html>'])), addAttribute(language, "lang"), addAttribute(textDirection, "dir"), renderComponent($$result, "CommonMeta", $$CommonMeta, {}), renderComponent($$result, "Favicons", $$Favicons, {}), renderComponent($$result, "CustomStyles", $$CustomStyles, {}), renderComponent($$result, "ApplyColorMode", $$ApplyColorMode, {}), renderComponent($$result, "Metadata", $$Metadata, { ...metadata }), renderComponent($$result, "SiteVerification", $$SiteVerification, {}), renderComponent($$result, "Analytics", $$Analytics, {}), renderHead(), renderSlot($$result, $$slots["default"]), renderComponent($$result, "BasicScripts", $$BasicScripts, {}));
}, "D:/Onebook/nhavantuonglai-vn/src/layouts/layout.astro", void 0);


const cache = /* @__PURE__ */ new WeakMap();

const $$Astro$c = createAstro("https://nhavantuonglai.com");
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Icon;
  class AstroIconError extends Error {
    constructor(message) {
      super(message);
    }
  }
  const req = Astro2.request;
  const { name = "", title, "is:inline": inline = false, ...props } = Astro2.props;
  const map = cache.get(req) ?? /* @__PURE__ */ new Map();
  const i = map.get(name) ?? 0;
  map.set(name, i + 1);
  cache.set(req, map);
  const includeSymbol = !inline && i === 0;
  let [setName, iconName] = name.split(":");
  if (!setName && iconName) {
    const err = new AstroIconError(`Invalid "name" provided!`);
    throw err;
  }
  if (!iconName) {
    iconName = setName;
    setName = "local";
    if (!icons[setName]) {
      const err = new AstroIconError('Unable to load the "local" icon set!');
      throw err;
    }
    if (!(iconName in icons[setName].icons)) {
      const err = new AstroIconError(`Unable to locate "${name}" icon!`);
      throw err;
    }
  }
  const collection = icons[setName];
  if (!collection) {
    const err = new AstroIconError(`Unable to locate the "${setName}" icon set!`);
    throw err;
  }
  const iconData = getIconData(collection, iconName ?? setName);
  if (!iconData) {
    const err = new AstroIconError(`Unable to locate "${name}" icon!`);
    throw err;
  }
  const id = `ai:${collection.prefix}:${iconName ?? setName}`;
  if (props.size) {
    props.width = props.size;
    props.height = props.size;
    delete props.size;
  }
  const renderData = iconToSVG(iconData);
  const normalizedProps = { ...renderData.attributes, ...props };
  const normalizedBody = renderData.body;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(normalizedProps)}${addAttribute(name, "data-icon")}> ${title && renderTemplate`<title>${title}</title>`} ${inline ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "id": id }, { "default": ($$result2) => renderTemplate`${unescapeHTML(normalizedBody)}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${includeSymbol && renderTemplate`<symbol${addAttribute(id, "id")}>${unescapeHTML(normalizedBody)}</symbol>`}<use${addAttribute(`#${id}`, "xlink:href")}></use> ` })}`} </svg>`;
}, "D:/Onebook/nhavantuonglai-vn/node_modules/astro-icon/components/Icon.astro", void 0);

const $$Logo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<span class="self-center ml-2 rtl:ml-0 rtl:mr-2 text-2xl md:text-xl font-bold text-gray-900 whitespace-nowrap dark:text-white"> <img src="https://data.nhavantuonglai.com/image/favicon/favicon.ico" width="50" height="50" alt="nhavantuonglai"> </span>`;
}, "D:/Onebook/nhavantuonglai-vn/src/components/logo.astro", void 0);

const $$Astro$b = createAstro("https://nhavantuonglai.com");
const $$ToggleTheme = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$ToggleTheme;
  const {
    label = "Toggle between Dark and Light mode",
    class: className = "text-muted dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center",
    iconClass = "w-6 h-6",
    iconName = "tabler:sun"
  } = Astro2.props;
  return renderTemplate`${!(UI.theme.endsWith(":only")) && renderTemplate`${maybeRenderHead()}<button type="button"${addAttribute(className, "class")}${addAttribute(label, "aria-label")} data-aw-toggle-color-scheme>${renderComponent($$result, "Icon", $$Icon, { "name": iconName, "class": iconClass })}</button>`}`;
}, "D:/Onebook/nhavantuonglai-vn/src/components/common/toggle-theme.astro", void 0);

const $$Astro$a = createAstro("https://nhavantuonglai.com");
const $$ToggleMenu = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$ToggleMenu;
  const {
    label = "Toggle Menu",
    class: className = "flex flex-col h-12 w-12 rounded justify-center items-center cursor-pointer group"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button${addAttribute(className, "class")}${addAttribute(label, "aria-label")} data-aw-toggle-menu> <span class="sr-only">${label}</span> ${renderSlot($$result, $$slots["default"], renderTemplate` <span aria-hidden="true" class="h-0.5 w-6 my-1 rounded-full bg-black dark:bg-white transition ease transform duration-200 opacity-80 group-[.expanded]:rotate-45 group-[.expanded]:translate-y-2.5"></span> <span aria-hidden="true" class="h-0.5 w-6 my-1 rounded-full bg-black dark:bg-white transition ease transform duration-200 opacity-80 group-[.expanded]:opacity-0"></span> <span aria-hidden="true" class="h-0.5 w-6 my-1 rounded-full bg-black dark:bg-white transition ease transform duration-200 opacity-80 group-[.expanded]:-rotate-45 group-[.expanded]:-translate-y-2.5"></span> `)} </button>`;
}, "D:/Onebook/nhavantuonglai-vn/src/components/common/toggle-menu.astro", void 0);

const $$Astro$9 = createAstro("https://nhavantuonglai.com");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    variant = "secondary",
    target,
    text = Astro2.slots.render("default"),
    icon = "",
    class: className = "",
    type,
    ...rest
  } = Astro2.props;
  const variants = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    tertiary: "btn btn-tertiary",
    link: "cursor-pointer hover:text-primary"
  };
  return renderTemplate`${type === "button" || type === "submit" || type === "reset" ? renderTemplate`${maybeRenderHead()}<button${addAttribute(type, "type")}${addAttribute(twMerge(variants[variant] || "", className), "class")}${spreadAttributes(rest)}>${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(text)}` })}${icon && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon, "class": "w-5 h-5 ml-1 -mr-1.5 rtl:mr-1 rtl:-ml-1.5 inline-block" })}`}</button>` : renderTemplate`<a${addAttribute(twMerge(variants[variant] || "", className), "class")}${spreadAttributes(target ? { target, rel: "noopener noreferrer" } : {})}${spreadAttributes(rest)} target="_blank">${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(text)}` })}${icon && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon, "class": "w-5 h-5 ml-1 -mr-1.5 rtl:mr-1 rtl:-ml-1.5 inline-block" })}`}</a>`}`;
}, "D:/Onebook/nhavantuonglai-vn/src/components/ui/button.astro", void 0);

const $$Astro$8 = createAstro("https://nhavantuonglai.com");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Header;
  const {
    id = "header",
    links = [],
    actions = [],
    isSticky = false,
    isDark = false,
    isFullWidth = false,
    showToggleTheme = false,
    showRssFeed = false,
    position = "center"
  } = Astro2.props;
  const currentPath = `/${trimSlash(new URL(Astro2.url).pathname)}`;
  return renderTemplate`${maybeRenderHead()}<header${addAttribute([
    { sticky: isSticky, relative: !isSticky, dark: isDark },
    "top-0 z-40 flex-none mx-auto w-full border-b border-gray-50/0 transition-[opacity] ease-in-out absolute inset-0 bg-white dark:bg-black"
  ], "class:list")}${spreadAttributes(isSticky ? { "data-aw-sticky-header": true } : {})}${spreadAttributes(id ? { id } : {})}> ${renderComponent($$result, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result2) => renderTemplate` <div class=""></div> ` })} <div class="absolute inset-0"></div> <div${addAttribute([
    "relative text-default py-3 px-3 md:px-6 mx-auto w-full md:flex md:justify-between",
    {
      "max-w-7xl": !isFullWidth
    }
  ], "class:list")}> <div${addAttribute([{ "mr-auto rtl:mr-0 rtl:ml-auto": position === "right" }, "flex justify-between"], "class:list")}> <a class="flex items-center"${addAttribute(getHomePermalink(), "href")}> ${renderComponent($$result, "Logo", $$Logo, {})} </a> <div class="flex items-center md:hidden"> ${renderComponent($$result, "ToggleMenu", $$ToggleMenu, {})} </div> </div> <nav class="items-center w-full md:w-auto hidden md:flex text-default overflow-y-auto overflow-x-hidden md:overflow-y-visible md:overflow-x-auto md:mx-5" aria-label="Main navigation"> <ul class="flex flex-col md:flex-row md:self-center w-full md:w-auto text-xl md:text-[0.9375rem] tracking-[0.01rem] font-medium"> ${links.map(({ text, href, links: links2 }) => renderTemplate`<li${addAttribute(links2?.length ? "dropdown" : "", "class")}> ${links2?.length ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <button class="hover:text-link dark:hover:text-white px-4 py-3 flex items-center"> ${text} ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:chevron-down", "class": "w-3.5 h-3.5 ml-0.5 rtl:ml-0 rtl:mr-0.5 hidden md:inline" })} </button> <ul class="dropdown-menu md:backdrop-blur-md dark:md:bg-dark rounded md:absolute pl-4 md:pl-0 md:hidden font-medium md:bg-white/90 md:min-w-[200px] drop-shadow-xl"> ${links2.map(({ text: text2, href: href2 }) => renderTemplate`<li> <a${addAttribute([
    "first:rounded-t last:rounded-b md:hover:bg-gray-100 hover:text-link dark:hover:text-white dark:hover:bg-gray-700 py-2 px-5 block whitespace-no-wrap",
    { "aw-link-active": href2 === currentPath }
  ], "class:list")}${addAttribute(href2, "href")}> ${text2} </a> </li>`)} </ul> ` })}` : renderTemplate`<a${addAttribute([
    "hover:text-link dark:hover:text-link px-4 py-3 flex items-centers",
    { "aw-link-active": href === currentPath }
  ], "class:list")}${addAttribute(href, "href")} target="_blank"> ${text} </a>`} </li>`)} </ul> </nav> <div${addAttribute([
    { "ml-auto rtl:ml-0 rtl:mr-auto": position === "left" },
    "hidden md:self-center md:flex items-center md:mb-0 fixed w-full md:w-auto md:static justify-end left-0 rtl:left-auto rtl:right-0 bottom-0 p-3 md:p-0"
  ], "class:list")}> <div class="items-center flex justify-between w-full md:w-auto"> <div class="flex"> ${showToggleTheme && renderTemplate`${renderComponent($$result, "ToggleTheme", $$ToggleTheme, { "iconClass": "w-6 h-6 md:w-5 md:h-5 md:inline-block" })}`} ${showRssFeed && renderTemplate`<a class="text-muted dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center" aria-label="RSS Feed"${addAttribute(getAsset("/rss.xml"), "href")} target="_blank"> ${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:rss", "class": "w-5 h-5" })} </a>`} </div> ${actions?.length ? renderTemplate`<span class="ml-4 rtl:ml-0 rtl:mr-4"> ${actions.map((btnProps) => renderTemplate`${renderComponent($$result, "Button", $$Button, { ...btnProps, "class": "ml-2 py-2.5 px-5.5 md:px-6 font-semibold shadow-none text-sm w-auto" })}`)} </span>` : ""} </div> </div> </div> </header>`;
}, "D:/Onebook/nhavantuonglai-vn/src/components/widgets/header.astro", void 0);

const $$Astro$7 = createAstro("https://nhavantuonglai.com");
const $$Openstatus = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Openstatus;
  const statusEnum = z.enum([
    "operational",
    "degraded_performance",
    "partial_outage",
    "major_outage",
    "under_maintenance",
    "unknown",
    "incident"
  ]);
  const statusSchema = z.object({ status: statusEnum });
  const dictionary = {
    operational: {
      label: "Tr\u1EA1ng th\xE1i",
      color: "bg-green-500"
    },
    degraded_performance: {
      label: "Degraded Performance",
      color: "bg-yellow-500"
    },
    partial_outage: {
      label: "Partial Outage",
      color: "bg-yellow-500"
    },
    major_outage: {
      label: "Major Outage",
      color: "bg-red-500"
    },
    unknown: {
      label: "Unknown",
      color: "bg-gray-500"
    },
    incident: {
      label: "Incident",
      color: "bg-yellow-500"
    },
    under_maintenance: {
      label: "Under Maintenance",
      color: "bg-blue-500"
    }
  };
  Astro2.props.slug;
  const res = await fetch(`https://api.openstatus.dev/public/status/nhavantuonglai`, {
    // @ts-ignore
    next: { revalidate: 60 }
  });
  const data = await res.json();
  const parsed = statusSchema.safeParse(data);
  if (!parsed.success) {
    return null;
  }
  const key = parsed.data.status;
  const { label, color } = dictionary[key];
  return renderTemplate`${maybeRenderHead()}<a class="text-sm text-muted mb-4 md-0 text-foreground/70 inline-flex max-w-fit items-center gap-2 py-1 text-sm rtl:ml-0"${addAttribute(`https://info.nhavantuonglai.com/openstatus`, "href")} target="_blank" rel="noreferrer"> ${label} <span class="relative flex h-2 w-2"> ${parsed.data.status === "operational" ? renderTemplate`<span${addAttribute([
    "absolute",
    "inline-flex",
    "h-full",
    "w-full",
    "animate-ping",
    "rounded-full",
    color,
    "opacity-75",
    "duration-1000"
  ], "class:list")}></span>` : null} <span${addAttribute([
    "relative",
    "inline-flex",
    "h-2",
    "w-2",
    "rounded-full",
    color
  ], "class:list")}></span> </span> </a>`;
}, "D:/Onebook/nhavantuonglai-vn/src/components/widgets/openstatus.astro", void 0);

const $$Dcma = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<a href="//www.dmca.com/Protection/Status.aspx?ID=23017359-d24b-46a6-8b23-3da1b75aa49a" title="nhavantuonglai.com protection status" class="dmca-badge" target="_blank"> <img src="https://images.dmca.com/Badges/dmca_protected_sml_120b.png?ID=23017359-d24b-46a6-8b23-3da1b75aa49a" alt="nhavantuonglai.com protection status"> </a> `;
}, "D:/Onebook/nhavantuonglai-vn/src/components/widgets/dcma.astro", void 0);

const $$Astro$6 = createAstro("https://nhavantuonglai.com");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Footer;
  const { socialLinks = [], secondaryLinks = [], links = [], footNote = "", theme = "light" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<footer${addAttribute([{ dark: theme === "dark" }, "relative border-t border-gray-200 dark:border-slate-800 not-prose"], "class:list")}> <div class="bg-white dark:bg-black absolute inset-0 pointer-events-none" aria-hidden="true"></div> <div class="relative max-w-7xl mx-auto px-4 sm:px-6 dark:text-slate-300"> <div class="grid grid-cols-12 gap-4 gap-y-8 sm:gap-8 py-8 md:py-12"> <div class="col-span-12 lg:col-span-4"> <div class="mb-2"> <a class="inline-block font-bold text-xl"${addAttribute(getHomePermalink(), "href")}><img src="https://data.nhavantuonglai.com/image/favicon/favicon.ico" width="50" height="50" alt="nhavantuonglai"></a> </div> <div class="text-sm text-muted mb-4"> ${secondaryLinks.map(({ text, href }) => renderTemplate`<a class="text-muted hover:text-gray-700 dark:text-gray-400 hover:underline transition duration-150 ease-in-out mr-2 rtl:mr-0 rtl:ml-2"${addAttribute(href, "href")}>${unescapeHTML(text)}</a>`)} </div> ${renderComponent($$result, "DCMA", $$Dcma, {})} </div> ${links.map(({ title, links: links2 }) => renderTemplate`<div class="col-span-6 md:col-span-3 lg:col-span-2"> <div class="dark:text-gray-300 font-medium mb-2">${title}</div> ${links2 && Array.isArray(links2) && links2.length > 0 && renderTemplate`<ul class="text-sm"> ${links2.map(({ text, href, ariaLabel }) => renderTemplate`<li class="mb-2"> <a class="text-muted hover:text-gray-700 hover:underline dark:text-gray-400 transition duration-150 ease-in-out"${addAttribute(href, "href")}${addAttribute(ariaLabel, "aria-label")} target="_blank"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(text)}` })} </a> </li>`)} </ul>`} </div>`)} </div> <div class="md:flex md:items-center md:justify-between py-6 md:py-8"> ${socialLinks?.length ? renderTemplate`<ul class="flex mb-4 md:order-1 -ml-2 md:ml-4 md:mb-0 rtl:ml-0 rtl:-mr-2 rtl:md:ml-0 rtl:md:mr-4"> ${socialLinks.map(({ ariaLabel, href, text, icon }) => renderTemplate`<li> <a class="text-muted dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center"${addAttribute(ariaLabel, "aria-label")}${addAttribute(href, "href")} target="_blank"> ${icon && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon, "class": "w-5 h-5" })}`} ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(text)}` })} </a> </li>`)} </ul>` : ""} ${renderComponent($$result, "Openstatus", $$Openstatus, {})} <div class="text-sm mr-4 dark:text-muted"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(footNote)}` })} </div> </div> </div> </footer>`;
}, "D:/Onebook/nhavantuonglai-vn/src/components/widgets/footer.astro", void 0);

const headerData = {

	links: [
		{
			text: 'Giới thiệu',
			href: 'https://nhavantuonglai.com/about',
		},
		{
			text: 'Bài viết',
			href: 'https://nhavantuonglai.com/article',
		},
		{
			text: 'Dịch vụ',
			href: 'https://nhavantuonglai.com/services',
		},
		{
			text: 'Liên hệ',
			href: 'https://nhavantuonglai.com/contact',
		},
	],

	actions: [{
		text: 'Đọc thêm',
		href: 'https://info.nhavantuonglai.com/instagram',
		target: '_blank'
		}],
};

const footerData = {
	links: [
		{
			title: 'Danh mục',
			links: [
				{
					text: 'Viết lách',
					href: 'https://info.nhavantuonglai.com/viet-lach'
				},
				{
					text: 'Viết thuê',
					href: 'https://info.nhavantuonglai.com/viet-thue'
				},
				{
					text: 'Thư viện',
					href: 'https://info.nhavantuonglai.com/thu-vien'
				},
				{
					text: 'Lập trình',
					href: 'https://info.nhavantuonglai.com/developer'
				},
				],
		},
		{
			title: 'Thư mục',
			links: [
				{
					text: 'Tôn giáo',
					href: 'https://nhavantuonglai.com/tags/ton-giao'
				},
				{
					text: 'SEO',
					href: 'https://nhavantuonglai.com/tags/seo'
				},
				{
					text: 'Âm thanh',
					href: 'https://nhavantuonglai.com/tags/audiophile'
				},
				{
					text: 'Kỹ năng viết',
					href: 'https://nhavantuonglai.com/tags/ky-nang-viet'
				},
			],
		},
		{
			title: 'Tác giả',
			links: [
				{
					text: 'Nguyễn Kỳ Lân',
					href: 'https://nhavantuonglai.com/tags/instagram'
				},
				{
					text: 'Thích Nhất Hạnh',
					href: 'https://nhavantuonglai.com/tags/thich-nhat-hanh'
				},
				{
					text: 'Clifford Stoll',
					href: 'https://nhavantuonglai.com/tags/clifford-stoll'
				},
				{
					text: 'Haruki Murakami',
					href: 'https://nhavantuonglai.com/tags/haruki-murakami'
				},
			],
		},
		{
			title: 'Tác phẩm',
			links: [
				{
					text: 'Đường xưa mây trắng',
					href: 'https://nhavantuonglai.com/tags/duong-xua-may-trang'
				},
				{
					text: 'Niên lịch miền gió cát',
					href: 'https://nhavantuonglai.com/tags/nien-lich-mien-gio-cat'
				},
				{
					text: 'Chim vặn dây cót',
					href: 'https://nhavantuonglai.com/tags/bien-nien-ky-chim-van-day-cot'
				},
				{
					text: 'Thần điêu hiệp lữ',
					href: 'https://nhavantuonglai.com/tags/than-dieu-hiep-lu'
				},
			],
		},
	],
	secondaryLinks: [
		{
			text: 'Điều khoản',
			href: 'https://nhavantuonglai.com/term'
		},
		{
			text: 'Chính sách',
			href: 'https://nhavantuonglai.com/policy'
		},
		{
			text: 'Phiên bản',
			href: 'https://nhavantuonglai.com/version'
		},
	],
	socialLinks: [
		{
			ariaLabel: 'X',
			icon: 'tabler:brand-x',
			href: 'https://info.nhavantuonglai.com/twitter'
		},
		{
			ariaLabel: 'Instagram',
			icon: 'tabler:brand-instagram',
			href: 'https://info.nhavantuonglai.com/instagram'
		},
		{
			ariaLabel: 'Linkedin',
			icon: 'tabler:brand-linkedin',
			href: 'https://info.nhavantuonglai.com/linkedin'
		},
		{
			ariaLabel: 'RSS',
			icon: 'tabler:rss',
			href: getAsset('/rss.xml')
		},
	],
};

const $$Notice = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="dark text-muted text-sm bg-black dark:bg-transparent dark:border-b dark:border-slate-800 dark:text-slate-400 hidden md:flex gap-1 overflow-hidden px-3 py-2 relative text-ellipsis whitespace-nowrap"> <span class="dark:bg-slate-700 bg-white/40 dark:text-slate-300 font-semibold px-1 py-0.5 text-xs mr-0.5 rtl:mr-0 rtl:ml-0.5 inline-block">
v24.04.08:
</span> <a href="https://nhavantuonglai.com/version" class="text-muted hover:underline dark:text-slate-400 font-medium">
Cập nhật tính năng tiến trình đọc bài.
</a> </div>`;
}, "D:/Onebook/nhavantuonglai-vn/src/components/widgets/notice.astro", void 0);

const $$Astro$5 = createAstro("https://nhavantuonglai.com");
const $$PageLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$PageLayout;
  const { metadata } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Notice", $$Notice, {})} ${renderSlot($$result2, $$slots["header"], renderTemplate` ${renderComponent($$result2, "Header", $$Header, { ...headerData, "isSticky": true, "showRssFeed": true, "showToggleTheme": true })} `)} ${maybeRenderHead()}<main> ${renderSlot($$result2, $$slots["default"])} </main> ${renderSlot($$result2, $$slots["footer"], renderTemplate` ${renderComponent($$result2, "Footer", $$Footer, { ...footerData })} `)} ` })}`;
}, "D:/Onebook/nhavantuonglai-vn/src/layouts/page-layout.astro", void 0);

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

const $$Astro$4 = createAstro("https://nhavantuonglai.com");
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
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
}, "D:/Onebook/nhavantuonglai-vn/src/components/common/image.astro", void 0);

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://nhavantuonglai.com", "ASSETS_PREFIX": undefined}, { Path: process.env.Path })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
});

const generatePermalink = async ({
  id,
  slug,
  pubDatetime,
  category
}) => {
  const year = String(pubDatetime.getFullYear()).padStart(4, "0");
  const month = String(pubDatetime.getMonth() + 1).padStart(2, "0");
  const day = String(pubDatetime.getDate()).padStart(2, "0");
  const hour = String(pubDatetime.getHours()).padStart(2, "0");
  const minute = String(pubDatetime.getMinutes()).padStart(2, "0");
  const second = String(pubDatetime.getSeconds()).padStart(2, "0");
  const permalink = POST_PERMALINK_PATTERN.replace("%slug%", slug).replace("%id%", id).replace("%category%", category || "").replace("%year%", year).replace("%month%", month).replace("%day%", day).replace("%hour%", hour).replace("%minute%", minute).replace("%second%", second);
  return permalink.split("/").map((el) => trimSlash(el)).filter((el) => !!el).join("/");
};
const getNormalizedPost = async (post) => {
  const { id, slug: rawSlug = "", data } = post;
  const { Content, remarkPluginFrontmatter } = await post.render();
  const {
    pubDatetime: rawpubDatetime = /* @__PURE__ */ new Date(),
    updateDate: rawUpdateDate,
    title,
    description,
    image,
    tags: rawTags = [],
    category: rawCategory,
    author,
    draft = false,
    metadata = {}
  } = data;
  const slug = cleanSlug(rawSlug);
  const pubDatetime = new Date(rawpubDatetime);
  const updateDate = rawUpdateDate ? new Date(rawUpdateDate) : void 0;
  const category = rawCategory ? cleanSlug(rawCategory) : void 0;
  const tags = rawTags.map((tag) => cleanSlug(tag));
  return {
    id,
    slug,
    permalink: await generatePermalink({ id, slug, pubDatetime, category }),
    pubDatetime,
    updateDate,
    title,
    description,
    image,
    category,
    tags,
    author,
    draft,
    metadata,
    Content,
    readingTime: remarkPluginFrontmatter?.readingTime
  };
};
const getRandomizedPosts = (array, num) => {
  const newArray = [];
  while (newArray.length < num && array.length > 0) {
    const randomIndex = Math.floor(Math.random() * array.length);
    newArray.push(array[randomIndex]);
    array.splice(randomIndex, 1);
  }
  return newArray;
};
const load = async function() {
  const posts = await getCollection("post");
  const normalizedPosts = posts.map(async (post) => await getNormalizedPost(post));
  const results = (await Promise.all(normalizedPosts)).sort((a, b) => b.pubDatetime.valueOf() - a.pubDatetime.valueOf()).filter((post) => !post.draft);
  return results;
};
let _posts;
APP_BLOG.category.isEnabled;
const blogListRobots = APP_BLOG.list.robots;
const blogPostRobots = APP_BLOG.post.robots;
APP_BLOG.category.robots;
const blogTagRobots = APP_BLOG.tag.robots;
const blogPostsPerPage = APP_BLOG?.postsPerPage;
const fetchPosts = async () => {
  if (!_posts) {
    _posts = await load();
  }
  return _posts;
};
const findPostsByIds = async (ids) => {
  if (!Array.isArray(ids)) return [];
  const posts = await fetchPosts();
  return ids.reduce(function(r, id) {
    posts.some(function(post) {
      return id === post.id && r.push(post);
    });
    return r;
  }, []);
};
const findLatestPosts = async ({ count }) => {
  const _count = count || 4;
  const posts = await fetchPosts();
  return posts ? posts.slice(0, _count) : [];
};
const getStaticPathsBlogList = async ({ paginate }) => {
  return paginate(await fetchPosts(), {
    params: { blog: BLOG_BASE || void 0 },
    pageSize: blogPostsPerPage
  });
};
const getStaticPathsBlogPost = async () => {
  return (await fetchPosts()).flatMap((post) => ({
    params: {
      blog: post.permalink
    },
    props: { post }
  }));
};
const getStaticPathsBlogTag = async ({ paginate }) => {
  const posts = await fetchPosts();
  const tags = /* @__PURE__ */ new Set();
  posts.map((post) => {
    Array.isArray(post.tags) && post.tags.map((tag) => tags.add(tag.toLowerCase()));
  });
  return Array.from(tags).flatMap(
    (tag) => paginate(
      posts.filter((post) => Array.isArray(post.tags) && post.tags.find((elem) => elem.toLowerCase() === tag)),
      {
        params: { tag, blog: TAG_BASE || void 0 },
        pageSize: blogPostsPerPage,
        props: { tag }
      }
    )
  );
};
function getRelatedPosts(allPosts, currentSlug, currentTags) {
  const relatedPosts = getRandomizedPosts(
    allPosts.filter((post) => post.slug !== currentSlug && post.tags?.some((tag) => currentTags.includes(tag))),
    APP_BLOG.relatedPostsCount
  );
  if (relatedPosts.length < APP_BLOG.relatedPostsCount) {
    const morePosts = getRandomizedPosts(
      allPosts.filter((post) => post.slug !== currentSlug && !post.tags?.some((tag) => currentTags.includes(tag))),
      APP_BLOG.relatedPostsCount - relatedPosts.length
    );
    relatedPosts.push(...morePosts);
  }
  return relatedPosts;
}

const $$Astro$3 = createAstro("https://nhavantuonglai.com");
const $$Background = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Background;
  const { isDark = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["absolute inset-0", { "bg-dark dark:bg-transparent": isDark }], "class:list")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "D:/Onebook/nhavantuonglai-vn/src/components/ui/background.astro", void 0);

const $$Astro$2 = createAstro("https://nhavantuonglai.com");
const $$WidgetWrapper = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$WidgetWrapper;
  const { id, isDark = false, containerClass = "", bg, as = "section" } = Astro2.props;
  const WrapperTag = as;
  return renderTemplate`${renderComponent($$result, "WrapperTag", WrapperTag, { "class": "relative not-prose scroll-mt-[72px]", ...id ? { id } : {} }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="absolute inset-0 pointer-events-none -z-[1]" aria-hidden="true"> ${renderSlot($$result2, $$slots["bg"], renderTemplate` ${bg ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(bg)}` })}` : renderTemplate`${renderComponent($$result2, "Background", $$Background, { "isDark": isDark })}`} `)} </div> <div${addAttribute([
    twMerge("relative mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16 lg:py-20 text-default", containerClass),
    { dark: isDark }
  ], "class:list")}> ${renderSlot($$result2, $$slots["default"])} </div> ` })}`;
}, "D:/Onebook/nhavantuonglai-vn/src/components/ui/widget-wrapper.astro", void 0);

const $$Astro$1 = createAstro("https://nhavantuonglai.com");
const $$Headline = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
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
  return renderTemplate`${(title || subtitle || tagline) && renderTemplate`${maybeRenderHead()}<div${addAttribute(twMerge("mb-8 md:mx-auto md:mb-12 text-center", containerClass), "class")}>${tagline && renderTemplate`<p class="text-base text-secondary dark:text-blue-200 font-bold tracking-wide uppercase">${unescapeHTML(tagline)}</p>`}${title && renderTemplate`<h2${addAttribute(twMerge(
    "text-4xl md:text-5xl font-bold leading-tighter tracking-tighter mb-4 font-heading",
    titleClass
  ), "class")}>${unescapeHTML(title)}</h2>`}${subtitle && renderTemplate`<p${addAttribute(twMerge("text-justify mt-4 text-muted", subtitleClass), "class")}>${unescapeHTML(subtitle)}</p>`}</div>`}`;
}, "D:/Onebook/nhavantuonglai-vn/src/components/ui/headline.astro", void 0);

const $$Astro = createAstro("https://nhavantuonglai.com");
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline,
    callToAction = await Astro2.slots.render("callToAction"),
    items = [],
    isReversed = false,
    inputs,
    textarea,
    disclaimer,
    button,
    description,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-6xl mx-auto ${classes?.container ?? ""}`, "bg": bg }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div${addAttribute(`flex flex-col gap-8 md:gap-12 md:flex-row ${isReversed ? "md:flex-row-reverse" : ""}`, "class")}> <div${addAttribute(`w-full lg:w-1/2 gap-8 md:gap-12 ${isReversed ? "lg:ml-16 md:ml-8 ml-0" : "lg:mr-16 md:mr-8 mr-0"}`, "class")}> ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline, "classes": {
    container: "text-center md:text-left rtl:md:text-right mb-4 md:mb-8",
    title: "mb-4 text-3xl lg:text-4xl font-bold font-heading",
    subtitle: "mb-8 text-xl text-muted dark:text-slate-400"
    // ...((classes?.headline as {}) ?? {}),
  } })} <div class="w-full text-center md:text-left rtl:md:text-right"> ${typeof callToAction === "string" ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(callToAction)}` })}` : callToAction && callToAction.text && callToAction.href && renderTemplate`${renderComponent($$result2, "Button", $$Button, { "variant": "primary", ...callToAction, "class": "mb-12 w-auto", "target": "_blank" })}`} </div> </div> <div class="w-full lg:w-1/2 px-0"> <ul class="space-y-10"> ${items && items.length ? items.map(({ title: title2, description: description2, icon }, index) => renderTemplate`<li class="flex md:-mx-4"> <div class="pr-4 sm:pl-4 rtl:pr-0 rtl:pl-4 rtl:sm:pl-0 rtl:sm:pr-4"> <span class="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold rounded-full bg-blue-100 text-primary"> ${icon ? renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": icon, "class": "w-6 h-6 icon-bold" })}` : index + 1} </span> </div> <div class="pl-4 rtl:pl-0 rtl:pr-4"> <h3 class="mb-4 text-xl font-semibold font-heading">${unescapeHTML(title2)}</h3> <p class="text-justify text-muted dark:text-gray-400">${unescapeHTML(description2)}</p> </div> </li>`) : ""} </ul> </div> </div> ` })}`;
}, "D:/Onebook/nhavantuonglai-vn/src/components/widgets/contact.astro", void 0);

const $$CallToAction = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Contact", $$Contact, { "title": "Li\xEAn l\u1EA1c th\xF4ng qua Instagram", "subtitle": "Instagram l\xE0 t\xE0i kho\u1EA3n ch\xEDnh th\u1EE9c c\u1EE7a @nhavantuonglai, n\xEAn th\xF4ng qua k\xEAnh n\xE0y b\u1EA1n c\xF3 th\u1EC3 trao \u0111\u1ED5i tr\u1EF1c ti\u1EBFp v\xE0 t\u1EE9c th\u1EDDi, c\u0169ng nh\u01B0 c\u1EADp nh\u1EADt nh\u1EEFng th\xF4ng tin m\u1EDBi nh\u1EA5t t\u1EEB t\xE1c gi\u1EA3.", "isReversed": true, "callToAction": {
    text: "Nh\u1EAFn tin",
    href: "https://info.nhavantuonglai.com/instagram"
  }, "items": [
    {
      title: "T\u1EE9c th\u1EDDi v\xE0 nhanh ch\xF3ng",
      description: "B\u1EA1n c\xF3 th\u1EC3 g\u1EEDi v\xE0 nh\u1EADn tin nh\u1EAFn nhanh ch\xF3ng, tr\u1EF1c ti\u1EBFp, gi\xFAp nh\u1EEFng v\u1EA5n \u0111\u1EC1 c\xE1 nh\xE2n c\u1EE7a b\u1EA1n \u0111\u01B0\u1EE3c gi\u1EA3i quy\u1EBFt t\u1EE9c th\u1EDDi v\xE0 hi\u1EC7u qu\u1EA3 h\u01A1n.",
      icon: "tabler:bell-school"
    },
    {
      title: "Th\xE2n thi\u1EC7n v\xE0 g\u1EA7n g\u0169i",
      description: "V\xEC t\xEDnh ch\u1EA5t l\xE0 k\xEAnh li\xEAn l\u1EA1c nhanh, n\xEAn b\u1EA1n c\xF3 th\u1EC3 b\u1ECF qua nh\u1EEFng nghi th\u1EE9c giao ti\u1EBFp th\xF4ng th\u01B0\u1EDDng, ch\u1EC9 c\u1EA7n l\u1ECBch s\u1EF1 v\xE0 t\xF4n tr\u1ECDng th\xEC s\u1EBD nh\u1EADn \u0111\u01B0\u1EE3c s\u1EF1 ph\u1EA3n h\u1ED3i \u0111\u1EA7y th\xE2n thi\u1EC7n, tho\u1EA3i m\xE1i t\u1EEB t\xE1c gi\u1EA3.",
      icon: "tabler:brand-codecov"
    }
  ] })} ${renderComponent($$result, "Contact", $$Contact, { "title": "Trao \u0111\u1ED5i tr\xEAn email", "subtitle": "Instagram l\xE0 k\xEAnh trao \u0111\u1ED5i c\xF4ng vi\u1EC7c ch\xEDnh th\u1EE9c c\u1EE7a @nhavantuonglai, ph\xF9 h\u1EE3p v\u1EDBi c\xE1c th\u1ECFa thu\u1EADn h\u1EE3p t\xE1c, k\u1EBFt n\u1ED1i chuy\xEAn s\xE2u v\xE0 mang t\xEDnh chuy\xEAn nghi\u1EC7p.", "callToAction": {
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
  ] })}`;
}, "D:/Onebook/nhavantuonglai-vn/src/components/content/call-to-action.astro", void 0);

export { $$CallToAction as $, I18N as I, $$PageLayout as a, getStaticPathsBlogTag as b, blogTagRobots as c, getStaticPathsBlogList as d, blogListRobots as e, findImage as f, getHomePermalink as g, getPermalink as h, $$Image as i, getFormattedDate as j, $$Icon as k, $$Button as l, $$WidgetWrapper as m, $$Headline as n, getBlogPermalink as o, findLatestPosts as p, findPostsByIds as q, fetchPosts as r, getRelatedPosts as s, getCanonical as t, blogPostRobots as u, getStaticPathsBlogPost as v };