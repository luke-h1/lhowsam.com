import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { theme } from '../styles/Themes';
import About from "../components/About/About"

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `About`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Contact" />
     <About theme={theme} />
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query { 
    site { 
      siteMetadata { 
        title
      }
    }
  }
`;
