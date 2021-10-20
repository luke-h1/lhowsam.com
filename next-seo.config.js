import { constants } from './src/data/constants';

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
  images: [
    {
      url: 'https://lhowsam.com/icons/logo.png',
      alt: title,
    },
  ],
};

export default SEO;
