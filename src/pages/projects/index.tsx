import React from 'react';
import { NextSeo } from 'next-seo';
import { getAllFilesFrontmatter } from '@src/utils/mdx';
import Card from '@src/components/Card';
import { ProjectPost } from '@src/types/md';
import { CustomHead } from '@src/components/CustomHead';

const Index = ({ projects }: { projects: ProjectPost[] }) => {
  return (
    <>
      <CustomHead title="Projects | lhowsam.com" description="Projects" />
      <NextSeo
        title="Projects"
        canonical="https://lhowsam.com/projects"
        openGraph={{
          url: 'https://lhowsam.com/projects',
          title: 'Projects',
        }}
      />
      <h1 className="text-4xl text-left md:leading-10 tracking-wide text-gray-700 mr-2 sm:text-md ml-4 leading-10 dark:text-gray-300 font-bold mb-5">
        Projects
      </h1>
      <div className="max-w-lg w-full align-left ">
        {projects.map((frontMatter) => (
          <Card {...frontMatter} key={frontMatter.slug} />
        ))}
      </div>
    </>
  );
};
export async function getStaticProps() {
  const projects = await getAllFilesFrontmatter('project');
  return { props: { projects } };
}
export default Index;
