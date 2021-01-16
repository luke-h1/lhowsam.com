import { graphql, useStaticQuery } from 'gatsby';

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query getPosts {
      allMdx {
        edges {
          node {
            frontmatter {
              date
              description
              slug
              title
            }
          }
        }
      }
    }
  `);
  return data.allMdx.edges.map(post => ({
    date: post.node.frontmatter.date,
    description: post.node.frontmatter.description,
    slug: post.node.frontmatter.slug,
    title: post.node.frontmatter.title,
  }));
};
export default usePosts;
