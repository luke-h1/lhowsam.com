import { graphql, useStaticQuery } from 'gatsby';

const usePosts = () => {
  const data = useStaticQuery(graphql`
  {
    allMdx {
      edges {
        node {
          excerpt
          timeToRead
          excerpt
          frontmatter {
            title
            date
            slug 
          }
        }
      }
    }
  }
  
`);

  return data.allMdx.edges.map((post) => ({
    title: post.node.frontmatter.title,
    date: post.node.frontmatter.date,
    slug: post.node.frontmatter.slug,
    excerpt: post.node.excerpt,
    timeToRead: post.node.timeToRead,
  }));
};
export default usePosts;
