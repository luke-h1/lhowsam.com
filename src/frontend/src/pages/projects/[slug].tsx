import { Project } from '@lhowsam/cms/types/schema';
import SEO from '@src/components/SEO';
import { ScrollToTop } from '@src/components/blog';
import MDXComponents from '@src/components/mdx';
import { EndLinks, MDXContent } from '@src/styles/blog';
import { PostTitle, TextGradient } from '@src/styles/typography';
import mdxPrism from 'mdx-prism';
import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { NextSeo } from 'next-seo';
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
      <NextSeo
        title={`${project.title} | lhowsam.com`}
        canonical={`https://lhowsam.com/projects/${project.slug}`}
        openGraph={{
          url: `https://lhowsam.com/projects/${project.slug}`,
          title: `${project.title} | lhowsam.com`,
        }}
      />
      <SEO
        description={project.intro}
        title={`${project.title} | lhowsam.com`}
        keywords={['Projects, Blog posts, About']}
        url={`https://lhowsam.com/projects/${project.slug}`}
      />
      <div ref={topRef} />
      <PostTitle>
        <TextGradient>{project.title}</TextGradient>
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
  const slugs = projects.map((project) => ({
    params: { slug: project.slug.current },
  }));
  return {
    paths: slugs,
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
  if (!project) {
    return {
      props: [],
      notFound: true,
    };
  }
  const source = await serialize(project.description, {
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
