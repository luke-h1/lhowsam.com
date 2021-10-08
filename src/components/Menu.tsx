/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Link from 'next/link';
import XIcon from '@src/components/icons/XIcon';
import styles from '@src/styles/menu.module.scss';

const Menu = () => {
  function handleClose() {
    document.getElementById('menu')?.classList.remove(styles.menuNavActive);
    document.getElementById('menu__bg')?.classList.remove(styles.menuBgActive);
    document.body.classList.remove('disable-scroll');
  }
  return (
    <>
      <div onClick={handleClose} id="menu__bg" className={styles.menuBg} />
      <nav id="menu" className={styles.menuNav}>
        <button
          aria-label="Close menu"
          onClick={handleClose}
          className={styles.closeMenu}
          type="button"
        >
          <XIcon />
        </button>
        <div className={styles.menuContent}>
          <div onClick={handleClose} className={styles.menuLinks}>
            <Link href="/">
              <a className={styles.menuLink}>Home</a>
            </Link>
            <Link href="/about">
              <a className={styles.menuLink}>Projects</a>
            </Link>
            <Link href="/">
              <a className={styles.menuLink}>Blog</a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Menu;
