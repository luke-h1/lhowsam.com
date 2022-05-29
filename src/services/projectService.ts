import { Project } from '@src/types/sanity';
import groq from 'groq';
import cmsClient from '../utils/sanity';

const slugsQuery = groq`
*[_type == "project"] {
  slug {
    current
  }
}
`;

const listAllProjects = groq`
  *[ _type == "project"] | order(order asc) {
    title,
    _id,
    intro,
    githubUrl,
    siteUrl,
    slug {
      current
    },
    tags[] -> {
    title,
    slug
  },  
}
`;

const listRecentProjects = groq`
*[ _type == "project"][1...4] | order(order asc) {
  title,
  _id,
  intro,
  githubUrl,
  siteUrl,
  slug {
    current
  },
  tags[] -> {
    title,
    slug
  },  
}
`;

const getProjectQuery = groq`
*[ _type == "project" && slug.current == $slug][0] {
  ...,
  tags[] -> {
    title,
    slug
  },  
}
`;

const projectService = {
  async getAllProjects(): Promise<
    Pick<Project, 'title' | '_id' | 'siteUrl' | 'githubUrl' | 'slug'>[]
  > {
    return cmsClient.fetch(listAllProjects);
  },
  async getProject(slug: string): Promise<Project> {
    return cmsClient.fetch(getProjectQuery, {
      slug,
    });
  },
  async getRecentProjects(): Promise<Project[]> {
    return cmsClient.fetch(listRecentProjects);
  },
  async getSlugs(): Promise<Project[]> {
    return cmsClient.fetch(slugsQuery);
  },
};

export default projectService;
