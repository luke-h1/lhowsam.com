import React from 'react';
import { NextSeo } from 'next-seo';
import { CustomHead } from '../../components/CustomHead';
import { SkillsSection } from '../../components/Skills';

const About = () => {
  return (
    <>
      <CustomHead title="About | lhowsam.com" description="About" />
      <NextSeo
        title="About"
        canonical="https://lhowsam.com/about"
        openGraph={{
          url: 'https://lhowsam.com/about',
          title: 'About',
        }}
      />
      <div className="max-w-4xl	w-full mb-4">
        <h1 className="md:leading-10 text-4xl tracking-wide text-left text-gray-700 mr-2 sm:text-md ml-4 leading-10 mb-6 dark:text-gray-300">
          About
        </h1>
        <h1 className="lg:grid grid-cols-2 gap-20">
          <div>
            <h2 className="md:leading-10 text-2xl tracking-wide text-left text-gray-700 mr-2 sm:text-md ml-4 leading-10 mb-4 dark:text-gray-300">
              Hey, I'm Luke 👋,
            </h2>
            <p
              className="md:leading-10 text-1xl tracking-wide text-left text-gray-700 mr-2 sm:text-md ml-4 leading-10 mb-4 dark:text-gray-300"
              data-testid="about-intro"
            >
              I enjoy working with React, Node, testing tech + practices,
              dev-ops / cloud services & various backend languages
            </p>
            <p
              className="md:leading-10 text-1xl tracking-wide text-left text-gray-700 mr-2 sm:text-md ml-4 leading-10 mb-4 dark:text-gray-300"
              data-testid="about-intro-2"
            >
              I am currently working with React, Next, Node, Python, Express &
              Typescript.
            </p>
          </div>
          <div className="mb-6">
            <img
              src="/static/images/luke.png"
              width="400"
              height="500"
              data-testid="photo"
              alt="headshot"
              style={{ borderRadius: '20px' }}
            />
          </div>
        </h1>
        <SkillsSection />
      </div>
    </>
  );
};
export default About;
