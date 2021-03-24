import React from 'react';
import { NextSeo } from 'next-seo';
import { GetStaticProps } from 'next';
import { Intro } from '@components/Intro';
import { getAllFilesFrontmatter } from '@utils/mdx';
import { Skills } from '@data/skills';
import { BlogPost, ProjectPost } from '@src/types';
import ProjectCard from '@src/components/ProjectCard';
import BlogCard from '@src/components/BlogCard';

const Home = ({
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
      <NextSeo
        title="Home | lhowsam.com"
        canonical="https://lhowsam.com/"
        openGraph={{
          url: 'https://lhowsam.com',
          title: 'Home | lhowsam.com',
        }}
      />
      <Intro />
      <h2 className="text-center mt-1 mb-6 text-4xl"> Projects</h2>

      <div className="flex flex-col mb-6">
        {projects.map((frontMatter) => (
          <ProjectCard key={frontMatter.title} {...frontMatter} />
        ))}
      </div>
      <h2 className="text-center mt-1 mb-6 text-4xl"> Blog</h2>
      <div className="flex flex-col mb-6">
        {filterPosts.map((frontMatter) => (
          <BlogCard key={frontMatter.title} {...frontMatter} />
        ))}
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center max-w-md w-full">
          <p className="text-4xl mb-4">Skills</p>
          <p className="md:text-2xl mb-12 sm:text-md text-left ml-2">
            I'm always expanding my technical skills by learning new tech. The
            following is a list of technology I'm interested in / what I'm
            actively working with !
          </p>
        </div>
        <div className="max-w-xl w-full">
          <div className="flex flex-wrap  -mb-5 pb-8">
            {Skills
              && Skills.map((s) => (
                <div className="w-1/3 mb-4 h-12">
                  <p className="mr-4 ml-4 text-left capitalize">{s.name}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllFilesFrontmatter('blog');
  const projects = await getAllFilesFrontmatter('project');
  return { props: { posts, projects } };
};
export default Home;
