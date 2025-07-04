import { getImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';
import type { OpenGraph } from '@astrolib/seo';

// Load all image assets dynamically
const loadImages = async (): Promise<Record<string, () => Promise<ImageMetadata>>> => {
  return import.meta.glob('~/assets/images/**/*.{jpeg,jpg,png,tiff,webp,gif,svg,JPEG,JPG,PNG,TIFF,WEBP,GIF,SVG}');
};

// Cache images on first load
let cachedImages: Record<string, () => Promise<ImageMetadata>> | undefined;
export const fetchLocalImages = async () => {
  cachedImages = cachedImages ?? (await loadImages());
  return cachedImages;
};

// Find an image by path, handling local and remote cases
export const findImage = async (imagePath?: string | ImageMetadata | null): Promise<string | ImageMetadata | undefined> => {
  if (!imagePath || typeof imagePath !== 'string') return imagePath;

  if (imagePath.startsWith('http://') || imagePath.startsWith('https://') || imagePath.startsWith('/')) {
    return imagePath;
  }

  if (!imagePath.startsWith('~/assets/images')) return imagePath;

  const images = await fetchLocalImages();
  const key = imagePath.replace('~/', '/src/');
  return images[key]?.().then((module) => (module as { default: ImageMetadata }).default) ?? undefined;
};

// Adapt OpenGraph images for SEO
export const adaptOpenGraphImages = async (openGraph: OpenGraph = {}, astroSite: URL = new URL('')): Promise<OpenGraph> => {
  if (!openGraph.images?.length) return openGraph;

  const adaptedImages = await Promise.all(
    openGraph.images.map(async (image) => {
      if (!image?.url) return undefined;

      const resolvedImage = await findImage(image.url) as ImageMetadata | undefined;
      if (!resolvedImage) return undefined;

      const optimizedImage = await getImage({
        src: resolvedImage,
        alt: image.alt || 'Default image description',
        width: image.width || 1200,
        height: image.height || 626,
      });

      return {
        url: 'src' in optimizedImage && typeof optimizedImage.src === 'string' ? new URL(optimizedImage.src, astroSite).toString() : '',
        width: 'width' in optimizedImage ? optimizedImage.width : undefined,
        height: 'height' in optimizedImage ? optimizedImage.height : undefined,
      };
    })
  );

  return { ...openGraph, images: adaptedImages.filter((img): img is NonNullable<typeof img> => !!img) };
};