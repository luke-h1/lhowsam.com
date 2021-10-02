import Link from 'next/link';
import { AnchorUnstyled, Card, ReadMorePrompt } from '@src/styles/blog';
import { FaArrowRight } from 'react-icons/fa';
import React from 'react';
import useHover from '@src/hooks/useHover';
import { PostMeta } from '../../types/post';
import {
  BlogPostReviewTitle,
  Datestamp,
  SmallText,
} from '../../styles/typography';

interface BlogPostPreviewProps {
  post: PostMeta;
  key: string;
}

const BlogPostPreview: React.FC<BlogPostPreviewProps> = ({ post, key }) => {
  const [hoverRef, isHovered] = useHover();
  return (
    <>
      {!post.draft && (
        <article key={key}>
          <Link href={`/blog/${post.slug}`} scroll={false} passHref>
            <AnchorUnstyled href={`/blog/${post.slug}`}>
              <Card ref={hoverRef}>
                <BlogPostReviewTitle {...{ isHovered }}>
                  {post.title}
                </BlogPostReviewTitle>
                <Datestamp>{post.createdAt}</Datestamp>
                <SmallText>{post.intro}</SmallText>
                <ReadMorePrompt {...{ isHovered }}>
                  Read more
                  {' '}
                  {isHovered && <FaArrowRight style={{ fontSize: '12px' }} />}
                </ReadMorePrompt>
              </Card>
            </AnchorUnstyled>
          </Link>
        </article>
      )}
    </>
  );
};
export default BlogPostPreview;
