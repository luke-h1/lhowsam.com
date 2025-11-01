'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
};

export default function StaggerItem({ children, className }: StaggerItemProps) {
  return (
    <motion.div variants={itemVariants} {...(className ? { className } : {})}>
      {children}
    </motion.div>
  );
}
