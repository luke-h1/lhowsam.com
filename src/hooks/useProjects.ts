import { graphql, useStaticQuery } from 'gatsby';

const useProjects = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allProjectsJson {
        nodes {
          excerpt
          id
          title
          body
        }
      }
    }
  `);
  return data.allProjectsJson.nodes.map(project => ({
    excerpt: project.excerpt,
    id: project.id,
    title: project.title,
    body: project.body,
  }));
};
export default useProjects;