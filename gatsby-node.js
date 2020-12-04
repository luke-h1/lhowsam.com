/* eslint-disable */
/* BLOG POST PAGES */
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
  `);

  if (result.errors) {
    reporter.panic('failed to create posts', result.errors);
  }

  const posts = result.data.allMdx.nodes;

  posts.forEach((post) => {
    actions.createPage({
      path: `/blog/${post.frontmatter.slug}`,
      component: require.resolve('./src/templates/BlogPost/BlogPost.jsx'),
      context: {
        slug: post.frontmatter.slug,
      },
    });
  });
};


exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(
    `
      {
        allProjectsJson {
          edges {
            node {
              slug
              id
              image {
                publicURL
              }
            }
          }
        }
      }
    `
  )

  if (result.error) {
    reporter.panic("Problem Loading Project")
    return
  }

  const projects = result.data.allProjectsJson.edges

  projects.forEach(({ node: project }) => {
    const { slug, id, image } = project

    actions.createPage({
      path: `/${slug}`,
      component: require.resolve("./src/components/Projects/Projects.jsx"),
      context: {
        slug,
        image,
      },
    })
  })
}


exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
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
  `);
};
