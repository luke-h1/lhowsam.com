'use client';

import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

const variants: Variants = {
  initial: {
    opacity: 0,
    y: 8,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.61, 1, 0.88, 1],
    },
  },
};

interface Props {
  children: ReactNode;
}

const PageTransition = ({ children }: Props) => {
  return (
    <motion.div initial="initial" animate="enter" variants={variants}>
      {children}
    </motion.div>
  );
};
export default PageTransition;
