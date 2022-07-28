import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import styles from './Header.module.scss';
import Navbar from './Navbar';
import SocialList from './SocialList';

interface Props {
  showHero?: boolean;
  title?: string;
}

const variants: Variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

const Header = ({ showHero, title }: Props) => {
  return (
    <header className={styles.header}>
      <Navbar />

      {showHero ? (
        <motion.div
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{ type: 'linear' }}
        >
          <div className={styles.presentation}>
            <div className={styles.profileImage}>
              {/* TODO: LH - replace headshot with something that fits better */}
              <Image
                src="/images/luke.jpeg"
                alt="Luke Howsam"
                blurDataURL="/images/luke.jpeg"
                layout="responsive"
                placeholder="blur"
                quality={100}
                priority
                width={270}
                height={270}
              />
            </div>
            <div className={styles.sidePresentation}>
              <h1 className={styles.profilePresentation}>
                Hey{' '}
                <span aria-hidden aria-label="wave">
                  👋
                </span>{' '}
                I'm <b>Luke</b>
              </h1>
              <p className={styles.profileDescription}>
                I'm a software engineer & tester. todo
              </p>
              <SocialList />
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{ type: 'linear' }}
        >
          <div className={styles.container}>
            {title && <h1 className={styles.titlePage}>{title}</h1>}
          </div>
        </motion.div>
      )}
    </header>
  );
};
export default Header;
