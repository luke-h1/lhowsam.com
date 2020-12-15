/* eslint-disable */
exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic("failed to create posts", result.errors)
  }

  const posts = result.data.allMdx.nodes

  posts.forEach(post => {
    actions.createPage({
      path: post.frontmatter.slug,
      component: require.resolve(
        "./src/templates/BlogPostItem/BlogPostItem.jsx"
      ),
      context: {
        slug: post.frontmatter.slug,
      },
    })
  })
}

/* Project dynamic creation */

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allProjectDataJson {
        edges {
          node {
            id
            title
            slug
            label
            githubLink
            siteLink
            image {
              sharp: childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic("failed to create projects", result.errors)
  }

  const projects = result.data.allProjectDataJson.edges

  projects.forEach(({ node: project }) => {
    const { slug, id, image, githubLink, siteLink } = project

    actions.createPage({
      path: `${slug}`,
      component: require.resolve("./src/templates/ProjectPage/ProjectPage.jsx"),
      context: {
        slug,
        image,
        siteLink,
        githubLink,
        id,
      },
    })
  })
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `)
}
