import { getImage } from 'astro:assets';
import { transformUrl, parseUrl } from 'unpic';

import type { ImageMetadata } from 'astro';
import type { HTMLAttributes } from 'astro/types';

type Layout = 'fixed' | 'constrained' | 'fullWidth' | 'cover' | 'responsive' | 'contained';

export interface AttributesProps extends HTMLAttributes<'img'>{}

export interface ImageProps extends Omit<HTMLAttributes<'img'>, 'src'>{
	src?: string | ImageMetadata | null;
	width?: string | number | null;
	height?: string | number | null;
	alt?: string | null;
	loading?: 'eager' | 'lazy' | null;
	decoding?: 'sync' | 'async' | 'auto' | null;
	style?: string;
	srcset?: string | null;
	sizes?: string | null;
	fetchpriority?: 'high' | 'low' | 'auto' | null;

	layout?: Layout;
	widths?: number[] | null;
	aspectRatio?: string | number | null;
}

export type ImagesOptimizer = (
	image: ImageMetadata | string,
	breakpoints: number[],
	width?: number,
	height?: number
) =>Promise<Array<{ src: string; width: number }>>;

const config = {
	imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

	deviceSizes: [
		640,
		750,
		828,
		960,
		1080,
		1280,
		1668,
		1920,
		2048,
		2560,
		3200,
		3840,
		4480,
		5120,
		6016,
	],

	formats: ['image/webp'],
};

const computeHeight = (width: number, aspectRatio: number) =>{
	return Math.floor(width / aspectRatio);
};

const parseAspectRatio = (aspectRatio: number | string | null | undefined): number | undefined =>{
	if (typeof aspectRatio === 'number') return aspectRatio;

	if (typeof aspectRatio === 'string') {
		const match = aspectRatio.match(/(\d+)\s*[/:]\s*(\d+)/);

		if (match) {
			const [, num, den] = match.map(Number);
			if (den && !isNaN(num)) return num / den;
		} else {
			const numericValue = parseFloat(aspectRatio);
			if (!isNaN(numericValue)) return numericValue;
		}
	}

	return undefined;
};

export const getSizes = (width?: number, layout?: Layout): string | undefined =>{
	if (!width || !layout) {
		return undefined;
	}
	switch (layout) {

		case `constrained`:
			return `(min-width: ${width}px) ${width}px, 100vw`;

		case `fixed`:
			return `${width}px`;

		case `fullWidth`:
			return `100vw`;

		default:
			return undefined;
	}
};

const pixelate = (value?: number) =>(value || value === 0 ? `${value}px` : undefined);

const getStyle = ({
	width,
	height,
	aspectRatio,
	layout,
	objectFit = 'cover',
	objectPosition = 'center',
	background,
}: {
	width?: number;
	height?: number;
	aspectRatio?: number;
	objectFit?: string;
	objectPosition?: string;
	layout?: string;
	background?: string;
}) =>{
	const styleEntries: Array<[prop: string, value: string | undefined]>= [
		['object-fit', objectFit],
		['object-position', objectPosition],
	];

	if (background?.startsWith('https:') || background?.startsWith('http:') || background?.startsWith('data:')) {
		styleEntries.push(['background-image', `url(${background})`]);
		styleEntries.push(['background-size', 'cover']);
		styleEntries.push(['background-repeat', 'no-repeat']);
	} else {
		styleEntries.push(['background', background]);
	}
	if (layout === 'fixed') {
		styleEntries.push(['width', pixelate(width)]);
		styleEntries.push(['height', pixelate(height)]);
		styleEntries.push(['object-position', 'top left']);
	}
	if (layout === 'constrained') {
		styleEntries.push(['max-width', pixelate(width)]);
		styleEntries.push(['max-height', pixelate(height)]);
		styleEntries.push(['aspect-ratio', aspectRatio ? `${aspectRatio}` : undefined]);
		styleEntries.push(['width', '100%']);
	}
	if (layout === 'fullWidth') {
		styleEntries.push(['width', '100%']);
		styleEntries.push(['aspect-ratio', aspectRatio ? `${aspectRatio}` : undefined]);
		styleEntries.push(['height', pixelate(height)]);
	}
	if (layout === 'responsive') {
		styleEntries.push(['width', '100%']);
		styleEntries.push(['height', 'auto']);
		styleEntries.push(['aspect-ratio', aspectRatio ? `${aspectRatio}` : undefined]);
	}
	if (layout === 'contained') {
		styleEntries.push(['max-width', '100%']);
		styleEntries.push(['max-height', '100%']);
		styleEntries.push(['object-fit', 'contain']);
		styleEntries.push(['aspect-ratio', aspectRatio ? `${aspectRatio}` : undefined]);
	}
	if (layout === 'cover') {
		styleEntries.push(['max-width', '100%']);
		styleEntries.push(['max-height', '100%']);
	}

	const styles = Object.fromEntries(styleEntries.filter(([, value]) =>value));

	return Object.entries(styles)
		.map(([key, value]) =>`${key}: ${value};`)
		.join(' ');
};

const getBreakpoints = ({
	width,
	breakpoints,
	layout,
}: {
	width?: number;
	breakpoints?: number[];
	layout: Layout;
}): number[] =>{
	if (layout === 'fullWidth' || layout === 'cover' || layout === 'responsive' || layout === 'contained') {
		return breakpoints || config.deviceSizes;
	}
	if (!width) {
		return [];
	}
	const doubleWidth = width * 2;
	if (layout === 'fixed') {
		return [width, doubleWidth];
	}
	if (layout === 'constrained') {
		return [
			width,
			doubleWidth,
			...(breakpoints || config.deviceSizes).filter((w) =>w < doubleWidth),
		];
	}

	return [];
};

export const astroAsseetsOptimizer: ImagesOptimizer = async (image, breakpoints) =>{
	if (!image || typeof image === 'string') {
		return [];
	}

	return Promise.all(
		breakpoints.map(async (w: number) =>{
			const url = (await getImage({ src: image, width: w })).src;
			return {
				src: url,
				width: w,
			};
		})
	);
};

export const unpicOptimizer: ImagesOptimizer = async (image, breakpoints, width, height) =>{
	if (!image || typeof image !== 'string') {
		return [];
	}

	const urlParsed = parseUrl(image);
	if (!urlParsed) {
		return [];
	}

	return Promise.all(
		breakpoints.map(async (w: number) =>{
			const url =
				transformUrl({
					url: image,
					width: w,
					height: width && height ? computeHeight(w, width / height) : height,
					cdn: urlParsed.cdn,
				}) || image;
			return {
				src: String(url),
				width: w,
			};
		})
	);
};

export async function getImagesOptimized(
	image: ImageMetadata | string,
	{ src: _, width, height, sizes, aspectRatio, widths, layout = 'constrained', style = '', ...rest }: ImageProps,
	transform: ImagesOptimizer = () =>Promise.resolve([])
): Promise<{ src: string; attributes: AttributesProps }>{
	if (typeof image !== 'string') {
		width ||= Number(image.width) || undefined;
		height ||= typeof width === 'number' ? computeHeight(width, image.width / image.height) : undefined;
	}

	width = (width && Number(width)) || undefined;
	height = (height && Number(height)) || undefined;

	widths ||= config.deviceSizes;
	sizes ||= getSizes(Number(width) || undefined, layout);
	aspectRatio = parseAspectRatio(aspectRatio);

	let breakpoints = getBreakpoints({ width: width, breakpoints: widths, layout: layout });
	breakpoints = [...new Set(breakpoints)].sort((a, b) =>a - b);

	const srcset = (await transform(image, breakpoints, Number(width) || undefined, Number(height) || undefined))
		.map(({ src, width }) =>`${src} ${width}w`)
		.join(', ');

	return {
		src: typeof image === 'string' ? image : image.src,
		attributes: {
			width: width,
			height: height,
			srcset: srcset || undefined,
			sizes: sizes,
			style: `${getStyle({
				width: width,
				height: height,
				aspectRatio: aspectRatio,
				layout: layout,
			})}${style ?? ''}`,
			...rest,
		},
	};
}