import React, { useMemo } from 'react';
import { Post } from '@src/types/post';
import { GetStaticPaths, GetStaticProps } from 'next';
import { getMDXComponent } from 'mdx-bundler/client';
import { format, parseISO } from 'date-fns';
import { components } from '@src/components/MDXComponents';
import Image from 'next/image';
import { CustomHead } from '@src/components/CustomHead';
import { NextSeo } from 'next-seo';
import { getFiles, getFileBySlug } from '@src/utils/mdx';

interface Props {
  frontMatter: Post;
  code: string;
}

const BlogPage = ({ code, frontMatter }: Props) => {
  const Component = useMemo(() => getMDXComponent(code), [code]);
  return (
    <>
      <CustomHead
        title={`Blog | ${frontMatter.title}`}
        description={`${frontMatter.intro}`}
        image={`${frontMatter.image && frontMatter.image}`}
      />
      <NextSeo
        title={`${frontMatter.title}`}
        canonical={`https://lhowsam.com/blog/${frontMatter.slug}`}
        openGraph={{
          url: `https://lhowsam.com/blog/${frontMatter.slug}`,
          title: `${frontMatter.title}`,
          type: 'article',
          article: {
            publishedTime: new Date(frontMatter.createdAt).toISOString(),
          },
        }}
      />
      <div className="container max-w-3xl px-4 mx-auto mt-36">
        <h1 className="text-2xl font-bold md:text-4xl">{frontMatter.title}</h1>

        <div className="flex items-center mt-4 space-x-2 text-gray-500">
          <Image
            src="/avatar.jpg"
            height={24}
            width={24}
            className="rounded-full"
          />

          <div>Luke Howsam</div>

          <div className="text-gray-300">&middot;</div>

          <div>{format(parseISO(frontMatter.createdAt), 'MMMM dd, yyyy')}</div>
        </div>

        {frontMatter.image ? (
          <div className="mt-10 overflow-hidden rounded-2xl text-[0px]">
            <Image
              src={`/blog-images/${frontMatter.image}`}
              width={1920}
              height={900}
              placeholder="blur"
              blurDataURL={`/blog-images/${frontMatter.image}`}
            />
          </div>
        ) : null}

        <div className="mt-10 text-gray-900">
          <Component components={components as any} />
        </div>
        <div className="flex justify-center mt-16 space-x-8" />
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getFiles('posts');

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const post = await getFileBySlug('posts', ctx?.params?.slug as string);

  return { props: { ...post } };
};

export default BlogPage;
