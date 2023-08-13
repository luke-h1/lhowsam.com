import { Project } from '@frontend/types/sanity';
import groq from 'groq';
import studioClient from '../utils/sanity.client';

const slugsQuery = groq`
*[_type == "project"] {
  slug {
    current
  }
}
`;

const listAllProjects = groq`
  *[ _type == "project"] | order(order asc) {
    ...,
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
*[ _type == "project" && title in ["Storify", "My website", "Automation"]] | order(order asc) {
  ...,
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
  async getAllProjects(): Promise<Project[]> {
    return studioClient.fetch(listAllProjects);
  },
  async getProject(slug: string): Promise<Project> {
    return studioClient.fetch(getProjectQuery, {
      slug,
    });
  },
  async getRecentProjects(): Promise<Project[]> {
    return studioClient.fetch(listRecentProjects);
  },
  async getSlugs(): Promise<Project[]> {
    return studioClient.fetch(slugsQuery);
  },
};

export default projectService;
