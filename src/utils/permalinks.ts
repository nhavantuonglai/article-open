import slugify from 'limax';
import { SITE, APP_BLOG } from 'nhavantuonglai:config';
import { trim } from '~/utils/utils';

// Utility to trim slashes
export const trimSlash = (s: string = ''): string => trim(trim(s, '/'));

// Create a URL path with proper slash handling
const createPath = (...segments: string[]): string => {
  const paths = segments.map(trimSlash).filter(Boolean).join('/');
  return `/${paths}${SITE.trailingSlash && paths ? '/' : ''}`;
};

// Clean and slugify text for URLs
export const cleanSlug = (text = ''): string => 
  trimSlash(text).split('/').map(slugify).join('/');

export const BLOG_BASE = cleanSlug(APP_BLOG?.list?.pathname) || 'blog';
export const TAG_BASE = cleanSlug(APP_BLOG?.tag?.pathname) || 'tag';
export const POST_PERMALINK_PATTERN = trimSlash(APP_BLOG?.post?.permalink || '/article/%slug%');

// Generate canonical URL with proper trailing slash
export const getCanonical = (path = ''): string => {
  const url = new URL(path, SITE.site).toString();
  return SITE.trailingSlash ? url.replace(/\/$/, '') + '/' : url.replace(/\/$/, '');
};

// Unified permalink generator
export const getPermalink = (slug = '', type: 'page' | 'post' | 'tag' | 'home' | 'blog' = 'page'): string => {
  let path: string;
  switch (type) {
    case 'home':
      path = '';
      break;
    case 'blog':
      path = BLOG_BASE;
      break;
    case 'tag':
      path = createPath(TAG_BASE, slug);
      break;
    case 'post':
      path = createPath(slug);
      break;
    case 'page':
    default:
      path = createPath(slug);
      break;
  }
  return getCanonical(path);
};

// Get asset URL
export const getAsset = (path: string): string => createPath(trimSlash(SITE.base || ''), path);