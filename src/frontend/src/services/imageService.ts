import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { OpenGraphMedia } from 'next-seo/lib/types';
import cmsClient from '../utils/sanity';

const imageBuilder = imageUrlBuilder(cmsClient);

// https://www.sanity.io/docs/image-url

const imageService = {
  urlFor: (source: SanityImageSource): string => {
    return imageBuilder.image(source).url();
  },
  getOpenGraphImage: (title: string): OpenGraphMedia => ({
    url: `https://lhowsam.com/api/og?title=${encodeURIComponent(title)}`,
    width: 1200,
    height: 630,
  })
};

export default imageService;
