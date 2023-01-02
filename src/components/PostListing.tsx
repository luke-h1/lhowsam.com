import { Heading } from '@frontend/types/mdx';
import { Post } from '@frontend/types/sanity';
import PostThumbnail from './PostThumbnail';

interface Props {
  posts?: Post[];
  headingTag?: Heading;
  variant?: 'listing' | 'recommended';
}

const PostListing = ({ posts, headingTag, variant }: Props) => {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {posts &&
        posts.map(post => (
          <PostThumbnail
            post={post}
            key={post._id}
            as={headingTag}
            variant={variant}
          />
        ))}
    </>
  );
};
export default PostListing;
