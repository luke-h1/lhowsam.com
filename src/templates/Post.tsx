import React from 'react';
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

const Post = ({ data: { mdx: post } }) => {
  return (
    <Layout>
      <SEO title={post.frontmatter.title} description={post.frontmatter.description || post.excerpt} />
      <p>
        <MDXRenderer>{post.body}</MDXRenderer>
      </p>
    </Layout>
  );
};
export default Post;
