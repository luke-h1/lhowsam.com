import BlogImage from '@frontend/components/BlogImage/BlogImage';
import ContentRenderer from '@frontend/components/ContentRenderer';
import FormattedDate from '@frontend/components/FormattedDate';
import Page from '@frontend/components/Page/Page';
import PageHeader from '@frontend/components/PageHeader/PageHeader';
import Tags from '@frontend/components/Tags/Tags';
import Button from '@frontend/components/form/Button/Button';
import siteConfig from '@frontend/config/site';
import imageService from '@frontend/services/imageService';
import postService from '@frontend/services/postService';
import mdxToHtml from '@frontend/utils/mdxToHtml';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import s from './post.module.scss';

export const revalidate = siteConfig.defaultRevalidate;

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await postService.getPost(params.slug);

  if (!post) {
    notFound();
  }

  return {
    title: post.title,
    description: post.intro,
  };
}

const BlogSlugPage = async ({ params }: Props) => {
  const post = await postService.getPost(params.slug);

  if (!post) {
    notFound();
  }

  const { compiledSource } = await mdxToHtml(post.content);

  return (
    <Page>
      {post.image && (
        <BlogImage
          src={imageService.urlFor(post.image.asset)}
          alt={post.title}
          className={s.image}
        />
      )}
      <PageHeader title={post.title} compact>
        <p className={s.meta}>
          Published on{' '}
          <FormattedDate testId="time">{post.publishedAt}</FormattedDate>
        </p>
      </PageHeader>
      <article className={s.article} data-testid="content">
        <ContentRenderer compiledSource={compiledSource.compiledSource} />
      </article>
      <Tags tags={post.tags} />
      <div className={s.buttons}>
        <Button type="button" href="/blog">
          Back to blog
        </Button>
      </div>
    </Page>
  );
};
export default BlogSlugPage;
