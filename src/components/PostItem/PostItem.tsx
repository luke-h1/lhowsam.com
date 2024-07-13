import { Post } from '@frontend/types/sanity';
import clsx from 'clsx';
import Box from '../Box/Box';
import { Heading } from '../Heading/Heading';
import Link from '../Link/Link';
import { Spacer } from '../Spacer/Spacer';
import Text from '../Text/Text';
import * as styles from './PostItem.css';

interface Props {
  post: Post;
}

const PostItem = ({ post }: Props) => {
  return (
    <article>
      <Box
        display="flex"
        flexDirection={{ xs: 'column', sm: 'row-reverse' }}
        alignItems={{ sm: 'center' }}
        justifyContent={{ sm: 'space-between' }}
        gap="sm"
      >
        <Box
          display="flex"
          flexShrink={0}
          marginTop="xs"
          marginLeft={{
            sm: 'sm',
            md: 'none',
          }}
          marginBottom="sm"
        />
        <Box paddingBottom="lg" className={styles.content} marginBottom="lg">
          <Text
            color="foregroundNeutral"
            textTransform="uppercase"
            // letterSpacing="wide"
            fontSize="sm"
            fontFamily="mono"
          >
            {post.tags.map(tag => (
              <Link
                key={tag.slug.current}
                href={`/blog/tags/${tag.slug.current}`}
                className={clsx(styles.tag, styles.anchor)}
              >
                {tag.title.toUpperCase()}
              </Link>
            ))}
          </Text>{' '}
          <Spacer height="xs" />
          <Heading
            as="h3"
            fontSize="xl"
            style={{ lineHeight: 1.2 }}
            className={styles.heading}
          >
            <Link href={`/blog/${post.slug.current}`} className={styles.anchor}>
              {post.title}
            </Link>
          </Heading>
          <Spacer height="sm" />
          <Text className={styles.intro}>{post.intro}</Text>
        </Box>
      </Box>
    </article>
  );
};
export default PostItem;
