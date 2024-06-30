import Page from '@frontend/components/Page';
import siteConfig from '@frontend/config/site';
import postService from '@frontend/services/postService';

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

  return <Page heading={`Posts tagged with '${slug}'`}>div</Page>;
};
export default TagPage;
