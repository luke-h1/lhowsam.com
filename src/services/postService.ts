import {
  PostDocument,
  PostQuery,
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
  async getPost(slug: string) {
    const { allPost } = await cmsClient.request<PostQuery, PostQueryVariables>(
      PostDocument,
      {
        slug: {
          eq: slug,
        },
      },
    );

    return {
      post: allPost[0],
    };
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
