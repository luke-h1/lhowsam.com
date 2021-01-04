/* eslint-disable */

import React from "react"
import {  graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
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

  export const pageQuery = graphql`
  query { 
    site { 
      siteMetadata { 
        title
      }
    }
  }
`;
