import { FunctionComponent } from 'react';
import { NextSeo } from 'next-seo';
import ShareButtons from '@components/ShareButtons';
import Github from '@icons/Github';
import Site from '@icons/Site';
import { css } from '@emotion/react';
import StyledContainer from './StyledContainer';

interface Iprops {
  children: any;
  frontMatter: any;
}

const ProjectPost: FunctionComponent<Iprops> = ({ children, frontMatter }) => {
  return (
    <>
      <NextSeo
        title={`${frontMatter.title} | lhowsam.com`}
        canonical={`https://lhowsam.com/projects/${frontMatter.slug}`}
        openGraph={{
          url: `https://lhowsam.com/projects/${frontMatter.slug}`,
          title: `${frontMatter.title} | lhowsam.com`,
        }}
      />
      <StyledContainer>
        <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
            {frontMatter.title}
          </h1>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-2 mb-10">
            <ShareButtons
              location={`https://lhowsam.com/projects/${frontMatter.slug}`}
            />

            <div className="flex items-center">
              <p className="text-sm text-gray-700 dark:text-gray-300 flex mt-5">
                {frontMatter.github && <Github url={frontMatter.github} />}
                {frontMatter.site && <Site url={frontMatter.site} />}
              </p>
            </div>

            <p className="text-sm text-gray-500 min-w-32 mt-2 md:mt-0">
              {' • '}
              {frontMatter.readingTime.text}
            </p>
            <hr />
          </div>
          <div className=" max-w-none w-full">{children}</div>
          <div className="mt-8" />
          <div className="text-sm text-gray-700 dark:text-gray-300">
            {/* edit url goes here */}
          </div>
        </article>
      </StyledContainer>
    </>
  );
};
export default ProjectPost;
