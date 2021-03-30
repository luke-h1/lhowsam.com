import React from 'react';
import { NextSeo } from 'next-seo';
import { getAllFilesFrontmatter } from '@utils/mdx';
import ProjectCard from '@src/components/ProjectCard';
import { ProjectPost } from '@src/types';

const Index = ({ projects }: { projects: ProjectPost[] }) => {
  return (
    <>
      <>
        <NextSeo
          title="Projects | lhowsam.com"
          canonical="https://lhowsam.com/projects"
          openGraph={{
            url: 'https://lhowsam.com/projects',
            title: 'Projects | lhowsam.com',
          }}
        />
        <div className="flex flex-col align-center mb-8 max-w-lg w-full">
          <h1 className="text-4xl text-center mb-6">Projects</h1>
          <div className="flex flex-col align-center mb-8 max-w-lg w-full">
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
        </div>
      </>
    </>
  );
};
export async function getStaticProps() {
  const projects = await getAllFilesFrontmatter('project');
  return { props: { projects } };
}
export default Index;
