import { SkipLink } from '../SkipLink';
import Navbar from './Navbar/Navbar';
import styles from './Navigation.module.scss';

const Navigation = () => {
  return (
    <nav className={styles.wrapper}>
      <SkipLink />
      <div className={styles.links}>
        <Navbar />
      </div>
    </nav>
  );
};

export default Navigation;
