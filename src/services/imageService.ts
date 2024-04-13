import { getSanityClient } from '@frontend/utils/sanity.client';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

// https://www.sanity.io/docs/image-url

const imageService = {
  urlFor: (source: SanityImageSource): string => {
    const builder = imageUrlBuilder(getSanityClient());

    return builder.image(source).quality(85).url();
  },
};

export default imageService;
