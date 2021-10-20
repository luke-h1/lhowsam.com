import { cmsClient } from '@src/utils/graphcms';
import { gql } from 'graphql-request';

const recentPostsQuery = gql`
query BlogPosts {
  blogPosts(orderBy: id_DESC, first: 3) {
    id
    slug
    title
    intro
    date
  }
}
`;

const getPostsQuery = gql`
query BlogPosts {
  blogPosts(orderBy: id_DESC) {
    id
    slug
    title
    intro
    date
  }
}
`;

const getPostQuery = gql`
query BlogPost($slug: String!) {
  blogPost(where: { slug: $slug }) {
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

export interface PostSlug {
  blogPost: {
    id: string;
    slug: string;
    title: string;
    date: string;
    intro: string;
    content: string;
    image: {
      url: string;
    }
  }
  source: { compiledSource: string };
}

export interface AllPosts {
  blogPosts: {
    id: string;
    slug: string;
    title: string;
    date: string;
    intro: string;
    content: string;
    image: {
      url: string;
    }
  }
  source: { compiledSource: string };
}

const blogService = {
  async getPost(slug: string): Promise<PostSlug> {
    return cmsClient.request(getPostQuery, { slug })
  },
  async getAllPosts(): Promise<any> {
    return cmsClient.request(getPostsQuery)
  },
  async getRecentPosts(): Promise<any> {
    return cmsClient.request(recentPostsQuery)
  },
};

export default blogService;
