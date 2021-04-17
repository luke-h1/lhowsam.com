import React from 'react';
import { NextSeo } from 'next-seo';
import BlogCard from '../../modules/Blog/components/BlogCard';
import { BlogPost } from '../../types';
import { Title } from '../../components/Title';
import { CustomHead } from '../../components/CustomHead';
import { getAllFilesFrontmatter } from '../../utils/mdx';

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
      <div className="flex flex-col align-center mb-4 max-w-lg w-full">
        <Title>Blog</Title>
        <hr className="border border-solid" />
        <div className="flex flex-col align-center mb-8 max-w-lg w-full">
          {!filterPosts.length && 'No blog posts found'}
          {filterPosts.map((frontMatter) => (
            <BlogCard key={frontMatter.title} {...frontMatter} />
          ))}
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const posts = await getAllFilesFrontmatter('blog');
  return { props: { posts } };
}
export default Index;
