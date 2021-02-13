import React, { FC } from 'react';
import Link from 'next/link';

//   @media (max-width: 550px) {
//     width: 350px;
//   }
// `;

interface Iprops {
  title: string;
  summary: string;
  slug: string;
}

const ProjectCard: FC<Iprops> = ({ title, summary, slug }) => {
  return (
    <>
      <Link href={`/projects/${slug}`}>
        <a>
          <div className="justify-center align-center p-3 mb-4 mt-4  min-w-sm min-h-md max-w-sm  text-left border-black-500 border-opacity-500  rounded-md border-2 ">
            <h3 className="text-left mb-1 ">{title}</h3>
            <p>{summary}</p>
          </div>
        </a>
      </Link>
    </>
  );
};
export default ProjectCard;
