import SEO from '@src/components/SEO';
import { ProjectSection } from '@src/sections/ProjectsSection';
import { NextSeo } from 'next-seo';
import React from 'react';

const ProjectPage = () => {
  return (
    <>
      <NextSeo
        title="Projects"
        canonical="https://lhowsam.com/projects"
        openGraph={{
          url: 'https://lhowsam.com/projects',
          title: 'Projects',
        }}
      />
      <SEO
        description="Project page"
        title="Projects"
        keywords={[
          'Projects, React, Node, GraphQL, PostgreSQL, Ansible playbooks',
        ]}
        url="https://lhowsam.com/projects"
      />
      <ProjectSection />
    </>
  );
};
export default ProjectPage;
