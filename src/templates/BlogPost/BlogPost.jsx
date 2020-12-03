/* eslint-disable */ 
import React from 'react';
import {graphql} from 'gatsby';
import styled from 'styled-components';
import ReadLink from '../../components/utils/ReadLink/ReadLink';
import {MDXRenderer} from 'gatsby-plugin-mdx';
import Layout from '../../components/layout'
export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
      }
      body
    }
  }
`


/* 
query { 
  allFile(filter: { sourceInstanceName: {eq: "projects"}}){
    nodes { 
      childMdx {
        frontmatter {
          title 
        }
      }
    }
  }
}
content/projects
content/posts

*/

const Styledp = styled.p`
  font-size: 0.75rem;
`; 

const BlogPost = ({data: {mdx: post }}) => (
  <Layout>
    <h1>{post.frontmatter.title}</h1>
    <Styledp>posted by author</Styledp>
        <MDXRenderer>{post.body}</MDXRenderer>
      <p>post body goes here</p>
      <ReadLink to='/'>Back to home </ReadLink>
  </Layout>
)
export default BlogPost;
