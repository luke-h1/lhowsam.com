import { graphql, useStaticQuery } from 'gatsby';

const useProjectImages = () => {
  const data = useStaticQuery(graphql`
  query  {
    allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, relativeDirectory: {eq: "project-images"}}) {
      edges {
        node {
          id
          name
          childImageSharp {
            fluid {
              srcWebp
            }
          }
        }
      }
    }
  }
  `);
  return data.allFile.edges.map((image) => ({
    image: image.node.childImageSharp.fluid.srcWebp,
  }));
};
export default useProjectImages;
