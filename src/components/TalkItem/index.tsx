import imageService from '@frontend/services/imageService';
import { variables } from '@frontend/styles/variables.css';
import { Talk } from '@frontend/types/sanity';
import Image from 'next/image';
import Box from '../Box';
import FormattedDate from '../FormattedDate';
import Link from '../Link';
import Text from '../Text';
import * as styles from './TalkItem.css';

interface Props {
  talk: Talk;
}

const TalkItem = ({ talk }: Props) => {
  return (
    <Box
      as="article"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box className={styles.anchor}>
        <Box className={styles.root} padding="lg" borderRadius="lg">
          <Box marginBottom="md">
            {talk.image?.asset && (
              <Image
                src={imageService.urlFor(talk.image.asset)}
                alt={talk.title}
                width={400}
                placeholder="blur"
                blurDataURL={imageService.urlFor(talk.image.asset)}
                height={300}
                style={{
                  marginBottom: variables.spacing.sm,
                  maxWidth: '100%',
                  height: 'auto',
                }}
              />
            )}
          </Box>
          <Text fontSize="xxl" fontWeight="bold">
            {talk.title}
          </Text>
          <Text
            fontSize="md"
            color="foregroundNeutral"
            style={{
              marginBottom: variables.spacing.lg,
            }}
          >
            {talk.description}
          </Text>
          <Text
            fontSize="md"
            color="foregroundNeutral"
            style={{
              marginBottom: variables.spacing.sm,
            }}
          >
            {talk.location}
          </Text>
          <FormattedDate color="foregroundNeutral" testId="talk-date">
            {talk.date}
          </FormattedDate>

          <Link
            href={talk.slideUrl}
            variant="highlight"
            css={{
              textDecoration: 'underline',
              color: variables.color.foregroundNeutral,
            }}
          >
            Slides
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
export default TalkItem;
