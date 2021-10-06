import React from 'react';
import { NextSeo } from 'next-seo';
import { NextPage } from 'next';

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
      <p>index</p>
    </>
  );
};
export default Index;
