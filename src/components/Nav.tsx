import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import menuStyles from '@src/styles/menu.module.scss';
import styles from '@src/styles/nav.module.scss';

const Nav = () => {
  const ref = useRef<HTMLDivElement>(null);

  function isPageOffset(): boolean {
    const offset = ref?.current?.offsetTop;
    if (offset) {
      return window.pageYOffset > offset;
    }
    return false;
  }

  function handleHamburgerClick() {
    document.getElementById('menu')?.classList.add(menuStyles.menuNavActive);
    document.getElementById('menu__bg')?.classList.add(menuStyles.menuBgActive);
    document.body.classList.add('disable-scroll');
  }

  useEffect(() => {
    window.onscroll = function updateNav() {
      if (isPageOffset()) {
        ref.current?.classList.add(styles.navActive);
      } else {
        ref.current?.classList.remove(styles.navActive);
      }
    };
  }, []);
  return (
    <div className={styles.navContainer}>
      <nav ref={ref} className={styles.nav} id="nav">
        <div className={styles.navContent}>
          <h1 className={styles.navIcon}>
            <Link href="/">
              <a>logo here</a>
            </Link>
          </h1>
          <div className={styles.navLinks}>
            <Link href="/">
              <a className={styles.navLink}>Home</a>
            </Link>
            <Link href="/projects">
              <a className={styles.navLink}>Projects</a>
            </Link>
            <Link href="/blog">
              <a className={styles.navLink}>Blog</a>
            </Link>
          </div>
          <div className={styles.hamburgerContainer} />
          <button
            aria-label="Open Menu"
            type="button"
            onClick={handleHamburgerClick}
            className={styles.hamburger}
          >
            <span className={styles.hamburgerItem} />
            <span className={styles.hamburgerItem} />
            <span className={styles.hamburgerItem} />
          </button>
        </div>
      </nav>
    </div>
  );
};
export default Nav;
