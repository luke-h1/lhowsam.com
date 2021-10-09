import React from 'react';
import { Post } from '@src/types/post';
import { BlogDate, BlogTitle, StyledBlogHeader } from '@src/styles/blogHeader';
import { LeftContainer } from '../styles/blogHeader';

interface Props {
  post: Post;
}

const BlogHeader = ({ post }: Props) => {
  return (
    <StyledBlogHeader>
      <LeftContainer>
        <div>
          <BlogTitle>{post.title}</BlogTitle>
          <BlogDate>
            <span>{post.createdAt}</span>
            {post.readingTime && (
            <div>
              {' '}
              {post.readingTime}
            </div>
            )}
          </BlogDate>
        </div>
      </LeftContainer>
    </StyledBlogHeader>
  );
};
export default BlogHeader;
