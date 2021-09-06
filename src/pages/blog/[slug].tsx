import React, { useMemo } from 'react';
import { getAllPostsMeta, getPostBySlug } from '@src/lib/mdx';
import { Post } from '@src/types/post';
import { GetStaticProps } from 'next';
import { getMDXComponent } from 'mdx-bundler/client';
import { format, parseISO } from 'date-fns';
import { components } from '@src/components/MDXComponents';
import Image from 'next/image';
import Button from '@src/components/Button';
import { CustomHead } from '@src/components/CustomHead';
import { NextSeo } from 'next-seo';

export const getStaticPaths = () => {
  const posts = getAllPostsMeta();
  const paths = posts.map(({ slug }) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Post> = async (ctx) => {
  const slug = ctx.params?.slug as string;
  const post = await getPostBySlug(slug);
  return {
    props: post,
  };
};
const BlogPage = ({ meta, code }: Post) => {
  const Component = useMemo(() => getMDXComponent(code), [code]);
  return (
    <>
      <CustomHead
        title={`Blog | ${meta.title}`}
        description={`${meta.description}`}
        image={`${meta.image && meta.image}`}
      />
      <NextSeo
        title={`${meta.title}`}
        canonical={`https://lhowsam.com/blog/${meta.slug}`}
        openGraph={{
          url: `https://lhowsam.com/blog/${meta.slug}`,
          title: `${meta.title}`,
          type: 'article',
          article: {
            publishedTime: new Date(meta.createdAt).toISOString(),
          },
        }}
      />
      <div className="container max-w-3xl px-4 mx-auto mt-36">
        <h1 className="text-2xl font-bold md:text-4xl">{meta.title}</h1>

        <div className="flex items-center mt-4 space-x-2 text-gray-500">
          <Image
            src="/avatar.jpg"
            height={24}
            width={24}
            className="rounded-full"
          />

          <div>Luke Howsam</div>

          <div className="text-gray-300">&middot;</div>

          <div>{format(parseISO(meta.createdAt), 'MMMM dd, yyyy')}</div>
        </div>

        {meta.image ? (
          <div className="mt-10 overflow-hidden rounded-2xl text-[0px]">
            <Image
              src={`/blog-images/${meta.image}`}
              width={1920}
              height={900}
              placeholder="blur"
              blurDataURL={`/blog-images/${meta.image}`}
            />
          </div>
        ) : null}

        <div className="mt-10 text-gray-900">
          <Component components={components as any} />
        </div>
        <div className="flex justify-center mt-16 space-x-8">
          {meta.source ? (
            <Button href={meta.source}>View Source Code</Button>
          ) : null}
        </div>
      </div>
    </>
  );
};
export default BlogPage;
