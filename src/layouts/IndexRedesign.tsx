import BlogCard from '@src/components/BlogCard';
import ProjectCard from '@src/components/ProjectCard';
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
      <div className="max-w-lg">
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
      </div>
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
