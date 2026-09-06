import { IMAGE_POLICY } from './image-policy';

export interface SharedNextImageConfig {
  formats: Array<'image/avif' | 'image/webp'>;
  deviceSizes: number[];
  imageSizes: number[];
  minimumCacheTTL: number;
}

export function createNextImageConfig(): SharedNextImageConfig {
  return {
    formats: [...IMAGE_POLICY.nextImage.formats],
    deviceSizes: [...IMAGE_POLICY.nextImage.deviceSizes],
    imageSizes: [...IMAGE_POLICY.nextImage.imageSizes],
    minimumCacheTTL: IMAGE_POLICY.nextImage.minimumCacheTTL,
  };
}
