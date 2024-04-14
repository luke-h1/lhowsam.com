import { Project } from '@frontend/types/sanity';
import { getSanityClient } from '@frontend/utils/sanity.client';
import groq from 'groq';

const slugsQuery = groq`
*[_type == "project"] {
  slug {
    current
  }
}
`;

const listAllProjects = groq`
  *[ _type == "project" && title in ["Now playing lambda", "My website", "Storify", "Infra", "Uber cost calculator"]] {
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
*[ _type == "project" && title in ["Now playing lambda", "My website", "Storify"]]  {
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
    return getSanityClient().fetch(listAllProjects);
  },
  async getProject(slug: string, draft = false): Promise<Project> {
    return getSanityClient(draft).fetch(getProjectQuery, {
      slug,
    });
  },
  async getRecentProjects(): Promise<Project[]> {
    return getSanityClient().fetch(listRecentProjects);
  },
  async getSlugs(): Promise<Project[]> {
    return getSanityClient().fetch(slugsQuery);
  },
};

export default projectService;
