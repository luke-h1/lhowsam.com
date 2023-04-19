import {
  ProjectDocument,
  ProjectQuery,
  ProjectQueryVariables,
  ProjectsDocument,
  ProjectsQuery,
  ProjectsQueryVariables,
} from '@frontend/graphql/generated/generated';
import cmsClient from './Client/cmsClient';

const projectService = {
  async getProject(slug: string) {
    const { allProject } = await cmsClient.request<
      ProjectQuery,
      ProjectQueryVariables
    >(ProjectDocument, {
      slug: {
        eq: slug,
      },
    });

    return allProject;
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
