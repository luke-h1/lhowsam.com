import Image from 'next/image';
import React from 'react';

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1
            className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"
            data-testid="hey"
          >
            Hey 👋, I'm Luke
          </h1>
          <p className="leading-relaxed mb-5" data-testid="short-intro">
            I like building and testing projects that are scalable, performant &
            user friendly
          </p>
          <p className="leading-relaxed mb-5" data-testid="short-intro2">
            I currently work as a software tester where I do a mixture of manual
            & automated testing in an agile environment
          </p>
          <div className="flex justify-center">
            <a
              href="https://github.com/luke-h1"
              target="_blank"
              rel="noreferrer"
            >
              <button
                className="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-gray-800	 rounded text-lg"
                type="button"
                aria-label="View Github"
              >
                View Github
              </button>
            </a>
            <a
              href="https://www.linkedin.com/in/lukehowsam"
              target="_blank"
              rel="noreferrer"
            >
              <button
                className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
                type="button"
                aria-label="View Linkedin"
              >
                View Linkedin
              </button>
            </a>
          </div>
        </div>
        <div className="lg:max-w-sm lg:w-full md:w-1/2 w-4/6">
          <Image
            src="/images/luke.jpeg"
            width={320}
            height={400}
            blurDataURL="/images/luke.jpeg"
            placeholder="blur"
            alt="profile picture"
          />
        </div>
      </div>
    </section>
  );
};
export default About;
