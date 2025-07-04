import merge from 'lodash.merge';
import type { Config } from '~/types';

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
			post: { isEnabled: true, permalink: '/article/%slug%', robots: { index: true, follow: true } },
			tag: { isEnabled: true, pathname: 'tag', robots: { index: false, follow: true } },
		},
	},
	ui: {
		theme: 'system',
		classes: {},
		tokens: {
			default: {
				colors: {
					default: 'var(--aw-color-default)',
					muted: 'var(--aw-color-muted)',
					page: 'var(--aw-color-page)',
					primary: 'var(--aw-color-primary)',
				},
			},
		},
	},
	analytics: {
		vendors: {
			googleAnalytics: { id: undefined, partytown: true },
		},
	},
	image: {
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
		deviceSizes: [640, 750, 828, 960, 1080, 1280, 1668, 1920, 2048, 2560, 3200, 3840, 4480, 5120, 6016],
		openGraph: {
			defaultWidth: 1200,
			defaultHeight: 626,
		},
	},
};

const getConfig = (key, userConfig) => merge({}, defaultConfig[key], userConfig);

export default (config) => {
	const UI = getConfig('ui', config?.ui);
	return {
		SITE: getConfig('site', config?.site),
		I18N: getConfig('i18n', config?.i18n),
		METADATA: getConfig('metadata', config?.metadata),
		APP_BLOG: getConfig('apps.blog', config?.apps?.blog),
		UI,
		ANALYTICS: getConfig('analytics', config?.analytics),
		IMAGE_CONFIG: getConfig('image', config?.image),
		theme: {
			extend: {
				colors: UI.tokens.default.colors,
			},
		},
	};
};