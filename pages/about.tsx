import React from 'react';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import { SkillsSection } from '@src/components/Skills';

const About = () => {
  return (
    <>
      <NextSeo
        title="About | lhowsam.com"
        canonical="https://lhowsam.com/about"
        openGraph={{
          url: 'https://lhowsam.com/about',
          title: 'About | lhowsam.com',
        }}
      />
      <div className="max-w-4xl	w-full mb-4">
        <h1 className="text-4xl align-center text-center mb-10">About</h1>
        <div className="lg:grid grid-cols-2 gap-20">
          <div>
            <h2 className="md:leading-10 text-2xl tracking-wide text-left text-gray-700 mr-2 sm:text-md ml-4 leading-10 mb-4">Hey, I'm Luke 👋,</h2>
            <p
              className="md:leading-10 text-1xl tracking-wide text-left text-gray-700 mr-2 sm:text-md ml-4 leading-10 mb-4"
              data-testid="about-intro"
            >

              I enjoy working with React, Node, testing tech + practices, dev-ops / cloud services & various backend languages
            </p>
            <p
              className="md:leading-10 text-1xl tracking-wide text-left text-gray-700 mr-2 sm:text-md ml-4 leading-10 mb-4"
              data-testid="about-intro"
            >
              I am currently working with React, Next, Node, Python, Express & Typescript.
            </p>
          </div>
          <div className="mb-6">
            <Image
              src="/static/images/luke.png"
              width={400}
              height={500}
              quality="100"
              data-testid="photo"
            />
          </div>
        </div>
        <SkillsSection />
      </div>
    </>
  );
};
export default About;
