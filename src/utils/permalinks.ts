import slugify from 'limax';
import { SITE, APP_BLOG } from 'nhavantuonglai:config';
import { trim } from '~/utils/utils';

const trimSlash = (s: string) => trim(trim(s, '/'));
const createPath = (...params: string[]) =>
	'/' + params.map(trimSlash).filter(Boolean).join('/') + (SITE.trailingSlash ? '/' : '');

const BASE_PATHNAME = SITE.base || '/';
const cleanSlug = (text = '') => text.split('/').map(slugify).join('/');

const BLOG_BASE = cleanSlug(APP_BLOG?.list?.pathname);
const TAG_BASE = cleanSlug(APP_BLOG?.tag?.pathname) || 'tag';
const POST_PERMALINK_PATTERN = trimSlash(APP_BLOG?.post?.permalink || 'https://nhavantuonglai.com/article/%slug%');

const getCanonical = (path = '') => {
	const url = new URL(path, SITE.site).toString();
	return SITE.trailingSlash ? url.replace(/(?<!:)\/$/, '') + '/' : url.replace(/\/$/, '');
};

const getPermalink = (slug = '', type = 'page') => {
	const base = type === 'tag' ? TAG_BASE : type === 'post' ? '' : slug;
	return definitivePermalink(createPath(base, trimSlash(slug)));
};

const getHomePermalink = () => getPermalink('/');
const getBlogPermalink = () => getPermalink(BLOG_BASE);
const getAsset = (path: string) => createPath(BASE_PATHNAME, path);
const definitivePermalink = (permalink: string) => createPath(BASE_PATHNAME, permalink);

export {
	trimSlash,
	cleanSlug,
	BLOG_BASE,
	TAG_BASE,
	POST_PERMALINK_PATTERN,
	getCanonical,
	getPermalink,
	getHomePermalink,
	getBlogPermalink,
	getAsset,
};