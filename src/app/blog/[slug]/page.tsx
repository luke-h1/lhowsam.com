import Box from '@frontend/components/Box/Box';
import ContentRenderer from '@frontend/components/ContentRenderer';
import FormattedDate from '@frontend/components/FormattedDate';
import { Image } from '@frontend/components/Image/Image';
import Link from '@frontend/components/Link/Link';
import Meta from '@frontend/components/Meta/Meta';
import Page from '@frontend/components/Page';
import Spacer from '@frontend/components/Spacer/Spacer';
import Text from '@frontend/components/Text/Text';
import siteConfig from '@frontend/config/site';
import imageService from '@frontend/services/imageService';
import postService from '@frontend/services/postService';
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
          width={950}
          height={360}
          rounded
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
                <>
                  {post.tags.length > 0
                    ? post.tags.slice(0, 3).map(tag => (
                        <Link
                          href={`/blog/tags/${tag.slug.current}`}
                          key={tag.slug.current}
                        >
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
                        </Link>
                      ))
                    : null}
                </>
              ),
            },
          ]}
        />
      </Box>
      <Box maxWidth="container">
        <Spacer height="sm" />
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
