import type { PaginateFunction } from 'astro';
import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';
import type { Post } from '~/types';
import { APP_BLOG } from 'nhavantuonglai:config';
import { cleanSlug, BLOG_BASE, POST_PERMALINK_PATTERN, TAG_BASE } from './permalinks';
import { trim } from '~/utils/utils';

const blogConfig = {
	isEnabled: APP_BLOG?.isEnabled ?? false,
	isRelatedPostsEnabled: APP_BLOG?.isRelatedPostsEnabled ?? false,
	isBlogListRouteEnabled: APP_BLOG?.list?.isEnabled ?? false,
	isBlogPostRouteEnabled: APP_BLOG?.post?.isEnabled ?? false,
	isBlogTagRouteEnabled: APP_BLOG?.tag?.isEnabled ?? false,
	blogListRobots: APP_BLOG?.list?.robots ?? '',
	blogPostRobots: APP_BLOG?.post?.robots ?? '',
	blogTagRobots: APP_BLOG?.tag?.robots ?? '',
	postsPerPage: APP_BLOG?.postsPerPage ?? 10,
	relatedPostsCount: APP_BLOG?.relatedPostsCount ?? 4,
};

const generatePermalink = async ({ id, slug, pubDatetime }) => {
  console.log('generatePermalink inputs:', { id, slug, pubDatetime, POST_PERMALINK_PATTERN });
  if (!POST_PERMALINK_PATTERN) {
    throw new Error('POST_PERMALINK_PATTERN is undefined');
  }
	const year = String(pubDatetime.getFullYear()).padStart(4, '0');
	const month = String(pubDatetime.getMonth() + 1).padStart(2, '0');
	const day = String(pubDatetime.getDate()).padStart(2, '0');
	const hour = String(pubDatetime.getHours()).padStart(2, '0');
	const minute = String(pubDatetime.getMinutes()).padStart(2, '0');
	const second = String(pubDatetime.getSeconds()).padStart(2, '0');
	const permalink = POST_PERMALINK_PATTERN.replace('%slug%', slug)
		.replace('%id%', id)
		.replace('%year%', year)
		.replace('%month%', month)
		.replace('%day%', day)
		.replace('%hour%', hour)
		.replace('%minute%', minute)
		.replace('%second%', second);
	return permalink
		.split('/')
		.map((el) => trim(el, '/'))
		.filter((el) => !!el)
		.join('/');
};

const getNormalizedPost = async (post: CollectionEntry<'post'>): Promise<Post> => {
	const { id, slug: rawSlug = '', data } = post;
	const { Content, remarkPluginFrontmatter } = await post.render();
	const { pubDatetime: rawpubDatetime = new Date(), updateDate: rawUpdateDate, title, description, image, tags: rawTags = [], draft = false, metadata = {} } = data;
	const slug = cleanSlug(rawSlug);
	const pubDatetime = new Date(rawpubDatetime);
	const updateDate = rawUpdateDate ? new Date(rawUpdateDate) : undefined;
	const tags = rawTags.map((tag: string) => cleanSlug(tag));
	return {
		id,
		slug,
		permalink: await generatePermalink({ id, slug, pubDatetime }),
		pubDatetime,
		updateDate,
		title,
		description,
		image,
		tags,
		draft,
		metadata,
		Content,
		readingTime: remarkPluginFrontmatter?.readingTime,
	};
};

const shuffleArray = <T>(array: T[]): T[] => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
};

const getRandomizedPosts = (array: Post[], num: number) => {
	return shuffleArray([...array]).slice(0, num);
};

const load = async function (): Promise<Array<Post>> {
	const posts = await getCollection('post');
	const normalizedPosts = await Promise.all(posts.map((post) => getNormalizedPost(post)));
	return normalizedPosts
		.sort((a, b) => b.pubDatetime.valueOf() - a.pubDatetime.valueOf())
		.filter((post) => !post.draft);
};

let _posts: Array<Post>;

export const { isEnabled: isBlogEnabled, isRelatedPostsEnabled, isBlogListRouteEnabled, isBlogPostRouteEnabled, isBlogTagRouteEnabled, blogListRobots, blogPostRobots, blogTagRobots, postsPerPage: blogPostsPerPage, relatedPostsCount } = blogConfig;

export const fetchPosts = async (): Promise<Array<Post>> => {
	if (!_posts) _posts = await load();
	return _posts;
};

export const refreshPosts = async (): Promise<void> => {
	_posts = await load();
};

export const findPostsBySlugs = async (slugs: Array<string>): Promise<Array<Post>> => {
	if (!Array.isArray(slugs)) return [];
	const posts = await fetchPosts();
	return slugs.reduce((r: Array<Post>, slug: string) => {
		posts.some((post: Post) => slug === post.slug && r.push(post));
		return r;
	}, []);
};

export const findPostsByIds = async (ids: Array<string>): Promise<Array<Post>> => {
	if (!Array.isArray(ids)) return [];
	const posts = await fetchPosts();
	return ids.reduce((r: Array<Post>, id: string) => {
		posts.some((post: Post) => id === post.id && r.push(post));
		return r;
	}, []);
};

export const findLatestPosts = async ({ count }: { count?: number }): Promise<Array<Post>> => {
	const _count = count || 4;
	const posts = await fetchPosts();
	return posts ? posts.slice(0, _count) : [];
};

export const getStaticPathsBlogList = async ({ paginate }: { paginate: PaginateFunction }) => {
	if (!isBlogEnabled || !isBlogListRouteEnabled) return [];
	return paginate(await fetchPosts(), {
		params: { blog: BLOG_BASE || undefined },
		pageSize: blogPostsPerPage,
	});
};

export const getStaticPathsBlogPost = async () => {
	if (!isBlogEnabled || !isBlogPostRouteEnabled) return [];
	return (await fetchPosts()).flatMap((post) => ({
		params: { blog: post.permalink },
		props: { post },
	}));
};

export const getStaticPathsBlogTag = async ({ paginate }: { paginate: PaginateFunction }) => {
	if (!isBlogEnabled || !isBlogTagRouteEnabled) return [];
	const posts = await fetchPosts();
	const tags = new Set<string>();
	posts.forEach((post) => {
		Array.isArray(post.tags) && post.tags.forEach((tag) => tags.add(tag.toLowerCase()));
	});
	return Array.from(tags).flatMap((tag) =>
		paginate(
			posts.filter((post) => Array.isArray(post.tags) && post.tags.find((elem) => elem.toLowerCase() === tag)),
			{
				params: { tag, blog: TAG_BASE || undefined },
				pageSize: blogPostsPerPage,
				props: { tag },
			}
		)
	);
};

export function getRelatedPosts(allPosts: Post[], currentSlug: string, currentTags: string[]) {
	if (!isBlogEnabled || !isRelatedPostsEnabled) return [];
	const relatedPosts = getRandomizedPosts(
		allPosts.filter((post) => post.slug !== currentSlug && post.tags?.some((tag) => currentTags.includes(tag))),
		relatedPostsCount
	);
	if (relatedPosts.length < relatedPostsCount) {
		const morePosts = getRandomizedPosts(
			allPosts.filter((post) => post.slug !== currentSlug && !post.tags?.some((tag) => currentTags.includes(tag))),
			relatedPostsCount - relatedPosts.length
		);
		relatedPosts.push(...morePosts);
	}
	return relatedPosts;
}