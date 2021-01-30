import React, { FunctionComponent } from 'react';
import { parseISO, format } from 'date-fns';
import { NextSeo } from 'next-seo';
import styled from 'styled-components';
import ShareButtons from '../components/ShareButtons';
import Layout from '../components/Layout/Layout';

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 25vh;
  padding-left: 4rem;
  padding-right: 4rem;
  margin: 0 auto;
  max-width: 900px;
  h1 {
    text-align: left;
    width: 80%;
    @media(max-width: 860px){
      text-align: center;
      width: 100%;
    }
  }
  pre { 
    white-space: pre-wrap;
    tab-size: 6;
    background: #F2F2F2;
    color: #000;
    padding: 1.2rem;
    text-align: left;
  }
  ul { 
    text-align: left;
    width: 50%;
    margin: 0 auto;
    @media(max-width: 450px){
      li { 
        margin: 1.2rem 0 1.2rem 1.2rem;
      }
      text-align: center;
      width: 100%;
    }
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
    @media(max-width: 860px){
      text-align: center;
      width: 700px;
    }
    @media(max-width: 730px){
      width: 550px;
    }
    @media(max-width: 600px){
      width: 450px;
    }
    @media(max-width: 450px){
      width: 350px;
      margin: 0 auto;
      text-align: center !important;
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
  color: #000;
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
      <PostWrapper>
        <PostTitle>{frontMatter.title}</PostTitle>
        <Small>{format(parseISO(frontMatter.date), 'MMMM dd, yyyy')}</Small>
        <ReadingTime>{frontMatter.readingTime.text}</ReadingTime>
        <ContentWrap>
          <p>{children}</p>
        </ContentWrap>
      </PostWrapper>

      <ShareWrapper>
        <ShareButtons location={`https://lhowsam.com/blog/${frontMatter.slug}`} />
      </ShareWrapper>
    </>
  );
};
export default Post;
