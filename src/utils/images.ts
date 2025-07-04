import { getImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';
import type { OpenGraph } from '@astrolib/seo';
import { IMAGE_CONFIG } from 'nhavantuonglai:config';

const load = async function () {
	let images: Record<string, () => Promise<unknown>> | undefined = undefined;
	try {
		images = import.meta.glob('~/assets/images/**/*.{jpeg,jpg,png,tiff,webp,gif,svg,JPEG,JPG,PNG,TIFF,WEBP,GIF,SVG}');
	} catch (e) {
		console.error('Error loading images:', e);
	}
	return images;
};

let _images: Record<string, () => Promise<unknown>> | undefined = undefined;

export const fetchLocalImages = async () => {
	_images = _images || (await load());
	return _images;
};

export const findImage = async (imagePath?: string | ImageMetadata | null): Promise<string | ImageMetadata | undefined | null> => {
	if (typeof imagePath !== 'string') return imagePath;
	if (imagePath.match(/^(https?:|\/)/)) return imagePath;
	if (!imagePath.startsWith('~/assets/images')) return imagePath;
	const images = await fetchLocalImages();
	const key = imagePath.replace('~/', '/src/');
	if (!images?.[key]) {
		console.warn(`Hình ảnh không tìm thấy: ${key}.`);
		return null;
	}
	return ((await images[key]()) as { default: ImageMetadata }).default;
};

export const adaptOpenGraphImages = async (openGraph: OpenGraph = {}, astroSite: URL | undefined = new URL('')): Promise<OpenGraph> => {
	if (!openGraph?.images?.length) return openGraph;
	const { defaultWidth = 1200, defaultHeight = 626 } = IMAGE_CONFIG?.openGraph || {};
	const adaptedImages = await Promise.all(
		openGraph.images.map(async (image) => {
			if (!image?.url) return null;
			const resolvedImage = await findImage(image.url) as ImageMetadata | undefined;
			if (!resolvedImage) return null;
			const _image = await getImage({
				src: resolvedImage,
				alt: 'Văn hay trong hiện tại, chữ tốt ở tương lai.',
				width: image?.width || defaultWidth,
				height: image?.height || defaultHeight,
			});
			if (typeof _image === 'object' && 'src' in _image && typeof _image.src === 'string') {
				return {
					url: String(new URL(_image.src, astroSite)),
					width: 'width' in _image && typeof _image.width === 'number' ? _image.width : undefined,
					height: 'height' in _image && typeof _image.height === 'number' ? _image.height : undefined,
				};
			}
			return null;
		})
	);
	return { ...openGraph, images: adaptedImages.filter(Boolean) };
};