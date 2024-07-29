import * as utils from '@frontend/styles/util.css';
import { Post } from '@frontend/types/sanity';
import clsx from 'clsx';
import Box from '../Box';
import FormattedDate from '../FormattedDate';
import { Heading } from '../Heading';
import Link from '../Link';
import { Spacer } from '../Spacer';
import Text from '../Text';
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
            fontSize="sm"
            fontFamily="mono"
            data-testid="tag-container"
          >
            {post.tags.map(tag => (
              <Link
                data-testid={`post-tag-${tag._id}`}
                key={tag.slug.current}
                href={`/blog/tags/${tag.slug.current}`}
                className={clsx(utils.tag, utils.anchor)}
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
            <Link
              href={`/blog/${post.slug.current}`}
              className={utils.anchor}
              data-testid="post-title"
            >
              {post.title}
            </Link>
          </Heading>
          <Spacer height="sm" />
          <Text className={styles.intro} data-testid="post-intro">
            {post.intro}
          </Text>
          <Spacer height="sm" />
          <Text
            color="foregroundNeutral"
            fontSize="sm"
            fontFamily="mono"
            data-testid="post-date"
          >
            <FormattedDate>{post.publishedAt}</FormattedDate>
          </Text>
        </Box>
      </Box>
    </article>
  );
};
export default PostItem;
