/* eslint-disable */
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import {
  StyledArticle,
  StyledHeader,
  StyledSection,
  StyledLink,
  IconWrapper,
  GithubLink,
  SiteLink,
  StyledA,
  StyledP,
  StyledH1,
  WrapImage,
} from "./BlogPostElements.jsx"
import { MDXRenderer } from "gatsby-plugin-mdx"



export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        siteLink
        githubLink
        image {
           childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      body
    }
  }
`

const ProjectTemplate = ({ data: { mdx: project } }) => {
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
          <StyledH1>{project.frontmatter.title}</StyledH1>
          <IconWrapper>
              {project.frontmatter.siteLink !== "" ? (
                <a href={project.frontmatter.siteLink}>
                  <SiteLink />
                </a>
              ) : (
                ""
              )}
              {project.frontmatter.githubLink !== "" ? (
                <a href={project.frontmatter.githubLink}>
                  <GithubLink />
                </a>
              ) : (
                ""
              )}
            </IconWrapper>
          {/* <p>{project.edges.node.date}</p> */}
          <WrapImage>
            </WrapImage>
        </StyledHeader>

        <StyledSection
          // dangerouslySetInnerHTML={{ __html: project.body }}
          itemProp="articleBody"
        >
          <StyledP>
            <MDXRenderer>{project.body}</MDXRenderer>
          </StyledP>
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
            {/* <IconWrapper>
              {project.frontmatter.siteLink !== "" ? (
                <a href={project.frontmatter.siteLink}>
                  <SiteLink />
                </a>
              ) : (
                ""
              )}
              {project.frontmatter.githubLink !== "" ? (
                <a href={project.frontmatter.githubLink}>
                  <GithubLink />
                </a>
              ) : (
                ""
              )}
            </IconWrapper> */}
          </ul>
        </nav>
        
        <StyledLink to='/projects'
          style={{ 
              marginTop: '2.5rem',
              fontSize: '19px'

           }}
        >Back to projects</StyledLink>
      </StyledArticle>
    </Layout>
  )
}

export default ProjectTemplate

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
