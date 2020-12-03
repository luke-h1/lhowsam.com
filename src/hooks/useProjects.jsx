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
        }
      }
    }
  }  
`);
  return data.allProjectsJson.edges.map((project) => ({
    title: project.node.title
  }))
};
export default useProjects;
