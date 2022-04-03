/* eslint-disable import/no-duplicates */
import Page from '@src/components/Page';
import blogService from '@src/services/blogService';
import { Post } from '@src/types/post';
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';
import mdxPrism from 'mdx-prism';
import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import { useRouter } from 'next/router';
import CodeTitle from 'rehype-code-titles';

interface Props {
  post: Post;
  source: { compiledSource: string };
}

const BlogSlugPage = ({ post, source }: Props) => {
  const router = useRouter();

  return (
    <Page ogImage={post.image.url}>
      <NextSeo
        title={post.title}
        canonical={`https://lhowsam.com${router.asPath}`}
        description={post.intro}
        openGraph={{
          defaultImageWidth: 1200,
          defaultImageHeight: 630,
          images: [
            {
              url: post.image.url,
              alt: post.title,
              height: 1200,
              width: 630,
            },
          ],
          url: `https://lhowsam.com${router.asPath}`,
          title: `${post.title} | lhowsam.com`,
        }}
      />
      <div className="container">
        <header>
          <h1 data-testid="blog-title">{post.title}</h1>
        </header>
        <p className="blog-meta">
          <time dateTime={post.date}>
            <small>{format(parseISO(post.date), 'MMMM d, yyyy')}</small>
          </time>
        </p>

        <Image
          width={600}
          height={300}
          priority
          alt={post.title}
          blurDataURL={post.image.url}
          src={post.image.url}
          style={{
            maxWidth: '100%',
          }}
        />
        <article>
          <MDXRemote {...source} />
        </article>
      </div>
    </Page>
  );
};
export default BlogSlugPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const { posts } = await blogService.getPostsBySlug();
  const paths = posts.map(({ slug }) => ({ params: { slug } }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.slug) {
    return {
      props: [],
      notFound: true,
    };
  }

  const { post } = await blogService.getPost(params.slug as string);
  if (!post) {
    return {
      props: [],
      notFound: true,
    };
  }

  const source = await serialize(post.content, {
    mdxOptions: {
      rehypePlugins: [mdxPrism, CodeTitle],
    },
  });

  return {
    props: {
      post,
      source,
    },
    revalidate: 30 * 60,
  };
};
