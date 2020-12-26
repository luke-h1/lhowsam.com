/* eslint-disable */
import React from "react"
import {graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components';

import {
  StyledArticle,
  StyledHeader,
  StyledSection,
  StyledLink,
  
} from './BlogPostElements.jsx';
import { MDXRenderer } from "gatsby-plugin-mdx";

export const query = graphql`
  query($slug: String!){
    mdx(frontmatter: { slug: { eq: $slug } }){
      frontmatter { 
        title 
      }
      body
    }
  }
`




const ProjectTemplate = ({ data: { mdx: project }}) => {
  // const project = data.allProjectDataJson
  // const { previous, next } = data

  return (
    <Layout location={location}>
      <SEO
        title={project.frontmatter.title}
        // description={project.edges.node.description || project.excerpt}
      />
      <StyledArticle>
        <StyledHeader>
          <h1 itemProp="headline">{project.frontmatter.title}</h1>
          {/* <p>{project.edges.node.date}</p> */}
        </StyledHeader>

        <StyledSection
          // dangerouslySetInnerHTML={{ __html: project.body }}
          itemProp="articleBody"
        >
          <MDXRenderer>
            {project.body}
          </MDXRenderer>
        </StyledSection>
        <hr />
        <footer></footer>
        <nav className="blog-post-nav">
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            {/* <li>
              {previous && (
                <StyledLink to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </StyledLink>
              )}
            </li>
            <li>
              {next && (
                <StyledLink to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </StyledLink>
              )}
            </li> */}
          </ul>
        </nav>
      </StyledArticle>
    </Layout>
  )
}

export default ProjectTemplate;




// export const pageQuery = graphql`
//   query BlogPostBySlug(
//     $id: String!
//     $previousPostId: String
//     $nextPostId: String
//   ) {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     markdownRemark(id: { eq: $id }) {
//       id
//       excerpt(pruneLength: 160)
//       html
//       frontmatter {
//         title
//         date(formatString: "MMMM DD, YYYY")
//         description
//       }
//     }
//     previous: markdownRemark(id: { eq: $previousPostId }) {
//       fields {
//         slug
//       }
//       frontmatter {
//         title
//       }
//     }
//     next: markdownRemark(id: { eq: $nextPostId }) {
//       fields {
//         slug
//       }
//       frontmatter {
//         title
//       }
//     }
//   }
// `
