import {
  HighlightedProjectsDocument,
  HighlightedProjectsQuery,
  HighlightedProjectsQueryVariables,
  ProjectDocument,
  ProjectQuery,
  ProjectQueryVariables,
  ProjectSlugsDocument,
  ProjectSlugsQuery,
  ProjectSlugsQueryVariables,
  ProjectsDocument,
  ProjectsQuery,
  ProjectsQueryVariables,
} from '@frontend/graphql/generated';
import hygraphClient from './Client/hygraphClient';

const projectService = {
  async getProject(slug: string) {
    return hygraphClient.request<ProjectQuery, ProjectQueryVariables>(
      ProjectDocument,
      {
        slug,
      },
    );
  },
  async getProjects() {
    return hygraphClient.request<ProjectsQuery, ProjectsQueryVariables>(
      ProjectsDocument,
    );
  },
  async getHighlightedProjects() {
    return hygraphClient.request<
      HighlightedProjectsQuery,
      HighlightedProjectsQueryVariables
    >(HighlightedProjectsDocument);
  },
  async getSlugs() {
    const { projects } = await hygraphClient.request<
      ProjectSlugsQuery,
      ProjectSlugsQueryVariables
    >(ProjectSlugsDocument);

    return projects;
  },
};

export default projectService;
