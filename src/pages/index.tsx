/* eslint-disable react/jsx-curly-brace-presence */
import Box from '@frontend/components/Box/Box';
import Heading from '@frontend/components/Heading/Heading';
import Spacer from '@frontend/components/Spacer/Spacer';
import Text from '@frontend/components/Text/Text';
import siteConfig from '@frontend/config/site';
import postService from '@frontend/services/postService';
import { Post } from '@frontend/types/sanity';
import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import Balancer from 'react-wrap-balancer';

interface Props {
  posts: Post[];
}

const Indexpage = ({ posts }: Props) => {
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
          }}
        >
          <Balancer ratio={0.25}>
            Hey, I&apos;m Luke. I like to work on big codebases where high
            quality & maintainability are the norm. I currently like to work
            with React, Next.js, Typescript & design systems. I'm always keen
            to keep up with industry trends and new technologies.
          </Balancer>
        </Text>
      </Box>
      <Spacer height="xxxl" />
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
        tags: [],
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
