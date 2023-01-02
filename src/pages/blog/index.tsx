import Blog from '@frontend/components/Blog';
import Page from '@frontend/components/Page';
import siteConfig from '@frontend/config/site';
import postService from '@frontend/services/postService';
import tagService from '@frontend/services/tagService';
import { Post, Tag } from '@frontend/types/sanity';
import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

interface Props {
  posts: Post[];
  tags: Tag[];
}

const BlogPage = ({ posts, tags }: Props) => {
  const router = useRouter();
  return (
    <Page>
      <NextSeo
        title="Blog"
        canonical={`https://lhowsam.com${router.asPath}`}
        description="My blog posts"
        openGraph={{
          defaultImageWidth: 1200,
          defaultImageHeight: 630,
          url: `https://lhowsam.com${router.asPath}`,
          title: `Blog | lhowsam.com`,
        }}
      />
      <Blog posts={posts} tags={tags} />
    </Page>
  );
};
export default BlogPage;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = await postService.getAllPosts();
  const tags = await tagService.getTags();

  if (!posts.length) {
    return {
      props: {
        posts: [],
        tags: [],
      },
    };
  }
  if (!tags.length) {
    return {
      props: {
        posts,
        tags: [],
      },
    };
  }

  return {
    props: {
      posts,
      tags,
    },
    revalidate: siteConfig.defaultRevalidate,
  };
};
