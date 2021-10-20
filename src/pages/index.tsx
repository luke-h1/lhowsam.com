// @ts-ignore
// @ts-nocheck
import SEO from '@src/components/SEO';
import BlogSection from '@src/sections/BlogSection';
import IntroSection from '@src/sections/IntroSection';
import ProjectSection from '@src/sections/ProjectSection';
import SkillsSection from '@src/sections/SkillsSection';
import blogService from '@src/services/blogService';
import projectService from '@src/services/projectService';
import { Space } from '@src/styles/layouts';
import { NextSeo } from 'next-seo';
import React from 'react';
import { Post } from '../types/post';
import { Project } from '../types/project';

interface Props {
  posts: Post[]
  projects: Project[];
}

const Index = ({ posts, projects }: Props) => {
  return (
    <>
      <NextSeo
        title="Home"
        canonical="https://lhowsam.com/"
        openGraph={{
          url: 'https://lhowsam.com',
          title: 'Home',
        }}
      />
      <SEO
        description="Home page"
        title="Home"
        keywords={['Projects, Blog posts, About']}
        url="https://lhowsam.com"
      />
      <IntroSection />
      <Space size={25} />
      <SkillsSection />
      <Space size={25} />

      <BlogSection posts={posts} />
      <Space size={25} />
      <Space size={25} />

      <ProjectSection projects={projects} />
    </>
  );
};

export const getStaticProps = async () => {
  const posts: { posts: Post[] } = await blogService.getRecentPosts();
  const projects = await projectService.getAllProjects();

  return {
    revalidate: 60 * 30,
    props: {
      posts: posts.posts,
      projects: projects.projects,
    },
  };
};

export default Index;
