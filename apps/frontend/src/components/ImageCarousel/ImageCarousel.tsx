import clsx from 'clsx';
import {
  motion,
  MotionConfig,
  AnimatePresence,
  LazyMotion,
  domAnimation,
} from 'framer-motion';
import type { ImageProps } from 'next/legacy/image';
import Image from 'next/legacy/image';
import { ArrowRight, ArrowLeft } from 'react-feather';
import { useRovingIndex } from 'use-roving-index';
import VisuallyHidden from '../VisuallyHidden/VisuallyHidden';
import * as styles from './ImageCarousel.css';

interface Props {
  aspectRatio?: '16/9' | '4/3';
  items: (ImageProps & { rounded?: boolean })[];
}

const ImageCarousel = ({ items, aspectRatio = '4/3' }: Props) => {
  const [antecedent, consequent] = aspectRatio.split('/');
  const {
    activeIndex,
    setActiveIndex,
    moveBackward,
    moveBackwardDisabled,
    moveForward,
    moveForwardDisabled,
  } = useRovingIndex({ maxIndex: items.length - 1 });

  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}>
        <motion.div className={styles.root}>
          <motion.div
            className={styles.carousel}
            animate={{ x: `-${activeIndex * 100}%` }}
          >
            {items &&
              items.map((item, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <div key={index} className={styles.item}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={300}
                    height={(Number(consequent) / Number(antecedent)) * 600}
                    objectFit="scale-down"
                    className={clsx({
                      [styles.rounded]: item.rounded,
                    })}
                  />
                </div>
              ))}
          </motion.div>
          {items.length > 1 && (
            <nav className={styles.pagination}>
              <AnimatePresence initial={false}>
                {!moveBackwardDisabled && (
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                    exit={{ opacity: 0, pointerEvents: 'none' }}
                    whileHover={{ opacity: 1 }}
                    whileFocus={{ opacity: 1 }}
                    onClick={() => moveBackward()}
                    className={clsx(styles.button, styles.prev)}
                  >
                    <VisuallyHidden>Previous</VisuallyHidden>
                    <span className={styles.disc}>
                      <ArrowLeft width="16" height="16" />
                    </span>
                  </motion.button>
                )}
              </AnimatePresence>
              <AnimatePresence initial={false}>
                {!moveForwardDisabled && (
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                    exit={{ opacity: 0, pointerEvents: 'none' }}
                    whileHover={{ opacity: 1 }}
                    whileFocus={{ opacity: 1 }}
                    onClick={() => moveForward()}
                    className={clsx(styles.button, styles.next)}
                  >
                    <VisuallyHidden>Next</VisuallyHidden>
                    <span className={styles.disc}>
                      <ArrowRight width="16" height="16" />
                    </span>
                  </motion.button>
                )}
              </AnimatePresence>
              <ol className={styles.list}>
                {items.map((_, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <li key={index}>
                    <motion.button
                      variants={{
                        inactive: {
                          opacity: 0.7,
                        },
                        active: {
                          opacity: 1,
                        },
                      }}
                      initial="inactive"
                      animate={activeIndex === index ? 'active' : 'inactive'}
                      whileHover={{ opacity: 1 }}
                      whileFocus={{ opacity: 1 }}
                      className={styles.dot}
                      onClick={() => setActiveIndex(index)}
                      aria-current={activeIndex === index ? 'true' : 'false'}
                    >
                      <VisuallyHidden>View item {index + 1}</VisuallyHidden>
                    </motion.button>
                  </li>
                ))}
              </ol>
            </nav>
          )}
        </motion.div>
      </MotionConfig>
    </LazyMotion>
  );
};
export default ImageCarousel;
