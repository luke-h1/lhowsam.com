import Page from '@frontend/components/Page/Page';
import PageHeader from '@frontend/components/PageHeader/PageHeader';
import PostList from '@frontend/components/PostList/PostList';
import siteConfig from '@frontend/config/site';
import postService from '@frontend/services/postService';
import { Metadata } from 'next';
import Head from 'next/head';

export const revalidate = siteConfig.defaultRevalidate;

export const metadata: Metadata = {
  title: 'Blog',
};

const BlogIndexPage = async () => {
  const posts = await postService.getAllPosts();

  return (
    <Page>
      <Head>
        <title>Blog | lhowsam.com</title>
      </Head>
      <PageHeader
        title="Blog"
        description="I write about testing, frontend development and React"
      />
      <PostList posts={posts} />
    </Page>
  );
};
export default BlogIndexPage;
