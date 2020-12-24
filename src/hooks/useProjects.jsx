/* eslint-disable */
import { graphql, useStaticQuery } from 'gatsby';
const useProjects = () => {
  const data = useStaticQuery(graphql`
  query MyQuery {
    allProjectDataJson {
      edges {
        node {
          description
          githbLink
          id
          siteLink
          slug
          technology
          title
          excerpt
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
    excerpt: project.node.excerpt,
  }))
}
export default useProjects;