/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useMounted } from '@src/hooks/useMounted';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BiMenuAltRight } from 'react-icons/bi';
import classes from './Nav.module.scss';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const { isMounted } = useMounted();
  const [size, setSize] = useState<{
    width: number;
    height: number;
  }>({
    width: isMounted ? window.innerWidth : 0,
    height: isMounted ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: isMounted ? window.innerWidth : 0,
        height: isMounted ? window.innerHeight : 0,
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMounted]);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(!menuOpen);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    if (size.width < 768 && menuOpen) {
      setMenuOpen(!menuOpen);
    }
  };

  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <nav
          className={`${classes.header__content__nav} ${
            menuOpen && size.width <= 768 ? classes.isMenu : ''
          }`}
        >
          <ul>
            <li>
              <Link href="/">
                <a onClick={menuToggleHandler}>Home</a>
              </Link>
            </li>
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
        </nav>

        <div className={classes.header__content__toggle}>
          {!menuOpen ? (
            <BiMenuAltRight onClick={() => setMenuOpen(!menuOpen)} />
          ) : (
            <AiOutlineClose onClick={() => setMenuOpen(!menuOpen)} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Nav;