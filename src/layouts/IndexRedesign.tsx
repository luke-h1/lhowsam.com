import BlogCard from '@src/components/BlogCard';
import ProjectCard from '@src/components/ProjectCard';
import { Wrapper } from '@src/components/Wrapper';
import Link from 'next/link';
import React from 'react';
import styled from '@emotion/styled';

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
const skills: string[] = ['JavaScript (ES6)', 'Typescript', 'React', 'Next', 'Testing', 'Node.js', 'Express'];

export const IndexRedesign = () => {
  return (
    <>
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

      {/* <div className="max-w-lg grid grid-cols-2">
        <div className="flex flex-wrap flex-col align-left items-left">
          <h1 className="text-4xl text-left md:leading-10 tracking-wide text-gray-700 mr-2 sm:text-md ml-4 leading-10 dark:text-gray-300 font-bold mb-5">
            About
          </h1>
          <div className="grid-cols-2 grid">
            <div>
              <img
                src="/static/images/luke.png"
                width="150"
                height="150"
                data-testid="photo"
                alt="headshot"
                style={{ borderRadius: '20px' }}
              />
            </div>
            <div>
              <p className="md:leading-10 text-1xl tracking-md text-left text-gray-700 mr-2 sm:text-md ml-4 leading-10 mb-4 dark:text-gray-300">
                Hi, my name is Luke and I enjoy working on big projects and thinking about how solutions can be implemented in order to build scalable & maintainable software. I currently work as a software tester where I do a mixture of manual & automated testing in an agile environment
              </p>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="max-w-xl">
        <div className="flex flex-col items-center justify-center max-w-4xl	w-full mb-4">
          <h1 className="md:leading-10 text-4xl tracking-wide text-left text-gray-700 mr-2 sm:text-md ml-4 leading-10 mb-6 dark:text-gray-300">
            About
          </h1>
          <h1 className="lg:grid grid-cols-2 gap-15">
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
                width="200"
                height="300"
                data-testid="photo"
                alt="headshot"
                style={{ borderRadius: '20px' }}
              />
            </div>
          </h1>
        </div>
      </div> */}

      {/* Skills */}
      {/* <div className="max-w-lg">
        <div className="align-left">
          <div className="flex flex-col items-left justify-left">
            <div className="flex flex-col items-left max-w-md w-full">
              <h2 className="md:leading-10 text-3xl tracking-wide text-left text-gray-700 sm:text-md  leading-10 mb-4 dark:text-gray-300 ml-2">
                Skills
              </h2>
              <p className="md:text-2xl mb-12 sm:text-md text-left ml-2 dark:text-gray-300">
                I'm always expanding my technical skills by learning new tech. The
                following is a list of technology I'm interested in / what I'm
                actively working with !
              </p>
            </div>
            <div className="max-w-lg w-full">
              {Skills
            && Skills.map((s) => (
              <div className="w-1/3 mb-4 h-12" key={s.id}>
                <p className="mr-4 ml-4 text-left dark:text-gray-300">
                  {s.name}
                </p>
              </div>
            ))}
            </div>
          </div>

        </div>
        {' '}
      </div> */}
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
    </>
  );
};
