import { graphql, useStaticQuery } from 'gatsby';

const useRecentProjects = () => {
  const data = useStaticQuery(graphql`
  {
    allProjectDataJson(skip: 3) {
      edges {
        node {
          id
          title
          slug
          label
          image {
            sharp: childImageSharp {
              fluid {
                srcSet
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
export default useRecentProjects;
