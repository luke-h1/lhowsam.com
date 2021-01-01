/* eslint-disable */

import React from "react"
import {  graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
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
  // const siteTitle = data.site.siteMetadata?.title || `Title`

  export const pageQuery = graphql`
  query { 
    site { 
      siteMetadata { 
        title
      }
    }
  }
`;
