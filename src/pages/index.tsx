import React from 'react';
import { NextSeo } from 'next-seo';
import { GetServerSideProps, NextPage } from 'next';
import SEO from '@src/components/SEO';
import Hero from '@src/components/Hero';
import { gql } from 'graphql-request';
import { Client } from '@src/utils/Client';

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
      <Hero />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const query = gql`
    query Blogs {
      blogs {
        id
        slug
        title
        intro
      }
    }
  `;
  const data = await Client.request(query);
  console.log(data);
  return {
    props: { posts: data.blogs },
  };
};

export default Index;
