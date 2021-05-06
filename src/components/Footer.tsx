import React from 'react';
import {
  Email, Github, LinkedIn, Twitter,
} from '@/icons/Social';
import Link from 'next/link';
import { Links } from '@/data/links';

const Footer: React.FC<{}> = () => {
  return (
    <>
      <div className="flex flex-col dark:bg-dark-100">
        <div className="flex mt-24 mb-8 flex-row justify-center">
          {Links
            && Links.map((l) => (
              <Link href={l.slug}>
                <a className="md:block cursor-pointer text-gray-600 dark:text-gray-300 hover:text-blue-500 uppercase ml-2 mr-2">
                  {l.name}
                </a>
              </Link>
            ))}
        </div>
        <div className="flex mb-12 flex-row justify-center">
          <a
            className="md:block cursor-pointer text-gray-600 hover:text-blue-300 uppercase ml-2 mr-2"
            href="https://twitter.com/LukeH_1999"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <Twitter />
          </a>
          <a
            className="md:block cursor-pointer text-gray-600 hover:text-blue-300 uppercase ml-2 mr-2"
            href="https://www.linkedin.com/in/lukehowsam"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Linkedin"
          >
            <LinkedIn />
          </a>
          <a
            className="md:block cursor-pointer text-gray-600 hover:text-blue-300 uppercase ml-2 mr-2"
            href="https://github.com/luke-h1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Githu"
          >
            <Github />
            {' '}
          </a>
          <a
            className="md:block cursor-pointer text-gray-600 hover:text-blue-300 uppercase ml-2 mr-2"
            href="mailto:luke.howsam@yahoo.com?subject=Get In Touch"
            title="Email"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <Email />
            {' '}
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
