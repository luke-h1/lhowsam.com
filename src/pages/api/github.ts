import NextApiResponse, { NextApiRequest } from 'next';

const QUANTITY = 5;
const GRAPHQL_ENDPOINT = 'https://api.github.com/graphql';

export interface Repo {
  id: string;
  name: string;
  url: string;
  description: string;
  owner: {
    login: string;
  };
}

interface RepoResponseData {
  user: {
    repositoriesContributedTo: {
      nodes: Repo[];
    };
    starredRepositories: {
      nodes: Repo[];
    };
  };
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const query = `
  query {
    user (login: "luke-h1") {
      repositoriesContributedTo(last: 6, privacy: PUBLIC, includeUserRepositories: true, contributionTypes: [COMMIT, PULL_REQUEST, REPOSITORY]) {
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
      starredRepositories(last: ${QUANTITY}) {
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
  const resp = await fetch(GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
    body: JSON.stringify({ query }),
  });
  const { data }: { data: RepoResponseData } = await resp.json();

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1200, stale-while-revalidate=600',
  );

  return res.status(200).json({
    starredRepos: data.user.starredRepositories.nodes.reverse(),
    contributedRepos: data.user.repositoriesContributedTo.nodes.reverse(),
  });
}
