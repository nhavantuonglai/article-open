import type { PaginateFunction } from 'astro';
import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';
import type { Post } from '~/types';
import { APP_BLOG } from 'nhavantuonglai:config';
import { cleanSlug, trimSlash, BLOG_BASE, POST_PERMALINK_PATTERN, CATEGORY_BASE, TAG_BASE } from './permalinks';

const generatePermalink = async ({
	id,
	slug,
	pubDatetime,
	category,
}: {
	id: string;
	slug: string;
	pubDatetime: Date;
	category: string | undefined;
}) =>{
	const year = String(pubDatetime.getFullYear()).padStart(4, '0');
	const month = String(pubDatetime.getMonth() + 1).padStart(2, '0');
	const day = String(pubDatetime.getDate()).padStart(2, '0');
	const hour = String(pubDatetime.getHours()).padStart(2, '0');
	const minute = String(pubDatetime.getMinutes()).padStart(2, '0');
	const second = String(pubDatetime.getSeconds()).padStart(2, '0');

	const permalink = POST_PERMALINK_PATTERN.replace('%slug%', slug)
		.replace('%id%', id)
		.replace('%category%', category || '')
		.replace('%year%', year)
		.replace('%month%', month)
		.replace('%day%', day)
		.replace('%hour%', hour)
		.replace('%minute%', minute)
		.replace('%second%', second);

	return permalink
		.split('/')
		.map((el) =>trimSlash(el))
		.filter((el) =>!!el)
		.join('/');
};

const getNormalizedPost = async (post: CollectionEntry<'post'>): Promise<Post>=>{
	const { id, slug: rawSlug = '', data } = post;
	const { Content, remarkPluginFrontmatter } = await post.render();

	const {
		pubDatetime: rawpubDatetime = new Date(),
		updateDate: rawUpdateDate,
		title,
		description,
		image,
		tags: rawTags = [],
		category: rawCategory,
		author,
		draft = false,
		metadata = {},
	} = data;

	const slug = cleanSlug(rawSlug);
	const pubDatetime = new Date(rawpubDatetime);
	const updateDate = rawUpdateDate ? new Date(rawUpdateDate) : undefined;
	const category = rawCategory ? cleanSlug(rawCategory) : undefined;
	const tags = rawTags.map((tag: string) =>cleanSlug(tag));

	return {
		id: id,
		slug: slug,
		permalink: await generatePermalink({ id, slug, pubDatetime, category }),

		pubDatetime: pubDatetime,
		updateDate: updateDate,

		title: title,
		description: description,
		image: image,

		category: category,
		tags: tags,
		author: author,

		draft: draft,

		metadata,

		Content: Content,

		readingTime: remarkPluginFrontmatter?.readingTime,
	};
};

const getRandomizedPosts = (array: Post[], num: number) =>{
	const newArray: Post[] = [];

	while (newArray.length < num && array.length >0) {
		const randomIndex = Math.floor(Math.random() * array.length);
		newArray.push(array[randomIndex]);
		array.splice(randomIndex, 1);
	}

	return newArray;
};

const load = async function (): Promise<Array<Post>>{
	const posts = await getCollection('post');
	const normalizedPosts = posts.map(async (post) =>await getNormalizedPost(post));

	const results = (await Promise.all(normalizedPosts))
		.sort((a, b) =>b.pubDatetime.valueOf() - a.pubDatetime.valueOf())
		.filter((post) =>!post.draft);

	return results;
};

let _posts: Array<Post>;

export const isBlogEnabled = APP_BLOG?.isEnabled ?? false;
export const isRelatedPostsEnabled = APP_BLOG?.isRelatedPostsEnabled ?? false;
export const isBlogListRouteEnabled = APP_BLOG?.list?.isEnabled ?? false;
export const isBlogPostRouteEnabled = APP_BLOG?.post?.isEnabled ?? false;
export const isBlogCategoryRouteEnabled = APP_BLOG?.category?.isEnabled ?? false;
export const isBlogTagRouteEnabled = APP_BLOG?.tag?.isEnabled ?? false;
export const blogListRobots = APP_BLOG?.list?.robots ?? '';
export const blogPostRobots = APP_BLOG?.post?.robots ?? '';
export const blogCategoryRobots = APP_BLOG?.category?.robots ?? '';
export const blogTagRobots = APP_BLOG?.tag?.robots ?? '';
export const blogPostsPerPage = APP_BLOG?.postsPerPage ?? 10;

export const fetchPosts = async (): Promise<Array<Post>>=>{
	if (!_posts) {
		_posts = await load();
	}

	return _posts;
	};

export const findPostsBySlugs = async (slugs: Array<string>): Promise<Array<Post>>=>{
	if (!Array.isArray(slugs)) return [];

	const posts = await fetchPosts();

	return slugs.reduce(function (r: Array<Post>, slug: string) {
		posts.some(function (post: Post) {
			return slug === post.slug && r.push(post);
		});
		return r;
	}, []);
	};

export const findPostsByIds = async (ids: Array<string>): Promise<Array<Post>>=>{
	if (!Array.isArray(ids)) return [];

	const posts = await fetchPosts();

	return ids.reduce(function (r: Array<Post>, id: string) {
		posts.some(function (post: Post) {
			return id === post.id && r.push(post);
		});
		return r;
	}, []);
};

export const findLatestPosts = async ({ count }: { count?: number }): Promise<Array<Post>>=>{
	const _count = count || 4;
	const posts = await fetchPosts();

	return posts ? posts.slice(0, _count) : [];
};

export const getStaticPathsBlogList = async ({ paginate }: { paginate: PaginateFunction }) =>{
	if (!isBlogEnabled || !isBlogListRouteEnabled) return [];
	return paginate(await fetchPosts(), {
		params: { blog: BLOG_BASE || undefined },
		pageSize: blogPostsPerPage,
	});
};

export const getStaticPathsBlogPost = async () =>{
	if (!isBlogEnabled || !isBlogPostRouteEnabled) return [];
	return (await fetchPosts()).flatMap((post) =>({
		params: {
			blog: post.permalink,
		},
		props: { post },
	}));
	};


export const getStaticPathsBlogTag = async ({ paginate }: { paginate: PaginateFunction }) =>{
	if (!isBlogEnabled || !isBlogTagRouteEnabled) return [];

	const posts = await fetchPosts();
	const tags = new Set<string>();
	posts.map((post) =>{
		Array.isArray(post.tags) && post.tags.map((tag) =>tags.add(tag.toLowerCase()));
	});

	return Array.from(tags).flatMap((tag) =>
		paginate(
			posts.filter((post) =>Array.isArray(post.tags) && post.tags.find((elem) =>elem.toLowerCase() === tag)),
			{
				params: { tag: tag, blog: TAG_BASE || undefined },
				pageSize: blogPostsPerPage,
				props: { tag },
			}
		)
	);
};

export function getRelatedPosts(allPosts: Post[], currentSlug: string, currentTags: string[]) {
	if (!isBlogEnabled || !isRelatedPostsEnabled) return [];

	const relatedPosts = getRandomizedPosts(
		allPosts.filter((post) =>post.slug !== currentSlug && post.tags?.some((tag) =>currentTags.includes(tag))),
		APP_BLOG.relatedPostsCount
	);

	if (relatedPosts.length < APP_BLOG.relatedPostsCount) {
		const morePosts = getRandomizedPosts(
			allPosts.filter((post) =>post.slug !== currentSlug && !post.tags?.some((tag) =>currentTags.includes(tag))),
			APP_BLOG.relatedPostsCount - relatedPosts.length
		);
		relatedPosts.push(...morePosts);
	}

	return relatedPosts;
}