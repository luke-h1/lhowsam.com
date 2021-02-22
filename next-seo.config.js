const title = 'Luke Howsam – Developer, tester ';
const description = 'Javascript + Typescript enthusiast and software tester';

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
      url: 'https://lhowsam.com/static/images/logo.png',
      alt: title,
    },
  ],
};

export default SEO;
