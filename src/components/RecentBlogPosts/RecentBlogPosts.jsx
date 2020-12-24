/* eslint-disable */
import React from "react"

import {
  BlogWrapper,
  BlogList,
  BlogArticle,
  BlogHeader,
  BlogLink,
  BlogSection,
} from "./RecentBlogPostsElements"

const RecentBlogPosts = () => {
  const posts = data.allMarkdownRemark.nodes
  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="All posts" />
        <Hero theme={theme} />
        <RecentBlogPosts theme={theme} />
        {/* <Bio /> */}
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }
  return (
    <>
      <BlogWrapper>
        {posts.map(post => {
          ;<BlogList key={post.fields.slug}>
            <BlogArticle>
              <BlogHeader>
                <h2>
                  <BlogLink to={post.fields.slug}>
                    <span>{title}</span>
                  </BlogLink>
                </h2>
                <small>{post.frontmatter.date}</small>
              </BlogHeader>
              <BlogSection>
                <p
                  dangerouslySetInnerHTML={{
                    __html: post.frontmatter.description || post.excerpt,
                  }}
                ></p>
              </BlogSection>
            </BlogArticle>
          </BlogList>
        })}
      </BlogWrapper>
    </>
  )
}
export default RecentBlogPosts

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
`
