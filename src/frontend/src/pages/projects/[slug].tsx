import { Project } from '@lhowsam/cms/types/schema';
import { ScrollToTop } from '@src/components/blog';
import MDXComponents from '@src/components/mdx';
import imageService from '@src/services/imageService';
import { EndLinks, MDXContent } from '@src/styles/blog';
import { Flex, PostTitle, TextGradient } from '@src/styles/typography';
import mdxPrism from 'mdx-prism';
import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { CgWebsite } from 'react-icons/cg';
import Headings from 'remark-autolink-headings';
import CodeTitle from 'remark-code-titles';
import projectService from '../../services/projectService';

interface Props {
  project: Project;
}

const ProjectPage = ({ project }: Props) => {
  const router = useRouter()
  const topRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <NextSeo
        title={project.title}
        canonical={`https://lhowsam.com${router.asPath}`}
        openGraph={{
          url: `https://lhowsam.com${router.asPath}`,
          title: `${project.title} | lhowsam.com`,
          images: [imageService.getOpenGraphImage(project.title)],
        }}
      />
      <div ref={topRef} />
      <PostTitle>
        <TextGradient>{project.title}</TextGradient>
      </PostTitle>
      <Flex>
          {project.siteUrl && (
            <a
              href={project.siteUrl}
              aria-label="Deployed website"
              target="_blank"
              rel="noreferrer"
            >
              <CgWebsite fontSize="25px" />
            </a>
          )}
          <a
            href={project.githubUrl}
            aria-label="Github repo of project"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub fontSize="25px" />
          </a>
        </Flex> 
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
  const projects = await projectService.getProjectSlugs();
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
