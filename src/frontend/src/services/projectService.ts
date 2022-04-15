import groq from 'groq';
import { Project } from 'studio/types/schema';
import cmsClient from '../utils/sanity';

const listAllProjects = groq`
  *[ _type == "project"] {
    title,
    _id,
    intro,
    githubUrl,
    siteUrl,
    slug {
      current
    },
    "tech": tech[]->title
  }
`;

const getProjectQuery = groq`
*[ _type == "project" && slug.current == $slug][0] {
  ...,
  "tech": tech[]->title
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
};

export default projectService;
