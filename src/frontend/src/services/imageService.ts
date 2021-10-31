import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import cmsClient from '../utils/sanity';

const imageBuilder = imageUrlBuilder(cmsClient);

// https://www.sanity.io/docs/image-url

const imageService = {
  urlFor: (source: SanityImageSource): string => {
    return imageBuilder.image(source).url();
  },
  buildURL: (url: string, obj: Object) => {
    const query = Object.entries(obj).map(pair => pair.map(encodeURIComponent).join("=")).join("&");
    return `${url}${query}`
  }
};

export default imageService;
