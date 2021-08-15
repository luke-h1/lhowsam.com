import { constants } from './src/shared/constants';

const title = constants.site;
const description = constants.intro;

const SEO = {
  title,
  description,
  canonical: 'https://lhowsam.com',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://lhowsam.com',
    title,
    description,
  },
  twitter: {
    handle: '@lukeH_1999',
    site: '@lukeH_1999',
    cardType: 'summary_large_image',
  },
  images: [
    {
      url: 'https://lhowsam.com/icons/logo.png',
      alt: title,
    },
  ],
};

export default SEO;
