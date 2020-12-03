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
          description
        }
      }
    }
  }
  
`);

  return data.allProjectsJson.edges.map((project) => ({
    title: project.title,
    id: project.id,
    githubLink: project.githubLink,
    siteLink: project.siteLink,
    image: project.image,
    slug: project.slug,
    description: project.description,
  }));
};
export default useProjects;
