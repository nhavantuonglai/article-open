import type { AstroComponentFactory } from 'astro/runtime/server/index.js';
import type { HTMLAttributes, ImageMetadata } from 'astro/types';

export interface Post {
	id: string;
	slug: string;
	title: string;
	content: string;
	publishDate: Date;
	tags: string[];
	metadata: MetaData;
}

export interface MetaData {
	title: string;
	description: string;
	canonical?: string;
	openGraph?: OpenGraphData;
	twitter?: TwitterData;
}

export interface OpenGraphData {
	title: string;
	description: string;
	image: ImageData;
	type: 'article' | 'website';
}

export interface TwitterData {
	card: 'summary' | 'summary_large_image';
	creator?: string;
	image: ImageData;
}

export interface BaseComponent {
	id: string;
	theme: 'light' | 'dark';
	className?: string;
}

export interface ContentBlock {
	title: string;
	description?: string;
	image?: ImageData;
}

export interface ImageData {
	src: string;
	alt: string;
	width?: number;
	height?: number;
}

export interface Hero extends BaseComponent {
	headline: string;
	subheading?: string;
	image: ImageData;
	cta: CallToAction[];
}

export interface Social {
	platform: 'twitter' | 'linkedin';
	url: string;
}