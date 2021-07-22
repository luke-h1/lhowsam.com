import React from 'react';
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineTwitter,
} from 'react-icons/ai';
import { SiCoderwall } from 'react-icons/si';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <SiCoderwall fontSize="35px" />
          <span className="ml-3 text-xl">Luke H</span>
        </a>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a
            href="https://github.com/luke-h1"
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 ml-3"
          >
            <AiOutlineGithub fontSize="22px" />
          </a>
          <a
            href="https://twitter.com/LukeH_1999"
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 ml-3"
          >
            <AiOutlineTwitter fontSize="22px" />
          </a>
          <a
            href="https://www.linkedin.com/in/lukehowsam/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 ml-3"
          >
            <AiFillLinkedin fontSize="22px" />
          </a>
        </span>
      </div>
    </footer>
  );
};
export default Footer;
