import { Snippet } from '@lhowsam/cms/types/schema';
import { ScrollToTop } from '@src/components/blog';
import MDXComponents from '@src/components/mdx';
import config from '@src/config/config';
import imageService from '@src/services/imageService';
import snippetService from '@src/services/snippetService';
import { EndLinks, MDXContent } from '@src/styles/blog';
import { PostTitle, TextGradient } from '@src/styles/typography';
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
  snippet: Snippet;
}

const SnippetPage = ({ snippet }: Props) => {
  const router = useRouter();
  const topRef = useRef<HTMLDivElement>(null);

  const ogImageUrl = imageService.buildURL(
    process.env.NEXT_PUBLIC_OG_FUNCTION_URL,
    {
      author: "Luke Howsam",
      website: "lhowsam.com",
      title: snippet.title,
      image: `${process.env.NEXT_PUBLIC_SITE_URL}/${config.profilePicture}`,
    }
  )
  
  return (
    <>
      <NextSeo
        title={snippet.title}
        canonical={`https://lhowsam.com${router.asPath}`}
        description={snippet.intro}
        openGraph={{
          url: `https://lhowsam.com${router.asPath}`,
          title: `${snippet.title} | lhowsam.com`,
          images: [
            {
              url: ogImageUrl,
              alt: snippet.title,
            }
          ],
        }}
      />
      <div ref={topRef} />
      <PostTitle>
        <TextGradient>{snippet.title}</TextGradient>
      </PostTitle>
      <MDXContent>
        <MDXRemote {...snippet.source} components={MDXComponents} />
      </MDXContent>
      <EndLinks>
        <ScrollToTop topRef={topRef} />
      </EndLinks>
    </>
  );
};
export const getStaticPaths = async () => {
  const snippets = await snippetService.getSnippetSlugs();
  const slugs = snippets.map((snippet) => ({
    params: { slug: snippet.slug.current },
  }));
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
  const snippet = await snippetService.getSnippet(params.slug as string);
  
  if(!snippet) {
    return {
      props: [],
      notFound: true,
    }
  }
  const source = await serialize(snippet.description, {
    mdxOptions: {
      remarkPlugins: [CodeTitle, Headings],
      rehypePlugins: [mdxPrism],
    },
  });
  return {
    props: {
      snippet: { ...snippet, source },
    },
    revalidate: 60 * 30,
  };
};

export default SnippetPage;
