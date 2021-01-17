import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { MDXRenderer } from 'gatsby-plugin-mdx';

export const query = graphql`
query getPostsBlogPage($slug: String!) {
  mdx(fields: {slug: {eq: $slug}}) {
    body
    slug
    frontmatter {
      date
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
      <SEO title={post.title} description={post.description || post.excerpt} />
      <PostWrapper>
        <PostTitle>{post.title}</PostTitle>
        <Small>{post.date}</Small>
    <MDXRenderer>{post.body}</MDXRenderer>
      </PostWrapper>
    </Layout>
  );
};
export default Post;
