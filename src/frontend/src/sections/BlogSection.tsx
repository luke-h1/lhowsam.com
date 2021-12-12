import { Blog } from '@lhowsam/cms/types/schema';
import { BlogPostPreview } from '@src/components/blog';
import { PreviewLayout } from '@src/styles/layouts';
import { Title } from '@src/styles/typography';
import React from 'react';

interface Props {
  posts: Blog[];
}

const BlogSection = ({ posts }: Props) => {
  return (
    <>
      <PreviewLayout data-testid="recent-blogs">
        <Title size={2.3}>Recent blog posts</Title>
        {posts &&
          posts.map((post) => <BlogPostPreview post={post} key={post._id} />)}
      </PreviewLayout>
    </>
  );
};
export default BlogSection;
