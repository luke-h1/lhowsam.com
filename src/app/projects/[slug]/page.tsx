import Box from '@frontend/components/Box';
import ContentRenderer from '@frontend/components/ContentRenderer';
import { Image } from '@frontend/components/Image';
import Link from '@frontend/components/Link';
import Meta from '@frontend/components/Meta';
import Page from '@frontend/components/Page';
import { Spacer } from '@frontend/components/Spacer';
import Text from '@frontend/components/Text';
import siteConfig from '@frontend/config/site';
import imageService from '@frontend/services/imageService';
import projectService from '@frontend/services/projectService';
import * as utils from '@frontend/styles/util.css';
import clsx from 'clsx';
import { Metadata } from 'next';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';
import { FiGithub } from 'react-icons/fi';

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
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        marginY="none"
        marginX="none"
        marginBottom="lg"
      >
        {project.image.asset && (
          <Image
            src={imageService.urlFor(project.image.asset) ?? undefined}
            width={650}
            height={400}
            rounded
            bordered
            priority
            layout="intrinsic"
            placeholder="blur"
            blurDataURL={imageService.urlFor(project.image.asset) ?? undefined}
            alt={project.image.alt ?? project.title}
            quality={100}
          />
        )}
      </Box>
      <Meta
        items={[
          {
            title: 'Tags',
            description: (
              // eslint-disable-next-line react/jsx-no-useless-fragment
              <>
                <Text
                  color="foregroundNeutral"
                  textTransform="uppercase"
                  // letterSpacing="wide"
                  fontSize="sm"
                  fontFamily="mono"
                >
                  {project.tags.map(tag => (
                    <Link
                      key={tag.slug.current}
                      href={`/blog/tags/${tag.slug.current}`}
                      className={clsx(utils.tag, utils.anchor)}
                    >
                      {tag.title.toUpperCase()}
                    </Link>
                  ))}
                </Text>
              </>
            ),
          },
          {
            title: 'Repository',
            description: (
              <Link href={project.githubUrl}>
                <FiGithub />
              </Link>
            ),
          },
        ]}
      />
      <Box maxWidth="container" display="flex" alignItems="flex-start">
        <Spacer height="md" />
        <ContentRenderer content={project.content} />
      </Box>
    </Page>
  );
};
export default ProjectPage;

export async function generateStaticParams() {
  const slugs = await projectService.getSlugs();

  return slugs.map(s => ({
    slug: s.current,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;

  const project = await projectService.getProject(slug);

  if (!project) {
    return {};
  }

  const { title, intro } = project;

  return {
    title,
    description: intro,
  };
}
