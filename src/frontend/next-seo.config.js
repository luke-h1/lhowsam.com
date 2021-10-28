import { constants } from './src/data/constants';

const title = constants.site;

const SEO = {
  title,
  canonical: 'https://lhowsam.com',
  description: "My website, built with Next.js, Typescript & Sanity.io",
  openGraph: {
    profile: {
      firstName: 'Luke',
      lastName: 'Howsam',
      username: 'luke-h1',
    },
    type: 'website',
    locale: 'en_GB',
    url: 'https://lhowsam.com',
    description: constants.intro,
    site_name: 'lhowsam.com',
  },
  images: [
    {
      url: 'https://lhowsam.com/icons/logo.png',
      alt: title,
    },
  ],
};

export default SEO;
