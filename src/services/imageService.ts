import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { sanityClient } from './Client/sanity';

const imageService = {
  urlFor: (source: SanityImageSource): string => {
    const builder = imageUrlBuilder(sanityClient);
    return builder.image(source).quality(100).url();
  },
};

export default imageService;
