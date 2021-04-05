import React from 'react';
import { NextSeo } from 'next-seo';
import { GetStaticProps } from 'next';
// import { Intro } from '@components/Intro';
import { getAllFilesFrontmatter } from '@utils/mdx';
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
      {/* <Intro /> */}
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
    </>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllFilesFrontmatter('blog');
  const projects = await getAllFilesFrontmatter('project');
  return { props: { posts, projects } };
};
export default Home;
