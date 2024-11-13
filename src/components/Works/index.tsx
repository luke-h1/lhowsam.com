import imageService from '@frontend/services/imageService';
import { Work } from '@frontend/types/sanity';
import * as ScrollArea from '@radix-ui/react-scroll-area';
import orderBy from 'lodash/orderBy';
import Image from 'next/image';
import Box from '../Box';
import Heading from '../Heading';
import Link from '../Link';
import * as styles from './Works.css';

interface Props {
  works: Work[];
}

export default function Works({ works }: Props) {
  // Order works by publishedAt date in descending order
  const orderedWorks = orderBy(works, ['publishedAt'], ['desc']);

  return (
    <ScrollArea.Root className={styles.scrollAreaRoot}>
      <ScrollArea.Viewport className={styles.scrollAreaViewport}>
        <div className={styles.horizontalList}>
          {orderedWorks &&
            orderedWorks.map(item => (
              <Link key={item._id} href={`/works/${item.slug.current}`}>
                <div key={item._id} className={styles.listItem}>
                  <Box className={styles.card}>
                    <div className={styles.imageContainer}>
                      <Image
                        src={imageService.urlFor(item.image.asset)}
                        alt={item.image.alt || item.title}
                        className={styles.image}
                        fill
                        sizes="100vw"
                        style={{
                          objectFit: 'cover',
                        }}
                      />
                    </div>
                    <Heading as="h3" className={styles.title}>
                      {item.title}
                    </Heading>
                  </Box>
                </div>
              </Link>
            ))}
        </div>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar
        orientation="horizontal"
        className={styles.scrollAreaScrollbar}
      >
        <ScrollArea.Thumb className={styles.scrollAreaThumb} />
      </ScrollArea.Scrollbar>
    </ScrollArea.Root>
  );
}
