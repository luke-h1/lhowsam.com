import { Robots } from 'next/dist/lib/metadata/types/metadata-types';

const siteUrl = process.env.NEXT_PUBLIC_URL;

export default function getPolicies(): Robots {
  switch (siteUrl) {
    case 'https://lhowsam.com':
    case 'https://www.lhowsam.com':
      return {
        follow: true,
        index: true,
        googleBot: {
          follow: true,
          index: true,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      };

    default:
      return {
        follow: false,
        index: false,
        googleBot: {
          follow: false,
          index: false,
        },
      };
  }
}
