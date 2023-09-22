import Box from '@frontend/components/Box/Box';
import Heading from '@frontend/components/Heading/Heading';
import { List } from '@frontend/components/List/List';
import Page from '@frontend/components/Page';
import PostCard from '@frontend/components/PostCard/PostCard';
import Spacer from '@frontend/components/Spacer/Spacer';
import siteConfig from '@frontend/config/site';
import postService from '@frontend/services/postService';
import { Post } from '@frontend/types/sanity';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const revalidate = siteConfig.defaultRevalidate;

export const metadata: Metadata = {
  title: 'Blog',
};

const BlogPage = async () => {
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
    <Page heading="Blog">
      <Box maxWidth="text">
        {/* <Box
          display="flex"
          justifyContent="flex-start"
          style={{
            flexWrap: 'wrap',
          }}
          as="section"
          maxWidth={{ md: 'text' }}
          marginX="auto"
          marginBottom="md"
         /> */}
        {Object.entries(postsByYear)
          .reverse()
          // eslint-disable-next-line no-shadow
          .map(([year, posts], i) => (
            <Fragment key={year}>
              {i > 0 && <Spacer height="xxxxl" />}
              <Box as="section" maxWidth={{ md: 'text' }} marginX="auto">
                <header>
                  <Heading fontSize="xl" id={year} color="foregroundAction">
                    {year}
                  </Heading>
                </header>
                <Spacer height="xxl" />
                <List>
                  {posts &&
                    posts.map(post => (
                      <PostCard key={post.slug.current} post={post} />
                    ))}
                </List>
              </Box>
            </Fragment>
          ))}
      </Box>
    </Page>
  );
};
export default BlogPage;
