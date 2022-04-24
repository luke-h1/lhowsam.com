import { gql } from 'graphql-request';
import { cmsClient } from '../utils/graphcms';

const getPost = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      content
      id
      intro
      slug
      tags {
        id
        title
        slug
      }
      image {
        url
      }
      title
      date
    }
  }
`;

const getPostByTagGql = gql`
  query posts($keyword: String!) {
    posts(where: { tags_some: { slug_contains: $keyword } }) {
      content
      id
      intro
      slug
      tags {
        id
        title
        slug
      }
      image {
        url
      }
      title
      date
    }
  }
`;

const getAllPostsGql = gql`
  query Posts {
    posts(orderBy: id_DESC) {
      content
      id
      intro
      slug
      tags {
        id
        title
        slug
      }
      image {
        url
      }
      title
      date
    }
  }
`;

const getPostsBySlugQuery = gql`
  query Posts {
    posts {
      slug
    }
  }
`;

export interface Post {
  id: string;
  intro: string;
  title: string;
  image: {
    url: string;
  };
  slug: string;
  tags: {
    id: string;
    title: string;
    slug: string;
  }[];
  date: string;
  content: string;
}

const postService = {
  async getPost(slug: string): Promise<Post> {
    const { post } = await cmsClient.request(getPost, { slug });
    return post;
  },

  async getAllPosts(): Promise<Post[]> {
    const { posts } = await cmsClient.request(getAllPostsGql);
    return posts;
  },
  async getPostsByTag(slug: string): Promise<Post[]> {
    const { posts } = await cmsClient.request(getPostByTagGql, {
      keyword: slug,
    });
    return posts;
  },
  async getPostsBySlug(): Promise<{ slug: string }[]> {
    const { posts } = await cmsClient.request(getPostsBySlugQuery);
    return posts;
  },
};

export default postService;
