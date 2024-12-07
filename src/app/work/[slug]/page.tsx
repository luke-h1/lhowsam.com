import Box from '@frontend/components/Box';
import ContentRenderer from '@frontend/components/ContentRenderer';
import FormattedDate from '@frontend/components/FormattedDate';
import Heading from '@frontend/components/Heading';
import Meta from '@frontend/components/Meta';
import Page from '@frontend/components/Page';
import Spacer from '@frontend/components/Spacer';
import Text from '@frontend/components/Text';
import imageService from '@frontend/services/imageService';
import workService from '@frontend/services/workService';
import { Metadata } from 'next';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export const revalidate = 1800;

export default async function WorkSlugPage({ params }: Props) {
  const { slug } = await params;
  const { isEnabled } = await draftMode();

  const work = await workService.getWork(slug, isEnabled);

  if (!work) {
    notFound();
  }

  return (
    <Page>
      <Box>
        <Heading fontSize="xxl">{work.title}</Heading>
        <Spacer height="lg" />

        <Meta
          items={[
            {
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
            },
          ]}
        />
      </Box>
      <Box display="flex" alignItems="flex-start">
        <Spacer height="md" />
        <ContentRenderer content={work.content} />
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
