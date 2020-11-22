import React from 'react';
import {
  BlogContainer,
  BlogCard,
  BlogH1,
  ShortDesc,
  BlogP
} from './BlogItemElements';
import Button from '../utils/Buttons/ButtonElements';
import Img from '../../images/Projects/Coffee-jon-tyson.jpeg';

const BlogItem = () => {
  return (
    <>
      <BlogContainer>
        <BlogCard>
          <BlogH1>Title</BlogH1>
          <ShortDesc>
            <BlogP>Lorem ipsum dolor sit amet consectetur adipisicing elit. In sunt, delectus ipsum quidem soluta laboriosam veniam recusandae asperiores deserunt totam accusantium eos saepe optio vitae perferendis at eligendi repellendus mollitia.</BlogP>

          </ShortDesc>
        </BlogCard>
      </BlogContainer>

    </>
  );
};
export default BlogItem;
