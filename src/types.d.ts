import type { HTMLAttributes, ImageMetadata } from 'astro/types';

export interface Post {
	id: string;
	slug: string;
	permalink: string;
	pubDatetime: Date;
	title: string;
	description?: string;
	image?: ImageMetadata | string;
	tags?: string[];
	Content?: string;
	readingTime?: number;
}

export interface Image {
	src: string;
	alt?: string;
}


export interface Hero extends BaseContent {
	callToAction1?: CallToAction;
	callToAction2?: CallToAction;
}