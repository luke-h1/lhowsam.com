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
        <main>
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
        </main>
      </StyledContainer>
    </>
  );
};
export default Post;
