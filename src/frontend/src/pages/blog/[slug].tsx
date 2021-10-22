/* eslint-disable react/jsx-props-no-spreading */
import { Blog } from '@lhowsam/cms/types/schema';
import SEO from '@src/components/SEO';
import { ScrollToTop, ShareLinks } from '@src/components/blog';
import MDXComponents, { ImageWrapper } from '@src/components/mdx';
import blogService from '@src/services/blogService';
import imageService from '@src/services/imageService';
import { MDXContent, PostMetaDataGrid, EndLinks } from '@src/styles/blog';
import { PostTitle, Datestamp, TextGradient } from '@src/styles/typography';
import mdxPrism from 'mdx-prism';
import { GetStaticProps } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { NextSeo } from 'next-seo';
import React, { useRef } from 'react';
import Headings from 'remark-autolink-headings';
import CodeTitle from 'remark-code-titles';

interface Props {
  post: Blog;
}

const PostPage = ({ post }: Props) => {
  const topRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <NextSeo
        title={`${post.title} | lhowsam.com`}
        canonical={`https://lhowsam.com/posts/${post.slug}`}
        openGraph={{
          url: `https://lhowsam.com/posts/${post.slug}`,
          title: `${post.title} | lhowsam.com`,
        }}
      />
      <SEO
        description={post.intro}
        title={`${post.title} | lhowsam.com`}
        keywords={['posts, Blog posts, About']}
        url={`https://lhowsam.com/posts/${post.slug}`}
      />
      <div ref={topRef} />
      <PostTitle>
        <TextGradient>{post.title}</TextGradient>
      </PostTitle>
      <ImageWrapper src={imageService.urlFor(post.image)} alt={post.title} />
      <PostMetaDataGrid>
        <Datestamp>
          Published:{' '}
          {new Date(post.publishedAt).toLocaleDateString('en-US', {
            month: 'long',
            year: 'numeric',
            day: 'numeric',
          })}
        </Datestamp>
      </PostMetaDataGrid>
      <MDXContent>
        <MDXRemote {...post.source} components={MDXComponents} />
      </MDXContent>
      <EndLinks>
        <ShareLinks title={post.title} slug={post.slug.current} />
        <ScrollToTop topRef={topRef} />
      </EndLinks>
    </>
  );
};

export const getStaticPaths = async () => {
  const posts = await blogService.getPostSlugs();
  const slugs = posts.map((post) => ({ params: { slug: post.slug.current } }));
  return {
    paths: slugs,
    fallback: false,
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
  const source = await serialize(post.description, {
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
