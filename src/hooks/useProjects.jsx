/* eslint-disable */
import { graphql, useStaticQuery } from 'gatsby';

const useProjects = () => {
  const data = useStaticQuery(graphql`
  {
    allProjectsJson {
      edges {
        node {
          id
          slug
          title
          githubLink
          siteLink
          technologies
          description
          image {
            publicURL
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`);
  return data.allProjectsJson.edges.map((project) => ({
    id: project.node.id,
    githubLink: project.node.githubLink,
    description: project.node.description,
    siteLink: project.node.siteLink,
    slug: project.node.slug,
    technologies: project.node.technologies,
    title: project.node.title,
    image: project.image
  }));
};
export default useProjects;


