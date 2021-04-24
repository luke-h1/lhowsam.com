import React, { FunctionComponent } from 'react';
import { parseISO, format } from 'date-fns';
import { NextSeo } from 'next-seo';
import ShareButtons from '@src/components/ShareButtons';
import { BlogPost } from '@src/types';
import { CustomHead } from '@src/components/CustomHead';

interface Iprops {
  children: React.ReactNode;
  frontMatter: BlogPost;
}

const BlogLayout: FunctionComponent<Iprops> = ({ children, frontMatter }) => {
  return (
    <>
      <CustomHead
        title={`Blog | ${frontMatter.title}`}
        description={`${frontMatter.summary}`}
        image={`${frontMatter.ogImage && frontMatter.ogImage}`}
      />
      <div className="max-w-lg w-full p-2 min-h-screen h-full">
        <NextSeo
          title={`${frontMatter.title}`}
          canonical={`https://lhowsam.com/blog/${frontMatter.slug}`}
          openGraph={{
            url: `https://lhowsam.com/blog/${frontMatter.slug}`,
            title: `${frontMatter.title}`,
          }}
        />
        <div className="flex flex-col justify-center mb-5">
          <h1 className="text-3xl dark:text-gray-300">{frontMatter.title}</h1>
        </div>
        <div className="flex flex-col justify-between mt-2 mb-5">
          <p className="text-sm text-gray-500 mt-2 mb-2 dark:text-gray-300">
            Published:
            {' '}
            {format(parseISO(frontMatter.date), 'MMMM dd, yyyy')}
          </p>
        </div>
        <p className="text-sm	text-gray-500 mt-2 mb-2 dark:text-gray-300">
          {frontMatter.readingTime.text}
        </p>
        <hr />
        <div className="prose dark:prose-dark max-w-none w-full">
          <p className="text-lg mt-4 mb-4 leading-10 tracking-wider dark:text-gray-300 prose dark:prose-dark max-w-none w-full">
            {children}
          </p>
        </div>
        <div className="flex flex-col align-center items-center">
          <ShareButtons
            location={`https://lhowsam.com/blog/${frontMatter.slug}`}
          />
        </div>
      </div>
    </>
  );
};
export default BlogLayout;
