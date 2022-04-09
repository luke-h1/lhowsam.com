import { Post } from '@src/types/post';
import { cmsClient } from '@src/utils/graphcms';
import { gql } from 'graphql-request';

const postsSlugsQuery = gql`
  query Posts {
    posts {
      slug
    }
  }
`;

const recentPostsQuery = gql`
  query Posts {
    posts(orderBy: id_DESC, first: 3) {
      id
      slug
      title
      intro
      date
      image {
        url
      }
    }
  }
`;

const getPostsQuery = gql`
  query Posts {
    posts(orderBy: id_DESC) {
      id
      slug
      title
      intro
      date
      image {
        url
      }
    }
  }
`;

const getPostQuery = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      id
      slug
      title
      date
      intro
      content
      image {
        url
      }
    }
  }
`;

const blogService = {
  async getPost(slug: string): Promise<{ post: Post }> {
    return cmsClient.request(getPostQuery, { slug });
  },
  async getAllPosts(): Promise<{ posts: Post[] }> {
    return cmsClient.request(getPostsQuery);
  },
  async getRecentPosts(): Promise<{ posts: Post[] }> {
    return cmsClient.request(recentPostsQuery);
  },
  async getPostsBySlug(): Promise<{ posts: { slug: string }[] }> {
    return cmsClient.request(postsSlugsQuery);
  },
};

export default blogService;
