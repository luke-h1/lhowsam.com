import React from 'react';
import { NextSeo } from 'next-seo';
import { getAllFilesFrontmatter } from '@utils/mdx';
import ProjectCard from '@src/components/ProjectCard';
import { ProjectPost } from '@src/types';
import { Title } from '@src/components/Title';
import { CustomHead } from '@src/components/CustomHead';

const Index = ({ projects }: { projects: ProjectPost[] }) => {
  return (
    <div className="mb-40">
      <>
        <CustomHead
          title="Projects | lhowsam.com"
          description="Projects"
        />
        <NextSeo
          title="Projects"
          canonical="https://lhowsam.com/projects"
          openGraph={{
            url: 'https://lhowsam.com/projects',
            title: 'Projects',
          }}
        />
        <div className="flex flex-col align-center items-center max-w-lg">
          <Title>Projects</Title>
          {projects.map((project) => (
            <ProjectCard
              title={project.title}
              summary={project.summary}
              slug={project.slug}
              tags={project.tags}
              github={project.github}
              site={project.site}
              key={project.title}
            />
          ))}
        </div>
      </>
    </div>
  );
};
export async function getStaticProps() {
  const projects = await getAllFilesFrontmatter('project');
  return { props: { projects } };
}
export default Index;
