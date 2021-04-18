import { Wrapper } from '@src/components/Wrapper';
import React from 'react';

interface GetInTouchProps {

}

export const GetInTouch: React.FC<GetInTouchProps> = () => {
  return (
    <Wrapper>
      <div className="max-w-lg">
        <h1 className="text-4xl text-left md:leading-10 tracking-wide text-gray-700 mr-2 sm:text-md ml-4 leading-10 dark:text-gray-300 font-bold mb-5">
          Get In Touch
        </h1>
        <h3 className="text-1xl text-left md:leading-10 tracking-wide text-gray-700 mr-2 sm:text-md ml-4 leading-10 dark:text-gray-300  mb-5">
          I'm not currently looking for new roles however I'm always open to considering new opportunities / projects !
        </h3>
        <div className="flex flex-col items-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button">
            <a href="mailto:luke.howsam@yahoo.com" rel="noopener noreferrer" target="_blank" className="text-black dark:text-white hover:underline">Say Hello</a>
          </button>
        </div>
      </div>
    </Wrapper>
  );
};
