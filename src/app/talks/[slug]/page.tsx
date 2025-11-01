import Box from '@frontend/components/Box';
import ContentRenderer from '@frontend/components/ContentRenderer';
import FormattedDate from '@frontend/components/FormattedDate';
import Heading from '@frontend/components/Heading';
import Meta from '@frontend/components/Meta';
import Page from '@frontend/components/Page';
import Spacer from '@frontend/components/Spacer';
import Text from '@frontend/components/Text';
import imageService from '@frontend/services/imageService';
import talkService from '@frontend/services/talkService';
import { Metadata } from 'next';
import { draftMode } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { stegaClean } from 'next-sanity';
import { FiExternalLink, FiMapPin, FiVideo } from 'react-icons/fi';

export const revalidate = 3600;

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function TalkPage({ params }: Props) {
  const { slug } = await params;

  const { isEnabled } = await draftMode();

  const talk = await talkService.getTalk(slug, isEnabled);

  if (!talk) {
    notFound();
  }

  return (
    <Page>
      <Box>
        <Heading fontSize="xxl" as="h1">
          {talk.title}
        </Heading>
        <Spacer height="lg" />

        {talk.image?.asset && (
          <Image
            src={imageService.urlFor(talk.image.asset)}
            width={650}
            height={400}
            placeholder="blur"
            blurDataURL={imageService.urlFor(talk.image.asset)}
            alt={talk.image.alt ?? talk.title}
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
        )}

        <Meta
          items={[
            {
              title: 'Date',
              description: (
                <Text
                  as="time"
                  dateTime={talk.date}
                  color="foregroundNeutral"
                  fontSize="sm"
                  fontFamily="mono"
                >
                  <FormattedDate testId="talk-date">
                    {talk.date ?? null}
                  </FormattedDate>
                </Text>
              ),
            },
            {
              title: 'Location',
              description: (
                <Box display="flex" alignItems="center" gap="xs">
                  <FiMapPin size={14} />
                  <Text
                    color="foregroundNeutral"
                    fontSize="sm"
                    fontFamily="mono"
                  >
                    {talk.location}
                  </Text>
                </Box>
              ),
            },
            {
              title: 'Resources',
              description: (
                <Box display="flex" gap="md" alignItems="center">
                  <Link href={talk.slideUrl}>
                    <Box display="flex" alignItems="center" gap="xs">
                      <FiExternalLink size={16} />
                      <Text fontSize="sm">Slides</Text>
                    </Box>
                  </Link>
                  {talk.videoUrl && (
                    <Link href={talk.videoUrl}>
                      <Box display="flex" alignItems="center" gap="xs">
                        <FiVideo size={16} />
                        <Text fontSize="sm">Video</Text>
                      </Box>
                    </Link>
                  )}
                </Box>
              ),
            },
          ]}
        />
      </Box>
      <Box display="flex" alignItems="flex-start">
        <Spacer height="md" />
        <ContentRenderer content={talk.content} />
      </Box>
    </Page>
  );
}

export async function generateStaticParams() {
  try {
    const slugs = await talkService.getSlugs();

    return slugs
      .filter(slug => slug?.current)
      .map(s => ({
        slug: s.current,
      }));
  } catch {
    return [];
  }
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const { slug } = params;

  const talk = await talkService.getTalk(slug, false);

  if (!talk) {
    return {};
  }

  return {
    title: stegaClean(talk.title),
    description: stegaClean(talk.description),
    assets: talk.image?.asset
      ? [imageService.urlFor(talk.image.asset)]
      : undefined,
  };
}
