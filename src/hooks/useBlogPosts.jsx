// import { graphql, useStaticQuery } from 'gatsby';

// const usePosts = () => {
//   const data = useStaticQuery(graphql`
//   query {
//     allMdx {
//       nodes {
//         frontmatter {
//           title
//           author
//           slu
//         excerpt
//       }
//     }
//   }
// } 
// `);

//   return data.allMdx.nodes.map((post) => ({
//     title: post.frontmatter.title,
//     author: post.frontmatter.author,
//     slug: post.frontmatter.slug,
//     excerpt: post.excerpt,
//     image: post.frontmatter.image,
//   }));
// };
// export default usePosts;
