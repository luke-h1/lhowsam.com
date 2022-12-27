import { FiCode } from 'react-icons/fi';
import styles from './Footer.module.scss';
import FooterLinks from './FooterLinks';
import SocialList from './SocialList';

const Footer = () => {
  return (
    <footer className={styles.container} data-testid="footer">
      <div className={styles.contentFooter}>
        <div className={styles.presentation}>
          <FiCode fontSize="29.5px" />
          <SocialList />
        </div>
        <div className={styles.menuFooter}>
          <FooterLinks />
        </div>
      </div>

      {/* <p className={styles.aboutFooter}>
        MIT {new Date().getFullYear()}, Built with Next, Typescript & Sanity.io
      </p> */}
    </footer>
  );
};

export default Footer;
