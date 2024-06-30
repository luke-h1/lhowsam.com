import Page from '@frontend/components/Page';
import siteConfig from '@frontend/config/site';
import postService from '@frontend/services/postService';
import { Metadata } from 'next';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';

export const revalidate = siteConfig.defaultRevalidate;

interface Props {
  params: {
    slug: string;
  };
}

const PostPage = async ({ params }: Props) => {
  const { slug } = params;

  const { isEnabled } = draftMode();

  const post = await postService.getPost(slug, isEnabled);

  if (!post) {
    notFound();
  }

  return (
    <Page heading={post.title}>
      <div>slug page</div>
    </Page>
  );
};
export default PostPage;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;

  const post = await postService.getPost(slug, false);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.intro,
  };
}
