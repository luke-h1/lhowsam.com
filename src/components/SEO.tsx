import React from 'react';
import Head from 'next/head';
import { isServer } from '@src/hooks/isServer';

interface CustomHeadProps {
  title: string;
  description: string;
  keywords?: string[];
  url?: string;
  date?: string;
  image?: string;
}

const defaultKeywords = [
  'Luke Howsam',
  'Developer',
  'Software Tester',
  'React.js',
  'Node.js',
  'Next.js',
  'Automated & manual testing',
  'Sheffield',
  'United Kingdom',
];

const SEO: React.FC<CustomHeadProps> = ({
  title,
  description,
  keywords,
  url,
  date,
  image,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="twitter:title" content={title} />
      <meta property="og:site_name" content={title} />
      <meta property="og:title" content={title} />

      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta name="twitter:description" content={description} />

      <link rel="canonical" href={url} />
      <meta property="og:url" content={url} />

      <meta
        name="keywords"
        content={[...defaultKeywords, ...(keywords as string[])].join(', ')}
      />
      <meta
        property="og:url"
        content={`${!isServer() && window.location.href}`}
        key="ogurl"
      />
      <meta
        property="og:image"
        content={image || '../public/static/images/logo.png'}
        key="ogimage"
      />
      <meta property="og:site_name" content="lhowsam.com" key="ogsitename" />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta property="og:description" content={description} key="ogdesc" />
      {date && (
        <>
          <meta property="article:published_time" content={date} />
          <meta name="publish_date" property="og:publish_date" content={date} />
          <meta name="author" property="article:author" content="Luke Howsam" />
          <meta name="authors" content="Luke Howsam" />
          <meta name="created" content={date} />
        </>
      )}
    </Head>
  );
};
export default SEO;
