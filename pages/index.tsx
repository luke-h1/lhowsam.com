/* eslint-disable */
import React from 'react';
import { NextSeo } from 'next-seo';
import { CustomHead } from '@src/components/CustomHead';
import BlogCard from '@src/components/BlogCard';
import ProjectCard from '@src/components/ProjectCard';
import { Wrapper } from '@src/components/Wrapper';
import { GetInTouch } from '@src/layouts/GetInTouch';
import Link from 'next/link';
import styled from '@emotion/styled';

const skills: string[] = ['JavaScript (ES6)', 'Typescript', 'React', 'Next', 'Testing (automated & manual)', 'Node.js', 'Express'];
const StyledAboutSection = styled.section`
  max-width: 750px;
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
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;
    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      &:before {
        content: '.';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
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
    border-radius: var(--border-radius);
    background-color: var(--green);
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
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }
    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }
    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }
    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

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
      <Wrapper>
        <h1 className="text-4xl text-left md:leading-10 tracking-wide text-gray-700 mr-2 sm:text-md ml-4 leading-10 dark:text-gray-300 font-bold mb-5">
          Hi, I'm Luke 👋
        </h1>
        <div className="align-left">
          <p className="md:leading-10 text-1xl tracking-md text-left text-gray-700 mr-2 sm:text-md ml-4 leading-10 mb-4 dark:text-gray-300">I am a software tester who loves to work on big projects where I can grow interpersonally & technically. </p>
          <p className="md:leading-10 text-1xl tracking-md text-left text-gray-700 mr-2 sm:text-md ml-4 leading-10 mb-4 dark:text-gray-300">I have experience working in agile environments, testing features end to end, various frontend languages, technologies & tooling.</p>
          <p className="md:leading-10 text-1xl tracking-md text-left text-gray-700 mr-2 sm:text-md ml-4 leading-10 mb-4 dark:text-gray-300">
            In my spare time I work on open source projects that typically use React, Next, Graphql, Express & Node. You can check out some of my open source projects
            {' '}
            <a className="text-black hover: underline dark:text-white "><Link href="/projects">here</Link></a>
            {' '}
            <hr className="text-black dark:text-white border border-solid" />
          </p>
        </div>
      </Wrapper>
      <StyledAboutSection id="about">
        <h2 className="text-3xl text-left md:leading-10 tracking-wide text-gray-700 mr-2 sm:text-md ml-4 leading-10 dark:text-gray-300 font-bold mb-5">about me</h2>
        <div className="inner">
          <StyledText>
            <div>
              <p className="md:leading-10 text-1xl tracking-md text-left text-gray-700 mr-2 sm:text-md ml-4 leading-10 mb-4 dark:text-gray-300">
                Hi, my name is Luke and I enjoy working on big projects and thinking about how solutions can be implemented in order to build scalable & maintainable software. I currently work as a software tester where I do a mixture of manual & automated testing in an agile environment
              </p>
            </div>
            <p className="md:leading-10 text-1xl tracking-md text-left text-gray-700 mr-2 sm:text-md ml-4 leading-10 mb-4 dark:text-gray-300 underline">Here is a list of tech I've been working with recently</p>
            <Wrapper>
              <ul className="skills-list">
                {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
              </ul>
            </Wrapper>
          </StyledText>
          <StyledPic>
            <div className="wrapper">
              <img src="/static/images/luke.png" alt="Avatar" />
            </div>
          </StyledPic>
        </div>
      </StyledAboutSection>

      <div className="max-w-lg w-full align-left">
        <h1 className="text-3xl text-left md:leading-10 tracking-wide text-gray-700 mr-2 sm:text-md ml-4 leading-10 dark:text-gray-300 font-bold mb-5">
          Recent Blog Posts
        </h1>
        <BlogCard />
        <BlogCard />
      </div>
      <div className="max-w-lg w-full align-left">
        <h1 className="text-3xl text-left md:leading-10 tracking-wide text-gray-700 mr-2 sm:text-md ml-4 leading-10 dark:text-gray-300 font-bold mb-5">
          Recent Projects
        </h1>
        <ProjectCard />
        <ProjectCard />
      </div>
      <GetInTouch />
    </>
  );
};
export default Home;
