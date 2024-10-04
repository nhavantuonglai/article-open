import { c as createComponent, r as renderTemplate, b as addAttribute, a as renderComponent, u as unescapeHTML, F as Fragment, f as defineScriptVars, d as createAstro, m as maybeRenderHead, s as spreadAttributes, g as renderHead, e as renderSlot } from './astro/server_BfxwJWhM.mjs';
import 'kleur/colors';
/* empty css                          */
import { e as getAsset, U as UI, d as getCanonical, S as SITE, I as I18N, M as METADATA, t as trimSlash, g as getHomePermalink } from './permalinks_DgxcdhcO.mjs';
import 'clsx';
import merge from 'lodash.merge';
import { escape } from 'html-escaper';
import { A as AstroError, F as FailedToFetchRemoteImageDimensions, i as imageMetadata, f as NoImageMetadata, E as ExpectedImageOptions, g as ExpectedImage, h as ExpectedNotESMImage, r as resolveSrc, j as isRemoteImage, k as isESMImportedImage, l as isLocalService, D as DEFAULT_HASH_PROPS, m as InvalidImageService, n as ImageMissingAlt } from './astro/assets-service_CoxEL871.mjs';
import * as mime from 'mrmime';
import { getIconData, iconToSVG } from '@iconify/utils';
import { twMerge } from 'tailwind-merge';
import * as z from 'zod';

const $$CommonMeta = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="sitemap"${addAttribute(getAsset("/sitemap-0.xml"), "href")}>`;
}, "D:/Onecode/article-open/src/components/common/common-meta.astro", void 0);

const favIcon = "/_astro/favicon.Cfqqmymp.ico";

const favIconSvg = new Proxy({"src":"/_astro/favicon.ChOchD22.svg","width":256,"height":256,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Onecode/article-open/src/assets/favicons/favicon.svg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("D:/Onecode/article-open/src/assets/favicons/favicon.svg");
							return target[name];
						}
					});

const appleTouchIcon = new Proxy({"src":"/_astro/apple-touch-icon.BD32nC3z.png","width":256,"height":256,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Onecode/article-open/src/assets/favicons/apple-touch-icon.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("D:/Onecode/article-open/src/assets/favicons/apple-touch-icon.png");
							return target[name];
						}
					});

const $$Favicons = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<link rel="shortcut icon"${addAttribute(favIcon, "href")}><link rel="icon" type="image/svg+xml"${addAttribute(favIconSvg.src, "href")}><link rel="mask-icon"${addAttribute(favIconSvg.src, "href")} color="#ff725e"><link rel="apple-touch-icon" sizes="180x180"${addAttribute(appleTouchIcon.src, "href")}>`;
}, "D:/Onecode/article-open/src/components/favicons.astro", void 0);

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
}, "D:/Onecode/article-open/src/components/custom-styles.astro", void 0);

var __freeze$3 = Object.freeze;
var __defProp$3 = Object.defineProperty;
var __template$3 = (cooked, raw) => __freeze$3(__defProp$3(cooked, "raw", { value: __freeze$3(cooked.slice()) }));
var _a$3;
const $$ApplyColorMode = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$3 || (_a$3 = __template$3(["<script>(function(){", '\n\n	function applyTheme(theme) {\n		if (theme === "dark") {\n			document.documentElement.classList.add("dark");\n		} else {\n			document.documentElement.classList.remove("dark");\n		}\n		const matches = document.querySelectorAll("[data-aw-toggle-color-scheme] >input");\n\n		if (matches && matches.length) {\n			matches.forEach((elem) =>{\n				elem.checked = theme !== "dark";\n			});\n		}\n	}\n\n	if ((defaultTheme && defaultTheme.endsWith(":only")) || (!localStorage.theme && defaultTheme !== "system")) {\n		applyTheme(defaultTheme.replace(":only", ""));\n	} else if (\n		localStorage.theme === "dark" ||\n		(!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)\n	) {\n		applyTheme("dark");\n	} else {\n		applyTheme("light");\n	}\n\n})();<\/script>'])), defineScriptVars({ defaultTheme: UI.theme }));
}, "D:/Onecode/article-open/src/components/common/apply-color-mode.astro", void 0);

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

const $$Astro$c = createAstro("https://nhavantuonglai.com");
const $$AstroSeo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
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
}, "D:/Onecode/article-open/node_modules/@astrolib/seo/src/AstroSeo.astro", void 0);

function isImageMetadata(src) {
  return src.fsPath && !("fsPath" in src);
}

async function inferRemoteSize(url) {
  const response = await fetch(url);
  if (!response.body || !response.ok) {
    throw new AstroError({
      ...FailedToFetchRemoteImageDimensions,
      message: FailedToFetchRemoteImageDimensions.message(url)
    });
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
        const dimensions = await imageMetadata(accumulatedChunks, url);
        if (dimensions) {
          await reader.cancel();
          return dimensions;
        }
      } catch (error) {
      }
    }
  }
  throw new AstroError({
    ...NoImageMetadata,
    message: NoImageMetadata.message(url)
  });
}

async function getConfiguredImageService() {
  if (!globalThis?.astroAsset?.imageService) {
    const { default: service } = await import(
      // @ts-expect-error
      './astro/assets-service_CoxEL871.mjs'
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
    const result = await inferRemoteSize(resolvedOptions.src);
    resolvedOptions.width ??= result.width;
    resolvedOptions.height ??= result.height;
    delete resolvedOptions.inferSize;
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

const $$Astro$b = createAstro("https://nhavantuonglai.com");
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Image;
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
}, "D:/Onecode/article-open/node_modules/astro/components/Image.astro", void 0);

const $$Astro$a = createAstro("https://nhavantuonglai.com");
const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
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
}, "D:/Onecode/article-open/node_modules/astro/components/Picture.astro", void 0);

const imageConfig = {"service":{"entrypoint":"astro/assets/services/squoosh","config":{}},"domains":[],"remotePatterns":[]};
					const getImage = async (options) => await getImage$1(options, imageConfig);

const load = async function() {
  let images = void 0;
  try {
    images = /* #__PURE__ */ Object.assign({});
  } catch (e) {
  }
  return images;
};
let _images = void 0;
const fetchLocalImages = async () => {
  _images = _images || await load();
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

const $$Astro$9 = createAstro("https://nhavantuonglai.com");
const $$Metadata = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
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
        locale: I18N?.language,
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
}, "D:/Onecode/article-open/src/components/common/metadata.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$Analytics = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderTemplate(_a$2 || (_a$2 = __template$2(["<script>\n	(function(w,d,s,l,i)\n	{w[l]=w[l]||[];\n		w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});\n		var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;\n		j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n	})\n	(window,document,'script','dataLayer','GTM-xxxxxx');\n<\/script>"])))}`;
}, "D:/Onecode/article-open/src/components/common/analytics.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$BasicScripts = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["<script>(function(){", "\n\n	if (window.basic_script) {\n		return;\n	}\n\n	window.basic_script = true;\n\n	function applyTheme(theme) {\n		if (theme === 'dark') {\n			document.documentElement.classList.add('dark');\n		} else {\n			document.documentElement.classList.remove('dark');\n		}\n	}\n\n	const initTheme = function () {\n		if ((defaultTheme && defaultTheme.endsWith(':only')) || (!localStorage.theme && defaultTheme !== 'system')) {\n			applyTheme(defaultTheme.replace(':only', ''));\n		} else if (\n			localStorage.theme === 'dark' ||\n			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)\n		) {\n			applyTheme('dark');\n		} else {\n			applyTheme('light');\n		}\n	};\n	initTheme();\n\n	function attachEvent(selector, event, fn) {\n		const matches = typeof selector === 'string' ? document.querySelectorAll(selector) : selector;\n		if (matches && matches.length) {\n			matches.forEach((elem) =>{\n				elem.addEventListener(event, (e) =>fn(e, elem), false);\n			});\n		}\n	}\n\n	const onLoad = function () {\n		let lastKnownScrollPosition = window.scrollY;\n		let ticking = true;\n\n		attachEvent('#header nav', 'click', function () {\n			document.querySelector('[data-aw-toggle-menu]')?.classList.remove('expanded');\n			document.body.classList.remove('overflow-hidden');\n			document.getElementById('header')?.classList.remove('h-screen');\n			document.getElementById('header')?.classList.remove('expanded');\n			document.getElementById('header')?.classList.remove('bg-page');\n			document.querySelector('#header nav')?.classList.add('hidden');\n			document.querySelector('#header >div >div:last-child')?.classList.add('hidden');\n		});\n\n		attachEvent('[data-aw-toggle-menu]', 'click', function (_, elem) {\n			elem.classList.toggle('expanded');\n			document.body.classList.toggle('overflow-hidden');\n			document.getElementById('header')?.classList.toggle('h-screen');\n			document.getElementById('header')?.classList.toggle('expanded');\n			document.getElementById('header')?.classList.toggle('bg-page');\n			document.querySelector('#header nav')?.classList.toggle('hidden');\n			document.querySelector('#header >div >div:last-child')?.classList.toggle('hidden');\n		});\n\n		attachEvent('[data-aw-toggle-color-scheme]', 'click', function () {\n			if (defaultTheme.endsWith(':only')) {\n				return;\n			}\n			document.documentElement.classList.toggle('dark');\n			localStorage.theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';\n		});\n\n		attachEvent('[data-aw-social-share]', 'click', function (_, elem) {\n			const network = elem.getAttribute('data-aw-social-share');\n			const url = encodeURIComponent(elem.getAttribute('data-aw-url'));\n			const text = encodeURIComponent(elem.getAttribute('data-aw-text'));\n\n			let href;\n			switch (network) {\n				case 'facebook':\n					href = `https://www.facebook.com/sharer.php?u=${url}`;\n					break;\n				case 'twitter':\n					href = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;\n					break;\n				case 'linkedin':\n					href = `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${text}`;\n					break;\n				case 'whatsapp':\n					href = `https://wa.me/?text=${text}%20${url}`;\n					break;\n				case 'mail':\n					href = `mailto:?subject=%22${text}%22&body=${text}%20${url}`;\n					break;\n\n				default:\n					return;\n			}\n\n			const newlink = document.createElement('a');\n			newlink.target = '_blank';\n			newlink.href = href;\n			newlink.click();\n		});\n\n		let screenSize = window.matchMedia('(max-width: 767px)');\n		screenSize.addEventListener('change', function () {\n			document.querySelector('[data-aw-toggle-menu]')?.classList.remove('expanded');\n			document.body.classList.remove('overflow-hidden');\n			document.getElementById('header')?.classList.remove('h-screen');\n			document.getElementById('header')?.classList.remove('expanded');\n			document.getElementById('header')?.classList.remove('bg-page');\n			document.querySelector('#header nav')?.classList.add('hidden');\n			document.querySelector('#header >div >div:last-child')?.classList.add('hidden');\n		});\n\n		function applyHeaderStylesOnScroll() {\n			const header = document.querySelector('#header[data-aw-sticky-header]');\n			if (lastKnownScrollPosition >60 && !header.classList.contains('scroll')) {\n				document.getElementById('header').classList.add('scroll');\n			} else if (lastKnownScrollPosition <= 60 && header.classList.contains('scroll')) {\n				document.getElementById('header').classList.remove('scroll');\n			}\n			ticking = false;\n		}\n		applyHeaderStylesOnScroll();\n\n		attachEvent([document], 'scroll', function () {\n			lastKnownScrollPosition = window.scrollY;\n\n			if (!ticking) {\n				window.requestAnimationFrame(() =>{\n					applyHeaderStylesOnScroll();\n				});\n				ticking = true;\n			}\n		});\n	};\n	const onPageShow = function () {\n		document.documentElement.classList.add('motion-safe:scroll-smooth');\n		const elem = document.querySelector('[data-aw-toggle-menu]');\n		if (elem) {\n			elem.classList.remove('expanded');\n		}\n		document.body.classList.remove('overflow-hidden');\n		document.getElementById('header')?.classList.remove('h-screen');\n		document.getElementById('header')?.classList.remove('expanded');\n		document.querySelector('#header nav')?.classList.add('hidden');\n	};\n\n	window.onload = onLoad;\n	window.onpageshow = onPageShow;\n\n	document.addEventListener('astro:after-swap', () =>{\n		initTheme();\n		onLoad();\n		onPageShow();\n	});\n\n})();<\/script>"], ["<script>(function(){", "\n\n	if (window.basic_script) {\n		return;\n	}\n\n	window.basic_script = true;\n\n	function applyTheme(theme) {\n		if (theme === 'dark') {\n			document.documentElement.classList.add('dark');\n		} else {\n			document.documentElement.classList.remove('dark');\n		}\n	}\n\n	const initTheme = function () {\n		if ((defaultTheme && defaultTheme.endsWith(':only')) || (!localStorage.theme && defaultTheme !== 'system')) {\n			applyTheme(defaultTheme.replace(':only', ''));\n		} else if (\n			localStorage.theme === 'dark' ||\n			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)\n		) {\n			applyTheme('dark');\n		} else {\n			applyTheme('light');\n		}\n	};\n	initTheme();\n\n	function attachEvent(selector, event, fn) {\n		const matches = typeof selector === 'string' ? document.querySelectorAll(selector) : selector;\n		if (matches && matches.length) {\n			matches.forEach((elem) =>{\n				elem.addEventListener(event, (e) =>fn(e, elem), false);\n			});\n		}\n	}\n\n	const onLoad = function () {\n		let lastKnownScrollPosition = window.scrollY;\n		let ticking = true;\n\n		attachEvent('#header nav', 'click', function () {\n			document.querySelector('[data-aw-toggle-menu]')?.classList.remove('expanded');\n			document.body.classList.remove('overflow-hidden');\n			document.getElementById('header')?.classList.remove('h-screen');\n			document.getElementById('header')?.classList.remove('expanded');\n			document.getElementById('header')?.classList.remove('bg-page');\n			document.querySelector('#header nav')?.classList.add('hidden');\n			document.querySelector('#header >div >div:last-child')?.classList.add('hidden');\n		});\n\n		attachEvent('[data-aw-toggle-menu]', 'click', function (_, elem) {\n			elem.classList.toggle('expanded');\n			document.body.classList.toggle('overflow-hidden');\n			document.getElementById('header')?.classList.toggle('h-screen');\n			document.getElementById('header')?.classList.toggle('expanded');\n			document.getElementById('header')?.classList.toggle('bg-page');\n			document.querySelector('#header nav')?.classList.toggle('hidden');\n			document.querySelector('#header >div >div:last-child')?.classList.toggle('hidden');\n		});\n\n		attachEvent('[data-aw-toggle-color-scheme]', 'click', function () {\n			if (defaultTheme.endsWith(':only')) {\n				return;\n			}\n			document.documentElement.classList.toggle('dark');\n			localStorage.theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';\n		});\n\n		attachEvent('[data-aw-social-share]', 'click', function (_, elem) {\n			const network = elem.getAttribute('data-aw-social-share');\n			const url = encodeURIComponent(elem.getAttribute('data-aw-url'));\n			const text = encodeURIComponent(elem.getAttribute('data-aw-text'));\n\n			let href;\n			switch (network) {\n				case 'facebook':\n					href = \\`https://www.facebook.com/sharer.php?u=\\${url}\\`;\n					break;\n				case 'twitter':\n					href = \\`https://twitter.com/intent/tweet?url=\\${url}&text=\\${text}\\`;\n					break;\n				case 'linkedin':\n					href = \\`https://www.linkedin.com/shareArticle?mini=true&url=\\${url}&title=\\${text}\\`;\n					break;\n				case 'whatsapp':\n					href = \\`https://wa.me/?text=\\${text}%20\\${url}\\`;\n					break;\n				case 'mail':\n					href = \\`mailto:?subject=%22\\${text}%22&body=\\${text}%20\\${url}\\`;\n					break;\n\n				default:\n					return;\n			}\n\n			const newlink = document.createElement('a');\n			newlink.target = '_blank';\n			newlink.href = href;\n			newlink.click();\n		});\n\n		let screenSize = window.matchMedia('(max-width: 767px)');\n		screenSize.addEventListener('change', function () {\n			document.querySelector('[data-aw-toggle-menu]')?.classList.remove('expanded');\n			document.body.classList.remove('overflow-hidden');\n			document.getElementById('header')?.classList.remove('h-screen');\n			document.getElementById('header')?.classList.remove('expanded');\n			document.getElementById('header')?.classList.remove('bg-page');\n			document.querySelector('#header nav')?.classList.add('hidden');\n			document.querySelector('#header >div >div:last-child')?.classList.add('hidden');\n		});\n\n		function applyHeaderStylesOnScroll() {\n			const header = document.querySelector('#header[data-aw-sticky-header]');\n			if (lastKnownScrollPosition >60 && !header.classList.contains('scroll')) {\n				document.getElementById('header').classList.add('scroll');\n			} else if (lastKnownScrollPosition <= 60 && header.classList.contains('scroll')) {\n				document.getElementById('header').classList.remove('scroll');\n			}\n			ticking = false;\n		}\n		applyHeaderStylesOnScroll();\n\n		attachEvent([document], 'scroll', function () {\n			lastKnownScrollPosition = window.scrollY;\n\n			if (!ticking) {\n				window.requestAnimationFrame(() =>{\n					applyHeaderStylesOnScroll();\n				});\n				ticking = true;\n			}\n		});\n	};\n	const onPageShow = function () {\n		document.documentElement.classList.add('motion-safe:scroll-smooth');\n		const elem = document.querySelector('[data-aw-toggle-menu]');\n		if (elem) {\n			elem.classList.remove('expanded');\n		}\n		document.body.classList.remove('overflow-hidden');\n		document.getElementById('header')?.classList.remove('h-screen');\n		document.getElementById('header')?.classList.remove('expanded');\n		document.querySelector('#header nav')?.classList.add('hidden');\n	};\n\n	window.onload = onLoad;\n	window.onpageshow = onPageShow;\n\n	document.addEventListener('astro:after-swap', () =>{\n		initTheme();\n		onLoad();\n		onPageShow();\n	});\n\n})();<\/script>"])), defineScriptVars({ defaultTheme: UI.theme }));
}, "D:/Onecode/article-open/src/components/common/basic-scripts.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Schema = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<script type="application/ld+json">\n	{\n		"@context": "https://schema.org",\n		"@type": "Organization",\n		"url": "https://nhavantuonglai.com",\n		"name": "nhavantuonglai",\n		"alternateName": "nhavantuonglai",\n		"description": "nhavantuonglai l\xE0 website c\xE1 nh\xE2n, th\xF4ng qua k\u1EF9 n\u0103ng vi\u1EBFt l\xE1ch v\xE0 v\u1ED1n hi\u1EC3u bi\u1EBFt x\xE3 h\u1ED9i \u0111\u1EC3 ph\u1EA3n \xE1nh g\xF3c nh\xECn c\xE1 nh\xE2n th\xF4ng qua h\xECnh \u1EA3nh v\xE0 c\xE2u t\u1EEB, t\u1EADp trung th\u1EC3 hi\u1EC7n ch\u1EE7 y\u1EBFu d\u01B0\u1EDBi h\xECnh th\u1EE9c \u0111o\u1EA3n v\u0103n v\xE0 nghi\xEAn c\u1EE9u.",\n		"logo": "https://data.nhavantuonglai.com/image/favicon/favicon.ico",\n		"sameAs": [\n			"https://info.nhavantuonglai.com/instagram",\n			"https://info.nhavantuonglai.com/fanpage",\n			"https://www.facebook.com/nhavantuonglai/",\n			"https://info.nhavantuonglai.com/twitter"\n		],\n\n		"contactPoint": {\n			"@type": "ContactPoint",\n			"telephone": "+84-88-686-7749",\n			"contactType": "Li\xEAn h\u1EC7 h\u1ED7 tr\u1EE3",\n			"email": "info@nhavantuonglai.com",\n			"areaServed": "VN",\n			"availableLanguage": ["Vietnamese"]\n		},\n\n		"founder": {\n			"@type": "Person",\n			"name": "Nguy\u1EC5n K\u1EF3 L\xE2n",\n			"url": "https://nhavantuonglai.com/about"\n		},\n		"foundingDate": "2015",\n\n		"address": {\n			"@type": "PostalAddress",\n			"streetAddress": "20 L\xEA L\u1EE3i",\n			"addressLocality": "V\u0129nh Ninh",\n			"addressRegion": "Th\xE0nh ph\u1ED1 Hu\u1EBF",\n			"postalCode": "49000",\n			"addressCountry": "VN"\n		},\n\n		"hasOfferCatalog": {\n			"@type": "OfferCatalog",\n			"name": "D\u1ECBch v\u1EE5",\n			"itemListElement": [\n				{\n					"@type": "Offer",\n					"itemOffered": {\n						"@type": "CreativeWork",\n						"name": "T\u01B0 v\u1EA5n vi\u1EBFt l\xE1ch",\n						"url": "https://nhavantuonglai.com/services"\n					}\n				}\n			]\n		},\n\n		"review": [\n			{\n				"@type": "Review",\n				"author": {\n					"@type": "Person",\n					"name": "Nguy\u1EC5n \u0110an Nguy\xEAn"\n				},\n				"datePublished": "2024-09-20",\n				"reviewBody": "T\xF4i \u0111\xE1nh gi\xE1 cao chuy\xEAn m\xF4n c\u1EE7a @nhavantuonglai, khi c\xE1c b\xE0i vi\u1EBFt kh\xF4ng ch\u1EC9 chu\u1EA9n SEO m\xE0 c\xF2n mang t\xEDnh s\xE1ng t\u1EA1o cao, gi\xFAp thu h\xFAt l\u01B0\u1EE3ng l\u1EDBn \u0111\u1ED9c gi\u1EA3 v\xE0o website c\u1EE7a t\xF4i."\n			},\n			{\n				"@type": "Review",\n				"author": {\n					"@type": "Person",\n					"name": "Tr\u1EA7n M\u1EF9 Anh"\n				},\n				"datePublished": "2024-09-20",\n				"reviewBody": "S\u1EA3n ph\u1EA9m content t\u1EEB @nhavantuonglai kh\xE1 \u1EA5n t\u01B0\u1EE3ng v\xE0 s\xE2u s\u1EAFc, th\u1EC3 hi\u1EC7n s\u1EF1 am hi\u1EC3u s\xE2u v\u1EC1 ng\xE0nh m\xE0 anh \u1EA5y vi\u1EBFt c\u0169ng nh\u01B0 tinh th\u1EA7n h\u1ECDc h\u1ECFi cao \u0111\u1ED9."\n			},\n			{\n				"@type": "Review",\n				"author": {\n					"@type": "Person",\n					"name": "L\xEA Di\u1EC7u Ch\xE2u"\n				},\n				"datePublished": "2024-09-20",\n				"reviewBody": "@nhavantuonglai l\xE0 m\u1ED9t tr\u01B0\u1EDDng h\u1EE3p \u0111\u1EB7c bi\u1EC7t, khi v\u1EEBa gi\u1ECFi chuy\xEAn m\xF4n vi\u1EBFt m\xE0 c\xF2n c\xF3 tinh th\u1EA7n h\u1ECDc h\u1ECFi, c\u1EA7u ti\u1EBFn trong ng\xE0nh analysis."\n			}\n		],\n\n		"aggregateRating": {\n			"@type": "AggregateRating",\n			"ratingValue": "4.9",\n			"reviewCount": "2842",\n			"bestRating": "5",\n			"worstRating": "3"\n		},\n\n		"mainEntityOfPage": {\n			"@type": "WebPage",\n			"@id": "https://nhavantuonglai.com/article"\n		}\n\n	}\n<\/script>'])));
}, "D:/Onecode/article-open/src/components/common/schema.astro", void 0);

const $$Astro$8 = createAstro("https://nhavantuonglai.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Layout;
  const { metadata = {} } = Astro2.props;
  const { language, textDirection } = I18N;
  return renderTemplate`<html${addAttribute(language, "lang")}${addAttribute(textDirection, "dir")} class="2xl:text-[20px]"> <head>${renderComponent($$result, "Schema", $$Schema, {})}${renderComponent($$result, "CommonMeta", $$CommonMeta, {})}${renderComponent($$result, "Favicons", $$Favicons, {})}${renderComponent($$result, "CustomStyles", $$CustomStyles, {})}${renderComponent($$result, "ApplyColorMode", $$ApplyColorMode, {})}${renderComponent($$result, "Metadata", $$Metadata, { ...metadata })}${renderComponent($$result, "Analytics", $$Analytics, {})}${renderHead()}</head> <body class="antialiased text-default bg-page tracking-tight"> ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "BasicScripts", $$BasicScripts, {})}  </body> </html>`;
}, "D:/Onecode/article-open/src/layouts/layout.astro", void 0);


const cache = /* @__PURE__ */ new WeakMap();

const $$Astro$7 = createAstro("https://nhavantuonglai.com");
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
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
}, "D:/Onecode/article-open/node_modules/astro-icon/components/Icon.astro", void 0);

const $$Logo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<span class="self-center ml-2 rtl:ml-0 rtl:mr-2 text-2xl md:text-xl font-bold text-gray-900 whitespace-nowrap dark:text-white"> <img src="https://data.nhavantuonglai.com/image/favicon/favicon.ico" width="50" height="50" alt="nhavantuonglai"> </span>`;
}, "D:/Onecode/article-open/src/components/logo.astro", void 0);

const $$Astro$6 = createAstro("https://nhavantuonglai.com");
const $$ToggleTheme = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$ToggleTheme;
  const {
    label = "Toggle between Dark and Light mode",
    class: className = "text-muted dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center",
    iconClass = "w-6 h-6",
    iconName = "tabler:sun"
  } = Astro2.props;
  return renderTemplate`${!(UI.theme.endsWith(":only")) && renderTemplate`${maybeRenderHead()}<button type="button"${addAttribute(className, "class")}${addAttribute(label, "aria-label")} data-aw-toggle-color-scheme>${renderComponent($$result, "Icon", $$Icon, { "name": iconName, "class": iconClass })}</button>`}`;
}, "D:/Onecode/article-open/src/components/common/toggle-theme.astro", void 0);

const $$Astro$5 = createAstro("https://nhavantuonglai.com");
const $$ToggleMenu = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ToggleMenu;
  const {
    label = "Toggle Menu",
    class: className = "flex flex-col h-12 w-12 rounded justify-center items-center cursor-pointer group"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button${addAttribute(className, "class")}${addAttribute(label, "aria-label")} data-aw-toggle-menu> <span class="sr-only">${label}</span> ${renderSlot($$result, $$slots["default"], renderTemplate` <span aria-hidden="true" class="h-0.5 w-6 my-1 rounded-full bg-black dark:bg-white transition ease transform duration-200 opacity-80 group-[.expanded]:rotate-45 group-[.expanded]:translate-y-2.5"></span> <span aria-hidden="true" class="h-0.5 w-6 my-1 rounded-full bg-black dark:bg-white transition ease transform duration-200 opacity-80 group-[.expanded]:opacity-0"></span> <span aria-hidden="true" class="h-0.5 w-6 my-1 rounded-full bg-black dark:bg-white transition ease transform duration-200 opacity-80 group-[.expanded]:-rotate-45 group-[.expanded]:-translate-y-2.5"></span> `)} </button>`;
}, "D:/Onecode/article-open/src/components/common/toggle-menu.astro", void 0);

const $$Astro$4 = createAstro("https://nhavantuonglai.com");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
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
}, "D:/Onecode/article-open/src/components/ui/button.astro", void 0);

const $$Astro$3 = createAstro("https://nhavantuonglai.com");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
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
}, "D:/Onecode/article-open/src/components/widgets/header.astro", void 0);

const $$Astro$2 = createAstro("https://nhavantuonglai.com");
const $$Openstatus = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
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
      color: "bg-primary"
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
  return renderTemplate`${maybeRenderHead()}<a class="hover:text-gray-700 dark:text-gray-400 transition text-sm text-muted md-0 text-foreground/70 inline-flex max-w-fit items-center gap-2 py-1 rtl:ml-0"${addAttribute(`https://nhavantuonglai.openstatus.dev`, "href")} target="_blank" rel="noreferrer"> ${label} <span class="relative flex h-2 w-2"> ${parsed.data.status === "operational" ? renderTemplate`<span${addAttribute([
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
}, "D:/Onecode/article-open/src/components/widgets/openstatus.astro", void 0);

const $$Dcma = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<a href="//www.dmca.com/Protection/Status.aspx?ID=23017359-d24b-46a6-8b23-3da1b75aa49a" title="nhavantuonglai.com protection status" class="dmca-badge" target="_blank"> <img src="https://images.dmca.com/Badges/dmca_protected_sml_120b.png?ID=23017359-d24b-46a6-8b23-3da1b75aa49a" alt="nhavantuonglai.com protection status"> </a> `;
}, "D:/Onecode/article-open/src/components/widgets/dcma.astro", void 0);

const $$Astro$1 = createAstro("https://nhavantuonglai.com");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  const { socialLinks = [], secondaryLinks = [], links = [], footNote = "", theme = "light" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<footer${addAttribute([{ dark: theme === "dark" }, "relative border-t border-gray-200 dark:border-slate-800 not-prose"], "class:list")}> <div class="bg-white dark:bg-black absolute inset-0 pointer-events-none" aria-hidden="true"></div> <div class="relative max-w-7xl mx-auto px-4 sm:px-6 dark:text-slate-300"> <div class="grid grid-cols-12 gap-4 gap-y-8 sm:gap-8 py-8 md:py-12"> <div class="col-span-12 lg:col-span-4"> <div class="text-sm text-muted mb-4"> ${secondaryLinks.map(({ text, href }) => renderTemplate`<a class="text-muted hover:text-gray-700 dark:text-gray-400 hover:underline transition duration-150 ease-in-out mr-2 rtl:mr-0 rtl:ml-2"${addAttribute(href, "href")}>${unescapeHTML(text)}</a>`)} </div> ${renderComponent($$result, "DCMA", $$Dcma, {})} </div> ${links.map(({ title, links: links2 }) => renderTemplate`<div class="col-span-6 md:col-span-3 lg:col-span-2"> <div class="dark:text-gray-300 font-medium mb-2">${title}</div> ${links2 && Array.isArray(links2) && links2.length > 0 && renderTemplate`<ul class="text-sm"> ${links2.map(({ text, href, ariaLabel }) => renderTemplate`<li class="mb-2"> <a class="text-muted hover:text-gray-700 hover:underline dark:text-gray-400 transition duration-150 ease-in-out"${addAttribute(href, "href")}${addAttribute(ariaLabel, "aria-label")} target="_blank"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(text)}` })} </a> </li>`)} </ul>`} </div>`)} </div> <div class="md:flex md:items-center md:justify-between py-6 md:py-8"> ${socialLinks?.length ? renderTemplate`<ul class="flex mb-4 md:order-1 -ml-2 md:ml-4 md:mb-0 rtl:ml-0 rtl:-mr-2 rtl:md:ml-0 rtl:md:mr-4"> ${socialLinks.map(({ ariaLabel, href, text, icon }) => renderTemplate`<li> <a class="text-muted dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center"${addAttribute(ariaLabel, "aria-label")}${addAttribute(href, "href")} target="_blank"> ${icon && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon, "class": "w-5 h-5" })}`} ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(text)}` })} </a> </li>`)} </ul>` : ""} ${renderComponent($$result, "Openstatus", $$Openstatus, {})} <div class="text-muted hover:text-gray-700 dark:text-gray-400 transition">
Xuất bản từ 2015
</div> </div> </div> </footer>`;
}, "D:/Onecode/article-open/src/components/widgets/footer.astro", void 0);

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
			title: 'Công cụ',
			links: [
				{
					text: 'Chuyển đổi chữ thường',
					href: 'https://nhavantuonglai.com/analytics/lower'
				},
				{
					text: 'Chuẩn hóa Unicode',
					href: 'https://nhavantuonglai.com/analytics/unicode'
				},
				{
					text: 'Chuẩn hóa dữ liệu',
					href: 'https://nhavantuonglai.com/analytics/normalize'
				},
				{
					text: 'Thống kê văn bản',
					href: 'https://nhavantuonglai.com/analytics/count'
				},
			],
		},
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
					text: 'Truyện tranh',
					href: 'https://info.nhavantuonglai.com/manga'
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
					text: 'Giếng thở than',
					href: 'https://nhavantuonglai.com/tags/gieng-tho-than'
				},
				{
					text: 'Chim lửa',
					href: 'https://nhavantuonglai.com/tags/chim-lua'
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

const $$Astro = createAstro("https://nhavantuonglai.com");
const $$PageLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PageLayout;
  const { metadata } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["header"], renderTemplate` ${renderComponent($$result2, "Header", $$Header, { ...headerData, "isSticky": true, "showToggleTheme": true })} `)} ${maybeRenderHead()}<main> ${renderSlot($$result2, $$slots["default"])} </main> ${renderSlot($$result2, $$slots["footer"], renderTemplate` ${renderComponent($$result2, "Footer", $$Footer, { ...footerData })} `)} ` })}`;
}, "D:/Onecode/article-open/src/layouts/page-layout.astro", void 0);

export { $$PageLayout as $, $$Icon as a, $$Button as b, findImage as f, getImage as g };