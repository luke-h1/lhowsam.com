import { ProjectPost } from '@src/types';
import Link from 'next/link';
import React from 'react';

const ProjectCard = ({
  title, summary, slug, tags,
}: ProjectPost) => {
  return (
    <>
      <Link href={`/projects/${slug}`}>
        <a className="border border-grey-200 dark:border-gray-900 rounded p-4 w-full mb-4">
          <h3 className="text-lg font-bold text-left mt-2 text-gray-900 dark:text-gray-100">
            {title}
          </h3>
          <p className="mt-1 text-gray-700 dark:text-gray-400 mb-3">
            {summary && summary}
          </p>
          <div className="flex">
            {tags
              && tags.map((tag) => (
                <div className="text-md inline-flex items-left leading-sm  px-1 py-0.5 bg-orange-200 text-orange-700 rounded-full">
                  <p className="text-gray-700 ml-1 mr-1">
                    #
                    {' '}
                    {' '}
                    {tag}
                  </p>
                </div>
              ))}
          </div>
        </a>
      </Link>
    </>
  );
};
export default ProjectCard;
