import React from 'react';
import {
  Title,
  BlogIntro,
  Intro,
  BlogSection,
  BlogPost,
  BlogTitle,
  BlogDate,
} from './BlogItemElements';
import { BlogData } from '../../data/BlogPostItemData';
const BlogItem = () => {
  return (
    <>
      <BlogSection>
        <BlogIntro>
          <Title>Blog</Title>
          <Intro>
            Candid thoughts about Javascript, React, Automation & other
            interesting things :)
          </Intro>
        </BlogIntro>
        {BlogData.map((blog, i) => {
          return (
            <>
              <BlogPost key={i} to={blog.link}>
                <BlogTitle>{blog.title}</BlogTitle>
                <BlogDate>{blog.date}</BlogDate>
              </BlogPost>
            </>
          );
        })}
      </BlogSection>
    </>
  );
};
export default BlogItem;