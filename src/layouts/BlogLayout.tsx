import React, { FunctionComponent } from 'react';
import { parseISO, format } from 'date-fns';
import { NextSeo } from 'next-seo';
import ShareButtons from '@components/ShareButtons';

interface Iprops {
  frontMatter: any;
  children: any;
}

const BlogLayout: FunctionComponent<Iprops> = ({ children, frontMatter }) => {
  return (
    <>
      <div className="mb-4 max-w-xl w-full p-2">
        <NextSeo
          title={`${frontMatter.title} | lhowsam.com`}
          canonical={`https://lhowsam.com/blog/${frontMatter.slug}`}
          openGraph={{
            url: `https://lhowsam.com/blog/${frontMatter.slug}`,
            title: `${frontMatter.title} | lhowsam.com`,
          }}
        />
        <div className="flex flex-col justify-center mb-5">
          <h1 className="text-3xl">{frontMatter.title}</h1>
        </div>
        <div className="flex flex-col justify-between mt-2 mb-5">
          <p className="text-sm text-gray-500 mt-2 mb-2">
            {format(parseISO(frontMatter.date), 'MMMM dd, yyyy')}
          </p>
        </div>
        <p className="text-sm	text-gray-500 mt-2 mb-2">
          {frontMatter.readingTime.text}
        </p>
        <hr />
        {/* Text as="p" fontSize="20px" mt={2} mb={2} lineHeight="1.5" */}
        <p className="text-lg mt-4 mb-4 leading-10 tracking-wider">
          {children}
        </p>
        <div className="flex flex-col">
          <ShareButtons
            location={`https://lhowsam.com/blog/${frontMatter.slug}`}
          />
        </div>
      </div>
    </>
  );
};
export default BlogLayout;
