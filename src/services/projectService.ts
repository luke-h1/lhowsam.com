import { Project } from '@src/types/project';
import { cmsClient } from '@src/utils/graphcms';
import { gql } from 'graphql-request';

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
  }
}
`;

const projectService = {
  async getAllProjects(): Promise<{ projects: Project[] }> {
    return cmsClient.request(getAllProjcets)
  },
  async getProject(slug: string): Promise<{ project: Project }> {
    return cmsClient.request(getProject, { slug })
  },
};

export default projectService;
