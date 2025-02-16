import { Traverse } from 'neotraverse/modern';
import pLimit from 'p-limit';
import { z, ZodIssueCode } from 'zod';
import { r as removeBase, i as isRemotePath, V as VALID_INPUT_FORMATS, p as prependForwardSlash, A as APP_BLOG, c as cleanSlug, P as POST_PERMALINK_PATTERN, t as trimSlash, T as TAG_BASE, B as BLOG_BASE } from './consts_DfSyGgUe.mjs';
import { A as AstroError, U as UnknownContentCollectionError, c as createComponent, R as RenderUndefinedEntryError, u as unescapeHTML, a as renderTemplate, h as renderUniqueStylesheet, i as renderScriptElement, j as createHeadAndContent, r as renderComponent } from './astro/server_D74Uuew0.mjs';
import 'kleur/colors';
import * as devalue from 'devalue';

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isRemotePath(imageSrc)) {
    return;
  }
  const ext = imageSrc.split(".").at(-1)?.toLowerCase();
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  if (filePath) {
    params.set("importer", filePath);
  }
  return `${imageSrc}?${params.toString()}`;
}

class ImmutableDataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('./_astro_data-layer-content_fYeOJb2u.mjs');
      if (data.default instanceof Map) {
        return ImmutableDataStore.fromMap(data.default);
      }
      const map = devalue.unflatten(data.default);
      return ImmutableDataStore.fromMap(map);
    } catch {
    }
    return new ImmutableDataStore();
  }
  static async fromMap(data) {
    const store = new ImmutableDataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = void 0;
  return {
    get: async () => {
      if (!instance) {
        instance = ImmutableDataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "PUBLIC_GEMINI_API_KEY": "AIzaSyDdLtr1xSz2DRc9BlXVpcHgoXhMvHlEHPo", "SITE": "https://nhavantuonglai.com", "SSR": true};
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
    const hasFilter = typeof filter === "function";
    const store = await globalDataStore.get();
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else if (store.hasCollection(collection)) {
      const { default: imageAssetMap } = await import('./content-assets_DleWbedO.mjs');
      const result = [];
      for (const rawEntry of store.values(collection)) {
        const data = updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap);
        let entry = {
          ...rawEntry,
          data,
          collection
        };
        if (entry.legacyId) {
          entry = emulateLegacyEntry(entry);
        }
        if (hasFilter && !filter(entry)) {
          continue;
        }
        result.push(entry);
      }
      return result;
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Please check your content config file for errors.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign(__vite_import_meta_env__, { path: process.env.path })?.DEV && cacheEntriesByCollection.has(collection)) {
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
    if (hasFilter) {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
function emulateLegacyEntry({ legacyId, ...entry }) {
  const legacyEntry = {
    ...entry,
    id: legacyId,
    slug: entry.id
  };
  return {
    ...legacyEntry,
    // Define separately so the render function isn't included in the object passed to `renderEntry()`
    render: () => renderEntry(legacyEntry)
  };
}
const CONTENT_LAYER_IMAGE_REGEX = /__ASTRO_IMAGE_="([^"]+)"/g;
async function updateImageReferencesInBody(html, fileName) {
  const { default: imageAssetMap } = await import('./content-assets_DleWbedO.mjs');
  const imageObjects = /* @__PURE__ */ new Map();
  const { getImage } = await import('./_astro_assets_DuYI4pG9.mjs').then(n => n._);
  for (const [_full, imagePath] of html.matchAll(CONTENT_LAYER_IMAGE_REGEX)) {
    try {
      const decodedImagePath = JSON.parse(imagePath.replaceAll("&#x22;", '"'));
      const id = imageSrcToImportId(decodedImagePath.src, fileName);
      const imported = imageAssetMap.get(id);
      if (!id || imageObjects.has(id) || !imported) {
        continue;
      }
      const image = await getImage({ ...decodedImagePath, src: imported });
      imageObjects.set(imagePath, image);
    } catch {
      throw new Error(`Failed to parse image reference: ${imagePath}`);
    }
  }
  return html.replaceAll(CONTENT_LAYER_IMAGE_REGEX, (full, imagePath) => {
    const image = imageObjects.get(imagePath);
    if (!image) {
      return full;
    }
    const { index, ...attributes } = image.attributes;
    return Object.entries({
      ...attributes,
      src: image.src,
      srcset: image.srcSet.attribute
    }).map(([key, value]) => value ? `${key}=${JSON.stringify(String(value))}` : "").join(" ");
  });
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  return new Traverse(data).map(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap?.get(id);
      if (imported) {
        ctx.update(imported);
      } else {
        ctx.update(src);
      }
    }
  });
}
async function renderEntry(entry) {
  if (!entry) {
    throw new AstroError(RenderUndefinedEntryError);
  }
  if ("render" in entry && !("legacyId" in entry)) {
    return entry.render();
  }
  if (entry.deferredRender) {
    try {
      const { default: contentModules } = await import('./content-modules_Dz-S_Wwv.mjs');
      const renderEntryImport = contentModules.get(entry.filePath);
      return render({
        collection: "",
        id: entry.id,
        renderEntryImport
      });
    } catch (e) {
      console.error(e);
    }
  }
  const html = entry?.rendered?.metadata?.imagePaths?.length && entry.filePath ? await updateImageReferencesInBody(entry.rendered.html, entry.filePath) : entry?.rendered?.html;
  const Content = createComponent(() => renderTemplate`${unescapeHTML(html)}`);
  return {
    Content,
    headings: entry?.rendered?.metadata?.headings ?? [],
    remarkPluginFrontmatter: entry?.rendered?.metadata?.frontmatter ?? {}
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
function createReference({ lookupMap }) {
  let store = null;
  globalDataStore.get().then((s) => store = s);
  return function reference(collection) {
    return z.union([
      z.string(),
      z.object({
        id: z.string(),
        collection: z.string()
      }),
      z.object({
        slug: z.string(),
        collection: z.string()
      })
    ]).transform(
      (lookup, ctx) => {
        if (!store) {
          ctx.addIssue({
            code: ZodIssueCode.custom,
            message: `**${ctx.path.join(".")}:** Reference to ${collection} could not be resolved: store not available.
This is an Astro bug, so please file an issue at https://github.com/withastro/astro/issues.`
          });
          return;
        }
        const flattenedErrorPath = ctx.path.join(".");
        if (typeof lookup === "object") {
          if (lookup.collection !== collection) {
            ctx.addIssue({
              code: ZodIssueCode.custom,
              message: `**${flattenedErrorPath}**: Reference to ${collection} invalid. Expected ${collection}. Received ${lookup.collection}.`
            });
            return;
          }
          return lookup;
        }
        if (!lookupMap[collection]) {
          return { id: lookup, collection };
        }
        const { type, entries } = lookupMap[collection];
        const entry = entries[lookup];
        if (!entry) {
          ctx.addIssue({
            code: ZodIssueCode.custom,
            message: `**${flattenedErrorPath}**: Reference to ${collection} invalid. Expected ${Object.keys(
              entries
            ).map((c) => JSON.stringify(c)).join(" | ")}. Received ${JSON.stringify(lookup)}.`
          });
          return;
        }
        if (type === "content") {
          return { slug: lookup, collection };
        }
        return { id: lookup, collection };
      }
    );
  };
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = "";
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = "";
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

new Set(Object.keys(lookupMap));

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = "";
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

createReference({ lookupMap });

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
APP_BLOG?.category?.isEnabled ?? false;
const blogListRobots = APP_BLOG?.list?.robots ?? "";
const blogPostRobots = APP_BLOG?.post?.robots ?? "";
APP_BLOG?.category?.robots ?? "";
const blogTagRobots = APP_BLOG?.tag?.robots ?? "";
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
        params: { tag, blog: TAG_BASE },
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

export { blogListRobots as a, blogTagRobots as b, getStaticPathsBlogList as c, findLatestPosts as d, findPostsByIds as e, fetchPosts as f, getStaticPathsBlogTag as g, getRelatedPosts as h, blogPostRobots as i, getStaticPathsBlogPost as j };
