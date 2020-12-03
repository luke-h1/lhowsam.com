import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Blog from '../components/Blog/Blog';

const blog = ({ data, location, theme }) => {
  const siteTitle = data.site.siteMetadata.title || 'Luke H';

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />
      <Blog theme={theme} />
    </Layout>
  );
};

export default blog;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`;
