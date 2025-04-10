import { z, defineCollection } from 'astro:content';

const metadataDefinition = () =>
	z
		.object({

			title: z.string().optional(),
			ignoreTitleTemplate: z.boolean().optional(),

			canonical: z.string().url().optional(),

			robots: z
				.object({
					index: z.boolean().optional(),
					follow: z.boolean().optional(),
				})
				.optional(),

			description: z.string().optional(),

			openGraph: z
				.object({
					url: z.string().optional(),
					siteName: z.string().optional(),
					images: z
						.array(
							z.object({
								url: z.string(),
								width: z.number().optional(),
								height: z.number().optional(),
							})
						)
						.optional(),
					locale: z.string().optional(),
					type: z.string().optional(),
				})
				.optional(),

			twitter: z
				.object({
					handle: z.string().optional(),
					site: z.string().optional(),
					cardType: z.string().optional(),
				})
				.optional(),
		})

		.optional();

const postCollection = defineCollection({

	schema: z.object({

		pubDatetime: z.date().optional(),

		title: z.string(),
		description: z.string().optional(),
		image: z.string().optional(),

		tags: z.array(z.string()).optional(),

		metadata: metadataDefinition(),

	}),

});

export const collections = {
	post: postCollection,
};