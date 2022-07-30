import classNames from 'classnames';
import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';
import Header from './Header';
import styles from './Page.module.scss';

interface Props {
  children: ReactNode;
  title: string;
  showHero?: boolean;
  center?: boolean;
  header?: boolean;
}

const variants: Variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

const Page = ({ children, title, showHero, center, header = true }: Props) => {
  return (
    <>
      {header && <Header showHero={showHero} title={title} />}
      <motion.main
        initial="hiden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: 'linear' }}
      >
        <div className={classNames(styles.main, center && styles.center)}>
          {children}
        </div>
      </motion.main>
    </>
  );
};

export default Page;
