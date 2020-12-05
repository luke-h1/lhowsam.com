import React from 'react';
import {
  Title,
  BlogIntro,
  Intro,
  BlogSection,
  BlogPost,
  BlogTitle,
  BlogDate,
  BlogWrapper,
  BlogExcerpt,
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
          {posts.map((post) => (
            <BlogPost key={post.id} to={post.slug}>
              <BlogTitle>{post.title}</BlogTitle>
              <BlogDate>{post.postedAt}</BlogDate>
              <BlogExcerpt>{post.excerpt}</BlogExcerpt>
            </BlogPost>
          ))}

        </BlogWrapper>
      </BlogSection>
    </>
  );
};
export default Blog;
