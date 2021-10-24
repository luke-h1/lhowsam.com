import { Blog, Project } from '@lhowsam/cms/types/schema';
import SEO from '@src/components/SEO';
import BlogSection from '@src/sections/BlogSection';
import ContactSection from '@src/sections/ContactSection';
import IntroSection from '@src/sections/IntroSection';
import ProjectSection from '@src/sections/ProjectSection';
import SkillsSection from '@src/sections/SkillsSection';
import blogService from '@src/services/blogService';
import projectService from '@src/services/projectService';
import { Space } from '@src/styles/layouts';
import { NextSeo } from 'next-seo';
import React from 'react';

interface Props {
  posts: Blog[];
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
      <Space size={25} />
      <ContactSection />
    </>
  );
};

export const getStaticProps = async () => {
  const posts = await blogService.getRecentPosts();
  const projects = await projectService.getAllProjects();
  if (!posts.length) {
    return {
      props: [],
      notFound: true,
    };
  }

  if (!projects.length) {
    return {
      props: posts,
      notFound: true,
    };
  }

  return {
    revalidate: 60 * 60,
    props: {
      posts,
      projects,
    },
  };
};

export default Index;
