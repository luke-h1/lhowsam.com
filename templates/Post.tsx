import React, { FunctionComponent } from 'react';
import { parseISO, format } from 'date-fns';
import { NextSeo } from 'next-seo';
import ShareButtons from '@components/ShareButtons';
import StyledContainer from './StyledContainer';

interface Iprops {
  frontMatter: any;
  children: any;
}

const Post: FunctionComponent<Iprops> = ({ children, frontMatter }) => {
  return (
    <>
      <NextSeo
        title={`${frontMatter.title} | lhowsam.com`}
        canonical={`https://lhowsam.com/blog/${frontMatter.slug}`}
        openGraph={{
          url: `https://lhowsam.com/blog/${frontMatter.slug}`,
          title: `${frontMatter.title} | lhowsam.com`,
        }}
      />
      <StyledContainer>
        <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
            {frontMatter.title}
          </h1>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-2 mb-8">
            <div className="flex items-center">
              <p className="text-sm text-gray-700 dark:text-gray-300 ml-2">
                {format(parseISO(frontMatter.date), 'MMMM dd, yyyy')}
              </p>
            </div>
            <p className="text-sm text-gray-500 min-w-32 mt-2 md:mt-0">
              {frontMatter.readingTime.text}
              {' • '}
            </p>
          </div>
          <div className=" max-w-none w-full">
            {children}
          </div>
          <div className="mt-8" />
          <div className="text-sm text-gray-700 dark:text-gray-300">
            {/* edit url goes here */}
          </div>
        </article>

        {/* <main>
          <header>
            <h1 className="mb-7 mt-14 text-5xl font-black">
              {frontMatter.title}
            </h1>

            <p className="leading-7 mb-7 -mt-1">{frontMatter.date}</p>

            {frontMatter.readingTime.text}
            <br />
            <br />

            {format(parseISO(frontMatter.date), 'MMMM dd, yyyy')}
            <ShareButtons
              location={`https://lhowsam.com/blog/${frontMatter.slug}`}
            />
            <hr />
          </header>
          <article className="markdown prose">{children}</article>
        </main> */}
      </StyledContainer>
    </>
  );
};
export default Post;
