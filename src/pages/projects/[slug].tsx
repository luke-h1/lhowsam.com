import { ScrollToTop } from '@src/components/blog';
import MDXComponents from '@src/components/mdx';
import { EndLinks, MDXContent } from '@src/styles/blog';
import { PostTitle, TextGradient } from '@src/styles/typography';
import { Project } from '@src/types/project';
import mdxPrism from 'mdx-prism';
import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import Headings from 'remark-autolink-headings';
import CodeTitle from 'remark-code-titles';
import projectService from '../../services/projectService';

interface Props {
  project: Project;
  source: { compiledSource: string };
}

const ProjectPage = ({ project, source }: Props) => {
  const router = useRouter();
  const topRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <NextSeo
        title={project.title}
        canonical={`https://lhowsam.com${router.asPath}`}
        openGraph={{
          url: `https://lhowsam.com${router.asPath}`,
          title: `${project.title} | lhowsam.com`,
        }}
      />
      <div ref={topRef} />
      <PostTitle>
        <TextGradient>{project.title}</TextGradient>
      </PostTitle>
      <MDXContent>
        <MDXRemote {...source} components={MDXComponents} />
      </MDXContent>
      <EndLinks>
        <ScrollToTop topRef={topRef} />
      </EndLinks>
    </>
  );
};
export const getStaticPaths: GetStaticPaths = async () => {
  const { projects } = await projectService.getAllProjects();
  const paths = projects.map(({ slug }) => ({ params: { slug } }));

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
  const { project } = await projectService.getProject(params.slug as string);
  if (!project) {
    return {
      props: [],
      notFound: true,
    };
  }
  const source = await serialize(project.content, {
    mdxOptions: {
      remarkPlugins: [CodeTitle, Headings],
      rehypePlugins: [mdxPrism],
    },
  });
  return {
    props: {
      project,
      source,
    },
    revalidate: 30 * 60,
  };
};
export default ProjectPage;
