/* eslint-disable arrow-parens */
/* eslint-disable arrow-body-style */
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'Mdx') {
    // Create slug
    const slug = createFilePath({ node, getNode, basePath: '' });
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const postTemplate = path.resolve('src/templates/Post.tsx');
  const projectTemplate = path.resolve('src/templates/Project.tsx');

  const blog = await graphql(`
    query MyQuery {
      allMdx(sort: { fields: frontmatter___date }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              date
              draft
              excerpt
              tags
              title
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors);
    }
    // console.log(JSON.stringify(res, null, 4)) ///

    // Create pages & register paths
    const { edges } = res.data.allMdx;
    edges.forEach((edge, i) => {
      const { node } = edge;

      if (node.fields.slug !== '/__do-not-remove/') {
        createPage({
          path: node.fields.slug,
          component: postTemplate,
          context: {
            slug: node.fields.slug,
          },
        });
      }
    });
  });
  // query MyQuery {
  //   allProjectsJson {
  //     edges {
  //       node {
  //         body
  //         excerpt
  //         id
  //         slug
  //         title
  //       }
  //     }
  //   }
  // }
};

// // Get next available prev node that's not about, draft, and dummy post
// const getPrevAvailableNode = (edges, index) => {
//   let retVal;

//   for (let i = index; i < edges.length - 1; i++) {
//     if (!skipNode(edges[i].node)) {
//       retVal = edges[i].node;
//       break;
//     }
//   }
//   return retVal;
// };

// const getNextAvailableNode = (edges, index) => {
//   let retVal;

//   for (let i = index; i > 0; i--) {
//     if (!skipNode(edges[i].node)) {
//       retVal = edges[i].node;
//       break;
//     }
//   }
//   return retVal;
// };

// Skip node if it's about, draft, or dummy post

// const isAboutPage = node => {
//   return node.fields.slug === '/about/';
// };

// const isDraft = node => {
//   return node.frontmatter.draft === true;
// };

// const isDummy = node => {
//   return node.frontmatter.tags && node.frontmatter.tags.includes('___dummy*');
// };
