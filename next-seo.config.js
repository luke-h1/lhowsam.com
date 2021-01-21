const title = 'lhowsam';
const description = 'My Portfolio built with Next JS, MDX, styled-components';

const SEO = {
  title,
  description,
  canonical: 'https://lhowsam.com',
  openGraph: {
    type: 'website',
    locale: 'en_gb',
    url: 'https://lhowsam.com',
    title,
    description,
    images: [
      {
        url: 'https://lhowsam.com/og.png',
        alt: 'code icon',
        width: 512,
        height: 512,
      },
    ],
  },
  twitter: {
    handle: '@lukeH_1999',
    site: '@lukeH_1999',
    cardType: 'summary_large_image',
  },
};

export default SEO;
