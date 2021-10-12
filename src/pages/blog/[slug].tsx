import MDXComponents from '@src/components/MDXComponents';
import BlogLayout from '@src/layouts/blog';
import { motion } from 'framer-motion';
import { MDXRemote } from 'next-mdx-remote';
import { GetStaticProps } from 'next';
import { gql } from 'graphql-request';
import { Client } from '@src/utils/Client';
import { serialize } from 'next-mdx-remote/serialize';
import mdxPrism from 'mdx-prism';
import CodeTitle from 'remark-code-titles';
import Headings from 'remark-autolink-headings';
import React from 'react';
import SEO from '@src/components/SEO';
import { NextSeo } from 'next-seo';
import { Post } from '../../types/post';

const BlogPost = ({ post }: { post: Post }) => {
  return (
    <>
      <NextSeo
        title={`Blog | ${post.title}`}
        canonical={`https://lhowsam.com/blog/${post.slug}`}
        openGraph={{
          url: `https://lhowsam.com/blog/${post.slug}`,
          title: `Blog ${post.title}`,
        }}
      />
      <SEO
        description={`Blog | ${post.intro}`}
        title={`Blog | ${post.title}`}
        keywords={['Blog posts, Typescript, Node.js']}
        url={`https://lhowsam.com/blog/${post.slug}`}
      />
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <BlogLayout post={post}>
          <MDXRemote {...post.source} components={MDXComponents} />
        </BlogLayout>
      </motion.div>
    </>
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
  const data: { blog: Post | null } = await Client.request(query, { slug });
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
export const getStaticPaths = async () => {
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
  };
};
