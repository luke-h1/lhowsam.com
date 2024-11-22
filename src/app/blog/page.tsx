import Box from '@frontend/components/Box';
import Heading from '@frontend/components/Heading';
import Page from '@frontend/components/Page';
import PostItem from '@frontend/components/PostItem';
import Spacer from '@frontend/components/Spacer';
import Text from '@frontend/components/Text';
import siteConfig from '@frontend/config/site';
import postService from '@frontend/services/postService';
import { Post } from '@frontend/types/sanity';
import { Metadata } from 'next';

export const runtime = 'edge';

export const revalidate = siteConfig.defaultRevalidate;

export const metadata: Metadata = {
  title: 'Blog',
  description: 'A collection of blog posts I have written',
  keywords: ['Blog', 'Posts', 'Articles', 'Software Development'],
};

export default async function BlogPage() {
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

  const sortedYears = Object.keys(postsByYear).sort(
    (a, b) => Number(b) - Number(a),
  );

  return (
    <Page>
      <Box as="section">
        <Heading fontSize="xxl" as="h1">
          Blog
        </Heading>
        <Spacer height="xxs" />
        <Text color="foregroundNeutral" fontSize="lg">
          Blog posts on development, testing, and other topics
        </Text>
      </Box>
      <Spacer height="xxxl" />
      <Box as="section">
        {sortedYears.map(year => (
          <Box key={year} marginBottom="xxxl">
            <Heading fontSize="xl" as="h2" color="foregroundNeutral">
              {year}
            </Heading>
            <Spacer height="xl" />
            {postsByYear[year].map(post => (
              <PostItem post={post} key={post._id} />
            ))}
          </Box>
        ))}
      </Box>
    </Page>
  );
}
