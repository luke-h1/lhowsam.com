import React from 'react';
import styled from '@emotion/styled';
import { NextSeo } from 'next-seo';
import { CustomHead } from '@src/components/CustomHead';
import { Skills } from '@src/data/skills';
import { Text } from '@chakra-ui/react';
import Image from 'next/image';
import ProfileImage from '../../public/images/luke.png';

const StyledAboutSection = styled.section`
  max-width: 750px;
  margin-bottom: 1rem;
  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 40px;
    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;
    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      &:before {
        content: '-';
        position: absolute;
        left: 0;
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;
  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }
  .wrapper {
    display: block;
    position: relative;
    width: 100%;
    &:hover,
    &:focus {
      background: transparent;
      outline: 0;
      &:after {
        top: 15px;
        left: 15px;
      }
      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }
    .img {
      position: relative;
      border-radius: 20px;
      mix-blend-mode: multiply;
    }
    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 8px;
    }
    &:before {
      top: 0;
      left: 0;
      mix-blend-mode: screen;
    }
    &:after {
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  return (
    <>
      <CustomHead title="About | lhowsam.com" description="About" />
      <NextSeo
        title="About"
        canonical="https://lhowsam.com/"
        openGraph={{
          url: 'https://lhowsam.com',
          title: 'About',
        }}
      />
      <StyledAboutSection>
        <Text
          as="h1"
          fontSize="30px"
          textAlign="left"
          data-testid="i-intro-1"
          maxW="70%"
          mb={2}
        >
          About me
        </Text>
        <div className="inner">
          <StyledText>
            <div>
              <Text
                as="p"
                fontSize="20px"
                lineHeight={8}
                data-testid="ab-intro-1"
                mb={4}
              >
                Hi, my name is Luke and I enjoy working on big projects and
                thinking about how solutions can be implemented in order to
                build scalable & maintainable software. I currently work as a
                software tester where I do a mixture of manual & automated
                testing in an agile environment
              </Text>
            </div>
            <Text as="p" fontSize="18px" data-testid="ab-intro-2">
              Here is a list of tech I've been working with recently
            </Text>
            <ul className="skills-list">
              {Skills && Skills.map((s) => <li key={s.id}>{s.name}</li>)}
            </ul>
          </StyledText>

          <StyledPic>
            <div className="wrapper">
              <Image
                src={ProfileImage}
                alt="Avatar"
                width="250"
                height="300"
                placeholder="blur"
                data-testid="photo"
              />
            </div>
          </StyledPic>
        </div>
      </StyledAboutSection>
    </>
  );
};
export default About;
