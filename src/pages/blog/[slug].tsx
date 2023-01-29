import Box from '@frontend/components/Box/Box';
import FormattedDate from '@frontend/components/FormattedDate';
import Heading from '@frontend/components/Heading/Heading';
import Components from '@frontend/components/MDXComponents';
import Prose from '@frontend/components/Prose/Prose';
import Spacer from '@frontend/components/Spacer/Spacer';
import Text from '@frontend/components/Text/Text';
import imageService from '@frontend/services/imageService';
import postService from '@frontend/services/postService';
import { Post } from '@frontend/types/sanity';
import mdxToHtml from '@frontend/utils/mdxToHtml';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
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
              url: imageService.urlFor(post.image.asset),
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
            tags: post.tags.map(tag => tag.title),
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
            src={imageService.urlFor(post.image.asset)}
            width={950}
            height={330}
            priority
            placeholder="blur"
            blurDataURL={imageService.urlFor(post.image.asset)}
            style={{
              borderRadius: '0.5rem',
              objectFit: 'contain',
            }}
            alt={post.image.alt ?? post.title}
          />
        </Box>
        <Spacer height="sm" />
        <Text as="time" dateTime={post.publishedAt} color="foregroundNeutral">
          <FormattedDate>{post.publishedAt}</FormattedDate>
        </Text>
      </Box>

      <Spacer height="xxxl" />
      <Box maxWidth="text" marginX="auto">
        <Prose>
          <MDXRemote
            components={Components}
            compiledSource={compiledSource.compiledSource}
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

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
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
