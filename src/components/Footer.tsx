import React from 'react';
import styles from '@src/styles/footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLinks}>
          <a target="_blank" rel="noreferrer noopener" href="">
            Twitter
          </a>
          <a target="_blank" rel="noreferrer noopener" href="">
            GitHub
          </a>
          <a target="_blank" rel="noreferrer noopener" href="">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
