import * as React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import format from 'date-fns/format';
import { Post } from '@src/types/post';
import { BlogDate, BlogTitle, StyledBlogHeader } from '@src/styles/blogHeader';
import { LeftContainer } from '../styles/blogHeader';

interface Props {
  post: Post;
}

const BlogHeader = ({ post }: Props) => {
  const date = new Date(post.updatedAt ?? post.createdAt);
  const published = formatDistanceToNow(date);
  const publishDateFull = format(new Date(post.createdAt), 'yyyy-MM-dd');
  const publishedText = post.updatedAt ? 'Updated' : 'Published';

  return (
    <StyledBlogHeader>
      <LeftContainer>
        <div>
          <BlogTitle>{post.title}</BlogTitle>
          <BlogDate>
            <span title={publishDateFull}>
              {publishedText}
              {' '}
              {published}
              {' '}
              ago |
            </span>
            {post.readingTime && (
            <span>
              {' '}
              {post.readingTime}
            </span>
            )}
          </BlogDate>
        </div>
      </LeftContainer>
    </StyledBlogHeader>
  );
};
export default BlogHeader;
