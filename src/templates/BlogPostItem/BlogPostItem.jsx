/* eslint-disable */ 
import React from 'react';
import {graphql} from 'gatsby';
import SEO from '../../components/seo';
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
Intro,
Date,
} from './BlogPostItemElements';

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      body
    }
  }
  
`

const Renderer = styled(MDXRenderer)`
`


const BlogPostItem = ({data: {mdx: post }}) => (
  <Layout>
    <BlogPostWrapper>
    <SEO title={`${post.frontmatter.title} | blog` } />
      <Wrapper>
        <Title>{post.frontmatter.title}</Title>
        <Date>{post.frontmatter.date}</Date>
        <Blog />
        <Blog>
        <Renderer>{post.body}</Renderer>     
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
