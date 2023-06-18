import Page from '@frontend/components/Page/Page';
import PageHeader from '@frontend/components/PageHeader/PageHeader';
import PostList from '@frontend/components/PostList/PostList';
import siteConfig from '@frontend/config/site';
import postService from '@frontend/services/postService';

export const revalidate = siteConfig.defaultRevalidate;

interface Props {
  params: { slug: string };
}

const TagPage = async ({ params }: Props) => {
  const posts = await postService.getAllPosts();

  const { slug } = params;

  const matchingPosts = posts.filter(post => {
    return post.tags.some(tag => tag.slug.current === slug);
  });

  return (
    <Page>
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
