import { graphql, useStaticQuery } from 'gatsby';

const useRecentPosts = () => {
  const data = useStaticQuery(graphql`
    query getRecentPosts {
      allMdx(limit: 3) {
        edges {
          node {
            frontmatter {
              date
              description
              slug
              title
            }
            body
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
export default useRecentPosts;
