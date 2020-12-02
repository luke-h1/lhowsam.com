import React from 'react';
import {
  Title,
  BlogIntro,
  Intro,
  BlogSection,
  BlogPost,
  BlogWrapper,

} from './BlogElements';
import usePosts from '../../hooks/usePosts';

const Blog = () => {
  const posts = usePosts();
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
            <BlogPost key={post.slug} post={post} />
          ))}
        </BlogWrapper>
      </BlogSection>
    </>
  );
};
export default Blog;
