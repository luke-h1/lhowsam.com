import ProjectCard from '@src/components/ProjectCard';
import projectService from '@src/services/projectService';
import { Center, PreviewLayout } from '@src/styles/layouts';
import { ProjectWrapper } from '@src/styles/project';
import { Title } from '@src/styles/typography';
import { Project } from '@src/types/project';
import { NextSeo } from 'next-seo';
import React from 'react';

interface Props {
  projects: Project[];
}

const ProjectPage = ({ projects }: Props) => {
  return (
    <>
      <NextSeo
        title="Projects"
        canonical="https://lhowsam.com/projects"
        description="projects"
        openGraph={{
          url: 'https://lhowsam.com/projects',
          title: 'Projects | lhowsam.com',
        }}
      />
      <Center>
        <Title size={5}>Projects</Title>
      </Center>
      <PreviewLayout>
        <ProjectWrapper>
          {projects &&
            projects.map(project => (
              <ProjectCard project={project} key={project.id} />
            ))}
        </ProjectWrapper>
      </PreviewLayout>
    </>
  );
};
export default ProjectPage;

export const getStaticProps = async () => {
  const { projects } = await projectService.getAllProjects();
  return {
    props: {
      projects,
    },
    revalidate: 30 * 60,
  };
};
