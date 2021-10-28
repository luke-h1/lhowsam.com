/* eslint-disable react/jsx-props-no-spreading */
import { Blog } from '@lhowsam/cms/types/schema';
import { ScrollToTop } from '@src/components/blog';
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
import { useRouter } from 'next/router';
import React, { useRef } from 'react';
import Headings from 'remark-autolink-headings';
import CodeTitle from 'remark-code-titles';

interface Props {
  post: Blog;
}


const PostPage = ({ post }: Props) => {
  const router = useRouter();
  const topRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <NextSeo
        title={post.title}
        canonical={`https://lhowsam.com${router.asPath}`}
        description={post.intro}
        openGraph={{
          images: [imageService.getOpenGraphImage(post.title)],
          url: `https://lhowsam.com${router.asPath}`,
          title: `${post.title} | lhowsam.com`,
        }}
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
    revalidate: 60 * 60,
  };
};

export default PostPage;
