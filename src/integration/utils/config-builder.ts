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
			tag: { isEnabled: true, pathname: 'tag', robots: { index: false, follow: true } },
		},
	},
	ui: {
		theme: 'system',
		classes: {},
		tokens: {
			default: {
				colors: {
					default: 'rgb(33 39 55)',
					heading: 'rgb(248 243 240)',
					muted: 'rgb(33 39 55 / 66%)',
					page: 'rgb(248 243 240)',
					primary: 'rgb(255 114 94)',
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