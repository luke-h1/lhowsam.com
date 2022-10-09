import dynamic from 'next/dynamic';
import SocialList from '../SocialList';
import styles from './Footer.module.scss';
import FooterLinks from './FooterLinks';

const NowPlaying = dynamic(() => import('@frontend/components/NowPlaying'));

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.contentFooter}>
        <div className={styles.presentation}>
          <h3>Luke H</h3>
          <SocialList />
        </div>
        <div className={styles.menuFooter}>
          <FooterLinks />
        </div>
      </div>

      <p className={styles.aboutFooter}>
        MIT {new Date().getFullYear()}, Built with Next, Typescript & Sanity.io
      </p>
      <NowPlaying />
    </footer>
  );
};

export default Footer;
