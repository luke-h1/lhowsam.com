const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const Post = path.resolve('./src/templates/Post.tsx');

  const result = await graphql(
    `
      query {
        allMdx {
          nodes {
            frontmatter {
              slug
            }
          }
        }
      }
    `,
  );
  if (result.errors) {
    reporter.panicOnBuild('There was an error loading your blog posts', result.errors);
    return;
  }

  const posts = result.data.allMdx.nodes;
  posts.forEach(post => {
    createPage({
      path: post.frontmatter.slug,
      component: Post,
      context: {
        slug: post.frontmatter.slug,
      },
    });
  });
};
