import { graphql, useStaticQuery } from 'gatsby';

const usePosts = () => {
  const data = useStaticQuery(graphql`
  query {
    allMdx {
      nodes {
        frontmatter {
          title
          author
          slug
          image {
            sharp: childImageSharp {
              fluid(
                maxWidth: 550
                maxHeight: 550
              ) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        excerpt
      }
    }
  }
`);

  return data.allMdx.nodes.map((post) => ({
    title: post.frontmatter.title,
    author: post.frontmatter.author,
    slug: post.frontmatter.slug,
    excerpt: post.excerpt,
    image: post.frontmatter.image,
  }));
};
export default usePosts;

//
// {
//   allMdx {
//     nodes {
//       frontmatter {
//         title
//         author
//         slug
//         image {
//           childImageSharp {
//             fluid {
//               srcWebp
//             }
//           }
//         }
//       }
//     }
//   }
// }
