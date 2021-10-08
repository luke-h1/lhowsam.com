import githubApi from '../utils/githubApi';

export interface Repo {
  data: {
    id: string;
    name: string;
    url: string;
    description: string;
    owner: {
      login: string;
    };
  };
}

interface RepoResponse {
  data: {
    user: {
      repositoriesContributedTo: {
        nodes: Repo[];
      };
      starredRepositories: {
        nodes: Repo[];
      };
    };
  };
}

const githubService = {
  fetchData: async (): Promise<RepoResponse> => {
    const query = `
  query {
    user (login: "luke-h1") {
      repositoriesContributedTo(last: 5, privacy: PUBLIC, includeUserRepositories: true, contributionTypes: [COMMIT, PULL_REQUEST, REPOSITORY]) {
        nodes {
          id
          name
          url
          description
          owner {
            login
          }
        }
      }
      starredRepositories(last: 5) {
        nodes {
          id
          name
          description
          url
          owner {
            login
          }
        }
      }
    }
  }`;
    const response = await githubApi.post('/graphql', { query });

    const { data } = response;
    return data as unknown as RepoResponse;
  },
};
export default githubService;
