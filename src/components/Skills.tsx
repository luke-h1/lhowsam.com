import React from 'react';
import { Skills } from '../data/skills';

export const SkillsSection: React.FC<{}> = () => {
  return (
    <div className="flex flex-col items-left justify-left">
      <div className="flex flex-col items-left max-w-md w-full">
        <p className="md:leading-10 text-3xl tracking-wide text-left text-gray-700 mr-2 sm:text-md ml-4 leading-10 mb-4">
          Skills
        </p>
        <p className="md:text-1xl mb-12 sm:text-md text-left ml-2">
          I'm always expanding my technical skills by learning new tech. The
          following is a list of technology I'm interested in / what I'm
          actively working with !
        </p>
      </div>
      <div className="max-w-xl w-full">
        <div className="flex flex-wrap  -mb-5 pb-8">
          {Skills
            && Skills.map((s) => (
              <div className="w-1/3 mb-4 h-12" key={s.id}>
                <p className="mr-4 ml-4 text-left">{s.name}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
