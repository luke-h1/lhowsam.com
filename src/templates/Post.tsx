import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import ShareButtons from '../components/ShareButtons';

export const query = graphql`
  query getPostsBlogPage($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      slug
      frontmatter {
        date(formatString: "DD/MM/YYYY")
        draft
        excerpt
        tags
        title
      }
    }
  }
`;

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 25vh;
  padding-left: 2rem;
  padding-right: 2rem;
  margin: 0 auto;
  max-width: 1000px;
  text-align: center;
  p {
    font-size: 19px;
    color: #000;
    margin: 20px 0 20px 0;
  }
  h1 {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
  h2,
  h3,
  h4,
  h5 {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

const PostTitle = styled.h1`
  color: ${props => props.theme.darkTextColor};
`;

const Small = styled.p`
  color: #7a7a7a !important;
  text-align: center;
  margin-top: 1.5rem;
  margin-bottom: 2rem;
`;
const url = typeof window !== 'undefined' ? window.location.href : '';

const ShareWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const Post = ({ data: { mdx: post } }) => {
  return (
    <Layout>
      <SEO title={post.title} description={post.description || post.excerpt} />
      <PostWrapper>
        <PostTitle>{post.frontmatter.title}</PostTitle>
        <Small>{post.frontmatter.date}</Small>
        <MDXRenderer>{post.body}</MDXRenderer>
      </PostWrapper>
      <ShareWrapper>
        <ShareButtons location={url} />
      </ShareWrapper>
    </Layout>
  );
};
export default Post;
