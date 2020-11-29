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
} from './BlogItemElements';
// import { Button } from '../utils/Buttons/Button/Button';
import { BlogData } from '../../data/BlogPostItemData';

const BlogItem = () => (
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
        {BlogData.map((blog) => (
          <BlogPost key={blog.id} to={blog.slug}>
            <BlogTitle>{blog.title}</BlogTitle>
            <BlogDate>{blog.postedAt}</BlogDate>
            <BlogExcerpt>{blog.excerpt}</BlogExcerpt>
          </BlogPost>

        ))}
      </BlogWrapper>
    </BlogSection>
  </>
);
export default BlogItem;
