/* eslint-disable */

import React from "react"
import { Link, graphql } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from '../components/Hero/Hero';
import { theme } from '../styles/Themes';
import Blog from "../components/Blog/Blog"
const BlogPage = ({ data, location } ) => {
  const siteTitle = data.site.siteMetadata.title || `Title`
  // const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Blog" />
      <Blog theme={theme} />
    </Layout>
  )
}
export default BlogPage
  // const posts = data.allMarkdownRemark.nodes

  export const pageQuery = graphql`
  query { 
    site { 
      siteMetadata { 
        title
      }
    }
  }
`;
