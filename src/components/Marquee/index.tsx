'use client';

import { motion, useAnimationControls } from 'framer-motion';
import { Children, ReactNode, useEffect } from 'react';
import * as styles from './Marquee.css';

interface Props {
  children: ReactNode;
}

const Marquee = ({ children }: Props) => {
  const controls = useAnimationControls();

  useEffect(() => {
    controls.start({
      x: '-100%',
      transition: {
        duration: 50,
        repeat: Infinity,
        ease: 'linear',
      },
    });
    return () => controls.stop();
  }, [controls]);

  return (
    <div className={styles.root}>
      <motion.div key="rowOne" className={styles.scroller} animate={controls}>
        {Children.map(children, (child, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={`rowTwo-${index}`} className={styles.item}>
            {child}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
