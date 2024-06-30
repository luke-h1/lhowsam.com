import { Post } from '@frontend/types/sanity';
import clsx from 'clsx';
import Box from '../Box/Box';
import { Heading } from '../Heading/Heading';
import Link from '../Link/Link';
import { Spacer } from '../Spacer/Spacer';
import { Text } from '../Text/Text';
import * as styles from './PostItem.css';

interface Props {
  post: Post;
}

const PostItem = ({ post }: Props) => {
  return (
    <article>
      <Box display={{ md: 'flex' }} alignItems="flex-start" gap="md">
        <Box
          display="flex"
          float={{ sm: 'right', md: 'none' }}
          flexShrink={0}
          style={{}}
          marginTop="xs"
          marginLeft={{
            sm: 'sm',
            md: 'none',
          }}
          marginBottom={{
            sm: 'sm',
            md: 'none',
          }}
        />
        <Box paddingBottom="lg" className={styles.content} marginBottom="lg">
          <Text
            color="foregroundNeutral"
            textTransform="uppercase"
            letterSpacing="wide"
            fontSize="sm"
            fontFamily="mono"
          >
            {post.tags.map(tag => (
              <Link
                key={tag.slug.current}
                href={`/blog/tags/${tag.slug.current}`}
                className={clsx(styles.tag, styles.anchor)}
              >
                {tag.title}
              </Link>
            ))}
          </Text>{' '}
          <Spacer height="xs" />
          <Heading as="h3" fontSize="xl" style={{ lineHeight: 1.2 }}>
            <Link href={`/blog/${post.slug.current}`} className={styles.anchor}>
              {post.title}
            </Link>
          </Heading>
          <Spacer height="sm" />
          <Text>{post.intro}</Text>
        </Box>
      </Box>
    </article>
  );
};
export default PostItem;
