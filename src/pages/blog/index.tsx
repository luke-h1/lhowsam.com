import { CustomHead } from '@src/components/CustomHead';
import { getAllPostsMeta } from '@src/utils/mdx';
import { PostMeta } from '@src/types/post';
import { NextSeo } from 'next-seo';
import React from 'react';
import { BlogPostsPreviewLayout, Center } from '@src/styles/layouts';
import { Title } from '@src/styles/typography';
import BlogPostPreview from '@src/components/blog/BlogPostPreview';

interface indexProps {
  posts: PostMeta[];
}

const index: React.FC<indexProps> = ({ posts }) => {
  return (
    <>
      <CustomHead title="Blog | lhowsam.com" description="Blog" />
      <NextSeo
        title="Blog"
        canonical="https://lhowsam.com/blog"
        openGraph={{
          url: 'https://lhowsam.com/blog',
          title: 'Blog',
        }}
      />
      <Center>
        <Title size={5}>Blog</Title>
      </Center>
      <BlogPostsPreviewLayout>
        {posts.map((post) => (
          <BlogPostPreview key={post.slug} post={post} />
        ))}
      </BlogPostsPreviewLayout>
    </>
  );
};
export default index;

export async function getStaticProps() {
  const posts = getAllPostsMeta('posts', 'post');
  return { props: { posts } };
}
/*
  <CustomHead title="Blog | lhowsam.com" description="Blog" />
      <NextSeo
        title="Blog"
        canonical="https://lhowsam.com/blog"
        openGraph={{
          url: 'https://lhowsam.com/blog',
          title: 'Blog',
        }}
      />
      <div className="container px-4 mx-auto mt-24">
        <h1 className="text-4xl font-extrabold text-gray-800">Blog</h1>
        <h4 className="mt-2 text-gray-500">
          Lessons learned, thoughts on various tech & articles on what I'm
          building
        </h4>
        <div className="mt-8 space-y-8">
          {posts.map((post) => (
            <BlogPreview key={post.slug} post={post} />
          ))}
        </div>
      </div>
*/
