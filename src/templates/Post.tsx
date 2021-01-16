import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { MDXRenderer } from 'gatsby-plugin-mdx';

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        date
        description
        slug
        title
      }
      body
    }
  }
`;

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 25vh;
  margin-bottom: 4rem;
`;

const PostTitle = styled.h1`
  color: ${props => props.theme.darkTextColor};
`;

const ContentWrapper = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p { 
    font-size: 18px;
    margin: 15px 0 15px 0;
  }
`;

const Small = styled.p`
  color: ${(props) => props.theme.greyTextColor};
  text-align: center;
  margin-bottom: 4rem;
`

const Post = ({ data: { mdx: post } }) => {
  return (
    <Layout>
      <SEO title={post.frontmatter.title} description={post.frontmatter.description || post.excerpt} />
      <PostWrapper>
        <PostTitle>{post.frontmatter.title}</PostTitle>
        <Small>{post.frontmatter.date}</Small>
        <ContentWrapper><MDXRenderer>{post.body}</MDXRenderer></ContentWrapper>
      </PostWrapper>
    </Layout>
  );
};
export default Post;
