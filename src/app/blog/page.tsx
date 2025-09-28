import Box from '@frontend/components/Box';
import Heading from '@frontend/components/Heading';
import Page from '@frontend/components/Page';
import Spacer from '@frontend/components/Spacer';
import Text from '@frontend/components/Text';
import postService from '@frontend/services/postService';
import { Metadata } from 'next';
import { Suspense } from 'react';
import PostsClient from './page.client';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Blog | lhowsam.com',
  description: 'Blog posts on development, testing, and other topics',
  keywords: ['Blog', 'Posts', 'Articles', 'Software Development'],
};

export default async function BlogPage() {
  const posts = await postService.getAllPosts();

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
      <Suspense>
        <PostsClient posts={posts} />
      </Suspense>
    </Page>
  );
}
