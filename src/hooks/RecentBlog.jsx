/* eslint-disable */
import { graphql, useStaticQuery } from "gatsby"

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark {
        edges {
          node {
            excerpt
            frontmatter {
              date
              description
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return data.allMarkdownRemark.edges.map(post => ({
    title: post.node.frontmatter.title,
    excerpt: post.node.excerpt,
    date: post.node.frontmatter.date,
    description: post.node.frontmatter.description,
    slug: post.node.fields.slug,
  }))
}
export default usePosts
