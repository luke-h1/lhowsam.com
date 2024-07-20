import Box from '@frontend/components/Box';
import { Heading } from '@frontend/components/Heading';
import { List } from '@frontend/components/List';
import Page from '@frontend/components/Page';
import PostItem from '@frontend/components/PostItem';
import { Spacer } from '@frontend/components/Spacer';
import siteConfig from '@frontend/config/site';
import postService from '@frontend/services/postService';
import { Post } from '@frontend/types/sanity';
import { Fragment } from 'react';

interface Props {
  params: {
    slug: string;
  };
}

export const revalidate = siteConfig.defaultRevalidate;

const TagPage = async ({ params }: Props) => {
  const { slug } = params;

  const posts = await postService.getAllPosts();

  const matchingPosts = posts.filter(post => {
    return post.tags.some(tag => tag.slug.current === slug);
  });

  const heading = `Posts tagged with '${slug}'`;

  const allPosts = matchingPosts.sort((a, b) => {
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
    <Page heading={heading}>
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
export default TagPage;
