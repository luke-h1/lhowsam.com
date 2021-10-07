export interface Repo {
  id: string;
  name: string;
  url: string;
  description: string;
  owner: {
    login: string;
  };
}

export interface RepoResponse {
  user: {
    repositoriesContributedTo: {
      nodes: Repo[];
    };
    starredRepositories: {
      nodes: Repo[];
    };
  };
}
