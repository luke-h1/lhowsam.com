/* eslint-disable */
import React, { FunctionComponent } from "react";
import { parseISO, format } from "date-fns";
import { NextSeo } from "next-seo";
import ShareButtons from "@components/ShareButtons";
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
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="text-2xl md:text-5xl leading-4	 mb-4 text-black dark:text-white">
          {frontMatter.title}
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-2 mb-8">
          <div className="flex items-center">
            {format(parseISO(frontMatter.date), "MMMM dd, yyyy")}
          </div>
          <p className="text-sm text-gray-500 min-w-32 mt-2 md:mt-0">
            {" • "}
            {frontMatter.readingTime.text}
          </p>
        </div>
        <div className="prose  max-w-none w-full mt-4 mb-4 leading-8">
          {children}
        </div>

        <div className="text-sm text-gray-700 dark:text-gray-300 flex flex-col align-center justify-center mx-auto py-5">
          <ShareButtons
            location={`https://lhowsam.com/blog/${frontMatter.slug}`}
          />
        </div>
      </article>
    </>
  );
};
export default Post;
