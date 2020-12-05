/* eslint-disable */ 
import React from 'react';
import {graphql} from 'gatsby';
import styled from 'styled-components';
import Layout from '../../components/layout';
import {MDXRenderer} from 'gatsby-plugin-mdx';
export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      body
    }
  }
`
const Styledp = styled.p`
  font-size: 0.75rem;
`; 

const BlogPostItem = ({data: {mdx: post }}) => (
  <Layout>
    <h1>{post.frontmatter.title}</h1>
    <Styledp>posted by author</Styledp>
        <MDXRenderer>{post.body}</MDXRenderer>
      <p>post body goes here</p>
      <ReadLink to='/'>Back to home </ReadLink>
  </Layout>
)
export default BlogPostItem;
