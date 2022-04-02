/* eslint-disable import/no-duplicates */
import Page from '@src/components/Page';
import { siteConfig } from '@src/config/site';
import blogService from '@src/services/blogService';
import imageService from '@src/services/imageService';
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';
import { Blog } from 'lhowsam-studio/types/schema';
import mdxPrism from 'mdx-prism';
import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import Headings from 'rehype-autolink-headings';
import CodeTitle from 'rehype-code-titles';

interface Props {
  post: Blog;
  source: { compiledSource: string };
}

const BlogSlugPage = ({ post, source }: Props) => {
  const router = useRouter();

  return (
    <Page ogImage={imageService.urlFor(post.image.asset)}>
      <NextSeo
        title={post.title}
        canonical={`https://lhowsam.com${router.asPath}`}
        description={post.intro}
        openGraph={{
          defaultImageWidth: 1200,
          defaultImageHeight: 630,
          images: [
            {
              url: imageService.urlFor(post.image.asset),
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
          <time dateTime={post.publishedAt}>
            <small>{format(parseISO(post.publishedAt), 'MMMM d, yyyy')}</small>
          </time>
        </p>

        <img
          alt={post.title}
          src={imageService.urlFor(post.image.asset)}
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
}
export default BlogSlugPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await blogService.getAllPosts();
  const paths = posts.map(post => ({ params: { slug: post.slug.current } }));

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

  const post = await blogService.getPost(params.slug as string);
  if (!post) {
    return {
      props: [],
      notFound: true,
    };
  }
  const source = await serialize(post.content, {
    mdxOptions: {
      remarkPlugins: [CodeTitle, Headings],
      rehypePlugins: [mdxPrism],
    },
  });

  return {
    props: {
      post,
      source,
    },
    revalidate: siteConfig.defaultRevalidate,
  };
};
