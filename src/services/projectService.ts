import { Project, Slug } from '@frontend/types/sanity';
import { getSanityClient } from '@frontend/utils/sanity.client';
import { sanityFetch } from '@frontend/utils/sanity.live';
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
  async getAllProjects(draft = false): Promise<Project[]> {
    if (draft) {
      return getSanityClient(draft).fetch(listAllProjects);
    }
    return getSanityClient().fetch(listAllProjects);
  },
  async getProject(slug: string, draft = false): Promise<Project> {
    if (draft) {
      return getSanityClient(draft).fetch(getProjectQuery, { slug });
    }
    const result = await sanityFetch({
      query: getProjectQuery,
      params: { slug },
    });
    return result.data;
  },
  async getRecentProjects(draft = false): Promise<Project[]> {
    if (draft) {
      return getSanityClient(draft).fetch(listRecentProjects);
    }
    return getSanityClient().fetch(listRecentProjects);
  },
  async getSlugs(draft = false): Promise<Slug[]> {
    if (draft) {
      return getSanityClient(draft).fetch(slugsQuery);
    }
    return getSanityClient().fetch(slugsQuery);
  },
};

export default projectService;
