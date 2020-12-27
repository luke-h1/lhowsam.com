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
  StyledH1,
  StyledP,
} from "./BlogPostElements.jsx"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <StyledArticle>
        <StyledHeader>
          <StyledH1 itemProp="headline">{post.frontmatter.title}</StyledH1>
          <StyledP style={{ fontSize: "15px" }}>
            {post.frontmatter.date}
          </StyledP>
        </StyledHeader>
        <StyledSection
          style={{
            color: "#000",
            maxWidth: '80%',
          }}
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <hr />
        <br />
        <br />
        <br />
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
            <li>
              {previous && (
                <StyledLink to={`/blog${previous.fields.slug}`} rel="prev">
                  ← {previous.frontmatter.title}
                </StyledLink>
              )}
            </li>
            <li>
              {next && (
                <StyledLink to={`/blog${next.fields.slug}`} rel="next">
                  {next.frontmatter.title} →
                </StyledLink>
              )}
            </li>
          </ul>
        </nav>
      </StyledArticle>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
