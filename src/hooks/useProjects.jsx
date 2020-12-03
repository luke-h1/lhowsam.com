import { graphql, useStaticQuery } from 'gatsby';

const useProjects = () => {
  const data = useStaticQuery(graphql`
  query MyQuery {
    allProjectsJson {
      edges {
        node {
          id
          githubLink
          description
          siteLink
          slug
          techonologies
          title
          image
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
// TODO: FIX IMAGES HERE 
  }));
};
export default useProjects;
