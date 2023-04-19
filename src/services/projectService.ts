import {
  Project,
  ProjectDocument,
  ProjectQueryVariables,
  ProjectsDocument,
  ProjectsQuery,
  ProjectsQueryVariables,
} from '@frontend/graphql/generated/generated';
import cmsClient from './Client/cmsClient';

const projectService = {
  async getProject(slug: string): Promise<Project> {
    const { allProject } = await cmsClient.request<
      ProjectsQuery,
      ProjectQueryVariables
    >(ProjectDocument, {
      slug: {
        eq: slug,
      },
    });

    return allProject[0];
  },

  async getProjects() {
    const { allProject } = await cmsClient.request<
      ProjectsQuery,
      ProjectsQueryVariables
    >(ProjectsDocument);

    return allProject;
  },
};

export default projectService;
