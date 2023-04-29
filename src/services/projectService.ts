import {
  Project,
  ProjectDocument,
  ProjectQuery,
  ProjectQueryVariables,
  ProjectSlugsDocument,
  ProjectSlugsQuery,
  ProjectSlugsQueryVariables,
  ProjectsDocument,
  ProjectsQuery,
  ProjectsQueryVariables,
} from '@frontend/graphql/generated/generated';
import hygraphClient from './Client/hygraphClient';

const projectService = {
  async getSlugs() {
    const { projects } = await hygraphClient.request<
      ProjectSlugsQuery,
      ProjectSlugsQueryVariables
    >(ProjectSlugsDocument);

    return projects;
  },

  async getProject(slug: string): Promise<Project> {
    const { project } = await hygraphClient.request<
      ProjectQuery,
      ProjectQueryVariables
    >(ProjectDocument, {
      slug,
    });

    // TODO: Fix this type error
    return project as Project;
  },

  async getProjects(): Promise<Project[]> {
    const { projects } = await hygraphClient.request<
      ProjectsQuery,
      ProjectsQueryVariables
    >(ProjectsDocument);

    // TODO Fix this type error
    return projects as Project[];
  },
};

export default projectService;
