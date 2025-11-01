import imageService from '@frontend/services/imageService';
import { Talk } from '@frontend/types/sanity';
import Image from 'next/image';
import { FiExternalLink, FiVideo } from 'react-icons/fi';
import Box from '../Box';
import FormattedDate from '../FormattedDate';
import Heading from '../Heading';
import Link from '../Link';
import Spacer from '../Spacer';
import Text from '../Text';
import VisuallyHidden from '../VisuallyHidden';
import * as styles from './TalkItem.css';

interface Props {
  talk: Talk;
}

const TalkItem = ({ talk }: Props) => {
  return (
    <Box as="article" display={{ md: 'flex' }} alignItems="flex-start" gap="md">
      <Box
        display="flex"
        float={{ sm: 'right', md: 'none' }}
        flexShrink={0}
        marginTop="xs"
        marginLeft={{ sm: 'sm', md: 'none' }}
        marginBottom={{ sm: 'sm', md: 'none' }}
      >
        {talk.image?.asset && (
          <Image
            src={imageService.urlFor(talk.image.asset)}
            alt={talk.image.alt ?? talk.title}
            width={200}
            height={200}
            placeholder="blur"
            blurDataURL={imageService.urlFor(talk.image.asset)}
            style={{
              maxWidth: '100%',
              height: 'auto',
              objectFit: 'cover',
            }}
          />
        )}
      </Box>
      <Link href={`/talks/${talk.slug.current}`} testId="talk-link">
        <Box paddingBottom="lg" className={styles.content}>
          <Spacer height="xs" />
          <Heading
            as="h3"
            fontSize="xl"
            style={{ lineHeight: 1.2 }}
            className={styles.anchor}
            testId="talk-title"
          >
            {talk.title}
          </Heading>
          <Spacer height="xs" />
          <Box display="flex" gap="sm" alignItems="center">
            <Text fontSize="sm" color="foregroundNeutral" fontFamily="mono">
              <FormattedDate testId="talk-date">{talk.date}</FormattedDate>
            </Text>
            <Text fontSize="sm" color="foregroundNeutral">
              •
            </Text>
            <Text fontSize="sm" color="foregroundNeutral">
              {talk.location}
            </Text>
          </Box>
          <Spacer height="sm" />
          <Text>{talk.description}</Text>
        </Box>
      </Link>
      <Box display="flex" alignItems="stretch" className={styles.links}>
        <Link
          testId="talk-slides"
          href={talk.slideUrl}
          css={{
            marginRight: '1rem',
          }}
        >
          <VisuallyHidden>View Slides</VisuallyHidden>
          <FiExternalLink size={18} name="Slides" />
        </Link>
        {talk.videoUrl && (
          <Link href={talk.videoUrl} testId="talk-video">
            <VisuallyHidden>Watch Video</VisuallyHidden>
            <FiVideo size={18} name="Video" />
          </Link>
        )}
      </Box>
    </Box>
  );
};
export default TalkItem;
