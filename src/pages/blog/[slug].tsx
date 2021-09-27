import React, { useMemo } from 'react';
import { Post } from '@src/types/post';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { getMDXComponent } from 'mdx-bundler/client';
import { format, parseISO } from 'date-fns';
import { components } from '@src/components/MDXComponents';
import Image from 'next/image';
import { CustomHead } from '@src/components/CustomHead';
import { NextSeo } from 'next-seo';
import { getFiles, getPostBySlug } from '@src/utils/mdx';

interface Props {
  post: Post;
}

const BlogPage = ({ post }: Props) => {
  const Component = useMemo(
    () => getMDXComponent(post.content),
    [post.content],
  );
  return (
    <>
      <CustomHead
        title={`Blog | ${post.title}`}
        description={`${post.intro}`}
        image={`${post.image && post.image}`}
      />
      <NextSeo
        title={`${post.title}`}
        canonical={`https://lhowsam.com/blog/${post.slug}`}
        openGraph={{
          url: `https://lhowsam.com/blog/${post.slug}`,
          title: `${post.title}`,
          type: 'article',
          article: {
            // publishedTime: new Date(post.createdAt).toISOString(),
          },
        }}
      />
      <div className="container max-w-3xl px-4 mx-auto mt-36">
        <h1 className="text-2xl font-bold md:text-4xl">{post.title}</h1>

        <div className="flex items-center mt-4 space-x-2 text-gray-500">
          <Image
            src="/avatar.jpg"
            height={24}
            width={24}
            className="rounded-full"
          />

          <div>Luke Howsam</div>

          <div className="text-gray-300">&middot;</div>

          {/* <div>{format(parseISO(post.createdAt), 'MMMM dd, yyyy')}</div> */}
        </div>

        {post.image ? (
          <div className="mt-10 overflow-hidden rounded-2xl text-[0px]">
            <Image
              src={`/blog-images/${post.image}`}
              width={1920}
              height={900}
              placeholder="blur"
              blurDataURL={`/blog-images/${post.image}`}
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

export const getStaticProps: GetStaticProps = async (
  ctx: GetStaticPropsContext,
) => {
  const slug = ctx?.params?.slug as string;

  const post = await getPostBySlug('posts', slug);
  return {
    props: {
      ...post,
    },
  };
};
export default BlogPage;
