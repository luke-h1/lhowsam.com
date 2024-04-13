// eslint-disable-next-line import/no-cycle
import imageService from '@frontend/services/imageService';
import { variables } from '@frontend/styles/variables.css';
import { Talk } from '@frontend/types/sanity';
import Box from '../Box/Box';
import { Image } from '../Image/Image';
import Link from '../Link/Link';
import Text from '../Text/Text';
import * as styles from './TalkItem.css';

interface Props {
  talk: Talk;
}

const TalkItem = ({ talk }: Props) => {
  return (
    <article
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box className={styles.anchor}>
        <Box className={styles.root} padding="lg" borderRadius="lg">
          <Box marginBottom="md">
            {talk.image?.asset && (
              <Image
                src={imageService.urlFor(talk.image.asset)}
                alt={talk.title}
                width={400}
                height={300}
                rounded
              />
            )}
          </Box>
          <Text
            color="foregroundAction"
            fontSize="xxl"
            fontWeight="bold"
            style={{
              marginBottom: variables.spacing.sm,
            }}
          >
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
          <Text
            as="time"
            dateTime={talk.date}
            color="foregroundNeutral"
            fontSize="sm"
            style={{
              marginBottom: variables.spacing.lg,
            }}
          >
            {talk.date}
          </Text>

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
    </article>
  );
};
export default TalkItem;
