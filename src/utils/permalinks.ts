import slugify from 'limax';
import { SITE, APP_BLOG } from 'nhavantuonglai:config';
import { trim } from '~/utils/utils';

const createPath = (...params: string[]): string => {
	const paths = params
		.map((s) => trim(s, '/'))
		.filter(Boolean)
		.join('/');
	return '/' + paths + (SITE.trailingSlash ? '/' : '');
};

const BASE_PATHNAME = trim(SITE.base || '/', '/');
export const cleanSlug = (text = ''): string =>
	trim(text, '/')
		.split('/')
		.map(slugify)
		.join('/');

export const BLOG_BASE = cleanSlug(APP_BLOG?.list?.pathname);
export const TAG_BASE = cleanSlug(APP_BLOG?.tag?.pathname) || 'tag';
export const POST_PERMALINK_PATTERN = trim(APP_BLOG?.post?.permalink || `${SITE.site}/article/%slug%`, '/');

export const getCanonical = (path = ''): string => {
	const url = new URL(path, SITE.site).toString();
	return SITE.trailingSlash ? url.endsWith('/') ? url : url + '/' : url.replace(/\/$/, '');
};

const definitivePermalink = (permalink: string): string => createPath(BASE_PATHNAME, permalink);

export const getPermalink = (slug = '', type = 'page'): string => {
	let path: string;
	switch (type) {
		case 'tag':
			path = createPath(TAG_BASE, trim(slug, '/'));
			break;
		case 'post':
			path = createPath(trim(slug, '/'));
			break;
		case 'page':
		default:
			path = createPath(slug);
			break;
	}
	return definitivePermalink(path);
};

export const getHomePermalink = (): string => definitivePermalink('');
export const getBlogPermalink = (): string => definitivePermalink(BLOG_BASE);
export const getAsset = (path: string): string => createPath(BASE_PATHNAME, path);
export { trim };