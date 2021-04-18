import BlogCard from '@src/components/BlogCard';
import ProjectCard from '@src/components/ProjectCard';
import { SkillsSection } from '@src/components/Skills';
import { Wrapper } from '@src/components/Wrapper';
import { Skills } from '@src/data/skills';
import Link from 'next/link';
import React from 'react';

export const IndexRedesign = () => {
  return (
    <>
      <Wrapper>
        <h1 className="text-4xl text-left md:leading-10 tracking-wide text-gray-700 mr-2 sm:text-md ml-4 leading-10 dark:text-gray-300 font-bold mb-5">
          Hi, I'm Luke 👋
        </h1>
        <div className="max-w-lg w-full align-left">
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
      </div>
    </>
  );
};
