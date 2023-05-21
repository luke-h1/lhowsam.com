/* eslint-disable react/jsx-curly-brace-presence */
import Box from '@frontend/components/Box/Box';
import Heading from '@frontend/components/Heading/Heading';
import List from '@frontend/components/List/List';
import Spacer from '@frontend/components/Spacer/Spacer';
import Text from '@frontend/components/Text/Text';
import siteConfig from '@frontend/config/site';
import postService from '@frontend/services/postService';
import { Post } from '@frontend/types/sanity';
import { GetStaticProps, NextPage } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import Balancer from 'react-wrap-balancer';

const PostCard = dynamic(
  () => import('@frontend/components/PostCard/PostCard'),
);

interface Props {
  posts: Post[];
}

const Indexpage: NextPage<Props> = ({ posts }) => {
  const router = useRouter();

  return (
    <>
      <NextSeo
        title="Home"
        canonical={`https://lhowsam.com${router.asPath}`}
        description="Home"
        openGraph={{
          defaultImageWidth: 1200,
          defaultImageHeight: 630,
          url: `https://lhowsam.com${router.asPath}`,
          title: `Home | lhowsam.com`,
        }}
      />
      <Box
        as="header"
        textAlign={{ md: 'center' }}
        maxWidth="container"
        marginX="auto"
      >
        <Heading fontSize={{ xs: 'xxl', sm: 'xxxl' }} as="h1">
          Luke{' '}
          <span role="separator" aria-orientation="vertical">
            {'//'}
          </span>{' '}
          Software Engineer
        </Heading>
        <Spacer height="md" />
        <Text
          fontSize={{ xs: 'lg', sm: 'xl' }}
          color="foregroundNeutral"
          style={{
            display: 'inline-flex',
            marginBottom: '4rem',
          }}
        >
          <Balancer ratio={0.25} data-testid="intro">
            Software Engineer based in the UK who is interested in React.js,
            Next.js, Typescript and DevOps
          </Balancer>
        </Text>
      </Box>
      <Spacer height="xxxl" />
      <Box as="section" maxWidth={{ md: 'text' }} marginX="auto">
        <header>
          <Heading fontSize="xl">Recent Posts</Heading>
        </header>
        <Spacer height="xxl" />
        <List>
          {posts &&
            posts.map(post => (
              <PostCard post={post} key={`${post._id}-${post.title}`} />
            ))}
        </List>
      </Box>
    </>
  );
};
export default Indexpage;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = await postService.getRecentPosts();

  if (!posts.length) {
    return {
      props: {
        posts: [],
      },
    };
  }

  return {
    props: {
      posts,
    },
    revalidate: siteConfig.defaultRevalidate,
  };
};
