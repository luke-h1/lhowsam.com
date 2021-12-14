import IntroSection from '@src/sections/IntroSection';
import ProjectSection from '@src/sections/ProjectSection';
import SkillsSection from '@src/sections/SkillsSection';
import projectService from '@src/services/projectService';
import { Space } from '@src/styles/layouts';
import { NextSeo } from 'next-seo';
import React from 'react';
import { Project } from '../types/project';

interface Props {
  projects: Project[];
}

const Index = ({ projects }: Props) => {
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
      <IntroSection />
      <Space size={25} />
      <SkillsSection />
      <Space size={25} />

      <ProjectSection projects={projects} />
      <Space size={25} />
    </>
  );
};

export const getStaticProps = async () => {
  const projects = await projectService.getAllProjects();

  return {
    revalidate: 30 * 60,
    props: {
      projects: projects.projects,
    },
  };
};

export default Index;
