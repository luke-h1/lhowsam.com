import React from 'react';
import Head from 'next/head';
import { isServer } from '@src/hooks/isServer';

interface CustomHeadProps {
  title: string;
  description: string;
  image?: string;
}

export const CustomHead: React.FC<CustomHeadProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <Head>
      <meta name="twitter:card" content="summary" key="twcard" />
      <meta name="twitter:creator" content="@lukeH_1999" key="twhandle" />
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
    </Head>
  );
};
