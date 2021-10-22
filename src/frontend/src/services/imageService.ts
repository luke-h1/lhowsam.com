import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import cmsClient from '../utils/sanity';

const imageBuilder = imageUrlBuilder(cmsClient);

// https://www.sanity.io/docs/image-url

const imageService = {
  urlFor: (source: SanityImageSource): string => {
    return imageBuilder.image(source).url();
  },
  getSEOImage: (source: SanityImageSource): string => {
    return imageBuilder.image(source).fit('fill').width(1200).height(630).url()
  }
};

export default imageService;
