import { BlogPost } from '@src/types';
import Link from 'next/link';
import React from 'react';

const BlogCardRedesign = ({
  title, summary, slug, date, tags,
}: BlogPost) => {
  return (
    <div className="w-full max-w-xl mx-auto">
      <Link href={`/blog/${slug}`}>
        <a className="p-2 w-full mb-4">
          <div className="mb-8 w-full">
            <div className="flex flex-col md:flex-row justify-between">
              <h4 className="text-lg md:text-xl font-medium mb-2 w-full text-gray-900 dark:text-gray-100">
                {title}
              </h4>
              <p className="text-gray-500 text-left md:text-right w-32 mb-4 md:mb-0">
                {date}
              </p>
            </div>
            <p className="text-gray-600 dark:text-gray-400">{summary}</p>
          </div>
        </a>
      </Link>
    </div>
  );
};
export default BlogCardRedesign;
