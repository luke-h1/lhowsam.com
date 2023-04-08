/* eslint-disable react/jsx-curly-brace-presence */
import Box from '@frontend/components/Box/Box';
import Heading from '@frontend/components/Heading/Heading';
import List from '@frontend/components/List/List';
import PostCard from '@frontend/components/PostCard/PostCard';
import Spacer from '@frontend/components/Spacer/Spacer';
import Text from '@frontend/components/Text/Text';
import postService from '@frontend/services/postService';
import { Post } from '@frontend/types/sanity';
import { Metadata } from 'next';
import Balancer from 'react-wrap-balancer';

export const metadata: Metadata = {
  title: 'Home',
};

const HomePage = async () => {
  let posts: Post[] = [];

  const recentPosts = await postService.getRecentPosts();

  if (recentPosts.length > 0) {
    posts = recentPosts;
  }

  return (
    <>
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
            Hey, I&apos;m Luke. I like to work on big codebases where high
            quality & maintainability are the norm. I currently like to work
            with React, Next.js, Typescript & design systems. I'm always keen to
            keep up with industry trends and new technologies.
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
export default HomePage;
