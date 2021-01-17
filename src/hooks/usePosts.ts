import { graphql, useStaticQuery } from 'gatsby';

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query getPosts {
      allMdx(filter: { fields: { slug: { ne: "/__do-not-remove/" } } }) {
        nodes {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD/MM/YYYY")
            excerpt
            tags
            title
          }
        }
      }
    }
  `);
  return data.allMdx.nodes.map(post => ({
    slug: post.fields.slug,
    date: post.frontmatter.date,
    excerpt: post.frontmatter.excerpt,
    tags: post.frontmatter.tags,
    title: post.frontmatter.title,
  }));
};
export default usePosts;
