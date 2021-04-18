import Link from 'next/link';
import React from 'react';

const ProjectCard = () => {
  return (
    <>
      <div className="max-w-md rounded-lg px-2 focus:ring mx-auto w-full border-2 hover:ring-1 mb-6" key="1">
        <Link href="/blog/">
          <a className="p-2 w-full">
            <div className="mb-3">
              <div className="flex flex-col md:flex-row justify-left">
                <h4 className="text-lg md:text-xl font-medium mb-2 text-gray-900 dark:text-gray-300">
                  title
                </h4>
              </div>
              <p className="text-gray-600 dark:text-gray-500 mb-3 text-left">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni exercitationem ex tempora, quidem perferendis, a fuga iste quam illo, pariatur ipsam ipsa. Doloribus quas distinctio sapiente blanditiis facilis, doloremque esse.
              </p>
              <div className="flex flex-col">
                <p className="text-left text-gray-400 mb-4 ">
                  {' '}
                  date
                </p>
              </div>
            </div>
          </a>
        </Link>
      </div>
    </>
  );
};
export default ProjectCard;
