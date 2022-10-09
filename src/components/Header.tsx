import classNames from 'classnames';
import { motion } from 'framer-motion';
import styles from './Header.module.scss';
import Hero from './Hero';
import Navbar from './Navbar';

interface Props {
  showHero?: boolean;
  title?: string;
}

const Header = ({ showHero, title }: Props) => {
  return (
    <header className={classNames(styles.header, styles.container)}>
      <Navbar />
      {showHero ? (
        <motion.div
          initial="hidden"
          animate="enter"
          exit="exit"
          transition={{ type: 'linear' }}
        >
          <div className={styles.presentation}>
            <div className={styles.sidePresentation}>
              <Hero />
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
