/* eslint-disable */
import React, { FunctionComponent } from 'react';
import { parseISO, format } from 'date-fns';
import { NextSeo } from 'next-seo';
import styled from 'styled-components';
import ShareButtons from '@components/ShareButtons';

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 25vh;
  padding: 0 4rem 0 4rem;
  margin: 0 auto;
  max-width: 900px;
  h1 {
    text-align: left;
    margin: 3rem 0 3rem 0;
    @media (max-width: 860px) {
      text-align: center;
      width: 100%;
    }
  }
  pre {
    white-space: pre-wrap;
    tab-size: 2;
    background: #f2f2f2;
    color: #000;
    padding: 1.2rem;
    text-align: left;
  }
  li {
    list-style-type: none;
    text-align: left;
    margin: 0 auto;
  }
`;

const ContentWrap = styled.div`
  h1 {
    font-size: 30px;
    @media (max-width: 650px) {
      font-size: 20px;
    }
  }
  p {
    font-size: 19px;
    color: #000;
    margin: 2rem 0 2rem 0;
    text-align: center;
    @media (max-width: 650px) {
      width: 100%;
      font-size: 16px;
      word-break: break-all;
    }
  }
`;

const PostTitle = styled.h1`
  color: ${(props) => props.theme.darkTextColor};
  text-align: center !important;
`;

const Small = styled.p`
  color: #000 !important;
  text-align: center;
  margin-top: 1.5rem;
  margin-bottom: 2rem;
`;

const ShareWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 4rem;
`;

const ReadingTime = styled.p`
  color: #a09ea9;
  font-size: 17px;
  margin-bottom: 1.5rem;
`;

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
      <div className="container-lg">
        <div className="mb-8 w-full">
          <div className="flex-col  px-8 py-8 flex-wrap md:flex-row justify-center">
            <h1 className="text-lg md:text-xl font-medium mb-2 text-center w-full text-gray-900 dark:text-gray-100">
              {frontMatter.title}
            </h1>
            <div className="flex-col justify-center align-center max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm justify-items-center m-auto">
              <p className="text-gray-600 dark:text-gray-400 mb-4 mt-4 text-lg">
                {children}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Post;
