import React from 'react';
import {
  BlogCardItem,
  CardLink,
  PostTitle,
  PostImage,
  BlogDetails,
  PostCat,
  Author,
  BlogWrapper,
} from './BlogItemElements';
import { BlogData } from '../../data/BlogPostItemData';
const BlogItem = () => {
  return (
    <>
      <BlogWrapper>
        {BlogData.map((blog, i) => {
          return (
            <CardLink to={blog.link}>
              <BlogCardItem>
                <PostImage src={blog.img} />
                <BlogDetails>
                  <PostCat>{blog.category}</PostCat>
                  <PostTitle>{blog.title}</PostTitle>
                  <h3>{blog.topic}</h3>
                  <Author>{blog.Author}</Author>
                  <h3>{blog.postedAt}</h3>
                </BlogDetails>
              </BlogCardItem>
            </CardLink>
          );
        })}
      </BlogWrapper>
    </>
  );
};
export default BlogItem;
