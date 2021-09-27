/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
import { constants } from '@src/data/constants';
import cx from 'clsx';
import NextLink from 'next/link';
import NextImage from 'next/image';
import { Code } from './Markdown/Code';

export const components = {
  h1: (props: any) => (
    <h1 className="mt-8 mb-4 text-4xl font-bold" {...props} />
  ),
  h2: (props: any) => (
    <h2 className="mt-8 mb-3 text-2xl font-bold" {...props} />
  ),
  h3: (props: any) => <h3 className="mt-8 mb-5 text-xl font-bold" {...props} />,
  h4: (props: any) => <h4 className="mt-6 mb-5 text-lg font-bold" {...props} />,
  p: (props: any) => <p className="mb-5 leading-7" {...props} />,
  a: ({ href = '', ...props }) => {
    if (href.startsWith('https')) {
      return (
        <a
          className={cx(
            'font-medium transition-colors text-sky-500 hover:text-sky-700',
            constants.FOCUS_VISIBLE_OUTLINE,
          )}
          href={href}
          target="_blank"
          rel="noreferrer noopener"
          {...props}
        />
      );
    }

    return (
      <NextLink href={href} passHref>
        <a
          className={cx(
            'font-medium transition-colors text-sky-500 hover:text-sky-700',
            constants.FOCUS_VISIBLE_OUTLINE,
          )}
          {...props}
        />
      </NextLink>
    );
  },
  hr: (props: any) => <hr {...props} />,
  ul: (props: any) => <ul className="mb-6" {...props} />,
  ol: (props: any) => (
    <ol className="pl-10 my-12 leading-7 list-decimal" {...props} />
  ),
  li: (props: any) => (
    <li
      className="relative pl-7 my-3 before:absolute before:bg-gray-300 before:rounded-full before:w-1.5 before:h-1.5 before:left-1 before:top-2"
      {...props}
    />
  ),
  strong: (props: any) => <strong className="font-semibold" {...props} />,
  Image: ({ children, ...props }: { children: React.ReactNode }) => (
    <figure className="my-5">
      <NextImage {...(props as any)} />
      {children && (
        <figcaption className="mt-2 text-sm text-gray-500">
          {children}
        </figcaption>
      )}
    </figure>
  ),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  img: ({ children, ...props }: { children: React.ReactNode }) => (
    <div className="my-5">
      <NextImage {...(props as any)} />
    </div>
  ),
  blockquote: (props: any) => (
    <blockquote
      className="pl-8 my-4 italic font-medium border-l-2 border-gray-200"
      {...props}
    />
  ),
  del: (props: any) => <del className="line-through" {...props} />,
  pre: ({ children, ...props }: { children: React.ReactNode }) => {
    return (
      <pre className="" {...props}>
        {children}
      </pre>
    );
  },
  code: (props: any) => <Code {...props} />,
};
