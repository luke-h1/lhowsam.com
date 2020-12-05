import { graphql, useStaticQuery } from 'gatsby';

const usePosts = () => {
  const data = useStaticQuery(graphql`
  {
    allMdx {
      edges {
        node {
          slug 
          excerpt
          timeToRead
          excerpt
          frontmatter {
            title
            date
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
