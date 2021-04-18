import React from 'react';
import { NextSeo } from 'next-seo';
import { CustomHead } from '@src/components/CustomHead';
import BlogCard from '@src/components/BlogCard';
import ProjectCard from '@src/components/ProjectCard';
import { Wrapper } from '@src/components/Wrapper';
import { GetInTouch } from '@src/layouts/ContactLayout';
import Link from 'next/link';
import { getAllFilesFrontmatter } from '@src/utils/mdx';
import { GetStaticProps } from 'next';
import { BlogPost, ProjectPost } from '@src/types';
import {
  Twitter, LinkedIn, Github, Email,
} from '@src/Icons/Social';

const index = ({
  posts,
  projects,
}: {
  posts: BlogPost[];
  projects: ProjectPost[];
}) => {
  const filterPosts = posts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date)),
  );

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
          <p className="md:leading-10 text-1xl tracking-md text-left text-gray-700 mr-2 sm:text-md ml-4 leading-10 mb-4 dark:text-gray-300">
            I am a software tester who loves to work on big projects where I can
            grow interpersonally & technically.
            {' '}
          </p>
          <p className="md:leading-10 text-1xl tracking-md text-left text-gray-700 mr-2 sm:text-md ml-4 leading-10 mb-4 dark:text-gray-300">
            I have experience working in agile environments, testing features
            end to end, various frontend languages, technologies & tooling.
          </p>
          <p className="md:leading-10 text-1xl tracking-md text-left text-gray-700 mr-2 sm:text-md ml-4 leading-10 mb-4 dark:text-gray-300">
            In my spare time I work on open source projects that typically use
            React, Next, Graphql, Express & Node. You can check out some of my
            open source projects
            {' '}
            <a className="text-black hover: underline dark:text-white">
              <Link href="/projects">here</Link>
            </a>
            {' '}
            <div className="flex flex-row mt-4 mb-4">
              <a
                className="md:block cursor-pointer text-gray-600 hover:text-blue-300 uppercase ml-2 mr-2"
                href="https://twitter.com/LukeH_1999"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter />
              </a>
              <a
                className="md:block cursor-pointer text-gray-600 hover:text-blue-300 uppercase ml-2 mr-2"
                href="https://www.linkedin.com/in/lukehowsam"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedIn />
              </a>
              <a
                className="md:block cursor-pointer text-gray-600 hover:text-blue-300 uppercase ml-2 mr-2"
                href="https://github.com/luke-h1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github />
                {' '}
              </a>
              <a
                className="md:block cursor-pointer text-gray-600 hover:text-blue-300 uppercase ml-2 mr-2"
                href="mailto:luke.howsam@yahoo.com?subject=Get In Touch"
                title="Email"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Email />
                {' '}
              </a>
            </div>
            <hr className="text-black dark:text-white border border-solid" />
          </p>
        </div>
      </Wrapper>
      <div className="max-w-lg w-full align-left mb-10">
        <h1 className="text-3xl text-left md:leading-10 tracking-wide text-gray-700 mr-2 sm:text-md ml-4 leading-10 dark:text-gray-300 font-bold mb-5">
          Blog
        </h1>
        {filterPosts.map((frontMatter) => (
          <BlogCard {...frontMatter} key={frontMatter.slug} />
        ))}
      </div>
      <div className="max-w-lg w-full align-left ">
        <h1 className="text-3xl text-left md:leading-10 tracking-wide text-gray-700 mr-2 sm:text-md ml-4 leading-10 dark:text-gray-300 font-bold mb-5">
          Projects
        </h1>
        {projects.map((frontMatter) => (
          <ProjectCard {...frontMatter} key={frontMatter.slug} />
        ))}
      </div>
      <GetInTouch />
    </>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllFilesFrontmatter('blog');
  const projects = await getAllFilesFrontmatter('project');
  return { props: { posts, projects } };
};

export default index;
