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

export default defineConfig({
  output: 'hybrid',
  experimental: {
	viewTransitions: true,
  },
  vite: {
	build: {
	  rollupOptions: {
		output: {
		  entryFileNames: 'entry.[hash].js',
		  chunkFileNames: 'chunks/chunk.[hash].js',
		  assetFileNames: 'assets/asset.[hash][extname]',
		}
	  }
	},
	ssr: {
	  noExternal: ['*']
	}
  }
});

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

	output: 'static',

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