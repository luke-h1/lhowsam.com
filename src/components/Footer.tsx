import React from 'react';
import Link from 'next/link';
import { isProd } from '@src/utils/isProd';

const ExternalLink = ({
  href,
  children,
  aria,
}: {
  href: string;
  children: React.ReactNode;
  aria: string;
}) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
    aria-label={aria}
  >
    {children}
  </a>
);

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link href="/">
            <a className="text-gray-500 hover:text-gray-600 transition">Home</a>
          </Link>
          <Link href="/blog">
            <a className="text-gray-500 hover:text-gray-600 transition">Blog</a>
          </Link>
          <Link href="/projects">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Projects
            </a>
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://twitter.com/LukeH_1999" aria="Twitter">
            Twitter
          </ExternalLink>
          <ExternalLink
            href="https://www.linkedin.com/in/lukehowsam/"
            aria="Linkedin"
          >
            LinkedIn
          </ExternalLink>
          <ExternalLink href="https://github.com/luke-h1" aria="Github">
            GitHub
          </ExternalLink>
        </div>
        <div className="flex flex-col space-y-4">
          <Link href="/sitemap.xml">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Sitemap
            </a>
          </Link>
          {isProd ? null : (
            <Link href="/snippets">
              <a className="text-gray-500 hover:text-gray-600 transition">
                Snippets
              </a>
            </Link>
          )}
        </div>
      </div>
    </footer>
  );
};
export default Footer;
