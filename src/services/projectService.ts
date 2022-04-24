import { cmsClient } from '@src/utils/graphcms';
import { gql } from 'graphql-request';

const getRecentProjects = gql`
  query Projects {
    projects(orderBy: id_DESC, limit: 3) {
      id
      title
      slug
      intro
      tags {
        id
        title
      }
      siteUrl
      githubUrl
    }
  }
`;

const getAllProjects = gql`
  query Projects {
    projects(orderBy: id_DESC) {
      id
      title
      slug
      intro
      tags {
        id
        title
      }
      siteUrl
      githubUrl
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
      tags {
        id
        title
      }
    }
  }
`;

const getProjectsBySlugQuery = gql`
  query Projects {
    projects {
      slug
    }
  }
`;

export interface Project {
  id: string;
  slug: string;
  title: string;
  intro: string;
  content: string;
  githubUrl: string;
  siteUrl?: string;
  tags: {
    id: string;
    title: string;
  }[];
}

const projectService = {
  async getRecentProjects(): Promise<Project> {
    const { projects } = await cmsClient.request(getRecentProjects);
    return projects;
  },

  async getAllProjects(): Promise<Project[]> {
    const { projects } = await cmsClient.request(getAllProjects);
    return projects;
  },
  async getProject(slug: string): Promise<Project> {
    const { project } = await cmsClient.request(getProject, { slug });
    return project;
  },
  async getProjectsBySlug(): Promise<{ slug: string }[]> {
    const { projects } = await cmsClient.request(getProjectsBySlugQuery);
    return projects;
  },
};

export default projectService;
