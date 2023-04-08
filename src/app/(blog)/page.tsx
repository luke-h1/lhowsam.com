import Box from '@frontend/components/Box/Box';
import Heading from '@frontend/components/Heading/Heading';
import List from '@frontend/components/List/List';
import PostCard from '@frontend/components/PostCard/PostCard';
import Spacer from '@frontend/components/Spacer/Spacer';
import Text from '@frontend/components/Text/Text';
import postService from '@frontend/services/postService';
import { Post } from '@frontend/types/sanity';
import { Fragment } from 'react';

const BlogIndexPage = async () => {
  // need length check
  const posts = await postService.getAllPosts();

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

  return (
    <>
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
          I write about web development, testing, DevOps & more
        </Text>
      </Box>
      <Spacer height="xxxxl" />
      {Object.entries(postsByYear)
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
