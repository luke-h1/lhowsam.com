import { Project } from '@lhowsam/cms/types/schema';
import ProjectCard from '@src/components/ProjectCard';
import imageService from '@src/services/imageService';
import projectService from '@src/services/projectService';
import { Center, PreviewLayout } from '@src/styles/layouts';
import { ProjectWrapper } from '@src/styles/project';
import { Title } from '@src/styles/typography';
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
        description='projects (mainly Next.js, Node & React)'
        openGraph={{
          url: 'https://lhowsam.com/projects',
          title: 'Projects',
          images: [imageService.getOpenGraphImage('Projects')],

        }}
      />
  
      <Center>
        <Title size={5}>Projects</Title>
      </Center>
      <PreviewLayout>
        <ProjectWrapper>
          {projects &&
            projects.map((project) => (
              <ProjectCard project={project} key={project._id} />
            ))}
        </ProjectWrapper>
      </PreviewLayout>
    </>
  );
};
export default ProjectPage;

export const getStaticProps = async () => {
  const projects = await projectService.getAllProjects();

  if (!projects.length) {
    return {
      props: [],
      notFound: true,
    };
  }
  return {
    revalidate: 60 * 30,
    props: {
      projects,
    },
  };
};
