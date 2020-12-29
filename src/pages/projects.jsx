/* eslint-disable */

import React from "react"
import {  graphql } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from '../components/Hero/Hero';
import { theme } from '../styles/Themes';
import Projects from '../components/Projects/Projects';
const ProjectPage = () => {
  return (
    <Layout >
      <SEO title="Home" />
      <Projects theme={theme} />
    </Layout>
  )
}
export default ProjectPage
// { data, location }
  // const siteTitle = data.site.siteMetadata?.title || `Title`
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
