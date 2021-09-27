import Image from 'next/image';
import { parseISO, format } from 'date-fns';
import React from 'react';

const editUrl = (slug: string) => `https://github.com/luke-h1/lhowsam.com/edit/main/data/blog/${slug}.mdx`;

interface Props {
  children: React.ReactNode;
  frontMatter: any;
}

const BlogLayout = ({ children, frontMatter }: Props) => {
  return (
    <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
      <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
        {frontMatter.title}
      </h1>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-2">
        <div className="flex items-center">
          <Image
            alt="Luke Howsam"
            height={24}
            width={24}
            src="/images/luke.jpeg"
            className="rounded-full"
          />
          <p className="text-sm text-gray-700 dark:text-gray-300 ml-2">
            {'Luke Howsam / '}
            {format(parseISO(frontMatter.createdAt), 'MMMM dd, yyyy')}
          </p>
        </div>
        <p className="text-sm text-gray-500 min-w-32 mt-2 md:mt-0">
          {frontMatter.readingTime.text}
          {' • '}
          {/* <ViewCounter slug={frontMatter.slug} /> */}
        </p>
      </div>
      <div className="prose dark:prose-dark max-w-none w-full">{children}</div>
      <div className="text-sm text-gray-700 dark:text-gray-300">
        {' • '}
        <a
          href={editUrl(frontMatter.slug)}
          target="_blank"
          rel="noopener noreferrer"
        >
          Edit on GitHub
        </a>
      </div>
    </article>
  );
};
export default BlogLayout;
