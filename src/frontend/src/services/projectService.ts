import { Project } from '@lhowsam/cms/types/schema';
import groq from 'groq';
import cmsClient from '../utils/sanity';

const listAllProjects = groq`
  *[ _type == "project"] {
    title,
    _id,
    intro,
    githubUrl,
    siteUrl,
    tech,
    slug {
      current
    }
  }
`;

const getProjectQuery = groq`
*[ _type == "project" && slug.current == $slug][0] {
  ...,
}
`;

const getAllSlugs = groq`
*[ _type == "project" ] {
  slug
}
`

const projectService = {
  async getAllProjects(): Promise<
    Pick<
      Project,
      'title' | '_id' | 'intro' | 'slug' | 'siteUrl' | 'githubUrl'
    >[]
  > {
    return cmsClient.fetch(listAllProjects);
  },
  async getProject(slug: string): Promise<Project> {
    return cmsClient.fetch(getProjectQuery, {
      slug,
    });
  },
  async getProjectSlugs(): Promise<Pick<Project, 'slug'>[]> {
    return cmsClient.fetch(getAllSlugs)
  }
};

export default projectService;
