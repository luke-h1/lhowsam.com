import { Project } from '@src/types/project';
import { cmsClient } from '@src/utils/graphcms';
import { gql } from 'graphql-request';

const projectsSlugsQuery = gql`
  query Projects {
    projects {
      slug
    }
  }
`;

const getAllProjcets = gql`
  query Projects {
    projects(orderBy: id_DESC) {
      id
      title
      slug
      intro
      tech
      siteUrl
      githubUrl
      image {
        url
      }
    }
  }
`;

const getProject = gql`
  query Project($slug: String!) {
    project(where: { slug: $slug }) {
      id
      slug
      title
      intro
      content
      githubUrl
      siteUrl
      tech
      image {
        url
      }
    }
  }
`;

const projectService = {
  async getAllProjects(): Promise<{ projects: Project[] }> {
    return cmsClient.request(getAllProjcets);
  },
  async getProject(slug: string): Promise<{ project: Project }> {
    return cmsClient.request(getProject, { slug });
  },
  async getProjectsBySlug(): Promise<{ projects: { slug: string }[] }> {
    return cmsClient.request(projectsSlugsQuery);
  },
};

export default projectService;
