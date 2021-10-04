import About from '@src/components/About';
import React from 'react';
import { NextSeo } from 'next-seo';
import { CustomHead } from '@src/components/CustomHead';
import Contact from '@src/components/Contact';
import BlogPost from '@src/components/BlogPost';
import { NextPage } from 'next';
import Skills from '@src/components/Skills';

const Index: NextPage = () => {
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
      <About />
      <div className="container px-4 mx-auto mb-10 py-10">
        <div className="mb-4">
          <Skills />
        </div>

        <h1 className="text-4xl text-left mb-4">Posts</h1>
        <BlogPost
          title="Next.js SSR notes"
          slug="nextjs-ssr-notes"
          summary="How SSR works with Next JS"
        />
        <BlogPost
          title="Forcing git merges"
          slug="forcing-git-merges"
          summary="Isolating features into seperate branches is a really common practice for most developers. By seperating features & bug fixes you can avoid a lot of problems and keep your branches clean."
        />
        <BlogPost
          title="Deploying a full stack application with Dokku"
          slug="full-stack-deploy-with-dokku"
          summary="How to deploy a full stack app with Dokku to AWS / Digital Ocean."
        />
      </div>
      <Contact />
    </>
  );
};
export default Index;
