import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import icon from 'astro-icon';
import compress from 'astro-compress';
import react from '@astrojs/react';
import astrowind from './src/integration';
import vercel from '@astrojs/vercel';
import obfuscator from 'webpack-obfuscator';

export default {
	plugins: [
		{
			name: 'obfuscate-js',
			enforce: 'post',
			transform(code, id) {
				if (id.endsWith('.js') || id.endsWith('.ts')) {
					return obfuscator().obfuscate(code, {
						compact: true,
						controlFlowFlattening: true,
						deadCodeInjection: true,
						stringArrayEncoding: ['base64'],
						renameGlobals: true
					}).getObfuscatedCode();
				}
			}
		}
	]
};

import { 
	readingTimeRemarkPlugin, 
	responsiveTablesRehypePlugin, 
	lazyImagesRehypePlugin 
} from './src/utils/frontmatter.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const hasExternalScripts = false;
const whenExternalScripts = (items = []) =>
	hasExternalScripts
		? Array.isArray(items)
			? items.map((item) => item())
			: [items()]
		: [];

export default defineConfig({

	output: 'server',
	adapter: vercel(),

	integrations: [

		react(),
		tailwind({
			applyBaseStyles: false,
		}),

		sitemap(),

		mdx(),

		icon({
			include: {
				tabler: ['*'],
				'flat-color-icons': [
					'template', 'gallery', 'approval', 'document', 
					'advertising', 'currency-exchange', 
					'voice-presentation', 'business-contact', 
					'database',
				],
			},
		}),

		...whenExternalScripts(() =>
			partytown({
				config: { forward: ['dataLayer.push'] },
			})
		),

		compress({

			CSS: true,
			HTML: {
				'html-minifier-terser': {
					removeAttributeQuotes: false,
				},
			},
			Image: false,
			JavaScript: true,
			SVG: false,
			Logger: 1,
		}),
		astrowind(),
	],

	markdown: {
		remarkPlugins: [readingTimeRemarkPlugin],
		rehypePlugins: [responsiveTablesRehypePlugin, lazyImagesRehypePlugin],
	},

	vite: {

		resolve: {
			alias: {
				'~': path.resolve(__dirname, './src'),
			},
			extensions: ['.js', '.jsx', '.ts', '.tsx']
		},

	},

});