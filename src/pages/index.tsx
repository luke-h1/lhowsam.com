import Hero from '@src/components/Hero';
import SkillsCard from '@src/components/SkillsCard';
import { getAllPostsMeta } from '@src/lib/mdx';
import { PostMeta } from '@src/types/post';
import React from 'react';
import BlogPreview from '@src/components/BlogPreview';

interface IndexProps {
  posts: PostMeta[];
}

const Index: React.FC<IndexProps> = ({ posts }) => {
  return (
    <>
      <Hero />
      <SkillsCard />
      <h1 className="text-4xl text-center">Recent Posts</h1>
      {posts
        && posts.map((post) => (post.isOnIndex ? <BlogPreview key={post.slug} post={post} /> : null))}
    </>
  );
};

export const getStaticProps = async () => {
  const posts = getAllPostsMeta('post');
  return { props: { posts } };
};
export default Index;
