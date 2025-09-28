import Box from '@frontend/components/Box';
import ContentRenderer from '@frontend/components/ContentRenderer';
import FormattedDate from '@frontend/components/FormattedDate';
import Heading from '@frontend/components/Heading';
import Link from '@frontend/components/Link';
import Meta from '@frontend/components/Meta';
import Page from '@frontend/components/Page';
import Spacer from '@frontend/components/Spacer';
import Text from '@frontend/components/Text';
import imageService from '@frontend/services/imageService';
import workService from '@frontend/services/workService';
import { parseVideoShortcodes } from '@frontend/utils/parseVideoShortcodes';
import { Metadata } from 'next';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';
import { FiGithub, FiLink } from 'react-icons/fi';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export const revalidate = 3600;

export default async function WorkSlugPage({ params }: Props) {
  const { slug } = await params;
  const { isEnabled } = await draftMode();

  const work = await workService.getWork(slug, isEnabled);

  if (!work) {
    notFound();
  }

  // Process video shortcodes
  const processedContent = parseVideoShortcodes(
    work.content,
    work.videos?.map(video => ({
      id: video.video.asset.playbackId, // Use the actual playback ID from the asset
      video: {
        playbackId: video.video.asset.playbackId,
      },
      caption: video.caption,
    })) || [],
  );

  return (
    <Page>
      <Box>
        <Heading fontSize="xxl">{work.title}</Heading>
        <Spacer height="lg" />

        <Meta
          items={[
            work.publishedAt
              ? {
                  title: 'Published',
                  description: (
                    <Text
                      as="time"
                      dateTime={work.publishedAt}
                      color="foregroundNeutral"
                      fontSize="sm"
                      fontFamily="mono"
                    >
                      <FormattedDate testId="time">
                        {work.publishedAt ?? null}
                      </FormattedDate>
                    </Text>
                  ),
                }
              : null,
            work.githubUrl
              ? {
                  title: 'Repository',
                  description: (
                    <Link href={work.githubUrl}>
                      <FiGithub size={20} />
                    </Link>
                  ),
                }
              : null,
            work.siteUrl
              ? {
                  title: 'Site URL',
                  description: (
                    <Link href={work.siteUrl}>
                      <FiLink size={20} />
                    </Link>
                  ),
                }
              : null,
          ].filter(item => item !== null)}
        />
      </Box>
      <Box display="flex" alignItems="flex-start">
        <Spacer height="md" />
        <ContentRenderer content={processedContent} />
      </Box>
    </Page>
  );
}

export async function generateStaticParams() {
  const slugs = await workService.getSlugs();

  return slugs.map(s => ({
    slug: s.current,
  }));
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const { slug } = params;

  const work = await workService.getWork(slug);

  if (!work) {
    return {};
  }

  const { title, intro } = work;

  return {
    title,
    description: intro,
    assets: [imageService.urlFor(work.image.asset)],
  };
}
