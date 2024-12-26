import fs from 'node:fs';
import os from 'node:os';
import yaml from 'js-yaml';
import configBuilder from './utils/config-builder';

const loadConfigFile = () => {
	const fileConfig = yaml.load(fs.readFileSync('src/config.yaml', 'utf8'));
	return configBuilder(fileConfig);
};

const updateRobotsTxt = (config, logger) => {
	const buildLogger = logger.fork('nhavantuonglai');
	buildLogger.info('Updating `robots.txt` with `sitemap-index.xml` ...');

	try {
		const outDir = config.outDir;
		const publicDir = config.publicDir;
		const sitemapName = 'sitemap-index.xml';
		const sitemapFile = new URL(sitemapName, outDir);
		const robotsTxtFile = new URL('robots.txt', publicDir);
		const robotsTxtFileInOut = new URL('robots.txt', outDir);

		const hasIntegration = Array.isArray(config?.integrations) && config.integrations?.some((e) => e?.name === '@astrojs/sitemap');
		const sitemapExists = fs.existsSync(sitemapFile);

		if (hasIntegration && sitemapExists) {
			const robotsTxt = fs.readFileSync(robotsTxtFile, { encoding: 'utf8', flags: 'a+' });
			const sitemapUrl = new URL(sitemapName, String(new URL(config.base, config.site)));
			const pattern = /^Sitemap:(.*)$/m;

			const updatedContent = pattern.test(robotsTxt)
				? robotsTxt.replace(pattern, `Sitemap: ${sitemapUrl}`)
				: `${os.EOL}${os.EOL}Sitemap: ${sitemapUrl}`;

			fs.writeFileSync(robotsTxtFileInOut, updatedContent, { encoding: 'utf8', flags: 'w' });
		}
	} catch (err) {
		// Handle error silently
	}
};

const tasksIntegration = () => {
	let config;

	return {
		name: 'nhavantuonglai:tasks',
		hooks: {
			'astro:config:setup': async ({ config: astroConfig, logger, updateConfig, addWatchFile }) => {
				const buildLogger = logger.fork('nhavantuonglai');
				const virtualModuleId = 'nhavantuonglai:config';
				const resolvedVirtualModuleId = '\0' + virtualModuleId;
				const { SITE, I18N, METADATA, APP_BLOG, UI, ANALYTICS } = loadConfigFile();

				updateConfig({
					site: SITE.site,
					base: SITE.base,
					trailingSlash: SITE.trailingSlash ? 'always' : 'never',
					vite: {
						plugins: [
							{
								name: 'vite-plugin-nhavantuonglai-config',
								resolveId(id) {
									return id === virtualModuleId ? resolvedVirtualModuleId : null;
								},
								load(id) {
									if (id === resolvedVirtualModuleId) {
										return `export const SITE = ${JSON.stringify(SITE)};
														export const I18N = ${JSON.stringify(I18N)};
														export const METADATA = ${JSON.stringify(METADATA)};
														export const APP_BLOG = ${JSON.stringify(APP_BLOG)};
														export const UI = ${JSON.stringify(UI)};
														export const ANALYTICS = ${JSON.stringify(ANALYTICS)};`;
									}
								},
							},
						],
					},
				});

				addWatchFile(new URL('./src/config.yaml', astroConfig.root));
				buildLogger.info("nhavantuonglai `src/config.yaml` has been loaded.");
			},

			'astro:config:done': async ({ config: cfg }) => {
				config = cfg;
			},

			'astro:build:done': async ({ logger }) => {
				updateRobotsTxt(config, logger);
			},
		},
	};
};

export default tasksIntegration;