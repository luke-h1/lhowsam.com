import { Post } from '@frontend/graphql/generated/generated';
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
    <List.Item>
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
          dateTime={post.date}
          color="foregroundNeutral"
          fontSize="sm"
          data-testid="post-date"
        >
          {post.date}
        </Text>
        <Heading>
          <Link href={`/blog/${post.slug}`} data-testid="post-title">
            {post.title}
          </Link>
        </Heading>
      </Box>
      <Spacer height={{ xs: 'sm', sm: 'md' }} />
      <Text color="foregroundNeutral" data-testid="post-intro">
        {post.intro}
      </Text>
      <Spacer height={{ xs: 'sm', sm: 'md' }} />
      <Box flexGrow={1}>
        <Box
          flexShrink={0}
          display="flex"
          flexDirection={{
            sm: 'row-reverse',
          }}
          alignItems={{ sm: 'flex-end' }}
          justifyContent={{ sm: 'flex-end' }}
          gap="sm"
          maxWidth="text"
        >
          {post.tags.length > 0 &&
            post.tags.slice(0, 3).map(tag => (
              <Text
                fontSize="sm"
                color="foregroundNeutral"
                key={`${tag.title}-${tag.slug}`}
                data-testid="post-tags"
              >
                {tag.title}
              </Text>
            ))}
        </Box>
      </Box>
    </List.Item>
  );
};

export default PostCard;
