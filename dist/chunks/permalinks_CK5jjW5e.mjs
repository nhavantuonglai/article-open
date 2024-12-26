import slugify from 'limax';

const SITE = {"name":"nhavantuonglai","site":"https://nhavantuonglai.com","base":"/","trailingSlash":false,"googleSiteVerificationId":""};
														const I18N = {"language":"vi","textDirection":"ltr"};
														const METADATA = {"title":{"default":"nhavantuonglai","template":"%s | nhavantuonglai"},"description":"Viết là nuôi dưỡng niềm đam mê, chữ để ươm mầm điều yêu thích. Học và hoàn thiện kỹ năng mỗi ngày không mong gì hơn đó là điều duy nhất người ta nhớ để nhắc về.","robots":{"index":true,"follow":true},"openGraph":{"type":"website","site_name":"nhavantuonglai","image":{"url":"https://nhavantuonglai.com/image/cover/001-753.jpg","width":600,"height":407}},"twitter":{"handle":"@nhavantuonglai","site":"@nhavantuonglai","card":"summary_large_image","image":{"url":"https://nhavantuonglai.com/image/cover/001-746.jpg"},"title":"Văn hay trong hiện tại, chữ tốt ở tương lai.","description":"Viết là nuôi dưỡng niềm đam mê, chữ để ươm mầm điều yêu thích. Học và hoàn thiện kỹ năng mỗi ngày không mong gì hơn đó là điều duy nhất người ta nhớ để nhắc về."}};
														const APP_BLOG = {"isEnabled":true,"postsPerPage":20,"post":{"isEnabled":true,"permalink":"article/%slug%","robots":{"index":true}},"list":{"isEnabled":true,"pathname":"article","robots":{"index":true}},"tag":{"isEnabled":true,"pathname":"tags","robots":{"index":true}},"isRelatedPostsEnabled":true,"relatedPostsCount":12};
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

export { APP_BLOG as A, BLOG_BASE as B, I18N as I, METADATA as M, POST_PERMALINK_PATTERN as P, SITE as S, TAG_BASE as T, UI as U, getFormattedDate as a, getBlogPermalink as b, getCanonical as c, cleanSlug as d, getAsset as e, getHomePermalink as f, getPermalink as g, trimSlash as t };
