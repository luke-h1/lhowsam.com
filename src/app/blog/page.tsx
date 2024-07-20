import Box from '@frontend/components/Box';
import { Heading } from '@frontend/components/Heading';
import { List } from '@frontend/components/List';
import Page from '@frontend/components/Page';
import PostItem from '@frontend/components/PostItem';
import { Spacer } from '@frontend/components/Spacer';
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

  const description =
    'Posts on software development, testing, DevOps and more.';

  return (
    <Page heading="Blog" description={description}>
      {Object.entries(postsByYear)
        .reverse()
        // eslint-disable-next-line no-shadow
        .map(([year, posts], i) => (
          <Fragment key={year}>
            {i === 0 && <Spacer height="xxl" />}
            {i > 0 && <Spacer height="xxl" />}
            <Box as="section" marginX="auto">
              <Heading fontSize="xl" id={year} color="border">
                {year}
              </Heading>
              <Spacer height="md" />
              <Box as="section" paddingX="md">
                <List marginX="lg" maxWidth="container">
                  {posts &&
                    posts.map(post => (
                      <List.Item key={`${post._id}-${post.title}`}>
                        <PostItem
                          post={post}
                          key={`${post._id}-${post.title}`}
                        />
                      </List.Item>
                    ))}
                </List>
              </Box>
            </Box>
          </Fragment>
        ))}
    </Page>
  );
};
export default BlogPage;
