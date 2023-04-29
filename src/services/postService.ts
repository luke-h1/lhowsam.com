import {
  Post,
  PostDocument,
  PostQuery,
  PostQueryVariables,
  PostSlugsDocument,
  PostSlugsQuery,
  PostSlugsQueryVariables,
  PostsDocument,
  RecentPostsDocument,
} from '@frontend/graphql/generated/generated';
import hygraphClient from './Client/hygraphClient';

const postService = {
  async getSlugs() {
    const { posts } = await hygraphClient.request<
      PostSlugsQuery,
      PostSlugsQueryVariables
    >(PostSlugsDocument);

    return posts;
  },

  async getPost(slug: string) {
    const { post } = await hygraphClient.request<PostQuery, PostQueryVariables>(
      PostDocument,
      {
        slug,
      },
    );

    return post;
  },

  async getPosts(): Promise<Post[]> {
    const { posts } = await hygraphClient.request<{ posts: Post[] }>(
      PostsDocument,
    );

    return posts;
  },

  async getRecentPosts(): Promise<Post[]> {
    const { posts } = await hygraphClient.request<{ posts: Post[] }>(
      RecentPostsDocument,
    );

    return posts;
  },
};
export default postService;
