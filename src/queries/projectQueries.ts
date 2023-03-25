import projectService from '@frontend/services/projectService';
import { Project } from '@frontend/types/sanity';
import { UseQueryOptions } from '@tanstack/react-query';

const projectQueries = {
  getSlugs(): UseQueryOptions<Project[]> {
    return {
      queryKey: ['projectSlugs'],
      queryFn: () => projectService.getSlugs(),
    };
  },
  getProject(slug: string): UseQueryOptions<Project> {
    return {
      queryKey: ['project', slug],
      queryFn: () => projectService.getProject(slug),
    };
  },
  getAllProjects(): UseQueryOptions<Project[]> {
    return {
      queryKey: ['projects'],
      queryFn: () => projectService.getAllProjects(),
    };
  },
  getRecentProjects(): UseQueryOptions<Project[]> {
    return {
      queryKey: ['recentProjects'],
      queryFn: () => projectService.getRecentProjects(),
    };
  },
} as const;

export default projectQueries;
