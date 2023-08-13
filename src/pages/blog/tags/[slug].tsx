import Page from '@frontend/components/Page/Page';
import PageHeader from '@frontend/components/PageHeader/PageHeader';
import PostList from '@frontend/components/PostList/PostList';
import { PostsQuery } from '@frontend/graphql/generated';
import postService from '@frontend/services/postService';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';

interface Props {
  posts: PostsQuery['posts'];
}

const TagPage: NextPage<Props> = ({ posts }) => {
  const router = useRouter();

  const slug = router.query.slug as string;

  const matchingPosts = posts.filter(post => {
    return post.tags.some(tag => tag.slug === slug);
  });

  return (
    <Page>
      <NextSeo
        title={`Posts tagged with ${slug}`}
        canonical={`https://lhowsam.com${router.asPath}`}
        description={`Posts tagged with ${slug}`}
        openGraph={{
          defaultImageWidth: 1200,
          defaultImageHeight: 630,
          url: `https://lhowsam.com${router.asPath}`,
          title: `tags | lhowsam.com`,
          article: {
            authors: ['Luke Howsam'],
          },
        }}
      />
      <PageHeader
        title={slug}
        description={
          <>
            Posts tagged with <strong>{slug}</strong>
          </>
        }
      />
      <PostList posts={matchingPosts} />
    </Page>
  );
};
export default TagPage;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { posts } = await postService.getPosts();

  return {
    props: {
      posts,
    },
  };
};
