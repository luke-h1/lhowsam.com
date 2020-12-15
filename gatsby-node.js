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

  const projects = result.data.allProjectDataJson.edges.node

  projects.forEach(({ node: project }) => {
    actions.createPage({
      path: `${project.slug}`,
      component: require.resolve("./src/templates/ProjectPage/ProjectPage.jsx"),
      context: {
        slug: project.slug,
        image: project.image,
        siteLink: project.siteLink,
        githubLink: project.githubLink,
        id: project.id,
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
