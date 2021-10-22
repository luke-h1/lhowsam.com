/* eslint-disable react/jsx-props-no-spreading */
import { Blog } from '@lhowsam/cms/types/schema';
import { ScrollToTop, ShareLinks } from '@src/components/blog';
import MDXComponents, { ImageWrapper } from '@src/components/mdx';
import { constants } from '@src/data/constants';
import blogService from '@src/services/blogService';
import imageService from '@src/services/imageService';
import { MDXContent, PostMetaDataGrid, EndLinks } from '@src/styles/blog';
import { PostTitle, Datestamp, TextGradient } from '@src/styles/typography';
import mdxPrism from 'mdx-prism';
import { GetStaticProps } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { NextSeo, ArticleJsonLd } from 'next-seo';
import { useRouter } from 'next/router';
import React, { useRef } from 'react';
import Headings from 'remark-autolink-headings';
import CodeTitle from 'remark-code-titles';

interface Props {
  post: Blog;
}

const PostPage = ({ post }: Props) => {
  const topRef = useRef<HTMLDivElement>(null);

  const SEOImage = imageService.getSEOImage(post.image.asset);

  const router = useRouter()
  return (
    <>
      <NextSeo
        title={`${post.title}`}
        canonical={`${constants.siteUrl}${router.asPath}`}
        openGraph={{
          url: `${constants.siteUrl}${router.asPath}`,
          title: `${post.title} | lhowsam.com`,
        }}
      />
      <ArticleJsonLd
        url={`${constants.siteUrl}${router.asPath}`}
        title={post.title}
        images={[SEOImage]}
        datePublished={post.publishedAt}
        authorName={constants.fullName}
        description={post.intro}
        publisherName={constants.site}
        publisherLogo={`${constants.siteUrl}/icons/logo.png`}
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
