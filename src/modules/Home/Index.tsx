import React from 'react';
import { NextSeo } from 'next-seo';
import { GetStaticProps } from 'next';
import { getAllFilesFrontmatter } from '@utils/mdx';
import { BlogPost, ProjectPost } from '@src/types';
import ProjectCard from '@src/modules/Projects/components/ProjectCard';
import BlogCard from '@src/modules/Blog/components/BlogCard';
import { Title } from '@src/components/Title';
import { CustomHead } from '@src/components/CustomHead';

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
      <CustomHead title="Home | lhowsam.com" description="Homepage" />
      <NextSeo
        title="Home"
        canonical="https://lhowsam.com/"
        openGraph={{
          url: 'https://lhowsam.com',
          title: 'Home',
        }}
      />
      <div className="flex flex-col mb-4">
        <Title>Projects</Title>
        {projects.map((frontMatter) => (
          <ProjectCard {...frontMatter} key={frontMatter.slug} />
        ))}
      </div>
      <div className="flex flex-col">
        <Title>Blog</Title>
        <hr className="border border-solid" />
        {filterPosts.map((frontMatter) => (
          <BlogCard {...frontMatter} key={frontMatter.slug} />
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
