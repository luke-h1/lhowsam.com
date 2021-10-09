import Link from 'next/link';
import { Post } from '@src/types/post';
import { StyledBlogItem } from '@src/styles/blog';

interface Props<T extends Post> {
  post: T;
  type: 'blog';
}

const BlogItem = ({ type, post }: Props<Post>) => {
  return (
    <Link href={`${type}/${post.slug}`} key={post.slug}>
      <StyledBlogItem>
        <h2>{post.title}</h2>
        <p>{post.intro}</p>
      </StyledBlogItem>
    </Link>
  );
};
export default BlogItem;
