import Link from 'next/link';
import {
  Email, Github, LinkedIn, Twitter,
} from '../Icons/Social';

const Footer: React.FC<{}> = () => (
  <>
    <div className="flex flex-col dark:bg-dark-100">
      <div className="flex mt-24 mb-8 flex-row justify-center">
        <Link href="/">
          <a className="md:block cursor-pointer text-gray-600 dark:text-gray-300 hover:text-blue-500 uppercase ml-2 mr-2">
            Home
          </a>
        </Link>
        <Link href="/about">
          <a className="md:block cursor-pointer text-gray-600 dark:text-gray-300 hover:text-blue-500 uppercase ml-2 mr-2">
            About
          </a>
        </Link>
        <Link href="/projects">
          <a className="md:block cursor-pointer text-gray-600 dark:text-gray-300 hover:text-blue-500 uppercase ml-2 mr-2">
            Projects
          </a>
        </Link>
        <Link href="/blog">
          <a className="md:block cursor-pointer text-gray-600 dark:text-gray-300 hover:text-blue-500 uppercase ml-2 mr-2">
            Blog
          </a>
        </Link>
      </div>
      <div className="flex mb-12 flex-row justify-center">
        <a
          className="md:block cursor-pointer text-gray-600 hover:text-blue-300 uppercase ml-2 mr-2"
          href="https://twitter.com/LukeH_1999"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter />
        </a>
        <a
          className="md:block cursor-pointer text-gray-600 hover:text-blue-300 uppercase ml-2 mr-2"
          href="https://www.linkedin.com/in/lukehowsam"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn />
        </a>
        <a
          className="md:block cursor-pointer text-gray-600 hover:text-blue-300 uppercase ml-2 mr-2"
          href="https://github.com/luke-h1"
          target="_blank"
          rel="noopener noreferrer"
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
        >
          <Email />
          {' '}
        </a>
      </div>
    </div>
  </>
);

export default Footer;
