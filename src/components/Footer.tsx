import Link from 'next/link';
import React from 'react';
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineTwitter,
} from 'react-icons/ai';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="text-gray-600 body-font">
      <hr />
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <p className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <span className="ml-3 text-xl">Luke H</span>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a
            href="https://github.com/luke-h1"
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 ml-3"
            aria-label="Github"
          >
            <AiOutlineGithub fontSize="22px" />
          </a>
          <a
            href="https://twitter.com/LukeH_1999"
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 ml-3"
            aria-label="Twitter"
          >
            <AiOutlineTwitter fontSize="22px" />
          </a>
          <a
            href="https://www.linkedin.com/in/lukehowsam/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 ml-3"
            aria-label="Linkedin"
          >
            <AiFillLinkedin fontSize="22px" />
          </a>
        </span>
        <div className="ml-2 mt-3">
          <Link href="https://lhowsam.com/sitemap.xml">
            <a>Sitemap</a>
          </Link>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
