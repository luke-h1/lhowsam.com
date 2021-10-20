/* eslint-disable react/jsx-props-no-spreading */
import { ScrollToTop, ShareLinks } from '@src/components/blog';
import MDXComponents, { ImageWrapper } from '@src/components/mdx';
import blogService from '@src/services/blogService';
import { MDXContent, PostMetaDataGrid, EndLinks } from '@src/styles/blog';
import { PostTitle, Datestamp, TextGradient } from '@src/styles/typography';
import { Post } from '@src/types/post';
import mdxPrism from 'mdx-prism';
import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import React, { useRef } from 'react';
import Headings from 'remark-autolink-headings';
import CodeTitle from 'remark-code-titles';

interface Props {
  post: Post;
  source: { compiledSource: string };

};

const PostPage = ({ post, source }: Props) => {
  const topRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <div ref={topRef} />
      <PostTitle>
        <TextGradient>{post.title}</TextGradient>
      </PostTitle>
      <ImageWrapper src={post.image.url} alt={post.title} />
      <PostMetaDataGrid>
        <Datestamp>
          Published:{' '}
          {post.date}
        </Datestamp>
      </PostMetaDataGrid>
      <MDXContent>
        <MDXRemote {...source} components={MDXComponents} />
      </MDXContent>
      <EndLinks>
        <ShareLinks title={post.title} slug={post.slug} />
        <ScrollToTop topRef={topRef} />
      </EndLinks>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { posts } = await blogService.getAllPosts();
  const paths = posts.map(({ slug }) => ({ params: { slug } }))

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
      remarkPlugins: [CodeTitle, Headings],
      rehypePlugins: [mdxPrism],
    },
  });

  return {
    props: {
      post,
      source,
    },
    revalidate: 30 * 40,
  };
};

export default PostPage;
