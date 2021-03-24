import React from 'react';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import styled from '@emotion/styled';

const NextImage = styled(Image)`
  border-radius: 18px;
`;

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
        <h1 className="text-4xl align-center text-center mb-10">
          About
        </h1>
        <div className="lg:grid grid-cols-2 gap-20">
          <div>
            <p className="md:leading-10 text-2xl tracking-wide text-left text-gray-700 mr-2 sm:text-md ml-4 leading-10" data-testid="about-intro">
              I'm passionate about solving technical problems and coming up
              with creative solutions.I enjoy working with the JAMstack,
              React, Node, testing technologies + practices & various dev-ops
              technologies. I am currently learning Typescript, React, Next JS
              & various testing technologies.
            </p>
          </div>
          <div>
            <NextImage
              src="/static/images/luke.png"
              width={400}
              height={500}
              quality="100"
              data-testid="photo"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
