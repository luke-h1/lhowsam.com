import { Skills } from '@src/shared/Skills';
import cx from 'clsx';
import React from 'react';

interface SkillsCardProps {}

const SkillsCard: React.FC<SkillsCardProps> = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Skills
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            At the moment I enjoy working with Next.js, GraphQL, SQL-based
            databases & various testing tools
          </p>
        </div>
        <div className="flex flex-wrap -m-2">
          {Skills
            && Skills.map((skill) => (
              <div className="p-2 lg:w-1/4 md:w-1/3 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img
                    className={cx(
                      'w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4',
                    )}
                    src={skill.src}
                    alt={skill.text}
                  />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      {skill.text}
                    </h2>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsCard;
