/* eslint-disable */
import React from 'react';
import { NextSeo } from 'next-seo';
import { CustomHead } from '@src/components/CustomHead';
import { IndexRedesign } from '@src/layouts/IndexRedesign';

const Home = () => {
  return (
    <>
      <CustomHead title="Home | lhowsam.com" description="Homepage" />
      <NextSeo
        title="Home"
        canonical="https://lhowsam.com/"
        openGraph={{
          url: 'https://lhowsam.com',
          title: 'Home',
        }}
      />
      {' '}
      <IndexRedesign />
    </>
  );
};
export default Home;
