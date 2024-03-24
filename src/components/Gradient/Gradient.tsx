import clsx from 'clsx';
import {
  motion,
  useScroll,
  useTransform,
  LazyMotion,
  domAnimation,
} from 'framer-motion';
import * as styles from './Gradient.css';

const Gradient = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);
  const scale = useTransform(scrollY, [0, 100], [1, 0.7]);

  return (
    <LazyMotion features={domAnimation}>
      <motion.div
        className={styles.root}
        aria-hidden
        style={{
          opacity,
          scale,
          y: '-50%',
        }}
      >
        <span className={clsx(styles.blob, styles.left)} />
        <span className={clsx(styles.blob, styles.right)} />
      </motion.div>
    </LazyMotion>
  );
};

export default Gradient;
