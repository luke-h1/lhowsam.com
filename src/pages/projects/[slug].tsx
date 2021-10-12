import ProjectLayout from '@src/layouts/project';
import { Project } from '@src/types/project';
import { motion } from 'framer-motion';
import mdxPrism from 'mdx-prism';
import CodeTitle from 'remark-code-titles';
import Headings from 'remark-autolink-headings';
import { gql } from 'graphql-request';
import { Client } from '@src/utils/Client';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import { GetStaticProps } from 'next';
import MDXComponents from '@src/components/MDXComponents';
import React from 'react';
import SEO from '@src/components/SEO';
import { NextSeo } from 'next-seo';

interface ProjectPostProps {
  project: Project;
}

const ProjectPost = ({ project }: ProjectPostProps) => {
  return (
    <>
      <NextSeo
        title={`Blog | ${project.title}`}
        canonical={`https://lhowsam.com/blog/${project.slug}`}
        openGraph={{
          url: `https://lhowsam.com/blog/${project.slug}`,
          title: `Blog ${project.title}`,
        }}
      />
      <SEO
        description={`Blog | ${project.intro}`}
        title={`Blog | ${project.title}`}
        keywords={['Typescript, Node.js, git, blog']}
        url={`https://lhowsam.com/blog/${project.slug}`}
      />
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <ProjectLayout project={project}>
          <MDXRemote {...project.source} components={MDXComponents} />
        </ProjectLayout>
      </motion.div>
    </>
  );
};
export default ProjectPost;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;

  const query = gql`
    query Project($slug: String!) {
      project(where: { slug: $slug }) {
        id
        slug
        title
        intro
        content
        githubUrl
        siteUrl
      }
    }
  `;
  const data: { project: Project | null } = await Client.request(query, {
    slug,
  });
  if (!data.project) {
    return {
      notFound: true,
    };
  }
  const source = await serialize(data.project.content, {
    mdxOptions: {
      remarkPlugins: [CodeTitle, Headings],
      rehypePlugins: [mdxPrism],
    },
  });
  return {
    props: { project: { ...data.project, source } },
    revalidate: 60 * 60, // 1 hour cache
  };
};

export const getStaticPaths = async () => {
  const query = gql`
    query Projects() {
      projects() {
        slug
      }
    }
  `;
  const data: { projects: Pick<Project, 'slug'>[] } = await Client.request(
    query,
  );
  return {
    paths: data.projects.map((project) => ({ params: { slug: project.slug } })),
  };
};
