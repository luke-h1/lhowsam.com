import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.scss';
import Navbar from './Navbar';
import SocialList from './SocialList';

interface Props {
  showHero?: boolean;
  title?: string;
}

const Header = ({ showHero, title }: Props) => {
  return (
    <header className={styles.header}>
      <Navbar />
      {showHero ? (
        <motion.div
          initial="hidden"
          animate="enter"
          exit="exit"
          transition={{ type: 'linear' }}
        >
          <div className={styles.presentation}>
            <div className={styles.profileImage}>
              <Image
                src="/images/luke.jpeg"
                alt="Luke Howsam"
                blurDataURL="/images/luke.jpeg"
                layout="responsive"
                placeholder="blur"
                quality={100}
                priority
                width={240}
                height={280}
              />
            </div>
            <div className={styles.sidePresentation}>
              <h1 className={styles.profilePresentation}>
                Hey{' '}
                <span aria-hidden aria-label="wave">
                  👋
                </span>{' '}
                , I'm <b>Luke</b>
              </h1>
              <p className={styles.profileDescription}>
                I currently work as a Software Engineer. I like building +
                testing projects that are scalable, performant &amp; user
                friendly.
              </p>
              <Link href="/about">
                <a className={styles.button}>More about me</a>
              </Link>
              <SocialList />
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial="hidden"
          animate="enter"
          exit="exit"
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
