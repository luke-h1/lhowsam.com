import { Post } from '@frontend/types/sanity';
import Box from '../Box/Box';
import Heading from '../Heading/Heading';
import Link from '../Link/Link';
import List from '../List/List';
import Spacer from '../Spacer/Spacer';
import Text from '../Text/Text';

interface Props {
  post: Post;
}

const PostCard = ({ post }: Props) => {
  return (
    <List.Item key={post._id}>
      <Box
        display="flex"
        flexDirection={{ xs: 'column', sm: 'row-reverse' }}
        alignItems={{ sm: 'center' }}
        justifyContent={{ sm: 'space-between' }}
        gap="sm"
        maxWidth="text"
      >
        <Text
          as="time"
          dateTime={post.publishedAt}
          color="foregroundNeutral"
          fontSize="sm"
        >
          {post.publishedAt}
        </Text>
        <Heading>
          <Link href={`/blog/${post.slug.current}`}>{post.title}</Link>
        </Heading>
      </Box>
      <Spacer height={{ xs: 'sm', sm: 'md' }} />
      <Text color="foregroundNeutral">{post.intro}</Text>
    </List.Item>
  );
};

export default PostCard;
