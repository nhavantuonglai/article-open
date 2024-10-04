import { getRssString } from '@astrojs/rss';
import { S as SITE, M as METADATA, a as getPermalink } from '../chunks/permalinks_DgxcdhcO.mjs';
import { f as fetchPosts } from '../chunks/blog_DVimHaXD.mjs';
export { renderers } from '../renderers.mjs';

const GET = async () => {
  const posts = await fetchPosts();
  const rss = await getRssString({
    title: `${SITE.name} | nhavantuonglai`,
    description: METADATA?.description,
    site: "https://nhavantuonglai.com",
    items: posts.map((post) => ({
      link: getPermalink(post.permalink),
      title: post.title,
      description: post.description,
      pubDate: post.pubDatetime
    })),
    trailingSlash: SITE.trailingSlash
  });
  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml"
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
