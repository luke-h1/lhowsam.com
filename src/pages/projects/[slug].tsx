import Box from '@frontend/components/Box/Box';
import Heading from '@frontend/components/Heading/Heading';
import Components from '@frontend/components/MDXComponents';
import Prose from '@frontend/components/Prose/Prose';
import Spacer from '@frontend/components/Spacer/Spacer';
import projectService from '@frontend/services/projectService';
import { Project } from '@frontend/types/sanity';
import mdxToHtml from '@frontend/utils/mdxToHtml';
import { GetStaticPaths, NextPage } from 'next';
import { useRouter } from 'next/router';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { NextSeo } from 'next-seo';

interface Props {
  project: Project;
  compiledSource: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, string>
  >;
}

const PostPage: NextPage<Props> = ({ project, compiledSource }) => {
  const router = useRouter();

  return (
    <article>
      <NextSeo
        title={project.title}
        canonical={`https://lhowsam.com${router.asPath}`}
        description={project.intro}
        openGraph={{
          defaultImageWidth: 1200,
          defaultImageHeight: 630,
          url: `https://lhowsam.com${router.asPath}`,
          title: `${project.title} | lhowsam.com`,
          article: {
            authors: ['Luke Howsam'],
          },
        }}
      />
      <Box
        as="header"
        maxWidth="text"
        marginX="auto"
        textAlign={{ md: 'center' }}
      >
        <Heading
          fontSize="xxl"
          as="h1"
          style={{
            marginBottom: '1rem',
          }}
        >
          {project.title}
        </Heading>
        <Spacer height="sm" />
      </Box>
      <Spacer height="xxxl" />
      <Box maxWidth="text" marginX="auto">
        <Prose>
          <MDXRemote
            components={Components}
            compiledSource={compiledSource.compiledSource}
            scope={undefined}
            frontmatter={undefined}
          />
        </Prose>
      </Box>
    </article>
  );
};
export default PostPage;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({
  params,
}: {
  params?: { slug: string };
}) => {
  const project = await projectService.getProject(params?.slug as string);

  if (!project) {
    return {
      props: [],
      notFound: true,
    };
  }

  const { compiledSource } = await mdxToHtml(project.content);

  return {
    props: {
      project,
      compiledSource,
    },
  };
};
