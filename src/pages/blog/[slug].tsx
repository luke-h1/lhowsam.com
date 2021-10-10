import MDXComponents from '@src/components/MDXComponents';
import BlogLayout from '@src/layouts/blog';
import { motion } from 'framer-motion';
import { MDXRemote } from 'next-mdx-remote';
import { GetStaticProps, GetStaticPaths } from 'next';
import { gql } from 'graphql-request';
import { Client } from '@src/utils/Client';
import { serialize } from 'next-mdx-remote/serialize';
import mdxPrism from 'mdx-prism';
import CodeTitle from 'remark-code-titles';
import Headings from 'remark-autolink-headings';
import { Post } from '../../types/post';

export interface IPost {
  id: string;
  slug: string;
  title: string;
  date: string;
  image: {
    url: string;
  };
  intro: string;
  content: string;
  source: { compiledSource: string };
}

const BlogPost = ({ post }: { post: IPost }) => {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.4 }}
    >
      <BlogLayout post={post}>
        <MDXRemote {...post.source} components={MDXComponents} />
      </BlogLayout>
    </motion.div>
  );
};
export default BlogPost;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const query = gql`
    query Blog($slug: String!) {
      blog(where: { slug: $slug }) {
        id
        slug
        title
        date
        intro
        content
        image {
          url
        }
      }
    }
  `;
  const data: { blog: IPost | null } = await Client.request(query, { slug });
  if (!data.blog) {
    return {
      notFound: true,
    };
  }
  const source = await serialize(data.blog.content, {
    mdxOptions: {
      remarkPlugins: [CodeTitle, Headings],
      rehypePlugins: [mdxPrism],
    },
  });
  return {
    props: { post: { ...data.blog, source } },
    revalidate: 60 * 60, // 1 hour cache
  };
};
export const getStaticPaths: GetStaticPaths = async () => {
  const query = gql`
   query Blogs() {
      blogs() {
        slug
      }
    }
  `;
  const data = await Client.request(query);
  return {
    paths: data.blogs.map((blog: Post) => ({ params: { slug: blog.slug } })),
    fallback: 'blocking', // dynamically create the page
  };
};
