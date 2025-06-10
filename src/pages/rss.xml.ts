import { getRssString } from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE, METADATA, APP_BLOG } from 'nhavantuonglai:config';
import { getPermalink } from '~/utils/permalinks';

export const GET = async () => {
	if (!APP_BLOG.isEnabled) {
		return new Response(null, {
			status: 404,
			statusText: 'Not found',
		});
	}

	const posts = await getCollection('post', ({ data }) => !!data.pubDatetime)
		.then(posts => posts.sort((a, b) => new Date(b.data.pubDatetime).getTime() - new Date(a.data.pubDatetime).getTime()))
		.then(posts => posts.slice(0, 50));

	const rss = await getRssString({
		title: `${SITE.name} | nhavantuonglai`,
		description: METADATA?.description,
		site: import.meta.env.SITE,
		items: posts.map((post) => ({
			link: getPermalink(post.data.permalink || post.slug),
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.pubDatetime,
		})),
		trailingSlash: SITE.trailingSlash,
	});

	return new Response(rss, {
		headers: {
			'Content-Type': 'application/xml',
		},
	});
};