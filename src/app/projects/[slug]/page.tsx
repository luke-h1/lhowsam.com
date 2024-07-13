import Page from '@frontend/components/Page';
import siteConfig from '@frontend/config/site';
import projectService from '@frontend/services/projectService';
import { Metadata } from 'next';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';

interface Props {
  params: {
    slug: string;
  };
}

export const revalidate = siteConfig.defaultRevalidate;

const ProjectPage = async ({ params }: Props) => {
  const { slug } = params;
  const { isEnabled } = draftMode();

  const project = await projectService.getProject(slug, isEnabled);

  if (!project) {
    notFound();
  }

  return (
    <Page heading={project.title} description={project.intro}>
      slug
    </Page>
  );
};
export default ProjectPage;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;

  const post = await projectService.getProject(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.intro,
  };
}
