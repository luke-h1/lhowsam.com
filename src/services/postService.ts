import {
  PostDocument,
  PostQuery,
  PostQueryVariables,
  PostSlugsDocument,
  PostSlugsQuery,
  PostSlugsQueryVariables,
  PostsDocument,
  PostsQuery,
  PostsQueryVariables,
  RecentPostsDocument,
  RecentPostsQuery,
  RecentPostsQueryVariables,
} from '@frontend/graphql/generated';
import hygraphClient from './Client/hygraphClient';

const postService = {
  async getPost(slug: string) {
    return hygraphClient.request<PostQuery, PostQueryVariables>(PostDocument, {
      slug,
    });
  },
  async getPosts() {
    return hygraphClient.request<PostsQuery, PostsQueryVariables>(
      PostsDocument,
    );
  },
  async getRecentPosts() {
    return hygraphClient.request<RecentPostsQuery, RecentPostsQueryVariables>(
      RecentPostsDocument,
    );
  },
  async getSlugs() {
    const { posts } = await hygraphClient.request<
      PostSlugsQuery,
      PostSlugsQueryVariables
    >(PostSlugsDocument);

    return posts;
  },
};

export default postService;
