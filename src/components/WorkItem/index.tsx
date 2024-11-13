import imageService from '@frontend/services/imageService';
import { Work } from '@frontend/types/sanity';
import Image from 'next/image';
import Link from 'next/link';
import Box from '../Box';
import Heading from '../Heading';
import Spacer from '../Spacer';
import Text from '../Text';
import * as styles from './WorkItem.css';

interface Props {
  work: Work;
}

export default function WorkItem({ work }: Props) {
  return (
    <Link href={`/work/${work.slug.current}`}>
      <Box display="flex" alignItems="flex-start" gap="md">
        <Box display="flex" flexShrink={0} marginTop="xs" marginBottom="sm">
          <Image
            src={imageService.urlFor(work.image.asset)}
            priority
            width={64}
            height={64}
            alt={work.image.alt ?? work.title}
            className={styles.image}
            style={{
              maxWidth: '100%',
              height: 'auto',
              objectFit: 'cover',
            }}
          />
        </Box>

        <Box paddingBottom="lg" className={styles.content}>
          <Heading as="h3" fontSize="xl" style={{ lineHeight: 1.2 }}>
            {work.title}
          </Heading>
          <Spacer height="sm" />
          <Text>{work.intro}</Text>
        </Box>
      </Box>
    </Link>
  );
}
