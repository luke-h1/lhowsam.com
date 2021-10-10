import React from 'react';
import { NextSeo } from 'next-seo';
import { NextPage } from 'next';
import SEO from '@src/components/SEO';

const Index: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Home"
        canonical="https://lhowsam.com/"
        openGraph={{
          url: 'https://lhowsam.com',
          title: 'Home',
        }}
      />
      <SEO
        description="Home page"
        title="Home"
        keywords={['Projects, Blog posts, About']}
        url="https://lhowsam.com"
      />
    </>
  );
};
export default Index;
