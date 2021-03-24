import React from 'react';
import { NextSeo } from 'next-seo';
import { getAllFilesFrontmatter } from '@utils/mdx';
import BlogCard from '@components/BlogCard';
import { BlogPost } from '@src/types';

const Index = ({ posts }: { posts: BlogPost[] }) => {
  const filterPosts = posts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date)),
  );

  return (
    <>
      <>
        <NextSeo
          title="Blog | lhowsam.com"
          canonical="https://lhowsam.com/blog"
          openGraph={{
            url: 'https://lhowsam.com/blog',
            title: 'Blog | lhowsam.com',
          }}
        />
        <div className="flex flex-col align-center mb-8 max-w-lg w-full">
          <h1 className="text-4xl text-center mb-6">Blog</h1>
          <h2 className="text-left text-2xl mb-6 text-gray-400">
            Thoughts on React, Node, testing & tech in general
          </h2>
          <div className="flex flex-col align-center mb-8 max-w-lg w-full">
            {!filterPosts.length && 'No blog posts found'}
            {filterPosts.map((frontMatter) => (
              <BlogCard key={frontMatter.title} {...frontMatter} />
            ))}
          </div>
        </div>
      </>
    </>
  );
};

export async function getStaticProps() {
  const posts = await getAllFilesFrontmatter('blog');
  return { props: { posts } };
}
export default Index;
