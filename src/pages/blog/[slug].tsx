/* eslint-disable @typescript-eslint/no-unused-vars */
import Box from '@frontend/components/Box/Box';
import FormattedDate from '@frontend/components/FormattedDate';
import Heading from '@frontend/components/Heading/Heading';
import Image from '@frontend/components/Image/Image';
import Components from '@frontend/components/MDXComponents';
import Prose from '@frontend/components/Prose/Prose';
import Spacer from '@frontend/components/Spacer/Spacer';
import Text from '@frontend/components/Text/Text';
import { Post } from '@frontend/graphql/generated/generated';
import postService from '@frontend/services/postService';
import mdxToHtml from '@frontend/utils/mdxToHtml';
import { GetStaticPaths, NextPage } from 'next';
import { useRouter } from 'next/router';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { NextSeo } from 'next-seo';

interface Props {
  post: Post;
  compiledSource: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, string>
  >;
}

const PostPage: NextPage<Props> = ({ post, compiledSource }) => {
  const router = useRouter();

  return (
    <article>
      <NextSeo
        title={post.title}
        canonical={`https://lhowsam.com${router.asPath}`}
        description={post.intro}
        openGraph={{
          defaultImageWidth: 1200,
          defaultImageHeight: 630,
          images: [
            {
              url: post.image.url,
              alt: post.title,
              height: 1200,
              width: 630,
            },
          ],
          url: `https://lhowsam.com${router.asPath}`,
          title: `${post.title} | lhowsam.com`,
          article: {
            authors: ['Luke Howsam'],
            publishedTime: post.publishedAt,
            tags: post.tags?.map(tag => tag.title),
          },
        }}
      />
      <Box
        as="header"
        maxWidth="text"
        marginX="auto"
        textAlign={{ md: 'center' }}
      >
        <Heading
          fontSize="xxl"
          as="h1"
          style={{
            marginBottom: '1rem',
          }}
        >
          {post.title}
        </Heading>

        <Box>
          <Image
            src={post.image.url}
            width={950}
            height={330}
            priority
            placeholder="blur"
            blurDataURL={post?.image.url}
            style={{
              borderRadius: '0.5rem',
              objectFit: 'contain',
            }}
            alt={post.title}
          />
        </Box>
        <Spacer height="sm" />
        <Text
          as="time"
          dateTime={post.publishedAt}
          color="foregroundNeutral"
          data-testid="time"
        >
          <FormattedDate>{post.publishedAt}</FormattedDate>
        </Text>
      </Box>

      <Spacer height="xxxl" />
      <Box maxWidth="text" marginX="auto">
        <Prose>
          <MDXRemote
            components={Components}
            compiledSource={compiledSource.compiledSource}
            scope={undefined}
            frontmatter={undefined}
          />
        </Prose>
      </Box>
    </article>
  );
};
export default PostPage;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};
export const getStaticProps = async ({
  params,
}: {
  params?: { slug: string };
}) => {
  const post = await postService.getPost(params?.slug as string);

  if (!post) {
    return {
      props: [],
      notFound: true,
    };
  }
  const { compiledSource } = await mdxToHtml(post.content);

  return {
    props: {
      post,
      compiledSource,
    },
  };
};
