import { constants } from '@src/shared/constants';
import { NavLinks } from '@src/shared/NavLinks';
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
              >
                {link.text}
              </a>
            </Link>
          ))}
          <p className="flex pl-6 space-x-3 text-xl">
            <a
              href={constants.twitterUrl}
              className={cx(
                'transition-colors text-gray-900 hover:text-sky-500 cursor-pointer',
                constants.FOCUS_VISIBLE_OUTLINE,
              )}
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineTwitter />
            </a>
            <a
              href={constants.githubUrl}
              className={cx(
                'transition-colors text-gray-900 hover:text-sky-500 cursor-pointer',
                constants.FOCUS_VISIBLE_OUTLINE,
              )}
              target="_blank"
              rel="noreferrer"
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
