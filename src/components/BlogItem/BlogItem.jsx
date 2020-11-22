import React from 'react';
import {
  BlogContainer,
  BlogCard,
  BlogH1,
  ShortDesc,
  BlogP,
} from './BlogItemElements';
import Button from '../utils/Buttons/ButtonElements';
import Img from '../../images/Projects/Coffee-jon-tyson.jpeg';
import { BlogData } from '../../data/BlogData';
import { Link } from 'react-router-dom';
const BlogItem = () => {
  return (
    <>
      {BlogData.map((blog, i) => {
        return (
          <BlogContainer>
            <BlogCard>
              <BlogH1>{blog.name}</BlogH1>
              <ShortDesc>
                <BlogP>{blog.desc}</BlogP>
                <Link to={blog.link}>Link</Link>
              </ShortDesc>
            </BlogCard>
          </BlogContainer>
        );
      })}
    </>
  );
};
export default BlogItem;
