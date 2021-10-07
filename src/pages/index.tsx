import React from 'react';
import { NextSeo } from 'next-seo';
import { NextPage } from 'next';
import Intro from '@src/components/Intro';
import GetInTouch from '../components/GetInTouch';

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
      <Intro />
      <GetInTouch />
    </>
  );
};
export default Index;
