import { constants } from '@src/data/constants';
import { NavLinks } from '@src/data/NavLinks';
import cx from 'clsx';
import Link from 'next/link';
import React from 'react';
import { AiOutlineTwitter, AiOutlineGithub } from 'react-icons/ai';

const Nav = () => {
  return (
    <div className="sticky top-0 z-10 py-2 bg-white md:py-6 md:mb-6">
      <div className="container px-4 mx-auto lg:max-w-4xl md:flex md:items-center md:justify-between">
        <Link href="/">
          <a
            className={cx(
              'font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase',
              constants.FOCUS_VISIBLE_OUTLINE,
            )}
          >
            Luke H
          </a>
        </Link>

        <div className="flex items-center -ml-5 text-gray-900 lg:-ml-8">
          {NavLinks.map((link) => (
            <Link href={link.slug} key={link.id}>
              <a
                className={cx(
                  'font-medium block transition-colors mt-1.5 lg:mt-0 lg:ml-8 ml-5 hover:text-sky-500',
                  constants.FOCUS_VISIBLE_OUTLINE,
                )}
                aria-label={link.text}
                data-testid={`nav-${link.text}`}
              >
                {link.text}
              </a>
            </Link>
          ))}
          <p className="flex pl-6 space-x-3 text-xl">
            <a
              href="https://twitter.com/LukeH_1999"
              className={cx(
                'transition-colors text-gray-900 hover:text-sky-500 cursor-pointer',
                constants.FOCUS_VISIBLE_OUTLINE,
              )}
              target="_blank"
              rel="noreferrer"
              aria-label="Twiiter"
              data-testid="nav-twitter"
            >
              <AiOutlineTwitter />
            </a>
            <a
              href="https://github.com/luke-h1"
              className={cx(
                'transition-colors text-gray-900 hover:text-sky-500 cursor-pointer',
                constants.FOCUS_VISIBLE_OUTLINE,
              )}
              target="_blank"
              rel="noreferrer"
              aria-label="Github"
              data-testid="nav-github"
            >
              <AiOutlineGithub />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Nav;
