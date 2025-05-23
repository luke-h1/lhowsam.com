import Box from '@frontend/components/Box';
import ContentRenderer from '@frontend/components/ContentRenderer';
import FormattedDate from '@frontend/components/FormattedDate';
import Heading from '@frontend/components/Heading';
import Meta from '@frontend/components/Meta';
import Page from '@frontend/components/Page';
import Spacer from '@frontend/components/Spacer';
import Text from '@frontend/components/Text';
import imageService from '@frontend/services/imageService';
import postService from '@frontend/services/postService';
import * as utils from '@frontend/styles/util.css';
import clsx from 'clsx';
import { Metadata } from 'next';
import { draftMode } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const revalidate = 3600;

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;

  const { isEnabled } = await draftMode();

  const post = await postService.getPost(slug, isEnabled);

  if (!post) {
    notFound();
  }

  return (
    <Page>
      <Box>
        <Heading fontSize="xxl" as="h1">
          {post.title}
        </Heading>
        <Spacer height="lg" />

        <Image
          src={imageService.urlFor(post.image.asset) ?? undefined}
          width={650}
          height={400}
          placeholder="blur"
          blurDataURL={imageService.urlFor(post.image.asset) ?? undefined}
          alt={post.image.alt ?? post.title}
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
        <Meta
          items={[
            {
              title: 'Published',
              description: (
                <Text
                  as="time"
                  dateTime={post.publishedAt}
                  color="foregroundNeutral"
                  fontSize="sm"
                  fontFamily="mono"
                >
                  <FormattedDate testId="time">
                    {post.publishedAt ?? null}
                  </FormattedDate>
                </Text>
              ),
            },
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
                    {post.tags.map(tag => (
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
          ]}
        />
      </Box>
      <Box display="flex" alignItems="flex-start">
        <Spacer height="md" />
        <ContentRenderer content={post.content} />
      </Box>
    </Page>
  );
}

export async function generateStaticParams() {
  try {
    const slugs = await postService.getSlugs();

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

  const post = await postService.getPost(slug, false);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.intro,
    assets: [imageService.urlFor(post.image.asset)],
    keywords: post.tags.map(t => t.title).join(', '),
  };
}
