import { graphql, useStaticQuery } from 'gatsby';

const useProjectDetails = () => {
  const data = useStaticQuery(graphql`
  query {
    allProjectDataJson {
      edges {
        node {
          id
          title
          slug
          label
          githubLink
          siteLink
          image {
            sharp: childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp

              }
            }
          }
        }
      }
    }
  }
  `);
  return data.allProjectDataJson.edges.map((project) => ({
    id: project.node.id,
    title: project.node.title,
    slug: project.node.slug,
    label: project.node.label,
    image: project.node.image,
  }));
};
export default useProjectDetails;
