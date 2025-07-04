import merge from 'lodash.merge';
import type { Config } from '~/types';

const colorTokens = {
	default: 'var(--aw-color-default)',
	muted: 'var(--aw-color-muted)',
	page: 'var(--aw-color-page)',
	primary: 'var(--aw-color-primary)',
};

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
				colors: colorTokens,
			},
		},
	},

	analytics: {
		vendors: {
			googleAnalytics: { id: undefined, partytown: true },
		},
	},
};

const getConfig = (key, userConfig) => merge({}, defaultConfig[key], userConfig);

export default (config) => ({

	SITE: getConfig('site', config?.site),
	I18N: getConfig('i18n', config?.i18n),
	METADATA: getConfig('metadata', config?.metadata),
	APP_BLOG: getConfig('apps.blog', config?.apps?.blog),
	UI: getConfig('ui', config?.ui),
	ANALYTICS: getConfig('analytics', config?.analytics),

	theme: {
		extend: {
			colors: {
				default: colorTokens.default,
				muted: colorTokens.muted,
				page: colorTokens.page,
				primary: colorTokens.primary,
			},
		},
	},

});