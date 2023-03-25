import postService from '@frontend/services/postService';
import { Post } from '@frontend/types/sanity';
import { UseQueryOptions } from '@tanstack/react-query';

const postQueries = {
  getSlugs(): UseQueryOptions<Post[]> {
    return {
      queryKey: ['postSlugs'],
      queryFn: () => postService.getSlugs(),
    };
  },
  getPost(slug: string): UseQueryOptions<Post> {
    return {
      queryKey: ['post', slug],
      queryFn: () => postService.getPost(slug),
    };
  },
  getAllPosts(): UseQueryOptions<Post[]> {
    return {
      queryKey: ['posts'],
      queryFn: () => postService.getAllPosts(),
    };
  },
  getRecentPosts(): UseQueryOptions<Post[]> {
    return {
      queryKey: ['recentPosts'],
      queryFn: () => postService.getRecentPosts(),
    };
  },
} as const;

export default postQueries;
