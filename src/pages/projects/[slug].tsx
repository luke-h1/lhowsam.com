/* eslint-disable react/no-unstable-nested-components */
import Page from '@frontend/components/Page/Page';
import ContentRenderer from '@frontend/components/mdx/ContentRenderer';
import customMdxComponents from '@frontend/components/mdx/MdxComponents';
import projectService from '@frontend/services/projectService';
import { Project } from '@frontend/types/sanity';
import mdxToHtml, { MdxResult } from '@frontend/utils/mdxToHtml';
import { MDXProvider } from '@mdx-js/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { ArticleJsonLd, NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import readingTime from 'reading-time';

interface Props {
  transformedMdx: MdxResult;
  project: Project;
}

const ProjectSlugPage = ({ project, transformedMdx }: Props) => {
  const router = useRouter();

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  return (
    <Page>
      <NextSeo
        title={project.title}
        canonical={`https://lhowsam.com${router.asPath}`}
        description={project.intro}
        openGraph={{
          defaultImageWidth: 1200,
          defaultImageHeight: 630,
          url: `https://lhowsam.com${router.asPath}`,
          title: `${project.title} | lhowsam.com`,
        }}
      />
      <ArticleJsonLd
        url={`https://lhowsam.com${router.asPath}`}
        authorName="Luke Howsam"
        description={project.intro}
        publisherLogo="https://lhowsam.com/static/images/logo.png"
        publisherName="lhowsam.com"
        title={project.title}
        isAccessibleForFree
        type="Article"
        datePublished=""
        images={[]}
      />
      <main>
        <MDXProvider
          components={{
            customMdxComponents,
          }}
        >
          <ContentRenderer
            type="project"
            frontMatter={{
              intro: project.intro,
              published: true,
              readingTime: readingTime(project.content).text,
              title: project.title,
            }}
          >
            <MDXRemote {...transformedMdx.compiledSource} />
          </ContentRenderer>
        </MDXProvider>
      </main>
    </Page>
  );
};

export default ProjectSlugPage;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const project = await projectService.getProject(params?.slug as string);

  if (!project) {
    return {
      props: [],
      notFound: true,
    };
  }

  const transformedMdx = await mdxToHtml(project.content);

  return {
    props: {
      project,
      transformedMdx,
    },
  };
};
