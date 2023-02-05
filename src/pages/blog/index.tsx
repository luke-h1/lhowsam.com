/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-param-reassign */
import Box from '@frontend/components/Box/Box';
import Heading from '@frontend/components/Heading/Heading';
import List from '@frontend/components/List/List';
import PostCard from '@frontend/components/PostCard/PostCard';
import Spacer from '@frontend/components/Spacer/Spacer';
import Text from '@frontend/components/Text/Text';
import siteConfig from '@frontend/config/site';
import postService from '@frontend/services/postService';
import { Post } from '@frontend/types/sanity';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import { Fragment } from 'react';

interface Props {
  posts: Record<string, Post[]>;
}

const BlogIndexPage: NextPage<Props> = ({ posts }) => {
  const router = useRouter();
  return (
    <>
      <NextSeo
        title="Blog"
        canonical={`https://lhowsam.com${router.asPath}`}
        description="My blog posts"
        openGraph={{
          defaultImageWidth: 1200,
          defaultImageHeight: 630,
          url: `https://lhowsam.com${router.asPath}`,
          title: `Blog | lhowsam.com`,
        }}
      />
      <Box
        as="header"
        textAlign={{ md: 'center' }}
        maxWidth="container"
        marginX="auto"
      >
        <Heading fontSize={{ xs: 'xxl', sm: 'xxxl' }} as="h1">
          Blog
        </Heading>
        <Spacer height="sm" />
        <Text
          fontSize={{ xs: 'lg', sm: 'xl' }}
          color="foregroundNeutral"
          style={{ display: 'inline-flex' }}
        >
          I write about web development, testing, devops & more
        </Text>
      </Box>
      <Spacer height="xxxxl" />
      {Object.entries(posts)
        .reverse()
        // eslint-disable-next-line no-shadow
        .map(([year, posts], i) => (
          <Fragment key={year}>
            {i > 0 && <Spacer height="xxxxl" />}
            <Box as="section" maxWidth={{ md: 'text' }} marginX="auto">
              <header>
                <Heading fontSize="xl" id={year} data-testid={`post-${year}`}>
                  {year}
                </Heading>
              </header>
              <Spacer height="xxl" />
              <List>
                {posts &&
                  posts.map(post => (
                    <PostCard post={post} key={`${post._id}-${post.title}`} />
                  ))}
              </List>
            </Box>
          </Fragment>
        ))}
    </>
  );
};

export default BlogIndexPage;

export const getStaticProps = async () => {
  const posts = await postService.getAllPosts();
  if (!posts.length) {
    return {
      props: {
        posts: [],
      },
    };
  }

  const allPosts = posts.sort((a, b) => {
    if (a.publishedAt < b.publishedAt) {
      return 1;
    }
    if (a.publishedAt > b.publishedAt) {
      return -1;
    }
    return 0;
  });

  const postsByYear: Record<string, Post[]> = {};

  allPosts.forEach(post => {
    const year = new Date(post.publishedAt).getFullYear();
    if (!postsByYear[year]) {
      postsByYear[year] = [];
    }
    postsByYear[year].push(post);
  });

  return {
    props: {
      posts: postsByYear,
    },
    revalidate: siteConfig.defaultRevalidate,
  };
};
