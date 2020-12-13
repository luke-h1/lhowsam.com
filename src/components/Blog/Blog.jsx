import React from 'react';
import BlogPostPreview from '../BlogPostPreview/BlogPostPreview';
import {
  Title,
  BlogIntro,
  Intro,
  BlogSection,
  BlogWrapper,
} from './BlogElements';
import useBlogPosts from '../../hooks/useBlogPosts';

const Blog = () => {
  const posts = useBlogPosts();
  return (
    <>
      <BlogSection>
        <BlogIntro>
          <Title>Blog</Title>
          <Intro>
            Candid thoughts about Javascript, React, Automation & other
            interesting things
          </Intro>
        </BlogIntro>
        <BlogWrapper>
          {posts && posts.map((post) => (
            <BlogPostPreview key={post.id} post={post} />
          ))}

        </BlogWrapper>
      </BlogSection>
    </>
  );
};
export default Blog;
