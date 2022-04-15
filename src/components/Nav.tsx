/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useMounted } from '@src/hooks/useMounted';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BiMenuAltRight } from 'react-icons/bi';
import { FiCode } from 'react-icons/fi';
import Button from './Button';
import ThemeChanger from './ThemeChanger';
import classes from './nav.module.scss';

const Nav = () => {
  const { isMounted } = useMounted();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [size, setSize] = useState<{
    width: number | undefined;
    height: number | undefined;
  }>({
    width: undefined,
    height: undefined,
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
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen(p => !p);
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
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
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
        {isMounted ? <ThemeChanger /> : <div />}

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

export default Nav;
