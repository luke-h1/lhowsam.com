/* eslint-disable import/no-duplicates */
import Page from '@src/components/Page';
import blogService from '@src/services/blogService';
import { Post } from '@src/types/post';
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';
import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './blog-index.module.css';

interface Props {
  posts: Post[];
}

const BlogIndexPage = ({ posts }: Props) => {
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
      <header>
        <h1>Blog</h1>
      </header>
      <main>
        {posts &&
          posts.map(post => (
            <article key={post.id}>
              <header>
                <Link href={`/blog/${post.slug}`}>
                  <a>
                    <h2 className={styles.title}>{post.title}</h2>
                  </a>
                </Link>
                <small>{format(parseISO(post.date), 'MMMM d, yyyy')}</small>
              </header>
            </article>
          ))}
      </main>
    </Page>
  );
};
export default BlogIndexPage;

export const getStaticProps: GetStaticProps = async () => {
  const posts = await blogService.getAllPosts();

  return {
    props: {
      posts: posts.posts,
    },
    revalidate: 30 * 60,
  };
};
