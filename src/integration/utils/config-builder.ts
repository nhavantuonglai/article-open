import merge from 'lodash.merge';
import type { MetaData } from '~/types';

const defaultConfig = {
	site: {
		name: 'Website',
		site: undefined,
		base: '/',
		trailingSlash: false,
		googleSiteVerificationId: '',
	},
	metadata: {
		title: { default: 'Website', template: '%s' },
		description: '',
		robots: { index: false, follow: false },
		openGraph: { type: 'website' },
	},
	i18n: { language: 'en', textDirection: 'ltr' },
	apps: {
		blog: {
			isEnabled: false,
			postsPerPage: 6,
			isRelatedPostsEnabled: false,
			relatedPostsCount: 4,
			post: { isEnabled: true, permalink: '/blog/%slug%', robots: { index: true, follow: true } },
			list: { isEnabled: true, pathname: 'blog', robots: { index: true, follow: true } },
			category: { isEnabled: true, pathname: 'category', robots: { index: true, follow: true } },
			tag: { isEnabled: true, pathname: 'tag', robots: { index: false, follow: true } },
		},
	},
	ui: {
		theme: 'system',
		classes: {},
		tokens: {
			default: {
				fonts: {},
				colors: {
					default: 'rgb(16 16 16)',
					heading: 'rgb(0 0 0)',
					muted: 'rgb(16 16 16 / 66%)',
					bgPage: 'rgb(255 255 255)',
					primary: 'rgb(1 97 239)',
					secondary: 'rgb(1 84 207)',
					accent: 'rgb(109 40 217)',
				},
			},
			dark: {
				fonts: {},
				colors: {
					default: 'rgb(229 236 246)',
					heading: 'rgb(247, 248, 248)',
					muted: 'rgb(229 236 246 / 66%)',
					bgPage: 'rgb(3 6 32)',
					primary: 'rgb(1 97 239)',
					secondary: 'rgb(1 84 207)',
					accent: 'rgb(109 40 217)',
				},
			},
		},
	},
	analytics: {
		vendors: {
			googleAnalytics: { id: undefined, partytown: true },
		},
	},
};

const getConfig = <T>(key: keyof typeof defaultConfig, userConfig?: T): T => {
	return merge({}, defaultConfig[key], userConfig);
};

export default (config: Config) => ({
	SITE: getConfig('site', config?.site),
	I18N: getConfig('i18n', config?.i18n),
	METADATA: getConfig('metadata', config?.metadata),
	APP_BLOG: getConfig('apps.blog', config?.apps?.blog),
	UI: getConfig('ui', config?.ui),
	ANALYTICS: getConfig('analytics', config?.analytics),
});