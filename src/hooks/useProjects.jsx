import { graphql, useStaticQuery } from 'gatsby';

const useProjects = () => {
  const data = useStaticQuery(graphql`
  {
    allProjectsJson {
      edges {
        node {
          id
          title
          githubLink
          siteLink
          image
          slug
          techonologies
          description
        }     }
    }
  }

`);

  return data.allProjectsJson.nodes.map((project) => ({
    title: project.title,
    slug: project.slug,
    image: project.image,
    id: project.id,
    technologies: project.technologies,
    githubLink: project.githubLink,
    siteLink: project.siteLink,
  }));
};
export default useProjects;
