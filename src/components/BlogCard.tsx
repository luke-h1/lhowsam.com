import { BlogPost } from '@src/types';
import { format, parseISO } from 'date-fns';
import Link from 'next/link';
import React from 'react';

const BlogCard = ({
  title, summary, slug, date, tags,
}: BlogPost) => {
  return (
    <>
      <div
        className="max-w-md rounded focus:ring hover:border-blue-600 mx-auto w-full"
        key={slug}
      >
        <Link href={`/blog/${slug}`}>
          <a className="p-2 w-full">
            <div className="mb-3">
              <div className="flex flex-col md:flex-row justify-left">
                <h4 className="text-lg md:text-xl font-medium mb-2 text-gray-900 dark:text-gray-300">
                  {title}
                </h4>
              </div>
              <p className="text-gray-600 dark:text-gray-500 mb-3 text-left">
                {summary}
              </p>
              <div className="flex flex-col">
                <p className="text-left text-gray-400 mb-4 ">
                  {' '}
                  {format(parseISO(date), 'MMMM dd, yyyy')}
                </p>
              </div>
              <div className="flex">
                {tags
                  && tags.map((tag) => (
                    <div className="text-md inline-flex items-left leading-sm  px-1 py-0.5 bg-orange-200 text-orange-700 rounded-full">
                      <p className="text-gray-500 ml-1 mr-1 text-left dark:text-gray-400">
                        #
                        {tag}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          </a>
        </Link>
        <hr className="border border-solid" />
      </div>
    </>
  );
};
export default BlogCard;
