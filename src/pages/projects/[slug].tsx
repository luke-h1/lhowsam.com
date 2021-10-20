// @ts-ignore
// @ts-nocheck
import { ScrollToTop } from '@src/components/blog';
import MDXComponents from '@src/components/mdx';
import { EndLinks, MDXContent } from '@src/styles/blog';
import { PostTitle, TextGradient } from '@src/styles/typography';
import { Project } from '@src/types/project';
import mdxPrism from 'mdx-prism';
import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { useRef } from 'react';
import Headings from 'remark-autolink-headings';
import CodeTitle from 'remark-code-titles';
import projectService from '../../services/projectService';

interface Props {
  project: Project;
}

const ProjectPage = ({ project }: Props) => {
  const topRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <div ref={topRef} />
      <PostTitle>
        <TextGradient>{project.project.title}</TextGradient>
      </PostTitle>
      <MDXContent>
        <MDXRemote {...project.source} components={MDXComponents} />
      </MDXContent>
      <EndLinks>
        <ScrollToTop topRef={topRef} />
      </EndLinks>
    </>
  );
};
export const getStaticPaths: GetStaticPaths = async () => {
  const projects = await projectService.getAllProjects();
  // @ts-ignore
  const paths = projects.projects.map(({ slug }) => ({ params: { slug } }))
  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.slug) {
    return {
      props: [],
      notFound: true,
    };
  }
  const project = await projectService.getProject(params.slug as string);
  if (!project.project) {
    return {
      props: [],
      notFound: true,
    };
  }
  const source = await serialize(project.project.content, {
    mdxOptions: {
      remarkPlugins: [CodeTitle, Headings],
      rehypePlugins: [mdxPrism],
    },
  });
  return {
    props: {
      project: { ...project, source },
    },
    revalidate: 60 * 30,
  };
};
export default ProjectPage;
