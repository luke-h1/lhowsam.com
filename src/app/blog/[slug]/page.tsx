import Box from '@frontend/components/Box';
import ContentRenderer from '@frontend/components/ContentRenderer';
import FormattedDate from '@frontend/components/FormattedDate';
import { Image } from '@frontend/components/Image';
import Link from '@frontend/components/Link';
import Meta from '@frontend/components/Meta';
import Page from '@frontend/components/Page';
import { Spacer } from '@frontend/components/Spacer';
import Text from '@frontend/components/Text';
import siteConfig from '@frontend/config/site';
import imageService from '@frontend/services/imageService';
import postService from '@frontend/services/postService';
import * as utils from '@frontend/styles/util.css';
import clsx from 'clsx';
import { Metadata } from 'next';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';

export const revalidate = siteConfig.defaultRevalidate;

interface Props {
  params: {
    slug: string;
  };
}

const PostPage = async ({ params }: Props) => {
  const { slug } = params;

  const { isEnabled } = draftMode();

  const post = await postService.getPost(slug, isEnabled);

  if (!post) {
    notFound();
  }

  return (
    <Page heading={post.title}>
      <Box>
        <Image
          src={imageService.urlFor(post.image.asset) ?? undefined}
          width={650}
          height={400}
          rounded
          bordered
          priority
          placeholder="blur"
          blurDataURL={imageService.urlFor(post.image.asset) ?? undefined}
          alt={post.image.alt ?? post.title}
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
                // eslint-disable-next-line react/jsx-no-useless-fragment
                <Box
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'flex-start',
                  }}
                >
                  <Text
                    color="foregroundNeutral"
                    textTransform="uppercase"
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
};
export default PostPage;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;

  const post = await postService.getPost(slug, false);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.intro,
  };
}
