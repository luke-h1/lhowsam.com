/* eslint-disable react/jsx-props-no-spreading */
import { ScrollToTop, ShareLinks } from '@src/components/blog';
import MDXComponents, { ImageWrapper } from '@src/components/mdx';
import blogService, { PostSlug } from '@src/services/blogService';
import { MDXContent, PostMetaDataGrid, EndLinks } from '@src/styles/blog';
import { PostTitle, Datestamp, TextGradient } from '@src/styles/typography';
import mdxPrism from 'mdx-prism';
import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import React, { useRef } from 'react';
import Headings from 'remark-autolink-headings';
import CodeTitle from 'remark-code-titles';

interface Props {
  post: PostSlug;
};

const PostPage = ({ post }: Props) => {
  const topRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <div ref={topRef} />
      <PostTitle>
        <TextGradient>{post.blogPost.title}</TextGradient>
      </PostTitle>
      <ImageWrapper src={post.blogPost.image.url} alt={post.blogPost.title} />
      <PostMetaDataGrid>
        <Datestamp>
          Published:{' '}
          {post.blogPost.date}
        </Datestamp>
      </PostMetaDataGrid>
      <MDXContent>
        <MDXRemote {...post.source} components={MDXComponents} />
      </MDXContent>
      <EndLinks>
        <ShareLinks title={post.blogPost.title} slug={post.blogPost.slug} />
        <ScrollToTop topRef={topRef} />
      </EndLinks>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await blogService.getAllPosts();
  console.log(posts)
  // @ts-ignore
  const paths = posts.blogPosts.map(({ slug }) => ({ params: { slug } }))
  console.log(paths)
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
  if (!post.blogPost) {
    return {
      props: [],
      notFound: true,
    };
  }
  const source = await serialize(post.blogPost.content, {
    mdxOptions: {
      remarkPlugins: [CodeTitle, Headings],
      rehypePlugins: [mdxPrism],
    },
  });

  return {
    props: {
      post: { ...post, source },
    },
    revalidate: 60 * 30,
  };
};

export default PostPage;
