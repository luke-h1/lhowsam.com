import React from 'react';
import { Skills } from '../data/skills';

export const SkillsSection: React.FC<{}> = () => {
  return (
    <div className="flex flex-col items-left justify-left">
      <div className="flex flex-col items-left max-w-md w-full">
        <p className="md:leading-10 text-3xl tracking-wide text-left text-gray-700 mr-2 sm:text-md ml-4 leading-10 mb-4">
          Skills
        </p>
        <p className="md:leading-10 text-1xl tracking-medium text-left text-gray-700 mr-2 sm:text-md ml-4 leading-10 mb-4">
          I'm always expanding my technical skills by learning new tech. The
          following is a list of technology I'm interested in / what I'm
          actively working with !
        </p>
      </div>
      <div className="max-w-md w-full text-left">
        <div className="flex flex-wrap -mb-5 py-4 align-left justify-left">
          {Skills
            && Skills.map((s) => (
              <div className="flex w-1/2 mb-2 h-10" key={s.id}>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded text-center w-full ml-4 mr-4"
                  type="button"
                >
                  {s.name}
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
