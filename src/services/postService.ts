import {
  Post,
  PostDocument,
  PostQueryVariables,
  PostsDocument,
  PostsQuery,
  PostsQueryVariables,
  RecentPostsDocument,
  RecentPostsQuery,
  RecentPostsQueryVariables,
} from '@frontend/graphql/generated/generated';
import cmsClient from './Client/cmsClient';

const postService = {
  async getPost(slug: string): Promise<Post> {
    const { allPost } = await cmsClient.request<PostsQuery, PostQueryVariables>(
      PostDocument,
      {
        slug: {
          eq: slug,
        },
      },
    );

    return allPost[0];
  },

  async getPosts() {
    const { allPost } = await cmsClient.request<
      PostsQuery,
      PostsQueryVariables
    >(PostsDocument);

    return allPost;
  },

  async getRecentPosts() {
    const { allPost } = await cmsClient.request<
      RecentPostsQuery,
      RecentPostsQueryVariables
    >(RecentPostsDocument);

    return allPost;
  },
};

export default postService;
