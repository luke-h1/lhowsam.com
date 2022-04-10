/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import { AiOutlineClose } from 'react-icons/ai';
import { BiMenuAltRight } from 'react-icons/bi';

import { FiCode } from 'react-icons/fi';
import Button from './Button';
import classes from './nav.module.scss';

const Header = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [size, setSize] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen(p => !p);
  };

  const ctaClickHandler = () => {
    menuToggleHandler();
    router.push('/contact');
  };

  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <Link href="/">
          <a className={classes.header__content__logo}>
            <FiCode />
          </a>
        </Link>
        <nav
          className={`${classes.header__content__nav} ${
            menuOpen && size.width < 768 ? classes.isMenu : ''
          }`}
        >
          <ul>
            <li>
              <Link href="/about">
                <a onClick={menuToggleHandler}>About</a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a onClick={menuToggleHandler}>Blog</a>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <a onClick={menuToggleHandler}>Projects</a>
              </Link>
            </li>
          </ul>
          <Button href="/contact" type="button">
            Contact
          </Button>
        </nav>
        <div className={classes.header__content__toggle}>
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
