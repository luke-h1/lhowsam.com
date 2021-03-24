import { CloseIcon } from '@src/Icons/CloseIcon';
import { Logo } from '@src/Icons/Logo';
import { MenuIcon } from '@src/Icons/MenuIcon';
import Link from 'next/link';
import React, { useState } from 'react';

export const Header: React.FC<{}> = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href='/'>
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-black"
            >
              <Logo />
            </a>
            </Link>
            <button
              className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {navbarOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
          <div
            className={`lg:flex flex-grow items-center${
              navbarOpen ? ' flex' : ' hidden'
            }`}
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link href="/">
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75 ml-2"
                  >
                    Home
                  </a>
                </Link>

              </li>
              <li className="nav-item">
                <Link href="/about">
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75 ml-2"
                  >
                    About
                  </a>
                </Link>

              </li>
              <li className="nav-item">
                <Link href="/projects">
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75 ml-2"
                  >
                    Projects
                  </a>
                </Link>

              </li>
              <li className="nav-item">
                <Link href="/blog">
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75 ml-2"
                  >
                    Blog
                  </a>
                </Link>

              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
