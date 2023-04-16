'use client';

import classNames from 'classnames';
import { motion, useScroll, useTransform } from 'framer-motion';
import * as styles from './Gradient.css';

const Gradient = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);
  const scale = useTransform(scrollY, [0, 100], [1, 0.7]);

  return (
    <motion.div
      className={styles.root}
      aria-hidden
      style={{
        opacity,
        scale,
        y: '-50%',
      }}
    >
      <span className={classNames(styles.blob, styles.left)} />
      <span className={classNames(styles.blob, styles.right)} />
    </motion.div>
  );
};

export default Gradient;
