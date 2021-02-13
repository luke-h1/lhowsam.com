import React from 'react';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import styled, { ThemeProvider } from 'styled-components';
import { NextPage } from 'next';
import { theme } from '@styles/Theme';
import { HighLight } from '@components/Intro/IntroStyles';

const Title = styled.h1`
  text-align: center;
  margin-bottom: 4rem;
`;

const SectionOne = styled.section`
  width: 100%;
  p {
    margin-top: 2.5rem;
    padding-left: 2rem;
    width: 90%;
    font-size: 20px;
  }
`;

const SectionTwo = styled.section`
  margin-bottom: 4rem;
`;

const StyledImage = styled(Image)`
  border-radius: 10px;
`;

const Intro = styled.h1`
  text-align: left;
  font-size: 38px;
`;
const About: NextPage = () => {
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
      <ThemeProvider theme={theme}>
        <Title>About</Title>
        <div className="flex flex-col align-center justify-center items-center">
          <div className="grid grid-flow-col mw-1000 max-w-screen-lg">
            <SectionOne>
              <Intro>
                Hey, I'm
                {' '}
                <HighLight>Luke</HighLight>
              </Intro>
              <p
                data-testid="about-intro1"
                className="mt-2.5 pl-2 text-base w-5"
              >
                I'm passionate about solving technical problems and coming up
                with creative solutions.I enjoy working with the JAMstack,
                React, Node, testing technologies + practices & various dev-ops
                technologies
              </p>
              <p style={{ marginBottom: '4rem' }} data-testid="about-intro2">
                I am currently learning Typescript, React, Next JS & various
                testing technologies.
              </p>
            </SectionOne>
            <SectionTwo>
              <StyledImage
                src="/static/images/luke.png"
                width={400}
                height={500}
                data-testid="photo"
              />
            </SectionTwo>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
};
export default About;
