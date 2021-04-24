import React from 'react';
import { NextSeo } from 'next-seo';
import { getAllFilesFrontmatter } from '@src/utils/mdx';
import BlogCard from '@src/components/BlogCard';
import { BlogPost } from '@src/types';
import { CustomHead } from '@src/components/CustomHead';

const Index = ({ posts }: { posts: BlogPost[] }) => {
  const filterPosts = posts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date)),
  );
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
      <h1 className="text-4xl text-left md:leading-10 tracking-wide text-gray-700 mr-2 sm:text-md ml-4 leading-10 dark:text-gray-300 font-bold mb-5">
        Blog
      </h1>
      <div className="max-w-lg w-full align-left ">
        {!filterPosts.length && 'No blog posts found'}
        {filterPosts.map((frontMatter) => (
          <BlogCard key={frontMatter.title} {...frontMatter} />
        ))}
      </div>
    </>
  );
};

export async function getStaticProps() {
  const posts = await getAllFilesFrontmatter('blog');
  return { props: { posts } };
}
export default Index;
