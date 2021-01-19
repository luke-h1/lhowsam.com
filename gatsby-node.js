/* eslint-disable */
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
    // eslint-disable-next-line
    console.log(JSON.stringify(res, null, 4));

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
};
