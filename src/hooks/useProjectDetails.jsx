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
  }));
};
export default useProjectDetails;
