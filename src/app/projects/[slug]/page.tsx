import Box from '@frontend/components/Box';
import ContentRenderer from '@frontend/components/ContentRenderer';
import Heading from '@frontend/components/Heading';
import Meta from '@frontend/components/Meta';
import Page from '@frontend/components/Page';
import Spacer from '@frontend/components/Spacer';
import Text from '@frontend/components/Text';
import imageService from '@frontend/services/imageService';
import projectService from '@frontend/services/projectService';
import * as utils from '@frontend/styles/util.css';
import clsx from 'clsx';
import { Metadata } from 'next';
import { draftMode } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FiGithub } from 'react-icons/fi';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export const revalidate = 3600;

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const { isEnabled } = await draftMode();

  const project = await projectService.getProject(slug, isEnabled);

  if (!project) {
    notFound();
  }

  return (
    <Page>
      <Box>
        <Heading fontSize="xxl" as="h1">
          {project.title}
        </Heading>
        <Spacer height="lg" />
        <Image
          src={imageService.urlFor(project.image.asset)}
          width={650}
          height={400}
          priority
          placeholder="blur"
          blurDataURL={imageService.urlFor(project.image.asset)}
          alt={project.image.alt ?? project.title}
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
        <Meta
          items={[
            {
              title: 'Tags',
              description: (
                <Box
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'flex-start',
                  }}
                >
                  <Text
                    color="foregroundNeutral"
                    // textTransform="uppercase"
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
                </Box>
              ),
            },
            {
              title: 'Repository',
              description: (
                <Link href={project.githubUrl}>
                  <FiGithub size={20} />
                </Link>
              ),
            },
          ]}
        />
      </Box>
      <Box display="flex" alignItems="flex-start">
        <Spacer height="md" />
        <ContentRenderer content={project.content} />
      </Box>
    </Page>
  );
}

export async function generateStaticParams() {
  const slugs = await projectService.getSlugs();

  return slugs.map(s => ({
    slug: s.current,
  }));
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const { slug } = params;

  const project = await projectService.getProject(slug);

  if (!project) {
    return {};
  }

  const { title, intro } = project;

  return {
    title,
    description: intro,
    assets: [imageService.urlFor(project.image.asset)],
  };
}
