import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import studioClient from '../utils/sanity.client';

// https://www.sanity.io/docs/image-url

const imageService = {
  urlFor: (source: SanityImageSource): string => {
    const builder = imageUrlBuilder(studioClient);
    return builder.image(source).url();
  },
};

export default imageService;
