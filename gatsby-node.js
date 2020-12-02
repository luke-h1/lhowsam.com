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

// /* INDIVIDUAL PROJECT PAGE */
// exports.createPages = async ({ actions, graphql, reporter }) => {
//   const result = await graphql(
//     `
//       {
//         allProjects {
//           edges {
//             node {
//               slug
//               id
//               image {
//                 publicURL
//               }
//             }
//           }
//         }
//       }
//     `,
//   );

//   if (result.error) {
//     reporter.panic('Problem Loading Project');
//     return;
//   }

//   const projects = result.data.allProjects.edges;

//   projects.forEach(({ node: project }) => {
//     const { slug, id, image } = project;

//     actions.createPage({
//       path: `/projects/${slug}`,
//       component: require.resolve('./src/components/Project/Project.jsx'),
//       context: {
//         slug,
//         image,
//       },
//     });
//   });
// };

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
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
