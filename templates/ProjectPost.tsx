import React, { FunctionComponent } from 'react';
import { NextSeo } from 'next-seo';
import styled from 'styled-components';
import ShareButtons from '@components/ShareButtons';
import Github from '@icons/Github';
import Site from '@icons/Site';

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 25vh;
  padding-left: 4rem;
  padding-right: 4rem;
  margin: 0 auto;
  max-width: 1000px;
  h1 {
    text-align: left;
    width: 80%;
  }
  pre { 
    white-space: pre-wrap;
    tab-size: 6;
    background: #F2F2F2;
    color: #000;
    padding: 1.2rem;
  }
`;

const ContentWrap = styled.div`
  h1 {
    margin-bottom: 1rem;

    font-size: 30px;
  }
  p {
    font-size: 19px;
    color: #000;
    margin: 40px 0 40px 0;
    text-align: center;
  }
`;

const Social = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PostTitle = styled.h1`
  color: ${(props) => props.theme.darkTextColor};
  text-align: center !important;
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
  color: #000;
  margin-bottom: 1.5rem;
`;

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
      <PostWrapper>
        <PostTitle>{frontMatter.title}</PostTitle>
        <ReadingTime>{frontMatter.readingTime.text}</ReadingTime>
        <Social>
          {frontMatter.github ? <Github url={frontMatter.github} /> : null}
          {frontMatter.site ? <Site url={frontMatter.site} /> : null}
        </Social>
        <ContentWrap>
          <p>{children}</p>
        </ContentWrap>
      </PostWrapper>

      <ShareWrapper>
        <ShareButtons location={`https://lhowsam.com/projects/${frontMatter.slug}`} />
      </ShareWrapper>
    </>
  );
};
export default ProjectPost;
