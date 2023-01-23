/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-param-reassign */
import Box from '@frontend/components/Box/Box';
import Heading from '@frontend/components/Heading/Heading';
import Link from '@frontend/components/Link/Link';
import List from '@frontend/components/List/List';
import Spacer from '@frontend/components/Spacer/Spacer';
import Text from '@frontend/components/Text/Text';
import siteConfig from '@frontend/config/site';
import postService from '@frontend/services/postService';
import { Post } from '@frontend/types/sanity';
import { NextPage } from 'next';

interface Props {
  posts: Record<string, Post[]>;
}

const BlogIndexPage: NextPage<Props> = ({ posts }) => {
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
          I write about web development, testing, devops & more
        </Text>
      </Box>
      <Spacer height="xxxxl" />
      {Object.entries(posts)
        .reverse()
        // eslint-disable-next-line no-shadow
        .map(([year, posts], i) => (
          <>
            {i > 0 && <Spacer height="xxxxl" />}
            <Box as="section" maxWidth={{ md: 'text' }} marginX="auto">
              <header>
                <Heading fontSize="xl" id={year}>
                  {year}
                </Heading>
              </header>
              <Spacer height="xxl" />
              <List>
                {posts &&
                  posts.map(post => (
                    <List.Item key={post._id}>
                      <Box
                        display="flex"
                        flexDirection={{
                          xs: 'column',
                          sm: 'row-reverse',
                        }}
                        alignItems={{ sm: 'center' }}
                        justifyContent={{ sm: 'space-between' }}
                        gap="sm"
                        maxWidth="text"
                      >
                        <Text
                          as="time"
                          dateTime={post.publishedAt}
                          color="foregroundNeutral"
                          fontSize="sm"
                        >
                          {post.publishedAt}
                        </Text>
                        <Heading>
                          <Link href={`/blog/${post.slug.current}`}>
                            {post.title}
                          </Link>
                        </Heading>
                      </Box>
                      <Spacer height={{ xs: 'sm', sm: 'md' }} />
                      <Text color="foregroundNeutral">{post.intro}</Text>
                    </List.Item>
                  ))}
              </List>
            </Box>
          </>
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
