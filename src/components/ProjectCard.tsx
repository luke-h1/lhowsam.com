import { ProjectPost } from '@src/types';
import Link from 'next/link';
import React from 'react';
import { Wrapper } from './Wrapper';

const ProjectCard = ({
  title, summary, slug, tags,
}: ProjectPost) => {
  return (
    <Wrapper>
      <Link href={`/projects/${slug}`} key={slug}>
        <a className="sm:max-w-md w-full rounded mb-4 dark:text-white bg-white dark:bg-dark-100 focus:outline-none focus:ring hover:border-blue-600">
          <h3 className="text-lg font-bold text-left mt-2 text-gray-900 dark:text-gray-300">
            {title}
          </h3>
          <p className="mt-1 text-gray-600 dark:text-gray-500 mb-3 text-left">
            {summary && summary}
          </p>
          <div className="flex align-center items-center max-w-sm">
            {tags
              && tags.map((tag) => (
                <div className="text-md inline-flex items-left leading-sm px-1 py-0.5 bg-orange-200 text-orange-700 rounded-full flex-wrap-reverse max-w-sm">
                  <p className="text-gray-500 ml-1 mr-1 dark:text-gray-400 ">
                    #
                    {tag}
                  </p>
                </div>
              ))}
          </div>
        </a>
      </Link>
    </Wrapper>
  );
};
export default ProjectCard;
