import imageService from '@frontend/services/imageService';
import { Post } from '@frontend/types/sanity';
import Box from '../Box/Box';
import { Heading } from '../Heading/Heading';
import { Image } from '../Image/Image';
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
          marginTop="xs"
          marginLeft={{
            sm: 'sm',
            md: 'none',
          }}
          marginBottom={{
            sm: 'sm',
            md: 'none',
          }}
        >
          <Image
            src={imageService.urlFor(post.image.asset)}
            width="64"
            height="64"
            blurDataURL={imageService.urlFor(post.image.asset)}
            objectFit="cover"
            alt={post.image.alt ?? post.title}
            style={{
              borderRadius: 4,
            }}
          />
        </Box>
        <Box paddingBottom="lg" className={styles.content}>
          <Text
            color="foregroundNeutral"
            textTransform="uppercase"
            letterSpacing="wide"
            fontSize="sm"
            fontFamily="mono"
          >
            Category
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
