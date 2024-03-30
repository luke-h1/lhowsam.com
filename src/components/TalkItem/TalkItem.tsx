// eslint-disable-next-line import/no-cycle
import { Talk } from '@frontend/app/talks/page';
import { variables } from '@frontend/styles/variables.css';
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
      <Link href={`/talk/${talk.id}`} className={styles.anchor}>
        <Box className={styles.root} padding="lg" borderRadius="lg">
          <Box marginBottom="md">
            <Image
              src={talk.image}
              alt={talk.title}
              width={400}
              height={300}
              rounded
            />
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
            fontSize="md"
            color="foregroundNeutral"
            style={{
              marginBottom: variables.spacing.sm,
            }}
          >
            {talk.slideUrl}
          </Text>
          <Text
            as="time"
            dateTime={talk.date}
            color="foregroundNeutral"
            fontSize="sm"
          >
            {talk.date}
          </Text>
        </Box>
      </Link>
    </article>
  );
};
export default TalkItem;
