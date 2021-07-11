import { constants } from '@src/shared/constants';
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
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span className="ml-3 text-xl">Luke H</span>
        </a>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a
            href={constants.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 ml-3"
          >
            <AiOutlineGithub fontSize="22px" />
          </a>
          <a
            href={constants.twitterUrl}
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 ml-3"
          >
            <AiOutlineTwitter fontSize="22px" />
          </a>
          <a
            href={constants.linkedinUrl}
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
