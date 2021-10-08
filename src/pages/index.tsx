import React from 'react';
import { NextSeo } from 'next-seo';
import Intro from '@src/components/Intro';

const Index = () => {
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
      <Intro />
    </>
  );
};
export default Index;
