import BlogImage from '@frontend/components/BlogImage/BlogImage';
import ContentRenderer from '@frontend/components/ContentRenderer';
import Page from '@frontend/components/Page/Page';
import PageHeader from '@frontend/components/PageHeader/PageHeader';
import Button from '@frontend/components/form/Button/Button';
import siteConfig from '@frontend/config/site';
import imageService from '@frontend/services/imageService';
import projectService from '@frontend/services/projectService';
import mdxToHtml from '@frontend/utils/mdxToHtml';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import s from '../../blog/[slug]/post.module.scss';

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
    <Page>
      {project.image && (
        <BlogImage
          src={imageService.urlFor(project.image.asset)}
          alt={project.title}
          className={s.image}
        />
      )}
      <PageHeader title={project.title} compact />
      <article className={s.article}>
        <ContentRenderer compiledSource={compiledSource.compiledSource} />
      </article>
      <div className={s.buttons}>
        <Button type="button" href="/projects">
          Back to projects
        </Button>
      </div>
    </Page>
  );
};
export default ProjectSlugPage;
