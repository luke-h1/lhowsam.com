/* eslint-disable */ 
import React from 'react';
import {graphql} from 'gatsby';
import styled from 'styled-components';
import Layout from '../../components/layout';
import {MDXRenderer} from 'gatsby-plugin-mdx';
import {
Blog,
BlogLink,
BlogLinkWrap,
BlogPostWrapper,
Wrapper,
Title,
Intro
} from './BlogPostItemElements';

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


const BlogPostItem = ({data: {mdx: post }}) => (
  <Layout>
    <BlogPostWrapper>
      <Wrapper>
        <Title>{post.frontmatter.title}</Title>
        <Intro>Hello</Intro>
        <Blog />
        <Blog>
        <MDXRenderer>{post.body}</MDXRenderer>     
          </Blog>
        <BlogLinkWrap>
          <BlogLink to="/blog">Back to Blog</BlogLink>
          <BlogLink to="/">Back to Home</BlogLink>
        </BlogLinkWrap>
      </Wrapper>
      </BlogPostWrapper>
  </Layout>
)
export default BlogPostItem;
