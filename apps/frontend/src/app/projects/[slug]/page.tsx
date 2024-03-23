import Box from '@frontend/components/Box/Box';
import ContentRenderer from '@frontend/components/ContentRenderer';
import { Image } from '@frontend/components/Image/Image';
import Link from '@frontend/components/Link/Link';
import Meta from '@frontend/components/Meta/Meta';
import Page from '@frontend/components/Page';
import Spacer from '@frontend/components/Spacer/Spacer';
import Text from '@frontend/components/Text/Text';
import siteConfig from '@frontend/config/site';
import imageService from '@frontend/services/imageService';
import projectService from '@frontend/services/projectService';
import mdxToHtml from '@frontend/utils/mdxToHtml';
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

  const { compiledSource } = await mdxToHtml(project.content);

  return (
    <Page heading={project.title} description={project.intro}>
      <Box>
        {project.image.asset && (
          <Image
            src={imageService.urlFor(project.image.asset) ?? undefined}
            width={950}
            height={460}
            rounded
            priority
            placeholder="blur"
            blurDataURL={imageService.urlFor(project.image.asset) ?? undefined}
            alt={project.image.alt ?? project.title}
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
                {project.tags.length > 0
                  ? project.tags.slice(0, 3).map(tag => (
                      <Text
                        fontSize="sm"
                        color="foregroundNeutral"
                        key={`${tag.title}-${tag.slug.current}`}
                        data-testid="post-tags"
                        style={{
                          marginTop: '0.25rem',
                        }}
                      >
                        #{tag.title}
                      </Text>
                    ))
                  : null}
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
      <Box maxWidth="container">
        <Spacer height="sm" />
        <ContentRenderer compiledSource={compiledSource.compiledSource} />
      </Box>
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
