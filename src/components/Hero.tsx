import React from 'react';
import cx from 'clsx';
import Image from 'next/image';

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Image
            className={cx(
              'lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded-lg',
            )}
            width={250}
            height={270}
            alt="hero"
            src="/images/luke.png"
            placeholder="blur"
            blurDataURL="/images/luke.png"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1
            className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"
            data-testid="hey"
          >
            Hey,
            {' '}
            {/* <br className="hidden lg:inline-block" /> */}
            I'm Luke
          </h1>
          <p className="mb-8 leading-relaxed" data-testid="short-intro">
            I enjoy working on big projects and thinking about how solutions can
            be implemented in order to build scalable & maintainable software. I
            currently work as a software tester where I do a mixture of manual &
            automated testing in an agile environment
          </p>
          <div className="flex justify-center" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
