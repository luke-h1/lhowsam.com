import Box from '@frontend/app/(components)/Box/Box';
import ContentRenderer from '@frontend/app/(components)/ContentRenderer';
import Heading from '@frontend/app/(components)/Heading/Heading';
import Spacer from '@frontend/app/(components)/Spacer/Spacer';
import siteConfig from '@frontend/config/site';
import projectService from '@frontend/services/projectService';
import mdxToHtml from '@frontend/utils/mdxToHtml';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const revalidate = siteConfig.defaultRevalidate;

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = await projectService.getProject(params.slug);

  if (!project) {
    notFound();
  }

  return {
    title: project.title,
    description: project.intro,
  };
}

const ProjectSlugPage = async ({ params }: Props) => {
  const project = await projectService.getProject(params.slug);

  if (!project) {
    notFound();
  }

  const { compiledSource } = await mdxToHtml(project.content);

  return (
    <article>
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
        <ContentRenderer compiledSource={compiledSource} />
      </Box>
    </article>
  );
};
export default ProjectSlugPage;
