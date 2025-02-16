import slugify from 'limax';

const SITE = {"name":"nhavantuonglai","site":"https://nhavantuonglai.com","base":"/","trailingSlash":false};
														const I18N = {"language":"vi","textDirection":"ltr"};
														const METADATA = {"title":{"default":"Văn hay trong hiện tại, chữ tốt ở tương lai.","template":"%s | nhavantuonglai"},"description":"Viết là nuôi dưỡng niềm đam mê, chữ để ươm mầm điều yêu thích. Học và hoàn thiện kỹ năng mỗi ngày không mong gì hơn đó là điều duy nhất người ta nhớ để nhắc về.","robots":{"index":true,"follow":true},"openGraph":{"locale":"vi_VN","image":{"url":"https://banmaixanh.org/image/cover/001-053.jpg","width":1200,"height":630,"alt":"Viết là nuôi dưỡng niềm đam mê, chữ để ươm mầm điều yêu thích."}},"twitter":{"card":"summary_large_image","site":"@nhavantuonglai","creator":"@nhavantuonglai","image":"https://banmaixanh.org/image/cover/001-053.jpg","description":"Viết là nuôi dưỡng niềm đam mê, chữ để ươm mầm điều yêu thích. Học và hoàn thiện kỹ năng mỗi ngày không mong gì hơn đó là điều duy nhất người ta nhớ để nhắc về."}};
														const APP_BLOG = {"postsPerPage":20,"post":{"permalink":"article/%slug%","robots":{"index":true}},"list":{"pathname":"article","robots":{"index":true}},"tag":{"pathname":"tags","robots":{"index":true}},"relatedPostsCount":12};
														const UI = {"theme":"system","tokens":{"default":{"colors":{"default":"rgb(33 39 55)","heading":"rgb(248 243 240)","muted":"rgb(33 39 55 / 66%)","bgPage":"rgb(248 243 240)","primary":"rgb(255 114 94)","secondary":"rgb(255 114 94)","accent":"rgb(255 114 94)"}},"dark":{"colors":{"default":"rgb(248 243 240)","heading":"rgb(33 39 55)","muted":"rgb(229 236 246 / 66%)","bgPage":"rgb(33 39 55)","primary":"rgb(255 114 94)","secondary":"rgb(255 114 94)","accent":"rgb(255 114 94)"}}}};

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
const BASE_PATHNAME = SITE.base;
const cleanSlug = (text = "") => trimSlash(text).split("/").map((slug) => slugify(slug)).join("/");
const BLOG_BASE = cleanSlug(APP_BLOG?.list?.pathname);
cleanSlug(APP_BLOG?.category?.pathname);
const TAG_BASE = cleanSlug(APP_BLOG?.tag?.pathname) || "tag";
const POST_PERMALINK_PATTERN = trimSlash(APP_BLOG?.post?.permalink);
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

function prependForwardSlash(path) {
  return path[0] === "/" ? path : "/" + path;
}
function removeTrailingForwardSlash(path) {
  return path.endsWith("/") ? path.slice(0, path.length - 1) : path;
}
function removeLeadingForwardSlash(path) {
  return path.startsWith("/") ? path.substring(1) : path;
}
function trimSlashes(path) {
  return path.replace(/^\/|\/$/g, "");
}
function isString(path) {
  return typeof path === "string" || path instanceof String;
}
function joinPaths(...paths) {
  return paths.filter(isString).map((path, i) => {
    if (i === 0) {
      return removeTrailingForwardSlash(path);
    } else if (i === paths.length - 1) {
      return removeLeadingForwardSlash(path);
    } else {
      return trimSlashes(path);
    }
  }).join("/");
}
function isRemotePath(src) {
  return /^(?:http|ftp|https|ws):?\/\//.test(src) || src.startsWith("data:");
}
function removeBase(path, base) {
  if (path.startsWith(base)) {
    return path.slice(removeTrailingForwardSlash(base).length);
  }
  return path;
}

const VALID_INPUT_FORMATS = [
  "jpeg",
  "jpg",
  "png",
  "tiff",
  "webp",
  "gif",
  "svg",
  "avif"
];
const VALID_SUPPORTED_FORMATS = [
  "jpeg",
  "jpg",
  "png",
  "tiff",
  "webp",
  "gif",
  "svg",
  "avif"
];
const DEFAULT_OUTPUT_FORMAT = "webp";
const DEFAULT_HASH_PROPS = [
  "src",
  "width",
  "height",
  "format",
  "quality",
  "fit",
  "position"
];

export { APP_BLOG as A, BLOG_BASE as B, DEFAULT_OUTPUT_FORMAT as D, I18N as I, METADATA as M, POST_PERMALINK_PATTERN as P, SITE as S, TAG_BASE as T, UI as U, VALID_INPUT_FORMATS as V, getBlogPermalink as a, getCanonical as b, cleanSlug as c, getAsset as d, getHomePermalink as e, VALID_SUPPORTED_FORMATS as f, getPermalink as g, DEFAULT_HASH_PROPS as h, isRemotePath as i, joinPaths as j, prependForwardSlash as p, removeBase as r, trimSlash as t };
