import { BlogPost } from '@src/types';
import Link from 'next/link';
import React from 'react';

const BlogCard = ({
  title, summary, slug, date, tags,
}: BlogPost) => {
  return (
    <div className="w-full max-w-xl mx-auto border border-grey-200 dark:border-gray-900 rounded p-4 w-full mb-4">
      <Link href={`/blog/${slug}`}>
        <a className="p-2 w-full mb-4">
          <div className="mb-8 w-full">
            <div className="flex flex-col md:flex-row justify-between">
              <h4 className="text-lg md:text-xl font-medium mb-2 w-full text-gray-900 dark:text-gray-100">
                {title}
              </h4>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-3">{summary}</p>
            <div className="flex flex-col">
              <p className="text-gray-700 text-left w-32 mb-4">
                {date}
              </p>

            </div>
            <div className="flex">
              {tags
                && tags.map((tag) => (
                  <div className="text-md inline-flex items-left leading-sm  px-1 py-0.5 bg-orange-200 text-orange-700 rounded-full">
                    <p className="text-gray-700">
                      #
                      {' '}
                      {' '}
                      {tag}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};
export default BlogCard;
