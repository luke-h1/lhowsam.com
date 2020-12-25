/* eslint-disable */
import { graphql, useStaticQuery } from 'gatsby';
const useProjects = () => {
  const data = useStaticQuery(graphql`
  query MyQuery {
    allProjectDataJson {
      edges {
        node {
          description
          githubLink
          id
          siteLink
          slug
          technology
          title
        }
      }
    }
  }  
  `)
  return data.allProjectDataJson.edges.map((project) => ({
    description: project.node.description,
    githubLink: project.node.githubLink,
    siteLink: project.node.siteLink,
    id: project.node.id,
    slug: project.node.slug,
    technology: project.node.technology,
    title: project.node.title,
  }))
}
export default useProjects;